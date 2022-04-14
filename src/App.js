import React, { createContext, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./Components/Auth/PrivateRoute/PrivateRoute";
import "./Components/app.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import PreLoader from "./Components/Common/PreLoader";
import CheckOutForm from "./Components/Dashboard/UserDashboard/Payment/CheckOutForm";
import { getDecodedUser } from "./Components/Auth/LoginManager";
import NotFound from "./Components/NotFound/NotFound";
import ProviderLogin from "./Components/Auth/ProviderLogin/ProviderLogin";

// Practice code splitting
const Home = React.lazy(() => import("./Components/Home/Home"));

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(getDecodedUser());

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Suspense fallback={<PreLoader />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/auth">
                <ProviderLogin />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <PrivateRoute path="/CheckOutForm/:id">
                <CheckOutForm />
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
