// import React from "react
import MenuProfil from "@/components/common/menu-profile";
import ModalProfile from "@/components/common/modal-profil";
import AccountProfile from "../components/account-profile";

export default function Profile() {
  return (
    <>
      <ModalProfile>
        <MenuProfil></MenuProfil>
        <AccountProfile></AccountProfile>
      </ModalProfile>
    </>
  );
}
