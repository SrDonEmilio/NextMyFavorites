import React from "react";
import ReactDOM from "react-dom";
import List from "./containers/List";
import Header from "./containers/Header"
import Footer from './containers/Footer'

import "./styles/styles.css"

// import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
  return (
    <main>
        <Header />
        <List/>
        <Footer />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
