import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer from '../Components/Footer/Footer';
import WhatsAppButton from '../Components/Common/WhatsAppButton';

const Main = () => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            <Outlet></Outlet>
            <Footer></Footer>
            <WhatsAppButton />
        </div>
    );
};

export default Main;