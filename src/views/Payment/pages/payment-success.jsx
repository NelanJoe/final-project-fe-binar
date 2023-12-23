import { Link, useNavigate, useParams } from "react-router-dom";

import BaseLayout from "@/layouts/base.layout";

import CartShop from "@/assets/images/cart-shop.png";

const PaymentSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleMulaiBelajar = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <BaseLayout>
      <main className="min-h-screen">
        <section className="bg-light-blue shadow-md">
          <div className="max-w-7xl mx-4 md:mx-auto py-6">
            <div className="my-10">
              <div className="block mx-auto md:max-w-4xl bg-success py-3 rounded-2xl">
                <h2 className="text-white text-md lg:text-xl text-center font-semibold">
                  Terimakasih atas pembayaran transaksi
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-4 md:mx-auto h-screen grid place-content-center">
          <div className="flex flex-col justify-center items-center space-y-8">
            <h2 className="text-4xl text-dark-blue font-semibold">Selamat!</h2>
            <div className="my-12">
              <img
                src={CartShop}
                alt="cart-shop"
                className="w-60 h-60 object-cover"
              />
            </div>
            <div className="flex flex-col items-center space-y-1 mb-8">
              <h3 className="font-semibold text-sm lg:text-base">
                Transaksi pembayaran kelas premium berhasil!
              </h3>
              <p>E-receipt telah dikirimkan ke email.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleMulaiBelajar}
                className="px-12 py-1.5 rounded-full text-white font-semibold bg-dark-blue "
              >
                Mulai Belajar
              </button>
              <Link to="/" className="font-semibold text-soft-blue">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </section>
      </main>
    </BaseLayout>
  );
};

export default PaymentSuccess;
