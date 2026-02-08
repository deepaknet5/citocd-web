import { FaHospital } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaHospital />,
  title: 'Healthcare Solutions',
  subtitle: 'Complete clinic and hospital management with patient care systems',
  overview: 'Our healthcare solutions include complete Hospital Management Systems (HMS), Electronic Health Records (EHR), appointment scheduling, telemedicine integration, and patient portals.',
  benefits: [
    { title: 'Electronic Health Records', description: 'Secure, HIPAA-compliant patient records' },
    { title: 'Appointment Scheduling', description: 'Automated scheduling and reminders' },
    { title: 'Telemedicine Integration', description: 'Virtual consultations and remote monitoring' },
    { title: 'Billing & Insurance', description: 'Automated billing and insurance claim processing' }
  ]
})
