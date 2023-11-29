import { useState } from "react";
import OtpInput from "react-otp-input";
import btnBack from "@/assets/images/btn-back.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { otpVerification } from "@/stores/auth/authActions";

const OtpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validasi, setValidasi] = useState("");
  
  console.log(validasi);
  const onSubmit = async (event) => {
    event.preventDefault();

    dispatch(otpVerification(validasi, navigate))
  }

  return (
    <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl">
        <Link to="/register">
          <img src={btnBack} alt="btn" className="mb-6" />
        </Link>
        <form className="px-8 relative pt-6 pb-8 mb-4 w-[460px]" onSubmit={onSubmit}>
          <h1 className="text-2xl md:text-3xl xl:text-4xl mb-20 font-bold leading-9 text-[#6148FF]">
            Masukan OTP
          </h1>
          <div className="flex justify-center">
            <p className="block my-8 text-center top-16 w-full absolute text-[#3C3C3C] text-sm font-normal leading-4 lg:text-base">
              Ketik 6 digit kode yang dikirimkan ke{" "}
              <span className="font-bold">Email Anda</span>
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
                margin: "0 1rem",
                border: ".1rem solid #6148FF",
                borderRadius: "40%",
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-16 duration-75 bg-[#6148FF] text-white hover:bg-[#4532bd] focus:ring-4 focus:outline-none lg:text-base rounded-2xl text-sm px-3 py-2 flex items-center justify-center gap-1"
          >
            Simpan
          </button>
        </form>
      </div>
    </section>
  );
};

export default OtpForm;