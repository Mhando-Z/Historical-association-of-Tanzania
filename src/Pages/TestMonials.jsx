// export default TestMonials;
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../Context/UserContext";
// icons imports
import stdprofile from "../Assets/profiles/man.png";
import stdprofile2 from "../Assets/profiles/woman2.png";
import manprofile from "../Assets/profiles/man1.png";
import womanProfile from "../Assets/profiles/woman.png";
import { FaRegCircleUser } from "react-icons/fa6";

const TestMonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { users } = useContext(UserContext);
  const userReviews = users?.filter(
    (user) =>
      user?.profile?.reviews?.length !== 0 && user?.profile?.reviews !== null
  );

  // Sliding Logic
  useEffect(() => {
    if (userReviews?.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === userReviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000); // Slides every 10 seconds
      return () => clearInterval(interval);
    }
  }, [userReviews]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? userReviews?.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === userReviews?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderProfileImage = (profile) => {
    if (!profile) return <FaRegCircleUser className="size-20" />; // Fallback for missing profile

    if (profile?.profile_picture) {
      return (
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          src={`http://127.0.0.1:8000/${profile?.profile_picture}`}
          alt="Profile"
          className="object-cover object-top size-28 shadow-lg ring-1 ring-[#b67a3d] rounded-full max-w-screen"
        />
      );
    }
    if (profile?.is_student) {
      return profile.gender === "male" ? (
        <img
          src={stdprofile}
          alt="profile"
          className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
        />
      ) : (
        <img
          src={stdprofile2}
          alt="profile"
          className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
        />
      );
    }
    return profile.gender === "male" ? (
      <img
        src={manprofile}
        alt="profile"
        className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
      />
    ) : profile.gender === "female" ? (
      <img
        src={womanProfile}
        alt="profile"
        className="h-20 ring-4 rounded-full shadow-xl ring-[#b67a3d]"
      />
    ) : (
      <FaRegCircleUser className="size-10" />
    );
  };

  // Fallback UI when there are no reviews
  if (!userReviews || userReviews.length === 0) {
    return (
      <div className="bg-white">
        {/* <h2 className="text-3xl font-bold text-orange-500">TESTIMONIALS</h2>
        <p className="text-gray-600">No reviews available at the moment.</p> */}
      </div>
    );
  }

  return (
    <div className="py-10 bg-white">
      <h2 className="mb-4 text-3xl font-bold text-center text-[#b67a3d]">
        TESTIMONIALS
      </h2>
      <p className="mb-8 text-center text-gray-600">
        If They Made It Happen, So Can You!
      </p>

      <div className="relative flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-0">
          &#9664;
        </button>

        <motion.div
          className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-x-10 md:flex-row">
            <div className="flex items-center justify-center w-[400px] h-full rounded-xl">
              {/* profile images */}
              {renderProfileImage(userReviews[currentIndex]?.profile)}
            </div>

            {userReviews && userReviews[currentIndex] && (
              <div className="flex-grow mt-4 text-center md:mt-0 md:text-left">
                <p className="text-lg text-gray-700">
                  {userReviews[currentIndex]?.profile?.reviews}
                </p>
                <h4 className="mt-2 font-bold text-orange-500">
                  {userReviews[currentIndex]?.username}
                </h4>
                <p className="text-sm text-gray-500">
                  {userReviews[currentIndex]?.profile?.title}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <button onClick={handleNext} className="absolute right-0">
          &#9654;
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {userReviews?.map((dt, index) => (
          <div
            key={index + dt.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestMonials;
