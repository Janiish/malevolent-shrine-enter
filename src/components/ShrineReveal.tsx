import { motion } from "framer-motion";
import shrineImage from "@/assets/malevolent-shrine.jpg";

interface ShrineRevealProps {
  isRevealed: boolean;
}

const ShrineReveal = ({ isRevealed }: ShrineRevealProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* YouTube video background when revealed */}
      {isRevealed && (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7WXKlCmOtVI?autoplay=1&mute=1&loop=1&playlist=7WXKlCmOtVI&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
            title="Sukuna Domain Expansion"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "177.78vh",
              height: "100vh",
              minWidth: "100vw",
              minHeight: "56.25vw",
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {/* Shrine image with slash reveal */}
      <motion.div
        className={`absolute inset-0 animate-slash-reveal ${isRevealed ? "opacity-0" : ""}`}
        style={{
          backgroundImage: `url(${shrineImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 2s ease-in-out",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" />
      </motion.div>

      {/* Blood dripping from top */}
      <div className="absolute top-0 left-0 right-0 flex justify-around">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-gradient-to-b from-crimson-glow to-transparent"
            initial={{ height: 0 }}
            animate={{ height: `${80 + Math.random() * 200}px` }}
            transition={{ duration: 2 + Math.random(), delay: 0.5 + i * 0.15 }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 2%) 80%)",
        }}
      />

      {/* Domain text overlay when revealed */}
      {isRevealed && (
        <motion.div
          className="absolute inset-0 flex items-end justify-center pb-20 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="text-center">
            <p className="font-kanji text-lg md:text-xl text-shrine-gold text-shadow-gold tracking-[0.5em] mb-2">
              領域展開
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-[0.15em]">
              DOMAIN EXPANSION
            </h2>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ShrineReveal;
