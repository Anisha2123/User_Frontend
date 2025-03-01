import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.navBg};
  color: ${props => props.theme.colors.text};
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.accent};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: ${props => props.theme.colors.textLight};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background: ${props => props.theme.colors.accent};
      transform: translateY(-3px);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>KIIT WALLAH</h3>
          <p>Transforming education through technology and innovation.</p>
          <SocialLinks>
            <motion.a 
              href="https://github.com/Anshuman0010" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/anshuman-rai-15062016b/" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:anshumanrai180@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
            </motion.a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Resources</h3>
          <ul>
            <li><a href="/pyqs">Previous Year Papers</a></li>
            <li><a href="/notes">Study Notes</a></li>
            <li><a href="/schedule">Class Schedule</a></li>
            <li><a href="/faculty">Faculty Directory</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact Us</h3>
          <p>KIIT University</p>
          <p>Bhubaneswar, Odisha</p>
          <p>India - 751024</p>
          <p>Email: contact@kiitwallah.com</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 