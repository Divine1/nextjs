import {Component} from 'react';
import FrontOffice from '../../layouts/frontoffice';
class IndexPage extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <FrontOffice>
                <div>
                    <h1>WorkshopPage</h1>
                </div>
            </FrontOffice>
        )
    }
}
export default IndexPage;