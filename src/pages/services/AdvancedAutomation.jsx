import { FaCog } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaCog />,
  title: 'Deterministic Automation (No-LLM)',
  subtitle: 'Secure, local, and deterministic automation agents running without external LLM interventions',
  overview: 'Deploy secure, production-grade automation workflows. By utilizing structured, rule-based scripts and local agents that operate entirely without external LLM API dependencies, we guarantee 100% predictable system behavior, zero data leakage, and maximum execution speed.',
  benefits: [
    { title: 'Zero LLM Interventions', description: 'Execute incident recovery runbooks, log rotations, and service restarts without external API calls.' },
    { title: 'Hallucination-Free Recovery', description: 'Avoid unpredictable LLM decisions by employing local, deterministic agents built for absolute safety.' },
    { title: 'Zero Data Leakage', description: 'Keep all configuration files, error logs, and environment metadata local within your private cloud network.' },
    { title: 'Event-Driven Healing', description: 'Trigger automatic hotfixes and resource scaling instantly upon specific system alerts.' }
  ]
})
