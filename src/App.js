import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Global from './styles/Global'
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Profile from './components/Profile';
import Bookings from './components/Bookings';
import AddTest from './components/AddTest';
import LabTest from './components/LabTest';
import AddNurse from './components/AddNurse';
import Nurses from './components/Nurses';
import LabSignin from './components/LabSignin';
import LabSignup from './components/LabSignup';

function App() {
  return (

    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/add_test" element={<AddTest />} />
          <Route path="/lab_tests" element={<LabTest />} />
          <Route path="/add_nurse" element={<AddNurse />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/signin" element={<LabSignin />} />
          <Route path="/signup" element={<LabSignup />} />

        </Routes>
    
    </div>
    </Router>
  );
}

export default App;
