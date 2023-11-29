import axios from "axios";
import { setToken } from "./auth.slice";
// import { toast } from "react-toastify";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
      {
        email,
        password,
      }
    );
    const { data } = response.data;
    const { token } = data;

    // Save our token
    dispatch(setToken(token));

    // Redirect to homepage
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.message);
      return;
    }

    alert(error?.message);
  }
};

export const registerAction =
  (data, navigate) => async () => {
    try {
      console.log(data);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register`,
        data
      );

      // Get the message from the response data
      console.log(response?.data)

      // Redirect to otp page with the message
      navigate("/otp");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error);
        return;
      }

      alert(error?.error);
    }
  };

export const otpVerification = (validasi, email, navigate) => async (dispatch) => {
  try {
    console.log(email);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/otp/${email}`,
      {
        validasi,
      }
    );

    const { data } = response.data;
    const { token } = data;

    // Save our token
    dispatch(setToken(token));

    // Redirect to homepage
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error?.response?.data?.error);
      return;
    }

    alert(error?.error);
  }
};
