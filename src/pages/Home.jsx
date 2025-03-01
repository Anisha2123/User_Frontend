import { useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Banner from '../components/Banner';
import ServiceSections from '../components/sections/ServiceSections';
import Footer from '../components/Footer';
import FeaturesSection from '../components/sections/FeaturesSection';

gsap.registerPlugin(ScrollTrigger);

const MainContainer = styled.div`
  width: 125%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Home = ({ isDark, toggleTheme }) => {
  useEffect(() => {
    gsap.utils.toArray('.animate-section').forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          gsap.to(section, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out'
          });
        },
        once: true
      });
    });
  }, []);

  return (
    <MainContainer>
      <ContentWrapper>
        <Banner />
        <ServiceSections />
        <Footer />
      </ContentWrapper>
    </MainContainer>
  );
};

export default Home; 