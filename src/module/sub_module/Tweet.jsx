import { Link } from "react-router-dom";
import pfp from "../../assets/pfp.jpg";
import { CgImage } from "react-icons/cg";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { TbCalendarTime } from "react-icons/tb";
import { TiWorld } from "react-icons/ti";

export default function Tweet() {
  return (
    <div className="border-b-[0.5px]">
      <section className="flex py-2 space-x-4 px-2">
        <div className="flex-shrink-0 ml-4">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src={pfp}
            alt=""
          />
        </div>
        <div>
          <div className="border-b-[0.5px] pt-1 pb-4">
            <Link
              className="text-sm py-[0.5px] px-6 inline-block rounded-full font-bold text-blue-500 border-[1px]"
              to={`#`}
            >
              Everyone
            </Link>

            <textarea
              className="block w-full resize-none outline-none text-lg my-3 placeholder:text-xl"
              name=""
              id=""
              cols="350"
              rows="2"
              placeholder="What's happening?"
            ></textarea>
            <Link
              className=" text-sm inline-flex items-center font-bold text-blue-500"
              to={`#`}
            >
              <TiWorld className="text-lg" /> Everyone can reply
            </Link>
          </div>

          <div className="flex justify-center items-center pt-2 ">
            <ul className="flex py-2 flex-grow text-xl space-x-6 text-blue-500">
              <li className="cursor-pointer">
                <CgImage />
              </li>
              <li className="cursor-pointer">
                <MdOutlineGifBox />
              </li>
              <li className="cursor-pointer">
                <BsEmojiSmile />
              </li>
              <li className="cursor-pointer">
                <TbCalendarTime />
              </li>
              <li className="cursor-pointer">
                <TfiLocationPin />
              </li>
            </ul>

            <button
              className="cursor-pointer inline-block flex-shrink-0 font-bold py-2 px-6 text-base rounded-full text-white disabled:bg-blue-200"
              disabled
              type="submit"
            >
              Tweet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
