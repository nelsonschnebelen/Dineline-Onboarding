"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function useJitterLatency(min = 12, max = 16, intervalMs = 800) {
  const [ms, setMs] = useState(14);
  useEffect(() => {
    const id = setInterval(() => {
      setMs(Math.floor(Math.random() * (max - min + 1)) + min);
    }, intervalMs);
    return () => clearInterval(id);
  }, [min, max, intervalMs]);
  return ms;
}

export const SystemStatus = () => {
  const latencyMs = useJitterLatency(12, 16, 800);
  return (
    <div className="mt-auto pt-6 border-t border-white/5 font-mono">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-zinc-500 uppercase tracking-tighter">Network Latency</span>
          <span className="text-red-500 font-bold tabular-nums">{latencyMs}MS</span>
        </div>
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-zinc-500 uppercase tracking-tighter">Engine Status</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-300">ACTIVE</span>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-zinc-500 uppercase tracking-tighter">POS Bridge</span>
          <span className="text-zinc-300">ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
};
