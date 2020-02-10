import React from 'react';
import axios from "axios";
// import SongsCont from '../../../containers/Content/SongsCont';
import AlbumsCont from '../../../containers/Content/AlbumsCont';
import ApiServices from '../../api/ApiServices';

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
    const datos = new ApiServices();
    datos.getArtist(this.props.id).then(r =>
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

export default Artist;