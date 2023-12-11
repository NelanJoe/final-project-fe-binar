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
    <main>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-dark-blue">
          <Link to={"/admin-dashboard"}>
            <img src={Logo} />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin-dashboard"
                className="flex items-center p-2 text-white hover:bg-soft-blue group"
              >
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin-kelola-kelas"
                className="flex items-center p-2 text-white hover:bg-soft-blue group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Kelola Kelas
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin-login"
                className="flex items-center p-2 text-white hover:bg-soft-blue group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Keluar</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </main>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
