import { FaCloud } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaCloud />,
  title: 'Cloud Migration',
  subtitle: 'Seamless migration to AWS, Azure, and Google Cloud with zero downtime',
  overview: 'Our cloud migration services help you transition from on-premises infrastructure to cloud platforms with minimal disruption. We ensure data integrity, security, and cost optimization throughout the migration process.',
  benefits: [
    { title: 'Zero Downtime', description: 'Migrate without business interruption using proven strategies' },
    { title: 'Multi-Cloud Support', description: 'AWS, Azure, GCP, and hybrid cloud solutions' },
    { title: 'Cost Optimization', description: 'Right-sizing resources for optimal cloud spending' },
    { title: 'Security & Compliance', description: 'Enterprise-grade security and regulatory compliance' }
  ]
})
