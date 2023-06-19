/* eslint-disable @next/next/no-img-element */
"use client";

import "./styles.css";

interface LogoProps {
  showText: boolean;
}

export const Logo: React.FC<LogoProps> = ({ showText }) => {
  return (
    <span className="logo">
      <img
        src="https://github.com/kolynzb/Grimoire/raw/main/assets/logo.png"
        className="logo_img"
        alt="grimoire"
      />
      {showText && <p className="title">Grimoire</p>}
    </span>
  );
};

Logo.defaultProps = {
  showText: true,
};
