import React from "react";
import NavbarDashboard from '../../components/Dashboard/Navbar-Dashboard';
import MenuDashboard from '../../components/Dashboard/Menu-Dashboard';
import RegisterClient from '../../components/Dashboard/DashboardRoute/Route-Register-Client/RegisterClient'; 
import '../../styles/components/_dashboard.sass';

export function RegisterClientPage() {
    return (
        <div className="dashboard-page">
            <NavbarDashboard />
            <div className="main-content">
                <MenuDashboard />
                <RegisterClient /> 
            </div>
        </div>
    );
};

export default RegisterClientPage;
