import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Cards from "./pages/cards/cards";
import Home from "./pages/home/home";
import Makers from "./pages/makers/makers";
import Header from "./components/header/header";
import Accounts from "./pages/accounts/accounts";
import Login from "./pages/login/login";
import SignUp from "./pages/sign_up/sign_up";
import { useEffect, useState } from "react";

function App({ authService }) {
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    authService.userState((user) => {
      setcurrentUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header authService={authService} currentUser={currentUser} />

      <Switch>
        <Route exact path={["/home", "/"]}>
          <Home currentUser={currentUser} />
        </Route>
        <Route exact path="/cards">
          <Cards currentUser={currentUser} />
        </Route>
        <Route exact path="/makers">
          <Makers currentUser={currentUser} />
        </Route>
        <Route exact path="/accounts">
          <Accounts authService={authService} currentUser={currentUser} />
        </Route>

        <Route exact path="/accounts/login">
          {currentUser ? (
            <Redirect to="/accounts" />
          ) : (
            <Login authService={authService} currentUser={currentUser} />
          )}
        </Route>

        <Route exact path="/accounts/sign-up">
          {currentUser ? (
            <Redirect to="/accounts" />
          ) : (
            <SignUp authService={authService} currentUser={currentUser} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
