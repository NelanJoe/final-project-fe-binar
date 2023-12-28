import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  PencilLineIcon,
  SettingsIcon,
  ShoppingCartIcon,
  LogOutIcon,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "@/stores/auth/auth.slice";

const ProfileNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActive = (path) => {
    return path === pathname;
  };

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <nav className="flex flex-col w-full">
      <Link to="/profile">
        <button className="w-full bg-white border-b">
          <div className="flex flex-row items-center gap-4 px-4 py-2 text-base lg:text-lg">
            <PencilLineIcon
              className={`text-dark-blue ${isActive("/profile") && "w-7 h-7"}`}
            />
            <span
              className={`${isActive("/profile") && "text-xl text-dark-blue"}`}
            >
              Profile
            </span>
          </div>
        </button>
      </Link>

      <Link to="/change-password">
        <button className="w-full bg-white border-b">
          <div className="flex flex-row items-center gap-4 px-4 py-2 text-base lg:text-lg">
            <SettingsIcon
              className={`text-dark-blue ${
                isActive("/change-password") && "w-7 h-7"
              }`}
            />
            <span
              className={`${
                isActive("/change-password") && "text-xl text-dark-blue"
              }`}
            >
              Ubah Password
            </span>
          </div>
        </button>
      </Link>

      <Link to="/payment-history">
        <button className="w-full bg-white border-b">
          <div className="flex flex-row items-center gap-4 px-4 py-2 text-base lg:text-lg">
            <ShoppingCartIcon
              className={`text-dark-blue ${
                isActive("/payment-history") && "w-7 h-7"
              }`}
            />
            <span
              className={`${
                isActive("/payment-history") && "text-xl text-dark-blue"
              }`}
            >
              Riwayat Pembayaran
            </span>
          </div>
        </button>
      </Link>

      <button onClick={handleLogout} className="w-full bg-white border-b">
        <div className="flex flex-row items-center gap-4 px-4 py-2 text-base lg:text-lg">
          <LogOutIcon className="text-dark-blue" />
          <span>Keluar</span>
        </div>
      </button>
    </nav>
  );
};

export default ProfileNavigation;
