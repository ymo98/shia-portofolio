import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import Lottie from "lottie-react";
import { useState, useRef } from "react";
import { Modal, Carousel } from "antd";
import data from "../data.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Props {
  onClick: any;
  show: boolean;
}

const CustomPrevArrow = ({ onClick, show }: Props) => {
  if (!show) return null;
  return (
    <div
      onClick={onClick}
      className="absolute the-arrow z-500 left-4 top-0 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg cursor-pointer"
    >
      <LeftOutlined style={{ fontSize: "24px" }} />
    </div>
  );
};

const CustomNextArrow = ({ onClick, show }: Props) => {
  if (!show) return null;
  return (
    <div
      onClick={onClick}
      className="absolute the-arrow z-500 right-4 top-0 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg cursor-pointer"
    >
      <RightOutlined style={{ fontSize: "24px" }} />
    </div>
  );
};

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentApproach, setCurrentApproach] = useState<any>(
    data?.approachSection?.approachData?.[0]?.title
  );
  const [currentLottie, setCurrentLottie] = useState<any>(
    data?.approachSection?.approachData?.[0]?.lottie
  );
  const [currentCategory, setCurrentCategory] = useState<
    "All" | "Web design" | "Mobile app" | "Branding"
  >("All");
  const variants = {
    hidden: { scale: 0, opacity: 0 }, // Hidden state
    visible: { scale: 1, opacity: 1 }, // Visible state
    exit: { scale: 0, opacity: 0 }, // Exit state
  };

  const [currentProject, setCurrentProject] = useState<any>();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [current, setCurrent] = useState(0);
  const totalSlides = data?.approachSection?.approachData?.length;

  const handleBeforeChange = (currentSlide: any, nextSlide: any) => {
    setCurrent(nextSlide);
    setCurrentApproach(data?.approachSection?.approachData?.[nextSlide]?.title);
    setCurrentLottie(data?.approachSection?.approachData?.[nextSlide]?.lottie);
  };
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      <Navbar />
      <div className="flex flex-col px-[20px] md:px-[15%] md:py-[5%] justify-center items-center h-full w-full header-container">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 3 },
            },
          }}
          className="rounded-full mb-3 md:mt-0 mt-5"
          width={"250"}
          height="250"
          src={data?.heroSection?.imgUrl}
        />
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, staggerChildren: 3 },
            },
          }}
          className="header-title md:mt-0 mt-5 text-[20px] md:text-[40px]"
        >
          {data?.heroSection?.description1}{" "}
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
            {data?.heroSection?.skill1}
          </motion.div>
          {data?.heroSection?.description2}{" "}
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
            {data?.heroSection?.skill2}
          </motion.span>
          {data?.heroSection?.description3}{" "}
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
            {data?.heroSection?.skill3}
          </motion.span>{" "}
          {data?.heroSection?.description4}
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
          <source src={data?.heroSection?.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div className="my-[5rem] px-[10px] lg:px-[118px]">
        <div>
          <p className="font-bold  text-[28px] lg:text-left text-center lg:text-[56px] mb-[10px] lg:mb-[50px]">
            {data?.approachSection?.title}
          </p>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                className="block md:hidden"
                key={currentApproach}
                variants={variants} // Use variants for inner div
                initial="hidden" // Initial state
                animate="visible" // Animate to visible state
                exit="exit" // Exit state
                transition={{ duration: 0.2 }} // Transition duration
              >
                <Lottie animationData={require(`../lottie/${currentLottie}`)} />
              </motion.div>
            </AnimatePresence>
            <Carousel
              beforeChange={handleBeforeChange}
              rootClassName="lg:hidden block"
              dots={false}
              arrows
              infinite={false}
              prevArrow={<CustomPrevArrow onClick show={current > 0} />}
              nextArrow={
                <CustomNextArrow onClick show={current < totalSlides - 1} />
              }
            >
              {data?.approachSection?.approachData?.map((approach) => (
                <div
                  key={currentApproach}
                  className="flex justify-center items-center"
                >
                  <p
                    className={`text-black my-5 text-center the-current-approach text-[26px] font-semibold`}
                  >
                    {approach?.title}
                  </p>
                  <p className="text-center">{approach?.description}</p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-1 items-center lg:flex hidden">
            <div className="w-[500px] h-[400px] lg:mr-[75px] flex justify-center items-center">
              <AnimatePresence mode="wait">
                {data?.approachSection?.approachData?.map(
                  (approach) =>
                    approach?.title === currentApproach && (
                      <motion.div
                        key={currentApproach}
                        variants={variants} // Use variants for inner div
                        initial="hidden" // Initial state
                        animate="visible" // Animate to visible state
                        exit="exit" // Exit state
                        transition={{ duration: 0.5 }} // Transition duration
                      >
                        {
                          <Lottie
                            animationData={require(`../lottie/${approach?.lottie}`)}
                          />
                        }
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
            <div className="flex-1 h-[50vh] flex flex-col md:block hidden">
              <div className="flex gap-x-[4rem] w-full mt-[100px]">
                {data?.approachSection?.approachData?.map((approach) => (
                  <div className="flex flex-col items-center relative">
                    <a
                      className={`text-[#b6b6b6] ${
                        currentApproach === approach?.title
                          ? "the-current-approach"
                          : "the-approach-link"
                      }  text-[26px] font-semibold cursor-pointer`}
                      onClick={() => setCurrentApproach(approach?.title)}
                    >
                      {approach?.title}
                    </a>
                    {currentApproach === approach?.title && (
                      <motion.div
                        key={approach?.title}
                        transition={{ duration: 0.25 }} // Transition duration
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, transition: { duration: 0.5 } }}
                        className="bg-[#5d43bb] w-[15px] h-[15px] rounded-full absolute bottom-[-20px]"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentApproach}
                    initial={{ opacity: 0, x: 50 }} // Start with opacity 0 and translate down by 20 pixels
                    animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
                    exit={{ opacity: 0, x: -200 }} // Fade out and translate down when exiting
                    transition={{ duration: 0.5 }} // Transition duration
                    className="mt-[60px] text-[18px]"
                  >
                    {
                      data?.approachSection?.approachData?.find(
                        (approach) => approach?.title === currentApproach
                      )?.description
                    }
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[20px] md:px-[150px] py-[250px] bg-[#141414]">
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
        </div>
        <div className="grid md:grid-cols-2 gap-x-[100px] gap-y-[40px] mt-[100px]">
          {data?.projectSection?.map((project, idx) => (
            <div className={`${idx % 2 !== 0 && "md:mt-[80px]"}`}>
              <div className="card-image">
                <img
                  onClick={() => {
                    showModal();
                    setCurrentProject(project);
                  }}
                  className="cursor-pointer"
                  src={project?.imgUrl}
                />
              </div>
              <a
                onClick={() => {
                  showModal();
                  setCurrentProject(project);
                }}
                className="text-[#FFFFFF] the-second-link inline-block relative cursor-pointer text-[20px] font-bold mt-[50px] mb-[10px]"
              >
                {project?.title}
              </a>
              <p className="text-[#BABABA]">{project?.type}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-[150px] flex justify-center items-center">
          <div className="relative">
            <a className="btn-load-more text-[#FFFFFF]">View More</a>
            <div className="moving-dot" />
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] w-full px-[30px] lg:px-[150px] py-[50px] lg:py-[100px]">
        <Lottie
          animationData={require(`../lottie/${data?.passionateSection?.lottie}`)}
        />
      </div>
      <div className="bg-[#FFFFFF] grid lg:grid-cols-2 px-[15px] lg:px-[150px] pb-[200px] gap-x-[60px]">
        <div>
          <p className="text-[#000000] font-bold text-[30px] lg:text-[56px] text-center">
            {data?.passionateSection?.title}
          </p>
        </div>
        <div className="mt-[20px] flex flex-col gap-y-[20px] lg:text-left text-center">
          <p className="text-[#000000] text-[16px] lg:text-[20px] leading-9">
            {data?.passionateSection?.description1}
          </p>
          <p className="text-[#000000] text-[16px] lg:text-[20px] leading-9">
            {data?.passionateSection?.description2}
          </p>
          <p className="text-[#000000] text-[16px] lg:text-[20px] leading-9">
            {data?.passionateSection?.description3}
          </p>
        </div>
      </div>
      <Modal
        title={
          <span style={{ fontSize: "48px", fontWeight: "bold" }}>
            {currentProject?.title}
          </span>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <p>{currentProject?.description}</p>
        <div className="flex gap-x-2 mt-4 justify-center items-center">
          <a
            target="_blank"
            href={currentProject?.projectUrl}
            className="the-q-button font-medium cursor-pointer"
          >
            Project URL
          </a>
          <a
            target="_blank"
            href={currentProject?.projectGitHubUrl}
            className="the-q2-button font-medium cursor-pointer"
          >
            GitHub URL
          </a>
        </div>
      </Modal>
    </motion.article>
  );
};
