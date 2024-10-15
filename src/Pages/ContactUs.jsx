import { motion } from "framer-motion";

function ContactUs() {
  return (
    <div className="flex flex-col ">
      <div className="container flex flex-col items-center justify-center py-10 mx-auto mb-1 md:p-20 sm:rounded-xl">
        {/* Get intouch section */}
        <div className="w-full md:flex md:flex-col md:items-center md:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="flex flex-col items-center justify-center gap-y-6"
          >
            <h1 className="text-4xl font-extrabold text-purple-900 md:mb-10 xl:text-6xl lg:text-5xl">
              Get In Touch
            </h1>
            <div className="flex flex-col justify-between w-full gap-y-3 md:flex-row gap-x-10">
              <motion.div
                whileInView={{ opacity: 1, x: [0, -20, 20, 0] }}
                transition={{ duration: 1.3, delay: 1.5 }}
                className="flex flex-row gap-x-8"
              >
                <input
                  type="text"
                  className="w-full py-2 md:py-3 text-base shadow ring-[#b67a3d] outline-none xl:text-xl focus:bg-blue-50 px-7 rounded-3xl placeholder ring-1"
                  placeholder="Name"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: [0, 20, -20, 0] }}
                transition={{ duration: 1.3, delay: 1.5 }}
                className="flex flex-row gap-x-8"
              >
                <input
                  type="text"
                  className="w-full py-2 md:py-3 text-base shadow ring-[#b67a3d]  outline-none xl:text-xl focus:bg-blue-50 px-7 rounded-3xl placeholder ring-1"
                  placeholder="Email"
                />
              </motion.div>
            </div>
            <div className="flex flex-col w-full">
              <textarea
                cols="30"
                rows="8"
                className="text-base shadow ring-[#b67a3d]  outline-none py-7 focus:bg-blue-50 xl:text-xl rounded-3xl px-7 ring-1"
                placeholder="Message"
              ></textarea>
            </div>
            {/* submit button */}
            <div className="flex items-end justify-end w-full">
              <motion.button
                // onClick={}
                className="relative px-6 py-1.5 md:py-2 hover:text-white rounded-3xl text-xs sm:text-sm md:text-base ring-2 ring-[#b67a3d] overflow-hidden text-[#744517] font-medium "
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 bg-[#b67a3d]"
                  initial={{ x: "100%" }}
                  variants={{
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 "
                  initial={{ x: 0 }}
                  variants={{
                    hover: { x: "-100%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Send</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
