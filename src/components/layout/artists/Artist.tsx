import React from 'react';
import axios from "axios";
// import SongsCont from '../../../containers/Content/SongsCont';
import AlbumsCont from '../../../containers/Content/AlbumsCont';

interface IProps {
    id: string;
  }
  
interface IState {
   done: boolean,
   items: any
 }
 interface ICardAlbum {
  id:string;
  name:string;
  artwork:string;
}
class Artist extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: ["a"]

  };
  
}
  componentDidMount(){
    console.log(this.props.id)
      axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/artists/'+this.props.id)
      .then( //json=>console.log(json.data))
          json=>this.setState({
              done: true,
              items:json.data.albums
          })
          );
  }
  render(){
      return(
          <>
    <div>Albums</div>
    {this.state.items.map((val:ICardAlbum) => {
        return(
            <AlbumsCont id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Artist;