import { FaCreditCard } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaCreditCard />,
  title: 'Payment Integration',
  subtitle: 'Secure payment gateways with multi-currency and compliance support',
  overview: 'Integrate leading payment gateways including Stripe, Razorpay, PayPal, and more. We ensure PCI-DSS compliance, fraud prevention, and seamless checkout experiences.',
  benefits: [
    { title: 'Multiple Payment Gateways', description: 'Stripe, Razorpay, PayPal, and regional gateways' },
    { title: 'Multi-Currency Support', description: 'Accept payments in 100+ currencies' },
    { title: 'PCI-DSS Compliance', description: 'Enterprise-grade security and compliance' },
    { title: 'Fraud Prevention', description: 'AI-powered fraud detection and prevention' }
  ]
})
