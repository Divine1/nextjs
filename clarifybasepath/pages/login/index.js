import React, {Component} from 'react';
import Router ,{withRouter}from 'next/router';


class LoginPage extends Component{
    componentDidMount(){
        console.log("in componentDidmount")
        console.log("props ",this.props)
    }
    render(){
        return(
            <div>
                from login page
            </div>
        )
    }
}

export default withRouter(LoginPage);