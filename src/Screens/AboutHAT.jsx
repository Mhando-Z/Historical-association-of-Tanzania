import React, { useContext } from "react";
import HomePageContext from "../Context/HomePageContext";
import { motion } from "framer-motion";

function AboutHAT() {
  const { AboutUSSect } = useContext(HomePageContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-28">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Historical Association of Tanzania (HAT)
          </h1>
          <p className="mt-4 text-lg italic text-gray-600">
            Preserving Tanzania's History since 1966
          </p>
        </motion.div>

        {/* About Us Section */}
        <section className="mb-16">
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-gray-700"
          >
            <p>
              The Historical Association of Tanzania (HAT) is one of the oldest
              academic organisations in East Africa. It was founded in 1966 by
              members of the History Department of Dar es Salaam University
              College of the University of East Africa. By 1974, HAT had
              branches in many secondary schools and colleges in Tanzania.
            </p>
            <p>
              Apart from engaging historians in seminars and conferences, the
              Association was also an important platform for the production and
              dissemination of historical knowledge throughout the country.
              Because it was based on and aligned with the national philosophy
              of Ujamaa and self-reliance, the Association was funded by the
              government and its institutions. However, funding began to dwindle
              from the late 1980s when members of many branches of the
              Association, including government departments and universities,
              failed to pay their annual subscriptions. As a result, the
              association became weak, and publications, particularly its
              journal <em>Tanzania Zamani</em>, almost ceased, leading to the
              deregistration of the association in the 1990s.
            </p>
            <p>
              HAT was revived in 2017 and re-registered as a non-profit
              organization in 2018. Since then, HAT has been able to revive its
              annual conferences and seminars. The new HAT has several
              objectives, including promoting and encouraging interest in the
              study of history; supporting the teaching of Tanzanian history;
              publishing bibliographies and information sheets; encouraging
              historical writing; holding meetings; and encouraging the
              formation of local branches of the Association.
            </p>
            <p>
              Additionally, HAT has strengthened its partnership with the East
              African Historical Society and launched a new initiative to
              preserve Tanzanian historical documents through digitization. This
              allows greater access to historical records and materials, helping
              preserve the nation's history for future generations.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center w-full h-64 bg-gray-300 rounded-md">
              <p className="text-gray-500">[Place Image Here]</p>
            </div>
          </motion.div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vision
          </motion.h2>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            To cultivate a deep, inclusive, and dynamic understanding of African
            and global histories in Tanzania by fostering a community of
            scholars, students, and the public who engage with the past to shape
            a better future.
          </motion.p>
          <motion.div
            className="mt-4 space-y-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>HAT’s vision also includes efforts to:</p>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <strong>
                  Preserve Tanzanian history through digitization and archiving:
                </strong>
                HAT aims to ensure that crucial historical documents, records,
                and oral histories are digitized and archived. This effort is
                essential in preserving Tanzania’s rich cultural and historical
                heritage for future generations. Through digitization,
                historical resources can be safeguarded against deterioration,
                while also making them more accessible to researchers, students,
                and the public.
              </li>
              <li>
                <strong>
                  Expand historical education by integrating technology and
                  digital tools:
                </strong>
                HAT is committed to promoting historical education by
                incorporating modern technology into the teaching and learning
                process. By using digital platforms, online resources, and
                virtual libraries, the association can enhance the study of
                history, making it more interactive and engaging for students.
                This also allows the organization to reach a broader audience,
                including those in remote areas.
              </li>
              <li>
                <strong>
                  Promote global partnerships to broaden perspectives on
                  Tanzanian and African histories:
                </strong>
                HAT actively seeks to establish partnerships with global
                institutions, historians, and scholars to exchange knowledge and
                resources. These partnerships allow HAT to introduce diverse
                perspectives on African histories, fostering a more inclusive
                understanding of both Tanzanian and global narratives. This
                global collaboration also facilitates research opportunities and
                helps Tanzanian history gain recognition on an international
                scale.
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mission
          </motion.h2>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            To unite all historians, students, history teachers, allied
            professionals, and the general public in the study of African and
            global histories in Tanzania. The mission extends to involving
            community leaders, local councils, and schools, ensuring that the
            study of history becomes an integral part of the educational
            curriculum, thus embedding historical consciousness within Tanzanian
            society.
          </motion.p>
          <motion.div
            className="mt-4 space-y-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p>HAT achieves its mission through the following actions:</p>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <strong>
                  Organizing conferences, workshops, and seminars to promote
                  historical discourse:
                </strong>
                HAT regularly organizes events such as conferences and workshops
                that bring together historians, educators, and students to
                discuss and debate historical topics. These platforms encourage
                the exchange of ideas, foster new research, and strengthen the
                community of history scholars in Tanzania.
              </li>
              <li>
                <strong>
                  Supporting research and publication efforts for emerging
                  scholars:
                </strong>
                HAT offers resources and support to new and emerging scholars
                who are conducting research in the field of history. By
                providing a platform for these scholars to publish their work,
                the association helps expand historical knowledge and encourages
                the development of fresh perspectives on Tanzanian and African
                histories.
              </li>
              <li>
                <strong>
                  Encouraging public engagement with history through outreach
                  programs and online platforms:
                </strong>
                HAT works to make history more accessible to the general public.
                Through outreach programs and digital platforms, the association
                seeks to engage a broader audience with Tanzanian history,
                promoting historical awareness and education among communities
                that may not have easy access to formal historical discourse.
              </li>
            </ul>
            <p className="mt-4">In addition, HAT aims to:</p>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <strong>
                  Strengthen history education in Tanzanian schools through
                  collaboration with the Ministry of Education:
                </strong>
                By working closely with the Ministry of Education, HAT seeks to
                improve the teaching of history in schools across Tanzania. The
                association advocates for better history curricula, more
                resources for history teachers, and greater emphasis on the
                importance of historical study within the Tanzanian education
                system.
              </li>
              <li>
                <strong>
                  Develop online courses and resources for the public to engage
                  more with Tanzanian history:
                </strong>
                HAT is developing digital courses and educational resources that
                allow the public to engage with Tanzanian history from anywhere.
                These resources make learning history more accessible,
                particularly for those who may not have the opportunity to
                attend formal classes or academic institutions.
              </li>
              <li>
                <strong>
                  Collaborate with international history associations to share
                  resources and best practices:
                </strong>
                HAT seeks to build strong relationships with history
                associations from around the world. These collaborations provide
                valuable opportunities to share resources, research, and best
                practices, while also helping Tanzanian history gain wider
                recognition on the international stage.
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Membership Section */}
        <section className="mb-16">
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Membership
          </motion.h2>
          <motion.div
            className="space-y-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Membership to the association is open to interested parties and is
              divided into several tiers:
            </p>
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <strong>Founding Members:</strong> Members who started the
                initial stage for registration of the association and whose
                names have been registered at the Registrar’s Office of the
                Ministry of Home Affairs.
              </li>
              <li>
                <strong>Ordinary Members:</strong> Members who joined the
                association after its registration.
              </li>
              <li>
                <strong>Corporate Members:</strong> Membership is open to
                corporate bodies, societies, and other institutions in Tanzania
                and beyond, provided they subscribe to the aims and objectives
                of the Association and are willing to advance these aims.
              </li>
              <li>
                <strong>Honorary Members:</strong> Determined and granted by the
                Executive Committee to any person who has distinguished
                themselves in the promotion and attainment of the aims of the
                Association. Such membership must be approved by no less than
                two-thirds of the Executive Committee and ratified by the
                General Meeting.
              </li>
            </ul>
          </motion.div>
        </section>

        <section className="mb-16">
          {/* Section Title */}
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Membership Benefits
          </motion.h2>

          {/* Membership Benefits List */}
          <motion.ul
            className="pl-5 space-y-4 text-gray-700 list-disc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Participation in Seminars and Conferences */}
            <li>
              <strong>Participation in Seminars and Conferences:</strong>{" "}
              Members gain exclusive access to seminars and conferences
              featuring renowned historians and guest speakers from both local
              and international platforms. Topics range from Tanzanian
              pre-colonial history to global historical events. These events
              help members stay updated with the latest research and scholarly
              discussions.
            </li>

            {/* Educational and Scholarship Opportunities */}
            <li>
              <strong>Educational and Scholarship Opportunities:</strong> HAT
              provides scholarships for historical research and participation in
              international history programs. These scholarships are open to
              students, educators, and historians, offering funding for further
              studies, research trips, and attending global conferences.
            </li>

            {/* Improvement of Teaching Knowledge */}
            <li>
              <strong>Improvement of Teaching Knowledge:</strong> Through HAT's
              workshops and training, history teachers and educators benefit
              from continuous professional development. This enhances their
              teaching techniques, incorporating digital tools and interactive
              methods to better engage students with historical studies.
            </li>

            {/* Access to Teaching Materials and Resources */}
            <li>
              <strong>Access to Teaching Materials and Resources:</strong>{" "}
              Members enjoy access to a variety of printed and digital
              materials, including research papers, historical documents, and
              rare archival content. Additionally, HAT's upcoming digital
              library will house important historical texts and journals for
              members’ use.
            </li>

            {/* Networking Opportunities */}
            <li>
              <strong>Networking Opportunities:</strong> HAT fosters connections
              between members, offering networking opportunities with local and
              international historians, scholars, and educators. Partnerships
              with organizations such as the African Studies Association allow
              members to collaborate and expand their research and professional
              circles.
            </li>

            {/* Exclusive Access to Archives and Digital Libraries */}
            <li>
              <strong>
                Exclusive Access to Archives and Digital Libraries:
              </strong>{" "}
              Members receive privileged access to historical archives and
              collections, including documents that are not publicly available.
              HAT is also developing a digital library containing rare texts and
              research materials that will support both scholarly and public
              education.
            </li>

            {/* Collaboration on Research Projects */}
            <li>
              <strong>Collaboration on Research Projects:</strong> HAT members
              can participate in national and international historical research
              projects. By collaborating with universities and research
              institutions, members contribute to groundbreaking studies on
              Tanzanian and African history. HAT also provides platforms for
              members to publish and share their research with the wider
              academic community.
            </li>
          </motion.ul>
        </section>

        {/* Image Placeholder */}
        <motion.div
          className="mt-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center w-full h-64 bg-gray-300 rounded-md">
            <p className="text-gray-500">[Place Image Here]</p>
          </div>
        </motion.div>

        <section className="mb-16">
          {/* Section Title */}
          <motion.h2
            className="mb-4 text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            How to Join
          </motion.h2>

          {/* How to Join Details */}
          <motion.div
            className="space-y-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Joining Process Introduction */}
            <p>
              An individual interested in joining HAT can do so by visiting the
              association's website or contacting the association directly via
              email or phone. Membership application forms are available online,
              and once submitted, the applicant will receive confirmation within
              a week.
            </p>

            {/* Detailed Joining Process */}
            <p>To join HAT, interested individuals or institutions must:</p>

            {/* Application Process */}
            <ul className="pl-5 space-y-2 list-disc">
              <li>
                <strong>Complete an Application:</strong> Membership forms can
                be obtained through HAT’s website or at any of its regional
                offices. Applicants need to fill in personal or institutional
                details, including their areas of historical interest.
              </li>
              <li>
                <strong>Pay the Membership Fees:</strong> After submitting the
                application, fees should be paid via HAT’s designated bank
                accounts or mobile money platforms. The annual membership fees
                are:
                <ul className="pl-5 mt-2 list-disc">
                  <li>
                    <strong>Ordinary Membership:</strong> 50,000 TZS per year.
                  </li>
                  <li>
                    <strong>Student Membership:</strong> 30,000 TZS per year.
                  </li>
                  <li>
                    <strong>Corporate Membership:</strong> 200,000 TZS per year.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Review and Approval:</strong> Applications are reviewed
                by the Executive Committee. Successful applicants are added to
                HAT’s membership registry and gain access to all membership
                benefits.
              </li>
            </ul>

            {/* Corporate Membership Requirements */}
            <p>
              <strong>Note:</strong> For Corporate membership, institutions must
              submit a letter of interest along with their application form,
              detailing their goals and how they intend to support HAT’s
              objectives.
            </p>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}

export default AboutHAT;
