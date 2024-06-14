import React from "react";
import { Hero } from "../../components/Hero/Hero.js";
import '../../styles/components/_home.sass';
import { About } from "../../components/About/About.js";
import { Benefits } from "../../components/index.js";
import locale from './locale/pt-BR.json';
import heroImage from '../../img/petmeets-img.png'

export function Home() {
return (
    <div className="container">
        <Hero />
        <div className="st-container">
            <div className="container-content">
                <div className="benefits-card">
                    <h1 className="title text-align">A plataforma completa para seu consultório</h1>
                </div>
            </div>   
        </div>           
      <div className="st-container">
      <div className="benefits-content">
          <img className="home-benefits-image" src={heroImage} alt="pet" />
            <div className="container-card">
                {
                    locale.benefits.map((benefit, index) => {
                    return (
                        <Benefits
                        key={index}
                        title={benefit.title}
                        content={benefit.content}
                        />
                    );
                    })
                }
                </div>
            </div>
        </div>
        <About />
    </div>
);
}

