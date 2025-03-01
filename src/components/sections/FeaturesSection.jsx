import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { features } from '../../data/features';

const SectionContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 41vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 20, 140, 0.1);
  backdrop-filter: blur(8px);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.navBg};
  border-radius: 20px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '${props => props.number}';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 0.8rem;
    font-weight: bold;
    color: ${props => props.color};
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px ${props => props.color}33;

  svg {
    width: 25px;
    height: 25px;
    color: white;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 0;
`;

const Value = styled.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  background: ${props => `${props.color}15`};
  color: ${props => props.color};
  border-radius: 12px;
  font-weight: 500;
`;

const BackgroundGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(74, 20, 140, 0.05) 0%,
    transparent 70%
  );
  pointer-events: none;
`;

const FeaturesSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <SectionContainer>
      <BackgroundGlow
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FeaturesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            variants={cardVariants}
            color={feature.color}
            number={`0${index + 1}`}
            onClick={() => handleCardClick(feature.path)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <IconWrapper
              color={feature.color}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
            >
              <feature.icon />
            </IconWrapper>
            <Title>{feature.title}</Title>
            <Value color={feature.color}>{feature.value}</Value>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </SectionContainer>
  );
};

export default FeaturesSection; 