import Header from '../components/header/index';

import "../assets/scss/style.scss";

const FrontOffice = (props) =>{
    return(
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default FrontOffice;