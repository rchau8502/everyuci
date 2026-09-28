# everyUCI

**The all-in-one student guide for UC Irvine.**

> *“What should I know as a UCI student?”*

everyUCI organizes scattered UCI information, disparate portals, and complex academic regulations into one clean, fast, searchable, student-friendly interface.

---

## 🎯 Product Philosophy

- **Student-First, Not Administrative:** Designed like a modern tool (Notion/Linear/Stripe guides), not a bureaucratic university website.
- **Natural Language Search:** Students can search "How do I drop a class?", "I lost my ZotCard", "money from UCI", or "Where to study late" without needing to know official department jargon.
- **Reliability First:** Every factual guide displays its official source department, official URL, last verified date, and academic year. If information changes frequently, it explicitly reminds students to **Verify with UCI**.
- **No Forced Accounts:** Full access to search, filtering, and local bookmarks without requiring any login.
- **Separation of Concerns:**
  - **everyUCI** answers *how UCI works* (knowledge, deadlines, rules, portals).
  - **AntTrail** calculates *what courses you take and when* (interactive prerequisite trees, degree planning, quarterly scheduling).

---

## 🚀 Key Features

1. **Intelligent Natural Search:**
   - Client-side indexed search with tokenization, synonyms, aliases, and keyword expansion.
   - Global `⌘K` search modal accessible anywhere.
2. **Student Persona Filters:**
   - Filter and prioritize guides for: *Freshman*, *Transfer*, *Continuing*, *International*, *Commuter*, and *Campus Resident*.
3. **Structured Guide Layout:**
   - **Short Answer:** 1–2 sentence TL;DR for quick reading.
   - **What You Need to Know:** Plain-English explanations of rules.
   - **What to Do:** Sequenced, numbered action steps with direct links.
   - **Important Deadlines:** Hard cutoffs and "Verify with UCI" alerts.
   - **Things Students Commonly Misunderstand:** Common myths vs. realities.
   - **Official UCI Source:** Exact campus department, phone, email, and link.
   - **Related Guides:** Cross-links to connected topics.
4. **"I Need To..." Action Hub (`/i-need-to`):**
   - Task-based hub for urgent student dilemmas (drop class, pay tuition, appeal SAP, get accommodations, find housing).
5. **UCI Tools Directory (`/tools`):**
   - Directory explaining all 14 major UCI systems (WebReg, StudentAccess, ZotAccount, ZotAid, DegreeWorks, Canvas, Handshake, myCommute, etc.).
6. **Interactive First-Week Checklist:**
   - Interactive onboarding checklist with `localStorage` persistence.
7. **AntTrail Degree Planning Integration:**
   - Dedicated Degree Planning section (`/degree-planning`) explaining unit requirements, GE categories, and linking to AntTrail.
8. **Client-Side Bookmarking:**
   - Save guides locally with one click (`/saved`).

---

## 📁 Project Architecture

```
/
├── app/
│   ├── layout.tsx              # Root layout with fonts, Navbar, SearchModal, Footer
│   ├── page.tsx                # Homepage (Hero search, categories, checklist, tools, AntTrail)
│   ├── icon.svg                # Custom everyUCI Anteater favicon
│   ├── globals.css             # Tailwind v4 theme definitions and base styles
│   ├── categories/
│   │   ├── page.tsx            # Browse all 10 categories
│   │   └── [id]/page.tsx       # Category detail page with guides & tools
│   ├── degree-planning/
│   │   └── page.tsx            # Academic architecture & AntTrail integration
│   ├── guides/
│   │   ├── page.tsx            # All guides directory with filtering & search
│   │   └── [slug]/page.tsx     # Structured guide article page
│   ├── i-need-to/
│   │   └── page.tsx            # "I Need To..." task-oriented action hub
│   ├── saved/
│   │   └── page.tsx            # Saved/bookmarked guides (localStorage)
│   ├── search/
│   │   └── page.tsx            # Dedicated search results page
│   └── tools/
│       └── page.tsx            # 14 major UCI tools directory
├── components/
│   ├── AntTrailBanner.tsx      # High-impact degree planning banner
│   ├── CategoryCard.tsx        # Category preview card
│   ├── CategoryIcon.tsx        # Dynamic Lucide icon mapper
│   ├── ChecklistWidget.tsx     # Interactive first-week checklist
│   ├── FeedbackModal.tsx       # Outdated policy report modal
│   ├── Footer.tsx              # Footer with official disclaimer & links
│   ├── GuideCard.tsx           # Reusable guide card with bookmarking
│   ├── Navbar.tsx              # Responsive top navigation & mobile drawer
│   ├── PersonaSelector.tsx     # Student type filter component
│   ├── SearchBar.tsx           # Hero search bar with autocomplete dropdown
│   ├── SearchModal.tsx         # Global ⌘K search modal
│   ├── ShareButton.tsx         # Link sharing with toast notification
│   └── ToolCard.tsx            # UCI system card
├── content/ & data/
│   ├── categories.ts           # 10 official student categories
│   ├── guides.ts               # 18+ verified, comprehensive UCI guides
│   ├── tasks.ts                # Quick tasks for "I Need To..."
│   ├── tips.ts                 # "Things Students Often Don't Know"
│   └── tools.ts                # 14 major UCI portals and systems
├── lib/
│   ├── bookmarks.ts            # LocalStorage bookmark helpers
│   └── search.ts               # Tokenized search engine with synonym boosting
└── types/
    ├── category.ts
    ├── guide.ts
    ├── task.ts
    └── tool.ts
```

---

## 🛠️ Development & Building

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

---

## ⚖️ Official Disclaimer

*everyUCI is an independent student resource and is not affiliated with or endorsed by the University of California, Irvine. Always verify important academic, financial, and administrative information with official UCI sources.*
