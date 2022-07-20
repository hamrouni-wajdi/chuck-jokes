import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
import useAxiosPost from "./request";

function App() {
  return (
    <div>
      <header>
        <nav classname="nav">
          <a href="/html/"> SO FUNKTIONIERT's</a> |
          <a href="/css/">SONDERANGEBOTE</a>
          <select id="cars">
            <option value="none" selected disabled hidden>
              MEIN BEREICH
            </option>
            <option value="volvo">My publicshed jokes</option>
            <option value="saab">My saved jokes</option>
            <option value="opel">Account Informatio </option>
            <option value="audi">Publish New Joke</option>
          </select>
        </nav>
      </header>
      {/* {console.log(
        useAxiosPost(" https://api.chucknorris.io/jokes/search?query=all")
      )} */}
      <h1> hello</h1>
    </div>
  );
}

export default App;
