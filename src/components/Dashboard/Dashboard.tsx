import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";

export default function Dashboard() {
  const [isMenu, setMenu] = useState<boolean>(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setMenu(true);
      console.log(true);
      navbarRef.current.style.width = "82px";
      sidebarRef.current.style.width = "calc(100% - 82px)";
      sidebarRef.current.style.transform = "translateX(82px)";
    }
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setMenu(false);

      navbarRef.current.style.width = "200px";
      sidebarRef.current.style.width = "calc(100% - 200px)";
      sidebarRef.current.style.transform = "translateX(200px)";
    }
  };

  return (
    <div className="app">
      <Navbar
        collapse={collapse}
        resetWidth={resetWidth}
        navbarRef={navbarRef}
        isMenu={isMenu}
      />
      <div className="content" ref={sidebarRef}>
        <Header />
        <div className="content_inner" id="detail">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
