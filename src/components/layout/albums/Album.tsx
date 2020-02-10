import React from 'react';
import axios from "axios";
import SongsCont from '../../../containers/Content/SongsCont';

interface IProps {
    id: string;
  }
  
interface IState {
   done: boolean,
   items: any
 }
 interface ICardSong {
  id: string;
  name: string;
  duration: number;
  // track: number;
  // url: string;
}
class Album extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: ["a"]

  };
  
}
  componentDidMount(){
    console.log(this.props.id)
      axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/albums/'+this.props.id)
      .then( //json=>console.log(json.data))
          json=>this.setState({
              done: true,
              items:json.data.tracks
          })
          );
  }
  render(){
      return(
          <>
    <div>Songs</div>
    {this.state.items.map((val:ICardSong) => {
        return(
            <SongsCont id={val.id} name={val.name} duration={val.duration}/>
        )
    })}
      </>
      );
  }
}

export default Album;