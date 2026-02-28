import { motion } from "framer-motion";

const SlashParticles = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 pointer-events-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Diagonal slash lines */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = Math.random() * 360;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        return (
          <motion.div
            key={i}
            className="absolute bg-crimson-glow"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: "2px",
              height: "0px",
              rotate: `${angle}deg`,
              transformOrigin: "center",
            }}
            animate={{
              height: ["0px", `${60 + Math.random() * 120}px`, "0px"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.4 + Math.random() * 0.4,
              delay: Math.random() * 2,
              repeat: 2,
              repeatDelay: Math.random() * 0.5,
            }}
          />
        );
      })}

      {/* Red energy bursts */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: "4px",
            height: "4px",
            backgroundColor: "hsl(0 100% 50%)",
            boxShadow: "0 0 20px 10px hsl(0 100% 50% / 0.5)",
          }}
          animate={{
            scale: [0, 3, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.6,
            delay: 0.5 + i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

export default SlashParticles;
