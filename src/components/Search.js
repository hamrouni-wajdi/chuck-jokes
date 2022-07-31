function Search({}) {
  return (
    <div className="search-container">
      <p className="the-joke-bible">The Joke Bible</p>
      <h3 id="caption"> Daily laughs for you and yours</h3>
      <div>
      <form className="search-form">
      <input id="search-input"type="search" placeholder=" How can we make you laugh today ?" />
        <button type="submit" className="search-button">Search </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
