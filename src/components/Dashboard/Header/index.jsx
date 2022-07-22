function Header({ setIsLoggedIn }) {
  return (
    <header>
      <div className="container">
        <h1 className="logo">
          <strong>Nu</strong> Kenzie
        </h1>
        <button onClick={() => setIsLoggedIn(false)}>Início</button>
      </div>
    </header>
  );
}

export default Header;
