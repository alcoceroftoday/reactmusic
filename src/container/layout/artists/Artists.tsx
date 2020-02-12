import React from 'react';
import ArtistsCont from '../../../component/Content/ArtistsCont';
import ApiServices, {IArtists} from '../../api/ApiServices';

interface IProps {
    prop?: string;
  }
interface IState {
   done: boolean,
   items: IArtists[]
 }

class Artists extends React.PureComponent<IProps, IState>{
  constructor(props:IProps) {
      super(props);
      this.state = { 
      done: false,
      items: []
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
    {this.state.items.map((val:IArtists) => {
        return(
            <ArtistsCont key={val.id} id={val.id} name={val.name} artwork={val.artwork}/>
        )
    })}
      </>
      );
  }
}

export default Artists;