import React, { useEffect }  from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ItbVkFvZqQGe4qgZlFp1SYfuyMZNSFViHm4wCt9toRevMvtBrvPzIwGZoPhZBm11qZGN3NH6UsvY9XIXjJfalms00kKh4K3A7"
);



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login">
        <Header />
          <Login />
          </Route>
          <Route path="/orders">
          <Header />
          <Orders />
          </Route>
        <Route path="/checkout">
        <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
          <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
          <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
);
}

export default App;
