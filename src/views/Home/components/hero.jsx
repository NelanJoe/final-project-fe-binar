import { Link } from "react-router-dom";

import HeroImg from "@/assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="bg-dark-blue">
      <div className="flex flex-row">
        <div className="hidden md:block md:w-[60%]">
          <img src={HeroImg} alt="hero-img" className="w-full opacity-70" />
        </div>
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center py-20 px-10 md:py-0 md:px-0">
          <div className="w-full md:w-[280px] space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Belajar dari Praktisi Terbaik!
            </h2>
            <div>
              <Link to="/courses">
                <button className="w-full px-4 py-2 text-lg font-semibold uppercase bg-white rounded-lg text-dark-blue">
                  Ikuti Kelas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
