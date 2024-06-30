import React from "react";
import { Link } from "react-router-dom";

function Buttons({ title }) {
  return (
    <div className="">
      <Link className="px-5 py-2 bg-[#b67a3d] text-white rounded-3xl hover:right-2 hover:ring-black hover:bg-opacity-0 hover:text-black">
        {title}
      </Link>
    </div>
  );
}

export default Buttons;
