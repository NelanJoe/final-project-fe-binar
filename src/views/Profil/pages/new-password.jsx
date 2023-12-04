// import React from "react
import ModalProfile from "@/components/common/modal-profil";
import MenuProfil from "@/components/common/menu-profile";
import ChangePassword from "../components/change-password";
export default function Newpassword() {
  return (
    <>
      <ModalProfile>
        <MenuProfil></MenuProfil>
        <ChangePassword></ChangePassword>
      </ModalProfile>
    </>
  );
}
