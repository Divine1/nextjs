import React, {Component} from 'react';
import Router ,{withRouter}from 'next/router';



class IndexPage extends Component{


    componentDidMount(){
        console.log("in componentDidMount IndexPage")
        Router.push({pathname: '/dave/home'})
    }
    render(){
        return(
            <div>
                from IndexPage
            </div>
        )
    }
}

export default withRouter(IndexPage);