import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiGithub, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { getApiUrl } from '../config/api';

const PageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(135deg, #2A0845 0%, #1B1464 100%);
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: fixed;
  inset: 0;
  width: 100%;
  padding: 90px 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 4rem;
  height: 100%;
  max-width: 50%;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const RightSection = styled.div`
  flex: 1;
  position: relative;
  background: url('https://res.cloudinary.com/dqt4zammn/image/upload/v1739110459/freepik__background__29379_x3ws8t_b_rgb_2A0845_xx4ebh.png') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 50%;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(42, 8, 69, 0.8), rgba(27, 20, 100, 0.4));
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 0.3rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 0.8rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 1.2rem;
  padding-right: ${props => props.type === 'password' ? '2.5rem' : '1.2rem'};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SignUpButton = styled(motion.button)`
  width: 100%;
  padding: 0.7rem;
  background: linear-gradient(45deg, #2A0845, #6c63ff);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const TermsText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.75rem;
  
  a {
    color: #6c63ff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomText = styled.p`
  color: white;
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.85rem;

  a {
    color: #6c63ff;
    text-decoration: none;
    margin-left: 0.5rem;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmailVerificationContainer = styled.div`
  margin: 1rem 0;
`;

const VerifyEmailButton = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  background: rgba(108, 99, 255, 0.2);
  border: 1px solid #6C63FF;
  border-radius: 10px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(108, 99, 255, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const VerifyEmailSection = styled.div`
  margin: 0.8rem 0;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .pe_verify_email button {
    width: 100% !important;
    padding: 0.7rem !important;
    background: linear-gradient(45deg, #2A0845, #6c63ff) !important;
    border: none !important;
    border-radius: 10px !important;
    color: white !important;
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: transform 0.2s ease !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 0.5rem !important;
    margin: 0 auto !important;
  }

  .pe_verify_email button:hover {
    transform: scale(1.02) !important;
    background: linear-gradient(45deg, #3a0b5e, #7c74ff) !important;
  }

  .pe_verify_email button:active {
    transform: scale(0.98) !important;
  }

  .pe_verify_email button img {
    display: none !important;
  }
`;

const EmailVerifyText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
  text-align: center;
`;

const VerificationStatus = styled(motion.div)`
  color: ${props => props.$isVerified ? '#4CAF50' : '#FFA726'};
  font-size: 0.85rem;
  text-align: center;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.$isVerified ? 'rgba(76, 175, 80, 0.1)' : 'transparent'};
  padding: 0.5rem;
  border-radius: 8px;
  border: ${props => props.$isVerified ? '1px solid rgba(76, 175, 80, 0.2)' : 'none'};
`;

const ErrorMessage = styled.span`
  color: #ff6b6b;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: block;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    rollNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verifiedEmail, setVerifiedEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Check if form is valid for email verification
  const canVerifyEmail = () => {
    return (
      formData.name.trim().length >= 3 &&
      formData.rollNumber.trim().length >= 5 &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword
    );
  };

  // Validate form fields
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 3 ? 'Name must be at least 3 characters' : '';
      case 'rollNumber':
        return value.trim().length < 5 ? 'Roll number must be at least 5 characters' : '';
      case 'password':
        return value.length < 6 ? 'Password must be at least 6 characters' : '';
      case 'confirmPassword':
        return value !== formData.password ? 'Passwords do not match' : '';
      default:
        return '';
    }
  };

  // Handle input changes with validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  useEffect(() => {
    // Clear any existing phoneEmailReceiver
    delete window.phoneEmailReceiver;

    // Initialize Phone Email verification
    const script = document.createElement('script');
    script.src = 'https://www.phone.email/verify_email_v1.js';
    script.async = true;
    document.body.appendChild(script);

    // Hide the email verification button if form is not valid
    const observer = new MutationObserver(() => {
      const verifyButton = document.querySelector('.pe_verify_email button');
      if (verifyButton) {
        verifyButton.disabled = !canVerifyEmail();
        verifyButton.style.opacity = canVerifyEmail() ? '1' : '0.5';
        verifyButton.style.cursor = canVerifyEmail() ? 'pointer' : 'not-allowed';
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Function to receive verified email JSON URL
    window.phoneEmailReceiver = (userObj) => {
      if (isVerifying) return; // Prevent multiple calls
      setIsVerifying(true);
      
      const user_json_url = userObj.user_json_url;
      
      // Send email JSON URL to backend
      const verifyEmail = async (url) => {
        try {
          const response = await fetch(getApiUrl('auth/verifyEmail'), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_json_url: url }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data.email) {
            setVerifiedEmail(data.email);
            setIsEmailVerified(true);
          }
        } catch (error) {
          console.error("Email verification error:", error);
          if (error.message.includes('CONNECTION_REFUSED')) {
            alert("Server is not running. Please try again later.");
          } else {
            alert("Failed to verify email. Please try again.");
          }
          setIsVerifying(false);
        }
      };

      verifyEmail(user_json_url);
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete window.phoneEmailReceiver;
      observer.disconnect();
    };
  }, [isVerifying, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isEmailVerified) {
      alert('Please verify your email first!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(getApiUrl('auth/signup'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: verifiedEmail,
          password: formData.password,
          rollNumber: formData.rollNumber
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully!');
        navigate('/login');
      } else {
        alert(data.message || 'Failed to create account');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred while creating your account');
    }
  };

  return (
    <PageContainer>
      <LeftSection>
        <FormContainer>
          <Title>Create Account</Title>
          <Subtitle>Join KIITWALLAH community today</Subtitle>
          
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              {formErrors.name && (
                <ErrorMessage>{formErrors.name}</ErrorMessage>
              )}
            </InputGroup>
            <InputGroup>
              <Input 
                type="text" 
                name="rollNumber"
                placeholder="Roll Number" 
                value={formData.rollNumber}
                onChange={handleInputChange}
                required 
              />
              {formErrors.rollNumber && (
                <ErrorMessage>{formErrors.rollNumber}</ErrorMessage>
              )}
            </InputGroup>
            <InputGroup>
              <Input 
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password" 
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {formErrors.password && (
                <ErrorMessage>{formErrors.password}</ErrorMessage>
              )}
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </PasswordToggle>
            </InputGroup>
            <InputGroup>
              <Input 
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {formErrors.confirmPassword && (
                <ErrorMessage>{formErrors.confirmPassword}</ErrorMessage>
              )}
              <PasswordToggle
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </PasswordToggle>
            </InputGroup>

            <VerifyEmailSection>
              <EmailVerifyText>
                {canVerifyEmail() 
                  ? 'Verify your email address to continue' 
                  : 'Please fill in all fields correctly to verify email'
                }
              </EmailVerifyText>
              <div 
                className="pe_verify_email" 
                data-client-id="11658316407910679845"
              ></div>
              {isEmailVerified && (
                <VerificationStatus $isVerified={true}>
                  Email verified successfully: {verifiedEmail}
                </VerificationStatus>
              )}
            </VerifyEmailSection>

            <SignUpButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={!isEmailVerified}
              style={{ opacity: isEmailVerified ? 1 : 0.7 }}
            >
              Create Account
            </SignUpButton>

            <TermsText>
              By signing up, you agree to our{' '}
              <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Policy</Link>
            </TermsText>

            <BottomText>
              Already have an account?
              <Link to="/login">Sign In</Link>
            </BottomText>
          </form>
        </FormContainer>
      </LeftSection>
      <RightSection />
    </PageContainer>
  );
};

export default SignUp; 