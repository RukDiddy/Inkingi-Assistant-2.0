/* INKINGI ASSISTANT — AI chatbot proxy (Cloudflare Worker)
   ============================================================
   WHY THIS EXISTS
   GitHub Pages is static: any API key placed in the site's JavaScript is
   public. This Worker holds the key server-side and proxies chat requests.

   DEPLOYMENT (one time, ~10 minutes, done by you or RSSB IT):
   1. Create a free account at dash.cloudflare.com
   2. Workers & Pages → Create → Worker → paste this entire file → Deploy
   3. Worker → Settings → Variables → add a SECRET named ANTHROPIC_API_KEY
      (get the key from console.anthropic.com — never put it in the site code)
   4. Copy the Worker URL (e.g. https://inkingi-ai.YOURNAME.workers.dev)
   5. In app.js, set:  const AI_ENDPOINT = "https://inkingi-ai.YOURNAME.workers.dev";
      (currently const AI_ENDPOINT = "" — empty means keyword matcher only)
   6. Replace app.js in the GitHub repo. Done — no other changes needed.

   SECURITY NOTES
   - ALLOWED_ORIGIN restricts requests to your GitHub Pages domain. Change it
     to your real URL before deploying.
   - The Worker only forwards {question, lang} — nothing else reaches the API.
*/

const ALLOWED_ORIGIN = "https://YOURUSERNAME.github.io"; // <-- change this
const MODEL = "claude-haiku-4-5-20251001"; // fast + inexpensive; fine for Q&A

const SYSTEM_PROMPT = `You are INKINGI, the RSSB Oracle HCM assistant.
Answer questions about RSSB HR procedures and the Internal Rules Governing
RSSB Employees. Answer in the same language as the question (English or
Kinyarwanda). Be concise and step-oriented. If the question is about salary
amounts or allowance figures, direct the person to HR Operations
(rssbhr@rssb.rw / hroperations@rssb.rw) instead of guessing. If you are not
sure, say so and point to the official manuals or HR.`;

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST")
      return new Response("POST only", { status: 405, headers: cors });

    let body;
    try { body = await request.json(); }
    catch { return new Response(JSON.stringify({ error: "bad json" }), { status: 400, headers: cors }); }

    const question = String(body.question || "").slice(0, 2000);
    if (!question)
      return new Response(JSON.stringify({ error: "empty question" }), { status: 400, headers: cors });

    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: question }],
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      return new Response(JSON.stringify({ error: "upstream", detail }), { status: 502, headers: cors });
    }
    const data = await r.json();
    const answer = (data.content || []).filter(c => c.type === "text").map(c => c.text).join("\n");
    return new Response(JSON.stringify({ answer }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  },
};
