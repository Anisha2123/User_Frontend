import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  padding: 6rem 2rem 2rem;
  color: white;
`;

const StudentHub = () => {
  return (
    <PageContainer>
      <h1>Student Hub</h1>
      {/* Content will be added later */}
    </PageContainer>
  );
};

export default StudentHub; 