import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import moment from "moment";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Announcements() {
  const { AnnounceSect } = useContext(HomePageContext);
  const { setAnnounceId } = useContext(UserContext);
  // functions imports
  const navigate = useNavigate();
  const locations = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelect = (id) => {
    setAnnounceId(id);
    scrollToTop();
    if (locations?.pathname === "/Dashboard/UserHome/") {
      navigate("/Dashboard/Announce/");
    } else {
      navigate("/Announce/");
    }
  };

  // Fallback UI when there are no reviews
  if (!AnnounceSect || AnnounceSect.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white gap-x-2 ">
        <h1>No posted Announcements....</h1>
        <Dots color="#b67a3d" size={20} speed={0.7} animating={true} />
      </div>
    );
  }
  // image link
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <motion.div
      className={`${
        locations?.pathname === "/Dashboard/UserHome/"
          ? "mb-28"
          : "mb-20 mt-28 "
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container relative flex flex-col mx-auto">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl sm:text-4xl"
            variants={itemVariants}
          >
            Announcements
          </motion.h2>
          <motion.p
            className="mt-2 text-lg leading-8 text-gray-600"
            variants={itemVariants}
          >
            Learn how to grow your business with our expert advice.
          </motion.p>
        </div>

        <div className="mt-10 border-t border-gray-200 gap-y-16">
          {AnnounceSect?.map((post) => (
            <motion.article
              key={post.id}
              onClick={() => handleSelect(post.id)}
              className="flex flex-col items-start justify-between mt-5 gap-x-10 md:flex-row"
              variants={itemVariants}
            >
              <motion.img
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
                  <Link
                    to={""}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Announcement
                  </Link>
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 xl:text-xl group-hover:text-blue-700">
                    <Link to={""}>
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
        </div>
      </div>
    </motion.div>
  );
}
