import React from 'react';
import { Link } from 'react-router-dom';
import logovertical from '../../img/logo-petmeets-vertical.png'
import '../../styles/components/_dashboard.sass';

const NavbarDashboard = () => {
    return (
        <div className="navbar-dashboard">
            <div>
                <img alt="Logo PetMeets" loading="lazy" width="220" height="48" decoding="async" src={logovertical} className="logo-nav" />
            </div>
            <div className="nav-links">
                <Link to="/register-client">Registrar Cliente</Link>
                <Link to="/register-product">Cadastrar Produto</Link>
                <Link to="/reports">Painel de Relatório</Link>
                <Link to="/register-service">Cadastrar Serviços</Link>
            </div>
        </div>
    );
};

export default NavbarDashboard;