import CSS from "csstype";
import React from "react";
import NavLateral from "../navbar/NavLateral";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Albums from "./albums/Albums";
import Album from "./albums/Album";
import Artist from "./artists/Artist";
import Artists from "./artists/Artists";
import Browser from "../Browser";
import Songs from "./songs/Songs";
interface RouteParams {
  id: string
}
const contentPrincipal: CSS.Properties = {
  width: 'calc(100% - 300px)',
  height: '450px',
  float: 'left'
};
export default function Layout() {
  return (
    <Router>
    <NavLateral />
    <div style={contentPrincipal}>
      <Switch>
        <Route path="/browser" exact component={()=>(<Browser />)}/>
        <Route path="/artists" exact component={ShareArtists}/>
        <Route path="/artist/:id" exact component={ShareArtists}/>
        <Route path="/albums" exact component={ShareAlbums}/>
        <Route path="/album/:id" exact component={ShareAlbums}/>
        <Route path="/songs" exact component={()=>(<Songs  />)}/>
      </Switch>
    </div>
    </Router>  
  );
}

function ShareAlbums() {
  let { id } = useParams<RouteParams>();
  if (id) {
    return (
      <Album id={id} />
    );
  }
  return (
    <>
    <Albums />
    </>
  );
}
function ShareArtists() {
  let { id } = useParams<RouteParams>();
  if (id) {
    return (
      <Artist id={id}/>
    );
  }
  return (
    <Artists />
  );
}