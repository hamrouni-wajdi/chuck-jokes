function Search({}) {
  return (
    <div className="search-container">
      <p className="the-joke-bible">The Joke Bible</p>
      <h3 id="caption"> Daily laughs for you and yours</h3>
      <div>
        <input type="search" placeholder=" How can we make you laugh today ?" />
        <button>Search </button>
      </div>
    </div>
  );
}

export default Search;
