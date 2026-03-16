import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import {
  Sparkles, TrendingUp, BellRing, Mail, CheckCircle2,
  Database, Target, Activity, ShieldCheck, ArrowRight,
  BrainCircuit, MessageSquare, FileText, Upload, Clock,
  AlertTriangle, BarChart3, Users, Zap, ChevronRight,
  Star, Eye, Phone
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function CRMProduct() {
  return (
    <section id="crm-intel" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 pointer-events-none mix-blend-screen">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-glow-crm.png`}
          alt="Abstract Glow"
          className="w-full h-full object-cover rounded-full blur-3xl opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO ── */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              OpenBusiness CRM Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Add an <span className="text-gradient-primary">AI Brain</span> to{" "}
              <br className="hidden md:block" />
              Your CRM
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Keep your existing CRM. Add AI intelligence. Automatically surface insights, draft communications, suggest next actions, and automate follow-ups — all without changing your workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto group">
                Book Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Connect Your CRM
              </Button>
            </div>
          </motion.div>
        </div>

        {/* ── HERO MOCKUP ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-32 relative"
        >
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none" />
          <MockWindow title="OpenBusiness CRM Intelligence" className="h-[600px] flex">
            <div className="w-56 border-r border-white/5 bg-black/20 p-4 hidden md:flex flex-col gap-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Intelligence</div>
              {['Overview', 'Lead Priority', 'Deal Risk', 'Communications', 'Data Health'].map((item, i) => (
                <div key={item} className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${i === 0 ? 'bg-primary/20 text-primary font-medium' : 'text-muted-foreground hover:bg-white/5'}`}>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex-1 bg-[#0A0D14] p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Pipeline Overview</h2>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" /> Salesforce Connected
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Hot Leads", val: "9", icon: Star, color: "text-amber-400", bg: "bg-amber-400/10" },
                  { label: "At-Risk Deals", val: "4", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-400/10" },
                  { label: "Next Actions", val: "12", icon: Zap, color: "text-primary", bg: "bg-primary/10" },
                ].map((s, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center mb-3`}>
                      <s.icon className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <div className="text-2xl font-bold mb-0.5">{s.val}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">AI Prioritized Actions</div>
                {[
                  { company: "Acme Corp", action: "Draft follow-up", score: 96, reason: "No response in 4 days — probability dropping", tag: "Hot" },
                  { company: "Globex Inc", action: "Schedule demo", score: 91, reason: "Visited pricing page 3× this week", tag: "Warm" },
                  { company: "Soylent Co", action: "Send ROI report", score: 74, reason: "Competitor mentioned in last call", tag: "Risk" },
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shrink-0 text-xs font-bold">
                      {a.company[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-medium text-sm text-white">{a.company}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${a.tag === 'Hot' ? 'bg-amber-400/20 text-amber-400' : a.tag === 'Risk' ? 'bg-red-400/20 text-red-400' : 'bg-emerald-400/20 text-emerald-400'}`}>{a.tag}</span>
                      </div>
                      <div className="text-xs text-muted-foreground truncate">{a.reason}</div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">{a.score}</span>
                      <button className="text-xs px-2 py-1 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors">{a.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MockWindow>
        </motion.div>

        {/* ── INTEGRATIONS ── */}
        <div className="text-center mb-32">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">Works with the CRM tools your team already uses</p>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            {['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics', 'Pipedrive'].map(crm => (
              <div key={crm} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:border-primary/30 hover:bg-white/8 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium">{crm}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Connect your CRM in minutes. No migration required. No data exported.</p>
        </div>

        {/* ── FEATURE 1: Lead Prioritization ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-semibold mb-6 border border-amber-400/20">
              <Star className="w-3.5 h-3.5" /> Feature 01 — Lead Prioritization
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Know exactly which leads to call first.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Sales teams waste hours chasing cold leads while hot prospects slip away. OpenBusiness AI analyzes every signal in your CRM and ranks leads by their likelihood to convert — so your reps always know where to focus.
            </p>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              AI analyzes: recent activity, response history, deal size, company profile, email engagement, time-to-response patterns, and communication frequency — then assigns a live score updated throughout the day.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time lead scoring updated as activity happens",
                "Signals from emails, calls, meetings, and page visits",
                "Automatic hot-lead alerts sent to your team",
                "Prioritized daily call list for each sales rep",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="AI Lead Scoring">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="flex justify-between text-xs text-muted-foreground pb-3 border-b border-white/10 font-medium uppercase tracking-wider">
                  <span>Lead</span>
                  <span>Signals</span>
                  <span>AI Score</span>
                </div>
                {[
                  { name: "Acme Corp — Enterprise", signals: ["Email opened 4×", "Pricing page"], score: 98, tier: "Hot" },
                  { name: "TechNova — Expansion", signals: ["Demo attended", "Follow-up sent"], score: 85, tier: "Hot" },
                  { name: "BlueOcean — Pilot", signals: ["1 email replied"], score: 54, tier: "Warm" },
                  { name: "Initech — Cold Intro", signals: ["No activity 12d"], score: 18, tier: "Cold" },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-white truncate">{lead.name}</div>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {lead.signals.map(s => (
                          <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className={`text-xs font-bold px-3 py-1.5 rounded-lg shrink-0 ${
                      lead.tier === 'Hot' ? 'bg-amber-400/20 text-amber-400' :
                      lead.tier === 'Warm' ? 'bg-emerald-400/20 text-emerald-400' :
                      'bg-white/10 text-muted-foreground'
                    }`}>
                      {lead.score} / 100
                    </div>
                  </div>
                ))}
                <div className="pt-2 text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" /> Scores updated every 15 minutes from your CRM
                </div>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── FEATURE 2: AI Communication Assistant ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 md:order-1">
            <MockWindow title="Compose — AI Assistant">
              <div className="p-4 bg-[#0A0D14] space-y-3">
                <div className="bg-white/5 rounded-lg p-3 text-xs space-y-2 border border-white/10">
                  <div className="flex gap-2 pb-2 border-b border-white/10">
                    <span className="text-muted-foreground w-10">To:</span>
                    <span className="text-white">sarah@acmecorp.com</span>
                  </div>
                  <div className="flex gap-2 pb-2 border-b border-white/10">
                    <span className="text-muted-foreground w-10">Subj:</span>
                    <span className="text-white">Following up on our Q3 proposal</span>
                  </div>
                  <div className="text-muted-foreground/80 pt-1 leading-relaxed">
                    Hi Sarah, great speaking with you last week. As discussed, I've attached the ROI projections for your Q3 expansion goals. Happy to walk through them on a call...
                  </div>
                </div>
                {/* AI Toolbar */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                    <Sparkles className="w-3.5 h-3.5" /> AI Writing Assistant
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {['Improve Tone', 'Make Concise', 'Add Call-to-Action', 'Translate to Spanish'].map(btn => (
                      <button key={btn} className="text-[11px] px-2 py-1.5 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-left">{btn}</button>
                    ))}
                  </div>
                </div>
                {/* Suggestion */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-xs">
                  <div className="text-muted-foreground mb-1 font-semibold">AI Suggestion</div>
                  <div className="text-muted-foreground/70 mb-2">Based on her last call notes, mention the security compliance requirement she raised.</div>
                  <button className="text-xs px-3 py-1 rounded-lg bg-primary text-white font-medium">Apply</button>
                </div>
              </div>
            </MockWindow>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <Mail className="w-3.5 h-3.5" /> Feature 02 & 03 — AI Communication
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Write better emails, faster — with AI that knows your deal.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              AI drafts context-aware follow-up emails, improves your tone, generates meeting summaries, and even transcribes voice notes into clean CRM entries — all from inside your existing workflow.
            </p>
            <div className="grid grid-cols-1 gap-3 mb-6">
              {[
                { icon: Sparkles, title: "Improve This Text", desc: "Write a draft, click AI — get a refined version with better clarity and tone instantly." },
                { icon: Mail, title: "AI-Drafted Emails", desc: "Generate full follow-ups, proposals, and confirmations from CRM context in one click." },
                { icon: FileText, title: "Meeting & Call Summaries", desc: "Upload a voice note or transcript — AI outputs a clean bullet-point summary with next steps." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── FEATURE 3: Smart Data Import ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-400/10 text-violet-400 text-xs font-semibold mb-6 border border-violet-400/20">
              <Upload className="w-3.5 h-3.5" /> Feature 04 — Smart Data Import
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Import CSVs without manual field mapping.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              When importing contact or lead lists, AI reads your column headers and sample values — then automatically matches them to the right CRM fields. No more dragging and guessing.
            </p>
            <ul className="space-y-3">
              {[
                "AI reads column headers and data samples to infer field types",
                "Maps to your CRM's custom and standard fields automatically",
                "Flags ambiguous columns for quick human review",
                "Saves your mapping as a reusable import template",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="CSV Import — AI Field Mapping">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs text-muted-foreground mb-3">Imported file: <span className="text-white">leads_q3_batch.csv</span> — 247 rows</div>
                <div className="space-y-2">
                  {[
                    { csvCol: "full_name", detected: "Contact Name", confidence: 99, ok: true },
                    { csvCol: "biz_email", detected: "Email Address", confidence: 97, ok: true },
                    { csvCol: "company", detected: "Account Name", confidence: 95, ok: true },
                    { csvCol: "ph_number", detected: "Phone (Work)", confidence: 88, ok: true },
                    { csvCol: "src_channel", detected: "Lead Source", confidence: 71, ok: false },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border text-xs ${row.ok ? 'bg-white/[0.02] border-white/5' : 'bg-amber-400/5 border-amber-400/20'}`}>
                      <span className="font-mono text-muted-foreground w-28 shrink-0">{row.csvCol}</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
                      <span className="text-white flex-1">{row.detected}</span>
                      <span className={`font-semibold ${row.ok ? 'text-emerald-400' : 'text-amber-400'}`}>{row.confidence}%</span>
                      {!row.ok && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-400">Review</span>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-muted-foreground">4/5 fields auto-mapped</span>
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white font-medium">Confirm Import</button>
                </div>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── FEATURE 4: Automated Follow-Ups & Next Steps ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 md:order-1">
            <MockWindow title="AI Follow-Up & Next Step Suggestions">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Active Automation Rules</div>
                {[
                  { rule: "No response after 3 days", action: "Notify account owner to follow up", trigger: "Triggered 6 times today", status: "active" },
                  { rule: "Deal at 'Proposal Sent' > 7 days", action: "Ping manager for deal review", trigger: "Triggered 2 times today", status: "active" },
                  { rule: "Decision-maker not engaged", action: "Suggest escalation email template", trigger: "Watching 4 deals", status: "watching" },
                ].map((r, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">{r.rule}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${r.status === 'active' ? 'bg-emerald-400/20 text-emerald-400' : 'bg-amber-400/20 text-amber-400'}`}>{r.status}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">→ {r.action}</div>
                    <div className="text-[10px] text-muted-foreground/50">{r.trigger}</div>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">AI Next Step Suggestions</div>
                  {[
                    { deal: "Widget Co", step: "Send pricing email", why: "Stage: Negotiation — 11 days idle" },
                    { deal: "Nexus Labs", step: "Schedule product demo", why: "High score, no demo yet" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 mb-2">
                      <BrainCircuit className="w-4 h-4 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white">{s.deal}: {s.step}</div>
                        <div className="text-[10px] text-muted-foreground">{s.why}</div>
                      </div>
                      <button className="text-[10px] px-2 py-1 rounded bg-primary/20 text-primary font-medium shrink-0">Do it</button>
                    </div>
                  ))}
                </div>
              </div>
            </MockWindow>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-semibold mb-6 border border-emerald-400/20">
              <Clock className="w-3.5 h-3.5" /> Feature 05 & 07 — Follow-ups & Next Steps
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Never let a deal slip through the cracks.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              AI sets up smart automations in plain English — "if a lead hasn't responded in 3 days, notify the owner" — and continuously suggests the exact next action your rep should take based on deal stage and communication history.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: BellRing, title: "Automated Reminders", desc: "Rule-based alerts for stale leads, unanswered emails, and inactive deals." },
                { icon: Zap, title: "Natural Language Rules", desc: "Describe your automation in plain English. AI converts it into a working workflow." },
                { icon: Target, title: "Next-Step Suggestions", desc: "AI recommends: send pricing, schedule demo, loop in manager — based on deal context." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-400/20 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── FEATURE 5: Deal Risk Detection ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-400/10 text-red-400 text-xs font-semibold mb-6 border border-red-400/20">
              <AlertTriangle className="w-3.5 h-3.5" /> Feature 08 — Deal Risk Detection
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Catch failing deals before it's too late.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Managers often find out a deal is lost only when it's already gone. OpenBusiness AI continuously monitors your pipeline for warning signs and flags at-risk deals while there's still time to save them.
            </p>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              AI detects: long inactivity periods, missing decision-maker engagement, declining communication frequency, stalled deal stages, and competitor mentions in notes or emails.
            </p>
            <ul className="space-y-3">
              {[
                "Risk score assigned to every active deal",
                "Alerts when a deal drops to a danger threshold",
                "Identifies the specific warning sign detected",
                "Suggests a recovery action for each at-risk deal",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="Deal Risk Radar">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">At-Risk Deals</span>
                  <span className="text-xs text-red-400 font-semibold">4 flagged today</span>
                </div>
                {[
                  { deal: "Contoso — $48K", risk: 92, flag: "No contact in 18 days", action: "Send re-engagement", decision_maker: false },
                  { deal: "Fabrikam — $22K", risk: 78, flag: "Competitor mentioned in notes", action: "Share competitive analysis", decision_maker: true },
                  { deal: "Woodgrove — $15K", risk: 65, flag: "Stage stuck 21 days", action: "Propose next milestone", decision_maker: false },
                ].map((d, i) => (
                  <div key={i} className="p-4 rounded-xl bg-red-400/5 border border-red-400/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-white">{d.deal}</span>
                      <span className="text-xs font-bold text-red-400">Risk: {d.risk}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div className="bg-red-400 h-1.5 rounded-full" style={{ width: `${d.risk}%` }} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <AlertTriangle className="w-3 h-3 text-red-400 shrink-0" /> {d.flag}
                    </div>
                    {!d.decision_maker && (
                      <div className="text-[10px] text-amber-400 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> No decision-maker engaged
                      </div>
                    )}
                    <button className="text-xs px-2 py-1 rounded-lg bg-red-400/20 text-red-400 hover:bg-red-400/30 transition-colors font-medium mt-1">
                      → {d.action}
                    </button>
                  </div>
                ))}
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── FEATURE 6: Sales Performance Insights ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 md:order-1">
            <MockWindow title="AI Sales Performance Insights">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">This Quarter — AI Analysis</div>
                {[
                  { insight: "Deals with a live demo convert 40% more often than those without.", type: "trend", icon: TrendingUp },
                  { insight: "Leads from LinkedIn close twice as fast as from cold outreach.", type: "source", icon: Users },
                  { insight: "Average deal cycle has increased by 8 days this quarter.", type: "warning", icon: AlertTriangle },
                  { insight: "Follow-ups sent within 2 hours of a meeting have 3× reply rates.", type: "tip", icon: Mail },
                ].map((ins, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border text-xs ${
                    ins.type === 'warning' ? 'bg-amber-400/5 border-amber-400/20' : 'bg-white/[0.02] border-white/5'
                  }`}>
                    <ins.icon className={`w-4 h-4 mt-0.5 shrink-0 ${ins.type === 'warning' ? 'text-amber-400' : ins.type === 'tip' ? 'text-primary' : 'text-emerald-400'}`} />
                    <span className={ins.type === 'warning' ? 'text-amber-300' : 'text-muted-foreground'}>{ins.insight}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-xs font-semibold text-primary mb-1">Win Rate by Deal Size</div>
                  <div className="flex items-end gap-1 h-12">
                    {[55, 72, 68, 81, 60, 43].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                    <span>&lt;$5K</span><span>$5–20K</span><span>$20–50K</span><span>$50–100K</span><span>$100K+</span>
                  </div>
                </div>
              </div>
            </MockWindow>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-semibold mb-6 border border-emerald-400/20">
              <BarChart3 className="w-3.5 h-3.5" /> Feature 09 — Sales Performance Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Understand what's actually driving your revenue.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Instead of staring at dashboards, your sales manager gets plain-English insights: which lead sources convert best, which stages have the most drop-off, and what behavior separates your top reps from the rest.
            </p>
            <div className="space-y-3">
              {[
                { icon: TrendingUp, label: "Pattern Detection", desc: "Surfaces statistical patterns across all your deals automatically." },
                { icon: BarChart3, label: "Win/Loss Analysis", desc: "Breaks down why you won or lost based on CRM history." },
                { icon: Users, label: "Rep Performance Comparison", desc: "Identifies coaching opportunities without manual data crunching." },
                { icon: Activity, label: "Trend Alerts", desc: "Notifies you when deal velocity or win rates shift significantly." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-7 h-7 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.label}: </span>
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── FEATURE 7: Data Cleanup ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-semibold mb-6 border border-teal-400/20">
              <Database className="w-3.5 h-3.5" /> Feature 10 — AI Data Cleanup
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">A clean CRM means better decisions, faster.</h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Over time, CRM data becomes messy — duplicates, blank fields, outdated contacts. AI continuously audits your records and cleans them automatically, so your team always works from accurate, complete data.
            </p>
            <ul className="space-y-3">
              {[
                "Duplicate contact and company detection with smart merge",
                "Flags records with missing email, phone, or company data",
                "Identifies contacts that haven't been updated in 90+ days",
                "Data health score with actionable improvement suggestions",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
            <MockWindow title="CRM Data Health Dashboard">
              <div className="p-5 bg-[#0A0D14] space-y-4">
                {/* Score */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-teal-400/5 border border-teal-400/20">
                  <div className="text-4xl font-bold text-teal-400">94%</div>
                  <div>
                    <div className="text-sm font-semibold text-white">Data Health Score</div>
                    <div className="text-xs text-muted-foreground">↑ 12% improvement from last month</div>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-teal-400 ml-auto" />
                </div>
                {/* Issues */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Issues Found & Fixed</div>
                  {[
                    { label: "Duplicate contacts merged", count: 38, done: true },
                    { label: "Missing email addresses", count: 12, done: false },
                    { label: "Outdated phone numbers (90d+)", count: 7, done: false },
                    { label: "Companies without a contact", count: 4, done: false },
                  ].map((issue, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 text-xs">
                      <div className="flex items-center gap-2">
                        {issue.done
                          ? <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                          : <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                        }
                        <span className={issue.done ? 'text-muted-foreground line-through' : 'text-white'}>{issue.label}</span>
                      </div>
                      <span className={`font-bold ${issue.done ? 'text-teal-400' : 'text-amber-400'}`}>{issue.count}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full text-xs py-2 rounded-xl bg-teal-500/20 text-teal-400 font-semibold hover:bg-teal-500/30 transition-colors">
                  Run Full Data Audit
                </button>
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── BUSINESS IMPACT ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0A0D14] p-12 mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform your CRM into an AI-powered revenue engine.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">No new CRM. No migration. Just AI intelligence layered on top of what you already use.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Clock, label: "Less manual CRM work", sub: "AI handles data entry, mapping, and cleanup" },
              { icon: TrendingUp, label: "Close deals faster", sub: "Always know the right next step" },
              { icon: Users, label: "Better productivity", sub: "Reps spend time selling, not admin" },
              { icon: BellRing, label: "Consistent follow-ups", sub: "No lead or deal ever forgotten" },
              { icon: BarChart3, label: "Deeper insights", sub: "Understand your pipeline at a glance" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-sm text-white mb-1">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
