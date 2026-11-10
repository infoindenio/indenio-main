import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { waLink } from "../data/site";
import usePageTracking from "../usePageTracking";

// Adds the "in" class to every .reveal element as it scrolls into view
function useRevealOnScroll(pathname) {
  useEffect(() => {
    const els = () => document.querySelectorAll(".reveal:not(.in), .steps:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els().forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const scan = () => els().forEach((el) => io.observe(el));
    scan();
    // pick up elements rendered later (filters, modals, lazy content)
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, [pathname]);
}

// Mouse-follow glow on cards
function useCardGlow() {
  useEffect(() => {
    const move = (e) => {
      const card = e.target.closest?.(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => document.removeEventListener("pointermove", move);
  }, []);
}

function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" ref={ref} style={{ width: "100%", transform: "scaleX(0)" }} />;
}

const Main = () => {
  const { pathname } = useLocation();
  usePageTracking();
  useRevealOnScroll(pathname);
  useCardGlow();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="bi bi-whatsapp" />
        <span className="tip">Chat with us on WhatsApp</span>
      </a>
    </>
  );
};

export default Main;
