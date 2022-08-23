import "./App.css";
//==================================  Import all dependencies  ============================

import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from "./config/config";

//================================  Import folders  ===========================

import login_signup from "./modules/auth/auth.main"
import { Provider } from "react-redux";
import store from "./store/configureStore";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import setAuthToken from "./utils/SetAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./modules/auth/auth.action";
import { isEmpty } from "lodash";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded: any = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime || isEmpty(localStorage.getItem("jwtToken"))) {
    // Logout user
    // store.dispatch(logoutUser());
    // TODO: Clear current Profile
    // Redirect to login
    // window.location = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          {/* <Menu /> */}
          <Switch>

            <Route
              path={`${config.baseUrl}auth`}
              component={login_signup}
            />

          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
