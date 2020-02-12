import React,{ Component  } from "react";
import axios from "axios";

class MainContent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        done: false,
        items: []
    };
    }
    componentDidMount(){
        axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/artists')
        .then(
            json=>this.setState({
                done: true,
                items:json.data
            })
            )
    }
    render(){
        return(
            <>
            <div></div>
        </>
        );
    }
}

export default MainContent;
