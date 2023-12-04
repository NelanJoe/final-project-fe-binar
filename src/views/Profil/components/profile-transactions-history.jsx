// eslint-disable-next-line no-unused-vars

import CategoryHistory from "./categoryhistory";
function ProfilTransactionsHistory() {
  return (
    <section className=" text-2xl font-bold ">
      <div className=" ">
        <div className=" text-center">
          <h1>Riwayat Pembayaran</h1>
          <div className="md:flex justify-center items-center  ">
            <CategoryHistory></CategoryHistory>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilTransactionsHistory;
