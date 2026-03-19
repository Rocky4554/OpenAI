import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CRMProduct } from "@/components/sections/CRMProduct";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

function CRMCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-14 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0A0D14] border border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Make your CRM intelligent.</h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
              Stop doing manual data entry. Start closing more deals with AI-powered insights and automation built on top of your existing CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Using OpenBusiness</Button>
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-all">Book Demo</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <CRMProduct />
        <CRMCTA />
      </main>
      <Footer />
    </div>
  );
}
