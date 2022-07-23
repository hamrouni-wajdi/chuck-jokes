import "../styles.scss";
import test from "../images/test.png";

function Joke({ title, body }) {
  return (
    <div className="joke" >
      <div className="joke-title-container">
        <img className="joke-title-img" src={test} />
        <h2 className="joke-title">{title}</h2>
      </div>
      <p className="joke-body">{body}</p>
    </div>
  );
}

export default Joke;
