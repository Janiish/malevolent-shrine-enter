import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DomainActivation from "@/components/DomainActivation";
import ShrineReveal from "@/components/ShrineReveal";
import DomainContent from "@/components/DomainContent";
import SlashParticles from "@/components/SlashParticles";

type Phase = "idle" | "activating" | "expanding" | "revealed";

const Index = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sfxAudio] = useState(() => {
    const a = new Audio();
    a.src = "/audio/domain-sfx.mp3";
    a.volume = 0.7;
    return a;
  });
  const [ostAudio] = useState(() => {
    const a = new Audio();
    a.src = "/audio/sukuna-ost.mp3";
    a.volume = 0.5;
    a.loop = true;
    return a;
  });

  const activate = useCallback(() => {
    setPhase("activating");
    sfxAudio.play().catch(() => {});

    setTimeout(() => setPhase("expanding"), 2000);
    setTimeout(() => {
      setPhase("revealed");
      sfxAudio.pause();
      ostAudio.play().catch(() => {});
    }, 4500);
  }, [sfxAudio, ostAudio]);

  useEffect(() => {
    return () => {
      sfxAudio.pause();
      ostAudio.pause();
    };
  }, [sfxAudio, ostAudio]);

  return (
    <div className="relative min-h-screen bg-void overflow-hidden">
      {/* Slash particles during expansion */}
      <AnimatePresence>
        {(phase === "expanding" || phase === "activating") && <SlashParticles />}
      </AnimatePresence>

      {/* Phase: Idle - Click to activate */}
      <AnimatePresence>
        {phase === "idle" && (
          <DomainActivation onActivate={activate} />
        )}
      </AnimatePresence>

      {/* Phase: Expanding - shrine reveal */}
      <AnimatePresence>
        {(phase === "expanding" || phase === "revealed") && (
          <ShrineReveal isRevealed={phase === "revealed"} />
        )}
      </AnimatePresence>

      {/* Phase: Revealed - full content */}
      <AnimatePresence>
        {phase === "revealed" && <DomainContent />}
      </AnimatePresence>

      {/* Screen shake overlay */}
      {phase === "activating" && (
        <div className="fixed inset-0 animate-screen-shake pointer-events-none z-50" />
      )}

      {/* Red flash on activation */}
      <AnimatePresence>
        {phase === "activating" && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none"
            style={{ backgroundColor: "hsl(0, 100%, 30%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0, 0.4, 0] }}
            transition={{ duration: 2, times: [0, 0.2, 0.4, 0.6, 1] }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
