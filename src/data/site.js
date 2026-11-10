// ---------------------------------------------------------------
// All website content lives here. Edit text, numbers and projects
// in this one file without touching the page layouts.
// ---------------------------------------------------------------

export const contact = {
  whatsapp: "+92 345 4943966",
  whatsappLink: "https://wa.me/923454943966",
  phoneLink: "tel:+923454943966",
  email: "info@indenio.com",
  email2: "admin@indenio.com",
  address: "16 Hill Crest, Bar Hill, Cambridge CB23 8TG, UK",
  formEndpoint: "https://indenio-server-production.up.railway.app/api/contact",
  social: [
    { icon: "bi-facebook", label: "Facebook", url: "https://www.facebook.com/share/1FEQz9PEiq/" },
    { icon: "bi-instagram", label: "Instagram", url: "https://www.instagram.com/indenioteam" },
    { icon: "bi-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/company/indeniocompany/" },
  ],
};

export const waLink = (text = "Hi Indenio, I'd like to discuss a project.") =>
  `${contact.whatsappLink}?text=${encodeURIComponent(text)}`;

export const stats = [
  { value: 240, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 5, suffix: "", label: "Countries served" },
  { value: 100, suffix: "%", label: "Custom-built, no templates" },
];

export const countries = ["United Kingdom", "United States", "Norway", "Australia", "Pakistan"];

// ---------------- Services ----------------
export const categories = [
  {
    slug: "development",
    path: "/service/development",
    title: "Development",
    icon: "bi-code-slash",
    banner: "/assets/svg/banner-development.svg",
    intro: "Websites, online stores, apps and custom software built to be fast, secure and easy to manage.",
    services: ["web", "ecommerce", "mobile", "software"],
  },
  {
    slug: "graphics",
    path: "/service/graphics",
    title: "Design & Branding",
    icon: "bi-palette",
    banner: "/assets/svg/banner-graphics.svg",
    intro: "Logos, brand identities, UI/UX and print design that make your business look as good as it is.",
    services: ["uiux", "branding", "stationary"],
  },
  {
    slug: "marketing",
    path: "/service/marketing",
    title: "Digital Marketing",
    icon: "bi-graph-up-arrow",
    banner: "/assets/svg/banner-marketing.svg",
    intro: "SEO, social media and paid ads that bring the right people to your website and turn them into customers.",
    services: ["seo", "media"],
  },
];

export const services = [
  {
    slug: "web",
    path: "/service/web",
    category: "development",
    title: "Web Development",
    short: "Fast, mobile-friendly custom WordPress websites and landing pages built around your business.",
    icon: "bi-window-sidebar",
    banner: "/assets/svg/banner-web.svg",
    square: "/assets/svg/square-web.svg",
    intro: [
      "Your website is often the first thing a customer sees. We design and build custom WordPress websites that load fast, look great on every phone and make it easy for visitors to call, book or buy.",
      "Every site is hand-built around your business, with SEO, speed and tracking set up from day one, so it keeps working for you long after launch.",
    ],
    features: ["Custom WordPress themes, no page-builder bloat", "Mobile-first, responsive design", "SEO-ready structure and fast loading", "WhatsApp, call and enquiry buttons", "Google Analytics and Search Console setup", "Training so you can edit content yourself"],
    tags: ["website"],
  },
  {
    slug: "ecommerce",
    path: "/service/ecommerce",
    category: "development",
    title: "E-commerce Stores",
    short: "WooCommerce stores with Stripe payments, custom product options and clean checkouts.",
    icon: "bi-cart3",
    banner: "/assets/svg/banner-ecommerce.svg",
    square: "/assets/svg/square-ecommerce.svg",
    intro: [
      "We build WooCommerce online stores that are simple to shop and simple to run, from a handful of products to large multi-category catalogues.",
      "Need something WooCommerce cannot do out of the box, like size, fabric or add-on options? We build custom plugins so your store works exactly the way you sell.",
    ],
    features: ["WooCommerce store design and build", "Stripe, card and local payment gateways", "Custom product options and plugins", "Fast, conversion-focused checkout", "Product, shipping and tax setup", "Meta Pixel and Google tracking for ads"],
    tags: ["ecommerce"],
  },
  {
    slug: "mobile",
    path: "/service/mobile",
    category: "development",
    title: "Mobile App Development",
    short: "iOS and Android apps with clean design that connect your business to customers anywhere.",
    icon: "bi-phone",
    banner: "/assets/svg/banner-mobile.svg",
    square: "/assets/svg/square-mobile.svg",
    intro: [
      "We design and develop mobile apps for iOS and Android that are fast, easy to use and connected to your website, store or business systems.",
      "From the first wireframe to app store launch, you see and approve every screen before it is built.",
    ],
    features: ["iOS and Android apps", "UI/UX design and clickable prototypes", "Integration with your website or store", "Push notifications and user accounts", "App Store and Google Play publishing", "Ongoing updates and support"],
    tags: ["app"],
  },
  {
    slug: "software",
    path: "/service/software",
    category: "development",
    title: "Custom Software",
    short: "Dashboards, portals and automations built to remove manual work from your business.",
    icon: "bi-cpu",
    banner: "/assets/svg/banner-software.svg",
    square: "/assets/svg/square-software.svg",
    intro: [
      "When off-the-shelf tools do not fit, we build custom software: client portals, booking systems, dashboards and automations tailored to how your team works.",
      "We also connect the tools you already use, such as forms, CRMs, Google Sheets and email, so leads and data flow automatically.",
    ],
    features: ["Custom web applications and portals", "Admin dashboards and reporting", "Lead-funnel and form automation", "API and third-party integrations", "Secure, scalable architecture", "Documentation and handover"],
    tags: ["website"],
  },
  {
    slug: "uiux",
    path: "/service/uiux",
    category: "graphics",
    title: "UI/UX Design",
    short: "Clear, modern interfaces and prototypes in Figma that users understand instantly.",
    icon: "bi-vector-pen",
    banner: "/assets/svg/banner-uiux.svg",
    square: "/assets/svg/square-uiux.svg",
    intro: [
      "Good design is invisible: visitors simply find what they need. We design websites and apps in Figma around your customers' journey, so every screen has a clear purpose.",
      "You get clickable prototypes to review before development, which saves time and money later.",
    ],
    features: ["User journeys and wireframes", "High-fidelity Figma designs", "Clickable prototypes", "Design systems and components", "Mobile and desktop layouts", "Developer-ready handoff"],
    tags: ["figma"],
  },
  {
    slug: "branding",
    path: "/service/branding",
    category: "graphics",
    title: "Branding & Logo Design",
    short: "Logos and brand identities that make your business memorable and consistent everywhere.",
    icon: "bi-gem",
    banner: "/assets/svg/banner-branding.svg",
    square: "/assets/svg/square-branding.svg",
    intro: [
      "A strong brand makes people remember you and trust you. We create logos, colour palettes and typography that work everywhere, from your website to your shop front.",
      "You receive every file you need, in every format, plus simple brand guidelines so your look stays consistent.",
    ],
    features: ["Logo design and variations", "Colour palette and typography", "Brand guidelines", "Social media brand kit", "Print-ready and web-ready files", "Brand refresh for existing logos"],
    tags: ["graphic"],
  },
  {
    slug: "stationary",
    path: "/service/stationary",
    category: "graphics",
    title: "Stationery & Print",
    short: "Business cards, letterheads, flyers and brochures that match your brand.",
    icon: "bi-postcard",
    banner: "/assets/svg/banner-stationary.svg",
    square: "/assets/svg/square-stationary.svg",
    intro: [
      "Your printed materials should look as professional as your website. We design business cards, letterheads, flyers, brochures and more, all matched to your brand.",
      "Every design is delivered print-ready, so you can send it straight to your printer.",
    ],
    features: ["Business cards", "Letterheads and envelopes", "Flyers and brochures", "Menus, posters and banners", "Email signatures", "Print-ready files"],
    tags: ["graphic"],
  },
  {
    slug: "seo",
    path: "/service/seo",
    category: "marketing",
    title: "SEO & Google Ranking",
    short: "Technical, on-page, local and content SEO that gets you found by people already searching.",
    icon: "bi-search",
    banner: "/assets/svg/banner-seo.svg",
    square: "/assets/svg/square-seo.svg",
    intro: [
      "SEO puts your business in front of customers at the exact moment they search for what you sell. We fix the technical issues holding your site back, optimise every page and create content that ranks.",
      "For local businesses, we optimise your Google Business Profile so you show up in maps and 'near me' searches.",
    ],
    features: ["Full technical SEO audits and fixes", "Keyword research and on-page SEO", "Local SEO and Google Business Profile", "SEO blog and content writing", "Search Console and Analytics reporting", "Ranking-safe redesigns and rebrands"],
    tags: ["seo & marketing"],
  },
  {
    slug: "media",
    path: "/service/media",
    category: "marketing",
    title: "Social Media & Paid Ads",
    short: "On-brand posts and reels plus Meta and Google Ads built to bring leads, bookings and sales.",
    icon: "bi-megaphone",
    banner: "/assets/svg/banner-social.svg",
    square: "/assets/svg/square-social.svg",
    intro: [
      "We manage your social media with premium, on-brand posts, reels and stories, and run Meta and Google Ads campaigns aimed at real results: enquiries, bookings and sales.",
      "Every campaign is set up with proper Pixel and conversion tracking, so you can see exactly what your budget delivers.",
    ],
    features: ["Social media management", "Posts, reels and stories design", "Meta (Facebook & Instagram) Ads", "Google Search Ads", "Pixel and conversion tracking", "Monthly performance reports"],
    tags: ["seo & marketing"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const homeServices = ["web", "seo", "ecommerce", "media", "uiux", "branding"];

// ---------------- Process ----------------
export const process = [
  { icon: "bi-chat-dots", title: "Discovery Call", text: "A quick call to understand your business, customers and goals, then a clear plan and quote." },
  { icon: "bi-easel", title: "Design Approval", text: "You see and approve the design before any code is written, so there are no surprises." },
  { icon: "bi-code-square", title: "Build & Optimise", text: "We build with speed, mobile and SEO in from day one, then test on every device." },
  { icon: "bi-rocket-takeoff", title: "Launch & Grow", text: "We go live, set up tracking and keep growing your traffic and leads with SEO and ads." },
];

export const reasons = [
  { icon: "bi-code-slash", title: "Custom-built, never templates", text: "Hand-coded themes and plugins that fit your business exactly and load fast." },
  { icon: "bi-search", title: "SEO built in from day one", text: "Clean structure, fast pages and proper tracking so Google can find and rank you." },
  { icon: "bi-whatsapp", title: "Direct WhatsApp support", text: "Talk straight to the people building your project, with quick turnarounds." },
  { icon: "bi-shield-check", title: "Secure & supported", text: "Malware cleanup, backups, updates and growth work long after launch." },
];

// ---------------- Projects ----------------
const w = (slug) => ({ image: `/assets/svg/project-${slug}-card.svg`, mockup: `/assets/svg/project-${slug}.svg` });

export const projects = [
  { id: 1, title: "Fitnesspoint", category: "website", country: "Norway", link: "https://www.fitnesspoint.no", tags: ["Gym Website", "Membership Signup", "Centre Finder"], summary: "Website for a gym chain with 40+ centres: searchable centre finder, online membership signup, drop-in passes, gift cards and personal training pages.", featured: true, ...w("fitnesspoint") },
  { id: 2, title: "Integra Energy Group", category: "website", country: "Australia", link: "https://integrasolar.com.au", tags: ["Custom Theme", "Redesign", "Solar"], summary: "Redesign on a custom WordPress theme for a solar company: product pages for panels, inverters and batteries, a datasheet library and enquiry CTAs.", featured: true, ...w("integra-au") },
  { id: 3, title: "DreamCraft Furniture", category: "ecommerce", country: "United Kingdom", link: "https://dreamcraftfurniture.net", tags: ["WooCommerce", "Custom Plugin", "Meta Ads"], summary: "Custom WooCommerce store with a bespoke size, fabric and storage options plugin, Stripe checkout, Meta Pixel tracking and live sales campaigns.", featured: true, ...w("dreamcraftfurniture") },
  { id: 4, title: "Securiwise", category: "website", country: "United Kingdom", link: "https://securiwise.co.uk", tags: ["Website", "Security Services", "Website Security"], summary: "Website for a Cambridge security guarding company: services, accreditations, careers and enquiry forms, rebuilt with stronger security.", featured: true, ...w("securiwise") },
  { id: 5, title: "Shobay", category: "ecommerce", country: "United Kingdom", link: "https://shobay.co.uk", tags: ["WooCommerce", "Multi-category", "Online Store"], summary: "Multi-category online store selling baby, beauty, electronics, home, garden and pet products, with wishlist, compare and best-seller grids.", featured: true, ...w("shobay") },
  { id: 6, title: "GSE Solar", category: "website", country: "Pakistan", link: "https://gsesolar.com.pk", tags: ["Website", "Solar", "Local SEO"], summary: "Website for an Islamabad solar installer covering residential and commercial systems, net metering, solar pumping, projects and an SEO blog.", featured: true, ...w("gsesolar") },
  { id: 7, title: "Retail Specialist", category: "website", country: "United Kingdom", link: "https://retailspecialist.co.uk", tags: ["Website", "Retail Staffing", "Custom Forms"], summary: "Website for a UK retail staffing agency with merchandising services, a blog and online staff and company registration forms.", ...w("retailspecialist") },
  { id: 8, title: "Shifa CM", category: "website", country: "", link: "https://shifacm.com", tags: ["Website", "Healthcare", "Booking"], summary: "Calm, trustworthy website for a mental wellness and care practice, built to make booking a session simple.", ...w("shifacm") },
  { id: 9, title: "Cars Rental 24/7", category: "website", country: "Pakistan", link: "https://carsrental247.pk", tags: ["Website", "Google Ads", "WhatsApp Booking"], summary: "Custom WordPress site with fleet listings and WhatsApp booking for a rent-a-car company, backed by a Google Ads search campaign.", ...w("carsrental247") },
  { id: 10, title: "Pasha Dry Fruit", category: "ecommerce", country: "Pakistan", link: "https://pashadryfruit.com", tags: ["WooCommerce", "Redesign", "Security Cleanup"], summary: "Complete WooCommerce redesign in the brand's green, red and gold, keeping every product, plus a full security cleanup of the old site.", ...w("pashadryfruit") },
  { id: 11, title: "London Mayfair Clubs", category: "website", country: "United Kingdom", link: "https://londonmayfairclubs.co.uk", tags: ["Custom Theme", "Technical SEO", "Content"], summary: "Nightlife guide on a custom WordPress theme with club and event listings. We run its technical SEO and SEO blog content.", ...w("londonmayfairclubs") },
  { id: 12, title: "Integra Solar Pakistan", category: "website", country: "Pakistan", link: "https://integrasolar.com.pk", tags: ["Website", "Solar", "Products"], summary: "Solar products website for Integra's Pakistan business, showcasing tier-1 panels and inverters with enquiry forms.", ...w("integra-pk") },
  { id: 13, title: "OnStak", category: "seo & marketing", country: "United States", link: "https://onstak.com", tags: ["SEO Audit", "Landing Pages", "Lead Funnel"], summary: "Full SEO audit, landing pages and an automated lead-capture funnel for a technology company's website forms.", ...w("onstak") },
  { id: 14, title: "The Anna Studio", category: "seo & marketing", country: "United States", link: "https://theannastudio.com", tags: ["Local SEO", "Social Media", "Meta Ads"], summary: "Ongoing SEO and social media for a beauty salon, with premium on-brand posts and reels and Meta ads driving online bookings.", ...w("theannastudio") },

  // UI/UX (Figma)
  ...["Marvel App", "Foodie App", "AI Beat App", "Burger App", "Cooking App", "Recipe House App"].map((t, i) => ({
    id: 100 + i, title: `${t} Design`, category: "figma", tags: ["UI/UX", "Figma", "Prototype"],
    image: `/assets/img/work/figma${i + 1}-sm.webp`, mockup: `/assets/img/work/figma${i + 1}.webp`,
  })),

  // Mobile apps
  ...["Shobay App", "MegaBoo App", "Trading App", "Fresh Wipe App", "Integra Solar Pakistan App"].map((t, i) => ({
    id: 200 + i, title: t, category: "app", tags: ["Mobile App", "UI/UX", ["React Native", "Flutter", "Hybrid", "Cross-platform", "Custom"][i]],
    image: `/assets/img/work/app${i + 1}-sm.webp`, mockup: `/assets/img/work/app${i + 1}.webp`,
  })),

  // Logo & branding
  ...[
    [1, "Integra Energy Group"], [2, "FitPursuit"], [3, "The Professional Company"], [4, "IntelliBiz USA"], [5, "StaticStone"],
    [6, "Jaffar Mall"], [7, "Smartarrz"], [8, "SmartWay"], [9, "Viraj"], [10, "Pakmanor"], [11, "Karachi Corporation"],
    [12, "Pro Agri"], [13, "Shifa Caring"], [14, "Sargodha Book Mart"], [17, "Integra Solar Pakistan"], [18, "Getherly"],
    [19, "Sneaker Junky"], [20, "Keen Services Group"], [21, "Shifa Caring Center"], [22, "GSF Solar"], [23, "MegaBoo"],
    [24, "Fresh Wipe"], [25, "Shobay"],
  ].map(([n, t]) => ({
    id: 300 + n, title: t, category: "branding", tags: ["Logo", "Branding"],
    image: `/assets/img/work/logo${n}.webp`, mockup: `/assets/img/work/logo${n}.webp`, square: true,
  })),
];

export const projectFilters = [
  { key: "all", label: "All Work" },
  { key: "website", label: "Websites" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "seo & marketing", label: "SEO & Marketing" },
  { key: "figma", label: "UI/UX" },
  { key: "app", label: "Apps" },
  { key: "branding", label: "Logos" },
];

// ---------------- Client logos ----------------
export const clientLogos = Array.from({ length: 11 }, (_, i) => `/assets/img/clients/client${i + 1}.webp`);

// ---------------- FAQ ----------------
export const faqs = [
  { q: "What services does Indenio provide?", a: "We build custom WordPress websites and WooCommerce stores, design logos and UI/UX, develop apps, handle SEO (technical, on-page, local and content) and run social media and paid ads on Meta and Google. Hire us for one service or the complete package." },
  { q: "How long does a new website take?", a: "Most business websites take 2 to 4 weeks from design approval. Larger online stores or custom features can take longer, and we agree a clear timeline with you before we start." },
  { q: "Will my website rank on Google?", a: "Every site we build is fast, mobile-friendly and SEO-ready from day one. For competitive keywords we offer monthly SEO packages covering technical fixes, content and local SEO." },
  { q: "Can I update the website myself?", a: "Yes. We build on WordPress so you can edit text, images, products and blog posts yourself, and we show you how. We can also handle updates for you on a monthly plan." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. We work with businesses in the UK, USA, Norway and Australia as well as Pakistan, and communicate on WhatsApp, email and video calls in your time zone." },
  { q: "Do you provide support after launch?", a: "Yes. We offer ongoing maintenance, security monitoring, malware cleanup, backups and growth work such as SEO and ads, as one-off jobs or monthly retainers." },
  { q: "How do we get started?", a: "Message us on WhatsApp or fill in the contact form. We will set up a short call, understand what you need and send you a clear plan and quote, usually within 24 hours." },
];
