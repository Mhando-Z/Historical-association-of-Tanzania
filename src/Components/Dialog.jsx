import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import HomePageContext from "../Context/HomePageContext";
import { Link } from "react-router-dom";

export default function Dialogue({ value, open, setOpen }) {
  const { StaffsSect } = useContext(HomePageContext);

  // image url
  const IMAGE_BASE_URL = "https://hat-dashboard.onrender.com";

  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 overflow-y-auto md:top-32 lg:top-24 xl:top-28">
        <div className="flex items-end justify-center text-center sm:items-center">
          <DialogPanel
            transition
            className="relative transform max-w-6xl mt-36 overflow-hidden rounded-3xl bg-white text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-slate-100 h-[700px] overflow-y-auto md:p-8 px-2">
              <div className="flex flex-col sm:flex sm:items-start gap-y-4">
                <div className="flex flex-col w-full overflow-hidden aspect-h-1 md:flex-row gap-x-14 aspect-w-1 rounded-3xl xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    // src={`${IMAGE_BASE_URL}${StaffsSect[value]?.image}`}
                    src={`${StaffsSect[value]?.image_url}`}
                    alt={StaffsSect[value]?.name}
                    className="h-[400px] object-cover object-center group-hover:opacity-75"
                  />
                  <div className="flex flex-col items-center justify-center mt-2 md:gap-y-3 gap-y-1 md:mt-0 md:justify-normal md:items-start">
                    <DialogTitle
                      as="h1"
                      className="max-w-lg text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl xl:text-5xl"
                    >
                      {StaffsSect[value]?.name}
                    </DialogTitle>
                    <h1 className="text-xl font-bold sm:text-2xl md:text-3xl ">
                      {StaffsSect[value]?.position}
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-base font-semibold sm:text-lg font-roboto md:text-xl">
                        Contacts
                      </h1>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left table-auto">
                          <tbody>
                            <tr className="items-center border-b">
                              <td className="py-2 text-base font-medium sm:text-lg md:text-xl">
                                Phone:
                              </td>
                              <td className="py-2 ">
                                {StaffsSect[value]?.contact2}
                              </td>
                            </tr>
                            <tr className="items-center border-b">
                              <td className="py-2 text-base font-medium sm:text-lg md:text-xl">
                                Email:
                              </td>
                              <td className="py-2 text-blue-800 ">
                                {StaffsSect[value]?.contact1}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-5 mt-3 md:p-0">
                  <h1 className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl">
                    Biography
                  </h1>
                  <p className="leading-normal text-gray-900 md:text-justify ">
                    {StaffsSect[value]?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
              <Link
                className="inline-flex text-xs sm:text-sm md:text-base justify-center w-full px-4 py-1.5 md:py-2 font-semibold text-white bg-red-600 rounded-3xl hover:bg-red-500 sm:ml-3 sm:w-auto"
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
