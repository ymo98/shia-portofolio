import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data.json";
import { useNavigate } from "react-router-dom";

const FancyHamburgerMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden fancy-hamburger-menu">
      {/* Hamburger Icon */}
      <motion.div
        className="hamburger-icon"
        onClick={toggleMenu}
        animate={isOpen ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={isOpen ? "line-open" : "line"}
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className={isOpen ? "line-open" : "line"}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className={isOpen ? "line-open" : "line"}
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Menu Overlay */}
      <motion.div
        className="menu-overlay"
        initial={{ scale: 0 }}
        animate={isOpen ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <ul className="menu-items flex flex-col gap-y-1">
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          {data?.navbar?.links?.map((link) => (
            <li>
              <a onClick={() => navigate(link?.url)}>{link?.title}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default FancyHamburgerMenu;
