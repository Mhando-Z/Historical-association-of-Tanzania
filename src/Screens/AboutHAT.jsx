import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// images imports
import mage1 from "../Assets/AboutUs/03.jpg";
import mage2 from "../Assets/AboutUs/16.jpg";

// icons imports
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ArrowRight, CheckCircle, DollarSign, Users } from "lucide-react";

import { ChevronDown, ChevronUp } from "lucide-react";

function AboutHAT() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-28">
      <motion.div>
        {/* About Us section */}
        <section className="mb-16">
          <HAT />
        </section>

        {/* Vision Section */}
        <section className="container flex mx-auto mb-5">
          <VisionSection />
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <MissionSection />
        </section>

        {/* Membership Section */}
        <section className="mb-16">
          <MembershipSection />
        </section>

        {/* Image Placeholder */}
        <motion.div
          className="mt-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="flex container mx-auto items-center justify-center w-full h-[300px] md:h-[400px] xl:h-[500px] bg-gray-300 rounded-md">
            <img
              src={mage2}
              alt="HAT group pic"
              className="object-cover object-center w-full h-full rounded-3xl"
            />
          </div>
        </motion.div>

        {/* how to join HAT */}
        <section className="mb-16">
          <HowToJoinSection />
        </section>
      </motion.div>
    </div>
  );
}

export default AboutHAT;

// Houw to Join HAT component
const HowToJoinSection = () => {
  const membershipTypes = [
    { type: "Ordinary Membership", fee: "20,000 TZS", icon: Users },
    { type: "Student Membership", fee: "5,000 TZS", icon: Users },
    { type: "Corporate Membership", fee: "200,000 TZS", icon: DollarSign },
  ];

  const joinSteps = [
    {
      title: "Complete an Application",
      description:
        " Membership forms can be obtained through HAT’s website or at any of its regional offices. Applicants need to fill in personal or institutional details, including their areas of historical interest.",
    },
    {
      title: "Pay the Membership Fees",
      description:
        " After submitting the application, fees should be paid via HAT’s designated bank accounts or mobile money platforms.",
    },
    {
      title: "Review and Approval",
      description:
        "Applications are reviewed by the Executive Committee. Successful applicants are added to HAT’s membership registry and gain access to all membership benefits.",
    },
  ];

  // Reference for viewport animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="container flex flex-col px-4 mx-auto mb-16">
      <motion.h2
        className="mb-6 text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        How to Join
      </motion.h2>

      <motion.div
        ref={ref}
        className="space-y-6 text-gray-700"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-lg">
          An individual interested in joining HAT can do so by visiting the
          association's website or contacting the association directly via email
          or phone. Membership application forms are available online, and once
          submitted, the applicant will receive confirmation within a week.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Membership Types and Fees</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {membershipTypes.map((membership, index) => (
              <motion.div
                key={index}
                className="p-4 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <membership.icon className="w-8 h-8 mb-2 text-blue-500" />
                <h4 className="mb-2 font-semibold">{membership.type}</h4>
                <p className="text-sm text-gray-600">
                  {membership.fee} per year
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Joining Process</h3>
          <div className="space-y-4">
            {joinSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start p-4 rounded-lg bg-gray-50"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-green-500" />
                <div>
                  <h4 className="mb-1 font-semibold">{step.title}</h4>
                  <p className="max-w-3xl text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-amber-50">
          <h4 className="mb-2 font-semibold">Note for Corporate Membership</h4>
          <p className="text-sm">
            Institutions applying for Corporate membership must submit a letter
            of interest along with their application form, detailing their goals
            and how they intend to support HAT's objectives.
          </p>
        </div>

        <motion.button
          className="flex items-center px-6 py-3 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now <ArrowRight className="w-5 h-5 ml-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

// membership design
const MembershipSection = () => {
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const membershipTypes = [
    {
      title: "Founding Members",
      description:
        " Members who started the initial stage for registration of the association and whose names have been registered at the Registrar’s Office of the Ministry of Home Affairs.",
    },
    {
      title: "Ordinary Members",
      description: "Members who joined the association after its registration.",
    },
    {
      title: "Corporate Members",
      description:
        " Membership is open to corporate bodies, societies, and other institutions in Tanzania and beyond, provided they subscribe to the aims and objectives of the Association and are willing to advance these aims.",
    },
    {
      title: "Honorary Members",
      description:
        " Determined and granted by the Executive Committee to any person who has distinguished themselves in the promotion and attainment of the aims of the Association. Such membership must be approved by no less than two-thirds of the Executive Committee and ratified by the General Meeting.",
    },
  ];

  const membershipBenefits = [
    {
      title: "Seminars and Conferences",
      description:
        " Members gain exclusive access to seminars and conferences featuring renowned historians and guest speakers from both local and international platforms. Topics range from Tanzanian pre-colonial history to global historical events. These events help members stay updated with the latest research and scholarly discussions.",
    },
    {
      title: "Scholarship Opportunities",
      description:
        "HAT provides scholarships for historical research and participation in international history programs. These scholarships are open to students, educators, and historians, offering funding for further studies, research trips, and attending global conferences.",
    },
    {
      title: "Improvement of Teaching Knowledge",
      description:
        "Through HAT's workshops and training, history teachers and educators benefit from continuous professional development. This enhances their teaching techniques, incorporating digital tools and interactive methods to better engage students with historical studies.",
    },
    {
      title: "Access to Teaching Materials and Resources",
      description:
        "Members enjoy access to a variety of printed and digital materials, including research papers, historical documents, and rare archival content. Additionally, HAT's upcoming digital library will house important historical texts and journals for members’ use.",
    },
    {
      title: "Networking Opportunities",
      description:
        "HAT fosters connections between members, offering networking opportunities with local and international historians, scholars, and educators. Partnerships with organizations such as the African Studies Association allow members to collaborate and expand their research and professional circles.",
    },
    {
      title: "Exclusive Access to Archives and Digital Libraries",
      description:
        "Members receive privileged access to historical archives and collections, including documents that are not publicly available. HAT is also developing a digital library containing rare texts and research materials that will support both scholarly and public education.",
    },
    {
      title: "Collaboration on Research Projects",
      description:
        " HAT members can participate in national and international historical research projects. By collaborating with universities and research institutions, members contribute to groundbreaking studies on Tanzanian and African history. HAT also provides platforms for members to publish and share their research with the wider academic community.",
    },
  ];

  const toggleBenefit = (index) => {
    setExpandedBenefit(expandedBenefit === index ? null : index);
  };

  return (
    <div className="container flex py-4 mx-auto">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Membership Section */}
        <motion.div
          className="col-span-1 p-6 bg-white rounded-lg shadow md:col-span-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-2xl font-bold">
            Discover the Power of HAT Membership
          </h2>
          <p className="mb-4 text-gray-600">
            Join the Historical Association of Tanzania and unlock a world of
            opportunities in historical research, education, and networking. Our
            diverse membership types cater to individuals and organizations
            alike.
          </p>
        </motion.div>

        {/* Membership Types */}
        {membershipTypes.map((type, index) => (
          <motion.div
            key={index}
            className={`bg-white p-6 rounded-lg shadow ${
              index % 2 === 1 ? "bg-orange-100" : ""
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{type.title}</h3>
              <span className="text-lg font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-gray-600">{type.description}</p>
          </motion.div>
        ))}

        {/* Membership Benefits */}
        <motion.div
          className="col-span-1 py-6 bg-white rounded-lg md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-4 text-2xl font-bold">Membership Benefits</h3>
          <div className="space-y-4">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="pb-4 border-b border-gray-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <button
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleBenefit(index)}
                >
                  <span className="font-semibold">{benefit.title}</span>
                  {expandedBenefit === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedBenefit === index && (
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// mission section
const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={ref} // Reference for in-view detection
      className="p-6 py-20 mb-10 bg-gradient-to-br from-amber-50 to-orange-50"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate when in view
    >
      <div className="container flex flex-col mx-auto">
        <motion.h2
          className="flex flex-row items-center mb-6 text-2xl font-bold text-amber-800 md:text-3xl gap-x-3"
          variants={itemVariants}
        >
          <TbTargetArrow className="text-3xl text-amber-600" />
          Our Mission
        </motion.h2>

        <motion.p
          className="mb-6 text-lg tracking-wide text-gray-700 sm:text-justify"
          variants={itemVariants}
        >
          To unite all historians, students, history teachers, allied
          professionals, and the general public in the study of African and
          global histories in Tanzania. Our mission extends to involving
          community leaders, local councils, and schools, ensuring that the
          study of history becomes an integral part of the educational
          curriculum, thus embedding historical consciousness within Tanzanian
          society.
        </motion.p>

        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h3
            className="text-xl font-semibold text-amber-700"
            variants={itemVariants}
          >
            HAT achieves its mission through:
          </motion.h3>

          <ul className="space-y-4">
            {[
              {
                title:
                  "Organizing conferences, workshops, and seminars to promote historical discourse",
                description:
                  "HAT regularly organizes events such as conferences and workshops that bring together historians, educators, and students to discuss and debate historical topics. These platforms encourage the exchange of ideas, foster new research, and strengthen the community of history scholars in Tanzania.",
              },
              {
                title:
                  "Supporting research and publication efforts for emerging scholars",
                description:
                  ":HAT offers resources and support to new and emerging scholars who are conducting research in the field of history. By providing a platform for these scholars to publish their work, the association helps expand historical knowledge and encourages the development of fresh perspectives on Tanzanian and African histories.",
              },
              {
                title:
                  "Encouraging public engagement with history through outreach programs and online platforms",
                description:
                  "HAT works to make history more accessible to the general public. Through outreach programs and digital platforms, the association seeks to engage a broader audience with Tanzanian history, promoting historical awareness and education among communities that may not have easy access to formal historical discourse.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start p-4 bg-white rounded-md shadow-md"
                variants={itemVariants}
              >
                <span className="mr-4 text-2xl text-amber-500">•</span>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.h3
            className="mt-8 text-xl font-semibold text-amber-700"
            variants={itemVariants}
          >
            Additional goals:
          </motion.h3>

          <ul className="space-y-4">
            {[
              {
                title:
                  "Strengthen history education in Tanzanian schools through collaboration with the Ministry of Education:",
                description:
                  ":By working closely with the Ministry of Education, HAT seeks to improve the teaching of history in schools across Tanzania. The association advocates for better history curricula, more resources for history teachers, and greater emphasis on the importance of historical study within the Tanzanian education system.",
              },
              {
                title:
                  " Develop online courses and resources for the public to engage more with Tanzanian history:",
                description:
                  ":HAT is developing digital courses and educational resources that allow the public to engage with Tanzanian history from anywhere. These resources make learning history more accessible, particularly for those who may not have the opportunity to attend formal classes or academic institutions.",
              },
              {
                title:
                  "Collaborate with international history associations to share resources and best practices:",
                description:
                  "HAT seeks to build strong relationships with history associations from around the world. These collaborations provide valuable opportunities to share resources, research, and best practices, while also helping Tanzanian history gain wider recognition on the international stage.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start p-4 bg-white rounded-md shadow-md"
                variants={itemVariants}
              >
                <span className="mr-4 text-2xl text-amber-500">•</span>
                <div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

// vison section
const VisionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      className="p-6 mb-16 rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="flex flex-row items-center mb-6 text-2xl font-bold text-indigo-800 md:text-3xl gap-x-3"
        variants={itemVariants}
      >
        <FaEye className="text-3xl text-indigo-600" />
        Our Vision
      </motion.h2>

      <motion.p
        className="mb-6 text-lg tracking-wide text-gray-700 sm:text-justify"
        variants={itemVariants}
      >
        To cultivate a deep, inclusive, and dynamic understanding of African and
        global histories in Tanzania by fostering a community of scholars,
        students, and the public who engage with the past to shape a better
        future.
      </motion.p>

      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.h3
          className="text-xl font-semibold text-indigo-700"
          variants={itemVariants}
        >
          HAT's vision also includes efforts to:
        </motion.h3>

        <ul className="space-y-4">
          {[
            {
              title:
                "Pursuing Tanzanian history through digitization and archiving",
              description:
                "HAT aims to ensure that crucial historical documents, records, and oral histories are digitized and archived. This effort is essential in preserving Tanzania’s rich cultural and historical heritage for future generations. Through digitization, historical resources can be safeguarded against deterioration, while also making them more accessible to researchers, students, and the public.",
              icon: "📚",
            },
            {
              title:
                "Expand historical education by integrating technology and digital tools",
              description:
                "HAT is committed to promoting historical education by incorporating modern technology into the teaching and learning process. By using digital platforms, online resources, and virtual libraries, the association can enhance the study of history, making it more interactive and engaging for students. This also allows the organization to reach a broader audience, including those in remote areas.",
              icon: "💻",
            },
            {
              title:
                "Promote global partnerships to broaden perspectives on Tanzanian and African histories:",
              description:
                "HAT actively seeks to establish partnerships with global institutions, historians, and scholars to exchange knowledge and resources. These partnerships allow HAT to introduce diverse perspectives on African histories, fostering a more inclusive understanding of both Tanzanian and global narratives. This global collaboration also facilitates research opportunities and helps Tanzanian history gain recognition on an international scale.",
              icon: "🌍",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start p-4 transition-transform duration-200 transform bg-white rounded-md shadow-md hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <span className="mr-4 text-3xl">{item.icon}</span>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
};

// About Us
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HAT() {
  // Create refs for the image and content sections
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Create inView states to trigger animation
  const isImageInView = useInView(imageRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true });

  return (
    <div className="px-4 py-12 mx-auto bg-white">
      <motion.div
        className="flex flex-col gap-8 md:flex-row"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, // Staggering the animations
            },
          },
        }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full overflow-hidden md:w-1/2 rounded-3xl"
          ref={imageRef}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 1 }} // Duration for image fade-in
        >
          <img
            src={mage1}
            alt="HAT representative"
            className="object-cover w-full h-auto"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div className="w-full space-y-4 md:w-1/2" ref={contentRef}>
          {/* Title */}
          <motion.h2
            animate={isContentInView ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeIn}
            className="flex flex-col max-w-2xl gap-1 text-3xl font-bold text-gray-800 md:text-4xl"
            transition={{ duration: 1, delay: 0.2 }} // Title shows up with delay
          >
            Historical Association of Tanzania (HAT)
            <span className="mt-4 text-lg italic text-gray-600">
              Pursuing Tanzania's History since 1966
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.h2
            className="flex flex-row items-center mb-4 text-xl font-semibold text-gray-800 md:text-2xl gap-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }} // Staggered with delay
          >
            <BsFillInfoCircleFill className="text-2xl text-amber-600" />
            <>About Us</>
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            animate={isContentInView ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeIn}
            className="text-lg text-gray-600"
            transition={{ duration: 1, delay: 0.6 }} // First paragraph
          >
            The Historical Association of Tanzania (HAT) is one of the oldest
            academic organisations in East Africa. It was founded in 1966 by
            members of the History Department of Dar es Salaam University
            College of the University of East Africa. By 1974, HAT had branches
            in many secondary schools and colleges in Tanzania.
          </motion.p>

          <motion.p
            animate={isContentInView ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeIn}
            className="text-lg text-gray-600"
            transition={{ duration: 1, delay: 0.8 }} // Second paragraph
          >
            Apart from engaging historians in seminars and conferences, the
            Association was also an important platform for the production and
            dissemination of historical knowledge throughout the country.
            Because it was based on and aligned with the national philosophy of
            Ujamaa and self-reliance, the Association was funded by the
            government and its institutions. However, funding began to dwindle
            from the late 1980s when members of many branches of the
            Association, including government departments and universities,
            failed to pay their annual subscriptions. As a result, the
            association became weak, and publications, particularly its journal{" "}
            <em>Tanzania Zamani</em>, almost ceased, leading to the
            deregistration of the association in the 1990s.
          </motion.p>

          <motion.p
            animate={isContentInView ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeIn}
            className="text-lg text-gray-600"
            transition={{ duration: 1, delay: 1 }} // Third paragraph
          >
            HAT was revived in 2017 and re-registered as a non-profit
            organization in 2018. Since then, HAT has been able to revive its
            annual conferences and seminars. The new HAT has several objectives,
            including promoting and encouraging interest in the study of
            history; supporting the teaching of Tanzanian history; publishing
            bibliographies and information sheets; encouraging historical
            writing; holding meetings; and encouraging the formation of local
            branches of the Association.
          </motion.p>

          <motion.p
            animate={isContentInView ? "visible" : "hidden"}
            initial="hidden"
            variants={fadeIn}
            className="text-lg text-gray-600"
            transition={{ duration: 3, delay: 1.2 }} // Fourth paragraph
          >
            Additionally, HAT has strengthened its partnership with the East
            African Historical Society and launched a new initiative to preserve
            Tanzanian historical documents through digitization. This allows
            greater access to historical records and materials, helping preserve
            the nation's history for future generations.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
