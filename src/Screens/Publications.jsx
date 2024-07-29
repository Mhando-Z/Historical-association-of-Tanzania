import React, { useContext } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";

// Utility function to check if the URL is a YouTube URL
const isYouTubeUrl = (url) => {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
  return youtubeRegex.test(url);
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.8 },
  },
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
  const { publishId } = useContext(UserContext);
  const { ResourcesSect } = useContext(HomePageContext);

  const data = ResourcesSect?.filter((dt) => dt.id === publishId);
  const publication = data ? data[0] : null;

  if (!publication) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
      </div>
    );
  }

  return (
    <motion.div
      className="container flex mx-auto mb-48"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col w-full">
        {/* Image Section */}
        <motion.div
          className="relative flex flex-col w-full"
          variants={imageVariants}
        >
          <img
            src={`http://127.0.0.1:8000/${publication.image}`}
            alt={publication.title}
            loading="lazy"
            className="h-[400px] md:h-full bg-cover max-w-screen aspect-video"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute flex flex-col items-center left-5 bottom-5">
            <motion.h1
              className="flex flex-col w-full max-w-2xl text-xl font-black text-white lg:text-4xl"
              variants={textVariants}
            >
              {publication.title}
              <motion.span
                className="max-w-xl text-base font-medium text-white lg:text-2xl"
                variants={textVariants}
              >
                {publication.subtitle}
              </motion.span>
            </motion.h1>
          </div>
        </motion.div>
        {/* Content Section */}
        <motion.div
          className="flex flex-col mt-12 md:flex-row gap-x-5"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-bold lg:text-3xl"
            variants={textVariants}
          >
            Discussion
          </motion.h1>
          <motion.div
            className="flex flex-col gap-y-4"
            variants={containerVariants}
          >
            <motion.p
              className="tracking-tighter text-justify"
              variants={textVariants}
            >
              {publication.description}
            </motion.p>
            <motion.img
              src={`http://127.0.0.1:8000/${publication.image2}`}
              alt={publication.title}
              loading="lazy"
              className="xl:h-[600px] lg:h-[450px] h-[400px] bg-cover w-full aspect-video"
              variants={imageVariants}
            />
            <motion.div variants={iframeVariants}>
              {isYouTubeUrl(publication.video_url) ? (
                <iframe
                  title={publication.title}
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${new URL(publication.video_url).searchParams.get("v")}`}
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
            <motion.p
              className="text-3xl font-bold tracking-tighter"
              variants={textVariants}
            >
              References
            </motion.p>
            <motion.p
              className="tracking-tighter text-justify"
              variants={textVariants}
            >
              {publication.references}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Publications;
