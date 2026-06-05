"use client";

import { useEffect } from "react";

export default function CapmobEffects() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const cursorRing = document.getElementById("cursor-ring");
    if (!cursor || !cursorRing) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = `${mx}px`;
      cursor.style.top = `${my}px`;
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.left = `${rx}px`;
      cursorRing.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animRing);
    };

    const onScroll = () => {
      document.getElementById("navbar")?.classList.toggle("scrolled", window.scrollY > 40);
    };

    document.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    onScroll();
    rafId = requestAnimationFrame(animRing);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
