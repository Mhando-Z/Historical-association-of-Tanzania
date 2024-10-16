import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import HomePageContext from "../Context/HomePageContext";
// icons imports
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const { ContactSect } = useContext(HomePageContext);
  const [show, setShow] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {/* contacts */}
      <div className="mx-auto rounded-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-4 text-4xl font-bold text-purple-800"
          >
            Contact Us
          </motion.h1>
          <motion.p variants={itemVariants} className="mb-2 text-gray-600">
            Our team is here to assist you.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-8 text-gray-600">
            Feel free to reach out to us for any inquiries or questions.
          </motion.p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ContactItem
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              description="You can also visit our office during working hours."
              contact={ContactSect[0]?.email1}
              contact1={ContactSect[0]?.email2}
              contact2={ContactSect[0]?.email3}
            />
            <ContactItem
              icon={<Phone className="w-8 h-8" />}
              title="Phone"
              description="We look forward to hearing from you."
              contact={ContactSect[0]?.phoneNumber1}
              contact1={ContactSect[0]?.phoneNumber2}
              contact2={ContactSect[0]?.phoneNumber3}
            />

            <ContactItem
              icon={<MapPin className="w-8 h-8" />}
              title="Office"
              description="Follow us on social media for updates and news."
              contact={ContactSect[0]?.physicalAdress}
              handleShow={() => setShow(!show)}
            />
          </div>
        </motion.div>
      </div>
      {/* Socials accounts */}

      <div className="container flex flex-col justify-center mx-auto mt-10 md:px-0 xl:justify-between gap-x-10">
        <div className="flex flex-row justify-between mt-8 text-3xl gap-x-10">
          <Link to={`${ContactSect[0]?.facebook}`}>
            <BsFacebook className="text-blue-600 duration-1000 animate-bounce" />
          </Link>
          <Link to={`${ContactSect[0]?.instagram}`}>
            <FaInstagramSquare className="text-orange-600 duration-1000 animate-bounce" />
          </Link>
          <Link to={`${ContactSect[0]?.linkedin}`}>
            <FaLinkedin className="text-blue-600 duration-1000 animate-bounce" />
          </Link>
          <Link>
            <IoLogoWhatsapp className="text-green-600 duration-1000 animate-bounce" />
          </Link>
          <Link to={`${ContactSect[0]?.twitter}`}>
            <FaSquareXTwitter className="duration-1000 animate-bounce" />
          </Link>
        </div>
      </div>
      {/* <iframe
        title="Historical association of Tanzania location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.78828307739545!2d39.20351960845884!3d-6.7802340452906105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ee6f9138fe9%3A0x85f5c7ce51ff2731!2sHistory%20Department!5e1!3m2!1sen!2stz!4v1729054631444!5m2!1sen!2stz"
        style={{ border: "0" }}
        className="flex w-screen rounded h-[500px]"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}

      {/* map section */}
      {show ? (
        <div className="mt-16">
          <iframe
            title="Historical association of Tanzania location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.78828307739545!2d39.20351960845884!3d-6.7802340452906105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ee6f9138fe9%3A0x85f5c7ce51ff2731!2sHistory%20Department!5e1!3m2!1sen!2stz!4v1729054631444!5m2!1sen!2stz"
            style={{ border: "0" }}
            className="flex rounded w-screen h-[600px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const ContactItem = ({
  icon,
  title,
  description,
  contact,
  contact1,
  contact2,
  handleShow,
}) => {
  return (
    <motion.div className="flex flex-col items-center rounded-lg cursor-pointer ">
      <motion.div
        onClick={handleShow}
        whileHover={{ scale: 1.2 }}
        className="mb-4 text-blue-500"
      >
        {icon}
      </motion.div>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-4 text-sm text-center text-gray-600">{description}</p>
      <p className="font-medium">{contact}</p>
      <p className="font-medium">{contact1}</p>
      <p className="font-medium">{contact2}</p>
    </motion.div>
  );
};

export default Contact;
