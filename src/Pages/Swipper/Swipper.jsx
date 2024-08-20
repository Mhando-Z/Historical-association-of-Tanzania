import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import UserContext from "../../Context/UserContext";
import ProfileIcon from "./../../Dashboard/Users/Components/ProfileIcon";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Swipper() {
  const { users } = useContext(UserContext);
  const userReviews = users?.filter(
    (user) =>
      user?.profile.reviews?.length !== 0 && user?.profile.reviews !== null
  );

  return (
    <>
      {userReviews?.length !== 0 ? (
        <>
          <div className="mb-10 text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              If They Made It Happen, So Can You!
            </motion.h2>
          </div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {userReviews?.map((user, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex flex-col items-center justify-center max-w-5xl p-10 rounded-lg shadow-md bg-slate-50"
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="transition-all duration-[10000ms] ease-out size-36 animate-bounce"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ProfileIcon data={user} />
                    </motion.div>
                    <div className="text-center ">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      >
                        <FaQuoteLeft className="mb-4 text-3xl text-green-500" />
                      </motion.div>
                      <motion.p
                        className="max-w-4xl text-lg italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                      >
                        {user.profile.reviews}
                      </motion.p>
                      <motion.p
                        className="mt-4 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                      >
                        - {user.username}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        ""
      )}
    </>
  );
}
