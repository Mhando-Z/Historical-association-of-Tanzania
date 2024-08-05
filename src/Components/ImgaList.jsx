import { Link } from "react-router-dom";
import Dialogue from "./Dialog";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosStar } from "react-icons/io";

export default function ImageList({ data }) {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(8);

  const handleCount = () => {
    setCount(count + 4);
  };

  const handleValue = (index) => {
    setValue(index);
    setOpen(!open);
  };
  return (
    <div className="relative bg-white">
      <div className="">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.slice(0, count).map((product, index) => (
            <Link key={product.id} className="group">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  type: "spring",
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
                className="relative w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    exit={{ opacity: 0, x: "-200vw" }}
                    src={`http://127.0.0.1:8000/${product.image}`}
                    alt={product.name}
                    loading="lazy"
                    className="h-[400px] w-full group-hover:grayscale transition-all duration-500 ease-in object-cover object-center"
                  />
                </AnimatePresence>
                <div className="absolute top-0 bottom-0 left-0 right-0 flex-col items-center justify-center hidden transition-all duration-700 bg-black rounded-lg bg-opacity-60 group-hover:flex">
                  <motion.img
                    initial={{ opacity: 0, scale: 0, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      ease: "easeOut",
                    }}
                    src={`http://127.0.0.1:8000/${product.image}`}
                    alt="staffname"
                    className="object-cover object-top mt-5 rounded-full ring-2 ring-white size-32"
                  />
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="px-1 mt-4 text-xl font-bold text-center text-white line-clamp-2"
                  >
                    {product?.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-row items-center justify-center w-full text-lg font-medium text-center text-white md:text-lg gap-x-2"
                  >
                    {product?.position}
                    <IoIosStar className="text-lg text-yellow-400 " />
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onClick={() => handleValue(index)}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", ease: "easeOut" }}
                    className="flex flex-row items-center px-3 py-1 mt-3 font-medium text-center text-black bg-gray-100 md:px-5 md:py-2 hover:ring-green-700 rounded-3xl hover:bg-slate-50 hover:ring-1 "
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <Dialogue value={value} open={open} setOpen={setOpen} />
      </div>
      <div
        className={`${data?.length <= 8 ? "hidden" : "flex justify-end mt-20 items-end w-full "}`}
      >
        <Link
          onClick={handleCount}
          className="px-9 py-2 rounded-3xl hover:ring-2 hover:bg-white hover:ring-black bg-[#b67a3d] text-white hover:text-black text-xl font-semibold"
        >
          More
        </Link>
      </div>
    </div>
  );
}
