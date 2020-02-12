import React, {Component} from "react";
import DataContext from "./DataContext";

class DataProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            "albums2":[]
        }
    }
    componentDidMount(){
    }
    render(){
        return (
            <>
            <DataContext.Provider value={this.state}>
                {this.props.children}
            </DataContext.Provider>
            </>
        );
    }
}
export default DataProvider;