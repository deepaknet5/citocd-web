import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Services from './pages/Services'

// Service pages - DevOps & Cloud focused only
import CloudMigration from './pages/services/CloudMigration'
import ApplicationModernization from './pages/services/ApplicationModernization'
import AdvancedAutomation from './pages/services/AdvancedAutomation'
import AIPoweredDevOps from './pages/services/AIPoweredDevOps'
import DevSecOps from './pages/services/DevSecOps'
import DevOpsAutomation from './pages/services/DevOpsAutomation'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* DevOps & Cloud Service Routes */}
                    <Route path="/services/cloud-migration" element={<CloudMigration />} />
                    <Route path="/services/application-modernization" element={<ApplicationModernization />} />
                    <Route path="/services/advanced-automation" element={<AdvancedAutomation />} />
                    <Route path="/services/ai-powered-devops" element={<AIPoweredDevOps />} />
                    <Route path="/services/devsecops" element={<DevSecOps />} />
                    <Route path="/services/devops-automation" element={<DevOpsAutomation />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
