import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/Shared/NotFound";
import Login from "./components/Shared/Login/Login";
import Listing from "./components/Listing/Listing";
import Services from "./components/Home/Services/Services";
import Guides from "./components/Guides/Guides";
import Booking from "./components/Home/Services/Booking";
import UserBooking from "./components/Home/UserBooking/UserBooking";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/guides">
              <Guides></Guides>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/listing">
              <Listing></Listing>
            </Route>
            <Route path="/user">
              <UserBooking></UserBooking>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
