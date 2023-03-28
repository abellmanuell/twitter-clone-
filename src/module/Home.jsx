import React from "react";
import Tweet from "./sub_module/Tweet";
import Feed from "./sub_module/Feed";

// Feed image
import feed_img from "../assets/5d96629bd777c.png";
import feed_img1 from "../assets/5d9c77e2a939c.png";
import feed_img2 from "../assets/5eaf60327b630.png";
import feed_img3 from "../assets/5ebd4b78eda28.png";

export default function Home() {
  return (
    <main className="md:flex-grow border-x-[0.5px] border-blue-100 h-screen overflow-x-auto">
      <div className=" border-b-[0.5px] border-blue-100">
        <h1 className="p-4 text-lg font-bold">Home</h1>

        <div className="flex justify-around font-bold text-sm">
          <h3 className="border-b-4 rounded-sm py-3 border-blue-500">
            For you
          </h3>
          <h3 className="text-neutral-400 py-3 cursor-pointer">Following</h3>
        </div>
      </div>

      <Tweet />

      <Feed feed_img={feed_img} />
      <Feed feed_img={feed_img1} />
      <Feed feed_img={feed_img2} />
      <Feed feed_img={feed_img3} />
    </main>
  );
}
