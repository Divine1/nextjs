import Head from 'next/head'
// import "../../node_modules/roboto-fontface/css/roboto/roboto-fontface.css";  
// import "../../static/customfont/css/roboto/roboto-fontface.css";
// import "../../static/css/customStyle.css";
const Header = (props) => (
  <React.Fragment>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" type="text/css" href="/static/css/customStyle.css" />
      <link rel="stylesheet" type="text/css" href="/static/customfont/css/roboto/roboto-fontface.css" />
    </Head>
  </React.Fragment>
)
export default Header;