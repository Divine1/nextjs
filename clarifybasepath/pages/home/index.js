import React, {Component} from 'react';
import Router ,{withRouter}from 'next/router';


class HomePage extends Component{
    componentDidMount(){
        console.log("in componentDidmount")
        console.log("props ",this.props)
    }
    render(){
        return(
            <div>
                from HomePage
            </div>
        )
    }
}

export default withRouter(HomePage);