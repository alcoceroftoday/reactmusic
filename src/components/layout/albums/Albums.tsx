import React from 'react';
import axios from "axios";
import AlbumsCont from '../../../containers/Content/AlbumsCont';
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
class Albums extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: ["a"]

  };
  
}
  componentDidMount(){
    const datos = new ApiServices();
    datos.getAlbums().then(r =>
        {this.setState({done:true,items:r})}
        ).catch(() => {
        console.log('Algo salió mal');
      });

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

export default Albums;