import React, {Component} from "react";
import DataContext from "./DataContext";
// import ApiServices from "../../components/api/ApiServices";
class DataProvider extends Component {
constructor(props){
    super(props)

    this.state={
        "albums2":["abc"]
    }
    
    // function getAlbums(){
        
    //     return variable
    // }
}
componentDidMount(){
    // const apiSerivce = new ApiServices();
    // const asc=apiSerivce.getArtists();
    // this.setState({done: true, albums2: asc })
    
    // let consulta='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/Albums'
    
    //   fetch(consulta,{method:"get"})
    //     .then(result=>result.json())
    //     .then( json=>this.setState({
    //                   done: true,
    //                   albums:json
    //                 })
    //     )
}
    render(){
        return (
            <>
            {console.log(this.state.albums2)}
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
            </>
        );
    }
}
export default DataProvider;