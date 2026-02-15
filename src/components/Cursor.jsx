import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  // RGB Color cycle
  const hue = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e) => {
      // Add a new particle at mouse position
      // Limit total particles to prevent lag
      if (particles.current.length < 50) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Node size
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${hue.current}, 100%, 60%)`;
        this.life = 1.0; // Life starts at 100%
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.02; // Fade out speed
        // Shrink slightly
        if (this.size > 0.2) this.size -= 0.05;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hue.current += 1; // Slower color cycle

      // 1. Update and Draw Particles
      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update();
        particles.current[i].draw();

        // 2. Connect nearby particles with lines
        for (let j = i; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If close enough, draw a connecting line
          if (distance < 80) {
            ctx.beginPath();
            // Line opacity based on distance and particle life
            const opacity = (1 - distance / 80) * particles.current[i].life;
            ctx.strokeStyle = `hsla(${hue.current}, 100%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }

        // Remove dead particles
        if (particles.current[i].life <= 0 || particles.current[i].size <= 0.2) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default Cursor;