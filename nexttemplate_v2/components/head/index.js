import Head from 'next/head'

const Header = (props) => (
  <React.Fragment>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </React.Fragment>
)
export default Header;