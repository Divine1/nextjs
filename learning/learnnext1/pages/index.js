import Frontend from '../layout/Frontend';

class IndexPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("in componentDidMount home route")
        
    }
    render(){
        return(
            <Frontend>
                <div>
                    <div>IndexPage</div>
                </div>
            </Frontend>
        )
    }
}

export default IndexPage;