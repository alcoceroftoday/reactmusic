import React from 'react';
import AlbumsCont from '../../../component/Content/AlbumsCont';
import ApiServices,{IAlbums} from '../../api/ApiServices';

interface IProps {
    id: string;
  }
interface IState {
   done: boolean,
   items: IAlbums[]
 }

class Artist extends React.PureComponent<IProps, IState>{
  constructor(props:any) {
      super(props);
      this.state = { 
      done: false,
      items: []
  };
}
  componentDidMount(){
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
    {this.state.items.map((val:IAlbums) => {
        return(
            <AlbumsCont key={val.id} id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Artist;