import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import TopArtists from "./TopArtists";
import TopTracks from "./TopTracks";

export default function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/top/artists" component={TopArtists} />
        <Route path="/top/tracks" component={TopTracks} />
      </Switch>
    </Router>
  );
}
