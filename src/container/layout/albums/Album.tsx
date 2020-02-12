import React from 'react';
import SongsCont from '../../../component/Content/SongsCont';
import ApiServices,{ISongs} from '../../api/ApiServices';

interface IProps {
    id: string;
  }
interface IState {
   done: boolean,
   items: ISongs[]
 }
class Album extends React.PureComponent<IProps, IState>{
  constructor(props:IProps) {
      super(props);
      this.state = { 
      done: false,
      items: []
  };
}
  componentDidMount(){
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
    {this.state.items.map((val:ISongs) => {
        return(
            <SongsCont key={val.id} id={val.id} name={val.name} duration={val.duration}/>
        )
    })}
      </>
      );
  }
}

export default Album;