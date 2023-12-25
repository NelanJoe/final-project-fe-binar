import { GithubIcon } from "lucide-react";

import Logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-blue mt-36">
      <section className="py-10 mx-4 max-w-7xl md:mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <img src={Logo} className="w-[200px]" />
          <div>
            <ul className="flex flex-row items-center justify-between space-x-8">
              <li className="text-white">
                <a href="">Home</a>
              </li>
              <li className="text-white">About</li>
              <li className="text-white">Blog</li>
              <li className="text-white">Contact</li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-8">
          <hr className="text-white " />
        </div>
        <div className="flex items-center justify-between mt-6 text-white">
          <p>&copy; {new Date().getFullYear()}</p>
          <ul>
            <li>
              <a href="/" target="_blank">
                <GithubIcon className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
