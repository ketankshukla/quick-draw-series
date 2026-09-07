# SPEC - quick-draw-series

> What this repo is for, what it deliberately does not do, and what must stay
> true for a change to be correct.

**5 books, spaghetti western - architected and in production**

## 1. Purpose

The fourth series: a five-book saga set in the 1870s Arizona Territory, published
under the pen name **Harlan J. Westbrook**.

It is the first series planned **from the template** rather than from scratch,
which makes it the test of whether `book-series-template` actually captured what
the previous three needed.

## 2. Scope

**In scope** - the series plan; front and back matter templates; image prompt
templates for covers and character art; the Amazon production scaffold; the
Next.js series site.

**Explicitly out of scope**

- **Completed manuscripts.** The series is architected and in production. This
  repo is honest about being a scaffold with a plan, not a finished series - and
  the SPEC says so rather than implying otherwise.
- **The generation pipeline.**
- **Distribution.**

## 3. Architecture

Follows `book-series-template` exactly: brief-driven structure, parameterised
Next.js site, planning documents, Amazon production scaffold, prompt templates.

## 4. Invariants

1. **The pen name is consistent everywhere.** Harlan J. Westbrook is the author
   of record across manuscripts, metadata, covers and the site. A single
   attribution to the real name breaks the pen name across the catalogue.
2. **Template structure is not diverged from without updating the template.**
   The whole point of this series is to validate the template; a local fix that
   is not fed back means the fifth series rediscovers the same gap.
3. **Genre conventions are followed deliberately.** The western has strong reader
   expectations - period, setting, cover language - and the series plan commits
   to them.
4. **Status is stated accurately** in the README and here. A scaffold described
   as a finished series is the one failure mode that matters for a portfolio.

## 5. Known limitations

- **Manuscripts are not complete.**
- **Untested cover direction** - the western visual language is unlike the
  previous three series, so the prompt templates carry the least evidence.
- **Pen name means the series does not accrue to the author's own name**, which
  is the intended trade.

## 6. Related

Template: [`book-series-template`](https://github.com/ketankshukla/book-series-template) -
Pipeline: [`agentic-development-v3`](https://github.com/ketankshukla/agentic-development-v3)
