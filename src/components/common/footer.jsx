import { Link } from "react-router-dom";
import { GithubIcon, ArrowUpRight } from "lucide-react";

import Logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark-blue mt-36">
      <section className="py-10 mx-4 max-w-7xl lg:mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <div>
            <img src={Logo} className="w-[200px]" />
          </div>
          <div className="space-y-2">
            <p className="text-center text-white">
              Dimana ada cinta yang besar, maka di situ ada prestasi yang besar
              pula. Banyak pekerjaan besar dari suatu tindakan, penemuan,
              keberhasilan, dan kerajaan, berasal dari cinta. -{" "}
              <span className="italic font-semibold">
                Jonathan Saturu (Penulis buku The Power Of Success)
              </span>
            </p>
            <p className="text-center text-white ">
              {`Kami kenyang makan error`}{" "}
              <span className="italic font-semibold">~ Komang (BEJS 2)</span>
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="font-semibold text-center text-white">Our Team</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-3">
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/jonathanqwerty"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/jonathanqwerty"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Jonathan</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/Jhonitay"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/Jhonitay"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Komang</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/Yoga838"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/Yoga838"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Ahmad</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/Rezahans"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/Rezahans"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Reza Hans</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/NelanJoe"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/NelanJoe"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Nelan</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/Azzaxy1"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/Azzaxy1"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Azis</p>
                </div>
              </Link>
              <Link
                className="transition-all duration-200 ease-in-out hover:transform hover:-translate-y-1"
                to="https://github.com/KevinMarpaung"
                target="_blank"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://avatars.githubusercontent.com/KevinMarpaung"
                    className="w-16 h-16 border-4 border-white rounded-full"
                  />
                  <p className="text-white">Kevin</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <hr className="text-white" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 mx-4 mt-6 text-white lg:flex-row lg:mx-auto">
          <p className="text-center">&copy; {new Date().getFullYear()}</p>
          <div>
            <p className="text-center text-white">
              Made with ❤️ and ☕ by Team B16 (Backend Frontend)
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              to="https://github.com/NelanJoe/final-project-fe-binar"
              target="_blank"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex gap-1">
                  <GithubIcon className="w-5 h-5" />
                  <span>Frontend</span>
                </div>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
            <Link
              target="_blank"
              to="https://github.com/jonathanqwerty/FINAL-PROJECT-KM5-B16"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex gap-1">
                  <GithubIcon className="w-5 h-5" />
                  <span>Backend</span>
                </div>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
