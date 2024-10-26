import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import Services from "./pages/services";
import AboutUs from "./pages/about-us";
import FAQ from "./pages/faq";
import StartAProject from "./pages/start-a-project";
import OurWork from "./pages/our-work";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/start-a-project",
      element: <StartAProject />,
    },
    {
      path: "/our-work",
      element: <OurWork />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
