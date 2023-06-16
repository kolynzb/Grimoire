/* eslint-disable @next/next/no-img-element */
"use client";

import "./styles.module.css";

export const Logo = () => {
  return (
    <span className="logo">
      <img
        src="https://github.com/kolynzb/Grimoire/raw/main/assets/logo.png"
        style={{
          height: "40px",
        }}
        alt="grimoire"
        width={40}
        height={40}
      />
      <p
        style={{
          fontSize: "25px",
        }}
      >
        Grimoire
      </p>
    </span>
  );
};
