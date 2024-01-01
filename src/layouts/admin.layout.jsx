import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

import { AlignJustify as HamburgerIcon, X as CloseIcon } from "lucide-react";
import { logout } from "@/stores/auth/auth.slice";

import Logo from "@/assets/images/logo.png";
import { Helmet } from "react-helmet-async";

const AdminLayout = ({ children, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const path = window.location.pathname;
  const pathName = path.split("/").slice(1);

  const dynamicTitle = title || pathName.join(" | ");

  const cleanTitle = dynamicTitle.replace(/-/g, " ");

  const capitalizedTitle = cleanTitle.replace(/\b[a-z]/g, (match) =>
    match.toUpperCase()
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {
    dispatch(logout());

    navigate("/admin-login");
  };

  return (
    <>
      <Helmet>
        <title>{capitalizedTitle}</title>
      </Helmet>
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
              <img
                src={Logo}
                alt="Logo"
                className="hidden pb-5 w-60 ps-5 sm:block"
              />
            </Link>

            {/* Menu */}
            <ul className="font-medium pt-14 sm:pt-0">
              <li>
                <Link
                  to="/admin-dashboard"
                  className="flex items-center justify-center p-2 text-white hover:bg-soft-blue group"
                >
                  <span className="text-xl font-medium ms-3">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <details className="w-full text-center collapse collapse-arrow">
                  <summary className="text-xl font-medium text-white collapse-title">
                    Kelola Kelas mu
                  </summary>
                  <div className="collapse-content">
                    <Link
                      to="/admin-kelola-kelas"
                      className="flex items-center p-2 text-white hover:bg-soft-blue group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Kelola Kelas
                      </span>
                    </Link>
                    <Link
                      to="/my-class"
                      className="flex items-center p-2 text-white hover:bg-soft-blue group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        My Class
                      </span>
                    </Link>
                  </div>
                </details>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="w-full p-2 text-xl font-medium text-white hover:bg-soft-blue ps-5 whitespace-nowrap"
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
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default AdminLayout;
