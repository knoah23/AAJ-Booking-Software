import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, Shippment } from './components';
import {
  Dashboard,
  Orders,
  Invoice,
  Settings,
  Reciepts,
  Users,
  Login,
  CustomerInfo,
  PackageSection,
  ShipmentSection
} from './pages';
import './App.css';

import { useStateContext } from './context/ContextProvider';
import Loader from './components/Loader';

function App () {
  const { activeMenu } = useStateContext();
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = window.localStorage.getItem('authToken');
    console.log(token);
    if (!token) {
      setLoggedIn(false);
    }
    console.log(loggedIn);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>
          {/* <div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
            <TooltipComponent content='Settings' position='Top'>
              <button
                type='button'
                style={{ background: "blue", borderRadius: "50%" }}
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div> */}
          {activeMenu
            ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            )
            : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'
              }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}
                <Route
                  exact path='/' element={
                    loggedIn
                      ? (
                        <Dashboard />
                      )
                      : (
                        <Navigate replace to='/login' />
                      )
                  }
                />
                <Route path='/dashboard' element={<Dashboard />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/receipts' element={<Reciepts />} />
                <Route path='/invoice' element={<Invoice />} />
                <Route path='/customers' element={<Users />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/CustomerInfo' element={<CustomerInfo />} />
                <Route path='/PackageSection' element={<PackageSection />} />
                <Route path='/ShipmentSection' element={<Shippment />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
