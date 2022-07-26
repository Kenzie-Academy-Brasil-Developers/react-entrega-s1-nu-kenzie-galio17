import Button from "../../Global/Button/styles";

function Header({ setIsLoggedIn }) {
  return (
    <header>
      <div className="headerContainer">
        <h1>
          <strong>Nu</strong> Kenzie
        </h1>
        <Button onClick={() => setIsLoggedIn(false)}>Início</Button>
      </div>
    </header>
  );
}

export default Header;
