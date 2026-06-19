import { FaCloud } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaCloud />,
  title: 'Legacy to Clouds & Private Clouds',
  subtitle: 'Transition legacy workloads to public hyperscalers or private clouds with sovereign region data protection',
  overview: 'Seamlessly shift legacy setups to modern, scalable environments. We architect migrations to major public hyperscalers (AWS, Azure, GCP) or secure private clouds (OpenStack, VMware, Bare Metal), designing region-specific architectures that guarantee data residency compliance (GDPR, HIPAA, local jurisdiction laws).',
  benefits: [
    { title: 'Hyperscaler & Private Cloud', description: 'Deploy flexibly across AWS, Azure, GCP, or secure localized private cloud infrastructures.' },
    { title: 'Sovereign Data Protection', description: 'Implement region-specific routing and storage controls to keep sensitive data strictly within compliance zones.' },
    { title: 'Zero Downtime Cuts', description: 'Migrate active databases and live applications without service interruption using shadow cutover methods.' },
    { title: 'Legacy Modernization', description: 'Upgrade monolithic apps into lightweight container setups during the transition process.' }
  ]
})
