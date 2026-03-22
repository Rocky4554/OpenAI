import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "/#how-it-works", isAnchor: true },
    { name: "Use Cases", href: "/#use-cases", isAnchor: true },
    { name: "Voice Agent", href: "/voice", isAnchor: false },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-lg shadow-black/20" : "bg-transparent py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-white">
              OpenBusiness<span className="text-primary">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(link.href) ? "text-white" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <HoverBorderGradient
              as="a"
              href="/#contact"
              containerClassName="rounded-full"
              className="bg-[#0A0E1A] text-white flex items-center space-x-2 text-sm font-medium px-5 py-2"
            >
              Get Your 48-Hour Report
            </HoverBorderGradient>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) =>
                link.isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name === "Voice Agent" && <Mic className="w-4 h-4 text-orange-400" />}
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name === "Voice Agent" && <Mic className="w-4 h-4 text-orange-400" />}
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-base font-medium bg-primary hover:bg-blue-600 text-white px-4 py-3 rounded-xl shadow-lg shadow-[rgba(59,130,246,0.2)] transition-all"
                >
                  Get Your 48-Hour Report
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
