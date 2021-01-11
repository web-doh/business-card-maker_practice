import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Cards from "./pages/cards/cards";
import Home from "./pages/home/home";
import Makers from "./pages/makers/makers";
import Accounts from "./pages/accounts/accounts";
import Login from "./pages/accounts/login/login";
import SignUp from "./pages/accounts/sign_up/sign_up";
import Public from "./pages/public_page/public";

function App({ FileInput, database, authService }) {
  const [currentUser, setCurrentUser] = useState({
    isAuthenticated: false,
    user: null,
  });

  const [cards, setCards] = useState({});

  const isAuthenticated = currentUser.isAuthenticated;

  useEffect(() => {
    authService.userState((user) => {
      if (user) {
        setCurrentUser((currentUser) => ({ isAuthenticated: true, user }));
      }
    });
  }, []);

  // Accounts
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

  const onLogout = useCallback(() => {
    authService
      .signOut() //
      .then(() =>
        setCurrentUser({
          isAuthenticated: false,
          user: null,
        })
      );
  });

  // Makers
  const createCard = useCallback((card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      
      return updated;
    });

    database.saveCards(currentUser.user.uid, card);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/home", "/"]}>
          <Home currentUser={currentUser.user} />
        </Route>
        <Route strict path="/cards">
          {isAuthenticated ? (
            <Cards
              cards={cards}
              authService={authService}
              isAuthenticated={isAuthenticated}
            />
          ) : (
            <Redirect to="/public" />
          )}
        </Route>
        <Route strict path="/makers">
          {isAuthenticated ? (
            <Makers
              FileInput={FileInput}
              authService={authService}
              database={database}
              cards={cards}
              currentUser={currentUser.user}
              isAuthenticated={isAuthenticated}
              createCard={createCard}
            />
          ) : (
            <Redirect to="/public" />
          )}
        </Route>
        <Route exact path="/accounts">
          <Accounts
            currentUser={currentUser.user}
            authService={authService}
            isAuthenticated={isAuthenticated}
            onLogout={onLogout}
          />
        </Route>

        <Route exact path="/accounts/login">
          {isAuthenticated ? (
            <Redirect to="/accounts" />
          ) : (
            <Login
              authService={authService}
              isAuthenticated={isAuthenticated}
              onLogin={onLogin}
            />
          )}
        </Route>

        <Route exact path="/accounts/sign-up">
          {isAuthenticated ? (
            <Redirect to="/accounts" />
          ) : (
            <SignUp
              authService={authService}
              isAuthenticated={isAuthenticated}
              onSignUp={onSignUp}
            />
          )}
        </Route>

        <Route path="/public">
          {isAuthenticated ? (
            <Redirect to="/home" />
          ) : (
            <Public isAuthenticated={isAuthenticated} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// function PrivateRoute({ isAuthenticated, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => (isAuthenticated ? children : <Redirect to="/public" />)}
//     />
//   );
// }

export default App;
