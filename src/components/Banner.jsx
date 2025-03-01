import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiBarChart2, FiBook, FiAward, FiUsers, FiMessageCircle, FiCode, FiCpu, FiDatabase, FiGlobe, FiServer, FiTerminal } from 'react-icons/fi';

const StarryBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
`;

const LineDecoration = styled(motion.svg)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.1;
`;

const FloatingIconsContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 30%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    opacity: 0.5;
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  background: ${props => `rgba(${props.color}, 0.1)`};
  border: 1px solid ${props => `rgba(${props.color}, 0.2)`};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);

  svg {
    color: ${props => `rgba(${props.color}, 0.8)`};
    width: 50%;
    height: 50%;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  max-width: 700px;
  padding-left: 15rem;
  margin-right: 0;

  @media (max-width: 1200px) {
    padding-left: 10rem;
  }

  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

const InfographicSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  padding-right: 4rem;
  margin-left: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3.5rem, 6vw, 5.5rem);
  font-weight: 800;
  background: linear-gradient(to right, #fff, #e0e0e0);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  white-space: nowrap;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 1.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ExploreButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(45deg, #6C63FF, #4834d4);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.3);
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin-left: 4rem;

  @media (max-width: 1400px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 3rem;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -100%;
    width: 40px;
    height: 200%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    transform: rotate(45deg);
    transition: 0.5s;
    opacity: 0;
  }

  &:hover::before {
    left: 200%;
    opacity: 0.8;
    transition: 0.8s;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.color};
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover::after {
    opacity: 0.1;
  }

  &:hover {
    transform: translateX(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  }

  .number {
    font-size: 0.9rem;
    color: ${props => props.color};
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 1;
    h3 {
      color: white;
      font-size: 1rem;
      margin-bottom: 0.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${props => props.color};
        transition: transform 0.3s ease;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }
  }

  &:hover .content h3 svg {
    transform: scale(1.2);
  }
`;

const LightningPath = styled(motion.div)`
  position: absolute;
  width: 2px;
  background: ${props => props.color};
  opacity: 0;
  filter: blur(1px);
  pointer-events: none;
`;

const features = [
  {
    icon: FiBarChart2,
    title: 'Monthly Visits',
    description: 'Track our growing community.',
    color: '#6C63FF',
    path: '/monthly-visits'
  },
  {
    icon: FiBook,
    title: 'Study Material',
    description: 'Access learning resources.',
    color: '#4CAF50',
    path: '/learn-hub'
  },
  {
    icon: FiAward,
    title: 'Smart Selection',
    description: 'AI-powered recommendations.',
    color: '#FF5722',
    path: '/career-boost'
  },
  {
    icon: FiUsers,
    title: 'Faculty Directory',
    description: 'Connect with faculty.',
    color: '#2196F3',
    path: '/campus-careers'
  },
  {
    icon: FiMessageCircle,
    title: 'Community',
    description: 'Engage with fellow students.',
    color: '#9C27B0',
    path: '/student-hub'
  }
];

const floatingIcons = [
  {
    icon: FiCode,
    color: '108, 99, 255',
    size: '45px',
    position: { left: '15%', top: '20%' },
    animation: {
      y: [-20, 20],
      rotate: [0, 10],
      scale: [1, 1.1],
    }
  },
  {
    icon: FiCpu,
    color: '76, 175, 80',
    size: '35px',
    position: { left: '35%', top: '35%' },
    animation: {
      y: [-15, 15],
      rotate: [-10, 0],
      scale: [0.9, 1],
    }
  },
  {
    icon: FiDatabase,
    color: '255, 87, 34',
    size: '40px',
    position: { left: '20%', top: '60%' },
    animation: {
      y: [-25, 25],
      rotate: [-5, 5],
      scale: [1, 1.2],
    }
  },
  {
    icon: FiGlobe,
    color: '33, 150, 243',
    size: '50px',
    position: { left: '8%', top: '40%' },
    animation: {
      y: [-30, 30],
      rotate: [5, -5],
      scale: [1.1, 0.9],
    }
  },
  {
    icon: FiServer,
    color: '156, 39, 176',
    size: '38px',
    position: { left: '40%', top: '65%' },
    animation: {
      y: [-20, 20],
      rotate: [-8, 8],
      scale: [0.95, 1.05],
    }
  },
  {
    icon: FiTerminal,
    color: '255, 193, 7',
    size: '42px',
    position: { left: '30%', top: '15%' },
    animation: {
      y: [-18, 18],
      rotate: [8, -8],
      scale: [1.05, 0.95],
    }
  }
];

const BannerContainerMediaQueries = css`
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 2rem 2rem;
  }
`;

const BannerContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  ${BannerContainerMediaQueries}
`;

const Banner = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (path) => {
    navigate(path);
  };

  return (
    <BannerContainer>
      <StarryBackground>
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </StarryBackground>

      <LineDecoration
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M100,0 L0,100"
          stroke="white"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,50 L0,50"
          stroke="white"
          strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </LineDecoration>

      <FloatingIconsContainer>
        {floatingIcons.map((item, index) => (
          <FloatingIcon
            key={index}
            size={item.size}
            color={item.color}
            style={item.position}
            animate={item.animation}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <item.icon />
          </FloatingIcon>
        ))}
      </FloatingIconsContainer>

      <ContentSection>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform
          <br />
          Education
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embrace the digital revolution in learning with cutting-edge technology
          and innovative solutions.
        </Subtitle>
        <ExploreButton
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </ExploreButton>
      </ContentSection>

      <InfographicSection>
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              color={feature.color}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
              onClick={() => handleFeatureClick(feature.path)}
              whileTap={{ scale: 0.98 }}
            >
              <div className="number">0{index + 1}</div>
              <div className="content">
                <h3>
                  <feature.icon />
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
              <LightningPath
                color={feature.color}
                variants={{
                  hover: {
                    opacity: [0, 1, 0],
                    height: [0, 100, 0],
                    top: [0, "100%"],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }
                  }
                }}
              />
              <LightningPath
                color={feature.color}
                style={{ left: "60%" }}
                variants={{
                  hover: {
                    opacity: [0, 1, 0],
                    height: [0, 100, 0],
                    top: [0, "100%"],
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }
                  }
                }}
              />
            </FeatureItem>
          ))}
        </FeatureList>
      </InfographicSection>
    </BannerContainer>
  );
};

export default Banner; 