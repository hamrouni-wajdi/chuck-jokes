import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
import useAxiosPost from "./request";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Joke from "./components/Joke";
import ButtonContainer from "./components/ButtonContainer";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <Search />
      </header>
      {/* {console.log(
        useAxiosPost(" https://api.chucknorris.io/jokes/search?query=all")
      )} */}
      <div className="container">
        <h1> hello</h1>
        <ButtonContainer />
        <div className="jokes-container">
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris. Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />{" "}
          <Joke
            title="LOYER JOKE"
            body={
              "Chuck Norris doesn't <br/> ~worship \n Buddah,\n Buddah worships Chuck Norris."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
