"use client";

import { Tablet, BookMarked, BookOpen } from "lucide-react";
import { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  index: number;
  onOpenBook: (index: number) => void;
}

export default function BookCard({ book, index, onOpenBook }: BookCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-dark-light/40">
      <button
        onClick={() => onOpenBook(index)}
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
            onClick={() => onOpenBook(index)}
            className="flex items-center justify-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3 py-2 text-xs sm:text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Book Details
          </button>
        </div>
      </div>
    </div>
  );
}
