import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import Study from "../lottie/Study.json";
import Study2 from "../lottie/Study-2.json";
import Study3 from "../lottie/Study-3.json";
import Study4 from "../lottie/Study-4.json";
import Study5 from "../lottie/Study-5.json";
import Work from "../lottie/Work.json";
import Lottie from "lottie-react";
import { useState } from "react";

export const Home = () => {
  const [currentApproach, setCurrentApproach] = useState<
    "Discover" | "Strategise" | "Structure" | "Create" | "Emote"
  >("Discover");
  const [currentCategory, setCurrentCategory] = useState<
    "All" | "Web design" | "Mobile app" | "Branding"
  >("All");
  const variants = {
    hidden: { scale: 0, opacity: 0 }, // Hidden state
    visible: { scale: 1, opacity: 1 }, // Visible state
    exit: { scale: 0, opacity: 0 }, // Exit state
  };
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <Navbar />
      <div className="flex justify-center items-center h-full w-full header-container">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 3 },
            },
          }}
          className="header-title"
        >
          We are a full-cycle agency that delivers turnkey projects, and by
          identifying the{" "}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="title-link inline"
          >
            branding
          </motion.div>
          , creating the{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="title-link"
          >
            web design
          </motion.span>
          , and{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="title-link"
          >
            mobile app
          </motion.span>{" "}
          we turn it into a live product.
        </motion.h1>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="px-[70px] mt-[50px] relative"
      >
        <button className="btn-video-play">
          <i className="icon-triangle" />
        </button>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }} // Adjust styles as needed
        >
          <source
            src="https://emote.agency/wp-content/uploads/2021/04/Showreel.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div className="my-[5rem] px-[118px]">
        <div>
          <p className="font-bold text-[56px] mb-[50px]">Our approach</p>
          <div className="flex flex-1 items-center">
            <div className="w-[500px] h-[400px] mr-[75px] flex justify-center items-center">
              <AnimatePresence mode="wait">
                {currentApproach === "Discover" && (
                  <motion.div
                    key="discover"
                    variants={variants} // Use variants for inner div
                    initial="hidden" // Initial state
                    animate="visible" // Animate to visible state
                    exit="exit" // Exit state
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <Lottie animationData={Study} />
                  </motion.div>
                )}
                {currentApproach === "Strategise" && (
                  <motion.div
                    key="strategise"
                    variants={variants} // Use variants for inner div
                    initial="hidden" // Initial state
                    animate="visible" // Animate to visible state
                    exit="exit" // Exit state
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <Lottie animationData={Study2} />
                  </motion.div>
                )}
                {currentApproach === "Structure" && (
                  <motion.div
                    key="structure"
                    variants={variants} // Use variants for inner div
                    initial="hidden" // Initial state
                    animate="visible" // Animate to visible state
                    exit="exit" // Exit state
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <Lottie animationData={Study3} />
                  </motion.div>
                )}
                {currentApproach === "Create" && (
                  <motion.div
                    key="create"
                    variants={variants} // Use variants for inner div
                    initial="hidden" // Initial state
                    animate="visible" // Animate to visible state
                    exit="exit" // Exit state
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <Lottie animationData={Study4} />
                  </motion.div>
                )}
                {currentApproach === "Emote" && (
                  <motion.div
                    key="emote"
                    variants={variants} // Use variants for inner div
                    initial="hidden" // Initial state
                    animate="visible" // Animate to visible state
                    exit="exit" // Exit state
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <Lottie animationData={Study5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 h-[50vh] flex flex-col">
              <div className="flex gap-x-[4rem] w-full mt-[100px]">
                <div className="flex flex-col items-center relative">
                  <a
                    className={`text-[#b6b6b6] ${
                      currentApproach === "Discover"
                        ? "the-current-approach"
                        : "the-approach-link"
                    }  text-[26px] font-semibold cursor-pointer`}
                    onClick={() => setCurrentApproach("Discover")}
                  >
                    Discover
                  </a>
                  {currentApproach === "Discover" && (
                    <motion.div
                      key="discover"
                      transition={{ duration: 0.25 }} // Transition duration
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, transition: { duration: 0.5 } }}
                      className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute bottom-[-20px]"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center relative">
                  <a
                    className={`text-[#b6b6b6] ${
                      currentApproach === "Strategise"
                        ? "the-current-approach"
                        : "the-approach-link"
                    }  text-[26px] font-semibold cursor-pointer`}
                    onClick={() => setCurrentApproach("Strategise")}
                  >
                    Strategise
                  </a>
                  {currentApproach === "Strategise" && (
                    <motion.div
                      key="strategise"
                      transition={{ duration: 0.25 }} // Transition duration
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, transition: { duration: 0.5 } }}
                      className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute bottom-[-20px]"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center relative">
                  <a
                    className={`text-[#b6b6b6] ${
                      currentApproach === "Structure"
                        ? "the-current-approach"
                        : "the-approach-link"
                    }  text-[26px] font-semibold cursor-pointer`}
                    onClick={() => setCurrentApproach("Structure")}
                  >
                    Structure
                  </a>
                  {currentApproach === "Structure" && (
                    <motion.div
                      transition={{ duration: 0.25 }} // Transition duration
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, transition: { duration: 0.5 } }}
                      className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute bottom-[-20px]"
                    />
                  )}
                </div>
                <div className="flex flex-col items-center relative">
                  <a
                    className={`text-[#b6b6b6] ${
                      currentApproach === "Create"
                        ? "the-current-approach"
                        : "the-approach-link"
                    }  text-[26px] font-semibold cursor-pointer`}
                    onClick={() => setCurrentApproach("Create")}
                  >
                    Create
                  </a>
                  {currentApproach === "Create" && (
                    <motion.div
                      transition={{ duration: 0.25 }} // Transition duration
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0, transition: { duration: 0.5 } }}
                      className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute bottom-[-20px]"
                    />
                  )}
                </div>
              </div>
              <div>
                <AnimatePresence mode="wait">
                  {currentApproach === "Discover" && (
                    <motion.p
                      key="discover"
                      initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and translate down by 20 pixels
                      animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
                      exit={{ opacity: 0, x: -200 }} // Fade out and translate down when exiting
                      transition={{ duration: 0.5 }} // Transition duration
                      className="mt-[60px] text-[18px]"
                    >
                      We aimed to dive into the client’s project and its
                      environment. A deep understanding of the target audience;
                      its behaviors in the digital space; why and how this
                      product will help is crucial before the launch.
                    </motion.p>
                  )}
                  {currentApproach === "Strategise" && (
                    <motion.p
                      key="strategise"
                      initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and translate down by 20 pixels
                      animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
                      exit={{ opacity: 0, x: -200 }} // Fade out and translate down when exiting
                      transition={{ duration: 0.5 }} // Transition duration
                      className="mt-[60px] text-[18px]"
                    >
                      Facing the issues in understanding the market and audience
                      could be solved within discover stage. But building the
                      right strategy of the digital product it whole knowledge
                      of predicting most scenarios and work on it.
                    </motion.p>
                  )}
                  {currentApproach === "Structure" && (
                    <motion.p
                      key="structure"
                      initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and translate down by 20 pixels
                      animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
                      exit={{ opacity: 0, x: -200 }} // Fade out and translate down when exiting
                      transition={{ duration: 0.5 }} // Transition duration
                      className="mt-[60px] text-[18px]"
                    >
                      Building the user story helps to get the most common user
                      scenarios. Based on it we prepare user flow. So you can
                      feel and test the roadmap before the launch. Right
                      structure forecast right users behaviors in each step.
                    </motion.p>
                  )}
                  {currentApproach === "Create" && (
                    <motion.p
                      key="create"
                      initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and translate down by 20 pixels
                      animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
                      exit={{ opacity: 0, x: -200 }} // Fade out and translate down when exiting
                      transition={{ duration: 0.5 }} // Transition duration
                      className="mt-[60px] text-[18px]"
                    >
                      Now we all set. It’s time to create and deliver the whole
                      digital product. Main key stages passed and now every
                      single step would be confirmed with you. This is your
                      project and we here just to help you with it.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[150px] py-[250px] bg-[#141414]">
        <div className="flex gap-x-20">
          <div className="flex flex-col items-center relative">
            {currentCategory === "All" && (
              <motion.div
                transition={{ duration: 0.25 }} // Transition duration
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, transition: { duration: 0.5 } }}
                className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute top-[-20px]"
              />
            )}
            <a
              onClick={() => setCurrentCategory("All")}
              className={`${
                currentCategory === "All" ? "text-[#FFFFFF]" : "text-[#BABABA]"
              } hover:text-[#FFFFFF] font-medium text-[22px] cursor-pointer`}
            >
              All
            </a>
          </div>
          <div className="flex flex-col items-center relative">
            {currentCategory === "Web design" && (
              <motion.div
                transition={{ duration: 0.25 }} // Transition duration
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, transition: { duration: 0.5 } }}
                className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute top-[-20px]"
              />
            )}
            <a
              onClick={() => setCurrentCategory("Web design")}
              className={`${
                currentCategory === "Web design"
                  ? "text-[#FFFFFF]"
                  : "text-[#BABABA]"
              } hover:text-[#FFFFFF] font-medium text-[22px] cursor-pointer`}
            >
              Web design
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[100px] gap-y-[40px] mt-[100px]">
          <div>
            <img className="cursor-pointer" src="bitb.png" />
            <a className="text-[#FFFFFF] the-second-link inline-block relative cursor-pointer text-[20px] font-bold mt-[50px] mb-[10px]">
              BitBar
            </a>
            <p className="text-[#BABABA]">Web design</p>
          </div>
          <div className="mt-[80px]">
            <img className="cursor-pointer" src="skipso.png" />
            <a className="text-[#FFFFFF] the-second-link inline-block cursor-pointer text-[20px] font-bold mt-[50px] mb-[10px]">
              Skipsolabs
            </a>
            <p className="text-[#BABABA]">Web design</p>
          </div>
          <div>
            <img className="cursor-pointer" src="immplify.png" />
            <a className="text-[#FFFFFF] the-second-link inline-block cursor-pointer text-[20px] font-bold mt-[50px] mb-[10px]">
              Immplify
            </a>
            <p className="text-[#BABABA]">Web design</p>
          </div>
          <div className="mt-[80px]">
            <img className="cursor-pointer" src="metaverse.png" />
            <a className="text-[#FFFFFF] the-second-link inline-block cursor-pointer text-[20px] font-bold mt-[50px] mb-[10px]">
              MetaPastry
            </a>
            <p className="text-[#BABABA]">Web design</p>
          </div>
        </div>
        <div className="relative mt-[150px] flex justify-center items-center">
          <div className="relative">
            <a className="btn-load-more text-[#FFFFFF]">View More</a>
            <div className="moving-dot" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full px-[150px] py-[100px]">
        <Lottie animationData={Work} />
      </div>
    </motion.article>
  );
};
