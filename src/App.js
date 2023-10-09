import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Shippment } from "./components";
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
  ShipmentSection,
  InvoiceView,
} from "./pages";

import { useStateContext } from "./context/ContextProvider";
import Loader from "./components/Loader";

function App() {
  const { activeMenu } = useStateContext();
  const [loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      setLoggedIn(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          {/* Dashboard */}
          <Route
            exact
            path='/'
            element={
              loggedIn ? <Dashboard /> : <Navigate replace to='/login' />
            }
          />
          <Route path='/dashboard' element={<Dashboard />} />

          {/* Pages */}
          <Route path='/orders' element={<Orders />} />
          <Route path='/receipts' element={<Reciepts />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CustomerInfo' element={<CustomerInfo />} />
          <Route path='/PackageSection' element={<PackageSection />} />
          <Route path='/ShipmentSection' element={<Shippment />} />
          <Route path='/InvoiceView' element={<InvoiceView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
