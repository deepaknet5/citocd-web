import { FaBrain } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
    icon: <FaBrain />,
    title: 'L1 Support AI Agents',
    subtitle: 'Deploy self-hosted, autonomous AI agents to automate log analysis and L1 incident resolution',
    overview: 'Free up your engineering team by automating repetitive tier-1 tasks. Our proprietary, self-hosted AI agents run securely within your private cloud environment to automatically detect, diagnose, and remediate standard system alerts and L1 support issues in real-time.',
    benefits: [
        { title: 'L1 Alert Automation', description: 'Automatically resolve standard container faults, memory leaks, and CPU spikes.' },
        { title: 'Self-Healing Runs', description: 'Trigger secure, local remediation scripts to recover failed services instantly.' },
        { title: 'Intelligent Log Scanning', description: 'Detect anomalies and trace error stack traces before they impact end users.' },
        { title: 'No Escalation Latency', description: 'Reduce incident resolution times from hours to seconds with 24/7 autonomous monitoring.' }
    ]
})
