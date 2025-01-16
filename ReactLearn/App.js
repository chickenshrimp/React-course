import React, { useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaReact, FaHeart, FaRocket, FaStar, FaCode } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  body {
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    padding: 0;
    background-color: #282c34;
    color: #61dafb;
    text-align: center;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 1rem;
  color: #61dafb;
  text-shadow: 2px 2px #ff6f61;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  svg {
    margin: 0 0.5rem;
    color: #ff6f61;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Button = styled.button`
  background-color: #61dafb;
  color: #282c34;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  font-family: 'Press Start 2P', cursive;
  cursor: pointer;
  margin: 1rem 0;
  transition: background-color 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const Card = styled.div`
  background-color: #3a3f4b;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    padding: 0.8rem;

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export default function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Добро пожаловать!</Title>
        <IconContainer>
          <FaReact size={40} />
          <FaHeart size={40} />
        </IconContainer>

        <Button onClick={handleClick}>
          {clicked ? '^.^' : 'Нажми на меня'}
        </Button>

        <Card>
          <FaRocket size={25} />
          <h3>Ставки на спорт</h3>
          <p>Здесь должна быть реклама</p>
        </Card>
        <Card>
          <FaStar size={25} />
          <h3>Лучшие звёзды</h3>
          <p>Изучи лучшие практики разработки на React.</p>
        </Card>
        <Card>
          <FaCode size={25} />
          <h3>Какой-то код</h3>
          <p>Не баг, а фича</p>
        </Card>
      </Container>
    </>
  );
};