import React from 'react';
import axios from "axios";
import SongsCont from '../../../containers/Content/SongsCont';
import ApiServices from '../../api/ApiServices';

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
    const datos = new ApiServices();
    datos.getAlbum(this.props.id).then(r =>
        {this.setState({done:true,items:r})}
        ).catch(() => {
        console.log('Algo salió mal');
      });
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