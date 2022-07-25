import ilustration from "../../assets/img/ilustration.svg";
import Button from "../Global/Button/styles";
import Container from "./styles";

function Homepage({ setIsLoggedIn }) {
  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <Container>
      <main>
        <section className="lobby">
          <h1>
            <strong>Nu</strong> Kenzie
          </h1>
          <p>Centralize o controle das suas finanças</p>
          <span>de forma rápida e segura</span>
          <Button primary onClick={handleLogin}>
            Iniciar
          </Button>
        </section>
        <section className="ilustration">
          <div>
            <div>
              <div></div>
            </div>
          </div>
          <img src={ilustration} alt="Ilustração" />
        </section>
      </main>
    </Container>
  );
}

export default Homepage;
