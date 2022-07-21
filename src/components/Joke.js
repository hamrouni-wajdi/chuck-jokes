import "../styles.scss";
import test from "../images/test.png";

function Joke({ title, body }) {
  return (
    <div className="joke">
      <img src={test} />
      <h2 className="joke-title">{title}</h2>
      <p className="joke-body">{body}</p>
    </div>
  );
}

export default Joke;
