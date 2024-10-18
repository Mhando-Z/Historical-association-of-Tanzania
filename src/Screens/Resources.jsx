import React, { useContext, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Dots } from "react-activity";
import { AnimatePresence, motion } from "framer-motion";
// icons imports
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Resources() {
  const { Resources } = useContext(HomePageContext);
  const [count, setCount] = useState(20);
  const [show, setShow] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Search logic: filter resources based on the search query
  const filteredResources = Resources?.filter((resource) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.author.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm)
    );
  });

  // Display loader if there are no resources or search results
  if (!Resources || Resources.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen gap-x-2">
        <h1>No post....</h1>
        <Dots color="#b67a3d" size={20} speed={0.7} animating={true} />
      </div>
    );
  }

  // Handle input change for search
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <div className="container flex flex-col min-h-screen mx-auto mt-24">
      {/* Search input */}
      <div className="flex flex-col my-4">
        <h1 className="mb-5 text-3xl text-center md:text-5xl ">
          Search Document
        </h1>

        <div className="flex items-center justify-center mb-10">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search resources by title, author, or description..."
            className="w-full md:w-[700px] px-7 py-2 border  border-gray-300 outline-none rounded-3xl ring-1 fring-blue-500"
          />
        </div>
      </div>

      {/* Display filtered resources */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {filteredResources && filteredResources.length > 0 ? (
          filteredResources.slice(0, count).map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-3 py-5 rounded-md shadow cursor-pointer ring-1 ring-blue-50 bg-gray-50"
              onClick={() => setShow(show === index ? null : index)} // Toggle logic
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-4">
                {/* icon file */}
                <FaFileAlt className="text-4xl text-blue-700 hover:text-red-700" />

                {/* heading, author name, and date */}
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold md:text-2xl font-roboto">
                    {resource?.title}
                  </h1>
                  <p className="text-sm">Author: {resource?.author}</p>
                  <p className="text-sm">{resource?.dateIssued}</p>
                </div>
              </div>

              {/* Animate details section using AnimatePresence */}
              <AnimatePresence>
                {show === index && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 overflow-hidden"
                  >
                    {/* summary */}
                    <p className="font-semibold">Summary</p>
                    <p>{resource?.description}</p>
                    {/* download button or other elements can go here */}
                    <div className="py-2 mt-4">
                      <a
                        href={`${IMAGE_BASE_URL}${resource?.document}`}
                        download
                        className="px-4 justify-center flex flex-row hover:bg-blue-700 items-center gap-x-2 py-1.5   bg-blue-600 text-white rounded-3xl"
                        rel="noopener noreferrer"
                      >
                        <MdOutlineFileDownload className="text-xl" />
                        Download PDF
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <p>No resources found for "{searchQuery}"</p>
        )}
      </div>

      {/* Load more button */}
      {filteredResources && count < filteredResources.length && (
        <button
          onClick={() => setCount(count + 10)}
          className="p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default Resources;
