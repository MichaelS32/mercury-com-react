import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import '../../index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Nav className='nav-sticky'/>
            <section className='page-backgound'>
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}
export default Layout;