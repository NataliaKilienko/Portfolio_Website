import React, { useRef, useEffect } from "react";

const StarsCanvas = () => {
  const canvasRef = useRef(null);

  const drawStars = (ctx, canvas, starColor) => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        radius: Math.random() * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${parseInt(
          starColor.slice(1, 3),
          16
        )}, ${parseInt(starColor.slice(3, 5), 16)}, ${parseInt(
          starColor.slice(5, 7),
          16
        )}, ${star.opacity})`;
        ctx.fill();
      });
    };

    const update = () => {
      stars.forEach((star) => {
        star.opacity += star.speed;
        if (star.opacity > 1 || star.opacity < 0) {
          star.speed *= -1;
        }
      });
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    animate();
  };

  const resizeCanvas = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const setStarColor = (darkMode) => {
    return darkMode === "dark" ? "#FFFFFF" : "#5c62ec";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let starColor = setStarColor(
      document.body.classList.contains("dark") ? "dark" : "light"
    );

    resizeCanvas(canvas);
    drawStars(ctx, canvas, starColor);

    const handleResize = () => resizeCanvas(canvas);
    window.addEventListener("resize", handleResize);

    const handleThemeChange = () => {
      starColor = setStarColor(
        document.body.classList.contains("dark") ? "dark" : "light"
      );
      drawStars(ctx, canvas, starColor);
    };
    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="stars-canvas" />;
};

export default StarsCanvas;
