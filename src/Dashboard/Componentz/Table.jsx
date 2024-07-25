import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Link } from "react-router-dom";
import { usePagination } from "@table-library/react-table-library/pagination";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { motion } from "framer-motion";
import Drawer from "./Drawer";
import Notification from "./Notification";
import moment from "moment";

// Date formatter component
const formatDate = (dateString) => {
  return moment(dateString).format("MMMM D, YYYY [at] h:mm:ss A");
};

const Table = ({ data }) => {
  const theme = useTheme(getTheme());
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [dataId, setId] = React.useState("");
  const [search, setSearch] = React.useState("");

  const handleDelete = (id) => {
    setOpen1(!open1);
    setId(id);
  };

  const handleClick = (index) => {
    setOpen(!open);
    setId(index);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item?.title?.toLowerCase().includes(search.toLowerCase()) ||
      item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const pagination = usePagination(
    { nodes: filteredData },
    {
      state: {
        page: 0,
        size: 10,
      },
    }
  );

  const COLUMNS = [
    {
      label: "Image",
      renderCell: (item) => (
        <div className="rounded-xl">
          <motion.img
            initial={{}}
            whileHover={{ height: "150px" }}
            transition={{ duration: 1.5, type: "spring", ease: "easeOut" }}
            src={`http://127.0.0.1:8000/${item.image}`}
            alt={item.title || item.name}
            className="object-cover object-center w-full size-24 rounded-xl"
          />
        </div>
      ),
    },
    {
      label: data[0]?.title ? "Title" : "Name",
      renderCell: (item) => (
        <div className="flex flex-col h-full">{item.title || item.name}</div>
      ),
    },
    {
      label: "Datetime",
      renderCell: (item) => formatDate(item.dateIssued),
    },
    {
      label:
        data[0]?.subtitle !== undefined
          ? "Subtitle"
          : data[0]?.position !== undefined
            ? "position"
            : data[0]?.author !== undefined
              ? "Author"
              : "",
      renderCell: (item) => (
        <div className="flex flex-col">
          <div className="xl:text-lg w-[250px]">
            {item?.subtitle || item.position || item.author}
          </div>
        </div>
      ),
    },
    {
      label: "Actions",
      renderCell: (item) => (
        <div className="flex flex-row items-center gap-x-3">
          <Link
            onClick={() => handleClick(item.id)}
            className="px-3 py-2 text-white bg-blue-600 rounded-md"
          >
            <FaRegPenToSquare className="text-xl" />
          </Link>
          <Link
            onClick={() => handleDelete(item.id)}
            className="px-3 py-2 text-white bg-red-600 rounded-md"
          >
            <FaRegTrashCan className="text-xl" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 100 }}
      animate={{ opacity: 1, scale: [1, 0, 1], x: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        stiffness: 140,
        type: "spring",
      }}
      className="flex flex-col mb-10"
    >
      <h1 className="md:text-xl border-l-[#b67a3d] shadow-md bg-slate-50 py-3  border-r-[#b67a3d] border-r-8  border-l-8 mb-5 font-bold uppercase">
        <span className="ml-2">Posted data</span>
      </h1>
      <div className="flex justify-end w-full px-3 xl:text-lg">
        <label htmlFor="search">
          Search:&nbsp;
          <input
            id="search"
            className="ring-1 py-2 px-5 outline-none rounded-2xl w-[400px] ring-gray-600"
            type="text"
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>
      <br />
      <CompactTable
        columns={COLUMNS}
        data={{ nodes: filteredData }}
        pagination={pagination}
        theme={theme}
        layout={{ fixedHeader: true }}
      />
      <div className="flex items-center justify-between mt-3">
        <span className="px-4">
          Total Pages: {pagination.state.getTotalPages(filteredData)}
        </span>
        <span>
          Page:
          {pagination.state.getPages(filteredData).map((_, index) => (
            <Link
              key={index}
              className="px-2 rounded-sm bg-slate-200 ring-1 ring-slate-800"
              style={{
                fontWeight: pagination.state.page === index ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </Link>
          ))}
        </span>
      </div>
      <Drawer
        open={open}
        setOpen={setOpen}
        dataId={dataId}
        datas={filteredData}
      />
      <Notification open={open1} setOpen={setOpen1} dataId={dataId} />
    </motion.div>
  );
};

export default Table;
