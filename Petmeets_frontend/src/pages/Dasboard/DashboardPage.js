import React from "react";
import NavbarDashboard from '../../components/Dashboard/Navbar-Dashboard';
import MenuDashboard from '../../components/Dashboard/Menu-Dashboard';
import BodyDashboard from '../../components/Dashboard/Body-Dashboard';
import '../../styles/components/_dashboard.sass';

export function DashboardPage() {
    return (
        <div className="dashboard-page">
            <NavbarDashboard />
        <div className="main-content">
            <MenuDashboard />
            <BodyDashboard />
        </div>
        </div>
    );
};

export default DashboardPage;