import {Outlet} from 'react-router-dom';
import SideBar from '../Components/SideBar';

function RootLayout() {
    return (
      <>
        <Outlet />
        
          <SideBar />
        
      </>
    );
  }
export default RootLayout;