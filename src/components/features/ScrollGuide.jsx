import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const GuideContainer = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 12px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.colors.text};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transform: translateY(-100px);
`;

const ScrollIcon = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const ScrollGuide = () => {
  const handleClick = () => {
    const container = document.querySelector('.showcase-container');
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <GuideContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Scroll to explore
      <ScrollIcon
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FiChevronDown />
      </ScrollIcon>
    </GuideContainer>
  );
};

export default ScrollGuide; 