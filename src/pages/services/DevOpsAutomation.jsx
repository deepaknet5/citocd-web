import { FaSync } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaSync />,
  title: 'DevOps Automation & CI/CD',
  subtitle: 'Build, test, and deploy with fully automated workflows and infrastructure-as-code',
  overview: 'Accelerate your software release cycles and eliminate manual configuration errors. We design and build enterprise-grade continuous integration and continuous deployment (CI/CD) pipelines, automated testing structures, and automated infrastructure provisioning (Infrastructure as Code) using tools like Terraform, Ansible, and Git. This ensures that every deployment is predictable, secure, and lightning-fast.',
  benefits: [
    { title: 'Continuous Delivery', description: 'Deliver features, patches, and configurations to production in minutes rather than days.' },
    { title: 'Infrastructure as Code', description: 'Define and spin up your cloud networks, databases, and compute nodes dynamically through declarative code.' },
    { title: 'Automated Testing Rigs', description: 'Run automated regression, unit, and integration testing on every single git push before staging or production.' },
    { title: 'Configuration Management', description: 'Keep environments consistent and prevent configuration drift automatically across dev, staging, and production.' }
  ]
})
