import "../styles.scss";

function Button({ content }) {
  return (
    <div className="button-container">
      <div className="btn">{content}</div>
    </div>
  );
}

export default Button;
