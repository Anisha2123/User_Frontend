import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Base64 encoded SVG logo


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

const progress = keyframes`
  0% {
    stroke-dasharray: 0, 628;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 314, 314;
    stroke-dashoffset: -157;
  }
  100% {
    stroke-dasharray: 628, 0;
    stroke-dashoffset: -628;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVGLoader = styled.svg`
  position: absolute;
  width: 200px;
  height: 200px;
  animation: ${rotate} 2s linear infinite;
`;

const Circle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 4;
  stroke: #6C63FF;
  stroke-linecap: round;
  animation: ${progress} 1.5s ease-in-out infinite;
  transform-origin: center;
`;

const LogoContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  background: rgba(42, 8, 69, 0.9);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(108, 99, 255, 0.2);
`;

const Logo = styled(motion.img)`
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: brightness(1.2);
`;

const Message = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  text-align: center;
  max-width: 300px;
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
`;

const Dots = styled.span`
  display: inline-block;
  &::after {
    display: inline-block;
    content: '';
    animation: dots 1.5s linear infinite;
  }

  @keyframes dots {
    0% { content: ''; }
    25% { content: '.'; }
    50% { content: '..'; }
    75% { content: '...'; }
    100% { content: ''; }
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(108, 99, 255, 0.2) 0%, transparent 70%);
  filter: blur(20px);
`;

const LoadingScreen = ({ message = "Loading" }) => {
  return (
    <Container>
      <BackgroundGlow />
      <LoaderContainer>
        <SVGLoader viewBox="0 0 200 200">
          <Circle cx="100" cy="100" r="90" />
        </SVGLoader>
        <LogoContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo
            src="https://res.cloudinary.com/dqt4zammn/image/upload/b_rgb:290846/c_crop,ar_1:1/v1739117879/KW_1_yeosmd.png"
            alt="KIITWALLAH"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <Message
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {message}<Dots />
          </Message>
        </LogoContainer>
      </LoaderContainer>
    </Container>
  );
};

export default LoadingScreen; 