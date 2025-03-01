import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiHash, FiCalendar, FiEdit3, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { getApiUrl } from '../config/api';

const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  inset: 0;
  width: 100%;
  padding: 90px 0 20px;
`;

const ContentWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 90%;
  max-width: 1200px;
  height: 90%;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarSection = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const EditButton = styled(motion.button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #6c63ff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #5a52cc;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  color: white;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  margin: 0 0 10px 0;
  font-weight: 600;
  background: linear-gradient(45deg, #fff, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Role = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    background: rgba(108, 99, 255, 0.2);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
  }
  
  h3 {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin: 0;
    word-break: break-word;
  }
`;

const LogoutButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 77, 79, 0.2);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  opacity: ${props => props.disabled ? 0.7 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background: ${props => props.disabled ? 'rgba(255, 77, 79, 0.2)' : 'rgba(255, 77, 79, 0.3)'};
  }
`;

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const defaultAvatar = "https://res.cloudinary.com/dqt4zammn/image/upload/v1737284956/v7akmkfqc92i2hygkrim.png";
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(getApiUrl('/auth/logout'), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } finally {
      setIsLoggingOut(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      <ContentWrapper
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LogoutButton
          onClick={handleLogout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? 'Logging out...' : <><FiLogOut /> Logout</>}
        </LogoutButton>

        <Header>
          <AvatarSection>
            <Avatar src={user.avatar || defaultAvatar} alt="Profile" />
            <EditButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiEdit3 />
            </EditButton>
          </AvatarSection>
          <UserInfo>
            <Name>{user.name || 'User Name'}</Name>
            <Role>
              <span>Student</span>
              <span>KIIT University</span>
            </Role>
          </UserInfo>
        </Header>

        <InfoGrid>
          <InfoCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <h3><FiUser /> Full Name</h3>
            <p>{user.name || 'Not provided'}</p>
          </InfoCard>

          <InfoCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3><FiMail /> Email Address</h3>
            <p>{user.email || 'Not provided'}</p>
          </InfoCard>

          <InfoCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <h3><FiHash /> Roll Number</h3>
            <p>{user.rollNumber || 'Not provided'}</p>
          </InfoCard>

          <InfoCard
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h3><FiCalendar /> Join Date</h3>
            <p>{new Date(user.createdAt || Date.now()).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
          </InfoCard>
        </InfoGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Dashboard; 