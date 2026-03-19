import { motion } from "framer-motion";
import { Mic, Globe2, Activity, RefreshCw, PhoneCall } from "lucide-react";

export function VoiceHighlight() {
  const features = [
    { icon: <PhoneCall className="w-4 h-4" />, text: "Outbound AI calling campaigns" },
    { icon: <Globe2 className="w-4 h-4" />, text: "Multilingual support — 50+ languages" },
    { icon: <Activity className="w-4 h-4" />, text: "Live sentiment & transcript analysis" },
    { icon: <Mic className="w-4 h-4" />, text: "Automated reminders and follow-ups" },
    { icon: <RefreshCw className="w-4 h-4" />, text: "Auto-syncs outcomes back to your CRM" },
  ];

  const waveHeights = [4,8,12,18,24,16,10,22,14,8,18,26,12,6,20,28,10,16,8,24,14,20,6,18,12,22,8,16,28,10];

  return (
    <section className="py-12 relative overflow-hidden border-y border-white/[0.05]" id="voice">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-background to-background pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-10">

        {/* Left: Text */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            <Mic className="w-4 h-4" />
            <span>AI Voice Agents — scalable, multilingual outreach</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Speak to Your Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">at Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-muted-foreground mb-5 leading-relaxed"
          >
            Deploy AI voice agents that handle outbound calls, reminders, multilingual conversations, and feedback collection — with real-time transcription and automatic CRM sync.
          </motion.p>

          <ul className="space-y-2 mb-5">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.08) }}
                className="flex items-center gap-3 text-white/90"
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/20 flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <a href="/#contact" className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-500/90 text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300">
              Start Free Trial
            </a>
          </motion.div>
        </div>

        {/* Right: Product UI Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full"
        >
          <div className="rounded-2xl overflow-hidden border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.12)] bg-[#0A0E1A]">
            {/* Mac window bar */}
            <div className="bg-white/[0.04] px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-muted-foreground">Voice AI · Campaign Manager</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                Live
              </span>
            </div>

            {/* Campaign stats row */}
            <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
              {[
                { label: "Calls Today", val: "247" },
                { label: "Connect Rate", val: "89%" },
                { label: "Avg Sentiment", val: "Pos ↑" }
              ].map((s, i) => (
                <div key={i} className="p-4 text-center">
                  <p className="text-xl font-bold text-white">{s.val}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Active call panel */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-indigo-500/15 flex items-center justify-center relative border border-indigo-500/20">
                  <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-ping" />
                  <span className="text-xs text-indigo-400 font-bold relative z-10">AI</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Sarah (AI Agent) · Live Call</p>
                  <p className="text-xs text-green-400">● Speaking with María García (ES)</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-white">02:14</p>
                  <p className="text-[10px] text-muted-foreground">Duration</p>
                </div>
              </div>

              {/* Waveform */}
              <div className="flex items-center gap-0.5 h-14 mb-5 bg-black/30 rounded-xl px-4 border border-white/[0.05]">
                {waveHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h}px`, `${Math.min(h * 2.2, 36)}px`, `${h}px`] }}
                    transition={{ duration: 0.5 + (i % 5) * 0.1, repeat: Infinity, delay: i * 0.04 }}
                    className="flex-1 bg-indigo-400/60 rounded-full min-w-[2px]"
                  />
                ))}
              </div>

              {/* Transcript */}
              <div className="bg-black/30 rounded-xl p-4 border border-white/[0.05] mb-4">
                <p className="text-[10px] text-muted-foreground mb-1.5">Live Transcript</p>
                <p className="text-sm text-white/90 leading-relaxed">"Sí, me interesa programar una cita para el viernes..."</p>
                <p className="text-[10px] text-indigo-400 mt-2">→ AI: Booking Friday 3PM · Syncing to CRM automatically</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-300 text-[10px] border border-green-500/20 font-medium">Positive Intent</span>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 text-[10px] border border-blue-500/20 font-medium">ES · Appointment</span>
                <span className="px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 text-[10px] border border-purple-500/20 font-medium">CRM Sync ✓</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
