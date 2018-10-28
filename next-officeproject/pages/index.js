import React from 'react'

import Frontoffice from '../layout/Frontoffice';
import Card from '../components/viewaccount/card/Card';

const HomePage = () => {

    
    return (
        <Frontoffice headTitle="HomePage">
           <div>
               <h3>heading</h3>
               <div>
                   <Card />
               </div>
           </div>
        </Frontoffice>
    )
}

export default HomePage;