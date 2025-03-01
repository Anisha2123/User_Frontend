import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiPenTool, FiTrendingUp, FiDollarSign } from 'react-icons/fi';
import Footer from '../components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  color: white;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
`;

const CategorySection = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  padding: 0 0 1rem;
`;

const Categories = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
`;

const CategoryCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  flex: 1;
  min-width: 220px;
  max-width: calc(20% - 1rem);

  @media (max-width: 1200px) {
    max-width: calc(25% - 1rem);
  }

  @media (max-width: 992px) {
    max-width: calc(33.33% - 1rem);
  }

  @media (max-width: 768px) {
    max-width: calc(50% - 1rem);
  }

  svg {
    font-size: 1.5rem;
    color: #6C63FF;
  }
`;

const JobsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  flex: 1;
  align-content: flex-start;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
`;

const JobType = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(108, 99, 255, 0.2);
  border-radius: 20px;
  color: #6C63FF;
  white-space: nowrap;
`;

const JobContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const JobFooter = styled.div`
  margin-top: auto;
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: white;
`;

const CompanyName = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const JobStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin-top: 1rem;
`;

const CareerElevate = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Career Elevate</Title>
          <Subtitle>Find the Jobs that fits your career aspirations.</Subtitle>
        </Header>

        <CategorySection>
          <Categories>
            {[
              { icon: <FiCode />, name: 'Software Development' },
              { icon: <FiDatabase />, name: 'Data Science' },
              { icon: <FiPenTool />, name: 'Graphic Design' },
              { icon: <FiTrendingUp />, name: 'Marketing' },
              { icon: <FiDollarSign />, name: 'Finance' },
            ].map((category) => (
              <CategoryCard
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span>{category.name}</span>
              </CategoryCard>
            ))}
          </Categories>
        </CategorySection>

        <JobsSection>
          {[
            {
              title: 'DBA - Associate Manager',
              company: 'IRIS Software',
              type: 'In Office',
              views: '415 Views',
              timeLeft: '12 days left'
            },
            {
              title: 'Business Analyst',
              company: 'HSBC',
              type: 'In Office',
              views: '1,026 Views',
              timeLeft: '12 days left'
            },
            {
              title: 'Operations Support',
              company: 'American Express',
              type: 'In Office',
              views: '598 Views',
              timeLeft: '11 days left'
            },
            {
              title: 'Research Analyst',
              company: 'WTW',
              type: 'In Office',
              views: '656 Views',
              timeLeft: '11 days left'
            }
          ].map((job, index) => (
            <JobCard
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <JobHeader>
                <CompanyLogo>{job.company[0]}</CompanyLogo>
                <JobType>{job.type}</JobType>
              </JobHeader>
              <JobContent>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <JobFooter>
                  <JobStats>
                    <span>{job.views}</span>
                    <span>•</span>
                    <span>{job.timeLeft}</span>
                  </JobStats>
                </JobFooter>
              </JobContent>
            </JobCard>
          ))}
        </JobsSection>

      </ContentWrapper>
    </PageContainer>
  );
};

export default CareerElevate; 