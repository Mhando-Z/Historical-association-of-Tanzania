import React from "react";
import { useState } from "react";
import Book from "./BookDisp";

function Form() {
  const [Cdata, Ndata] = useState({
    btitle: "",
    auth: "",
    isbn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    Ndata((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Book(Cdata.auth, Cdata.btitle, Cdata.isbn);

    const eraser = document.querySelectorAll(".Tinp");
    eraser.forEach((e) => {
      e.value = "";
    });
  };

  return (
    <div className="container flex flex-col max-w-4xl mx-auto mt-10 bg-white">
      <div className="w-full py-3 mb-4 shadow-xl ring-1 ring-gray-300 bg-slate-50 ">
        <h2 className="text-xl font-bold text-center">ADD BOOK</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full mb-4 gap-y-2">
          <label className="mb-1 text-lg" htmlFor="btitle">
            Title
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-full py-2 shadow-xl outline-none px-7 rounded-3xl ring-2 focus:bg-blue-50"
            name="btitle"
            id="btitle"
          />
        </div>
        <div className="flex flex-col w-full mb-4 gap-y-2">
          <label className="mb-4 text-lg" htmlFor="btitle">
            Author
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-full py-2 shadow-xl outline-none px-7 rounded-3xl ring-2 focus:bg-blue-50"
            name="auth"
            id="auth"
          />
        </div>
        <div className="flex flex-col w-full mb-4 gap-y-2">
          <label className="mb-4 text-lg" htmlFor="btitle">
            ISBN
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="w-full py-2 shadow-xl outline-none px-7 rounded-3xl ring-2 focus:bg-blue-50"
            name="isbn"
            id="isbn"
          />
        </div>
        <input
          type="submit"
          className="w-full px-10 py-2 mt-4 font-medium text-white bg-green-700 rounded-xl"
          value="SUBMIT"
          id="sm"
        />
        <hr className="border-gray-100 border-solid "></hr>
      </form>
      <div className="mt-10">
        <Book />
      </div>
    </div>
  );
}

export default Form;
