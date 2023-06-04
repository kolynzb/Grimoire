import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const logo = (
  <span>
    <Image
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
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/kolynzb/Grimoire",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/kolynzb/Grimoire/tree/main/site",
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="grimoire home page"
            href="https://gri-moire.vercel.app"
          >
            {logo}
          </a>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Grimoire.</p>
      </div>
    ),
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};

export default config;
