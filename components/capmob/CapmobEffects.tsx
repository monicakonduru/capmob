"use client";

import Script from "next/script";
import { useEffect } from "react";

function initGsapHero() {
  const gsap = (window as Window & { gsap?: { registerPlugin: (p: unknown) => void; from: (...args: unknown[]) => void; to: (...args: unknown[]) => void } }).gsap;
  const ScrollTrigger = (window as Window & { ScrollTrigger?: unknown }).ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".hero-badge", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" });
  gsap.from(".hero-title", { opacity: 0, y: 40, duration: 1, delay: 0.2, ease: "power3.out" });
  gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 0.9, delay: 0.5, ease: "power2.out" });
  gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 0.8, delay: 0.7, ease: "power2.out" });
  gsap.from(".hero-stats", { opacity: 0, y: 20, duration: 0.8, delay: 0.9, ease: "power2.out" });
  gsap.from(".deal-card", { opacity: 0, x: 60, scale: 0.95, duration: 1.2, delay: 0.4, ease: "power3.out" });
  gsap.from(".fc-1", { opacity: 0, x: 40, y: -20, duration: 1, delay: 1.1, ease: "power2.out" });
  gsap.from(".fc-2", { opacity: 0, x: -40, y: 20, duration: 1, delay: 1.3, ease: "power2.out" });
  gsap.to(".hero-grid-lines", {
    y: -60,
    ease: "none",
    scrollTrigger: { trigger: "#hero", scrub: true },
  });
}

function animateCounter(el: HTMLElement, target: number, suffix = "") {
  let start = 0;
  const step = target / 60;
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    el.textContent = Math.round(start) + suffix;
  }, 16);
}

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

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const nums = e.target.querySelectorAll<HTMLElement>(".stat-num");
          nums.forEach((n) => {
            const txt = n.textContent ?? "";
            const match = txt.match(/(\d+)/);
            if (!match) return;
            const val = parseInt(match[1], 10);
            const span = n.querySelector("span");
            const suffix = span?.textContent ?? "";
            n.innerHTML = "";
            animateCounter(n, val, suffix);
          });
          statsObserver.unobserve(e.target);
        });
      },
      { threshold: 0.5 }
    );
    const heroStats = document.querySelector(".hero-stats");
    if (heroStats) statsObserver.observe(heroStats);

    const w = window as Window & { gsap?: unknown; ScrollTrigger?: unknown };
    if (w.gsap && w.ScrollTrigger) initGsapHero();

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const onGsapReady = () => {
    const w = window as Window & { gsap?: unknown; ScrollTrigger?: unknown };
    if (w.gsap && w.ScrollTrigger) initGsapHero();
  };

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="afterInteractive"
        onLoad={onGsapReady}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onLoad={onGsapReady}
      />
    </>
  );
}
