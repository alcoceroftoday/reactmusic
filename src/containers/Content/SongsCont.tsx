import React ,{ useState }from 'react';
import CSS from "csstype";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
interface ICardSong {
  id: string;
  name: string;
  duration: number;
  // track: number;
  // url: string;
}
const contentCard: CSS.Properties = {
  width: '350px',
  height: '450px',
  float: 'left',
  margin:'10px'
};
const SongsCont = (props:ICardSong) => (
  <ul>
      {
      <>
      <div className="main" style={contentCard}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={"asds"}/>
          </div>
                
          <div className="card-content">

            <span className="card-title activator grey-text text-darken-4">{props.name}<i className="material-icons right"><Link to={"/"}></Link></i></span>
          </div>

        </div>
      </div>     
      </>

      }
  </ul>
);
export default SongsCont;