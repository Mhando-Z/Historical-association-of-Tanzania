import React, { useContext, useState } from "react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ImageDisplay from "../Components.jsx/InageDisplay";

function Gallery() {
  const { gallerySect } = useContext(HomePageContext);
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(8);
  const [valuez, setValuez] = useState("");
  const [open, setOpen] = useState(false);

  const handleCount = () => {
    if (count <= gallerySect.length) {
      setCount(count + 4);
    }
  };

  const handleValue = (index) => {
    setValuez(index);
    setOpen(!open);
  };

  const handleNext = () => {
    if (value <= gallerySect.length - 2) {
      setValue(value + 1);
    }
  };
  const handlePrev = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="mt-20 mb-10 flex container mx-auto items-center justify-center flex-col min-h-screen">
      <div className="mb-12 gap-y-3 w-full flex flex-col">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={`http://127.0.0.1:8000/${gallerySect[value]?.image}`}
            alt={gallerySect[0]?.title}
            loading="lazy"
            className="h-[600px] xl:h-[800px] w-full group-hover:grayscale transition-all duration-500 ease-in object-cover object-center"
          />
        </div>
        <div className="flex flex-row justify-between">
          <h1 className="text-6xl tracking-tighter font-semibold">Gallery</h1>
          <div className="flex flex-row">
            <Link onClick={handlePrev} className=" p-5 text-4xl ">
              <FaAngleLeft />
            </Link>
            <Link onClick={handleNext} className="p-5 text-4xl">
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ImageDisplay value={valuez} open={open} setOpen={setOpen} />
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {gallerySect?.slice(0, count).map((product, index) => (
          <Link
            onClick={() => handleValue(index)}
            key={product.id}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={`http://127.0.0.1:8000/${product.image}`}
                alt={product.title}
                loading="lazy"
                className="h-[400px] w-full group-hover:grayscale transition-all duration-500 ease-in object-cover object-center"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mb-16 mt-10 flex items-end justify-end w-full">
        <div className="">
          <Link
            className="py-2 px-7 font-medium text-center hover:ring-black rounded-3xl text-white bg-[#a97c50] hover:bg-opacity-0 hover:text-black hover:ring-2 "
            onClick={handleCount}
          >
            more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
