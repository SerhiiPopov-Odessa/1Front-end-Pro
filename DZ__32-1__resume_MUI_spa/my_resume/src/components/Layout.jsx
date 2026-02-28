import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import clsx from "clsx";

const Layout = () => {
  return (
    <div className="flex flex-col sm:flex-row  p-4 max-sm:space-y-2 sm:space-x-2 sm:h-screen">
      <aside className="sm:w-2/5 xl:w-2/8  p-4 rounded-lg bg-[rgb(22,56,83)] text-[#FFFFFF] ">
        <Header />
        <Navigation />
      </aside>

      <main className="sm:w-3/5 xl:w-6/8  border-[rgb(22,56,83)] border-2 rounded-lg  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
