import { useState } from "react";
import { Link } from "react-router-dom";

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
  const token = useSelector(selectedToken);
  const [isShow, setIsShow] = useState(false);

  const onToggle = () => setIsShow(!isShow);

  return (
    <header className="sticky top-0 z-30 px-4 py-6 border-b bg-dark-blue md:px-0 border-b-gray-300">
      <nav className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center w-full gap-x-2 md:w-1/2">
          <Link to="/" className="text-white">
            <img src={Logo} alt="logo" className="object-cover w-32 md:w-52" />
          </Link>
          <div className="hidden w-full md:block">
            <SearchForm />
          </div>
        </div>
        <div className="hidden md:block">
          {!token ? (
            <div className="flex text-lg gap-x-2">
              <span>
                <LoginIcon className="w-6 h-6 text-white" />
              </span>
              <Link to="/login" className="text-white">
                Masuk
              </Link>
            </div>
          ) : (
            <div className="flex items-center text-lg gap-x-2">
              <Link to="/courses">
                <button className="flex items-center px-2 py-1 text-white rounded-md gap-x-1 bg-soft-blue">
                  <span>
                    <ListIcon />
                  </span>
                  Kelas
                </button>
              </Link>
              <Link to="/notification">
                <NotifIcon className="text-white" />
              </Link>
              <Link to="/profile">
                <UserIcon className="text-white" />
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
              <div className="flex text-lg gap-x-2">
                <LoginIcon className="w-6 h-6 text-white" />
                <span>Masuk</span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center text-lg gap-x-2">
              <Link to="/courses">
                <button className="flex items-center px-2 py-1 text-white rounded-md gap-x-1 bg-soft-blue">
                  <span>
                    <ListIcon />
                  </span>
                  Kelas
                </button>
              </Link>
              <Link to="/notification">
                <NotifIcon className="text-white" />
              </Link>
              <Link to="/profile">
                <UserIcon className="text-white" />
              </Link>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
};

export default Header;
