import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useState, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  }),
};

interface Plan {
  title: string;
  badge?: string;
  price: string;
  priceUnit: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaStyle: "outline" | "primary" | "outline-light";
}

const PLANS: Plan[] = [
  {
    title: "Starter",
    price: "$5",
    priceUnit: "/user/mo",
    description: "Perfect for small teams wanting AI-powered business tools without complexity.",
    ctaLabel: "Start for Free",
    ctaStyle: "outline",
    features: [
      "Full CRM & ERP core features",
      "AI email drafting & summaries",
      "Follow-up reminders & automations",
      "Data deduplication alerts",
      "Voice campaigns (100 calls/mo)",
      "Standard dashboards & reports",
    ],
  },
  {
    title: "Growth",
    badge: "Most Popular",
    price: "$15",
    priceUnit: "/user/mo",
    description: "Deep automation and AI intelligence for growing companies.",
    ctaLabel: "Sign Up with Growth",
    ctaStyle: "primary",
    features: [
      "Everything in Starter",
      "CRM intelligence: lead scoring & pipeline alerts",
      "ERP intelligence: auto PO gen & finance forecasts",
      "Full voice automation + unlimited languages",
      "Workflow automation builder",
      "Custom dashboards & advanced analytics",
      "API access for integrations",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    price: "$25",
    priceUnit: "/user/mo",
    description: "Unlimited scale and custom AI for large organizations.",
    ctaLabel: "Sign Up with Enterprise",
    ctaStyle: "outline-light",
    features: [
      "Everything in Growth",
      "Advanced predictive analytics",
      "AI-generated insights reports",
      "On-prem / cloud hybrid deployment",
      "Custom AI agent creation",
      "Unlimited voice campaigns & IVR",
      "SSO, audit logs & permissions",
      "Dedicated account manager",
    ],
  },
];

function FeatureItem({ text, index }: { text: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.04, duration: 0.35 }}
      className="flex items-start gap-3 text-sm text-[#94a3b8]"
    >
      <span className="mt-0.5 flex-shrink-0">
        <Check className="w-3.5 h-3.5 text-[#f97316]" strokeWidth={2.5} />
      </span>
      <span>{text}</span>
    </motion.li>
  );
}

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight glow — all hooks unconditional
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const spotX = useTransform(springX, (v) => v - 140);
  const spotY = useTransform(springY, (v) => v - 140);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const isActive = hovered || clicked;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseX.set(0); mouseY.set(0); }}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      animate={{
        opacity: 1,
        y: clicked ? 2 : hovered ? -6 : 0,
        scale: clicked ? 0.98 : hovered ? 1.02 : 1,
        borderColor: isActive ? "rgba(249,115,22,0.55)" : "rgba(255,255,255,0.08)",
        boxShadow: clicked
          ? "0 0 40px rgba(249,115,22,0.35), 0 0 80px rgba(249,115,22,0.15), inset 0 0 30px rgba(249,115,22,0.05)"
          : hovered
          ? "0 0 30px rgba(249,115,22,0.25), 0 0 60px rgba(249,115,22,0.10), 0 20px 60px rgba(0,0,0,0.6)"
          : "0 8px 32px rgba(0,0,0,0.4)",
      }}
      transition={{ delay: index * 0.13, duration: 0.25, ease: "easeOut" }}
      className="relative flex flex-col rounded-2xl border bg-[#111218] p-6 overflow-hidden cursor-pointer select-none"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Mouse-tracking spotlight glow */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: 280,
          height: 280,
          x: spotX,
          y: spotY,
          background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0.06) 50%, transparent 70%)",
        }}
      />

      {/* Static orange glow at bottom on hover */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-2xl"
        animate={{
          opacity: clicked ? 0.6 : hovered ? 0.35 : 0,
          scaleX: clicked ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.5) 0%, transparent 70%)" }}
      />

      {/* Orange border glow ring on click */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{
          opacity: clicked ? 1 : 0,
          boxShadow: clicked
            ? "inset 0 0 0 1.5px rgba(249,115,22,0.8)"
            : "inset 0 0 0 1px rgba(249,115,22,0)",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-white">{plan.title}</h3>
          {plan.badge && (
            <motion.span
              animate={{ borderColor: isActive ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.1)" }}
              transition={{ duration: 0.25 }}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 border"
            >
              {plan.badge}
            </motion.span>
          )}
        </div>

        {/* Price */}
        <div className="mb-3 flex items-baseline gap-1">
          <motion.span
            animate={{ color: isActive ? "#ffffff" : "#ffffff" }}
            className="text-4xl font-bold tracking-tight text-white"
          >
            {plan.price}
          </motion.span>
          <span className="text-sm text-[#94a3b8]">{plan.priceUnit}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 min-h-[40px]">
          {plan.description}
        </p>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          animate={{
            backgroundColor: "#f97316",
            borderColor: "#f97316",
            boxShadow: isActive
              ? "0 0 20px rgba(249,115,22,0.45), 0 4px 15px rgba(249,115,22,0.3)"
              : "0 4px 15px rgba(249,115,22,0.25)",
            color: "#ffffff",
          }}
          transition={{ duration: 0.22 }}
          className="w-full h-10 rounded-lg text-sm font-semibold mb-5 border"
        >
          {plan.ctaLabel}
        </motion.button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ backgroundColor: isActive ? "rgba(249,115,22,0.25)" : "rgba(255,255,255,0.07)" }}
            transition={{ duration: 0.3 }}
            className="flex-1 h-px"
          />
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#94a3b8]/60 font-medium">
            Features
          </span>
          <motion.div
            animate={{ backgroundColor: isActive ? "rgba(249,115,22,0.25)" : "rgba(255,255,255,0.07)" }}
            transition={{ duration: 0.3 }}
            className="flex-1 h-px"
          />
        </div>

        {/* Features */}
        <ul className="space-y-3.5 flex-1">
          {plan.features.map((f, i) => (
            <FeatureItem key={f} text={f} index={i} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Stable particles
const PARTICLES = Array.from({ length: 45 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const rng = (offset: number) => ((seed + offset * 1234) % 1000) / 1000;
  return {
    width: rng(0) * 2 + 1,
    height: rng(1) * 2 + 1,
    top: rng(2) * 100,
    left: rng(3) * 100,
    opacity: rng(4) * 0.2 + 0.04,
  };
});

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: p.width + "px",
              height: p.height + "px",
              top: p.top + "%",
              left: p.left + "%",
              opacity: p.opacity,
            }}
          />
        ))}
        {/* Global ambient orange glow center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Simple and Affordable
            <br />
            Pricing Plans
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-base text-[#94a3b8] max-w-md mx-auto"
          >
            Choose the plan that fits your business needs. Scale as you grow.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="text-center text-sm text-[#94a3b8]/70 mt-10"
        >
          All plans include a <span className="text-white/80">3-day free trial</span>. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
