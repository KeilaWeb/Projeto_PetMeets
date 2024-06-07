import React from "react";
import { Hero } from "../../components/Hero/Hero";
import '../../styles/components/_home.sass';
import { About } from "../../components/Sections/About";

export function Home() {
    return (
        <div className="container">
            <Hero />
            <About />
        </div>
    );
}

