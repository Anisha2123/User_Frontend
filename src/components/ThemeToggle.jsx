import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled(motion.button)`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.toggleBg};
  border: none;
  cursor: pointer;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <ToggleButton
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </ToggleButton>
  );
};

export default ThemeToggle; 