import Frontoffice from '../layout/Frontoffice';
import Button from '../components/buttons/Button';
import Icons from '../components/buttons/Icons';
import Appbar from '../components/Appbar';
const HomePage = () => {
    return (
        <Frontoffice headTitle="HomePage">
            <h1>Photos</h1>
            <div>
                <Button />
            </div>
            <div>
                <Icons />
            </div>
            <div>
                <Appbar />
            </div>
        </Frontoffice>
    )
}

export default HomePage;