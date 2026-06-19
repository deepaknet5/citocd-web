import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import './SharedPages.css'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://formsubmit.co/ajax/accounts@citocd.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      })
      const data = await response.json()
      
      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
        console.error("Error", data)
      }
    } catch (error) {
      setStatus('error')
      console.error(error)
    }
  }

  return (
    <div className="page">
      <div className="page-hero section">
        <div className="container">
          <h1 className="text-gradient">Get In Touch</h1>
          <p className="lead">Ready to automate your DevSecOps infrastructure? Let's talk.</p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Our Experts</h2>
            <p>Our engineers are ready to analyze your current infrastructure and propose a highly customized, automated solution.</p>
            
            <div className="contact-methods mt-8">
              <div className="contact-method">
                <FaEnvelope className="contact-method-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:accounts@citocd.com">accounts@citocd.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaWhatsapp className="contact-method-icon" />
                <div>
                  <h4>WhatsApp Support</h4>
                  <a href="https://wa.me/919746669944" target="_blank" rel="noopener noreferrer">
                    Chat with us instantly
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaWhatsapp className="contact-method-icon" />
                <div>
                  <h4>WhatsApp Community</h4>
                  <a href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" target="_blank" rel="noopener noreferrer">
                    Join our DevOps community
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-method-icon" />
                <div>
                  <h4>Global Headquarters</h4>
                  <p>Serving clients Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="email">Work Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="company">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="message">How can we help? *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="form-input"
                placeholder="Tell us about your infrastructure needs..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-8" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending Request...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="success-message mt-4" style={{ color: '#27AE60', fontWeight: 'bold' }}>
                ✓ Message sent successfully! Our experts will contact you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="error-message mt-4" style={{ color: '#E74C3C', fontWeight: 'bold' }}>
                ⚠️ There was an error sending your message. Please try again or email us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
