import { motion } from "framer-motion";
import darkBgTexture from "@/assets/dark-bg-texture.jpg";

interface DomainActivationProps {
  onActivate: () => void;
}

const DomainActivation = ({ onActivate }: DomainActivationProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-30 flex flex-col items-center justify-center cursor-pointer"
      onClick={onActivate}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${darkBgTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-void/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Kanji */}
        <motion.p
          className="font-kanji text-6xl md:text-8xl text-crimson-glow text-shadow-crimson tracking-[0.3em]"
          animate={{
            textShadow: [
              "0 0 20px hsl(0 100% 50% / 0.6), 0 0 60px hsl(0 85% 40% / 0.3)",
              "0 0 40px hsl(0 100% 50% / 0.9), 0 0 100px hsl(0 85% 40% / 0.5)",
              "0 0 20px hsl(0 100% 50% / 0.6), 0 0 60px hsl(0 85% 40% / 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          伏魔御廚子
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display text-2xl md:text-4xl text-foreground tracking-[0.2em] uppercase"
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.2em", opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Malevolent Shrine
        </motion.h1>

        {/* Pulsing instruction */}
        <motion.p
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mt-8"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ▹ Click to Expand Domain ◃
        </motion.p>

        {/* Decorative lines */}
        <motion.div
          className="w-48 h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-crimson-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </motion.div>
  );
};

export default DomainActivation;
