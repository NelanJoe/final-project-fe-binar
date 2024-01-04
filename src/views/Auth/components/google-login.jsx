import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import googleLogo from "@/assets/images/google.svg";

import { useGoogleLogin } from "@react-oauth/google";
import { useLoginGoogleMutation } from "@/stores";
import { setToken } from "@/stores/auth/auth.slice";
import toast from "react-hot-toast";

const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginGoogle] = useLoginGoogleMutation();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (responseGoogle) => {
      try {
        const res = await loginGoogle({
          accessToken: responseGoogle.access_token,
        }).unwrap();

        const token = res.data.token;
        dispatch(setToken(token));

        toast.success("Login Berhasil");

        navigate("/");
      } catch (error) {
        toast.error(`Error: ${error?.data?.error}`);
      }
    },
  });

  return (
    <button
      className="flex items-center justify-center w-full gap-1 px-3 py-[5px] mb-4 text-sm text-white duration-75 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none lg:text-base rounded-2xl"
      onClick={() => {
        loginWithGoogle();
      }}
    >
      <img src={googleLogo} alt="logo google" />
      {buttonText}
    </button>
  );
};

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};

export default GoogleLogin;
