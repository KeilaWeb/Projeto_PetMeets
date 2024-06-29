import React from "react";
import { Hero } from "../../components/Hero/Hero.js";
import '../../styles/components/_home.sass';
import { About } from "../../components/About/About.js";
import { Benefits } from "../../components/index.js";
import locale from './locale/pt-BR.json';

export function HomePage() {
    return (
        <div className="container">
            <Hero />
            <div className="st-container">
                <div className="content-no-padding-bottom">
                    <div className="benefits-card">
                        <h2 className="color-dark-blue text-align padding-bottom">A plataforma completa para seu consultório</h2>
                    </div>
                </div>   
            </div>           
            <div className="st-container">
                <div className="container-card container-content-no-padding gap-cards">
                    {locale.benefits.map((benefit, index) => (
                        <Benefits
                            key={index}
                            title={benefit.title}
                            content={benefit.content}
                        />
                    ))}
                </div>
            </div>
            <About />
        </div>
    );
}

export default HomePage;