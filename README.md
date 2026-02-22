# Quick Draw Series

**A Five-Book Spaghetti Western Saga by Harlan J. Westbrook**

_"In the Arizona Territory, justice comes at the speed of a bullet."_

---

## About the Series

The **Quick Draw Series** is a five-book spaghetti western saga set in the Arizona Territory of the 1870s. It follows Elijah "Quick Draw" Cade, a former Union sharpshooter turned peaceful rancher whose world is destroyed when the ruthless outlaw Rattlesnake Reno Hatch murders his family as part of a corrupt railroad baron's land-grab scheme. What begins as a white-hot quest for vengeance becomes an epic tale of justice, love, sacrifice, and the death of the Old West.

Across five books, Elijah assembles an unlikely alliance — a fierce female sharpshooter with her own vendetta, a Lakota tracker who moves like smoke through the canyons, a former gunslinger turned preacher haunted by his own past, and a wisecracking trail companion who masks his courage with humor. Together they take on an outlaw empire funded by railroad money, fighting across the mesas, canyons, and dusty frontier towns of the American Southwest.

---

## The Books

| #   | Title                     | Subtitle                      | Theme                                       |
| --- | ------------------------- | ----------------------------- | ------------------------------------------- |
| 1   | **Dust and Vengeance**    | A Debt Paid in Lead           | Loss, transformation, the birth of a hunter |
| 2   | **The Devil's Canyon**    | Where Outlaws Go to Die       | Pursuit, alliance, the conspiracy revealed  |
| 3   | **Blood on the Horizon**  | The War for Red Mesa          | Escalation, sacrifice, Marisol's legend     |
| 4   | **Ashes of the Frontier** | Love and Ruin in the Badlands | Love, loss, Father Thorn's sacrifice        |
| 5   | **The Last Draw**         | When the Sun Sets on the West | Resolution, reckoning, a new dawn           |

---

## Series Details

- **Genre:** Spaghetti Western / Frontier Epic
- **Author:** Harlan J. Westbrook
- **Publisher:** Metronagon
- **Books:** 5 books, 10 chapters each, ~3,000 words per chapter
- **Total:** ~150,000 words
- **Content Rating:** Adult (18+)
- **Tone:** Gritty, cinematic, sun-scorched — the literary equivalent of a Sergio Leone film
- **Comparable Titles:** Lonesome Dove, Blood Meridian, The Dark Tower

---

## Tech Stack

- **Framework:** Next.js 16 with React Compiler
- **UI:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript 5 (strict mode)
- **Deployment:** Vercel (via GitHub)
- **Manuscript:** Pandoc + PowerShell for DOCX generation

---

## Project Structure

```
quick-draw-series/
|-- README.md                                        # This file
|-- SETUP.md                                         # Step-by-step setup checklist
|-- workflow-new-book-series.md                      # End-to-end workflow
|-- client-request-template.md                       # Blank client request template
|-- quick-draw-series-client-request.md              # Completed client request (example)
|-- quick-draw-series-content-generation-details.md  # Content generation blueprint
|-- book-series-plan.md                              # Series planning document
|-- book-series-template.md                          # Master series vision document
|-- amazon-publishing-template.md                    # KDP metadata, pricing, launch strategy
|
|-- book-series/                                     # ALL BOOK CONTENT
|   |-- series-description.md
|   |-- kdp-categories-and-keywords.md
|   |-- word-docs/                                   # DOCX generation scripts
|   |-- front-matter-templates/
|   +-- back-matter-templates/
|
|-- book-prompts/                                    # AI image generation prompts
|   |-- ebook-covers/ | paperback-wraps/ | branding/
|   |-- box-sets/ | social-media/ | character-portraits/
|   +-- youtube-thumbnails/
|
|-- book-images/                                     # Generated images
|-- book-blurbs/                                     # Marketing blurbs
|-- amazon-production/                               # Production-ready publishing files
|-- video-prompts/ | video-scripts/                  # Video content
|-- public/images/                                   # Website images (covers, logo, author)
|
+-- src/                                             # NEXT.JS WEBSITE
    |-- app/        (layout.tsx, page.tsx, globals.css)
    |-- components/ (Header, Hero, Books, BookModal, Author, Footer)
    |-- context/    (BookContext.tsx)
    +-- data/       (books.ts, characters.ts)
```

---

## Quick Start

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Workflow Status

This project was generated from the [book-series-template](https://github.com/ketankshukla/book-series-template) repository using the automated Cascade workflow. See `workflow-new-book-series.md` for the complete end-to-end process.

| Phase                               | Status                         |
| ----------------------------------- | ------------------------------ |
| Phase 1: Clone & Initialize         | Complete                       |
| Phase 2: Content Generation Details | Complete (blueprint generated) |
| Phase 3: Generate All Content       | Pending                        |
| Phase 4: Image Generation & Deploy  | Pending                        |

---

**Author:** Harlan J. Westbrook | **Publisher:** Metronagon | **Website:** quickdraw.ketanshukla.com
