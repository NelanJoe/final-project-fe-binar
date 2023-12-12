import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  LogIn as LoginIcon,
  AlignJustify as HumbergerIcon,
  X as CloseIcon,
  ListIcon,
  BellIcon as NotifIcon,
  UserIcon,
} from "lucide-react";

import SearchForm from "./search-form";
import Logo from "@/assets/images/logo.png";

import { selectedToken } from "@/stores/auth/auth.selector";

const Header = () => {
  const { pathname } = useLocation();

  const token = useSelector(selectedToken);
  const [isShow, setIsShow] = useState(false);

  const onToggle = () => setIsShow(!isShow);

  const isActive = (to) => {
    return pathname === to;
  };

  return (
    <header className="bg-dark-blue py-6 px-4 md:px-0 border-b border-b-gray-300 sticky z-30 top-0">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-x-2 w-full md:w-1/2">
          <Link to="/" className="text-white">
            <img src={Logo} alt="logo" className="w-32 md:w-52 object-cover" />
          </Link>
          <div className="hidden md:block w-full">
            <SearchForm />
          </div>
        </div>
        <div className="hidden md:block">
          {!token ? (
            <div className="flex gap-x-2 text-lg">
              <span>
                <LoginIcon className="w-6 h-6 text-white" />
              </span>
              <Link to="/login" className="text-white">
                Masuk
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-4 text-lg">
              <Link
                to="/courses"
                className={`text-white ${
                  isActive("/courses") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1.5 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/courses") ? (
                  <>
                    <ListIcon />
                    <span>Kelas</span>
                  </>
                ) : (
                  <ListIcon />
                )}
              </Link>
              <Link
                to="/notifikasi"
                className={`text-white ${
                  isActive("/notifikasi") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1.5 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/notifikasi") ? (
                  <>
                    <NotifIcon />
                    <span>Kelas</span>
                  </>
                ) : (
                  <NotifIcon />
                )}
              </Link>
              <Link
                to="/profile"
                className={`text-white ${
                  isActive("/profile") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1.5 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/profile") ? (
                  <>
                    <UserIcon />
                    <span>Profile</span>
                  </>
                ) : (
                  <UserIcon />
                )}
              </Link>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={onToggle}>
            {!isShow ? (
              <HumbergerIcon className="w-6 h-6 text-white" />
            ) : (
              <CloseIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>
      {isShow ? (
        <div className={`md:hidden flex flex-col items-center space-y-4 my-4`}>
          <div className="w-full">
            <SearchForm />
          </div>
          {!token ? (
            <Link to="/login" className="text-white cursor-pointer">
              <div className="flex gap-x-2 text-lg">
                <LoginIcon className="w-6 h-6 text-white" />
                <span>Masuk</span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-x-4 text-lg">
              <Link
                to="/courses"
                className={`text-white ${
                  isActive("/courses") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1.5 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/courses") ? (
                  <>
                    <ListIcon />
                    <span>Kelas</span>
                  </>
                ) : (
                  <ListIcon />
                )}
              </Link>
              <Link
                to="/notifikasi"
                className={`text-white ${
                  isActive("/notifikasi") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1.5 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/notifikasi") ? (
                  <>
                    <NotifIcon />
                    <span>Kelas</span>
                  </>
                ) : (
                  <NotifIcon />
                )}
              </Link>
              <Link
                to="/profile"
                className={`text-white ${
                  isActive("/profile") &&
                  "flex flex-row items-center gap-x-3 px-3 py-1 rounded-md bg-blue-500"
                }`}
              >
                {isActive("/profile") ? (
                  <>
                    <UserIcon />
                    <span>Profile</span>
                  </>
                ) : (
                  <UserIcon />
                )}
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
