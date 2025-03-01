import { FiUsers, FiBook, FiAward, FiBarChart2, FiMessageCircle, FiCalendar } from 'react-icons/fi';

export const features = [
  {
    id: 'monthly-visits',
    title: 'Monthly Visits',
    description: 'Track our growing community with over 10,000 monthly active users accessing educational resources. Our platform provides a seamless experience for students to access study materials, connect with peers, and enhance their learning journey.',
    value: '10K+',
    icon: FiBarChart2,
    path: '/statistics',
    color: '#6C63FF',
    additionalStats: [
      { value: '45min', label: 'Avg. Session' },
      { value: '89%', label: 'Return Rate' }
    ]
  },
  {
    id: 'pyqs',
    title: 'Previous Year Papers',
    description: 'Access a comprehensive collection of previous year questions with detailed solutions.',
    value: '500+ Papers',
    icon: FiBook,
    path: '/resources',
    color: '#4CAF50'
  },
  {
    id: 'section-selection',
    title: 'Smart Section Selection',
    description: 'AI-powered system to help you choose the perfect section based on your preferences.',
    value: 'AI Powered',
    icon: FiAward,
    path: '/sections',
    color: '#FF5722'
  },
  {
    id: 'faculty-details',
    title: 'Faculty Directory',
    description: 'Detailed information about faculty members, their expertise, and contact details.',
    value: 'Complete Info',
    icon: FiUsers,
    path: '/faculty',
    color: '#2196F3'
  },
  {
    id: 'connect',
    title: 'KIIT Community',
    description: 'Connect with fellow KIITians, share resources, and collaborate on projects.',
    value: 'Live Connect',
    icon: FiMessageCircle,
    path: '/connect',
    color: '#9C27B0'
  },
  {
    id: 'schedule',
    title: 'Class Schedule',
    description: 'Stay organized with your personalized class schedule and important academic dates.',
    value: 'Real-time',
    icon: FiCalendar,
    path: '/schedule',
    color: '#FF9800'
  }
]; 