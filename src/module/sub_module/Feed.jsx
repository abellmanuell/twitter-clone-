import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiBarChart } from "react-icons/bi";
import { MdOutlineIosShare } from "react-icons/md";

export default function Feed({ feed_img }) {
  return (
    <div className="border-b-[0.5px]">
      <section className="flex space-x-4 px-2">
        <div className="flex-shrink-0 relative">
          <span className="inline-block h-full w-[3px] absolute bg-gray-100 -z-10 left-[50%]"></span>
          <img
            className="h-12 w-12 mt-2 object-cover rounded-full"
            src={feed_img}
            alt=""
          />
        </div>
        <div className="py-2">
          <h1>
            <b>David Herbert</b>
            <span className="text-neutral-500">@DavyHert &#8226; Mar 21</span>
          </h1>
          <p className="text-base">
            A short thread on how to find thousands of startups on LinkedIn to
            apply to with just one keyword search.
            <br />
            <br />
            This is a follow-up to my previous thread on how to land internship
            roles as a newbie in tech, but this particular thread applies to
            everyone.
            <br />
            <br />
            RT for others.
          </p>
          <div>
            <ul className="flex space-x-8 items-center text-sm">
              <li className="space-x-3 py-1 text-neutral-500 cursor-pointer">
                <FaRegComment className="inline-block text-lg" />
                <span>227</span>
              </li>
              <li className="space-x-3 py-1 text-neutral-500 cursor-pointer">
                <FcLike className="inline-block text-lg" />
                <span>3,811</span>
              </li>
              <li className="space-x-3 py-1 text-neutral-500 cursor-pointer">
                <BiBarChart className="inline-block text-lg" />
                <span>333.9K</span>
              </li>
              <li className="space-x-3 py-1 text-neutral-500 cursor-pointer">
                <MdOutlineIosShare className="inline-block text-lg" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
