import HeroImg from "@/assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="bg-[#6148FF]">
      <div className="flex flex-row">
        <div className="hidden md:block md:w-[60%]">
          <img src={HeroImg} alt="hero-img" className="w-full opacity-70" />
        </div>
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center py-20 px-10 md:py-0 md:px-0">
          <div className="w-full md:w-[280px] space-y-2">
            <h2 className="text-white font-semibold text-2xl">
              Belajar dari Praktisi Terbaik!
            </h2>
            <button className="w-full px-4 py-2 rounded-lg bg-white text-[#6148FF] uppercase text-lg font-semibold">
              Ikuti Kelas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
