import Head from '../components/head/index';
import Body from '../components/body/index';

const Frontoffice = (props) => {
    return(
        <React.Fragment>
            <Head title={props.headTitle} />
            <Body body={props.children} />
        </React.Fragment>
    )
}

export default Frontoffice;