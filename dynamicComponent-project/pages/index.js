import Link from 'next/link'
import axios from 'axios';
//import dynamic from 'next/dynamic';

// const DynamicComponentWithCustomLoading = dynamic(
//     () => import('../components/OnDemand'), 
//     {
//         loading: () => <p>...</p>
//     })

// const DynamicComponentWithCustomLoading = dynamic(() => import('../components/OnDemand'), {
//   loading: () => <p>...</p>
// })

// const DynamicComponentWithCustomLoading = dynamic({
//   ssr: false,
//   modules: props => <div>hhjjlld</div>
//   });

import dynamic from 'next/dynamic'

const DynamicComponent1 = dynamic(import('../components/OnDemand'))


class IndexPage extends  React.Component{

  constructor(props){
    super(props);
    this.state ={
      showbutton2 : "",
      showbutton1 : ""
    }
  }

  componentDidMount(){
    console.log("componentDidMount IndexPage - ")
    axios.get("http://localhost:4000/api")
      .then((res) => {
        console.log("in success ",res.data)
      })
      .catch((err)=>{
        console.log("in err ",err)
      })
  }
  clickevent1 = () =>{
    console.log("in clieckevent1")

  }

  clickevent2 = () =>{
    console.log("in clickevent2")

    if(this.state.showbutton2 == ""){
      this.setState({
        showbutton2 : "button2"
      })
    }
    else{
      this.setState({
        showbutton2 : ""
      })
    }
    
  }

  render(){

    let show2 = (this.state.showbutton2.length > 2) ? 
    <DynamicComponent1 /> : "";

    return(
      <div>
        <p>Hello Next.js</p>
        {
          /* 
          <Link href="/testhosting-demo/about">
            <a>here</a>
          </Link> 
        */}
        <button onClick={() => this.clickevent1()}>tab1</button>
        <button onClick={() => this.clickevent2()}>tab2</button>
        <div>
          {show2}
        </div>
      </div>
    )
  }

}
export default IndexPage;
