import React from 'react';
import '../../styles/components/Dashboard/_dashboard.sass';

const IntroDashboard = () => {
    return (
        <div className="intro-dashboard">
            <button className="edit-profile">Editar Perfil</button>
            <button className="contact-agency">Falar com PetMeets</button>
        </div>
    );
};

export default IntroDashboard;