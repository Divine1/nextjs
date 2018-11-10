
import axios from 'axios';

class OnDemand extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("in componentDidMount OnDemand")

        axios.get("http://localhost:4000/ondemand")
        .then((res) => {
            console.log("in success ",res.data)
        })
        .catch((err)=>{
            console.log("in err ",err)
        })
    }
    render(){
        return(
            <div>
                <div>rendered on demand</div>
                <div>hello</div>
            </div>
        )
    }
}


export default OnDemand;