import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
import RequestForBlood from './components/request/RequestForBlood';
import RegisterAsDonor from './components/registerDonor/RegisterAsDonor';
import Donor from './components/donor/Donor';
import Contact from './components/contact/Contact';
import Dashboard from './components/Admin/Dashboard';
import MakeAdmin from './components/Admin/MakeAdmin';
import DonorList from './components/Admin/DonorList';
import BloodRequest from './components/Admin/BloodRequest';
import DonationHistory from './components/Admin/DonationHistory';
import PrivateRoute from './components/context/privateRoute/PrivateRoute';
import LogIn from './components/login/Login'
import AuthProvider from './components/context/AuthProvider';
import Navigation from './components/Share/Navigation/Navigation';
import Registration from './components/register/Registration';
import KnowMore from './components/KnowMore/KnowMore';
// import AuthProvider from './components/context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home/:knowmore" element={<KnowMore></KnowMore>}></Route>
                        <Route path="login" element={<LogIn />} />
                        <Route path="register" element={<Registration />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="request" element={<RequestForBlood />} />
                        <Route path="registerDonor" element={<RegisterAsDonor />} />
                        <Route path="contact" element={<Contact />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="donor" element={<Donor />} />

                        </Route>
                        <Route >
                            <Route path="/admin" element={<Dashboard />} >
                                <Route path="donationhistory" element={<DonationHistory />} />
                                <Route path="makeadmin" element={<MakeAdmin />} />
                                <Route path="donorlist" element={<DonorList />} />
                                <Route path="bloodrequest" element={<BloodRequest />} />
                            </Route>
                        </Route>

                    </Routes>

                </BrowserRouter>
            </div>
        </AuthProvider>

    );
}

export default App;
