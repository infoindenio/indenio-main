import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Category from "../pages/Category";
import Portfolio from "../pages/Portfolio";
import OurProcess from "../pages/OurProcess";
import Contact from "../pages/Contact";
import { FaqPage, PrivacyPage, TermsPage, NotFound } from "../pages/Misc";
import { services } from "../data/site";

// Old template pages that no longer exist redirect to the closest page
const redirects = {
  "/home2": "/", "/home3": "/", "/team": "/about", "/team/team-details": "/about", "/pricing": "/contact",
  "/blog": "/", "/blog-sidebar": "/", "/blog/blog-details": "/", "/blog/web-blog-details": "/",
  "/blog/mobile-blog-details": "/", "/blog/why-blog-details": "/",
  "/service/service-details": "/service", "/project/project-details": "/project",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "ourprocess", element: <OurProcess /> },
      { path: "service", element: <Services /> },
      ...services.map((s) => ({ path: s.path.slice(1), element: <ServiceDetail key={s.slug} slug={s.slug} /> })),
      { path: "service/development", element: <Category key="development" slug="development" /> },
      { path: "service/graphics", element: <Category key="graphics" slug="graphics" /> },
      { path: "service/marketing", element: <Category key="marketing" slug="marketing" /> },
      { path: "project", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FaqPage /> },
      { path: "privacypolicy", element: <PrivacyPage /> },
      { path: "termcondition", element: <TermsPage /> },
      ...Object.entries(redirects).map(([from, to]) => ({ path: from.slice(1), element: <Navigate to={to} replace /> })),
      { path: "*", element: <NotFound /> },
    ],
  },
]);
