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
          <h1 className="text-gradient"><span className="text-blood-red">G</span>et <span className="text-blood-red">I</span>n <span className="text-blood-red">T</span>ouch</h1>
          <p className="lead">Ready to automate your <span className="text-blood-red">DevSecOps</span> <span className="text-blood-red">infrastructure</span>? Let's talk.</p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="contact-grid">
          <div className="contact-info">
            <h2><span className="text-blood-red">C</span>ontact <span className="text-blood-red">O</span>ur <span className="text-blood-red">E</span>xperts</h2>
            <p>Our engineers are ready to analyze your current infrastructure and propose a highly <span className="text-blood-red">customized</span>, <span className="text-blood-red">automated solution</span>.</p>
            
            <div className="contact-methods mt-8">
              <div className="contact-method">
                <FaEnvelope className="contact-method-icon" />
                <div>
                  <h4><span className="text-blood-red">E</span>mail</h4>
                  <a href="mailto:accounts@citocd.com">accounts@<span className="brand-name" style={{ fontSize: 'inherit', fontWeight: 'inherit', textShadow: 'none' }}>CItoCD</span>.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaWhatsapp className="contact-method-icon" />
                <div>
                  <h4><span className="text-blood-red">W</span>hatsApp Support</h4>
                  <a href="https://wa.me/919746669944" rel="noopener noreferrer">
                    Chat with us <span className="text-blood-red">instantly</span>
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaWhatsapp className="contact-method-icon" />
                <div>
                  <h4><span className="text-blood-red">W</span>hatsApp Community</h4>
                  <a href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" rel="noopener noreferrer">
                    Join our <span className="text-blood-red">DevOps community</span>
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <FaMapMarkerAlt className="contact-method-icon" />
                <div>
                  <h4><span className="text-blood-red">G</span>lobal Headquarters</h4>
                  <p>Serving clients <span className="text-blood-red">Worldwide</span></p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><span className="text-blood-red">F</span>ull Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="email"><span className="text-blood-red">W</span>ork Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="company"><span className="text-blood-red">C</span>ompany / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
              />
            </div>

            <div className="form-group mt-4">
              <label htmlFor="message"><span className="text-blood-red">H</span>ow can we help? *</label>
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
              {status === 'sending' ? 'Sending Request...' : <><span className="text-blood-red">S</span>end Message</>}
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
