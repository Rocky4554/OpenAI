import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { VoiceAgentProduct } from "@/components/sections/VoiceAgentProduct";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

function VoiceAgentCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-14 rounded-3xl bg-gradient-to-br from-[#111827] to-[#0A0D14] border border-orange-500/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 mx-auto">
              <Mic className="w-7 h-7 text-orange-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Ready to deploy your AI voice agent?</h2>
            <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
              Go live in minutes. Handle thousands of calls in English and Hindi — with full CRM integration, real-time transcription, and intelligent escalation built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm shadow-[0_0_24px_rgba(249,115,22,0.4)] transition-all">
                Book a Demo
              </a>
              <Button size="lg" variant="outline" className="border-orange-500/30 hover:border-orange-500/60">
                Hear a Sample Call
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function VoiceAgentPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1">
        <VoiceAgentProduct />
        <VoiceAgentCTA />
      </main>
      <Footer />
    </div>
  );
}
