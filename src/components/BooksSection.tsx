"use client";

import { Tablet, BookMarked, BookOpen, Library } from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

// TODO: Replace the Amazon URL with your complete series URL
export default function BooksSection() {
  const { openBook } = useBook();

  return (
    <section
      id="books"
      className="relative px-4 py-20 sm:py-28 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-primary/70 mb-4 sm:text-base">
            The Complete Series
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl mb-4">
            {/* TODO: Update with your book/chapter counts */}
            {books.length} Books. {books[books.length - 1]?.chapters[books[books.length - 1].chapters.length - 1]?.number || 0} Chapters.
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-primary/50 text-sm">&#10022;</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            {/* TODO: Replace with your series tagline */}
            Each book builds on the last -- a progressive journey from beginning to mastery.
          </p>
        </div>

        {/* Books Grid */}
        <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${books.length <= 5 ? "lg:grid-cols-" + books.length : "lg:grid-cols-4"} mb-12`}>
          {books.map((book, index) => (
            <div
              key={book.id}
              className="flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-dark-light/40"
            >
              {/* Cover Image */}
              <button
                onClick={() => openBook(index)}
                className="group text-left"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </button>

              {/* Card Info + Buttons */}
              <div className="flex flex-col flex-1 p-3 sm:p-4">
                <p className="font-serif text-xs tracking-[0.25em] uppercase text-primary/60 mb-1">
                  Book {book.roman}
                </p>
                <h3 className="font-serif text-sm font-bold text-cream mb-1 sm:text-base">
                  {book.title}
                </h3>
                <p className="text-xs text-foreground/50 italic leading-relaxed mb-3">
                  {book.subtitle}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  <a
                    href={book.kindleUrl || "https://www.amazon.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-[#FF9900] py-2 px-3 text-xs sm:text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] active:scale-95"
                  >
                    <Tablet className="h-3.5 w-3.5 shrink-0" />
                    Buy Kindle
                  </a>
                  <a
                    href={book.paperbackUrl || "https://www.amazon.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border border-primary/40 bg-primary/10 py-2 px-3 text-xs sm:text-sm font-bold tracking-wide text-primary transition-all duration-200 hover:bg-primary/20 hover:border-primary/60 active:scale-95"
                  >
                    <BookMarked className="h-3.5 w-3.5 shrink-0" />
                    Buy Paperback
                  </a>
                  <button
                    onClick={() => openBook(index)}
                    className="flex items-center justify-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-2 text-xs sm:text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    Book Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Buy Complete Series */}
        <div className="text-center">
          <p className="font-serif text-xs tracking-[0.25em] uppercase text-primary/50 mb-4">
            Own the complete series
          </p>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FF9900] px-8 py-3 text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] hover:shadow-lg hover:shadow-[#FF9900]/20 active:scale-95"
          >
            <Library className="h-4 w-4 shrink-0" />
            Buy The Complete Series on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
