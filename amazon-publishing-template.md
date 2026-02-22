# {{SERIES_NAME}} -- Amazon Publishing Template

_A reusable template for every book in the series. Fill in the bracketed fields for each book before publishing._

---

## KDP BOOK DETAILS

### Title & Subtitle
- **Series Name:** {{SERIES_NAME}}
- **Book Title:** {{BOOK_TITLE}} -- e.g., "The Foundation of Mastery"
- **Subtitle:** {{BOOK_SUBTITLE}} -- e.g., "The Science and Psychology of Repetition"
- **Full Display:** {{SERIES_NAME}} Book [N]: {{BOOK_TITLE}} -- {{BOOK_SUBTITLE}}

### Author & Publisher
- **Author Name:** Ketan Shukla
- **Publisher / Imprint:** Metronagon
- **Contributing Authors:** None

### Description (HTML Format for KDP)

```html
<b>{{OPENING_HOOK}}</b>

<p>{{SETUP_PARAGRAPH}}</p>

<p>{{CHARACTER_OR_TOPIC_PARAGRAPH}}</p>

<p><b>In this book:</b></p>
<ul>
<li>{{KEY_EVENT_1}}</li>
<li>{{KEY_EVENT_2}}</li>
<li>{{KEY_EVENT_3}}</li>
<li>{{KEY_EVENT_4}}</li>
<li>{{KEY_EVENT_5}}</li>
</ul>

<p>{{EMOTIONAL_HOOK_PARAGRAPH}}</p>

<p>{{SERIES_CONTEXT}}</p>

<p><i>{{CLOSING_TAGLINE}}</i></p>

<p><b>Book [N] in the <i>{{SERIES_NAME}}</i> series. From Ketan Shukla, published by Metronagon.</b></p>
```

### Keywords (7 max per book on KDP)

**Series-wide keywords (use on every book):**
1. {{SERIES_KEYWORD_1}}
2. {{SERIES_KEYWORD_2}}
3. {{SERIES_KEYWORD_3}}
4. {{SERIES_KEYWORD_4}}
5. {{SERIES_KEYWORD_5}}

**Rotating keywords (vary per book, pick 2):**
- {{ROTATING_KEYWORD_1}}
- {{ROTATING_KEYWORD_2}}
- {{ROTATING_KEYWORD_3}}
- {{ROTATING_KEYWORD_4}}
- {{ROTATING_KEYWORD_5}}
- {{ROTATING_KEYWORD_6}}

### Categories (2 per book on KDP)

**Primary Category (all books):**
- {{PRIMARY_CATEGORY}}

**Secondary Category (rotate per book):**
- Books 1-{{MID}}: {{SECONDARY_CATEGORY_EARLY}}
- Books {{MID_PLUS}}-{{TOTAL}}: {{SECONDARY_CATEGORY_LATE}}

**Additional Browse Paths to request via KDP Support:**
- {{ADDITIONAL_CATEGORY_1}}
- {{ADDITIONAL_CATEGORY_2}}
- {{ADDITIONAL_CATEGORY_3}}

### Pricing Strategy

| Format | Price | Notes |
|--------|-------|-------|
| **Kindle eBook** | ${{EBOOK_PRICE}} | 70% royalty tier (must be $2.99-$9.99) |
| **Paperback** | ${{PAPERBACK_PRICE}} | Depends on page count, aim for 40%+ royalty |
| **Hardcover** | ${{HARDCOVER_PRICE}} | Premium feel, higher margin |
| **Box Set ({{BOOKS_PER_BOX}} books)** | ${{BOX_EBOOK}} (eBook) / ${{BOX_PAPER}} (paperback) | {{NUM_BOX_SETS}} box sets |
| **Complete Series** | ${{COMPLETE_EBOOK}} (eBook) / ${{COMPLETE_PAPER}} (paperback) | All {{NUM_BOOKS}} books |

### KDP Select / Kindle Unlimited
- **Enroll in KDP Select:** YES (first 90 days minimum per book)
- **Benefit:** Access to Kindle Unlimited readers (massive discovery pool)
- **Re-evaluate:** After first 90-day term based on page reads vs. direct sales

---

## BOOK-SPECIFIC FIELDS

### Front Matter Checklist
- [ ] **Copyright page** -- Author, publisher, year, ISBN, edition
- [ ] **Dedication** -- Personal, brief, heartfelt
- [ ] **Epigraph** -- A quote that sets the book's tone
- [ ] **Map** -- (Optional) Visual guide for fiction
- [ ] **Dramatis Personae** -- Character list with brief roles (fiction only)
- [ ] **Preface** -- Author's preface (non-fiction only)
- [ ] **Introduction** -- Book introduction (non-fiction only)

### Back Matter Checklist
- [ ] **Epilogue** -- Closing narrative (non-fiction only)
- [ ] **Author's Note** -- Brief personal reflection on the book's themes
- [ ] **About the Author** -- Standard bio (same across all books)
- [ ] **Also By** -- List of other books in the series + other titles
- [ ] **Connect** -- Website (metronagon.com), email, social media links
- [ ] **Review Request** -- Polite ask for Amazon review

### Book Description Fields
- [ ] **Amazon Description** -- HTML formatted (see template above)
- [ ] **Book Summary** -- 500-word narrative summary (for marketing, NOT a synopsis)
- [ ] **One-Line Pitch** -- Single sentence that sells the book
- [ ] **Comparison Titles** -- "For fans of [X] and [Y]"

### Image Prompts
- [ ] **Cover prompt** -- Story/topic-specific cover image (photorealistic, sharp background)
- [ ] **A+ Content images** -- 3-5 promotional images for Amazon A+ page

---

## SERIES-WIDE AMAZON STRATEGY

### A+ Content (Brand Story)
- **Header Image:** Series banner with all book covers
- **Brand Story:** Metronagon publisher page with author bio and series overview
- **Comparison Chart:** Side-by-side of all books showing focus topic/character
- **Image Carousel:** Cover art and promotional images

### Launch Sequence
1. **Book 1 Launch:** Full marketing push. KDP Select. ARC readers. Social media.
2. **Books 2-{{MID}}:** Rapid release (every 4-6 weeks). Build momentum.
3. **First Box Set:** Release after completing the first act/part. Capture binge readers.
4. **Books {{MID_PLUS}}-{{LATE}}:** Steady release (every 6-8 weeks). Mid-series retention.
5. **Second Box Set:** Release after completing the second act/part.
6. **Final Books:** Accelerated release (every 4 weeks). Series finale momentum.
7. **Complete Series Box Set:** Release after the final book.

### Review Strategy
- **ARC Team:** Build 20-30 advance readers before Book 1 launch
- **Review Request:** Back matter of every book
- **Follow-up Email:** Via author mailing list (link in back matter)

### Also By Section (Standard)
```
{{SERIES_NAME}} SERIES:
Book 1: {{BOOK_1_TITLE}}
Book 2: {{BOOK_2_TITLE}}
...
Book {{NUM_BOOKS}}: {{BOOK_LAST_TITLE}}

BOX SETS:
{{BOX_SET_1_NAME}} (Books 1-{{BOX_1_END}})
{{BOX_SET_2_NAME}} (Books {{BOX_2_START}}-{{BOX_2_END}})
The Complete Series (Books 1-{{NUM_BOOKS}})

OTHER WORKS BY KETAN SHUKLA:
[List existing titles]
```

---

## FORMATTING STANDARDS

### Chapter Format
- **Chapter heading:** `# Chapter [N] -- [TITLE]`
- **POV indicator (fiction):** Italicized line below heading: `_POV: [Character Name]_`
- **Scene breaks:** `---` (three dashes)
- **Word count target:** {{WORDS_PER_CHAPTER}} words per chapter
- **Font:** Use KDP default formatting (Bookerly on Kindle)

### Manuscript Structure (per book)
```
front_matter/
  copyright.md
  dedication.md
  epigraph.md
  dramatis_personae.md    [FICTION ONLY]
  preface.md              [NON-FICTION ONLY]
  introduction.md         [NON-FICTION ONLY]
  prologue.md             [NON-FICTION ONLY]
chapters/
  chapter_01_[slug].md
  chapter_02_[slug].md
  ...
back_matter/
  epilogue.md             [NON-FICTION ONLY]
  authors_note.md
  about_the_author.md
  also_by.md
  connect.md
  review_request.md
chapter-summaries/
  chapter_01_summary.md
  ...
book-summary/
  book_[N]_summary.md
book_descriptions/
  description.md
image-prompts/
  book_[N]_cover_prompts.md
```

---

_This template applies to all books in the series. Fill in book-specific fields before each publication._

_Published by Metronagon. Author: Ketan Shukla. Website: metronagon.com. Email: ketan@metronagon.com._
