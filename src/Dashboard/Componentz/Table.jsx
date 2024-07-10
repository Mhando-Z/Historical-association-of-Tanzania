import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { Link } from "react-router-dom";
import { usePagination } from "@table-library/react-table-library/pagination";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { motion } from "framer-motion";
import Drawer from "./Drawer";
import Notification from "./Notification";

const Table = ({ data }) => {
  const theme = useTheme(getTheme());
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [dataId, setId] = React.useState("");

  const handleDelete = (id) => {
    setOpen1(!open1);
    setId(id);
  };

  const handleClick = (index) => {
    setOpen(!open);
    setId(index);
  };

  const [search, setSearch] = React.useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data?.filter(
      (item) =>
        item?.title || item?.name.toLowerCase().includes(search?.toLowerCase())
    ),
  };

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
  });

  const COLUMNS = [
    {
      label: "Image",
      renderCell: (item) => (
        <div className="rounded-xl">
          <motion.img
            initial={{}}
            whileHover={{ height: "300px" }}
            transition={{ duration: 1, type: "spring", ease: "easeOut" }}
            src={`http://127.0.0.1:8000/${item.image}`}
            alt={item.title || item.name}
            className="size-24 object-cover rounded-xl w-full object-center"
          />
        </div>
      ),
    },
    {
      label: <div>{data.nodes[0]?.title ? <h1>Title</h1> : <h1>Name</h1>}</div>,
      renderCell: (item) => (
        <div className="flex flex-col">
          <h1 className="xl:text-lg">{item.title || item.name}</h1>
        </div>
      ),
    },
    {
      label: "Datetime",
      renderCell: (item) => item.dateIssued,
    },
    {
      label: (
        <div>
          {data.nodes[0]?.subtitle || data.nodes[0]?.subtitle === null ? (
            <h1>Subtitle</h1>
          ) : (
            <h1>Position</h1>
          )}
        </div>
      ),
      renderCell: (item) => (
        <div className="flex flex-col">
          <div className="xl:text-lg">{item?.subtitle || item.position}</div>
        </div>
      ),
    },
    {
      label: "Actions",
      renderCell: (item) => (
        <div className="flex flex-row gap-x-3 items-center">
          <Link
            onClick={() => handleClick(item.id)}
            className="px-3 py-2 rounded-md text-white bg-[#b67a3d]"
          >
            <FaRegPenToSquare className="text-xl" />
          </Link>
          <Link
            onClick={() => handleDelete(item.id)}
            className="px-3 py-2 rounded-md bg-red-600 text-white"
          >
            <FaRegTrashCan className="text-xl" />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-10 mt-5 flex flex-col"
    >
      <div className="px-3 xl:text-lg">
        <label htmlFor="search">
          Search:&nbsp;
          <input
            id="search"
            className="ring-1 px-3 outline-none rounded-2xl w-[400px] ring-gray-600"
            type="text"
            value={search}
            onChange={handleSearch}
          />
        </label>
      </div>
      <br />
      <CompactTable
        columns={COLUMNS}
        data={data}
        pagination={pagination}
        theme={theme}
        layout={{ fixedHeader: true }}
      />
      <div className="flex items-center justify-between mt-3">
        <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

        <span>
          Page:
          {pagination.state.getPages(data.nodes).map((_, index) => (
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
        datas={data?.nodes}
      />
      <Notification open={open1} setOpen={setOpen1} dataId={dataId} />
    </motion.div>
  );
};

export default Table;
