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
    <BaseLayout title="Payment Success">
      <main className="min-h-screen">
        <section className="shadow-md bg-light-blue">
          <div className="py-6 mx-4 max-w-7xl md:mx-auto">
            <div className="my-10">
              <div className="block py-3 mx-auto md:max-w-4xl bg-success rounded-2xl">
                <h2 className="font-semibold text-center text-white text-md lg:text-xl">
                  Terimakasih atas pembayaran transaksi
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="grid h-screen mx-4 max-w-7xl md:mx-auto place-content-center">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h2 className="text-4xl font-semibold text-dark-blue">Selamat!</h2>
            <div className="my-12">
              <img
                src={CartShop}
                alt="cart-shop"
                className="object-cover w-60 h-60"
              />
            </div>
            <div className="flex flex-col items-center mb-8 space-y-1">
              <h3 className="text-sm font-semibold lg:text-base">
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
