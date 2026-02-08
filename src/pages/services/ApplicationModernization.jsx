import { FaRocket } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaRocket />,
  title: 'Application Modernization',
  subtitle: 'Transform legacy systems into modern, scalable cloud-native applications',
  overview: 'We help modernize your legacy applications using microservices, containers, and cloud-native architectures. Our approach ensures improved performance, scalability, and maintainability.',
  benefits: [
    { title: 'Microservices Architecture', description: 'Break monoliths into scalable microservices' },
    { title: 'Containerization', description: 'Docker and Kubernetes orchestration' },
    { title: 'API-First Design', description: 'Modern REST & GraphQL APIs' },
    { title: 'Improved Performance', description: '10x faster response times and scalability' }
  ]
})
