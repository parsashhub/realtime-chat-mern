import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-4 min-h-screen flex">
      <Outlet />
    </div>
  );
};

export default Layout;
