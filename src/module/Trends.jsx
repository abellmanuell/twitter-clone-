import React from "react";
import { trends } from "./trends";

export default function Trends() {
  return (
    <aside className="md:ml-4 md:mr-5 md:flex-shrink-0 lg:w-96 h-screen px-1">
      <div className=" my-1">
        <section>
          <input
            type="search"
            name=""
            id=""
            className="rounded-full w-full bg-neutral-100 py-2 px-14 outline-none text-md"
            placeholder="Search Twitter"
          />
        </section>
      </div>

      <div className="my-5 bg-neutral-100 rounded-lg px-3 py-4">
        <h1 className="font-extrabold text-xl my-2">Trends for you</h1>
        {trends.map((trend) => {
          const { id, trend_name, topic, tweet } = trend;
          return (
            <div
              key={id}
              className="leading-8 hover:bg-neutral-200 p-2 rounded-md cursor-pointer"
            >
              <p className="text-sm text-neutral-500">{trend_name}</p>
              <h1>
                <b>{topic}</b>
              </h1>
              <p className="text-sm text-neutral-500">{tweet} Tweet</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
