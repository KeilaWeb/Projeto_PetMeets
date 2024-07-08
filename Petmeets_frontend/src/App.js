import './App.css';
import './styles/main.sass';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FormPage from './pages/Form/FormPage';
import DashboardPage from './pages/Dasboard/DashboardPage';
import RegisterClientPage from './pages/Dasboard/RegisterClientPage';

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/dashboard" || location.pathname === "/register-client";

  console.log(location.pathname);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<FormPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/register-client" element={<RegisterClientPage />} />
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
