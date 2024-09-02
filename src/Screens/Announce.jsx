import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { Link } from "react-router-dom";
import moment from "moment";

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

function Announce() {
  const { AnnounceID, setAnnounceId } = useContext(UserContext);
  const { AnnounceSect } = useContext(HomePageContext);
  const [count, setCount] = useState(5);

  const data = AnnounceSect?.filter((dt) => dt?.id === AnnounceID);
  const Announcement = data ? data[0] : null;

  const other = AnnounceSect?.filter((dt) => dt?.id !== Announcement?.id);

  if (!Announcement) {
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
    setAnnounceId(id);
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
            src={`http://127.0.0.1:8000/${Announcement.image}`}
            alt={Announcement.title}
            loading="lazy"
            className="object-cover min-h-screen rounded-2xl xl:h-full max-w-screen aspect-video"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 rounded-2xl bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black rounded-2xl bg-opacity-40"></div>
          <div className="absolute  h-[45rem] flex flex-col overflow-x-hidden overflow-y-auto top-20 left-5">
            <div className="flex flex-col">
              <motion.h1
                className="text-xl font-semibold text-white lg:text-3xl"
                variants={textVariants}
              >
                {Announcement.title}
              </motion.h1>
              <motion.h2
                className="max-w-xl text-base text-white lg:text-xl"
                variants={textVariants}
              >
                {Announcement?.subtitle}
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
                  {Announcement.description}
                </motion.p>
                <div className="grid grid-cols-1 gap-2 mr-2 md:grid-cols-2">
                  <div className="w-full">
                    <motion.img
                      src={`http://127.0.0.1:8000/${Announcement.image2}`}
                      alt={Announcement.title}
                      loading="lazy"
                      className="object-cover w-full aspect-video "
                      variants={imageVariants}
                    />
                  </div>
                  <div className="w-full">
                    <motion.img
                      src={`http://127.0.0.1:8000/${Announcement.image}`}
                      alt={Announcement.title}
                      loading="lazy"
                      className="object-cover w-full aspect-video "
                      variants={imageVariants}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Other Announcements and repports */}
      <div className="mt-5">
        <div className="flex flex-col justify-center py-3 mb-10 shadow">
          <h1 className="px-2 text-xl font-bold border-l-4 border-l-black md:text-2xl">
            Other Announcements
          </h1>
        </div>
        <div className=" gap-y-16">
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

export default Announce;