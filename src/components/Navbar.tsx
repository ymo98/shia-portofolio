import { motion } from "framer-motion";
import { LogoSvg } from "./LogoSvg";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex justify-between items-center px-[46px] my-[2rem]">
      <motion.a
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
        }}
        className="w-[5.2rem] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <LogoSvg props={{}} />
      </motion.a>
      <div className="flex gap-x-[40px] items-center">
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className={`font-medium cursor-pointer ${
            location.pathname === "/our-work"
              ? "nav-link-width-full"
              : "the-nav-link"
          }`}
          onClick={() => navigate("/our-work")}
        >
          Our work
        </motion.a>
        <motion.a
          onClick={() => navigate("/services")}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className={`font-medium cursor-pointer ${
            location.pathname === "/services"
              ? "nav-link-width-full"
              : "the-nav-link"
          }`}
        >
          Services
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className={`font-medium cursor-pointer ${
            location.pathname === "/faq"
              ? "nav-link-width-full"
              : "the-nav-link"
          }`}
          onClick={() => navigate("/faq")}
        >
          Faq
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className={`font-medium cursor-pointer ${
            location.pathname === "/about-us"
              ? "nav-link-width-full"
              : "the-nav-link"
          }`}
          onClick={() => navigate("/about-us")}
        >
          About us
        </motion.a>
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className="the-nav-button font-medium cursor-pointer"
          onClick={() => navigate("/start-a-project")}
        >
          Start a project
        </motion.a>
      </div>
    </div>
  );
};
