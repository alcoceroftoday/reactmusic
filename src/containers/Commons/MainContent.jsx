import React,{ Component  } from "react";
import axios from "axios";
// import DataContext from "../../components/Context/DataContext";
// import ApiServices from "../../components/api/ApiServices";

class MainContent extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        done: false,
        items: ["a"]

    };
    
}

    componentDidMount(){
        // const [apiSerivce] = useState(() => new ApiSerivce());
        axios.get('http://ec2-35-174-153-145.compute-1.amazonaws.com/api/artists')
        .then( //json=>console.log(json.data))
            json=>this.setState({
                done: true,
                items:json.data
            })
            )

    }
    render(){
        // let a=this.state.items;
        return(
            <>
<div>asdsd</div>
            {/* {console.log(this.state.items)} */}
            {/* <DataContext.Consumer> 
                {context=><div>{context.albums2}--**</div>}
            </DataContext.Consumer> */}
        </>
        );
    }
}
export default MainContent;
