import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import OurProcess from "../Pages/OurProcessPage"
import Home from "../Pages/Home";
import Home2 from "../Pages/Home2";
import Home3 from "../Pages/Home3";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import WebDevelopmentPage from "../Pages/WebDevelopmentPage";
import MobilePage from "../Pages/MobileAppDevelopmentPage";
import SoftwarePage from "../Pages/CustomSoftwareDevelopmentPage";
import EcommercePage from "../Pages/E-commerceSolutionsPage";
import SocialPage from "../Pages/SocialMediaPage";
import BrandPage from "../Pages/BrandingPage";
import SeoPage from "../Pages/SeoPage";
import StationaryPage from "../Pages/StationaryWorkPage";

import DevelopmentPage from "../Pages/DevelopmentPage";
import MarketingPage from "../Pages/MarketingPage";
import UIUXPage from "../Pages/UIUXDesignPage";
import GraphicPage from "../Pages/GraphicsPage";

import WebsiteBlogDetailsPage from "../Pages/WebsiteBlog";
import MobileBlogDetailsPage from "../Pages/MobileAppBlogPage";
import ChooseBlogDetailsPage from "../Pages/ChooseBlogPage";

import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import BlogPage from "../Pages/BlogPage";
import BlogSidebarPage from "../Pages/BlogSidebarPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "../Pages/TermsConditionPage";

import usePageTracking from "../usePageTracking";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// ✅ ScrollToTop Component
function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  usePageTracking();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // chahe to "auto" bhi kar sakte ho
    });
  }, [pathname]);

  return children;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Main />
      </ScrollToTop>
    ),
    children: [
      {
        path: "/home2",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home2 />,
      },
      {
        path: "/home3",
        element: <Home3 />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/ourprocess",
        element: <OurProcess />,
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/service/service-details",
        element: <ServiceDetailsPage />,
      },
      {
        path: "/service/web",
        element: <WebDevelopmentPage />,
      },
      {
        path: "/service/mobile",
        element: <MobilePage />,
      },
      {
        path: "/service/software",
        element: <SoftwarePage />,
      },
      {
        path: "/service/ecommerce",
        element: <EcommercePage />,
      },
      {
        path: "/service/media",
        element: <SocialPage />,
      },
      {
        path: "/service/branding",
        element: <BrandPage />,
      },
      {
        path: "/service/seo",
        element: <SeoPage />,
      },
      {
        path: "/service/stationary",
        element: <StationaryPage />,
      },
      {
        path: "/service/development",
        element: <DevelopmentPage />,
      },
      {
        path: "/service/marketing",
        element: <MarketingPage />,
      },
      {
        path: "/service/uiux",
        element: <UIUXPage />,
      },
      {
        path: "/service/graphics",
        element: <GraphicPage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/project/project-details",
        element: <ProjectDetailsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog-sidebar",
        element: <BlogSidebarPage />,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetailsPage />,
      },
      {
        path: "/blog/web-blog-details",
        element: <WebsiteBlogDetailsPage />,
      },
      {
        path: "/blog/mobile-blog-details",
        element: <MobileBlogDetailsPage />,
      },
      {
        path: "/blog/why-blog-details",
        element: <ChooseBlogDetailsPage />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/termcondition",
        element: <TermsAndConditionsPage />,
      },
    ],
  },
]);
