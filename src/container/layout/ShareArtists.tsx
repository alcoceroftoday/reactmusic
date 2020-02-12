import React from 'react';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import Artists from './artists/Artists';
import Artist from './artists/Artist';
interface RouteParams {
    id: string
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
export default ShareArtists;