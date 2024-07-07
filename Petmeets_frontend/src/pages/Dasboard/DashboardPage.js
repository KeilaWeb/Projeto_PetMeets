import React from "react";
import NavbarDashboard from '../../components/Dashboard/Navbar-Dashboard';
import MenuDashboard from '../../components/Dashboard/Menu-Dashboard';
import IntroDashboard from '../../components/Dashboard/Intro-Dashboard';
import '../../styles/components/Dashboard/_dashboard.sass';

export function DashboardPage() {
    return (
        <div className="dashboard-page">
            <NavbarDashboard />
        <div className="main-content">
            <MenuDashboard />
            <IntroDashboard />
        </div>
        </div>
    );
};

export default DashboardPage;