import { motion } from "framer-motion";

const stats = [
  { label: "Technique", value: "Dismantle & Cleave", kanji: "解" },
  { label: "Type", value: "Open Barrier", kanji: "陣" },
  { label: "Range", value: "Maximum ~200m", kanji: "域" },
  { label: "Guaranteed Hit", value: "Slashing Attacks", kanji: "斬" },
];

const DomainContent = () => {
  return (
    <motion.div
      className="relative z-30 min-h-screen flex flex-col items-center justify-end pb-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {/* Stats grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl w-full mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-secondary/50 backdrop-blur-sm border border-border p-4 md:p-6 text-center relative overflow-hidden group"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ borderColor: "hsl(0 85% 40%)" }}
          >
            {/* Background kanji */}
            <span className="absolute top-1 right-2 font-kanji text-5xl text-crimson/10 group-hover:text-crimson/20 transition-colors">
              {stat.kanji}
            </span>
            <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-2 relative z-10">
              {stat.label}
            </p>
            <p className="font-display text-sm md:text-base text-foreground relative z-10">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
      >
        <p className="text-muted-foreground italic text-sm md:text-base tracking-wide leading-relaxed">
          "Stand proud. You are strong."
        </p>
        <footer className="mt-3 text-xs text-crimson tracking-[0.3em] uppercase">
          — Ryomen Sukuna
        </footer>
      </motion.blockquote>
    </motion.div>
  );
};

export default DomainContent;
