import React, {Component} from 'react';
import Router ,{withRouter}from 'next/router';
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class IndexPage extends Component{


    componentDidMount(){
        console.log("in componentDidMount IndexPage")
        //Router.push({pathname: '/dave/home'})
    }
    render(){
        return(
            <div>
                from IndexPage
                <div>
                <img src={`${publicRuntimeConfig.staticFolder}/images/pexels-photo-213958.jpeg`}
                alt="img not found" />
                </div>
            </div>
        )
    }
}

export default withRouter(IndexPage);