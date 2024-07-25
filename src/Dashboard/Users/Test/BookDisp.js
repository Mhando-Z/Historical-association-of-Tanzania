import React from "react";
import { RxCross2 } from "react-icons/rx";

function Book(meta1, meta2, meta3) {
  const tr = document.createElement("tr");
  tr.className =
    "flex flex-row w-full border-0 border-b-2 border-gray-200 border-solid";
  tr.innerHTML =
    `
                <td class='w-1/3'>` +
    meta1 +
    `</td>
                <td class='w-1/3'>` +
    meta2 +
    `</td>
                <td class='w-1/3'>` +
    <RxCross2 /> +
    `</td>
                `;
  return (
    <div className="container flex flex-col max-w-4xl mx-auto mt-5 bg-gray-100">
      <table className="w-full pt-6 text-left border " id="tb">
        <tr className="flex flex-row w-full py-3 uppercase bg-white border-0 border-b-2 border-solid ">
          <th className="w-1/3">Book Title</th>
          <th className="w-1/3">Author</th>
          <th className="w-1/3">ISBN</th>
        </tr>
      </table>
    </div>
  );
}
export default Book;
