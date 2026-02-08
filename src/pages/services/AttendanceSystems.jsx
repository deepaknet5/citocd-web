import { FaMapMarkerAlt } from 'react-icons/fa'
import { createServicePage } from './ServiceTemplate'

export default createServicePage({
  icon: <FaMapMarkerAlt />,
  title: 'Attendance Systems',
  subtitle: 'Geo-location based attendance tracking with real-time monitoring',
  overview: 'Smart attendance management with GPS tracking, geo-fencing, face recognition, and mobile check-in/out. Perfect for field teams, remote workers, and office staff.',
  benefits: [
    { title: 'GPS Tracking', description: 'Real-time location tracking and geo-fencing' },
    { title: 'Face Recognition', description: 'Biometric attendance with face detection' },
    { title: 'Mobile Check-in', description: 'Easy mobile app for check-in/out' },
    { title: 'Reports & Analytics', description: 'Comprehensive attendance reports and insights' }
  ]
})
