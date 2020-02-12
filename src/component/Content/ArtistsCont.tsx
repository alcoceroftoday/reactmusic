import React from 'react';
import CSS from "csstype";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {IArtists} from '../../container/api/ApiServices';

const contentCard: CSS.Properties = {
  width: '350px',
  height: '450px',
  float: 'left',
  margin:'10px'
};
const ArtistsCont = (props:IArtists) => (
  <ul>
      {
      <>
      <div className="main" style={contentCard}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={"asds"}/>
          </div>  
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right"><Link to={"/artist/"+props.id}>Albums</Link></i></span>
          </div>
        </div>
      </div>     
      </>

      }
  </ul>
);
export default ArtistsCont;