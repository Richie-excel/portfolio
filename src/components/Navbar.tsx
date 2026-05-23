import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

import { DESCRIPTIONS, NAV_ITEMS } from "@/constants";
import { useScrollProgress } from "@/hooks/scrollProgress";
import { ThemeSwitch } from "@/components/ThemeSwitch"

export default function Navbar() {
  const progress = useScrollProgress();

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 z-100 h-0.5 bg-linear-to-r from-emerald-400 to-teal-400 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-slate-950/80 border-b border-emerald-500/10 shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="text-xl font-black tracking-tight"
          >
            <span className="text-primary">
              Tech
            </span>

            <span className="text-emerald-400">
              With
            </span>

            <span className="text-[#fb923c]">
              Richie
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm text-primary hover:text-emerald-400 hover:cursor-pointer hover:scale-105 transition-colors duration-200 rounded-lg hover:border-b-emerald-300 hover:border-b-2 font-medium tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 mr-1">
            <ThemeSwitch />

            {/* CTA */}
            <button
              onClick={() =>
                scrollTo("contact")
              }
              className="hidden md:flex items-center gap-2 hover:cursor-pointer px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-all duration-200"
            >
              {DESCRIPTIONS.hire_me}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              title="Toggle menu"
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-2 bg-slate-900/95 border-t border-slate-800">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(item)
                }
                className="py-2 text-left text-primary hover:text-emerald-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}