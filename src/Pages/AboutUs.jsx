// import React, { useContext } from "react";
// import HomePageContext from "../Context/HomePageContext";
// import { Link } from "react-router-dom";
// import { Dots } from "react-activity";
// import { motion } from "framer-motion";

// function AboutUs() {
//   const { AboutUSSect } = useContext(HomePageContext);
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div className="relative mt-16">
//       {AboutUSSect?.length === 0 ? (
//         <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center ">
//           <Dots color="#b67a3d" size={40} speed={0.7} animating={true} />
//         </div>
//       ) : (
//         <div className="container flex flex-col mx-auto">
//           <div className="flex flex-col gap-y-5">
//             <h1 className="xl:text-5xl md:text-4xl text-3xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
//               {AboutUSSect[0]?.title}
//             </h1>
//             <p className="tracking-tighter text-justify text-gray-500 md:text-base xl:text-lg line-clamp-6 xl:line-clamp-none">
//               {AboutUSSect[0]?.description}
//             </p>
//           </div>
//           <div className="flex flex-col justify-between mt-10">
//             <div className="w-full ">
//               <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
//                 {AboutUSSect[1]?.title}
//               </h1>
//             </div>
//             <div className="flex flex-col justify-between mt-5 md:flex-row gap-x-10">
//               <div>
//                 <p className="tracking-tighter text-justify text-gray-500 xl:text-xl md:text-xl max-w-7xl line-clamp-6 xl:line-clamp-none">
//                   {AboutUSSect[1]?.description}
//                 </p>
//               </div>
//               <div className="w-full overflow-hidden aspect-h-1 aspect-w-1 rounded-3xl ">
//                 <img
//                   src={`http://127.0.0.1:8000/${AboutUSSect[1]?.image}`}
//                   alt={AboutUSSect[1]?.title}
//                   className="h-[300px] w-full rounded-3xl object-cover object-center"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col justify-between mt-10">
//             <div className="w-full ">
//               <h1 className="md:text-5xl text-[#b67a3d] tracking-tighter font-extrabold max-w-2xl">
//                 {AboutUSSect[2]?.title}
//               </h1>
//             </div>
//             <div className="flex flex-col justify-between mt-5 md:flex-row gap-x-10">
//               <div className="w-full overflow-hidden aspect-h-1 aspect-w-1 rounded-3xl ">
//                 <img
//                   src={`http://127.0.0.1:8000/${AboutUSSect[2]?.image}`}
//                   alt={AboutUSSect[1]?.title}
//                   className="h-[300px] w-full rounded-3xl object-cover object-center"
//                 />
//               </div>
//               <div>
//                 <p className="tracking-tighter text-justify text-gray-500 xl:text-xl md:text-xl max-w-7xl line-clamp-6 xl:line-clamp-none">
//                   {AboutUSSect[2]?.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.8 }}
//               transition={{ type: "spring", ease: "easeOut" }}
//               className="flex flex-row items-end justify-end w-full mt-10"
//             >
//               <Link
//                 onClick={scrollToTop}
//                 to={"AboutUs/"}
//                 className="px-5 py-2 hover:ring-2 hover:ring-black hover:text-black hover:bg-white rounded-3xl  mt-2  font-semibold bg-[#b67a3d] text-white"
//               >
//                 ReadMore
//               </Link>
//             </motion.div>
//           </>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AboutUs;
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function AboutUs() {
  return (
    <motion.div
      className="container px-6 py-16 mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="mb-8 text-4xl font-bold text-center"
        variants={itemVariants}
      >
        About Us
      </motion.h1>
      <motion.p
        className="mb-6 text-lg leading-relaxed text-justify text-gray-700"
        variants={itemVariants}
      >
        The Historical Association of Tanzania (HAT) is dedicated to promoting
        the understanding and appreciation of the rich history and cultural
        heritage of Tanzania. Founded with the mission to preserve and
        disseminate historical knowledge, HAT engages in various educational and
        research activities to foster a deeper connection to the past among
        Tanzanians and the global community.
      </motion.p>
      <motion.p
        className="mb-6 text-lg leading-relaxed text-justify text-gray-700"
        variants={itemVariants}
      >
        Our association organizes events, lectures, and exhibitions that
        highlight significant historical events and figures in Tanzania's
        history. We also collaborate with academic institutions, museums, and
        other cultural organizations to support research and scholarship in the
        field of history.
      </motion.p>
      <motion.p
        className="mb-6 text-lg leading-relaxed text-justify text-gray-700"
        variants={itemVariants}
      >
        At HAT, we believe that understanding history is crucial for building a
        better future. By exploring our past, we can gain valuable insights into
        the present and make informed decisions for the future. Join us in our
        journey to uncover and celebrate the history of Tanzania.
      </motion.p>
      <motion.div className="flex justify-center mt-10" variants={itemVariants}>
        <img
          src="https://via.placeholder.com/600x400" // replace with the actual image URL
          alt="Historical Association of Tanzania"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}

export default AboutUs;
