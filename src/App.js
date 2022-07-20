import logo from "./logo.svg";
import "./App.css";
import "./styles.scss";
import useAxiosPost from "./request";
import NavBar from "./components/NavBar";
import Button from "./components/Button";


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {/* {console.log(
        useAxiosPost(" https://api.chucknorris.io/jokes/search?query=all")
      )} */}
      <h1> hello</h1>
      <Button content="DAD JOKES" />
    </div>
  );
}

export default App;
