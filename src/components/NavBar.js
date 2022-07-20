import "../styles.scss";

function NavBar() {
  return (
    <nav classname="nav">
      <a href="#"> SO FUNKTIONIERT's</a> 
      <a href="#">SONDERANGEBOTE</a>
      <select>
        <option value="1" selected hidden>
          MEIN BEREICH
        </option>
        <option value="2">My publicshed jokes</option>
        <option value="3">My saved jokes</option>
        <option value="4">Account Informatio </option>
        <option value="5">Publish New Joke</option>
      </select>
    </nav>
  );
}

export default NavBar;
