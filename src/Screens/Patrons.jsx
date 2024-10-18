import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// icons impoers
import { SlCalender } from "react-icons/sl";
import { LuUser } from "react-icons/lu";
// immages importd
import nyerere1 from "../Assets/Images/nyerere1.jpg";
import nyerere2 from "../Assets/Images/nyerere2.jpg";

// Second Component
const leadershipData = [
  { year: 1966, event: "HAT Establishment" },
  {
    name: "Prof. Isaria Kimambo",
    role: "President",
    description:
      "Prof. Kimambo was a pioneering figure in Tanzanian historiography. He played a crucial role in shaping the early direction of HAT, emphasizing the importance of oral traditions in historical research.",
  },
  {
    name: "Mr. Laurent Sago",
    role: "General Secretary",
    description:
      "Mr. Sago was instrumental in establishing HAT's administrative framework. His organizational skills helped solidify HAT's position as a respected academic association.",
  },
  {
    name: "Prof. Kapepwa Tambila",
    role: "General Secretary",
    description:
      "Prof. Tambila brought a focus on economic history to HAT. He was known for his meticulous approach to archival research and his efforts to digitize historical records.",
  },
  {
    name: "Dr Oswald Masebo",
    role: "President",
    period: "2018-2023",
    description:
      "Dr Masebo led HAT during a period of significant growth. He initiated several international collaborations and oversaw the organization of major conferences on African history.",
  },
  {
    name: "Dr Ashura Jackson",
    role: "Vice President",
    period: "2018-2023",
    description:
      "Dr Jackson was passionate about promoting women's history in Tanzania. She established a mentorship program for young female historians and advocated for greater gender balance in historical narratives.",
  },
  {
    name: "Dr Xavery Komba",
    role: "General Secretary",
    period: "2018-2023",
    description:
      "Dr Komba modernized HAT's communication strategies. He launched the association's first comprehensive website and established an online journal for Tanzanian historical studies.",
  },
];

const HATLeadershipTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="container flex flex-col mx-auto md:flex-row">
      <div>
        <h1 className="mb-4 text-3xl font-bold font-roboto ">
          Know Our Past Leadership
        </h1>
        <p className="max-w-xl mb-6">
          Since its establishment in 1966, HAT has had different leaders serving
          in different capacities. Click on a name to learn more about each
          leader.
        </p>
      </div>
      <div className="relative flex-grow space-y-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

        {leadershipData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
              }`}
            >
              {item.event ? (
                <div className="flex items-center justify-end space-x-2">
                  <h2 className="text-xl font-semibold text-blue-600 md:text-2xl">
                    {item.event} ({item.year})
                  </h2>
                  <SlCalender className="w-6 h-6 text-blue-600" />
                </div>
              ) : (
                <>
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    } space-x-2`}
                  >
                    {index % 2 !== 0 && (
                      <LuUser className="text-5xl text-gray-500 " />
                    )}
                    <div>
                      <h2
                        className="text-xl font-semibold transition-colors cursor-pointer md:text-2xl hover:text-blue-600"
                        onClick={() => toggleExpand(index)}
                      >
                        {item.name}
                      </h2>
                      <p className="text-gray-600">{item.role}</p>
                      {item.period && (
                        <p className="text-sm text-gray-500">{item.period}</p>
                      )}
                    </div>
                    {index % 2 === 0 && (
                      <LuUser className="text-5xl text-gray-500 " />
                    )}
                  </div>
                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-700"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
            <div className="relative">
              <div className="absolute z-10 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 left-1/2"></div>
              <div className="w-8 h-0.5 bg-gray-200 absolute top-1/2 left-1/2 transform -translate-y-1/2"></div>
            </div>
            <div className="w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// First component

const PatronDisplay = () => {
  return (
    <div className=" bg-gradient-to-t from-gray-100 to-transparent">
      <div className="container flex flex-col py-6 mx-auto">
        <h2 className="mb-5 text-3xl font-bold md:mb-20 md:text-4xl">
          Our Patrons
        </h2>
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6 md:flex-row"
          >
            {/* Image slides from bottom to top */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative overflow-hidden group"
            >
              <img
                src={nyerere1}
                alt="HAT first patron"
                className="object-cover cursor-pointer group-hover:grayscale md:rounded-t-full w-screen md:w-full h-[500px] md:h-[600px]"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 hidden bg-black group-hover:flex md:rounded-t-full">
                <motion.img
                  src={nyerere2}
                  alt="First Patron Mwalimu julius Kambarage Nyerere"
                  className="object-cover md:rounded-t-full w-screen md:w-full h-[500px] md:h-[600px]"
                />
              </div>
            </motion.div>

            <div className="w-full md:w-1/2">
              {/* Text slides from top to bottom and shows in sequence */}
              <motion.blockquote
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-4 text-lg md:text-xl"
              >
                "President Julius Nyerere was the first HAT patron who served
                from 1966-1999. He was very instrumental in pushing the study of
                history through the department of history at the University of
                Dar es Salaam."
              </motion.blockquote>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl font-semibold"
              >
                Julius Nyerere
              </motion.p>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-gray-600"
              >
                First HAT patron, 1966-1999
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main Component
function Patrons() {
  return (
    <div className="flex flex-col min-h-screen mt-24 ">
      {/* Myerere section */}
      <div className="mb-20 mb:mt-10">
        <PatronDisplay />
      </div>
      {/* Patrons Section */}
      <div className="mb-20">
        <HATLeadershipTimeline />
      </div>
    </div>
  );
}

export default Patrons;
