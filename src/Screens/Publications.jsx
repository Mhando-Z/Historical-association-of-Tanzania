import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { Link } from "react-router-dom";
import moment from "moment";

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

  return (
    <motion.div
      className="container flex flex-col mx-auto mt-16 mb-48 gap-y-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col w-full ">
        {/* Image Section */}
        <motion.div
          className="relative flex flex-col w-full"
          variants={imageVariants}
        >
          <img
            src={`http://127.0.0.1:8000/${publication.image}`}
            alt={publication.title}
            loading="lazy"
            className="min-h-screen bg-cover xl:h-full max-w-screen aspect-video"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"></div>
          <div className="absolute  h-[45rem] flex flex-col overflow-x-hidden overflow-y-auto top-20 left-5">
            <div className="flex flex-col">
              <motion.h1
                className="text-xl font-semibold text-white lg:text-3xl"
                variants={textVariants}
              >
                {publication.title}
              </motion.h1>
              <motion.h2
                className="max-w-xl text-base text-white lg:text-xl"
                variants={textVariants}
              >
                {publication.subtitle}
              </motion.h2>
            </div>
            {/* descriptions */}
            <motion.div
              className="flex flex-col mt-5"
              variants={containerVariants}
            >
              <motion.h1
                className="text-xl font-bold text-gray-200 lg:text-2xl"
                variants={textVariants}
              >
                Discussion
              </motion.h1>
              <motion.div
                className="flex flex-col text-gray-300 gap-y-4"
                variants={containerVariants}
              >
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication.description}
                </motion.p>
                <div className="grid grid-cols-1 gap-2 mr-2 md:grid-cols-2">
                  <div className="w-full">
                    <motion.img
                      src={`http://127.0.0.1:8000/${publication.image2}`}
                      alt={publication.title}
                      loading="lazy"
                      className="w-full bg-cover aspect-video "
                      variants={imageVariants}
                    />
                  </div>
                  <motion.div
                    className={`${publication.video_url.length === 0 ? "hidden" : ""}`}
                    variants={iframeVariants}
                  >
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
                </div>
                <motion.p
                  className="text-xl font-bold tracking-tighter lg:text-2xl"
                  variants={textVariants}
                >
                  References
                </motion.p>
                <motion.p className="tracking-tighter" variants={textVariants}>
                  {publication.references}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Other publications and repports */}
      <div className="mt-5">
        <div className="flex flex-col justify-center py-3 mb-10 shadow">
          <h1 className="px-2 text-xl font-bold border-l-4 border-l-black md:text-2xl">
            Other Publications
          </h1>
        </div>
        <div className="border-t border-gray-200 gap-y-16">
          {other?.slice(0, count).map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col items-start justify-between mt-5 gap-x-10 md:flex-row"
              variants={itemVariants}
            >
              <motion.img
                onClick={() => handleSelection(post.id)}
                src={`http://127.0.0.1:8000/${post.image}`}
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
          <div className="flex justify-end w-full mt-10">
            <motion.button
              onClick={() => setCount(count + 5)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", ease: "easeOut" }}
              className="px-5 py-2 text-white bg-[#b67a3d] "
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
