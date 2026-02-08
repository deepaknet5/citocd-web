import { FaShieldAlt } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
    icon: <FaShieldAlt />,
    title: 'DevSecOps',
    subtitle: 'Security-first approach integrating security into every phase of DevOps',
    overview: 'Embed security practices throughout the entire DevOps lifecycle. Our DevSecOps solutions ensure compliance, automate security testing, implement zero-trust architecture, and provide continuous security monitoring without slowing down development velocity.',
    benefits: [
        { title: 'Security Automation', description: 'Automated security testing, vulnerability scanning, and compliance checks' },
        { title: 'Shift-Left Security', description: 'Integrate security early in the development process' },
        { title: 'Zero-Trust Architecture', description: 'Implement least-privilege access and continuous verification' },
        { title: 'Compliance & Governance', description: 'Automated compliance monitoring for SOC2, HIPAA, PCI-DSS, and more' }
    ]
})
