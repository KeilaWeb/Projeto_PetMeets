import React from 'react';
import '../../styles/components/_dashboard.sass';
import doutora from '../../img/doutora.jpg';

const MenuDashboard = () => {
    return (
        <div className="menu-dashboard linha-embaixo">
            <div className="user-info">
                <img src={doutora} alt="Doctor" className="user-photo" />
                <div>
                    <p>Olá, Mônica Geller</p>
                    <button>Sair</button>
                </div>
            </div>
            <button className="edit-profile">Editar Perfil</button>
        </div>
    );
};

export default MenuDashboard;