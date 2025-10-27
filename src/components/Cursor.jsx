import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LightingCursor() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = e => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        color: getRandomColor(),
      };
      setStars(prev => [...prev.slice(-20), newStar]); // keep last 20 stars
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getRandomColor = () => {
    const colors = [
      '#fff',
      '#ff9ff3',
      '#feca57',
      '#1dd1a1',
      '#54a0ff',
      '#c56cf0',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      {stars.map(star => (
        <motion.div
          key={star.id}
          initial={{ x: star.x, y: star.y, opacity: 1, scale: 1 }}
          animate={{
            y: star.y - 30,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='fixed w-3 h-3 rounded-full pointer-events-none z-[9999]'
          style={{
            background: `radial-gradient(circle, ${star.color} 0%, transparent 70%)`,
            filter: `drop-shadow(0 0 6px ${star.color})`,
          }}
        />
      ))}
    </>
  );
}
