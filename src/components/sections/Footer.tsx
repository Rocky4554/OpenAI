import { BrainCircuit, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-16">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <BrainCircuit className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                OpenBusiness<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              The intelligence layer that connects to your existing CRM and ERP tools to add automation, insights, and voice agents.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div className="flex gap-8 mx-auto">
            {[
              { label: "CRM Intelligence", href: "/crm" },
              { label: "ERP Intelligence", href: "/erp" },
              { label: "Voice Agent", href: "/voice-agent" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 hover:tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenBusiness.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
