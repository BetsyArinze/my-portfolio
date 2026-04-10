import ArtPlum from "../components/ArtPlum";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <ArtPlum />
      <Header />
      <div className="layout">
        {!isHome && <SideNav />}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
