import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, Workflow, PhoneCall, LayoutDashboard, CheckCircle2, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2]" />
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-ambient-glow.png`} 
          alt="Ambient Glow" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>
      
      {/* Central radial gradient for extra focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Add an AI Brain to Your <span className="text-gradient-primary">CRM and ERP</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            OpenBusiness.ai connects to your existing systems and adds intelligent automation, real-time insights, and voice agents — <span className="text-white font-medium">without migration, without disruption.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="/#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold text-base shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 text-center">
              Book a Demo
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mt-6 justify-center lg:justify-start">
              <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">✓</span> Sync with Salesforce. Multiply it.</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-primary font-bold">2hrs</span> saved per rep / week</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-1.5"><span className="text-accent font-bold">+35%</span> faster replies</span>
            </div>
          </motion.div>
        </div>

        {/* Mac-style Browser Window Mockup Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex-1 w-full relative h-[400px] hidden md:block"
        >
          {/* Main Dashboard Mockup */}
          <div className="absolute inset-0 z-20 glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col bg-[#0F1423]">
            {/* Window Header */}
            <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-[10px] text-muted-foreground flex items-center gap-2">
                app.openbusiness.ai
              </div>
            </div>
            
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-16 border-r border-white/10 bg-white/[0.02] flex flex-col items-center py-4 gap-6">
                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                {[LayoutDashboard, Database, TrendingUp, Workflow, PhoneCall].map((Icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded flex items-center justify-center ${i === 0 ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:bg-white/5'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 p-5 flex flex-col gap-4">
                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Total Revenue", val: "$1.2M", trend: "+12%" },
                    { label: "Active Deals", val: "45", trend: "+5%" },
                    { label: "Calls Today", val: "128", trend: "+24%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <p className="text-[10px] text-muted-foreground mb-1">{stat.label}</p>
                      <div className="flex items-end justify-between">
                        <p className="text-lg font-bold text-white leading-none">{stat.val}</p>
                        <p className="text-[10px] text-green-400">{stat.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-1">
                  {/* Left Column: Chart & Table */}
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Chart */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 h-32 flex flex-col">
                      <p className="text-xs font-medium text-white mb-2">Pipeline Health</p>
                      <div className="flex-1 flex items-end gap-2">
                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    {/* Table */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex-1">
                      <p className="text-xs font-medium text-white mb-3">Recent Leads</p>
                      <div className="space-y-2">
                        {[
                          { name: "Acme Corp", stage: "Proposal", status: "Active" },
                          { name: "TechFlow Inc", stage: "Demo", status: "Review" },
                          { name: "Global Retail", stage: "Discovery", status: "New" }
                        ].map((row, i) => (
                          <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                            <span className="text-[11px] text-white">{row.name}</span>
                            <span className="text-[10px] text-muted-foreground">{row.stage}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded bg-primary/20 text-primary`}>{row.status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column: AI Insights */}
                  <div className="w-48 bg-primary/5 border border-primary/20 rounded-lg p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <p className="text-xs font-bold text-primary">AI Insights</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded p-2.5">
                      <p className="text-[10px] text-white font-medium mb-1">Risk Detected</p>
                      <p className="text-[9px] text-muted-foreground">TechFlow deal has been stalled for 14 days.</p>
                      <button className="mt-2 text-[9px] bg-primary/20 text-primary w-full py-1 rounded">Draft Email</button>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 rounded p-2.5">
                      <p className="text-[10px] text-white font-medium mb-1">Call Summary</p>
                      <p className="text-[9px] text-muted-foreground">Acme Corp is ready for pricing. Syncing to CRM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting Elements (Overlaying Dashboard) */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00A1E0]/20 flex items-center justify-center">
                <Database className="w-4 h-4 text-[#00A1E0]" />
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Connected</p>
                <p className="text-xs font-semibold text-white">Salesforce CRM</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-2 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3 border-accent/30 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Workflow className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-[10px] text-accent">Insight Generated</p>
                <p className="text-xs font-semibold text-white">Deal Risk Detected</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [-15, 15, -15] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] -right-8 z-30"
          >
            <div className="glass-card p-3 rounded-xl flex items-center gap-3 border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-primary">Voice Agent Active</p>
                <p className="text-xs font-semibold text-white">Calling 45 Leads</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
