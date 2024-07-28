import { Link } from "react-router-dom";
import Dialogue from "./Dialog";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
            <Link
              onClick={() => handleValue(index)}
              key={product.id}
              className="group"
            >
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
                className="w-full overflow-hidden bg-gray-200 aspect-h-1 aspect-w-1 rounded-3xl xl:aspect-h-8 xl:aspect-w-7"
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
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  type: "spring",
                  ease: "easeOut",
                  delay: 0.1 * index,
                }}
                className="mt-4 text-xl font-bold text-center text-gray-700"
              >
                {product.name}
              </motion.h3>
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
