import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import {
  Mic, Phone, PhoneCall, PhoneIncoming, Headphones,
  Globe2, ArrowRight, BarChart3, Clock, CheckCircle2,
  MessageSquare, Calendar, Package, Users,
  Brain, Zap, TrendingUp, Volume2
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const fadeLeft = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };

const waveHeights = [4, 8, 12, 18, 24, 16, 10, 22, 14, 8, 18, 26, 12, 6, 20, 28, 10, 16, 8, 24, 14, 20, 6, 18, 12, 22, 8, 16, 28, 10];

export function VoiceAgentProduct() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 pointer-events-none mix-blend-screen">
        <div className="w-full h-full rounded-full blur-3xl opacity-30 bg-gradient-to-br from-orange-500/40 to-amber-500/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO ── */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
              <Mic className="w-4 h-4" /> OpenBusiness Voice Agent
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              AI Voice Agents That{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Sound Human</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Automate inbound and outbound calls with AI voice agents that speak naturally in English and Hindi — handling customer support, lead qualification, appointment booking, and more around the clock.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground mb-8">
              <Globe2 className="w-4 h-4 text-orange-400" />
              Supporting <span className="font-semibold text-white">70+ languages</span> including English, Hindi, Spanish, French & more
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#contact" className="group inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold text-sm shadow-[0_0_24px_rgba(59,130,246,0.4)] hover:shadow-[0_0_36px_rgba(59,130,246,0.6)] transition-all">
                Book a Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                id="hear-sample-call-btn"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_36px_rgba(249,115,22,0.6)] transition-all"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                Hear a Sample Call
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── HERO MOCKUP — Live Call UI ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-28 relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
          <div className="grid md:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-white/10 bg-card shadow-2xl">
            {/* Sidebar */}
            <div className="border-r border-white/5 bg-black/20 p-5 hidden md:block">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Agent — Live Calls</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">LIVE CALL</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-sm font-bold text-orange-400">R</div>
                <div>
                  <p className="text-sm font-semibold text-white">Rahul Sharma</p>
                  <p className="text-xs text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              {/* Waveform */}
              <div className="flex items-center gap-0.5 h-12 bg-black/30 rounded-xl px-3 border border-white/[0.05]">
                {waveHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [`${h * 0.4}px`, `${Math.min(h * 1.2, 28)}px`, `${h * 0.4}px`] }}
                    transition={{ duration: 0.5 + (i % 5) * 0.1, repeat: Infinity, delay: i * 0.04 }}
                    className="flex-1 bg-orange-400/60 rounded-full min-w-[2px]"
                  />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Call Duration</div>
                <div className="text-lg font-mono text-white">03:42</div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Language</div>
                <div className="text-sm text-white font-medium">Hindi</div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Intent Detected</div>
                <span className="inline-block px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium border border-orange-500/20">Service Booking</span>
              </div>
            </div>

            {/* Main area — Transcript */}
            <div className="md:col-span-2 bg-[#0A0D14] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Live Transcript</h2>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Recording
                </div>
              </div>
              <div className="space-y-4 mb-6">
                {[
                  { speaker: "Agent", text: "Hello, kya main Rahul ji se baat kar raha hoon?", lang: "Hindi", time: "0:02" },
                  { speaker: "Customer", text: "Haan ji, Rahul bol raha hoon. Kaun bol raha hai?", lang: "Hindi", time: "0:05" },
                  { speaker: "Agent", text: "Ji namaste, main Ishan, ABC Motors se bol raha hoon. Aapki Maruti Swift ke service ke baare mein call kar raha hoon.", lang: "Hindi", time: "0:10" },
                  { speaker: "Customer", text: "Haan ji, pichle kuch mahino se AC theek se cooling nahi kar raha, aur mileage bhi down ho gayi hai.", lang: "Hindi", time: "0:22" },
                  { speaker: "Agent", text: "Samajh sakta hoon Sharma ji. Humare yahan sirf genuine Maruti parts lagte hain with warranty, aur pickup-drop bhi complimentary hai.", lang: "Hindi", time: "0:30" },
                  { speaker: "Customer", text: "Achcha, yeh toh achchi baat hai. Kal ka slot ho sakta hai?", lang: "Hindi", time: "0:38" },
                  { speaker: "Agent", text: "Bilkul, kal subah 10 baje pickup team aapke ghar aa jaayegi. Confirmation message bhej dunga.", lang: "Hindi", time: "0:44" },
                ].map((msg, i) => (
                  <div key={i} className={`flex gap-3 ${msg.speaker === "Agent" ? "flex-row-reverse text-right" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${msg.speaker === "Agent" ? "bg-orange-500/20 text-orange-400" : "bg-white/10 text-white/60"}`}>
                      {msg.speaker === "Agent" ? "AI" : "C"}
                    </div>
                    <div className={`flex-1 ${msg.speaker === "Agent" ? "items-end" : ""}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold ${msg.speaker === "Agent" ? "text-orange-400" : "text-white/70"}`}>{msg.speaker}</span>
                        <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                      </div>
                      <div className={`p-3 rounded-xl text-sm leading-relaxed ${msg.speaker === "Agent" ? "bg-orange-500/10 border border-orange-500/20 text-white/90" : "bg-white/5 border border-white/5 text-white/80"}`}>
                        {msg.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Summary card */}
              <div className="rounded-xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-semibold text-orange-400">AI Summary</span>
                </div>
                <ul className="space-y-1.5 text-xs text-white/70">
                  <li>Outbound call for periodic service follow-up — Maruti Swift</li>
                  <li>Customer reported AC cooling issue & mileage drop</li>
                  <li>Service booked — pickup scheduled tomorrow 10 AM</li>
                </ul>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-green-400">
                  <ArrowRight className="w-3 h-3" /> Pickup team dispatched for tomorrow
                </div>
              </div>

              {/* Bottom tags */}
              <div className="flex flex-wrap gap-4 mt-5">
                <div className="flex-1 min-w-[140px] p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-muted-foreground mb-1">Sentiment</div>
                  <div className="text-sm font-medium text-white">Convinced</div>
                </div>
                <div className="flex-1 min-w-[140px] p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-muted-foreground mb-1">CRM Updated</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-sm font-medium text-white">Salesforce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── SECTION 1: Intelligent Call Handling ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold mb-5 border border-orange-500/20">
              <PhoneIncoming className="w-3.5 h-3.5" /> Intelligent Call Handling
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Handle hundreds of calls simultaneously — without hiring.
            </h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              Your AI voice agents answer immediately, understand what the caller needs, and resolve it — or escalate to a human when necessary. No hold music, no staffing constraints, no off-hours.
            </p>
            <div className="space-y-4">
              {[
                { icon: PhoneIncoming, label: "Inbound Call Handling", desc: "Answers instantly, identifies the caller's intent, and resolves common queries without human involvement." },
                { icon: MessageSquare, label: "Natural Conversation", desc: "Context-aware dialogue — the agent remembers what was said earlier in the call and responds accordingly." },
                { icon: TrendingUp, label: "Smart Escalation", desc: "Detects complex or emotional situations and transfers to a live agent with a full context handoff." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="Call Analytics — Today">
              <div className="p-5 bg-[#0A0D14]">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { val: "248", label: "Calls Handled", sub: "Today", color: "text-orange-400" },
                    { val: "91%", label: "Resolved by AI", sub: "No escalation", color: "text-green-400" },
                    { val: "2m 14s", label: "Avg Duration", sub: "Per call", color: "text-primary" },
                  ].map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className={`text-2xl font-bold mb-0.5 ${s.color}`}>{s.val}</div>
                      <div className="text-xs text-white font-medium">{s.label}</div>
                      <div className="text-[10px] text-muted-foreground">{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Recent calls */}
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Calls</div>
                <div className="space-y-2">
                  {[
                    { name: "Rahul Sharma", lang: "Hindi", topic: "Service booking", dur: "3:42", status: "Booked", sc: "text-green-400", sbc: "bg-green-500/10 border-green-500/20" },
                    { name: "Sarah Johnson", lang: "English", topic: "Product inquiry", dur: "1:48", status: "Resolved", sc: "text-green-400", sbc: "bg-green-500/10 border-green-500/20" },
                    { name: "Amit Kumar", lang: "Hindi", topic: "Complaint", dur: "4:05", status: "Escalated", sc: "text-orange-400", sbc: "bg-orange-500/10 border-orange-500/20" },
                    { name: "David Chen", lang: "English", topic: "Appointment booking", dur: "2:31", status: "Resolved", sc: "text-green-400", sbc: "bg-green-500/10 border-green-500/20" },
                  ].map((call, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center border border-white/10 shrink-0 text-xs font-bold text-orange-300">
                        {call.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-sm text-white">{call.name}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-white/5 text-muted-foreground">{call.lang}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{call.topic} · {call.dur}</div>
                      </div>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-semibold border ${call.sbc} ${call.sc}`}>{call.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── USE CASES: One agent. Many jobs. ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-28">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold mb-5 border border-orange-500/20">
              <Zap className="w-3.5 h-3.5" /> What Your Voice Agent Can Do
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">One agent. Many jobs.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Deploy the same AI voice agent across multiple workflows — each configured for its specific role.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Headphones,
                title: "Customer Support",
                desc: "Handle common queries — order status, refunds, account help, FAQs — instantly and accurately.",
                items: ["Order tracking", "Return requests", "Account issues"],
                color: "text-orange-400",
                bg: "bg-orange-500/10",
                border: "border-orange-500/20",
              },
              {
                icon: Users,
                title: "Lead Qualification",
                desc: "Call new leads, ask qualifying questions, and score them before handing off to your sales team.",
                items: ["Intro calls", "Needs assessment", "CRM auto-update"],
                color: "text-amber-400",
                bg: "bg-amber-400/10",
                border: "border-amber-400/20",
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                desc: "Schedule, confirm, and reschedule appointments via phone — synced directly to your calendar.",
                items: ["Booking calls", "Confirmations", "Reminders"],
                color: "text-primary",
                bg: "bg-primary/10",
                border: "border-primary/20",
              },
              {
                icon: Package,
                title: "Order & Delivery",
                desc: "Proactively notify customers of order updates and handle delivery enquiries without agent involvement.",
                items: ["Dispatch alerts", "ETA updates", "Missed delivery"],
                color: "text-green-400",
                bg: "bg-green-400/10",
                border: "border-green-400/20",
              },
            ].map((card, i) => (
              <div key={i} className={`p-6 rounded-2xl bg-white/[0.02] border ${card.border} hover:bg-white/[0.04] transition-all duration-300`}>
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-4`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <h3 className="font-bold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{card.desc}</p>
                <div className="space-y-1.5">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-white/60">
                      <ArrowRight className={`w-3 h-3 ${card.color}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── SECTION 2: Post-Call Intelligence ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold mb-5 border border-orange-500/20">
              <Brain className="w-3.5 h-3.5" /> CRM & Post-Call Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every call logged, summarized, and acted on — automatically.
            </h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              Every conversation is transcribed, summarized, and pushed back into your CRM with the customer's intent, sentiment, and next steps — so your team always knows what happened, without listening to recordings.
            </p>
            <div className="space-y-4">
              {[
                { icon: Volume2, label: "Auto Transcription", desc: "Full call transcripts stored and linked to the CRM contact record after every call." },
                { icon: Brain, label: "AI Call Summary", desc: "Key points, customer intent, and recommended next actions extracted from every conversation." },
                { icon: TrendingUp, label: "Sentiment Analysis", desc: "Real-time and post-call sentiment scoring so you can prioritize unhappy customers." },
                { icon: Zap, label: "CRM Auto-Update", desc: "Notes, outcomes, follow-up tasks, and lead scores updated in Salesforce, HubSpot, and more — no manual input." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="Post-Call Intelligence">
              <div className="p-5 bg-[#0A0D14]">
                {/* Call header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-sm font-bold text-orange-400">R</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">Rahul Sharma</p>
                    <p className="text-xs text-muted-foreground">Call ended · 3 min 42 sec · Hindi</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-green-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Booked
                  </div>
                </div>

                {/* AI Summary */}
                <div className="rounded-xl bg-gradient-to-r from-orange-500/5 to-amber-500/5 border border-orange-500/20 p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-semibold text-orange-400">AI Summary</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    <li>• Outbound service follow-up for Maruti Swift (ending 1234)</li>
                    <li>• Customer reported AC cooling & mileage drop issues</li>
                    <li>• Convinced customer with genuine parts + free pickup-drop</li>
                    <li>• Service booked — pickup tomorrow 10 AM</li>
                  </ul>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-green-400">
                    <ArrowRight className="w-3 h-3" /> Pickup team scheduled · Confirmation SMS sent
                  </div>
                </div>

                {/* Sentiment + CRM */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] text-muted-foreground mb-1">Sentiment</div>
                    <div className="text-sm font-medium text-white">Convinced</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] text-muted-foreground mb-1">CRM Updated</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className="text-sm font-medium text-white">Salesforce</span>
                    </div>
                  </div>
                </div>

                {/* Transcript snippet */}
                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4">
                  <div className="text-[10px] text-muted-foreground mb-2">Full Transcript Snippet</div>
                  <div className="space-y-2 text-xs">
                    <p><span className="font-semibold text-orange-400">Agent:</span> <span className="text-white/60">Aapki Swift kaise perform kar rahi hai? Koi problem toh nahi?</span></p>
                    <p><span className="font-semibold text-white">Customer:</span> <span className="text-white/60">AC theek se cooling nahi kar raha, mileage bhi down...</span></p>
                    <p><span className="font-semibold text-orange-400">Agent:</span> <span className="text-white/60">Genuine Maruti parts with warranty, pickup-drop complimentary hai.</span></p>
                    <p><span className="font-semibold text-white">Customer:</span> <span className="text-white/60">Achcha, kal ka slot ho sakta hai?</span></p>
                  </div>
                </div>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── BILINGUAL FROM DAY ONE ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1117] to-[#080b12] p-10 md:p-14 mb-28"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe2 className="w-6 h-6 text-orange-400" />
              <h2 className="text-3xl md:text-4xl font-bold">70+ Languages Supported</h2>
            </div>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Our Voice Agents support over 70 languages — understanding accents, regional phrases, and natural speech patterns across the globe.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { lang: "English", flags: "🇺🇸 🇬🇧", status: "Live", statusColor: "text-green-400 bg-green-500/10 border-green-500/20", sub: "Full support — US, UK, AU accents" },
              { lang: "Hindi", flags: "🇮🇳", status: "Live", statusColor: "text-green-400 bg-green-500/10 border-green-500/20", sub: "Full support — multiple regional accents" },
              { lang: "70+ Languages", flags: "🌍", status: "Live", statusColor: "text-green-400 bg-green-500/10 border-green-500/20", sub: "Spanish, French, Arabic, Mandarin & more" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-colors">
                <div className="text-3xl mb-3">{item.flags}</div>
                <div className="text-lg font-bold text-white mb-2">{item.lang}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${item.statusColor} mb-3`}>{item.status}</span>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BUSINESS IMPACT STATS ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1117] to-[#080b12] p-10 md:p-14"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Scale your voice operations instantly.</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">No hiring. No training. AI voice agents that handle calls 24/7 in multiple languages.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, stat: "10×", label: "More calls handled", sub: "Scale without adding headcount" },
              { icon: Clock, stat: "<1s", label: "Pickup time", sub: "Zero hold time, instant answers" },
              { icon: BarChart3, stat: "91%", label: "Resolution rate", sub: "Most queries resolved without escalation" },
              { icon: Zap, stat: "24/7", label: "Always available", sub: "No off-hours, no missed calls" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
