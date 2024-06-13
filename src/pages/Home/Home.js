import React from "react";
import { Hero } from "../../components/Hero/Hero.js";
import '../../styles/components/_home.sass';
import { About } from "../../components/About/About.js";
import { Benefits } from "../../components/index.js";
import locale from './locale/pt-BR.json';

export function Home() {

    return (
        <div className="container">
            <Hero />
            <div className="benefits-card">
                <h2 className="subtitle">A plataforma completa para seu consultório</h2>
            </div>
            <div className="container-card">
                {
                    locale.benefits.map((benefit, index) => {
                        return <Benefits
                            key={index}
                            title={benefit.title}
                            content={benefit.content}
                        />
                    })
                }
            </div>
            <About />
        </div>
    );
}

