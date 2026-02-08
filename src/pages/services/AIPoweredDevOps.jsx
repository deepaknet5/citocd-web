import { FaBrain } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
    icon: <FaBrain />,
    title: 'AI-Powered DevOps',
    subtitle: 'Intelligent automation and predictive analytics for next-generation DevOps',
    overview: 'Leverage artificial intelligence and machine learning to revolutionize your DevOps practices. Our AI-powered solutions provide intelligent automation, predictive analytics, anomaly detection, and self-healing systems that reduce manual intervention and improve reliability.',
    benefits: [
        { title: 'Intelligent Automation', description: 'AI-driven pipeline optimization and automated decision-making' },
        { title: 'Predictive Analytics', description: 'Forecast system behavior, resource needs, and potential failures' },
        { title: 'Anomaly Detection', description: 'ML-powered monitoring to identify issues before they impact users' },
        { title: 'Self-Healing Systems', description: 'Automated remediation and intelligent incident response' }
    ]
})
