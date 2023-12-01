import { useState } from "react";
import { Link } from "react-router-dom";

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

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const onToggle = () => setIsShow(!isShow);

  const userInfo = true;

  return (
    <header className="bg-[#6148FF] py-6 px-4 md:px-0 border-b border-b-gray-300 sticky z-30 top-0">
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
          {userInfo ? (
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
              <Link>
                <button className="flex items-center gap-x-1 bg-[#489CFF] px-2 py-1 rounded-md text-white">
                  <span>
                    <ListIcon />
                  </span>
                  Kelas
                </button>
              </Link>
              <Link>
                <NotifIcon className="text-white" />
              </Link>
              <Link>
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
          {!userInfo ? (
            <Link to="/login" className="text-white cursor-pointer">
              <div className="flex gap-x-2 text-lg">
                <LoginIcon className="w-6 h-6 text-white" />
                <span>Masuk</span>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-x-2 text-lg">
              <Link>
                <button className="flex items-center gap-x-1 bg-[#489CFF] px-2 py-1 rounded-md text-white">
                  <span>
                    <ListIcon />
                  </span>
                  Kelas
                </button>
              </Link>
              <Link>
                <NotifIcon className="text-white" />
              </Link>
              <Link>
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
