import './App.css';
import './styles/main.sass';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FormPage from './pages/Form/FormPage';
import DashboardPage from './pages/Dasboard/DashboardPage'; 

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/Dashboard";

  console.log(location.pathname);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<FormPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
