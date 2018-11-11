import Link from 'next/link'


const Frontend = (props) =>{
    return(
        <div>
            <div>HEADING</div>
            <div>
                <Link href="/">
                    <a>HOME</a>
                </Link>
                <Link href="/aboutus">
                    <a>ABOUTUS</a>
                </Link>
            </div>
            <div>{props.children}</div>
        </div>
    )
};

export default Frontend;