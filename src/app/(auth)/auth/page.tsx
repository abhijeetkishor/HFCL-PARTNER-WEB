import Link from "next/link";
import React from "react";
import "../../../styles/auth/auth.scss";
import logo from "../../../../public/image/logo/logo.png";
import Image from "next/image";
export default function page() {
  return (
    <>
      <section className="AuthScreen">
        <div className="hfcl_main_Card">
          <div className="logo">
            <Image
              src={logo}
              width={300}
              height={140}
              alt="HFCL Partner Logo"
            ></Image>
          </div>
          <div className="hfcl_title">Want to login with?</div>
          <div className="hfcl_description">
            By Continuing you accept <a href="#">T&C</a> and{" "}
            <a href="#">Privacy Policy</a>
          </div>
          <div className="auth_buttns_main">
            <Link href={"/login"} className="hfcl_button_com">
              Partner Login
            </Link>
            <Link href={"/"} className="hfcl_button_com light">
              Associate Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
