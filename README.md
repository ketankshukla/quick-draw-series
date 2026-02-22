# Book Series Template

A reusable template repository for creating book series projects — fiction or non-fiction. Clone this repo, fill in the creative brief, and let Cascade (Windsurf AI) generate the entire project automatically.

This template captures the best patterns from three completed series projects and provides a complete starting point for planning, writing, publishing, and marketing a book series.

---

## What This Template Includes

- **Client request template** (`client-request-template.md`) — fillable creative brief for clients
- **Next.js 16 website** with React 19, Tailwind CSS 4, TypeScript, and Lucide React — fully functional with `{{PLACEHOLDER}}` parameterized components
- **Book series planning documents** with fill-in-the-blank placeholders
- **Amazon KDP publishing templates** with metadata, pricing, and launch strategy
- **AI image prompt templates** for ebook covers, paperback wraps, branding, box sets, social media, character portraits, and YouTube thumbnails
- **Front and back matter templates** for both fiction and non-fiction
- **PowerShell DOCX generation scripts** using Pandoc for manuscript assembly
- **Video script and prompt templates** for HeyGen trailers and marketing videos
- **Complete directory structure** for organizing all book content, images, and production files

---

## Directory Structure

```
book-series-template/
|-- README.md                          # This file
|-- SETUP.md                           # Step-by-step setup checklist
|-- client-request-template.md         # Fillable creative brief (client input)
|-- book-series-plan.md                # Series planning document (fill-in-the-blanks)
|-- book-series-template.md            # Master series vision document
|-- amazon-publishing-template.md      # KDP metadata, pricing, launch strategy
|-- .gitignore
|-- package.json                       # Pre-configured dependencies
|-- tsconfig.json / next.config.ts     # TypeScript and Next.js config
|-- postcss.config.mjs / eslint.config.mjs / vercel.json
|
|-- book-series/                       # ALL BOOK CONTENT
|   |-- series-description.md          # HTML-formatted KDP series description
|   |-- kdp-categories-and-keywords.md # Categories and keywords per book
|   |-- ai-image-tools.md              # Guide to AI image generation tools
|   |-- word-docs/                     # DOCX generation scripts and output
|   |   |-- chapters-only/             # Chapter-only DOCX files
|   |   |-- complete/                  # Complete book DOCX files (front+chapters+back)
|   |   |-- make_book_docx.ps1         # PowerShell: chapters -> DOCX
|   |   |-- make_complete_docx.ps1     # PowerShell: full book -> DOCX
|   |-- front-matter-templates/        # Front matter templates
|   |-- back-matter-templates/         # Back matter templates
|   +-- [BOOK DIRECTORIES CREATED PER BOOK]
|
|-- book-blurbs/                       # Short marketing blurbs per book
|-- book-prompts/                      # AI image generation prompts
|   |-- ebook-covers/                  # Per-book ebook cover prompts
|   |-- paperback-wraps/               # Per-book paperback cover prompts
|   |-- branding/                      # Series logo and branding prompts
|   |-- box-sets/                      # Box set / collection cover prompts
|   |-- social-media/                  # Social media image prompts
|   |-- character-portraits/           # [FICTION ONLY] Character portraits
|   +-- youtube-thumbnails/            # YouTube thumbnail prompts
|
|-- book-images/                       # Generated images (from AI tools)
|-- amazon-production/                 # Production-ready publishing files
|-- video-prompts/                     # Video generation specifications
|-- video-scripts/                     # Marketing video scripts
|-- archived-prompts/                  # Previous prompt iterations
|-- archived-images/                   # Previous image iterations
|
+-- src/                               # NEXT.JS WEBSITE
    |-- app/
    |   |-- layout.tsx                 # Root layout (parameterized)
    |   |-- page.tsx                   # Main single-page app
    |   +-- globals.css                # Global styles with CSS variables
    |-- components/
    |   |-- Header.tsx / Hero.tsx / BooksSection.tsx
    |   |-- BookCard.tsx / BookModal.tsx
    |   |-- AuthorSection.tsx / Footer.tsx
    |   |-- YouTubePlayer.tsx / ImageProtection.tsx
    |-- context/
    |   +-- BookContext.tsx             # Book state management
    +-- data/
        |-- books.ts                   # Book and Chapter interfaces + data
        +-- characters.ts             # [FICTION ONLY] Character data
```

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

## Automated Workflow (4 Phases)

### Phase 1: Clone & Initialize

```powershell
# Clone this template into a new project folder
gh repo clone ketankshukla/book-series-template E:\your-series-name

# Remove template git history and reinitialize
Remove-Item -Recurse -Force E:\your-series-name\.git
Set-Location E:\your-series-name
git init
```

### Phase 2: Client Request → Content Generation Details

1. Copy `client-request-template.md` to `{series-name}-client-request.md`
2. Fill in all fields with client information
3. Tell Cascade: _"Read {series-name}-client-request.md and generate {series-name}-content-generation-details.md"_
4. Cascade produces a comprehensive ~800-1200 line specification file

### Phase 3: Content Generation Details → All Content

Tell Cascade to read the content generation details file and generate:

- Full chapter text for every book (markdown files)
- Front and back matter for every book
- Website source code (all components, data files, CSS, metadata)
- Amazon publishing metadata, KDP categories, keywords
- Image prompts (3 variations per book cover + logo + hero)
- Marketing templates (video scripts, HeyGen prompts)
- Build verification and push to GitHub

### Phase 4: Image Generation & Deploy

1. Generate cover images from prompts using ChatGPT (the **only manual step**)
2. Place images in `public/images/`
3. Final build, commit, and push — Vercel auto-deploys from GitHub

> **See `E:\metronagon\workflow-new-book-series.md` for the complete detailed workflow with exact Cascade prompts.**

---

## Quick Start (Development)

```powershell
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

See `SETUP.md` for the complete step-by-step setup checklist.

---

**Template by:** Ketan Shukla | **Publisher:** Metronagon | **Website:** metronagon.com
