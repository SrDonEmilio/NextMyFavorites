import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Movies from './pages/Movies'
import TvShows from './pages/TV-shows'

const App = () => {
    return (
          <Router>
              <Route exact path="/" component={Movies}></Route>
              <Route exact path="/tv" component={TvShows}></Route>
          </Router>
    );
  };

  export default App