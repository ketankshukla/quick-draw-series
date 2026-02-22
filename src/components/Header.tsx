"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";

// TODO: Replace {{SERIES_NAME}} with your series name
// TODO: Replace {{AUTHOR_NAME}} with your author name
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#books", label: "The Books" },
    { href: "#author", label: "The Author" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-dark border-primary/20 shadow-primary"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <BookOpen className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-primary-light group-hover:rotate-12" />
              <div className="absolute -inset-1 animate-pulse rounded-full bg-primary/20 blur-sm" />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-xs font-semibold tracking-[0.25em] uppercase text-primary transition-colors group-hover:text-primary-light">
                {"{{SERIES_NAME}}"}
              </p>
              <p className="font-serif text-sm text-foreground/70 transition-colors group-hover:text-foreground italic">
                {"by {{AUTHOR_NAME}}"}
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-foreground/70 transition-all duration-300 hover:text-primary hover:scale-105"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 rounded-lg p-2 text-foreground/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="glass-dark border-t border-primary/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/70 transition-all duration-300 hover:text-primary hover:translate-x-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
