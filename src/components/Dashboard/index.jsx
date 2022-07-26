import Header from "./Header";
import Main from "./Main";
import Container from "./styles.js";

function Dashboard({ setIsLoggedIn }) {
  return (
    <Container>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Main />
    </Container>
  );
}

export default Dashboard;
