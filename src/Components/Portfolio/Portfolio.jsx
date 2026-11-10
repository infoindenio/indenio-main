import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../assets/portfolio.css";


// Filter Buttons Component
function FilterButtons({ categories, filter, setFilter }) {
  return (
    <div className="filter-container">
      {categories.map((cat) => {
        const active = filter === cat;
        return (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={active}
            className={`filter-button ${
              active ? "filter-button-active" : "filter-button-inactive"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

// Portfolio Card Component
function PortfolioCard({ item, onView }) {
  return (
    <div
      className="portfolio-card"
      onClick={onView}
    >
      {/* Image */}
      <div className="portfolio-card-image-container">
        <img
          src={item.image}
          alt={item.title}
          className="portfolio-card-image"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/600x400?text=No+Image';
          }}
        />

        {/* Category pill */}
        <span className="portfolio-card-category">
          {item.category}
        </span>
      </div>

      {/* Title / Details */}
      <div className="portfolio-card-content">
        <h3 className="portfolio-card-title">{item.title}</h3>
        {item.country && <span className="portfolio-card-country">{item.country}</span>}
      </div>
    </div>
  );
}

// Portfolio Grid Component
function PortfolioGrid({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Portfolio Grid */}
      <motion.div layout className="portfolio-grid">
        <AnimatePresence>
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
            >
              <PortfolioCard item={item} onView={() => setSelectedIndex(idx)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal for preview */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="modal-content"
              style={{ maxHeight: "90vh" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="modal-close-button"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              {/* Content Wrapper */}
              <div className="modal-wrapper">
                {/* Image Container */}
                <div className="modal-image-container">
                  <img
                    src={items[selectedIndex].mockup || items[selectedIndex].image}
                    alt={items[selectedIndex].title}
                    className="modal-image"
                  />

                  {/* Left button */}
                  <button
                    onClick={handlePrev}
                    className="modal-nav-button modal-nav-button-left"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "1rem",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    ‹
                  </button>
                  {/* Right button */}
                  <button
                    onClick={handleNext}
                    className="modal-nav-button modal-nav-button-right"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "1rem",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.5)",
                      border: "none",
                      color: "#fff",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                    }}
                  >
                    ›
                  </button>
                </div>

                {/* Details Container */}
                <div className="modal-details">
                  <h2 className="modal-title">{items[selectedIndex].title}</h2>
                  {items[selectedIndex].country && (
                    <p className="modal-country">{items[selectedIndex].country}</p>
                  )}

                  {/* Tags */}
                  {items[selectedIndex].tags && (
                    <div className="modal-tags">
                      {items[selectedIndex].tags.map((tag, idx) => (
                        <span key={idx} className="modal-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {items[selectedIndex].link && items[selectedIndex].link !== "#" && (
                    <a
                      href={items[selectedIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-visit-button"
                    >
                      Visit Website ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Main Portfolio Component
export default function Portfolio({ portfolioData }) {
  const categories = ["all", "website", "seo & marketing", "figma", "graphic", "app"];
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  const spiralLayers = [
    { count: 8, scale: 0.5, speed: 30, opacity: 0.5 },
    { count: 6, scale: 0.7, speed: 45, opacity: 0.6 },
    { count: 4, scale: 1, speed: 60, opacity: 0.7 },
  ];

  return (
    <div className="app-container">
      {/* Galaxy background */}
      <div className="galaxy-bg"></div>

      {/* Multi-layered spirals */}
      {spiralLayers.map((layer, idx) => (
        <div key={idx} className="spiral-layer">
          {Array.from({ length: layer.count }).map((_, i) => (
            <svg
              key={i}
              width="150"
              height="150"
              viewBox="0 0 100 100"
              className="spiral-svg"
              style={{
                top: `${Math.random() * 85}%`,
                left: `${Math.random() * 85}%`,
                transform: `scale(${layer.scale + Math.random() * 0.3})`,
                opacity: layer.opacity + Math.random() * 0.2,
                animation: `rotateSpring ${
                  layer.speed + Math.random() * 20
                }s linear infinite, drift ${
                  layer.speed + 10 + Math.random() * 20
                }s ease-in-out infinite`,
              }}
            >
              <path
                d="M50,50 m-20,0 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0"
                stroke="rgba(0,255,188,0.9)"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          ))}
        </div>
      ))}

      {/* Portfolio Content */}
      <div className="portfolio-content">

        <div className="container main-content">

          <main className="main-body">
            <FilterButtons
              categories={categories}
              filter={filter}
              setFilter={setFilter}
            />

            <PortfolioGrid items={filteredItems} />
          </main>
        </div>
      </div>
    </div>
  );
}
