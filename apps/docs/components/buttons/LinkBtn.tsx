type Props = {
  link: string;
  btnText: string;
};

const LinkBtn = (props: Props) => {
  return (
    <a href={props.link}>
      <button
        style={{
          opacity: "0.7",
          background: "#3B3285",
          borderRadius: "5px",
          padding: "1px 18px",
          color: "white",
          border: "solid #2A0A6D  2px",
          margin: "10px 0 0 0 ",
        }}
      >
        {props.btnText} →
      </button>
    </a>
  );
};

export default LinkBtn;
