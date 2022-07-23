import "../styles.scss";

function Button({ content, color }) {
  console.log(typeof color, color, content);
  const divColor = color.toString();
  return (
    <div
      className="button-container"
      onClick={() => {
        console.log("clicked");
      }}
    >
      <div style={{ backgroundColor: divColor }} className="btn">
        {content}
      </div>
    </div>
  );
}

export default Button;
