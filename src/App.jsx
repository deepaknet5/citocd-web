import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

// Service pages
import CloudMigration from './pages/services/CloudMigration'
import ApplicationModernization from './pages/services/ApplicationModernization'
import AdvancedAutomation from './pages/services/AdvancedAutomation'
import PaymentIntegration from './pages/services/PaymentIntegration'
import HealthcareSolutions from './pages/services/HealthcareSolutions'
import WhatsAppMarketing from './pages/services/WhatsAppMarketing'
import AttendanceSystems from './pages/services/AttendanceSystems'
import LMSSolutions from './pages/services/LMSSolutions'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* Service Routes */}
                    <Route path="/services/cloud-migration" element={<CloudMigration />} />
                    <Route path="/services/application-modernization" element={<ApplicationModernization />} />
                    <Route path="/services/advanced-automation" element={<AdvancedAutomation />} />
                    <Route path="/services/payment-integration" element={<PaymentIntegration />} />
                    <Route path="/services/healthcare-solutions" element={<HealthcareSolutions />} />
                    <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
                    <Route path="/services/attendance-systems" element={<AttendanceSystems />} />
                    <Route path="/services/lms-solutions" element={<LMSSolutions />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
