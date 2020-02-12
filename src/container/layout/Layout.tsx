import CSS from "csstype";
import React from "react";
import NavLateral from "../navbar/NavLateral";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Browser from "../Browser";
import Songs from "./songs/Songs";
import DataProvider from "../Context/DataProvider";
import ShareAlbums from "./ShareAlbums";
import ShareArtists from "./ShareArtists";

const contentPrincipal: CSS.Properties = {
  width: 'calc(100% - 300px)',
  height: '450px',
  float: 'left'
};

export default function Layout() {
  return (
    <DataProvider>
      <Router>
      <NavLateral />
      <div style={contentPrincipal}>
        <Switch>
          <Route path="/browser" exact component={()=><Browser />}/>
          <Route path="/artists" exact component={()=><ShareArtists />}/>
          <Route path="/artist/:id" exact component={()=><ShareArtists />}/>
          <Route path="/albums" exact component={()=><ShareAlbums />}/>
          <Route path="/album/:id" exact component={()=><ShareAlbums />}/>
          <Route path="/songs" exact component={()=><Songs  />}/>
        </Switch>
      </div>
      </Router> 
    </DataProvider>
  );
}