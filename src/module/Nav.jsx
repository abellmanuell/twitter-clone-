import { Link } from "react-router-dom";

// Icons
import { FaTwitter } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { RiHome7Fill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";

import pfp from "../assets/pfp.jpg";

export default function Nav() {
  return (
    <nav className="flex-shrink-0 lg:w-80 h-screen px-1">
      <div className="md:ml-14">
        <div className="flex flex-col items-start">
          <Link
            to="#"
            className="p-3 rounded-full hover:bg-blue-50  inline-flex justify-center items-center space-x-2"
          >
            <FaTwitter className="text-3xl text-blue-500" />
          </Link>

          <Link to="#" className="nav-bar">
            <RiHome7Fill className="text-2xl" />
            <div className="font-bold text-xl pr-3">Home</div>
          </Link>

          <Link to="#" className="nav-bar">
            <HiHashtag className="text-2xl" />
            <div className="text-xl pr-3">Explore</div>
          </Link>

          <Link to="#" className="nav-bar">
            <div className="relative">
              <span className=" left-0 -top-1 absolute text-white h-4 w-4 text-center text-xs rounded-full bg-blue-500">
                2
              </span>
              <GrNotification className="text-2xl" />
            </div>
            <div className="text-xl pr-3">Notifications</div>
          </Link>

          <Link to="#" className="nav-bar">
            <FiMail className="text-2xl" />
            <div className="text-xl pr-3">Messages</div>
          </Link>

          <Link to="#" className="nav-bar">
            <FaRegBookmark className="text-2xl" />
            <div className="text-xl pr-3">Bookmarks</div>
          </Link>

          <Link to="#" className="nav-bar">
            <GrNotification className="text-2xl" />
            <div className="text-xl pr-3">Twitter Blue</div>
          </Link>

          <Link to="#" className="nav-bar">
            <HiOutlineUser className="text-2xl" />
            <div className="text-xl pr-3">Profile</div>
          </Link>

          <Link to="#" className="nav-bar">
            <CiCircleMore className="text-2xl" />
            <div className="text-xl pr-3">More</div>
          </Link>

          <Link
            to="#"
            className="p-3 bg-blue-400 w-full mt-2 text-white rounded-full hover:bg-blue-500"
          >
            <div className="text-base pr-3 text-center font-bold ">Tweet</div>
          </Link>
        </div>

        <section className="mt-4 flex items-center space-x-4 cursor-pointer hover:bg-neutral-100 rounded-full p-3">
          <div>
            <img
              src={pfp}
              alt="Abel Emmanuel"
              className="h-10 w-10 object-cover rounded-full"
            />
          </div>
          <div className="leading-4">
            <h4>
              <b>Abel Emmanuel</b>
            </h4>
            <span className="text-sm text-neutral-500">@akolecze</span>
          </div>
        </section>
      </div>
    </nav>
  );
}
