import ilustration from "../../assets/img/ilustration.svg";

function Homepage({ setIsLoggedIn }) {
  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <main>
      <section>
        <h1>
          <strong>Nu</strong> Kenzie
        </h1>
        <p>Centralize o controle das suas finanças</p>
        <span>de forma rápida e segura</span>
        <button onClick={handleLogin}>Iniciar</button>
      </section>
      <div>
        <div>
          <div>
            <div></div>
          </div>
        </div>
        <img src={ilustration} alt="Ilustração" />
      </div>
    </main>
  );
}

export default Homepage;
