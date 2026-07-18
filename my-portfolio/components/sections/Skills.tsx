"use client";
import { skills } from "@/data/skills";
import SkillCard from "../ui/SkillCard";
import { motion } from "motion/react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-8xl mx-auto min-h-screen py-10">
        <h1 className="text-3xl font-bold text-blue-500 text-center mb-8">
          {" "}
          Skills{" "}
        </h1>
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
