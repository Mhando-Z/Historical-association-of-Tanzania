import { useContext } from "react";
import { Link } from "react-router-dom";
import HomePageContext from "../Context/HomePageContext";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Announcements() {
  const { AnnounceSect } = useContext(HomePageContext);
  return (
    <div className="mt-28 mb-20">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Announcements
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mt-10 gap-y-16 border-t  border-gray-200">
          {AnnounceSect?.map((post) => (
            <article
              key={post.id}
              className="flex flex-col mt-5 gap-x-10 md:flex-row items-start justify-between"
            >
              <img
                src={`http://127.0.0.1:8000/${post.image}`}
                alt={post.title}
                loading="lazy"
                className="h-[200px] max-w-screen rounded-3xl hover:grayscale transition-all duration-500 ease-in object-cover object-center"
              />

              {/* <div className="w-[270px] rounded-3xl bg-black h-[230px]"></div> */}
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.dateIssued} className="text-gray-500">
                    {post.dateIssued}
                  </time>
                  <Link
                    href={""}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Announcement
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 xl:text-xl text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={""}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <div className="flex w-full justify-end mt-2 items-end">
                    <Link className="px-5 py-2 mt-2 hover:ring-2 hover:ring-black hover:bg-opacity-0 hover:text-black font-medium rounded-3xl bg-[#b67a3d] text-white">
                      ReadMore
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
