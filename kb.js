/* INKINGI ASSISTANT — Knowledge Base
   Every article is mapped to the exact pages of the official RSSB manuals:
   - Core HR: "RSSB Employee & Manager Core HR – User Manual V1.0" (117 pages) -> img/corehr-NNN.jpg
   - PIP:     "RSSB Talent Management – PIP User Manual V1.0" (73 pages)      -> img/pip-NNN.jpg
*/

const KB = [
/* ============================ CORE HR ============================ */
{
  id: "login", roles: ["employee", "manager", "senior"], cat: "corehr", icon: "🔐",
  title: { en: "Login to Oracle HCM", rw: "Kwinjira muri Oracle HCM" },
  purpose: {
    en: "Access the RSSB Oracle HCM system from your browser and reach your home page.",
    rw: "Uko winjira muri sisitemu ya Oracle HCM ya RSSB ukoresheje mushakisha (browser) ukagera ku rupapuro rwawe rw'itangiriro."
  },
  nav: ["Browser", "Oracle HCM link", "Sign In"],
  steps: {
    en: [
      "Click or copy-paste the Oracle HCM link into your browser (link shared by RSSB IT/HR).",
      "On the Oracle Cloud sign-in page, enter your username.",
      "Enter your password and click Sign In / Next.",
      "You land on the Oracle HCM home page. Open modules using the home icon or the company logo."
    ],
    rw: [
      "Kanda cyangwa ukoporore link ya Oracle HCM uyishyire muri browser yawe.",
      "Ku rupapuro rwa Oracle Cloud, andika izina ukoresha (username).",
      "Andika ijambobanga (password) hanyuma ukande Sign In.",
      "Uhita ugera ku rupapuro rw'itangiriro rwa Oracle HCM."
    ]
  },
  keywords: ["login","log in","sign in","access","password","username","kwinjira","injira","system","oracle","url","link","browser","start"],
  pages: { manual: "corehr", from: 4, to: 6 },
  related: ["personal-details","self-evaluation"]
},
{
  id: "personal-details", roles: ["employee"], cat: "corehr", icon: "👤",
  title: { en: "Personal Details", rw: "Umwirondoro bwite" },
  purpose: {
    en: "View and update your name, title, photo, demographic info, and view your National Identifier. Name changes (e.g. after marriage or divorce) are submitted here and may route for approval.",
    rw: "Kureba no kuvugurura amazina, ifoto, n'andi makuru bwite. Indangamuntu (National ID) irebwa gusa — ntushobora kuyihindura."
  },
  nav: ["Me", "Personal Information", "Personal Details"],
  steps: {
    en: [
      "Go to Me and click Personal Information.",
      "Open the Personal Details tab.",
      "To change your name or title, click the pencil (edit) icon in the Name section, update, and Submit.",
      "To add or replace your photo, click on the photo area, upload an image, and Save.",
      "Update Demographic Info (marital status, etc.) with the edit icon and Submit.",
      "National Identifier is view-only — click the eye icon to reveal it. Contact HR if it is wrong.",
      "Biographic and Disability info can be reviewed and updated in their sections."
    ],
    rw: [
      "Jya muri Me ukande Personal Information.",
      "Fungura Personal Details.",
      "Guhindura izina: kanda akashushondanga k'ikaramu (edit), uhindure, ukande Submit.",
      "Gushyiraho ifoto: kanda aho ifoto iri, ushyireho ifoto nshya, ukande Save.",
      "Indangamuntu irebwa gusa; niba ari amakosa, vugana na HR."
    ]
  },
  keywords: ["personal","details","name","title","photo","picture","marital","married","divorce","demographic","national id","identifier","indangamuntu","amazina","ifoto","umwirondoro","disability","biographic"],
  pages: { manual: "corehr", from: 8, to: 16 },
  related: ["identification-info","contact-info","family-contacts"]
},
{
  id: "identification-info", roles: ["employee"], cat: "corehr", icon: "🪪",
  title: { en: "Identification Info (Passport, Visa, License)", rw: "Ibyangombwa by'irangamimerere" },
  purpose: {
    en: "Maintain your official identity documents: citizenship, passports, visas & permits, and driver's licenses.",
    rw: "Kubika no kuvugurura ibyangombwa: ubwenegihugu, pasiporo, viza n'impushya, n'uruhushya rwo gutwara."
  },
  nav: ["Me", "Personal Information", "Identification Info"],
  steps: {
    en: [
      "Go to Me → Personal Information → Identification Info.",
      "Citizenship: review your legal nationality details; add or edit where allowed.",
      "Passports: click Add, enter passport number, issue and expiry dates, then Save.",
      "Visas and Permits: add permit type, country, and validity dates, then Save.",
      "Driver's License: add or update license details and Save."
    ],
    rw: [
      "Jya muri Me → Personal Information → Identification Info.",
      "Pasiporo: kanda Add, wandike nimero, itariki yatangiwe n'iyo izarangiriraho, ukande Save.",
      "Viza n'impushya: ongeraho ubwoko bw'uruhushya n'igihe rumara, ukande Save.",
      "Uruhushya rwo gutwara: ongeraho cyangwa uvugurure, ukande Save."
    ]
  },
  keywords: ["identification","passport","visa","permit","license","driver","citizenship","pasiporo","viza","uruhushya","ubwenegihugu","documents identity"],
  pages: { manual: "corehr", from: 18, to: 25 },
  related: ["personal-details","document-records"]
},
{
  id: "family-contacts", roles: ["employee"], cat: "corehr", icon: "👨‍👩‍👧",
  title: { en: "Family & Emergency Contacts", rw: "Umuryango n'abo guhamagara byihutirwa" },
  purpose: {
    en: "Add family members and the people RSSB should call in an emergency. You can create a new contact or pick a coworker.",
    rw: "Kwandika abagize umuryango n'abantu bahamagarwa igihe cy'ibyihutirwa."
  },
  nav: ["Me", "Personal Information", "Family and Emergency Contacts"],
  steps: {
    en: [
      "Go to Me → Personal Information → Family and Emergency Contacts.",
      "Click Add, then choose Create a New Contact (or Select a Coworker).",
      "Enter the contact's name, relationship, and mark 'Emergency contact' if applicable.",
      "Add phone details and address for the contact.",
      "Click Submit to save."
    ],
    rw: [
      "Jya muri Me → Personal Information → Family and Emergency Contacts.",
      "Kanda Add, uhitemo Create a New Contact.",
      "Andika izina, isano (relationship), ushyireho akamenyetso ka 'Emergency contact' niba ari ngombwa.",
      "Ongeraho telefone n'aderesi.",
      "Kanda Submit."
    ]
  },
  keywords: ["family","emergency","contact","spouse","child","next of kin","umuryango","umufasha","abana","byihutirwa","guhamagara"],
  pages: { manual: "corehr", from: 27, to: 32 },
  related: ["contact-info","personal-details"]
},
{
  id: "contact-info", roles: ["employee"], cat: "corehr", icon: "📞",
  title: { en: "Contact Info (Phone, Email, Address)", rw: "Aho babona (telefone, imeyili, aderesi)" },
  purpose: {
    en: "Maintain how RSSB can reach you: phone numbers, email addresses, other communication accounts (e.g. social/handles), home address, and your order of preference.",
    rw: "Kuvugurura telefone, imeyili, aderesi, n'ubundi buryo bwo kukugeraho."
  },
  nav: ["Me", "Personal Information", "Contact Info"],
  steps: {
    en: [
      "Go to Me → Personal Information → Contact Info.",
      "Phone: click Add, choose the type (work/personal), enter the number, Save.",
      "Email: add a work-related email address and Save.",
      "Other Communication Accounts: add other handles/accounts used for work communication.",
      "Address: add or edit your home address details and Save.",
      "Order of Preference: set which contact method should be used first, then Submit."
    ],
    rw: [
      "Jya muri Me → Personal Information → Contact Info.",
      "Telefone: kanda Add, wandike nimero, ukande Save.",
      "Imeyili: ongeraho imeyili, ukande Save.",
      "Aderesi: andika cyangwa uvugurure aho utuye, ukande Save."
    ]
  },
  keywords: ["contact","phone","telephone","email","address","communication","telefone","imeyili","aderesi","nimero","preference"],
  pages: { manual: "corehr", from: 34, to: 44 },
  related: ["family-contacts","personal-details"]
},
{
  id: "bank-details", roles: ["employee"], cat: "corehr", icon: "🏦",
  title: { en: "Bank Details (Payment Methods)", rw: "Amakuru ya banki (konti y'umushahara)" },
  purpose: {
    en: "View, add, or update the bank account where your salary is paid.",
    rw: "Kureba, kongeraho cyangwa kuvugurura konti ya banki umushahara wawe unyuzwaho."
  },
  nav: ["Me", "Pay", "Payment Methods"],
  steps: {
    en: [
      "Go to Me and click Pay.",
      "Open Payment Methods.",
      "Review your existing bank account(s).",
      "Click Add (or the edit icon) to add or update a bank account.",
      "Enter bank name, branch, and account number carefully.",
      "Click Save. Your salary will be paid to the active account."
    ],
    rw: [
      "Jya muri Me ukande Pay.",
      "Fungura Payment Methods.",
      "Reba konti isanzweho.",
      "Kanda Add cyangwa edit kugira ngo wongereho cyangwa uvugurure konti.",
      "Andika izina rya banki, ishami, na nimero ya konti neza.",
      "Kanda Save."
    ]
  },
  keywords: ["bank","banki","account","konti","salary","umushahara","payment","methods","pay","kuvugurura konti","navugurura"],
  pages: { manual: "corehr", from: 46, to: 50 },
  related: ["employment-info","personal-details"]
},
{
  id: "employment-info", roles: ["employee"], cat: "corehr", icon: "💼",
  title: { en: "Employment Information", rw: "Amakuru y'akazi" },
  purpose: {
    en: "View your assignment details: position, grade, department, manager, and employment history.",
    rw: "Kureba amakuru y'umwanya w'akazi: intera, ishami, umuyobozi, n'amateka y'akazi."
  },
  nav: ["Me", "Personal Information", "Employment Info"],
  steps: {
    en: [
      "Go to Me → Personal Information → Employment Info.",
      "Review your current assignment: position, grade, department, and line manager.",
      "Use the history section to see past assignment changes.",
      "This section is view-only. If something is wrong, contact HR Operations."
    ],
    rw: [
      "Jya muri Me → Personal Information → Employment Info.",
      "Reba umwanya w'akazi, ishami, n'umuyobozi wawe.",
      "Aya makuru arebwa gusa; ikibazo ubaza HR Operations."
    ]
  },
  keywords: ["employment","assignment","position","grade","department","job","akazi","umwanya","history","manager info"],
  pages: { manual: "corehr", from: 52, to: 54 },
  related: ["transfers","bank-details"]
},
{
  id: "document-records", roles: ["employee"], cat: "corehr", icon: "📄",
  title: { en: "Document Records", rw: "Kubika inyandiko" },
  purpose: {
    en: "Upload and store official employee documents (certificates, contracts, letters) attached to your record.",
    rw: "Kohereza no kubika inyandiko z'umukozi (impamyabumenyi, amasezerano, amabaruwa)."
  },
  nav: ["Me", "Personal Information", "Document Records"],
  steps: {
    en: [
      "Go to Me → Personal Information → Document Records.",
      "Click Add to create a New Document Record.",
      "Choose the document type, enter the name and dates.",
      "Attach the file (PDF/image) using the drag-and-drop area.",
      "Click Submit. HR can also upload documents to your record."
    ],
    rw: [
      "Jya muri Me → Personal Information → Document Records.",
      "Kanda Add ushyireho inyandiko nshya.",
      "Hitamo ubwoko bw'inyandiko, wandike izina n'amatariki.",
      "Ohereza dosiye (PDF cyangwa ifoto).",
      "Kanda Submit."
    ]
  },
  keywords: ["document","records","upload","certificate","contract","attachment","inyandiko","impamyabumenyi","dosiye","file"],
  pages: { manual: "corehr", from: 56, to: 59 },
  related: ["identification-info","personal-details"]
},
{
  id: "directory", roles: ["employee", "manager"], cat: "corehr", icon: "🗂️",
  title: { en: "Directory & Organization Chart", rw: "Urutonde rw'abakozi" },
  purpose: {
    en: "Find any RSSB employee, view your line manager and teammates, and browse your organization chart.",
    rw: "Gushaka umukozi uwo ari we wese, kureba umuyobozi wawe na bagenzi bawe, n'imbonerahamwe y'ikigo."
  },
  nav: ["Me", "Directory"],
  steps: {
    en: [
      "Go to Me and open Directory.",
      "Use the search bar to find any employee by name.",
      "Open a profile to see their role, contact details, and manager.",
      "Click My Organization Chart to see your manager, peers, and direct reports visually."
    ],
    rw: [
      "Jya muri Me ufungure Directory.",
      "Shakisha umukozi ukoresheje izina.",
      "Fungura umwirondoro urebe umwanya n'aho ubona uwo mukozi.",
      "Kanda My Organization Chart urebe imbonerahamwe."
    ]
  },
  keywords: ["directory","search employee","organization chart","org chart","team","colleagues","gushaka umukozi","imbonerahamwe"],
  pages: { manual: "corehr", from: 61, to: 64 },
  related: ["public-info","employment-info"]
},
{
  id: "public-info", roles: ["employee"], cat: "corehr", icon: "🌐",
  title: { en: "My Public Info", rw: "Amakuru agaragarira abandi" },
  purpose: {
    en: "Control what other employees see about you in the directory: public message, contact info, 'About me', favorite links, and your representatives.",
    rw: "Kugena amakuru abandi bakozi babona kuri wowe: ubutumwa, aho bakubona, n'ibindi."
  },
  nav: ["Me", "Quick Actions", "My Public Info"],
  steps: {
    en: [
      "Go to Me → Quick Actions → My Public Info (or open your own profile from Directory).",
      "Add or edit your Public Message (a short status visible to colleagues).",
      "Review the Contact Info shown publicly.",
      "Fill 'About Me' with your background and skills.",
      "Add Favorite Links you want to share.",
      "Check Managers and Direct Reports / Representatives shown on your profile."
    ],
    rw: [
      "Jya muri Me → Quick Actions → My Public Info.",
      "Andika Public Message (ubutumwa bugufi abandi babona).",
      "Uzuza 'About Me' n'ubumenyi bwawe.",
      "Ongeraho links wifuza gusangiza abandi."
    ]
  },
  keywords: ["public info","public profile","about me","public message","favorite links","umwirondoro rusange"],
  pages: { manual: "corehr", from: 65, to: 74 },
  related: ["directory","personal-details"]
},
{
  id: "resignation", roles: ["employee"], cat: "corehr", icon: "📤",
  title: { en: "Voluntary Resignation", rw: "Gusezera ku kazi ku bushake" },
  purpose: {
    en: "Submit a voluntary resignation from RSSB. The system automatically computes your notice period and routes the request for approval.",
    rw: "Gusaba gusezera ku kazi ku bushake. Sisitemu ibara igihe cy'integuza hanyuma ikohereza ubusabe mu nzira y'kwemezwa."
  },
  nav: ["Me", "Show More", "Resign from Employment"],
  steps: {
    en: [
      "Go to Me, click Show More, then choose Resign from Employment.",
      "Select the resignation reason and your proposed last working day.",
      "The system auto-calculates the notice period based on your resignation date.",
      "Attach a resignation letter if required and add comments.",
      "Click Submit. The request routes to approvers (up to the Chief Human Capital Officer).",
      "Track the status from your Journal/notifications until it is approved."
    ],
    rw: [
      "Jya muri Me, ukande Show More, uhitemo Resign from Employment.",
      "Hitamo impamvu yo gusezera n'umunsi wa nyuma w'akazi.",
      "Sisitemu ibara igihe cy'integuza (notice period) yikora.",
      "Shyiraho ibaruwa yo gusezera niba bisabwa.",
      "Kanda Submit — ubusabe bujya mu nzira yo kwemezwa.",
      "Kurikirana aho bugeze mu menyesha (notifications)."
    ]
  },
  keywords: ["resign","resignation","quit","leave rssb","exit","notice","gusezera","nsezera","kuva mu kazi","sezera","voluntary"],
  pages: { manual: "corehr", from: 76, to: 81 },
  related: ["resignation-approval","exit-journey"]
},
{
  id: "resignation-approval", roles: ["senior"], cat: "corehr", icon: "✅",
  title: { en: "Resignation Approval (Chief Human Capital)", rw: "Kwemeza ubusabe bwo gusezera" },
  purpose: {
    en: "How the Chief Human Capital Officer reviews and approves a resignation request, and how notifications flow.",
    rw: "Uko Umuyobozi Mukuru ushinzwe abakozi yemeza ubusabe bwo gusezera."
  },
  nav: ["Bell icon", "Notifications", "Resignation approval"],
  steps: {
    en: [
      "The approver receives a notification: 'Resignation for [employee name]'.",
      "Click the bell icon and open the notification.",
      "Review the resignation details: dates, notice period, and attachments.",
      "Click Approve (or Reject with comments).",
      "The employee is notified of the decision and the Exit Journey can begin."
    ],
    rw: [
      "Uwemeza abona imenyesha 'Resignation for ...'.",
      "Kanda ku kamenyetso k'inzogera ufungure imenyesha.",
      "Suzuma amakuru: amatariki, integuza, n'imigereka.",
      "Kanda Approve cyangwa Reject."
    ]
  },
  keywords: ["approve resignation","approval","chief human capital","notification","kwemeza","reject"],
  pages: { manual: "corehr", from: 82, to: 84 },
  related: ["resignation","exit-journey"]
},
{
  id: "exit-journey", roles: ["employee"], cat: "corehr", icon: "🚪",
  title: { en: "Employee Exit Journey", rw: "Inzira yo gusoza akazi (Exit Journey)" },
  purpose: {
    en: "A structured checklist that guides a leaving employee through all exit tasks: questionnaire, clearance form, and handover steps.",
    rw: "Urutonde rw'ibikorwa umukozi usezera agomba gukora: ibibazo by'isozwa, impapuro z'ubweguro, no gusubiza ibikoresho."
  },
  nav: ["Me", "Journeys", "RSSB Exit Journey"],
  steps: {
    en: [
      "After resignation approval, click Start Journey from the notification or open Me → Journeys.",
      "Open the RSSB Exit Journey — it lists all tasks you must perform.",
      "Complete the Exit Questionnaire (feedback on your experience, performance review process, etc.).",
      "Complete the Exit Clearance Task — fill the clearance form (return assets, clear obligations) and submit.",
      "Mark each task as Complete. The journey shows progress until all tasks are done."
    ],
    rw: [
      "Nyuma yo kwemezwa, kanda Start Journey cyangwa ujye muri Me → Journeys.",
      "Fungura RSSB Exit Journey urebe ibikorwa byose.",
      "Uzuza Exit Questionnaire (ibibazo ku isozwa ry'akazi).",
      "Uzuza Exit Clearance form (gusubiza ibikoresho, gusoza inshingano).",
      "Shyira buri gikorwa kuri Complete kugeza byose birangiye."
    ]
  },
  keywords: ["exit journey","clearance","questionnaire","offboarding","leaving","gusoza akazi","exit tasks","journey"],
  pages: { manual: "corehr", from: 86, to: 94 },
  related: ["resignation","manager-exit-clearance"]
},
{
  id: "manager-exit-clearance", roles: ["manager"], cat: "corehr", icon: "🧾",
  title: { en: "Manager Exit Clearance Tasks", rw: "Ibikorwa by'umuyobozi mu isozwa" },
  purpose: {
    en: "Tasks a line manager must complete when their direct report exits: clearance verification and sign-off.",
    rw: "Ibikorwa umuyobozi akora igihe umukozi we asoza akazi: kugenzura no kwemeza ubweguro."
  },
  nav: ["Notifications", "Journeys", "Manager exit clearance"],
  steps: {
    en: [
      "The manager receives exit clearance tasks via notification/journey when a direct report exits.",
      "Open the Manager Clearance Task from the journey.",
      "Verify the employee's clearance form: assets returned, handover done, obligations cleared.",
      "Fill the manager sections (dates, confirmations) and sign off.",
      "Mark the task Complete to close the manager side of the exit journey."
    ],
    rw: [
      "Umuyobozi abona imenyesha ry'ibikorwa by'isozwa iyo umukozi we asezeye.",
      "Fungura Manager Clearance Task.",
      "Genzura ko ibikoresho byasubijwe kandi inshingano zarangiye.",
      "Uzuza ibisabwa, wemeze, hanyuma ushyire Complete."
    ]
  },
  keywords: ["manager clearance","exit clearance","manager exit","direct report exit","sign off"],
  pages: { manual: "corehr", from: 96, to: 100 },
  related: ["exit-journey","resignation-approval"]
},
{
  id: "transfers", roles: ["employee"], cat: "corehr", icon: "🔁",
  title: { en: "Transfer Request (Assignment Change)", rw: "Gusaba kwimurirwa ahandi" },
  purpose: {
    en: "Request a transfer to another position, department, or location using 'Request My Assignment Change'.",
    rw: "Gusaba kwimurirwa ku wundi mwanya, irindi shami cyangwa ahandi hantu."
  },
  nav: ["Me", "Show More", "Request My Assignment Change"],
  steps: {
    en: [
      "Go to Me, click Show More, then Request My Assignment Change.",
      "Enter the effective date of the requested change.",
      "Select the proposed changes: new department, location, or position.",
      "Add supporting comments or attachments.",
      "Click Submit. The request routes to your Line Manager, then the Chief Human Capital Officer."
    ],
    rw: [
      "Jya muri Me, ukande Show More, uhitemo Request My Assignment Change.",
      "Andika itariki impinduka izatangiraho.",
      "Hitamo icyo usaba: ishami rishya, aho ukorera, cyangwa umwanya.",
      "Ongeraho ibisobanuro cyangwa imigereka.",
      "Kanda Submit — bujya ku muyobozi wawe hanyuma ku Muyobozi Mukuru w'abakozi."
    ]
  },
  keywords: ["transfer","assignment change","move department","relocation","kwimurirwa","kwimuka","change position"],
  pages: { manual: "corehr", from: 102, to: 106 },
  related: ["transfer-approval","employment-info"]
},
{
  id: "transfer-approval", roles: ["manager", "senior"], cat: "corehr", icon: "☑️",
  title: { en: "Transfer Approval (Manager & Chief HCO)", rw: "Kwemeza ubusabe bwo kwimurirwa" },
  purpose: {
    en: "Two-step approval of an assignment change: first the Line Manager, then the Chief Human Capital Officer.",
    rw: "Kwemeza ubusabe mu byiciro bibiri: umuyobozi wa hafi hanyuma Umuyobozi Mukuru w'abakozi."
  },
  nav: ["Bell icon", "Notifications", "Assignment Change"],
  steps: {
    en: [
      "Line Manager: click the bell icon, open the 'Assignment Change' notification.",
      "Review the type of change, dates, and justification, then Approve or Reject.",
      "Chief Human Capital Officer: receives the request next, opens it from Notifications.",
      "Reviews and gives the final Approve/Reject decision.",
      "The employee is notified: 'Assignment Change for [name]' with the outcome."
    ],
    rw: [
      "Umuyobozi wa hafi: kanda inzogera, ufungure imenyesha rya 'Assignment Change'.",
      "Suzuma impinduka isabwa hanyuma wemeze cyangwa uyange.",
      "Umuyobozi Mukuru w'abakozi niwe utanga umwanzuro wa nyuma.",
      "Umukozi amenyeshwa umwanzuro."
    ]
  },
  keywords: ["assignment change approval","approve transfer","line manager approval","chief human capital officer","notifications approval"],
  pages: { manual: "corehr", from: 108, to: 114 },
  related: ["transfers","resignation-approval"]
},

/* ============================ PIP / TALENT ============================ */
{
  id: "assign-goals", sub: "pipx", roles: ["manager"], cat: "pip", icon: "🎯",
  title: { en: "Assign PIP Goals to Direct Reports (Manager)", rw: "Guha intego za PIP abakozi (Umuyobozi)" },
  purpose: {
    en: "As a line manager, create and assign Performance Improvement Plan goals to a direct report for the PIP review period.",
    rw: "Nk'umuyobozi, gushyiriraho no guha umukozi wawe intego za gahunda yo kunoza imikorere (PIP)."
  },
  nav: ["My Team", "Goals", "PIP Review Period"],
  steps: {
    en: [
      "Go to My Team and open Goals.",
      "Select the direct report you are assigning goals to.",
      "Select the PIP Review period from the review period list.",
      "Click Add / New Goal.",
      "Enter the PIP goal name, description, target date, and measurement.",
      "Save and repeat for each goal, then confirm assignment to the employee."
    ],
    rw: [
      "Jya muri My Team ufungure Goals.",
      "Hitamo umukozi uha intego.",
      "Hitamo igihe cy'isuzuma cya PIP (PIP Review period).",
      "Kanda New Goal.",
      "Andika intego, ibisobanuro, itariki ntarengwa n'uko izapimwa.",
      "Bika, wongere ku ntego zose, hanyuma wemeze."
    ]
  },
  keywords: ["assign goals","pip goals","new goal","direct report","manager goals","guha intego","intego","goal plan"],
  pages: { manual: "pip", from: 10, to: 13 },
  related: ["self-evaluation","manager-evaluation"]
},
{
  id: "self-evaluation", sub: "perf", roles: ["employee"], cat: "pip", icon: "📝",
  title: { en: "PIP Self-Evaluation (Employee)", rw: "Kwisuzuma kwa PIP (Umukozi)" },
  purpose: {
    en: "Complete your PIP self-evaluation: rate your core competencies, PIP goals, and development goals, then submit to your manager.",
    rw: "Kwisuzuma: gutanga amanota ku bushobozi (competencies), ku ntego za PIP no ku ntego z'iterambere, hanyuma ukabyohereza ku muyobozi."
  },
  nav: ["Me", "Career and Performance", "Performance", "PIP Evaluations"],
  steps: {
    en: [
      "Go to Me → Career and Performance and open Performance.",
      "Click the PIP performance document for the current review period.",
      "Core Competencies: click each competency one at a time, select a rating, add comments.",
      "Click Calculate to see your competencies overall rating.",
      "PIP Goals: click each goal one at a time, rate it, and comment on achievement.",
      "Development Goals: evaluate each development goal the same way, then Calculate.",
      "Review your overall PIP rating (auto-calculated from competencies and goals).",
      "Scroll up and click Submit to send your self-evaluation to your line manager."
    ],
    rw: [
      "Jya muri Me → Career and Performance ufungure Performance.",
      "Kanda ku nyandiko ya PIP y'iki gihe cy'isuzuma.",
      "Ubushobozi (Competencies): kanda kuri buri bumwe, utange inota n'ibisobanuro.",
      "Kanda Calculate urebe inota rusange.",
      "Intego za PIP: suzuma buri ntego imwe imwe.",
      "Intego z'iterambere: nazo uzisuzume, ukande Calculate.",
      "Zamuka hejuru ukande Submit — kwisuzuma bijya ku muyobozi wawe."
    ]
  },
  keywords: ["self evaluation","self-evaluation","pip evaluation","competency","rate goals","kwisuzuma","nsuzuma","submit evaluation","development goals","calculate rating"],
  pages: { manual: "pip", from: 15, to: 26 },
  related: ["manager-evaluation","assign-goals","final-feedback"]
},
{
  id: "manager-evaluation", sub: "perf", roles: ["manager"], cat: "pip", icon: "🧑‍💼",
  title: { en: "PIP Manager Evaluation", rw: "Isuzuma ry'umuyobozi (PIP)" },
  purpose: {
    en: "As a line manager, evaluate your direct report's competencies, PIP goals and development goals, answer the PIP questionnaire, and submit the evaluation.",
    rw: "Nk'umuyobozi, gusuzuma umukozi: ubushobozi, intego za PIP, intego z'iterambere, no kohereza isuzuma."
  },
  nav: ["My Team", "Performance", "PIP Evaluations"],
  steps: {
    en: [
      "After the employee submits, open My Team → Performance (or the notification).",
      "Open the employee's PIP performance document.",
      "Core Competencies: rate each competency one at a time; the employee's self-rating is visible.",
      "PIP Goals: select each goal, choose a rating, and add evaluation comments.",
      "Development Goals: evaluate each, then Calculate the overall rating.",
      "Enter the final overall rating and complete the Final Feedback questionnaire on the PIP.",
      "Scroll up, confirm the ratings, and click Submit.",
      "The document routes to your own line manager for approval."
    ],
    rw: [
      "Fungura My Team → Performance cyangwa imenyesha.",
      "Fungura inyandiko ya PIP y'umukozi.",
      "Suzuma ubushobozi, intego za PIP n'intego z'iterambere buri kimwe.",
      "Uzuza ibibazo bya nyuma (questionnaire).",
      "Zamuka hejuru, wemeze amanota, ukande Submit — bijya kwemezwa."
    ]
  },
  keywords: ["manager evaluation","evaluate employee","rate direct report","pip manager","line manager evaluation","isuzuma ry'umuyobozi"],
  pages: { manual: "pip", from: 28, to: 42 },
  related: ["pip-approval","self-evaluation","review-meeting"]
},
{
  id: "pip-approval", sub: "perf", roles: ["senior"], cat: "pip", icon: "✔️",
  title: { en: "PIP Performance Document Approval", rw: "Kwemeza inyandiko y'isuzuma (PIP)" },
  purpose: {
    en: "The line manager's line manager (second-level manager) reviews and approves the completed PIP evaluation.",
    rw: "Umuyobozi w'umuyobozi asuzuma kandi akemeza isuzuma rya PIP ryakozwe."
  },
  nav: ["Bell icon", "Notifications", "PIP approval request"],
  steps: {
    en: [
      "The second-level manager receives an approval request notification.",
      "Click the notification to open the PIP performance document approval.",
      "Review the ratings, comments, and questionnaire responses.",
      "Click Approve (or Reject with comments to send it back)."
    ],
    rw: [
      "Umuyobozi wo ku rwego rwa kabiri abona imenyesha ry'ubusabe bwo kwemeza.",
      "Kanda ku imenyesha ufungure inyandiko.",
      "Suzuma amanota n'ibisobanuro.",
      "Kanda Approve cyangwa Reject."
    ]
  },
  keywords: ["pip approval","approve performance document","second level manager","approval request"],
  pages: { manual: "pip", from: 43, to: 44 },
  related: ["manager-evaluation","review-meeting"]
},
{
  id: "review-meeting", sub: "review", roles: ["employee", "manager"], cat: "pip", icon: "🗓️",
  title: { en: "PIP Review Meeting (Schedule & Confirm)", rw: "Inama y'isuzuma (gutegura & kwemeza)" },
  purpose: {
    en: "After approval, the manager schedules the review meeting and marks it held; the employee then confirms the meeting took place.",
    rw: "Nyuma yo kwemezwa, umuyobozi ategura inama y'isuzuma; umukozi na we akemeza ko yabaye."
  },
  nav: ["My Team", "Performance", "Review Meeting"],
  steps: {
    en: [
      "Manager: once the document is approved, open the employee's Performance document.",
      "Open the Review Meeting section and schedule/hold the meeting with the employee.",
      "Manager: tick 'Review Meeting Held' with the date, and Save.",
      "Employee: open your Performance document → Performance Review Meeting.",
      "Employee: confirm 'Review Meeting Held' to acknowledge the meeting took place."
    ],
    rw: [
      "Umuyobozi: fungura inyandiko y'isuzuma y'umukozi.",
      "Tegura inama, hanyuma ushyireho 'Review Meeting Held' n'itariki, ukande Save.",
      "Umukozi: fungura inyandiko yawe y'isuzuma.",
      "Emeza 'Review Meeting Held' ko inama yabaye."
    ]
  },
  keywords: ["review meeting","confirm meeting","schedule meeting","meeting held","inama y'isuzuma"],
  pages: { manual: "pip", from: 46, to: 54 },
  related: ["share-document","pip-approval"]
},
{
  id: "share-document", sub: "pipx", roles: ["employee", "manager"], cat: "pip", icon: "📨",
  title: { en: "Share Performance Document & Acknowledge", rw: "Gusangiza inyandiko y'isuzuma no kuyemeza" },
  purpose: {
    en: "The manager shares the completed PIP document with the employee, and the employee acknowledges it.",
    rw: "Umuyobozi asangiza umukozi inyandiko y'isuzuma; umukozi akemeza ko yayibonye."
  },
  nav: ["My Team", "Performance", "Share Document"],
  steps: {
    en: [
      "Manager: after the meeting is confirmed, open the employee's performance document.",
      "Click Share Document to release it to the employee.",
      "Employee: you receive a notification — '[Review period] PIP Evaluations Is Ready for Review'.",
      "Employee: open the document, review the ratings and comments.",
      "Employee: click Acknowledge to confirm you have seen the document."
    ],
    rw: [
      "Umuyobozi: kanda Share Document usangize umukozi inyandiko.",
      "Umukozi: ubona imenyesha ko inyandiko yiteguye.",
      "Umukozi: fungura inyandiko, urebe amanota n'ibisobanuro.",
      "Kanda Acknowledge wemeze ko wayibonye."
    ]
  },
  keywords: ["share performance document","acknowledge","ready for review","gusangiza","share document"],
  pages: { manual: "pip", from: 56, to: 61 },
  related: ["review-meeting","final-feedback"]
},
{
  id: "final-feedback", sub: "review", roles: ["employee", "manager"], cat: "pip", icon: "💬",
  title: { en: "Final Feedback (Employee & Manager)", rw: "Ibitekerezo bya nyuma" },
  purpose: {
    en: "Both the employee and then the manager provide final feedback comments to close the PIP evaluation cycle.",
    rw: "Umukozi n'umuyobozi batanga ibitekerezo bya nyuma bisoza isuzuma rya PIP."
  },
  nav: ["Me", "Career and Performance", "Performance", "Provide Final Feedback"],
  steps: {
    en: [
      "Employee: after acknowledging, open your Performance document.",
      "Open Provide Final Feedback, write your closing comments, and Submit.",
      "Manager: you receive a notification that the employee acknowledged and gave feedback.",
      "Manager: open Provide Final Feedback on the same document, add your final comments, Submit.",
      "The PIP performance document then shows as Completed."
    ],
    rw: [
      "Umukozi: fungura Provide Final Feedback, wandike ibitekerezo, ukande Submit.",
      "Umuyobozi: ubona imenyesha, na we agatanga ibitekerezo bye bya nyuma.",
      "Inyandiko ya PIP ihita igaragara nka Completed."
    ]
  },
  keywords: ["final feedback","closing comments","complete pip","provide feedback","ibitekerezo"],
  pages: { manual: "pip", from: 63, to: 71 },
  related: ["share-document","self-evaluation"]
}
];

/* Kinyarwanda → English concept map used by search & chatbot */
const RW_SYNONYMS = {
  "nigute": "how", "nte": "how", "gute": "how",
  "navugurura": "update", "kuvugurura": "update", "guhindura": "update", "hindura": "update",
  "banki": "bank", "konti": "account", "umushahara": "salary",
  "nsezera": "resign", "gusezera": "resign", "sezera": "resign", "kwegura": "resign",
  "akazi": "job", "kazi": "job",
  "kwinjira": "login", "injira": "login",
  "telefone": "phone", "terefone": "phone", "imeyili": "email", "aderesi": "address",
  "umuryango": "family", "byihutirwa": "emergency",
  "intego": "goals", "kwisuzuma": "self evaluation", "nsuzuma": "self evaluation",
  "isuzuma": "evaluation", "umuyobozi": "manager",
  "kwimurirwa": "transfer", "kwimuka": "transfer",
  "inyandiko": "document", "impamyabumenyi": "certificate",
  "pasiporo": "passport", "indangamuntu": "national identifier",
  "ifoto": "photo", "amazina": "name", "umwirondoro": "personal details",
  "inama": "meeting", "ibitekerezo": "feedback", "gusangiza": "share",
  "ubufasha": "help", "gufasha": "help"
};

const ROLES = {
  employee: { en: "Employee", rw: "Umukozi" },
  manager:  { en: "Line Manager", rw: "Umuyobozi wa hafi" },
  senior:   { en: "Senior Manager", rw: "Umuyobozi mukuru" }
};

const CATS = {
  corehr: { en: "Core HR", rw: "Core HR", icon: "👥" },
  pip:    { en: "Talent Management", rw: "Imicungire y'impano", icon: "🎯" }
};

const SUBTABS = {
  perf:   { en: "Performance Evaluation", rw: "Isuzuma ry'imikorere", icon: "📊" },
  review: { en: "Employee Review",        rw: "Isubiramo ry'umukozi",  icon: "🗓️" },
  pipx:   { en: "PIP",                    rw: "PIP",                   icon: "🎯" }
};

const MANUALS = {
  corehr: { label: "Core HR Manual", count: 117 },
  pip:    { label: "PIP Manual", count: 73 }
};
