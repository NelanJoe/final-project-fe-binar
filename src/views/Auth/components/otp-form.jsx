import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ArrowLeftIcon } from "lucide-react";
import OtpInput from "react-otp-input";
import toast from "react-hot-toast";

import { useResendOtpMutation, useVerifyOtpMutation } from "@/stores";

import { setToken } from "@/stores/auth/auth.slice";

const OtpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verifyOtp] = useVerifyOtpMutation();
  const [resendOtp] = useResendOtpMutation();

  const verifyEmail = localStorage.getItem("verify-email");

  const [validasi, setValidasi] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [showResendButton, setShowResendButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setShowResendButton(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const sendOtpAgain = async () => {
    try {
      const res = await resendOtp({
        email: verifyEmail,
      }).unwrap();

      if (res.success) {
        toast.success("Mengirim ulang OTP...");
      }
    } catch (error) {
      toast.error(`Error: ${error?.error}`);
    }
  };

  const handleResendClick = () => {
    sendOtpAgain();
    setSeconds(60);
    setShowResendButton(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await verifyOtp({
        email: verifyEmail,
        validasiCode: validasi,
      }).unwrap();

      const token = res.data.token;

      if (token) {
        dispatch(setToken(token));

        localStorage.removeItem("verify-email");

        toast.success("Register Berhasil");
        navigate("/");
      }
    } catch (error) {
      toast.error(`Error: ${error?.data?.error}`);
    }
  };

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <Link to="/register">
          <button className="ms-4 lg:ms-0">
            <ArrowLeftIcon />
          </button>
        </Link>
        <form
          className="px-8 relative pt-6 pb-8 mb-4 w-[380px] lg:w-[460px]"
          onSubmit={onSubmit}
        >
          <h1 className="mb-20 text-2xl font-bold leading-9 md:text-3xl xl:text-4xl text-dark-blue">
            Masukan OTP
          </h1>
          <div className="flex justify-center">
            <p className="block my-8 text-center top-16 w-full absolute text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base">
              Ketik 6 digit kode yang dikirimkan ke{" "}
              <span className="font-bold ">{verifyEmail}</span>
            </p>
            <OtpInput
              value={validasi}
              onChange={(e) => setValidasi(e)}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputType="number"
              inputStyle={{
                width: "2.8rem",
                height: "2.8rem",
                margin: "0 .5rem",
                marginTop: ".7rem",
                border: ".1rem solid #6148FF",
                borderRadius: "40%",
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-1 py-4 text-lg text-center">
            {showResendButton ? (
              <button
                onClick={handleResendClick}
                className="text-[#3C3C3C] hover:text-indigo-600 hover:underline cursor-pointer"
              >
                Kirim Ulang OTP
              </button>
            ) : (
              <p className=" text-[#3C3C3C]">
                Kirim ulang OTP dalam{" "}
                <span className="text-indigo-600 ">{seconds} detik</span>
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full transition-all duration-150 ease-linear mt-6 bg-dark-blue text-white hover:bg-[#4532bd] focus:ring-4 focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
};

export default OtpForm;
