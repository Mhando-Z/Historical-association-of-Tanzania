import { Link } from "react-router-dom";
import Dialogue from "./Dialog";
import { useState } from "react";

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
    <div className="bg-white">
      <div className="">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.slice(0, count).map((product, index) => (
            <Link
              onClick={() => handleValue(index)}
              key={product.id}
              className="group"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={`http://127.0.0.1:8000/${product.image}`}
                  alt={product.name}
                  loading="lazy"
                  className="h-[400px] w-full group-hover:grayscale transition-all duration-500 ease-in object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-center text-gray-700">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
        <Dialogue value={value} open={open} setOpen={setOpen} />
      </div>
      <div
        className={`${count <= 8 ? "hidden" : "flex justify-end items-end w-full "}`}
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
