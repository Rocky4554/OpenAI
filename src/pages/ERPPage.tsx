import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ERPProduct } from "@/components/sections/ERPProduct";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

function ERPCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-14 rounded-3xl bg-gradient-to-br from-[#06080C] to-[#040608] border border-teal-500/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 mx-auto">
              <Activity className="w-7 h-7 text-teal-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Make your ERP intelligent.</h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
              Operate your business with intelligence. Reduce operational complexity, identify inefficiencies, and automate workflows — all without replacing your ERP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm transition-all">
                Schedule a Demo
              </a>
              <Button size="lg" variant="outline" className="border-teal-500/30 hover:border-teal-500/60">
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <ERPProduct />
        <ERPCTA />
      </main>
      <Footer />
    </div>
  );
}
