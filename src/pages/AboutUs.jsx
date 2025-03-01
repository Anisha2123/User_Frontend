import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import "../styles/about.css";

const AboutContainer = styled.div`
  padding: 5rem 2rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
//   border:1px solid red;

  h2 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.accent};
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
//   border:1px solid red;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 12px;
  padding: 2.5rem;
  width: 320px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    border: 4px solid ${props => props.theme.colors.accent};
  }

  h4 {
    margin: 0.5rem 0;
    color: ${props => props.theme.colors.accent};
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
  }

  a {
    margin: 0 0.5rem;
    color: ${props => props.theme.colors.textLight};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Anshuman Rai',
      job: 'Software Engineer at LTIMindTree',
      year: '4th year',
      image: 'path/to/image1.jpg',
      github: 'https://github.com/Anshuman0010',
      linkedin: 'https://www.linkedin.com/in/anshuman-rai-15062016b/',
    },
    {
      name: 'Sanam Sahu',
      job: 'Software Engineer at KPIT',
      year: '4th year',
      image: 'path/to/image2.jpg',
      github: 'https://github.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      name: 'Alice Johnson',
      job: 'UI/UX Designer',
      year: '2021',
      image: 'path/to/image3.jpg',
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
    },
  ];

  return (
    <AboutContainer>
      <h2>About Us</h2>
      <CardContainer>
        {teamMembers.map(member => (
          <Card key={member.name}>
            {/* <img src={member.image} alt={member.name} /> */}
            <h4>{member.name}</h4>
            <p>{member.job}</p>
            <p>{member.year}</p>
            <div>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </div>
          </Card>
        ))}
      </CardContainer>
    </AboutContainer>
  );
};

export default AboutUs;
