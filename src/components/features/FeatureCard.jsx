import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${props => props.theme.colors.navBg};
  border-radius: 24px;
  padding: 1.5rem;
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &::before {
    content: '${props => props.number}';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 30px;
    height: 30px;
    background: ${props => props.theme.colors.buttonGradient};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  svg {
    font-size: 28px;
    color: white;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 12px;
  border-radius: 12px;
  display: inline-block;
`;

const FeatureCard = ({ feature, index, onClick }) => (
  <Card
    number={index + 1}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      delay: index * 0.2, 
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }}
    onClick={onClick}
  >
    <IconWrapper
      color={feature.color}
      animate={{
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <feature.icon />
    </IconWrapper>
    <ContentWrapper>
      <Title>{feature.title}</Title>
      <Description>{feature.description}</Description>
      <Value>{feature.value}</Value>
    </ContentWrapper>
  </Card>
);

export default FeatureCard; 