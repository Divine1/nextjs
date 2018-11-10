import React from 'react';
import ExpansionPanel from '../../components/viewaccount/expansionpanels/index';
import { withRouter } from 'next/router'


class ViewaccountPage extends React.Component{

    constructor(props){
        super(props);

    }
    componentDidMount(){
        const { router } = this.props
        console.log("router ",router)
    }
    render(){
        return(
            <div>
                <div>
                    Bank accounts
                </div>
                <div>
                    Transaction History
                    <div>
                        <ExpansionPanel />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ViewaccountPage);