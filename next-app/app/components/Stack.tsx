'use client';

import { motion } from 'framer-motion';

export default function Stack() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git & GitHub',
  ];

  return (
    <section className="stack">
      <h2 className="stack-title">Tech Stack</h2>

      <ul className="stack-list">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, ease: 'easeOut' }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

