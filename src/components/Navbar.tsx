import { motion } from "framer-motion";
import data from "../data.json";
import { useNavigate, useLocation } from "react-router-dom";
import FancyHamburgerMenu from "./HamburgerMenu";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="sticky-nav flex md:flex-row relative flex-col justify-between items-center md:px-[46px] pb-3 md:py-0 sticky top-0 bg-white w-full">
      <div className="flex flex-1 justify-between items-center w-full px-4 relative">
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="w-[5.2rem] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={data?.navbar?.logo} className="rounded-full" />
        </motion.a>
        <FancyHamburgerMenu />
      </div>
      <div className="hidden md:flex justify-center gap-x-[10px] md:text-[20px] text-[12px] md:gap-x-[40px] items-center w-full md:w-fit">
        {data?.navbar?.links?.map((link) =>
          !link?.special ? (
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`font-medium cursor-pointer ${
                location.pathname === link?.url
                  ? "nav-link-width-full"
                  : "the-nav-link"
              }`}
              onClick={() => navigate(link?.url)}
            >
              {link?.title}
            </motion.a>
          ) : (
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="the-nav-button bg-[#141414] text-white flex justify-center h-[30px] md:h-[50px] text-[16px] px-[0.7rem] md:px-[1.4rem] items-center border border-[#141414] rounded-[32px] font-medium cursor-pointer"
              onClick={() => navigate(link?.url)}
            >
              {link?.title}
            </motion.a>
          )
        )}
      </div>
    </div>
  );
};
