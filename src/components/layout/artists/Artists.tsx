import React from 'react';
import axios from "axios";
import ArtistsCont from '../../../containers/Content/ArtistsCont';
import ApiServices from '../../api/ApiServices';

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
    
    const datos = new ApiServices();
    datos.getArtists().then(r =>
        {this.setState({done:true,items:r})}
        ).catch(() => {
        console.log('Algo salió mal');
      });
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