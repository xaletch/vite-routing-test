import { Outlet } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import "./styles/index.css";
// import { useGetUserInfoQuery } from "../redux/api/api";
// import { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";

function App() {
  // const isAuth = useAuth().isAuth;

  // const [isMenu, setMenu] = useState<boolean>(false);

  // const navbarRef = useRef<HTMLDivElement>(null);
  // const sidebarRef = useRef<HTMLDivElement>(null);

  // const collapse = () => {
  //   if (sidebarRef.current && navbarRef.current) {
  //     setMenu(true);
  //     console.log(true);
  //     navbarRef.current.style.width = "82px";
  //     sidebarRef.current.style.width = "calc(100% - 82px)";
  //     sidebarRef.current.style.transform = "translateX(82px)";
  //   }
  // };

  // const resetWidth = () => {
  //   if (sidebarRef.current && navbarRef.current) {
  //     setMenu(false);

  //     navbarRef.current.style.width = "200px";
  //     sidebarRef.current.style.width = "calc(100% - 200px)";
  //     sidebarRef.current.style.transform = "translateX(200px)";
  //   }
  // };

  // const { data: userInfo, isSuccess } = useGetUserInfoQuery(null);

  // useEffect(() => {
  //   if (userInfo && userInfo.data && isSuccess) {
  //     console.log(userInfo);
  //   }
  // }, [userInfo, isSuccess]);

  // if (!isAuth) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div>
          <Header />
        </div>
        <div className="content_inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
