import React from "react";
// Global Style Import
import GlobalStyle from "./components/GlobalStyle";

// Importing the pages folder
import AboutUs from "../src/pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Switch, Route, useLocation } from "react-router-dom";

//Importing Animation
import { AnimatePresence } from "framer-motion";

// Default scrolling to top
// import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      {/* <ScrollTop /> */}
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
