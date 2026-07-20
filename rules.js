/* INKINGI ASSISTANT — Internal Rules Governing RSSB Employees
   Source: "Internal Rules Governing RSSB Employees" (Revised), adopted by the
   RSSB Board of Directors, effective 31/05/2024 (Article 161).
   Summaries only — the official signed document prevails. Appendix salary and
   allowance tables are intentionally NOT published here; consult HR. */

const RULES = [
{
  id: "r-general", icon: "📖",
  title: { en: "General Provisions & RSSB Obligations", rw: "Ingingo rusange n'inshingano za RSSB" },
  arts: "Articles 1–8",
  summary: {
    en: "Scope of the rules and what RSSB owes its employees: fair treatment, protection, and career security.",
    rw: "Aho amabwiriza akoreshwa n'ibyo RSSB igomba abakozi bayo: ubutabera, uburinzi n'umutekano w'umwuga."
  },
  points: {
    en: [
      "The rules apply to RSSB staff employed on a permanent basis; contractual staff follow the Labour Law unless stated otherwise (Art. 3).",
      "RSSB must act with fairness and impartiality and does not discriminate on ethnic, regional, social origin, colour, age, marital status, gender, political, philosophical or religious grounds (Art. 5).",
      "RSSB protects employees against threats, insults, violence and slander linked to their duties, and safeguards the privacy of personal information (Art. 6).",
      "Every employee has an administrative file they may access, and may request corrections or copies, including through a lawyer or trade-union adviser (Art. 7).",
      "An employee is recruited for a specific job position and remains attached to it, except for promotion or redeployment; they remain free to apply to other vacant posts (Art. 8)."
    ],
    rw: [
      "Amabwiriza areba abakozi ba RSSB bahoraho; abakozi b'amasezerano bagengwa n'itegeko rigenga umurimo (Ing. 3).",
      "RSSB ntivangura ku moko, aho umuntu akomoka, ibara, imyaka, irangamimerere, igitsina, politiki cyangwa idini (Ing. 5).",
      "RSSB irinda abakozi iterabwoba, gutukwa n'ihohoterwa bijyanye n'akazi, ikanarinda ibanga ry'amakuru yabo bwite (Ing. 6).",
      "Buri mukozi afite dosiye ye kandi afite uburenganzira bwo kuyireba no gusaba ko ikosorwa (Ing. 7).",
      "Umukozi ahabwa umwanya w'akazi wihariye ariko afite uburenganzira bwo gusaba indi myanya ipiganirwa (Ing. 8)."
    ]
  },
  keywords: ["scope","rules","fairness","discrimination","protection","administrative file","career","obligations","internal rules","amabwiriza","uburenganzira","dosiye"]
},
{
  id: "r-health", icon: "🦺",
  title: { en: "Occupational Health & Safety", rw: "Ubuzima n'umutekano ku kazi" },
  arts: "Articles 9–17",
  summary: {
    en: "Workplace safety obligations, the Health & Safety Committee, and how accidents are declared.",
    rw: "Umutekano ku kazi, Komite y'ubuzima n'umutekano, n'uko impanuka zimenyekanishwa."
  },
  points: {
    en: [
      "RSSB must ensure health, safety and welfare in the workplace; employees never pay for safety measures (Art. 9).",
      "An Occupational Safety and Health Committee of 7 members (staff delegate chairperson, trade-union vice-chair, and others) serves a 2-year mandate renewable once (Arts. 10–11).",
      "The Committee investigates accidents and occupational diseases, submits statistics and semester reports to the CEO, and advises on training and first-aid (Art. 12).",
      "Occupational accidents, disease or death are declared to the Occupational Hazards Scheme and the Labour Inspectorate; if RSSB fails to declare, the victim or their beneficiary may do so (Art. 15).",
      "The Committee meets at least once per quarter; decisions are taken by consensus (Art. 17)."
    ],
    rw: [
      "RSSB igomba kubungabunga ubuzima n'umutekano w'abakozi; umukozi ntiyishyura ibijyanye n'umutekano (Ing. 9).",
      "Hashyirwaho Komite y'umutekano igizwe n'abantu 7, manda y'imyaka 2 ishobora kongerwa rimwe (Ing. 10–11).",
      "Komite ikora iperereza ku mpanuka, igatanga raporo kuri CEO buri gihembwe (Ing. 12, 17).",
      "Impanuka, indwara cyangwa urupfu bikomoka ku kazi bimenyeshwa inzego zibishinzwe (Ing. 15)."
    ]
  },
  keywords: ["safety","health","accident","committee","occupational","first aid","fire","hazard","umutekano","impanuka","ubuzima"]
},
{
  id: "r-recruitment", icon: "📝",
  title: { en: "Recruitment, Probation & Confirmation", rw: "Gushaka abakozi, ikigeragezo no kwemezwa" },
  arts: "Articles 18–43",
  summary: {
    en: "How RSSB recruits: e-recruitment competition, exams, pass marks, appointment, induction and probation.",
    rw: "Uko RSSB iha akazi: ipiganwa rya e-recruitment, ibizamini, gushyirwa mu mwanya n'igihe cy'ikigeragezo."
  },
  points: {
    en: [
      "Recruitment requires a vacant, budgeted post; it is done by competition through RSSB e-recruitment, with internal or direct recruitment allowed for rare/exceptional skills or twice-failed adverts (Arts. 18–19).",
      "Candidates must be 18+, with no prison sentence of 6+ months (unless rehabilitated), no dismissal from public service, and not blacklisted (Art. 23).",
      "A vacancy is announced at least 7 calendar days before the application deadline (Art. 24).",
      "Exams are anonymous (coded scripts); passing between multiple exams requires 60%, and the final pass mark is 70% — otherwise the post is re-advertised (Arts. 29, 31).",
      "Results are notified within 13 working days; complaints go through the Advisory Recruitment Committee without pausing the process (Arts. 30, 32).",
      "New employees receive an induction program and undergo a 3-month probation, renewable once; unjustified absence over 15 consecutive days extends it (Arts. 41–42).",
      "After probation the supervisor reports within 10 days before expiry; if no decision is notified within 30 days after expiry, the employee is considered confirmed (Art. 43)."
    ],
    rw: [
      "Akazi gahabwa hakoreshejwe ipiganwa muri e-recruitment; gushaka utanyuze mu ipiganwa byemerwa ku bumenyi budasanzwe (Ing. 18–19).",
      "Usaba akazi agomba kuba afite nibura imyaka 18 kandi atarigeze akatirwa igifungo kingana cyangwa kirenze amezi 6 (Ing. 23).",
      "Itangazo ry'umwanya rimara nibura iminsi 7 mbere y'itariki ntarengwa (Ing. 24).",
      "Amanota yo gutsinda: 60% hagati y'ibizamini, 70% kugira ngo uhabwe akazi (Ing. 31).",
      "Umukozi mushya akora ikigeragezo cy'amezi 3 gishobora kongerwa rimwe (Ing. 42).",
      "Iyo umukozi atamenyeshejwe icyemezo mu minsi 30 nyuma y'ikigeragezo, afatwa nk'uwemejwe (Ing. 43)."
    ]
  },
  keywords: ["recruitment","hiring","vacancy","exam","pass mark","probation","confirmation","induction","apply","job","candidate","interview","akazi","ipiganwa","ikigeragezo","gusaba akazi"]
},
{
  id: "r-performance", icon: "📊",
  title: { en: "Performance Management & Promotion", rw: "Imicungire y'imikorere no kuzamurwa mu ntera" },
  arts: "Articles 44–53",
  summary: {
    en: "Annual appraisal, grading bands, consequences of poor performance, appeals, and horizontal/vertical promotion.",
    rw: "Isuzuma ry'umwaka, amanota, ingaruka z'imikorere mibi, ubujurire no kuzamurwa mu ntera."
  },
  points: {
    en: [
      "Every employee signs an annual performance contract via the e-performance system; contracts are signed by 31 July and appraisal is done by 15 July (Arts. 44, 49).",
      "Grades: Excellent ≥90%, Very Good 80–89%, Good 70–79%, Insufficient 60–69%. Below 60% the employee is automatically relieved without terminal benefits (Art. 46).",
      "The CEO may dismiss a poorly performing employee based on the appraisal report (Art. 47).",
      "An unsatisfied employee may request a performance dialogue with the supervisor, then escalate to the CEO or delegates (Art. 48).",
      "Horizontal step promotion: grade 1 or 2 for two consecutive periods, or grade 3 for three consecutive periods; grade 4 is never promoted (Art. 51).",
      "Vertical promotion requires a vacant post and goes through competition or management initiative; salary can never decrease as a result (Arts. 52–53)."
    ],
    rw: [
      "Buri mukozi asinya amasezerano y'imikorere bitarenze 31 Nyakanga; isuzuma rikorwa bitarenze 15 Nyakanga (Ing. 44, 49).",
      "Amanota: Excellent ≥90%, Very Good 80–89%, Good 70–79%, Insufficient 60–69%. Munsi ya 60% umukozi avanwa ku murimo nta mpozamarira (Ing. 46).",
      "Utanyuzwe n'isuzuma abanza kuganira n'umuyobozi we, hanyuma akajuririra CEO (Ing. 48).",
      "Kuzamurwa mu ntera bisaba amanota meza mu bihe bikurikirana (Ing. 51–52)."
    ]
  },
  keywords: ["performance","appraisal","evaluation","grading","excellent","promotion","poor performance","appeal","contract","score","isuzuma","imikorere","kuzamurwa","amanota"]
},
{
  id: "r-position", icon: "🧭",
  title: { en: "Statutory Position, Secondment & Transfers", rw: "Imiterere y'umukozi, gutizwa no kwimurirwa" },
  arts: "Articles 54–69",
  summary: {
    en: "Active service, secondment, suspension, leave of absence, and how employee-initiated transfers work.",
    rw: "Umukozi uri mu kazi, utijwe, uhagaritswe, uri mu kiruhuko kidasanzwe, n'uko kwimurirwa bikorwa."
  },
  points: {
    en: [
      "An employee may be in active service, on secondment, placed at another organization's disposal, suspended, or on leave of absence for a specific period (Art. 54).",
      "Secondment is RSSB-initiated, maximum 12 months renewable, paid by the receiving institution (Art. 56).",
      "Leave of absence for a specific period: up to 3 months to care for a sick spouse/child/parent, or 1 month to accompany a spouse abroad — unpaid; no reply within 15 days means granted (Arts. 64–65).",
      "RSSB may transfer an employee for job rotation or competence development; a transfer beyond 30 km triggers a relocation allowance, 15 working days' notice, and 2 days of relocation leave (Art. 66).",
      "Employees may request their own transfer; priority order: health, family, capacity development, other justified reasons — with first-applied preference and possible mutual workstation swaps (Arts. 67–68).",
      "Transfer requests are answered by 15 December or 15 June of the financial year (Art. 69)."
    ],
    rw: [
      "Umukozi ashobora kuba mu kazi, atijwe, ahagaritswe cyangwa ari mu kiruhuko kidasanzwe (Ing. 54).",
      "Gutizwa bitangizwa na RSSB, ntibirenza amezi 12 ashobora kongerwa (Ing. 56).",
      "Ikiruhuko kidasanzwe: kugeza ku mezi 3 yo kurwaza uwo mwashakanye, umwana cyangwa umubyeyi — nta mushahara (Ing. 64).",
      "Kwimurirwa hejuru ya km 30 bitanga amafaranga yo kwimuka n'integuza y'iminsi 15 y'akazi (Ing. 66).",
      "Gusaba kwimurirwa: ubuzima bubanza, hagakurikira impamvu z'umuryango (Ing. 68). Ibisubizo bitangwa bitarenze 15 Ukuboza cyangwa 15 Kamena (Ing. 69)."
    ]
  },
  keywords: ["transfer","secondment","suspension","leave of absence","relocation","workstation","rotation","swap","kwimurirwa","gutizwa","guhagarikwa"]
},
{
  id: "r-salary", icon: "💰",
  title: { en: "Salaries, Allowances & Benefits", rw: "Imishahara n'ibindi bigenerwa umukozi" },
  arts: "Articles 70–82",
  summary: {
    en: "Salary rules, deductions, acting allowance, 13th month, fidelity bonus, salary advance, mortgage scheme and death allowances. Specific amounts live in the official appendices — contact HR.",
    rw: "Amategeko y'umushahara, uwungirije, umushahara wa 13, ibihembo by'ubudahemuka n'inguzanyo. Imibare yihariye iri mu mugereka wemewe — baza HR."
  },
  points: {
    en: [
      "Salary follows job position, grade and step; it is paid at the end of each month, and total deductions can never exceed half of net salary (Arts. 70–72).",
      "Acting in a vacant position beyond 30 days earns the acting position's salary and benefits from day 31; acting normally cannot exceed 6 months (Art. 74).",
      "Unclaimed salary/allowances prescribe after 2 years unless computed, acknowledged, un-notified, or in litigation (Art. 75).",
      "A 13th-month salary may be paid based on institutional performance and Board approval, for staff who served the full fiscal year (Art. 78).",
      "Fidelity bonus: 1 gross monthly salary at 10 years, 2 at 20, 4 at 30, 6 at 40 years of service (Art. 79).",
      "Salary advance up to 6 months' gross salary after 12 months of service, reimbursable within 24 months (Art. 80).",
      "A mortgage scheme with partner banks covers loan interest for eligible permanent staff (Art. 77).",
      "Funeral expenses are contributed for an employee, spouse or direct descendant; death in service grants heirs a lump sum of 6 times the last gross monthly salary (Arts. 81–82)."
    ],
    rw: [
      "Umushahara ugendera ku mwanya, urwego n'intera; wishyurwa buri mpera z'ukwezi kandi ibikurwaho ntibirenza kimwe cya kabiri (Ing. 70–72).",
      "Uwungirije umwanya arengeje iminsi 30 ahabwa umushahara w'uwo mwanya guhera ku munsi wa 31 (Ing. 74).",
      "Umushahara wa 13 ushobora gutangwa hashingiwe ku musaruro w'ikigo (Ing. 78).",
      "Ibihembo by'ubudahemuka: umushahara 1 ku myaka 10, 2 ku 20, 4 ku 30, 6 ku 40 (Ing. 79).",
      "Avansi y'umushahara igera ku mezi 6 y'umushahara mbumbe, yishyurwa mu mezi 24 (Ing. 80).",
      "Iyo umukozi apfuye akiri mu kazi, abazungura bahabwa inshuro 6 z'umushahara mbumbe wa nyuma (Ing. 82)."
    ]
  },
  keywords: ["salary","pay","allowance","13th month","thirteenth","bonus","fidelity","advance","mortgage","deduction","acting","funeral","death","umushahara","avansi","ibihembo"]
},
{
  id: "r-leave", icon: "🌴",
  title: { en: "Leaves (Annual, Sick, Maternity & More)", rw: "Ibiruhuko (umwaka, uburwayi, kubyara n'ibindi)" },
  arts: "Articles 83–95",
  summary: {
    en: "All leave entitlements: annual, sick, incidental, authorized absence, maternity and study leave.",
    rw: "Ibiruhuko byose: icy'umwaka, uburwayi, ibyihutirwa, kubyara n'icyo kwiga."
  },
  points: {
    en: [
      "Annual leave: 22 working days, +1 day per 3 completed years, capped at 30; requested via the e-leave system at least 10 working days ahead; no supervisor feedback within 5 working days before start means granted (Arts. 83–84).",
      "Untaken leave is not compensated unless you leave the institution; work-prevented leave can be carried to Q1 of the next fiscal year with approval (Arts. 84–85).",
      "Sick leave: short-term up to 1 month (1 doctor); long-term up to 6 months at full salary, certified by 3 licensed doctors; failure to resume after 6 months leads to automatic removal. Family-based sick leave: up to 15 working days for spouse, parents or children (Art. 86).",
      "Incidental leave examples: civil marriage 2 days; wife's delivery 4 days (+5 for complications, +1 month if the wife dies leaving a newborn); death of spouse 7 days; child 5 days; parent or in-law 4 days; sibling 4 days; grandparent 3 days; 30 km+ transfer 2 days (Art. 87).",
      "Authorized absence: max 1 day per request, duly justified, max 10 days per year (Art. 88).",
      "Maternity leave: 12 consecutive weeks, at least 2 of which can be taken before delivery; +1 month paid for delivery complications. Still-birth from 20 weeks: 8 weeks' leave. Premature birth: paid leave until the 9-month term, then the full 12 weeks (Arts. 89–92).",
      "Breastfeeding: 1 hour per day for 12 months after birth (2 hours for multiple births), paid (Art. 93).",
      "Study leave: 5 working days per semester for exams, requested 2 weeks ahead; unpaid study leave for non-job-related studies requires 2 years of service (Art. 95)."
    ],
    rw: [
      "Ikiruhuko cy'umwaka: iminsi 22 y'akazi, wiyongeraho umunsi 1 kuri buri myaka 3, ntikirenza iminsi 30; gisabwa muri e-leave nibura iminsi 10 mbere (Ing. 83).",
      "Ikiruhuko cy'uburwayi: kugeza ku kwezi 1 (muganga 1); kirekire kugeza ku mezi 6 ku mushahara wuzuye byemejwe n'abaganga 3 (Ing. 86).",
      "Ikiruhuko cy'ibyihutirwa: gushyingirwa iminsi 2; umugore kubyara iminsi 4; gupfusha uwo mwashakanye iminsi 7; umwana iminsi 5; umubyeyi iminsi 4 (Ing. 87).",
      "Ikiruhuko cyo kubyara: ibyumweru 12 bikurikirana; habaho n'ukwezi kw'inyongera ku bibazo byo kubyara (Ing. 89).",
      "Konsa: isaha 1 ku munsi mu mezi 12 nyuma yo kubyara (amasaha 2 ku mpanga), irahemberwa (Ing. 93).",
      "Ikiruhuko cyo kwiga: iminsi 5 y'akazi buri gihembwe cyo gukora ibizamini (Ing. 95)."
    ]
  },
  keywords: ["leave","annual leave","vacation","holiday","sick","maternity","paternity","incidental","absence","study leave","breastfeeding","miscarriage","premature","ikiruhuko","kubyara","uburwayi","konsa","kuruhuka"]
},
{
  id: "r-discipline", icon: "⚖️",
  title: { en: "Disciplinary Faults, Sanctions & Appeals", rw: "Amakosa, ibihano n'ubujurire" },
  arts: "Articles 96–123",
  summary: {
    en: "The two sanction categories, which faults trigger which sanction, the disciplinary procedure, and your rights of defense and appeal.",
    rw: "Ibyiciro by'ibihano, amakosa ajyana na buri gihano, uburyo bukurikizwa n'uburenganzira bwo kwiregura no kujurira."
  },
  points: {
    en: [
      "Category 1 sanctions: warning and reprimand. Category 2: suspension up to 3 months without pay, and dismissal (Art. 97).",
      "Warning-level faults include unjustified lateness, 1-day absence, negligence, or lies about work (Art. 98). Reprimand-level includes insubordination, misuse of equipment, or smoking/drinking at work (Art. 99).",
      "Suspension-level faults include 2–6 days of unauthorized absence, insults, conflicts of interest, disclosing professional secrets, or being under the influence on duty (Art. 100).",
      "Dismissal-level faults include theft, fraud, falsified credentials, diverting social security benefits, sexual harassment, gender-based violence, 7+ days of abandonment, altering beneficiary data, or a 6-month+ prison sentence (Art. 101).",
      "No sanction may be imposed without the opportunity to defend yourself; you have 5 working days to respond to charges, and silence from the supervisor for 10 working days means your explanation is accepted (Arts. 103, 108).",
      "The Internal Disciplinary Committee investigates (60 days for category 1, 90 for category 2); the CEO notifies the decision within 10 working days (Art. 109).",
      "Appeals: first level to the Chief Human Capital Officer within 10 calendar days (answered in 30); second level to the CEO within 10 days (decided in 30) (Arts. 119–121).",
      "Faults prescribe after 1 year (category 1) or 2 years (category 2) from when the institution became aware (Art. 122)."
    ],
    rw: [
      "Icyiciro cya 1: kwihanangirizwa no gukangarwa. Icyiciro cya 2: guhagarikwa amezi atarenze 3 nta mushahara, no kwirukanwa (Ing. 97).",
      "Amakosa ahanishwa kwirukanwa harimo: ubujura, uburiganya, gusambanya ku gahato, ihohoterwa rishingiye ku gitsina, gusiba iminsi 7 ikurikirana (Ing. 101).",
      "Nta gihano gitangwa umukozi atahawe umwanya wo kwiregura; afite iminsi 5 y'akazi yo gusubiza (Ing. 103, 108).",
      "Ubujurire: urwego rwa mbere kuri Chief Human Capital mu minsi 10; urwa kabiri kuri CEO mu minsi 10 (Ing. 119–121)."
    ]
  },
  keywords: ["discipline","sanction","warning","abandon","abandonment","absent","unauthorized absence","reprimand","suspension","dismissal","fault","misconduct","appeal","defense","harassment","theft","fraud","igihano","ikosa","kwirukanwa","ubujurire","kwiregura"]
},
{
  id: "r-termination", icon: "🚪",
  title: { en: "Termination, Resignation & Retirement", rw: "Gusoza umurimo, gusezera n'izabukuru" },
  arts: "Articles 124–140",
  summary: {
    en: "How service ends: resignation, automatic removal, dismissal, retirement, the early exit program, and termination benefits.",
    rw: "Uko umurimo urangira: gusezera, kuvanwa ku murimo, kwirukanwa, izabukuru n'impozamarira."
  },
  points: {
    en: [
      "Service ends by leave of absence for a non-specific period, deliberate resignation, automatic removal, dismissal, retirement, or death (Art. 124).",
      "Deliberate resignation is written to the CEO; you keep working until notified, and no written reply within 15 calendar days means the resignation is accepted (Arts. 127–128).",
      "Automatic removal applies after failed probation, 6+ months provisional detention, inability to resume after long-term sick leave, incompetence in appraisal, or suspension exceeding 6 months (Art. 129).",
      "Termination benefits (based on last gross salary): 4 months for 1–5 years of service, 5 for 5–10, 6 for 10–15, 7 for 15–20, 8 for 20–25, 9 for 25–30, 12 for 30+ years (Art. 133).",
      "The Early Voluntary Exit Program adds 4 months' gross salary on top of termination benefits plus up to 12 months of RAMA family cover, for staff with 15+ years of pension contributions (Art. 134).",
      "Normal retirement age is 65; from 60 with 15 years of contributions an employee may apply for retirement (Art. 137).",
      "Every departing employee receives a Certificate of Service stating positions held and dates (Art. 140)."
    ],
    rw: [
      "Umurimo urangira ku gusezera ku bushake, kuvanwa ku murimo, kwirukanwa, izabukuru cyangwa urupfu (Ing. 124).",
      "Gusezera byandikirwa CEO; iyo nta gisubizo mu minsi 15, gusezera bifatwa nk'ibyemewe (Ing. 128).",
      "Impozamarira: amezi 4 ku myaka 1–5, 5 ku 5–10, 6 ku 10–15, 7 ku 15–20, 8 ku 20–25, 9 ku 25–30, 12 ku myaka 30+ (Ing. 133).",
      "Izabukuru: imyaka 65; guhera ku myaka 60 hamwe n'imyaka 15 y'imisanzu birashoboka gusaba (Ing. 137).",
      "Buri mukozi usezeye ahabwa icyemezo cy'imirimo yakoze (Ing. 140)."
    ]
  },
  keywords: ["termination","resignation","resign","retire","retirement","dismissal","removal","benefits","exit","early exit","pension","certificate of service","gusezera","izabukuru","impozamarira","gusoza"]
},
{
  id: "r-training", icon: "🎓",
  title: { en: "Trainings & Study Bonds", rw: "Amahugurwa n'amasezerano yo kwiga" },
  arts: "Articles 141–152",
  summary: {
    en: "Training types, selection criteria, the service bond after sponsored training, and reimbursement rules.",
    rw: "Ubwoko bw'amahugurwa, uko abitabira batoranywa, n'igihe cyo gukorera ikigo nyuma y'amahugurwa."
  },
  points: {
    en: [
      "Short-term training lasts under 6 months (no academic award); long-term is 6+ months leading to academic certification (Art. 142).",
      "Selection requires the training to be in the plan, linked to required competencies, and the employee to have completed probation; opportunities must be distributed equitably (Art. 143).",
      "After sponsored training you must serve RSSB: 1 year (3–6 month training), 2 years (6–12 months), 3 years (12–24 months), 5 years (24+ months) (Art. 145).",
      "Leaving before the bond ends means reimbursing training funds pro-rata; failing to complete the training means full reimbursement — unless RSSB ends the employment or you are called to serve government (Art. 146).",
      "During training you keep your salary and fringe benefits; transport allowance stops after 3 months and communication allowance after 30 days of absence (Arts. 150–152)."
    ],
    rw: [
      "Amahugurwa magufi ni munsi y'amezi 6; marekare ni amezi 6 arengaho atanga impamyabumenyi (Ing. 142).",
      "Nyuma y'amahugurwa yishyuriwe ugomba gukorera RSSB: umwaka 1 (amezi 3–6), imyaka 2 (amezi 6–12), imyaka 3 (amezi 12–24), imyaka 5 (hejuru y'amezi 24) (Ing. 145).",
      "Usezeye mbere y'igihe yishyura amafaranga y'amahugurwa ku buryo bungana n'igihe gisigaye (Ing. 146).",
      "Mu gihe cy'amahugurwa ukomeza guhabwa umushahara n'ibindi bigenerwa (Ing. 150)."
    ]
  },
  keywords: ["training","study","bond","course","scholarship","reimbursement","capacity","certification","amahugurwa","kwiga","impamyabumenyi"]
},
{
  id: "r-hours", icon: "⏰",
  title: { en: "Working Hours, Overtime & Missions", rw: "Amasaha y'akazi, amasaha y'ikirenga n'ubutumwa" },
  arts: "Articles 153–158",
  summary: {
    en: "Working hours follow Public Service rules; attendance is IT-tracked; overtime is compensated with rest, never money. Mission allowances follow official rates.",
    rw: "Amasaha y'akazi akurikiza ay'abakozi ba Leta; amasaha y'ikirenga yishyurwa ikiruhuko, ntabwo ari amafaranga."
  },
  points: {
    en: [
      "Weekly and daily working hours are those applicable in the Public Service (Arts. 155–156).",
      "RSSB uses an IT-based attendance system; disrespecting working hours is a disciplinary fault (Art. 157).",
      "Approved overtime is compensated with equal rest hours, taken within one month; monetary compensation for overtime is prohibited (Art. 158).",
      "Mission allowances inside the country depend on job level and region, and abroad follow Public Service rates plus a 15% cost-of-living top-up; exact amounts are in the official appendices — contact HR (Arts. 153–154)."
    ],
    rw: [
      "Amasaha y'akazi ni ayo mu bakozi ba Leta; ukutayubahiriza ni ikosa rihanwa (Ing. 155–157).",
      "Amasaha y'ikirenga yemejwe yishyurwa amasaha y'ikiruhuko angana na yo, mu kwezi kumwe; kwishyurwa amafaranga birabujijwe (Ing. 158).",
      "Amafaranga y'ubutumwa agenwa n'urwego rw'akazi n'akarere; imibare nyayo iri mu mugereka wemewe — baza HR (Ing. 153–154)."
    ]
  },
  keywords: ["working hours","overtime","attendance","mission","allowance","schedule","time","hours","amasaha","ubutumwa","ikirenga"]
}
];

/* rules search — same scoring philosophy as searchKB */
function searchRules(q, limit = 3){
  const nq = normalize(q);
  if (!nq) return [];
  const words = nq.split(" ");
  return RULES.map(r => {
    let s = 0;
    const kw = r.keywords.join(" ").toLowerCase();
    const ti = (r.title.en + " " + r.title.rw).toLowerCase();
    const body = (r.points.en.join(" ") + " " + r.summary.en + " " + r.summary.rw).toLowerCase();
    for (const k of r.keywords){ if (nq.includes(k.toLowerCase())) s += 6; }
    for (const w of words){
      if (w.length < 3) continue;
      if (kw.includes(w)) s += 4;
      if (ti.includes(w)) s += 3;
      if (body.includes(w)) s += 1;
    }
    return {r, s};
  }).filter(x => x.s > 3).sort((a,b) => b.s - a.s).slice(0, limit);
}
