import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import '../../index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Nav className='nav-sticky'/>
            <body className='page-backgound'>
                <Outlet />
            </body>
            <Footer />
        </div>
    )
}
export default Layout;