import { useContext, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";

export default function Dialogue({ value, open, setOpen }) {
  const { StaffsSect } = useContext(HomePageContext);
  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex items-end justify-center p-4 text-center sm:items-center">
          <DialogPanel
            transition
            className="relative transform max-w-6xl overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-slate-100 h-[800px] overflow-y-auto md:p-20 px-2">
              <div className="flex flex-col sm:flex sm:items-start gap-y-4">
                <div className="aspect-h-1 flex w-full md:flex-row flex-col gap-x-14 aspect-w-1 overflow-hidden rounded-3xl xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://127.0.0.1:8000/${StaffsSect[value]?.image}`}
                    alt={StaffsSect[value]?.name}
                    className="h-[400px] object-cover object-center group-hover:opacity-75"
                  />
                  <div className="flex flex-col md:gap-y-3 gap-y-1 mt-2 md:mt-0 md:justify-normal md:items-start  items-center justify-center">
                    <DialogTitle
                      as="h1"
                      className="md:text-5xl text-3xl max-w-lg font-bold  text-gray-900"
                    >
                      {StaffsSect[value]?.name}
                    </DialogTitle>
                    <h1 className="md:text-3xl text-2xl font-bold ">
                      {StaffsSect[value]?.position}
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-xl font-semibold">Contacts</h1>
                      <div className="flex flex-row gap-x-7 text-xl">
                        <h1 className="">Phone:-</h1>
                        <h1>{StaffsSect[value]?.contact2}</h1>
                      </div>
                      <div className="flex flex-row gap-x-7 text-xl">
                        <h1 className="">Email:-</h1>
                        <h1 className="text-blue-800">
                          {StaffsSect[value]?.contact1}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-5 md:p-0 flex flex-col">
                  <h1 className="md:text-3xl text-2xl font-bold mb-1">
                    Biography
                  </h1>
                  <p className="md:text-xl text-justify tracking-tighter text-gray-900">
                    {StaffsSect[value]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Link
                className="inline-flex w-full justify-center rounded-3xl bg-red-600 px-6 py-2 md:text-xl font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Link>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
