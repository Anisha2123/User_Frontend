import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiHome, FiBook, FiTrendingUp, FiBriefcase, FiUsers, FiCoffee, FiAward } from 'react-icons/fi';

const SectionsContainer = styled.div`
  padding: 4rem 0;
  background: #2A0845;
`;

const Section = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  background: ${props => props.index % 2 === 0 ? 
    'linear-gradient(135deg, #2A0845 0%, #1B1464 100%)' : 
    '#2A0845'
  };
  padding: 8rem 6rem;
  width: 100%;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1200px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 968px) {
    flex-direction: column !important;
    padding: 4rem;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  margin: ${props => props.align === 'right' ? '0 auto 0 0' : '0 0 0 auto'};
  padding: ${props => props.align === 'right' ? '0 4rem 0 0' : '0 0 0 4rem'};

  @media (max-width: 1200px) {
    padding: ${props => props.align === 'right' ? '0 2rem 0 0' : '0 0 0 2rem'};
  }

  @media (max-width: 968px) {
    margin: 0 auto;
    padding: 0;
  }
`;

const Visual = styled(motion.div)`
  flex: 1;
  position: relative;
  height: 400px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: ${props => props.align === 'left' ? '0 auto 0 0' : '0 0 0 auto'};

  @media (max-width: 968px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 968px) {
    margin: 0 auto 2rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);

  svg {
    color: ${props => props.color};
    font-size: 1.5rem;
  }

  span {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  background: ${props => props.color};
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  svg {
    color: white;
    font-size: 1.2rem;
  }

  span {
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const sections = [

  {
    id: 'learnhub',
    title: 'LearnHub',
    description: 'Transform your learning experience with our comprehensive digital education platform. Access curated content, interactive materials, and personalized learning paths.',
    icon: FiBook,
    color: '#4CAF50',
    features: ['Interactive Courses', 'Digital Library', 'Study Groups'],
    floatingElements: [
      { text: 'Live Sessions', x: 60, y: -90 },
      { text: 'Smart Notes', x: -80, y: 40 },
      { text: 'Practice Tests', x: 70, y: 80 }
    ]
  },
  {
    id: 'careerboost',
    title: 'CareerBoost',
    description: 'Accelerate your career growth with AI-powered job recommendations, skill assessments, and industry insights tailored to your profile.',
    icon: FiTrendingUp,
    color: '#FF5722',
    features: ['Skill Analysis', 'Job Matching', 'Career Roadmap'],
    floatingElements: [
      { text: 'Industry Trends', x: -60, y: -70 },
      { text: 'Skill Gaps', x: 70, y: 50 },
      { text: 'Growth Path', x: -50, y: 90 }
    ]
  },
  {
    id: 'campuscareers',
    title: 'Campus Careers',
    description: 'Connect with leading companies and organizations through our integrated campus recruitment platform.',
    icon: FiBriefcase,
    color: '#2196F3',
    features: ['Company Profiles', 'Interview Prep', 'Placement Tracking'],
    floatingElements: [
      { text: 'Top Companies', x: 50, y: -85 },
      { text: 'Interview Tips', x: -70, y: 30 },
      { text: 'Success Rate', x: 60, y: 70 }
    ]
  },
  {
    id: 'alumnisphere',
    title: 'AlumniSphere',
    description: 'Bridge the gap between current students and alumni. Network with successful graduates and learn from their experiences.',
    icon: FiUsers,
    color: '#9C27B0',
    features: ['Alumni Network', 'Mentorship', 'Success Stories'],
    floatingElements: [
      { text: 'Global Network', x: -55, y: -75 },
      { text: 'Mentors', x: 75, y: 45 },
      { text: 'Events', x: -65, y: 85 }
    ]
  },
  {
    id: 'studenthub',
    title: 'Student Hub',
    description: 'Your central space for collaboration, discussion, and community engagement. Connect with peers and share knowledge.',
    icon: FiCoffee,
    color: '#6C63FF',
    features: ['Discussion Forums', 'Project Teams', 'Events Calendar'],
    floatingElements: [
      { text: 'Collaborate', x: 65, y: -80 },
      { text: 'Share Ideas', x: -75, y: 35 },
      { text: 'Connect', x: 55, y: 75 }
    ]
  }
];

// Add Success Stories Section
const SuccessStoriesSection = styled(Section)`
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(156, 39, 176, 0.1));
  padding: 8rem 6rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
    opacity: 0.9;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  ${Content} {
    margin: 0 auto;
    text-align: center;
  }
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(108, 99, 255, 0.2);
  max-width: 800px;
  margin: 2rem auto 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      color: ${props => props.color};
    }
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    font-style: italic;
  }

  .stats {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    justify-content: center;
    
    .stat {
      text-align: center;
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 12px;
      
      .value {
        color: ${props => props.color};
        font-size: 1.5rem;
        font-weight: bold;
      }
      
      .label {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        margin-top: 0.3rem;
      }
    }
  }
`;

const ServiceSections = () => {
  return (
    <SectionsContainer>
      {sections.map((section, index) => (
        <Section key={section.id} index={index}>
          <Content align={index % 2 === 0 ? 'left' : 'right'}>
            <Title
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {section.title}
            </Title>
            <Description
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {section.description}
            </Description>
            <Features>
              {section.features.map((feature, i) => (
                <FeatureItem
                  key={i}
                  color={section.color}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <section.icon />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </Features>
          </Content>
          <Visual align={index % 2 === 0 ? 'right' : 'left'}>
            {section.floatingElements.map((elem, i) => (
              <FloatingElement
                key={i}
                color={section.color}
                style={{ x: elem.x, y: elem.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <section.icon />
                <span>{elem.text}</span>
              </FloatingElement>
            ))}
          </Visual>
        </Section>
      ))}

      <SuccessStoriesSection>
        <Content>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Stories
          </Title>
          <Description
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover how our platform has transformed careers and created success stories.
          </Description>

          <StoryCard
            color="#6C63FF"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>
              <FiAward />
              From Campus to Big Tech
            </h3>
            <p>
              "The platform's comprehensive resources and mentorship program helped me land my dream job at a leading tech company. The interview preparation and industry insights were invaluable."
            </p>
            <div className="stats">
              <div className="stat">
                <div className="value">95%</div>
                <div className="label">Placement Rate</div>
              </div>
              <div className="stat">
                <div className="value">2000+</div>
                <div className="label">Success Stories</div>
              </div>
              <div className="stat">
                <div className="value">150+</div>
                <div className="label">Partner Companies</div>
              </div>
            </div>
          </StoryCard>
        </Content>
      </SuccessStoriesSection>
    </SectionsContainer>
  );
};

export default ServiceSections; 