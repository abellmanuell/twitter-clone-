import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Trends from "./Trends";
export default function Layout() {
  useEffect(() => {
    document.title = `(${2}) Home / Twitter`;
  }, []);
  return (
    <>
      <div className="flex items-start">
        <Nav />
        <Outlet />
        <Trends />
      </div>
    </>
  );
}
