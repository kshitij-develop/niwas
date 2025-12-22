"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideoSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], 
   
  });


  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.7]);

 
  const borderRadius = useTransform(scrollYProgress, [0,0.5 , 1], [32, 0, 24]);


  const y = useTransform(scrollYProgress, [0,0.5, 1], [80, 0,-40]);

  return (
    <section
      ref={containerRef}
      className="h-[200vh] bg-[#153968] text-white"
    >
   
      <div className="h-screen sticky top-10  text-5xl flex items-center justify-center flex-col">
       <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 5.6 }}
>
  <h1 className="pt-5">Visual Product Story</h1>
</motion.div>
        <motion.div
          style={{ scale, borderRadius, y }}
          className="w-full max-w-6xl aspect-video overflow-hidden shadow-2xl "
        >
          <video
            src="/Version 17 English.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
