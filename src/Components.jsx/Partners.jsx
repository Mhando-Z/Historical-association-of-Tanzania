export default function Partners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="flex container mx-auto flex-col">
        <h2 className="text-6xl mb-12 font-bold leading-8 text-gray-900">
          Our Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
          />
          <img
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
          />
          <img
            className="col-span-2 max-h-14 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
          />
          <img
            className="col-span-2 max-h-14 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
          />
          <img
            className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
          />
        </div>
      </div>
    </div>
  );
}
