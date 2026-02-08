import { FaGraduationCap } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaGraduationCap />,
  title: 'LMS Solutions',
  subtitle: 'Comprehensive learning management systems for corporate and education',
  overview: 'Full-featured Learning Management System with course creation, student tracking, assessments, certificates, and analytics. Ideal for corporate training, online education, and skill development.',
  benefits: [
    { title: 'Course Management', description: 'Create and manage courses with rich multimedia' },
    { title: 'Student Tracking', description: 'Track progress, assignments, and performance' },
    { title: 'Assessments & Quizzes', description: 'Automated grading and instant feedback' },
    { title: 'Certificates & Badges', description: 'Automated certificate generation and gamification' }
  ]
})
