import React from 'react';
import '../../styles/components/_dashboard.sass';

const BodyDashboard = () => {
    return (
        <div className="body-dashboard">
            <button className="edit-profile">Editar Perfil</button>
            <button className="contact-agency">Falar com PetMeets</button>
        </div>
    );
};

export default BodyDashboard;