import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container flex flex-col mx-auto mt-8 mb-20">
      <h2 className="md:text-4xl text-3xl text-[#b67a3d] font-bold mb-10">
        Curious minds Ask
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="p-2 pb-4 transition-all ease-out bg-gray-100 border-b border-gray-200 rounded shadow-md md:p-5"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleFAQ(1)}
        >
          <h3 className="font-medium text-md md:text-xl text-purple-950 ">
            How can I join HAT?
          </h3>
          <span className="text-xl text-[#b67a3d]">
            {activeIndex === 1 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {activeIndex === 1 && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col text-sm md:text-base xl:text-lg "
          >
            <p className="mt-2 mb-2 font-medium text-gray-700">
              According to article 9 of the constitution;
            </p>
            <ul className="pl-5 list-disc">
              <li>
                Membership to the association is open to interested parties and
                shall comprise of ordinary, associate, corporate and honorary
                members.
              </li>
              <li>
                By applying for registration, the individual agrees to fulfill
                all the obligations of the association as stated in the
                constitution and rules of the society.
              </li>
              <li>
                Membership shall be voted into the association upon approval of
                the National Executive Council.
              </li>
            </ul>

            <p className="mt-4 text-gray-700">
              You can join HAT by completing the membership application form and
              paying the annual subscription fee. Currently the annual
              subscription is Tshs. 20,000/= for academics, practitioners and
              interested parties and Tshs. 5,000 for undergraduate and lower
              level students. Fees can be paid annually or for several years in
              advance. Download the application form, complete it, pay the
              required fees and submit it to the EXCOM. (Membership form
              attached).
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="p-2 pb-4 mt-5 bg-gray-100 border-b border-gray-200 rounded shadow-md md:p-5"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleFAQ(2)}
        >
          <h3 className="font-medium text-md md:text-xl text-purple-950 ">
            What events are coming up?
          </h3>
          <span className="text-xl text-[#b67a3d]">
            {activeIndex === 2 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {activeIndex === 2 && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col text-sm md:text-base xl:text-lg"
          >
            <p className="mt-2 mb-2 text-gray-700">
              We have several upcoming events, do not plan to miss:
            </p>
            <ul className="pl-5 list-disc">
              <li>
                Methods workshop, October 2024. Actual date and location to be
                confirmed later
              </li>
              <li>
                Annual conference, 12th – 13 December, Jordan University College
                – Morogoro.
              </li>
              <li>
                Writing workshop, December 2024. Actual date and location to be
                confirmed later.
              </li>
            </ul>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="p-2 pb-4 mt-5 bg-gray-100 border-b border-gray-200 rounded shadow-md md:p-5"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleFAQ(3)}
        >
          <h3 className="font-medium text-md md:text-xl text-purple-950 ">
            Where can I find past conference resources?
          </h3>
          <span className="text-xl text-[#b67a3d]">
            {activeIndex === 3 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {activeIndex === 3 && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col"
          >
            <p className="mt-2 text-sm text-gray-700 md:text-base xl:text-lg">
              Find the attached programmes for past conferences.
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="p-2 pb-4 mt-5 bg-gray-100 border-b border-gray-200 rounded shadow-md md:p-5"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleFAQ(4)}
        >
          <h3 className="font-medium text-md md:text-xl text-purple-950 ">
            What are the benefits of HAT membership?
          </h3>
          <span className="text-xl text-[#b67a3d]">
            {activeIndex === 4 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {activeIndex === 4 && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col text-sm md:text-base xl:text-lg "
          >
            <p className="mt-2 mb-2 text-gray-700">
              According to article 11 (1) of HAT constitution, members of the
              Association shall enjoy the following privileges:
            </p>
            <ul className="pl-5 list-disc">
              <li>
                To participate in seminars and conference prepared by the
                Association.
              </li>
              <li>
                To enjoy education scholarship available in the Association.
              </li>
              <li>
                To increase teaching knowledge through conferences and seminars
                prepared by the Association.
              </li>
              <li>
                To obtain teaching materials that are available in/from the
                Association.
              </li>
            </ul>
          </motion.div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="p-2 pb-4 mt-5 bg-gray-100 border-b border-gray-200 rounded shadow-md md:p-5"
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleFAQ(5)}
        >
          <h3 className="font-medium text-md md:text-xl text-purple-950 ">
            How do I contact HAT for Inquiries?
          </h3>
          <span className="text-xl text-[#b67a3d]">
            {activeIndex === 5 ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {activeIndex === 5 && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col text-sm md:text-base xl:text-lg "
          >
            <p className="mt-2 mb-2 text-gray-700 ">
              HAT Short Contact Details, Note in our website we have a Contact
              us section, which holds all our contact setails
            </p>
            <ul className="pl-5 list-disc">
              <li> Historical Association of Tanzania</li>
              <li>History Department</li>
              <li>University of Dar es Salaam</li>
              <li>P.O.Box 35050</li>
              <li>16103, Dar es Salaam – Tanzania.</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default FAQSection;
