import React from 'react';
import styled from "styled-components";
import heroPet from "../../img/hero-petmeets.jpg"; 

export function Hero() {
  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          <Title>A Solução da sua Clínica Veterinária</Title>
          <Subtitle>Otimize o agendamento de consultas veterinárias em sua clínica ou hospital com o PetMeets</Subtitle>
          <p></p>
          <Button>Saiba Mais</Button>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${heroPet});
  background-size: cover; 
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 60px;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 20px;
`;

const Title = styled.h1`
  color: #5caceb;
  font-size: 4rem;
  margin-bottom: 0px;
  line-height: 1.1em;
`;

const Paragrafo = styled.p`
  font-size: 3rem;
  margin-bottom: 0px;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  weight: 400px;
  margin-top: 40px;
  color: #555;  
  line-height: 1.3em;
`;

const Button = styled.button`
  background-color: #5caceb;
  margin-top: 30px;
  color: white;
  padding: 15px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #003f7f;
    transform: translateY(0);
  }
`;
