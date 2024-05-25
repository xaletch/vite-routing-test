import { Outlet } from "react-router-dom";
import { Header } from "./routComponents/Header";
import { Navbar } from "./routComponents/Navbar";

function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <div className="header">
          <Header />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
