"use client";
import { skillCategory } from "@/types/skill";
import { motion } from "motion/react";
import Image from "next/image";

export default function SkillCard({ title, items }: skillCategory) {
  return (
    <motion.div
      className="w-3xl h-2xl flex flex-col flex-wrap gap-4 items-center bg-gray-500/30 py-12 rounded-3xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 0.7}}>
      <h1 className="text-center font-bold text-2xl text-indigo-300">
        {title}
      </h1>
      <span className="flex flex-row flex-wrap items-center justify-center gap-2">
        {items.map((item) => (
          <motion.div
            key={item.name}
            className="flex gap-4 transparent items-center border-1 border-white/30 shadow-md backdrop-saturate-150 rounded-full px-4 py-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Image alt={item.name} src={item.icon} width={30} height={30} />
            <p>{item.name}</p>
          </motion.div>
        ))}
      </span>
    </motion.div>
  );
}
