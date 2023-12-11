import ButtonBack from "./button-back";
import Footer from "./footer";
import Header from "./header";

export default function ModalProfile(props) {
  const { title } = props;
  return (
    <>
      <Header></Header>
      <div>
        <section className="md:flex mx-4 justify-center items-center gap-6 rounded ">
          <div>
            <div className="hidden md:block md:max-w-7xl ">
              <ButtonBack></ButtonBack>
            </div>
            <div className=" border border-[#6148FF] rounded-xl  mt-7 ">
              <div className="bg-[#6148FF] flex justify-center p-6 rounded-t-xl  ">
                <h1 className="text-white font-Montserrat text-xl font-normal leading-3 ">
                  {title}
                </h1>
              </div>
              <div className=" md:flex  mx-4">{props.children}</div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
