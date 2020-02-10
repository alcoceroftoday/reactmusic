import React from 'react';
import axios from "axios";
import SongsCont from '../../../containers/Content/SongsCont';
import ApiServices from '../../api/ApiServices';

interface IProps {
    superhero?: string;
  }
  
interface IState {
   done: boolean,
   items: any
 }
 interface ICardSongs {
  id: string;
  name: string;
  duration: number;
  // track: number;
  // url: string;
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
    
    const datos = new ApiServices();
    datos.getSongs().then(r =>
        {this.setState({done:true,items:r})}
        ).catch(() => {
        console.log('Algo salió mal');
      });
  }
  render(){
      return(
          <>
    <div>Songs</div>
    {this.state.items.map((val:ICardSongs) => {
        return(
            <SongsCont id={val.id} name={val.name} duration={val.duration}/>
        )
    })}
      </>
      );
  }
}

export default Songs;