import { useContext } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";

export default function ImageDisplay({ value, open, setOpen }) {
  const { gallerySect } = useContext(HomePageContext);
  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10">
        <div className="flex items-end justify-center p-4 text-center sm:items-center">
          <DialogPanel
            transition
            className="relative transform max-w-6xl overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-slate-100 xl:h-[700px] h-[600px] py-2  px-2">
              <div className="flex sm:flex sm:items-start gap-y-4">
                <div className="aspect-h-1 flex w-full md:flex-row flex-col gap-x-14 aspect-w-1 overflow-hidden rounded-3xl xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`http://127.0.0.1:8000/${gallerySect[value]?.image}`}
                    alt={gallerySect[value]?.title}
                    className="h-auto object-cover object-center group-hover:opacity-75"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Link
                className="inline-flex w-full justify-center rounded-full  bg-red-800  font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                <RxCrossCircled className="text-4xl xl:text-4xl font-bold" />
              </Link>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
