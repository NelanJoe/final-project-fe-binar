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
<<<<<<< HEAD
          {!token ? (
=======
          {userInfo ? (
>>>>>>> a6dbc13273294f05fb8fa37c457dbf51cf3d23cb
            <div className="flex gap-x-2 text-lg">
              <span>
                <LoginIcon className="w-6 h-6 text-white" />
              </span>
              <Link to="/login" className="text-white">
                Masuk
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-2 text-lg">
<<<<<<< HEAD
              <Link to="/courses">
=======
              <Link>
>>>>>>> a6dbc13273294f05fb8fa37c457dbf51cf3d23cb
                <button className="flex items-center gap-x-1 bg-soft-blue px-2 py-1 rounded-md text-white">
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
<<<<<<< HEAD
          {!token ? (
=======
          {!userInfo ? (
>>>>>>> a6dbc13273294f05fb8fa37c457dbf51cf3d23cb
            <Link to="/login" className="text-white cursor-pointer">
              <div className="flex gap-x-2 text-lg">
                <LoginIcon className="w-6 h-6 text-white" />
                <span>Masuk</span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-x-2 text-lg">
<<<<<<< HEAD
              <Link to="/courses">
=======
              <Link>
>>>>>>> a6dbc13273294f05fb8fa37c457dbf51cf3d23cb
                <button className="flex items-center gap-x-1 bg-soft-blue px-2 py-1 rounded-md text-white">
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
