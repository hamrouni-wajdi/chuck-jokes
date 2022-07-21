import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
import useAxiosPost from "./request";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {console.log(
        useAxiosPost(" https://api.chucknorris.io/jokes/search?query=all")
      )}
      <h1> hello</h1>
      <Button content="DAD JOKES" />
      <div className="jokes-container">
        <Joke
          title="loyer joke"
          body={
            "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris. Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
          }
        />
        <Joke
          title="loyer joke"
          body={
            "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
          }
        />
        <Joke
          title="loyer joke"
          body={
            "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
          }
        />
      </div>
    </div>
  );
}

export default App;
