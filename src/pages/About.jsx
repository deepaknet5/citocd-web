import { motion } from 'framer-motion'
import { FaLaptopCode, FaServer, FaShieldAlt, FaBook, FaGoogle, FaStackOverflow, FaRobot } from 'react-icons/fa'
import './SharedPages.css'

function About() {
  const teamStrengths = [
    {
      icon: <FaLaptopCode />,
      xp: "30 Years Experience",
      title: "Application Architecture",
      desc: "Designing high-scale, distributed microservices, failover systems, and enterprise cloud-native frameworks."
    },
    {
      icon: <FaServer />,
      xp: "20+ Years Experience",
      title: "DevOps & Cloud Systems",
      desc: "Pioneering continuous delivery, zero-downtime container orchestration (K8s), and multi-provider hyperscaler automation."
    },
    {
      icon: <FaShieldAlt />,
      xp: "25+ Years Experience",
      title: "Cyber Security & Audits",
      desc: "Implementing zero-trust access, secure compliance pipelines, and scoring system vulnerabilities against SOC2/ISO metrics."
    }
  ]

  const timelineNodes = [
    {
      icon: <FaBook />,
      title: "Books",
      desc: "Theoretical foundations, standard engineering manuals, and core algorithm mastery."
    },
    {
      icon: <FaGoogle />,
      title: "Google",
      desc: "Global documentation indexing, fast references, and high development velocity."
    },
    {
      icon: <FaStackOverflow />,
      title: "Stack Overflow",
      desc: "Crowd-sourced solutions, community-led debugging, and collaborative debugging patterns."
    },
    {
      icon: <FaRobot />,
      title: "AI Agents",
      desc: "Autonomous system operations, self-healing runbooks, and zero-human-intervention loops."
    }
  ]

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About CITOCD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lead"
          >
            A high-veteran engineering team delivering self-healing automation.
          </motion.p>
        </div>
      </div>

      <div className="container py-16">
        {/* Core Mission */}
        <div className="content-section">
          <h2>Our Core Identity</h2>
          <p>
            CITOCD was built on the principle that modern software environments shouldn't require <span className="text-blood-red text-uppercase-bold">manual firefighting</span>. 
            We are a group of seasoned consultants and engineers with deep expertise across application design, 
            operations orchestration, and data security.
          </p>
        </div>

        {/* Team Strengths */}
        <div className="content-section">
          <h2>Our Veteran Team Strength</h2>
          <div className="about-grid">
            {teamStrengths.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="about-card"
              >
                <div className="about-card-icon">
                  {item.icon}
                </div>
                <div className="about-card-xp">{item.xp}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Adaptability Timeline */}
        <div className="content-section timeline-section">
          <h2>The Adaptability Vector</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--space-8)' }}>
            True engineering excellence lies in adaptability. We have evolved alongside the developer tools ecosystem—from foundational manuals to automated, <span className="text-blood-red text-uppercase-bold">AI-driven</span> self-healing systems.
          </p>
          <div className="timeline-wrapper">
            {timelineNodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`timeline-node ${idx === timelineNodes.length - 1 ? 'active-node' : ''}`}
              >
                <div className="timeline-dot">
                  {node.icon}
                </div>
                <h3>{node.title}</h3>
                <p>{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
