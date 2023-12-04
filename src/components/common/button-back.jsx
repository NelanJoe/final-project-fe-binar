// import React from "react";
import { MoveLeft } from "lucide-react";

export default function ButtonBack() {
  return (
    <>
      <div className=" w-full flex justify-start  font-Montserrat text-base font-bold mt-16">
        <section className="flex items-center">
          <MoveLeft color="#6148FF" />
          <a className="text-darkblue" href="courses">
            Kembali Keberanda
          </a>
        </section>
      </div>
    </>
  );
}
