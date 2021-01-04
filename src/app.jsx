import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Cards from "./pages/cards/cards";
import Home from "./pages/home/home";
import Makers from "./pages/makers/makers";
import Header from "./components/header/header";
import Accounts from "./pages/accounts/accounts";
import Login from "./pages/accounts/login/login";
import SignUp from "./pages/accounts/sign_up/sign_up";

function App({ authService }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    authService.userState((user) => {
      setCurrentUser(user);
    });
  }, []);

  const byEmail = useCallback((method, email, password) => {
    authService[method](email, password) //
      .catch((error) => {
        alert(`${error}`);
      });
  }, []);

  const onSignUp = useCallback((email, password) => {
    byEmail("signUp", email, password);
  }, []);
  const onLogin = useCallback((email, password) => {
    byEmail("login", email, password);
  }, []);

  return (
    <BrowserRouter>
      {window.location.pathname === "/" ? (
        ""
      ) : (
        <Header authService={authService} currentUser={currentUser} />
      )}

      <Switch>
        <Route exact path={["/home", "/"]}>
          {currentUser ? (
            <Redirect to="/cards" />
          ) : (
            <Home currentUser={currentUser} />
          )}
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
            <Login
              authService={authService}
              currentUser={currentUser}
              onLogin={onLogin}
            />
          )}
        </Route>

        <Route exact path="/accounts/sign-up">
          {currentUser ? (
            <Redirect to="/accounts" />
          ) : (
            <SignUp authService={authService} onSignUp={onSignUp} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
