import { FaCog } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaCog />,
  title: 'Advanced Automation',
  subtitle: 'Streamline workflows with CI/CD pipelines and intelligent automation',
  overview: 'Implement state-of-the-art CI/CD pipelines that automate your entire software delivery lifecycle. From code commit to production deployment, we automate every step.',
  benefits: [
    { title: 'Continuous Integration', description: 'Automated testing and code quality checks' },
    { title: 'Continuous Deployment', description: 'Automated deployments to any environment' },
    { title: 'Infrastructure as Code', description: 'Terraform, CloudFormation, and Ansible automation' },
    { title: 'Monitoring & Alerts', description: 'Proactive monitoring with automated incident response' }
  ]
})
