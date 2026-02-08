import { FaWhatsapp } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaWhatsapp />,
  title: 'WhatsApp Marketing',
  subtitle: 'Engage customers with WhatsApp Business API and automated campaigns',
  overview: 'Leverage WhatsApp Business API for customer engagement, marketing campaigns, customer support, and automated notifications. Reach your customers directly on their preferred messaging platform.',
  benefits: [
    { title: 'WhatsApp Business API', description: 'Official WhatsApp Business integration' },
    { title: 'Bulk Messaging', description: 'Send personalized messages to thousands' },
    { title: 'Chatbot Integration', description: 'AI-powered chatbots for 24/7 support' },
    { title: 'Campaign Analytics', description: 'Track engagement, delivery, and conversions' }
  ]
})
