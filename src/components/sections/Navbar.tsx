import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Activity, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const anchorLinks: { name: string; href: string }[] = [];

  const productLinks = [
    {
      name: "CRM Intelligence",
      href: "/crm",
      icon: Sparkles,
      desc: "AI on top of your existing CRM",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      name: "ERP Intelligence",
      href: "/erp",
      icon: Activity,
      desc: "Operational AI for your ERP",
      color: "text-teal-400",
      bg: "bg-teal-400/10",
    },
    {
      name: "Voice Agent",
      href: "/voice-agent",
      icon: Mic,
      desc: "AI voice agents that sound human",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
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
            {/* Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                setProductsOpen(true);
              }}
              onMouseLeave={() => {
                hoverTimeoutRef.current = setTimeout(() => setProductsOpen(false), 150);
              }}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                  (isActive("/crm") || isActive("/erp") || isActive("/voice-agent")) ? "text-white" : "text-muted-foreground hover:text-white"
                )}
              >
                Products
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 overflow-hidden p-2"
                  >
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", item.bg)}>
                          <item.icon className={cn("w-4 h-4", item.color)} />
                        </div>
                        <div>
                          <div className={cn("text-sm font-medium", isActive(item.href) ? "text-white" : "text-white/80 group-hover:text-white")}>{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Anchor links */}
            {anchorLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Pricing — dedicated page */}
            <Link
              href="/pricing"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/pricing") ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#contact"
              className="text-sm font-medium bg-[#f97316] hover:bg-[#ea6c0a] text-white px-5 py-2 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all"
              Request Demo
            </a>
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
              {/* Product links in mobile */}
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">Products</div>
              {productLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className={cn("w-4 h-4", item.color)} />
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border/30 my-2" />
              {anchorLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/pricing"
                className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center text-base font-medium bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-3 rounded-xl shadow-lg shadow-[rgba(249,115,22,0.2)] transition-all"
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
