import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiUsers, FiBook, FiAward, FiBarChart2, FiMessageCircle } from 'react-icons/fi';

const OrbitContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 41vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const CenterLogo = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => props.theme.colors.buttonGradient};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 30px rgba(74, 20, 140, 0.3);

  img {
    width: 80px;
    height: 80px;
  }
`;

const OrbitRing = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureNode = styled(motion.div)`
  position: absolute;
  width: 100px;
  padding: 15px;
  background: ${props => props.theme.colors.navBg};
  border-radius: 12px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${props => props.theme.colors.buttonGradient};
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme.colors.text};
  }
`;

const FeatureTitle = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: 500;
`;

const FeatureValue = styled.span`
  font-size: 16px;
  color: ${props => props.theme.colors.accent};
  font-weight: bold;
`;

const features = [
  {
    id: 'monthly-visits',
    title: 'Monthly Visits',
    value: '10K+',
    icon: FiBarChart2,
    path: '/statistics'
  },
  {
    id: 'pyqs',
    title: 'PYQs',
    value: '500+',
    icon: FiBook,
    path: '/resources'
  },
  {
    id: 'section-selection',
    title: 'Section Selection',
    value: 'Smart',
    icon: FiAward,
    path: '/sections'
  },
  {
    id: 'faculty-details',
    title: 'Faculty Details',
    value: 'Complete',
    icon: FiUsers,
    path: '/faculty'
  },
  {
    id: 'connect',
    title: 'Connect with KIITians',
    value: 'Live',
    icon: FiMessageCircle,
    path: '/connect'
  }
];

const FeatureOrbit = () => {
  const navigate = useNavigate();

  return (
    <OrbitContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CenterLogo
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img src="/kit-connect-logo.png" alt="KIT Connect" />
        </CenterLogo>

        {features.map((feature, index) => {
          const angle = (index * 360) / features.length;
          const radius = 200;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={feature.id}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
              }}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                x: x,
                y: y,
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2,
              }}
            >
              <FeatureNode
                onClick={() => navigate(feature.path)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <feature.icon />
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureValue>{feature.value}</FeatureValue>
              </FeatureNode>
            </motion.div>
          );
        })}

        {/* Decorative orbit rings */}
        {[1, 2, 3].map((ring) => (
          <OrbitRing
            key={ring}
            style={{
              width: `${400 + ring * 50}px`,
              height: `${400 + ring * 50}px`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + ring * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </OrbitContainer>
  );
};

export default FeatureOrbit; 