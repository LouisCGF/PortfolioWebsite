import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>if page == "Home" &#123;</span> { /* &lt;body&gt;  <-- this is to display <body>. Replace 'body' with 'html' for html */ }

                <span className='tags under-top'>displayPage();</span>

                <br/>

                <Outlet />

                <span className='tags bottom-tags'>
                &#125;
                <br/>
                </span>

            </div>
        </div>
    )
}

export default Layout