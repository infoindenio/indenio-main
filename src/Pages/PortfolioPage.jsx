import "../../src/assets/portfolio.css";
// Website images

// Website mockups

// Figma mockups
import figma1 from "/assets/images/portfolio/images/mockupf1.png";
import figma2 from "/assets/images/portfolio/images/mockupf2.png";
import figma3 from "/assets/images/portfolio/images/mockupf3.png";
import figma4 from "/assets/images/portfolio/images/mockupf4.png";
import figma5 from "/assets/images/portfolio/images/mockupf5.png";
import figma6 from "/assets/images/portfolio/images/mockupf6.png"; 

// Mobile App images
import app1 from "/assets/images/portfolio/images/app1.png";
import app2 from "/assets/images/portfolio/images/app2.png";
import app3 from "/assets/images/portfolio/images/app3.png";
import app4 from "/assets/images/portfolio/images/app4.png";
import app5 from "/assets/images/portfolio/images/app5.png";

// Mobile App mockups
import mockupa1 from "/assets/images/portfolio/images/mockupa1.png";
import mockupa2 from "/assets/images/portfolio/images/mockupa2.png";
import mockupa3 from "/assets/images/portfolio/images/mockupa3.png";
import mockupa4 from "/assets/images/portfolio/images/mockupa4.png";
import mockupa5 from "/assets/images/portfolio/images/mockupa5.png";

// Logo mockups
import logo1 from "/assets/images/portfolio/images/logo1.png";
import logo2 from "/assets/images/portfolio/images/logo2.png";
import logo3 from "/assets/images/portfolio/images/logo3.png";
import logo4 from "/assets/images/portfolio/images/logo4.png";
import logo5 from "/assets/images/portfolio/images/logo5.png";
import logo6 from "/assets/images/portfolio/images/logo6.png";
import logo7 from "/assets/images/portfolio/images/logo7.png";
import logo8 from "/assets/images/portfolio/images/logo8.png";
import logo9 from "/assets/images/portfolio/images/logo9.png";
import logo10 from "/assets/images/portfolio/images/logo10.png";
import logo11 from "/assets/images/portfolio/images/logo11.png";
import logo12 from "/assets/images/portfolio/images/logo12.png";
import logo13 from "/assets/images/portfolio/images/logo13.png";
import logo14 from "/assets/images/portfolio/images/logo14.png";
import logo17 from "/assets/images/portfolio/images/logo17.png";
import logo18 from "/assets/images/portfolio/images/logo18.png";
import logo19 from "/assets/images/portfolio/images/logo19.png";
import logo20 from "/assets/images/portfolio/images/logo20.png";
import logo21 from "/assets/images/portfolio/images/logo21.png";
import logo22 from "/assets/images/portfolio/images/logo22.png";
import logo23 from "/assets/images/portfolio/images/logo23.png";
import logo24 from "/assets/images/portfolio/images/logo24.png";
import logo25 from "/assets/images/portfolio/images/logo25.png";

const portfolioData = [
  // Websites (latest first)
  { id: 101, title: "Fitnesspoint", category: "website", image: "/assets/svg/project-fitnesspoint-card.svg", mockup: "/assets/svg/project-fitnesspoint.svg", tags: ["Website", "Gym & Fitness", "Norway"], link: "https://www.fitnesspoint.no", country: "Norway" },
  { id: 24, title: "Integra Energy Group", category: "website", image: "/assets/svg/project-integra-au-card.svg", mockup: "/assets/svg/project-integra-au.svg", tags: ["Website", "Solar", "Australia"], link: "https://integrasolar.com.au", country: "Australia" },
  { id: 102, title: "DreamCraft Furniture", category: "website", image: "/assets/svg/project-dreamcraftfurniture-card.svg", mockup: "/assets/svg/project-dreamcraftfurniture.svg", tags: ["WooCommerce", "Custom Plugin", "Meta Ads"], link: "https://dreamcraftfurniture.net", country: "United Kingdom" },
  { id: 103, title: "Securiwise", category: "website", image: "/assets/svg/project-securiwise-card.svg", mockup: "/assets/svg/project-securiwise.svg", tags: ["Website", "Security Services", "UK"], link: "https://securiwise.co.uk", country: "United Kingdom" },
  { id: 7, title: "Shobay", category: "website", image: "/assets/svg/project-shobay-card.svg", mockup: "/assets/svg/project-shobay.svg", tags: ["Website", "E-commerce", "WooCommerce"], link: "https://shobay.co.uk", country: "United Kingdom" },
  { id: 12, title: "GSE Solar", category: "website", image: "/assets/svg/project-gsesolar-card.svg", mockup: "/assets/svg/project-gsesolar.svg", tags: ["Website", "Solar", "Energy"], link: "https://gsesolar.com.pk", country: "Pakistan" },
  { id: 14, title: "Retail Specialist", category: "website", image: "/assets/svg/project-retailspecialist-card.svg", mockup: "/assets/svg/project-retailspecialist.svg", tags: ["Website", "Retail Staffing", "UK"], link: "https://retailspecialist.co.uk", country: "United Kingdom" },
  { id: 8, title: "Shifa CM", category: "website", image: "/assets/svg/project-shifacm-card.svg", mockup: "/assets/svg/project-shifacm.svg", tags: ["Website", "Healthcare", "Modern"], link: "https://shifacm.com" },
  { id: 104, title: "Cars Rental 24/7", category: "website", image: "/assets/svg/project-carsrental247-card.svg", mockup: "/assets/svg/project-carsrental247.svg", tags: ["Website", "Car Rental", "Google Ads"], link: "https://carsrental247.pk", country: "Pakistan" },
  { id: 105, title: "Pasha Dry Fruit", category: "website", image: "/assets/svg/project-pashadryfruit-card.svg", mockup: "/assets/svg/project-pashadryfruit.svg", tags: ["WooCommerce", "Redesign", "Security Cleanup"], link: "https://pashadryfruit.com", country: "Pakistan" },
  { id: 106, title: "London Mayfair Clubs", category: "website", image: "/assets/svg/project-londonmayfairclubs-card.svg", mockup: "/assets/svg/project-londonmayfairclubs.svg", tags: ["Custom Theme", "Technical SEO", "Content"], link: "https://londonmayfairclubs.co.uk", country: "United Kingdom" },
  { id: 11, title: "Integra Solar Pakistan", category: "website", image: "/assets/svg/project-integra-pk-card.svg", mockup: "/assets/svg/project-integra-pk.svg", tags: ["Website", "Solar", "Pakistan"], link: "https://integrasolar.com.pk", country: "Pakistan" },

  // SEO & Marketing
  { id: 107, title: "OnStak", category: "seo & marketing", image: "/assets/svg/project-onstak-card.svg", mockup: "/assets/svg/project-onstak.svg", tags: ["SEO Audit", "Landing Pages", "Lead Funnel"], link: "https://onstak.com", country: "United States" },
  { id: 108, title: "The Anna Studio", category: "seo & marketing", image: "/assets/svg/project-theannastudio-card.svg", mockup: "/assets/svg/project-theannastudio.svg", tags: ["Local SEO", "Social Media", "Meta Ads"], link: "https://theannastudio.com", country: "United States" },

  // Figma
  { id: 16, title: "Marvel App Design", category: "figma", image: figma1, mockup: figma1, tags: ["UI/UX", "prototype"], link: "#" },
  { id: 17, title: "Foodie App Design", category: "figma", image: figma2, mockup: figma2, tags: ["UI/UX", "prototype"], link: "#" },
  { id: 18, title: "AI Beat App Design", category: "figma", image: figma3, mockup: figma3, tags: ["UI/UX", "prototype"], link: "#" },
  { id: 19, title: "Burger App Design", category: "figma", image: figma4, mockup: figma4, tags: ["UI/UX", "prototype"], link: "#" },
  { id: 20, title: "Cooking App Design", category: "figma", image: figma5, mockup: figma5, tags: ["UI/UX", "prototype"], link: "#" },
  { id: 21, title: "Recipe House App Design", category: "figma", image: figma6, mockup: figma6, tags: ["UI/UX", "prototype"], link: "#" },

  // Mobile Apps
    // Apps
  { id: 47, title: "Shobay App", category: "app", image: app1, mockup: mockupa1, tags: ["App", "UI/UX", "React Native"], link: "#" },
  { id: 48, title: "MegaBoo App", category: "app", image: app2, mockup: mockupa2, tags: ["App", "UI/UX", "Flutter"], link: "#" },
  { id: 49, title: "Trading App", category: "app", image: app3, mockup: mockupa3, tags: ["App", "UI/UX", "Hybrid"], link: "#" },
  { id: 50, title: "Fresh Wipe App", category: "app", image: app4, mockup: mockupa4, tags: ["App", "UI/UX", "Cross-platform"], link: "#" },
  { id: 51, title: "Integra Solar Pakistan App", category: "app", image: app5, mockup: mockupa5, tags: ["App", "UI/UX", "Custom"], link: "#" },

  // Graphic
  { id: 22, title: "INTEGRA ENERGY GROUP", category: "graphic", image: logo1, mockup: logo1, tags: ["branding", "creative"], link: "#" },
  { id: 25, title: "FITPURSUIT", category: "graphic", image: logo2, mockup: logo2, tags: ["branding", "creative"], link: "#" },
  { id: 26, title: "THE PROFESSIONAL COMPANY", category: "graphic", image: logo3, mockup: logo3, tags: ["branding", "creative"], link: "#" },
  { id: 27, title: "IntelliBiz USA", category: "graphic", image: logo4, mockup: logo4, tags: ["branding", "creative"], link: "#" },
  { id: 28, title: "StaticStone", category: "graphic", image: logo5, mockup: logo5, tags: ["branding", "creative"], link: "#" },
  { id: 29, title: "Jaffar Mall", category: "graphic", image: logo6, mockup: logo6, tags: ["branding", "creative"], link: "#" },
  { id: 30, title: "Smartarrz", category: "graphic", image: logo7, mockup: logo7, tags: ["branding", "creative"], link: "#" },
  { id: 31, title: "SmartWay", category: "graphic", image: logo8, mockup: logo8, tags: ["branding", "creative"], link: "#" },
  { id: 32, title: "Viraj", category: "graphic", image: logo9, mockup: logo9, tags: ["branding", "creative"], link: "#" },
  { id: 33, title: "Pakmanor", category: "graphic", image: logo10, mockup: logo10, tags: ["branding", "creative"], link: "#" },
  { id: 34, title: "Karachi Corporation", category: "graphic", image: logo11, mockup: logo11, tags: ["branding", "creative"], link: "#" },
  { id: 35, title: "Pro Agri", category: "graphic", image: logo12, mockup: logo12, tags: ["branding", "creative"], link: "#" },
  { id: 36, title: "Shifa Caring", category: "graphic", image: logo13, mockup: logo13, tags: ["branding", "creative"], link: "#" },
  { id: 37, title: "Sargodha Book Mart", category: "graphic", image: logo14, mockup: logo14, tags: ["branding", "creative"], link: "#" },
  { id: 38, title: "Integra Solar Pakistan", category: "graphic", image: logo17, mockup: logo17, tags: ["branding", "creative"], link: "#" },
  { id: 39, title: "Getherly", category: "graphic", image: logo18, mockup: logo18, tags: ["branding", "creative"], link: "#" },
  { id: 40, title: "Sneaker Junky", category: "graphic", image: logo19, mockup: logo19, tags: ["branding", "creative"], link: "#" },
  { id: 41, title: "Keen Services Group", category: "graphic", image: logo20, mockup: logo20, tags: ["branding", "creative"], link: "#" },
  { id: 42, title: "Shifa Caring Center", category: "graphic", image: logo21, mockup: logo21, tags: ["branding", "creative"], link: "#" },
  { id: 43, title: "GSF Solar", category: "graphic", image: logo22, mockup: logo22, tags: ["branding", "creative"], link: "#" },
  { id: 44, title: "MegaBoo", category: "graphic", image: logo23, mockup: logo23, tags: ["branding", "creative"], link: "#" },
  { id: 45, title: "Fresh Wipe", category: "graphic", image: logo24, mockup: logo24, tags: ["branding", "creative"], link: "#" },
  { id: 46, title: "Shobay", category: "graphic", image: logo25, mockup: logo25, tags: ["branding", "creative"], link: "#" },
];

// Fixed order: latest projects first
export default portfolioData;
