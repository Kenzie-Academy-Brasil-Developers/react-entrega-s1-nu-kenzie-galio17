import Header from "./Header";
import Main from "./Main";

function Dashboard({ setIsLoggedIn }) {
  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Main />
    </>
  );
}

export default Dashboard;
