import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import './SharedPages.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">Let's discuss how we can help transform your business</p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a project in mind? We'd love to hear from you.</p>
            
            <div className="contact-methods">
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
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    Chat with us
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-method-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Global Operations</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
