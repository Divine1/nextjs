import Head from '../components/head/index';
import Body from '../components/body/index';
// import 'typeface-roboto';
import NoSsr from '@material-ui/core/NoSsr';


const Frontoffice = (props) => {
    return(
        <React.Fragment>
            <NoSsr>
                <Head title={props.headTitle} />
                <Body body={props.children} />
            </NoSsr>
        </React.Fragment>
    )
}

export default Frontoffice;