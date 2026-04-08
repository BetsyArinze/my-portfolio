import ArtPlum from "../components/ArtPlum";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <ArtPlum />

      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
