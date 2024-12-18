import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { Link, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

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
  const locations = useLocation();
  const navigate = useNavigate();

  const data = AnnounceSect?.filter((dt) => dt?.id === AnnounceID);
  const Announcement = data ? data[0] : null;

  const other = AnnounceSect?.filter((dt) => dt?.id !== Announcement?.id);

  if (!Announcement) {
    navigate("/Announcements/");
  }

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

  // image Url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <motion.div
      className="container flex flex-col mx-auto mt-24 mb-24 gap-y-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Back Logic */}
      {locations?.pathname === "/Dashboard/Announce/" ? (
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
            // src={`${IMAGE_BASE_URL}${Announcement?.image}`}
            src={`${Announcement?.image_url1}`}
            alt={Announcement?.title}
            loading="lazy"
            className="object-cover h-[300px] md:h-[400px] rounded-xl max-w-screen aspect-video"
          />

          <div className="flex flex-col overflow-x-hidden overflow-y-auto ">
            <div className="flex flex-col">
              <motion.h1
                className="text-xl font-semibold text-gray-900 lg:text-3xl"
                variants={textVariants}
              >
                {Announcement?.title}
              </motion.h1>
              <motion.h2
                className="max-w-xl text-base font-medium text-gray-900 lg:text-xl"
                variants={textVariants}
              >
                {Announcement?.subtitle}
              </motion.h2>
              <div className="flex flex-col items-end justify-end">
                {Announcement?.document ? (
                  <a
                    href={`${IMAGE_BASE_URL}${Announcement?.document}`}
                    download
                    className="px-4 flex flex-row hover:bg-blue-700 items-center gap-x-2 py-1.5 md:py-2  bg-blue-600 text-white rounded-3xl"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineFileDownload className="text-xl" />
                    Download PDF
                  </a>
                ) : (
                  ""
                )}
              </div>
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
                  {Announcement?.description}
                </motion.p>
                <div className="grid grid-cols-1 gap-2 mr-2 md:grid-cols-2">
                  <div className="w-full">
                    <motion.img
                      // src={`${IMAGE_BASE_URL}${Announcement?.image2}`}
                      src={`${Announcement?.image_url2}`}
                      alt={Announcement?.title}
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
        <div className="flex flex-col justify-center py-3 mb-10 ">
          <h1 className="text-xl font-bold md:text-2xl">Other Announcements</h1>
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
                // src={`${IMAGE_BASE_URL}${post.image}`}
                src={`${post.image_url1}`}
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

export default Announce;
