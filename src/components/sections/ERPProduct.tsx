import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MockWindow } from "@/components/ui/mock-window";
import {
  BarChart3, Workflow, PackageSearch, AlertTriangle,
  Zap, ArrowRight, Activity, TrendingUp, CheckCircle2,
  Settings2, LineChart, BrainCircuit, ShieldCheck, Clock
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeLeft = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeRight = { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } } };

export function ERPProduct() {
  return (
    <section id="erp-intel" className="relative pt-32 pb-24 overflow-hidden bg-[#080B12]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] opacity-30 pointer-events-none mix-blend-screen">
        <div className="w-full h-full rounded-full blur-3xl opacity-30 bg-gradient-to-br from-teal-500/30 to-teal-900/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── HERO ── */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6 border border-teal-500/20">
              <Activity className="w-4 h-4" /> OpenBusiness ERP Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Add AI Intelligence to <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">Your ERP</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              No migration required. OpenBusiness.ai connects to your existing ERP and adds AI-powered operational insights, workflow automation, and decision support — right on top of the system you already run.
            </p>
            <a href="/#contact" className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-semibold text-sm transition-all">
              Schedule a Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* ── HERO MOCKUP ── */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mb-28 relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080B12] to-transparent z-20 pointer-events-none" />
          <MockWindow title="Operations Command Center" className="flex flex-col h-[520px]">
            <div className="bg-[#0A0D14] border-b border-white/5 p-4 flex gap-6 overflow-x-auto">
              {[
                { label: "Inventory Value", val: "$4.2M", up: true, alert: false },
                { label: "Active Workflows", val: "1,204", up: true, alert: false },
                { label: "Supply Chain Alerts", val: "3", up: false, alert: true },
                { label: "Fulfillment Rate", val: "98.4%", up: true, alert: false },
              ].map((m, i) => (
                <div key={i} className="shrink-0">
                  <div className="text-xs text-muted-foreground mb-1">{m.label}</div>
                  <div className={`text-xl font-bold flex items-center gap-1.5 ${m.alert ? 'text-amber-400' : 'text-white'}`}>
                    {m.val}
                    {!m.alert && <TrendingUp className={`w-3.5 h-3.5 ${m.up ? 'text-teal-400' : 'text-red-400 rotate-180'}`} />}
                    {m.alert && <AlertTriangle className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex bg-[#06080C]">
              <div className="flex-1 p-6 border-r border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-medium text-sm">Supply Chain Efficiency — 30 Day Forecast</h3>
                  <div className="text-xs bg-teal-500/10 text-teal-400 px-2 py-1 rounded border border-teal-500/20">AI Predicted</div>
                </div>
                <div className="h-44 border-b border-l border-white/10 relative flex items-end justify-around pb-2 px-2 gap-1">
                  {[40, 55, 48, 72, 68, 85, 80, 95, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/30 to-teal-500/80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="w-72 p-4 bg-[#0A0D14] flex flex-col gap-2.5">
                <h3 className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-teal-400" /> AI Interventions
                </h3>
                {[
                  { title: "Low Stock: SKU-102", detail: "Auto-reordered 500 units — predicted demand spike next week.", time: "10m ago", type: "auto" },
                  { title: "Invoice Discrepancy", detail: "INV-8992 flagged for review. 15% variance detected.", time: "1h ago", type: "alert" },
                  { title: "Route Optimized", detail: "3 shipments rerouted — storm path avoided. ETA unchanged.", time: "3h ago", type: "auto" },
                ].map((a, i) => (
                  <div key={i} className={`p-3 rounded-xl border text-xs ${a.type === 'alert' ? 'border-amber-400/20 bg-amber-400/5' : 'border-white/5 bg-white/[0.02]'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium text-white">{a.title}</div>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${a.type === 'alert' ? 'bg-amber-400/20 text-amber-400' : 'bg-teal-400/20 text-teal-400'}`}>
                        {a.type === 'alert' ? 'Alert' : 'Auto'}
                      </span>
                    </div>
                    <div className="text-muted-foreground leading-relaxed mb-1">{a.detail}</div>
                    <div className="text-muted-foreground/40">{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </MockWindow>
        </motion.div>

        {/* ── INTEGRATIONS ── */}
        <div className="text-center mb-28">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Seamlessly connects to your existing ERP</p>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-5">
            {['SAP', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Odoo', 'ERPNext'].map(erp => (
              <div key={erp} className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:border-teal-500/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-sm font-medium">{erp}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">No migration. No disruption. AI sits on top of your existing system.</p>
        </div>

        {/* ── SECTION 1: Operational Intelligence ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-semibold mb-5 border border-teal-400/20">
              <PackageSearch className="w-3.5 h-3.5" /> Operational Intelligence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full visibility into your operations — with AI alerts.</h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              Instead of checking dashboards manually, AI monitors your ERP data continuously and surfaces what matters: low inventory, supplier delays, and cost anomalies before they hit your bottom line.
            </p>
            <div className="space-y-4">
              {[
                { icon: PackageSearch, label: "Inventory Monitoring", desc: "AI tracks stock levels, predicts demand spikes, and triggers reorders automatically." },
                { icon: AlertTriangle, label: "Operational Alerts", desc: "Get notified of anomalies, bottlenecks, and process failures before they escalate." },
                { icon: TrendingUp, label: "Performance Tracking", desc: "Live KPIs across departments — fulfillment rate, cost per order, processing time, and more." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-teal-400" />
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
            <MockWindow title="Inventory & Operations Monitor">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Live Inventory Status</div>
                {[
                  { sku: "SKU-A201 · Laptop 15Pro", stock: 248, max: 500, status: "ok" },
                  { sku: "SKU-B102 · USB-C Hub", stock: 23, max: 200, status: "low" },
                  { sku: 'SKU-C047 · Monitor 27"', stock: 12, max: 150, status: "critical" },
                  { sku: "SKU-D390 · Keyboard TKL", stock: 190, max: 300, status: "ok" },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{item.sku}</span>
                      <span className={`font-semibold ${item.status === 'ok' ? 'text-teal-400' : item.status === 'low' ? 'text-amber-400' : 'text-red-400'}`}>
                        {item.stock} units
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${item.status === 'ok' ? 'bg-teal-400' : item.status === 'low' ? 'bg-amber-400' : 'bg-red-400'}`}
                        style={{ width: `${(item.stock / item.max) * 100}%` }}
                      />
                    </div>
                    {item.status !== 'ok' && (
                      <div className={`mt-1 text-[10px] ${item.status === 'low' ? 'text-amber-400' : 'text-red-400'}`}>
                        {item.status === 'critical' ? '⚡ AI auto-reorder triggered' : '⚠ Below threshold — review recommended'}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </MockWindow>
          </motion.div>
        </div>

        {/* ── SECTION 2: Workflow Automation ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft} className="order-2 md:order-1">
            <MockWindow title="Workflow Automation Engine">
              <div className="p-5 bg-[#0A0D14] space-y-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Active Workflows</div>
                {[
                  { name: "PO Approval Flow", steps: "Request → Manager → Finance → Auto-approve <$500", runs: "43 today", status: "running" },
                  { name: "Invoice Matching", steps: "Invoice → PO match → Discrepancy flag → Review queue", runs: "112 today", status: "running" },
                  { name: "Supplier Alert", steps: "Delay detected → Notify procurement → Alt supplier search", runs: "2 today", status: "alert" },
                ].map((wf, i) => (
                  <div key={i} className={`p-4 rounded-xl border text-xs space-y-2 ${wf.status === 'alert' ? 'border-amber-400/20 bg-amber-400/5' : 'border-white/5 bg-white/[0.02]'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-white">{wf.name}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${wf.status === 'alert' ? 'bg-amber-400/20 text-amber-400' : 'bg-teal-400/20 text-teal-400'}`}>
                        {wf.status === 'alert' ? 'Alert' : 'Running'}
                      </span>
                    </div>
                    <div className="text-muted-foreground/70 leading-relaxed">{wf.steps}</div>
                  </div>
                ))}
              </div>
            </MockWindow>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight} className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 text-xs font-semibold mb-5 border border-teal-400/20">
              <Workflow className="w-3.5 h-3.5" /> Workflow Automation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Automate complex processes without custom code.</h2>
            <p className="text-muted-foreground mb-7 text-lg leading-relaxed">
              From purchase order approvals to invoice matching — AI handles the routing, triggers, and escalations that eat up your operations team's time.
            </p>
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, label: "Approval Flows", desc: "Multi-step approval routing with smart escalation and conditional auto-approval." },
                { icon: Zap, label: "Task Automation", desc: "Trigger tasks, update records, and notify teams automatically when conditions are met." },
                { icon: Settings2, label: "Process Monitoring", desc: "AI detects when a workflow is stalled or behaving unexpectedly and alerts your team." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── BENEFITS ── */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl border border-teal-500/10 bg-gradient-to-br from-[#0d1117] to-[#06080c] p-10 md:p-14"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Operate your business with intelligence.</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">No ERP replacement. No disruption. AI intelligence added on top of what you already run.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, stat: "Real-time", label: "Operational visibility", sub: "Know what's happening across all departments instantly" },
              { icon: Clock, stat: "4+ hrs", label: "Saved per day", sub: "Manual workflows replaced with smart automation" },
              { icon: ShieldCheck, stat: "Proactive", label: "Risk management", sub: "Issues flagged before they become expensive problems" },
              { icon: Zap, stat: "Instant", label: "Decision support", sub: "AI-generated insights when leadership needs answers" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-teal-400 mb-1">{item.stat}</div>
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
