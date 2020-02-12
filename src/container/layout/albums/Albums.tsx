import React from 'react';
import AlbumsCont from '../../../component/Content/AlbumsCont';
import ApiServices,{IAlbums} from '../../api/ApiServices';

interface IProps {
  prop?: string;
  }
interface IState {
   done: boolean,
   items: IAlbums[]
 }
class Albums extends React.PureComponent<IProps, IState>{
  constructor(props:IProps) {
      super(props);
      this.state = { 
      done: false,
      items: []
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
    {this.state.items.map((val:IAlbums) => {
        return(
            <AlbumsCont key={val.id} id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Albums;