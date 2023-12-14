import { useState } from "react";
import Logo from "@/assets/images/logo.png";
import { AlignJustify as HamburgerIcon, X as CloseIcon } from "lucide-react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/stores/auth/auth.slice";

const AdminLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {
    dispatch(logout());

    navigate("/admin-login");
  };

  return (
    <main>
      {/* Header with Hamburger Icon */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 text-white sm:p-0 sm:bg-inherit bg-dark-blue">
        <Link to={"/admin-dashboard"}>
          <img src={Logo} alt="Logo" width={160} className="sm:hidden" />
        </Link>
        <button
          onClick={toggleMenu}
          className="block text-2xl sm:hidden focus:outline-none"
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-dark-blue`}
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto">
          {/* Logo */}
          <Link to={"/admin-dashboard"}>
            <img src={Logo} alt="Logo" className="hidden sm:block" />
          </Link>

          {/* Menu */}
          <ul className="space-y-2 font-medium pt-14 sm:pt-0">
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
              <button
                onClick={onLogout}
                className="flex items-center w-full p-2 text-white hover:bg-soft-blue ps-5 whitespace-nowrap"
              >
                Keluar
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {/* Content */}
      {children}
    </main>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
