import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className='App'>
            <Nav />
            <div className='page-backgound'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;