import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import UserContext from "../../Context/UserContext";
import ProfileIcon from "./../../Dashboard/Users/Components/ProfileIcon";
import { FaQuoteLeft } from "react-icons/fa6";

export default function Swipper() {
  const { users } = useContext(UserContext);
  const userReviews = users?.filter(
    (user) =>
      user?.profile.reviews?.length !== 0 && user?.profile.reviews !== null
  );

  return (
    <>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl sm:text-4xl">
          If They Made It Happen, So Can You!
        </h2>
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
            <div className="flex flex-col items-center justify-center max-w-5xl p-10 rounded-lg shadow-md bg-slate-50">
              <div className="flex flex-col items-center">
                <div className="size-36">
                  <ProfileIcon data={user} />
                </div>
                <div className="text-center ">
                  <FaQuoteLeft className="mb-4 text-3xl text-green-500" />
                  <p className="max-w-5xl text-lg italic">
                    {user.profile.reviews}
                  </p>
                  <p className="mt-4 font-semibold">- {user.username}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
