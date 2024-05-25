import React from 'react';
import styled from "styled-components";
import dogsHero from "../../img/dogsHero.jpeg"; 

export function Hero() {
  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          <Title>A Solução da sua</Title>
          <Subtitle>Clínica Veterinária</Subtitle>
          <p>Agendamento automatizado facilitando o cuidado que seu cliente tem por seu Pet</p>
          <Button>Saiba Mais</Button>
        </TextContainer>
        <Image src={dogsHero} alt="Hero Dogs"/>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
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
  font-size: 3rem;
  margin-bottom: 0px;
`;

const paragrafo = styled.p`
  font-size: 3rem;
  margin-bottom: 0px;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin: 0px;
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  margin-top: 30px;
  color: white;
  padding: 15px 30px;
  font-size: 1rem;
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