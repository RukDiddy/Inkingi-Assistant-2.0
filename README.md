# INKINGI ASSISTANT

**Your Oracle HCM Guide & Knowledge Companion** — RSSB (Rwanda Social Security Board)

A fully static, bilingual (English / Kinyarwanda) learning portal for RSSB's Oracle HCM system. No server, no database, no build step — it runs anywhere that can serve files, including GitHub Pages.

## What's inside

| File / folder | Purpose |
|---|---|
| `index.html` | App shell (single-page app, hash routing) |
| `app.js` | Router, search engine, chatbot, article renderer, lightbox, manual browser, EN/RW i18n |
| `kb.js` | Knowledge base: 23 articles mapped to exact manual pages, Kinyarwanda synonym map |
| `styles.css` | RSSB brand system (Navy `#0C1530`, Blue `#213A8F`, Gold `#F2B441`) + dark mode |
| `images-corehr.zip` | All 117 Core HR manual pages (unpacked in the browser) |
| `images-pip.zip` | All 73 PIP manual pages (unpacked in the browser) |
| `jszip.min.js` | Local copy of JSZip — unpacks the image bundles client-side |
| `check.html` | Deployment self-test — verifies every file and both image bundles |
| `teams/manifest.json` | Microsoft Teams personal-tab manifest template (see below) |

## Features

- **Ask Assistant** — chatbot that understands English *and* Kinyarwanda ("Nigute nsezera mu kazi?" → Voluntary Resignation) via a synonym-mapping keyword engine. Answers with navigation path, steps, and a link to the full guide with screenshots.
- **23 knowledge articles** — each with purpose, Oracle navigation trail, numbered steps (EN + RW), the exact manual screenshot pages, and related topics.
- **Live search** on the home page (same engine as the chatbot).
- **Screenshot lightbox** with keyboard navigation (←/→/Esc).
- **Full manual browser** — flip through all 190 pages of both manuals.
- **Kinyarwanda FAQ**, language toggle (persisted), dark mode (persisted), responsive/mobile layout.

## Deploy to GitHub Pages (5 minutes)

1. Create a repository named `inkingi-assistant` on github.com (Public).
2. From this folder, run:

```bash
git init
git add .
git commit -m "INKINGI ASSISTANT v4"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/inkingi-assistant.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.

> ✅ **GitHub's web "Upload files" page now works in ONE go.** The screenshots are packed into `images-corehr.zip` and `images-pip.zip`, so the whole site is only ~13 files (~11 MB) — far below the web uploader's ~100-file limit. Select ALL files in the folder, drag them in, commit once.
>
> After deploying, open `https://YOURUSERNAME.github.io/inkingi-assistant/check.html` — it verifies every file including both image bundles.
4. After ~1 minute the site is live at:

```
https://YOURUSERNAME.github.io/inkingi-assistant
```

The `.nojekyll` file is included so GitHub serves everything as-is.

> Repo size is ~12 MB (well under GitHub's limits). All paths are relative, so it also works from a subfolder, an intranet server, SharePoint, or opened locally.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

(Double-clicking `index.html` will show the UI but **not** the screenshots — browsers block zip loading on `file://`. Use the one-line server above, or the live GitHub Pages site.)

## Microsoft Teams app (next phase)

GitHub Pages gives you the HTTPS URL Teams requires. To ship as a Teams personal tab:

1. Deploy the site (above) and note the URL.
2. Edit `teams/manifest.json`: replace `YOUR-GITHUB-PAGES-URL` and generate a new GUID for `id` (e.g. at guidgenerator.com).
3. Add two icons in `teams/`: `color.png` (192×192) and `outline.png` (32×32) — use the RSSB logo.
4. Zip `manifest.json` + the two icons (files at zip root, not in a folder).
5. In Teams: **Apps → Manage your apps → Upload an app → Upload a custom app**, or submit through your RSSB Teams admin for org-wide rollout.

The same knowledge base powers both, exactly as specified in the project handover.

## Updating the knowledge base

All content lives in `kb.js`. Each article is one object:

```js
{
  id: "bank-details", cat: "corehr", icon: "🏦",
  title: { en: "...", rw: "..." },
  purpose: { en: "...", rw: "..." },
  nav: ["Me", "Pay", "Payment Methods"],
  steps: { en: [...], rw: [...] },
  keywords: ["bank", "banki", ...],
  pages: { manual: "corehr", from: 46, to: 50 },  // -> img/corehr-046.jpg … img/corehr-050.jpg
  related: ["employment-info"]
}
```

Add an object, and it automatically appears in the sidebar, home grid, search, and chatbot. Add Kinyarwanda words to `RW_SYNONYMS` to teach the chatbot new vocabulary.

## Known limits (honest notes)

- The chatbot is a **keyword/synonym matcher**, not an AI model. A static GitHub Pages site cannot securely call an LLM API (any API key in client code would be public). If AI answers are required later, add a small backend (Azure Function / Cloudflare Worker) that proxies the model call — the front end is already structured to swap the `searchKB()` call for a fetch.
- Screenshots are streamed out of the two zip bundles in the browser (JSZip, bundled locally — no CDN dependency). First open of a manual downloads its bundle once (~4–7 MB), then it is cached.
- Manual screenshots are full page exports of the official PDFs; the manuals themselves are in English, so screenshots are English. All UI, article summaries, FAQs and steps are bilingual.

---
Need additional support? **HR Operations Office — RSSB**
