import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import { IoArrowBack } from "react-icons/io5";

// Utility function to check if the URL is a YouTube URL
const isYouTubeUrl = (url) => {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return youtubeRegex.test(url);
};

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } },
};

const iframeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.8 } },
};

function Publications() {
  const { publishId, setUpPId } = useContext(UserContext);
  const { ResourcesSect } = useContext(HomePageContext);
  const [count, setCount] = useState(5);
  const locations = useLocation();

  const data = ResourcesSect?.filter((dt) => dt?.id === publishId);
  const publication = data ? data[0] : null;

  const other = ResourcesSect?.filter((dt) => dt?.id !== publication?.id);

  if (!publication) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSelection = (id) => {
    setUpPId(id);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <motion.div
      className="container flex flex-col mx-auto mt-24 mb-48 gap-y-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back Logic */}
      {locations?.pathname === "/Dashboard/Publications/" ? (
        <>
          <Link
            to={"/Dashboard/UserHome/"}
            className="mb-5 cursor-pointer flex flex-row items-center gap-x-3  w-[100px] py-1"
          >
            <IoArrowBack className="text-2xl" />
            <h1 className="text-xs md:text-sm">Back</h1>
          </Link>
        </>
      ) : (
        ""
      )}
      <div className="flex flex-col w-full ">
        {/* Image Section */}
        <motion.div
          className="flex flex-col w-full gap-y-5"
          variants={imageVariants}
        >
          <img
            src={`${IMAGE_BASE_URL}${publication.image}`}
            alt={publication.title}
            loading="lazy"
            className="object-cover h-[300px] md:h-[400px] rounded-xl max-w-screen aspect-video"
          />

          <div className="flex flex-col overflow-x-hidden overflow-y-auto ">
            <div className="flex flex-col">
              <motion.h1
                className="text-xl font-semibold text-gray-900 lg:text-3xl"
                variants={textVariants}
              >
                {publication.title}
              </motion.h1>
              <motion.h2
                className="max-w-xl text-base font-medium text-gray-900 lg:text-xl"
                variants={textVariants}
              >
                {publication.subtitle}
              </motion.h2>
              <motion.h2
                className="max-w-xl text-base text-gray-900 lg:text-lg"
                variants={textVariants}
              >
                Author-{publication.author}
              </motion.h2>
            </div>
            {/* descriptions */}
            <motion.div
              className="flex flex-col mt-5"
              variants={containerVariants}
            >
              <motion.h1
                className="text-xl font-bold text-gray-800 lg:text-2xl"
                variants={textVariants}
              >
                Discussion
              </motion.h1>
              <motion.div
                className="flex flex-col text-gray-800 gap-y-4"
                variants={containerVariants}
              >
                <motion.p
                  className="text-sm tracking-tighter text-justify text-gray-700 md:text-base"
                  variants={textVariants}
                >
                  {publication.description}
                </motion.p>
                <div className="grid grid-cols-1 gap-2 mr-2 md:grid-cols-2">
                  <div className="w-full">
                    <motion.img
                      src={`${IMAGE_BASE_URL}${publication.image2}`}
                      alt={publication.title}
                      loading="lazy"
                      className="object-cover w-full aspect-video "
                      variants={imageVariants}
                    />
                  </div>
                  <motion.div
                    className={`${
                      publication.video_url.length === 0 ? "hidden" : ""
                    }`}
                    variants={iframeVariants}
                  >
                    {isYouTubeUrl(publication.video_url) ? (
                      <iframe
                        title={publication.title}
                        className="w-full aspect-video"
                        src={`${IMAGE_BASE_URL}${new URL(
                          publication.video_url
                        ).searchParams.get("v")}`}
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <iframe
                        title={publication.title}
                        className="w-full aspect-video"
                        src={publication.video_url}
                        allowFullScreen
                      ></iframe>
                    )}
                  </motion.div>
                </div>
                <motion.p
                  className="text-xl font-bold tracking-tighter lg:text-2xl"
                  variants={textVariants}
                >
                  References
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication?.ref1}
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication?.ref2}
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication?.ref3}
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication?.ref4}
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication?.ref5}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Other publications and repports */}
      <div className="mt-5">
        <div className="flex flex-col justify-center py-3 mb-10 ">
          <h1 className="px-2 text-xl font-bold border-l-2 border-l-black md:text-2xl">
            Other Publications
          </h1>
        </div>
        <div className="gap-y-16">
          {other?.slice(0, count).map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col items-start justify-between mt-5 gap-x-10 md:flex-row"
              variants={itemVariants}
            >
              <motion.img
                onClick={() => handleSelection(post.id)}
                src={`${IMAGE_BASE_URL}${post.image}`}
                alt={post.title}
                loading="lazy"
                className="h-[200px] w-full aspect-video rounded-xl hover:grayscale transition-all duration-500 ease-in object-cover object-center"
                variants={itemVariants}
              />

              <div>
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.dateIssued} className="text-gray-500">
                    {formatDate(post.dateIssued)}
                  </time>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 xl:text-xl group-hover:text-blue-700">
                    <Link onClick={() => handleSelection(post.id)} to={""}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
          <div
            className={`flex ${
              other.length >= 11 ? "flex" : "hidden"
            } justify-end w-full mt-10`}
          >
            <motion.button
              onClick={() => setCount(count + 5)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-4 font-medium rounded-3xl py-2 text-sm text-gray-900 ring-2  ring-[#b67a3d] "
            >
              More
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Publications;
