import React from "react";
import { Hero } from "../../components/Hero";
import styled from "styled-components";

export function Home() {
    return (
        <Container>
            <Hero />
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
`;
