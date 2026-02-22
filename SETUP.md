# Setup Checklist — New Book Series Project

A step-by-step guide to setting up a new book series project from this template using the automated Cascade workflow.

---

## Phase 1: Clone & Initialize

- [ ] Clone this template repo:
  ```powershell
  gh repo clone ketankshukla/book-series-template E:\your-series-name
  ```
- [ ] Remove template git history and reinitialize:
  ```powershell
  Remove-Item -Recurse -Force E:\your-series-name\.git
  Set-Location E:\your-series-name
  git init
  ```
- [ ] Run `npm install` to install all dependencies
- [ ] Verify the dev server works: `npm run dev` (should show placeholder site)

## Phase 2: Client Request → Content Generation Details

- [ ] Copy `client-request-template.md` to `{series-name}-client-request.md`
- [ ] Fill in all REQUIRED fields in the client request (see template for guidance)
- [ ] Verify the pre-submission checklist at the bottom of the template
- [ ] Tell Cascade:
  ```
  Read {series-name}-client-request.md and generate {series-name}-content-generation-details.md
  with complete series structure, characters, chapter outlines, front/back matter,
  Amazon metadata, website customization, and image prompts (3 per book).
  ```
- [ ] Review the generated content generation details file (~800-1200 lines)
- [ ] Make any corrections or adjustments before proceeding

## Phase 3: Content Generation Details → All Content

- [ ] Tell Cascade:
  ```
  Read {series-name}-content-generation-details.md and generate ALL book chapters,
  front/back matter, website source code, Amazon publishing files, image prompt
  files, and marketing templates. Then build and push to GitHub.
  ```
- [ ] Cascade generates all text-based assets:
  - [ ] Full chapter text for every book
  - [ ] Front matter per book (title page, copyright, dedication, epigraph, dramatis personae)
  - [ ] Back matter per book (author's note, about the author, also by, connect, review request)
  - [ ] Website source code (all components, data files, CSS, metadata)
  - [ ] Amazon publishing metadata (descriptions, categories, keywords, pricing)
  - [ ] Image prompt files (3 cover variations per book + logo + hero)
  - [ ] Video/marketing templates
  - [ ] README and project documentation
- [ ] Build verification passes: `npm run build`
- [ ] Code committed and pushed to GitHub

## Phase 4: Image Generation & Deploy (Manual)

- [ ] For each book, open prompt file from `book-prompts/ebook-covers/`
- [ ] Generate 3 image variations per book using ChatGPT
- [ ] Select the best result per book, save as `book{N}-cover.png`
- [ ] Generate series logo → `series-logo-{series-name}.png`
- [ ] Generate hero/landscape image → `complete-series-cover-landscape.png`
- [ ] Source or generate author photo → `author-photo.jpeg`
- [ ] Place all images in `public/images/`
- [ ] Tell Cascade:
  ```
  Images are in public/images/. Build, commit, and push.
  ```
- [ ] Verify Vercel deployment succeeded
- [ ] Visit live URL and verify all sections display correctly

## Phase 5: Publishing (Optional)

- [ ] Generate DOCX files using PowerShell scripts in `book-series/word-docs/`
- [ ] Verify DOCX files for formatting issues
- [ ] Prepare Amazon production files in `amazon-production/`
- [ ] Publish books on Amazon KDP
- [ ] Update Amazon URLs in `src/data/books.ts`
- [ ] Rebuild and redeploy

---

## What's Automated vs. Manual

| Task                                     | Automated?           |
| ---------------------------------------- | -------------------- |
| Clone and init repo                      | You (3 commands)     |
| Fill in client request                   | Client/You           |
| Generate content-generation-details file | **Cascade**          |
| Generate all book chapters               | **Cascade**          |
| Generate front/back matter               | **Cascade**          |
| Generate website source code             | **Cascade**          |
| Generate Amazon metadata                 | **Cascade**          |
| Generate image prompts                   | **Cascade**          |
| Generate cover images                    | You + ChatGPT        |
| Build and deploy                         | **Cascade** + Vercel |

---

**Tip:** The client request is the single most important input. The more detail in the SERIES DESCRIPTION and MAIN CHARACTERS fields, the better the output quality across everything Cascade generates.
