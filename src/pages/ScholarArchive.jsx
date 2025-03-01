import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// ✅ Fix the worker source by pointing to the locally installed version
// ✅ Set the worker source correctly
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

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
`;

const Header = styled.div`
  margin-bottom: 3rem;
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

const FiltersSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  // border:1px solid red;
`;

const FilterGroup = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  
  option {
    background: #2A0845;
    color: white;
  }
`;
const PdfList = styled.div`
margin-top: 2rem;
`;

const PdfCard = styled.div`
background: rgba(255, 255, 255, 0.1);
padding: 1rem;
margin-bottom: 0.8rem;
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const PdfLink = styled.a`
color: white;
text-decoration: none;
font-size: 1rem;
`;
const PdfModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PdfViewer = styled.iframe`
  width: 80%;
  height: 90%;
  background: white;
  border: none;
`;


const subjectsMapping = {
  'cs': {
    '6': ['spm', 'da', 'ml', 'cc', 'cd'],
    '4': ['coa', 'os', 'sbms', 'afl', 'pdc', 'wt']
  }
};

const ScholarArchive = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [numPages, setNumPages] = useState(null); // 

  const openPdf = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setShowModal(true);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); // ✅ Set numPages on load
};
  useEffect(() => {
    if (selectedBranch === 'cs' && selectedSemester) {
      setSubjects(subjectsMapping[selectedBranch][selectedSemester] || []);
    } else {
      setSubjects([]);
    }
  }, [selectedBranch, selectedSemester]);

  useEffect(() => {
    if (selectedBranch && selectedSemester && selectedCategory && selectedSubject) {
      fetchPdfs();
    }
  }, [selectedBranch, selectedSemester, selectedCategory, selectedSubject]);

  const fetchPdfs = async () => {
    try {
      //  const response = await axios.get("http://localhost:3001/api/resources/pdfs",{
      // const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL
      // }/pdfs`, {
        const response = await axios.get("https://api.kiitwallah.live/api/resources/pdfs", {

        params: { 
          branch: selectedBranch, 
          semester: selectedSemester, 
          category: selectedCategory, 
          subject: selectedSubject 
        }
      });
  
      console.log('Fetched PDFs:', response.data); // Debugging line
      setPdfs(response.data.pdfs || []);  // Ensure we correctly set all PDFs
      setSelectedPdf(null); // ✅ Reset selected PDF when new data is fetched
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };
//   // Call fetchPdfs whenever filters change
// useEffect(() => {
//   fetchPdfs(branch, semester, category, subject);
// }, [branch, semester, category, subjects]);  // ✅ Dependencies ensure re-fetching
  

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Resources</Title>
          <Subtitle>Find study materials for your semester and subject.</Subtitle>
        </Header>
        <FiltersSection>
          <FilterGroup>
            <FilterLabel>Branch</FilterLabel>
            <Select value={selectedBranch} onChange={(e) => setSelectedBranch(e.target.value)}>
              <option value="">Select Branch</option>
              <option value="cs">Computer Science</option>
            </Select>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>Semester</FilterLabel>
            <Select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
              <option value="">Select Semester</option>
              <option value="6">Semester 6</option>
              <option value="4">Semester 4</option>
            </Select>
          </FilterGroup>
          <FilterGroup>
          <FilterLabel>Category</FilterLabel>
            <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="notes">Notes</option>
              <option value="pyq">PYQ</option>
            </Select>
          </FilterGroup>
          <FilterGroup>
            <FilterLabel>Subject</FilterLabel>
            <Select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>{subject.toUpperCase()}</option>
              ))}
            </Select>
          </FilterGroup>
        </FiltersSection>
        {/* show pdfs in next tab with downlaod option */}
         {/* <PdfList>
          {pdfs.length > 0 ? (
            pdfs.map((pdf, index) => (
              <PdfCard key={index}>
                <PdfLink href={`http://localhost:3001${pdf.url}`} target="_blank" rel="noopener noreferrer">
                  {pdf.name}
                </PdfLink>
              </PdfCard>
            ))
          ) : (
            <p>No PDFs found</p>
          )}
        </PdfList> */}
              {/* PDF Modal */}
      {/* <PdfModal show={showModal} onClick={() => setShowModal(false)}>
        <PdfViewer src={selectedPdf} sandbox="allow-scripts allow-same-origin"></PdfViewer>
      </PdfModal> */}

      {/* PDF List */}
      <PdfList>
        {pdfs.map((pdf, index) => (
          // <PdfCard key={index} onClick={() => openPdf(`http://localhost:3001${pdf.url}`)}>
            // <PdfCard key={index} onClick={() => openPdf(`http://localhost:3001/api/resources${pdf.url}`)}>

          // <PdfCard key={index} onClick={() => openPdf(`${import.meta.env.VITE_API_BASE_URL || "https://kiitwallah.live/api/resources"}${pdf.url}`)}> 
          //  <PdfCard key={index} onClick={() => openPdf(`${import.meta.env.VITE_API_BASE_URL}${pdf.url}`)}>
          //  <PdfCard key={index} onClick={() => openPdf(`https://kiitwallah.live${pdf.url}`)}>
          // <PdfCard key={index} onClick={() => openPdf(`https://kiitwallah.live/api/resources/uploads/${pdf.url}`)}>
           <PdfCard key={index} onClick={() => openPdf(`https://api.kiitwallah.live/api/resources${pdf.url}`)}> 
          {/* // <PdfCard key={index} onClick={() => openPdf(`http://localhost:3001/api/resources${pdf.url}`)}> */}
            {pdf.name}
          </PdfCard>
        ))}
      </PdfList>
    

      {selectedPdf && (
        <div style={{ width: "80%", margin: "20px auto" }}>
           <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
           {Array.from(new Array(numPages), (el, index) => (
               <Page key={`page_${index + 1}`} pageNumber={index + 1} />
           ))}
          </Document>
        </div>
      )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ScholarArchive;
