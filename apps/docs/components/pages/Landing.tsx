import Image from "next/image";

type Props = {};

const LandingPage = (props: Props) => (
  <section
    style={{
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "50vh",
    }}
  >
    <Image
      style={{
        height: "100px",
        marginBottom: "20px",
      }}
      src="https://github.com/kolynzb/Grimoire/raw/main/assets/logo.png"
      alt="logo"
      height={100}
      width={100}
    />

    <h1
      style={{
        fontSize: "65px",
        textAlign: "center",
      }}
    >
      Grimoire
    </h1>
    <br />

    <p> Conjuring Visual Brilliance </p>
  </section>
);

export default LandingPage;
