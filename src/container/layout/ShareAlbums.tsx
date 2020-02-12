import React from 'react';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import Albums from './albums/Albums';
import Album from './albums/Album';
interface RouteParams {
    id: string
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
export default ShareAlbums;