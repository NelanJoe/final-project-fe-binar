import MenuProfil from "@/components/common/menu-profile";
import ModalProfile from "@/components/common/modal-profil";
import ProfilTransactionsHistory from "../components/profile-transactions-history";

export default function PaymentHistory() {
  return (
    <>
      <ModalProfile title="Akun">
        <MenuProfil></MenuProfil>
        <ProfilTransactionsHistory></ProfilTransactionsHistory>
      </ModalProfile>
    </>
  );
}
