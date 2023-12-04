import googleLogo from '@/assets/images/google.svg'
import PropTypes from "prop-types"

const GoogleLogin = ({buttonText}) => {
  return (
    <button className="flex items-center justify-center w-full gap-1 px-3 py-2 mb-4 text-sm text-white duration-75 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none lg:text-base rounded-2xl">
      <img src={googleLogo} alt="logo google" />
      {buttonText}
    </button>
  );
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
}

export default GoogleLogin
