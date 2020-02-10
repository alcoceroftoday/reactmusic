import React from 'react';
import axios from "axios";
import ArtistsCont from '../../../containers/Content/ArtistsCont';

interface IProps {
    superhero?: string;
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
class Artists extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: ["a"]

  };
  
}
  componentDidMount(){
    
      axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/Artists')
      .then( //json=>console.log(json.data))
          json=>this.setState({
              done: true,
              items:json.data
          })
          );
  }
  render(){
      return(
          <>
    <div>Artists</div>
    {this.state.items.map((val:ICardAlbum) => {
        return(
            <ArtistsCont id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Artists;