import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollGuide from './features/ScrollGuide';
import FeatureCard from './features/FeatureCard';
import { features } from '../data/features';

const ShowcaseContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 41vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 80px 2rem 2rem;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: rgba(42, 8, 69, 0.1);
  backdrop-filter: blur(10px);
  scroll-behavior: smooth;
`;

const InfographicContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 400px;
  position: relative;
  padding: 1rem 2rem;
  margin: 1rem 0;
  min-height: min-content;
`;

const ConnectingLine = styled(motion.div)`
  position: absolute;
  left: 45px;
  top: 20px;
  width: 2px;
  height: calc(100% - 40px);
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const FeatureShowcase = () => {
  const navigate = useNavigate();
  const [showScrollGuide, setShowScrollGuide] = useState(true);

  useEffect(() => {
    const container = document.querySelector('.showcase-container');
    
    const handleScroll = () => {
      const isAtBottom = 
        container.scrollHeight - container.scrollTop <= container.clientHeight + 100;
      if (isAtBottom) {
        setShowScrollGuide(false);
      } else {
        setShowScrollGuide(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ShowcaseContainer className="showcase-container">
      <InfographicContainer
        initial="hidden"
        animate="visible"
      >
        <ConnectingLine
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={i}
            onClick={() => navigate(feature.path)}
          />
        ))}
      </InfographicContainer>

      {showScrollGuide && <ScrollGuide />}
    </ShowcaseContainer>
  );
};

export default FeatureShowcase;