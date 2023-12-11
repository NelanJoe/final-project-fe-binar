import Logo from "@/assets/images/logo.png";
import { AlignJustify as HamburgerIcon, X as CloseIcon } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex h-screen">
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen bg-dark-blue text-white transition-transform duration-300 ease-in-out sm:static sm:translate-x-0`}
      >
        <div className="h-full py-4 overflow-y-auto">
          <Link to={"/admin-dashboard"}>
            <img src={Logo} alt="Logo" className="w-32 mx-auto" />
          </Link>
          <ul className="mt-8 space-y-2 font-medium">
            <li>
              <Link
                to="/admin-dashboard"
                className="block px-4 py-2 text-white hover:bg-soft-blue"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin-kelola-kelas"
                className="block px-4 py-2 text-white hover:bg-soft-blue"
              >
                Kelola Kelas
              </Link>
            </li>
            <li>
              <Link
                to="/admin-login"
                className="block px-4 py-2 text-white hover:bg-soft-blue"
              >
                Keluar
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-1 overflow-y-auto">
        <nav className="flex items-center justify-between p-4 bg-gray-900">
          
          <div className="md:hidden">
            {isOpen ? (
              <button onClick={toggleNavbar} aria-label="Close Menu">
                <CloseIcon className="w-6 h-6 text-white" />
              </button>
            ) : (
              <button onClick={toggleNavbar} aria-label="Open Menu">
                <HamburgerIcon className="w-6 h-6 text-white" />
              </button>
            )}
          </div>
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              to="/admin-dashboard"
              className="text-white hover:text-gray-300"
            >
              Dashboard
            </Link>
            <Link
              to="/admin-kelola-kelas"
              className="text-white hover:text-gray-300"
            >
              Kelola Kelas
            </Link>
            <Link to="/admin-login" className="text-white hover:text-gray-300">
              Keluar
            </Link>
          </div>
        </nav>

        <div className="p-4">{children}</div>
      </div>
    </main>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
