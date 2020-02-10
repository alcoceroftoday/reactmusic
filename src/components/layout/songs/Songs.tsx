import React from 'react';
import axios from "axios";
import SongsCont from '../../../containers/Content/SongsCont';

interface IProps {
    superhero?: string;
  }
  
interface IState {
   done: boolean,
   items: any
 }
 interface ICardSongs {
    id:string;
    name:string;
    artwork:string;
}
class Songs extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: ["a"]

  };
  
}
  componentDidMount(){
    
      axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/Tracks')
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
    <div>Songs</div>
    {this.state.items.map((val:ICardSongs) => {
        return(
            <SongsCont id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Songs;