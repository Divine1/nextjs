
import Link from 'next/link';

const GenerateLink = (props) => {
    return(
        <div>
            <Link href={props.href}><a>{props.label}</a></Link>
        </div>
    )
}

const HeaderComponent = () => {
    return(
        <div id="header">
            <GenerateLink href="/" label="Home" />
            <GenerateLink href="/training" label="Training" />
            <GenerateLink href="/workshop" label="Workshop" />
            <GenerateLink href="/aboutus" label="Aboutus" />
            <GenerateLink href="/contactus" label="Contactus" />
        </div>
    )
}
export default HeaderComponent;