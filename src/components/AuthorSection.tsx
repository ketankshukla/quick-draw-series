"use client";

import { BookOpen, Layers, Target, Map } from "lucide-react";
import { books } from "@/data/books";

// TODO: Replace {{SERIES_NAME}} with your series name
// TODO: Replace author bio paragraphs with your actual bio
// TODO: Update stats with your actual numbers
// TODO: Update series structure with your actual book titles and descriptions
export default function AuthorSection() {
  const totalChapters = books.reduce(
    (sum, book) => sum + book.chapters.length,
    0
  );

  const stats = [
    { icon: BookOpen, label: "Books", value: String(books.length) },
    { icon: Layers, label: "Chapters", value: String(totalChapters) },
    { icon: Target, label: "Domains", value: String(books.length) },
    { icon: Map, label: "Journey", value: "1" },
  ];

  return (
    <section id="author" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-light to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,67,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Author info */}
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <span className="text-primary text-xs uppercase tracking-widest font-medium">
                About the Author
              </span>
            </div>

            {/* Author photo */}
            <div className="mb-6">
              <img
                src="/images/author-photo.jpeg"
                alt="{{AUTHOR_NAME}}"
                className="w-40 h-40 rounded-full object-cover border-2 border-primary/30 shadow-primary"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
              <span className="heading-gradient">{"{{AUTHOR_NAME}}"}</span>
            </h2>

            <div className="space-y-4 text-cream/60 leading-relaxed text-base">
              {/* TODO: Replace these paragraphs with your actual author bio */}
              <p>{"{{AUTHOR_BIO_PARAGRAPH_1}}"}</p>
              <p>
                The <em>{"{{SERIES_NAME}}"}</em> series{" "}
                {"{{AUTHOR_BIO_SERIES_CONNECTION}}"}
              </p>
              <p>{"{{AUTHOR_BIO_PARAGRAPH_3}}"}</p>
            </div>

            {/* Dedication */}
            <div className="mt-8 p-6 glass rounded-xl">
              <p className="text-cream/50 italic font-serif text-center text-base">
                {/* TODO: Replace with your series dedication */}
                &ldquo;For every reader who ever believed that the journey is
                worth taking.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Stats & Series info */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover-lift"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-cream font-serif">
                    {stat.value}
                  </div>
                  <div className="text-cream/40 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Series structure */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-cream mb-4">
                Series Structure
              </h3>
              <div className="space-y-4">
                {/* TODO: Replace with your actual book titles and descriptions */}
                {books.map((book, index) => {
                  const colors = [
                    "#3b82f6",
                    "#10b981",
                    "#f59e0b",
                    "#8b5cf6",
                    "#ef4444",
                  ];
                  return (
                    <div key={book.id} className="flex items-start gap-3">
                      <div
                        className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                        style={{
                          backgroundColor: `${colors[index % colors.length]}99`,
                        }}
                      />
                      <div>
                        <p className="text-cream font-medium text-sm">
                          Book {book.roman} -- {book.title}
                        </p>
                        <p className="text-cream/40 text-xs">{book.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
