import { FaShieldAlt } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
    icon: <FaShieldAlt />,
    title: 'Security & DevOps Assessments',
    subtitle: 'Conduct comprehensive maturity audits of your cloud environment, access rules, and delivery pipelines',
    overview: 'Identify hidden vulnerabilities and performance bottlenecks before they escalate. Our DevOps and security assessments provide a thorough evaluation of your current cloud posture, measuring your setups against zero-trust frameworks, release velocity goals, and regulatory standards (SOC2, ISO 27001, HIPAA).',
    benefits: [
        { title: 'Maturity Scoring', description: 'Get a clear blueprint showing where your pipelines stand in security, speed, and reliability.' },
        { title: 'IAM & Access Auditing', description: 'Find and fix over-privileged user roles, exposed secrets, and unconfigured firewall rules.' },
        { title: 'Compliance Readiness', description: 'Audit configuration logs automatically to prep your infrastructure for SOC2 and ISO compliance.' },
        { title: 'Vulnerability Detection', description: 'Integrate automated static and dynamic code analysis (SAST/DAST) into your existing flow.' }
    ]
})
