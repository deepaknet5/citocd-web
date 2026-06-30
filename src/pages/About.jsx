import { motion } from 'framer-motion'
import { FaLaptopCode, FaServer, FaShieldAlt, FaBook, FaGoogle, FaStackOverflow, FaRobot } from 'react-icons/fa'
import './SharedPages.css'
import SEO from '../components/SEO'

function About() {
  const teamStrengths = [
    {
      icon: <FaLaptopCode />,
      xp: "30 Years Experience",
      title: <><span className="text-blood-red">A</span>pplication Architecture</>,
      desc: <>Designing high-scale, distributed microservices, <span className="text-blood-red">failover systems</span>, and enterprise cloud-native frameworks.</>
    },
    {
      icon: <FaServer />,
      xp: "20+ Years Experience",
      title: <><span className="text-blood-red">D</span>evOps & Cloud Systems</>,
      desc: <>Pioneering <span className="text-blood-red">continuous delivery</span>, zero-downtime container orchestration (K8s), and multi-provider hyperscaler automation.</>
    },
    {
      icon: <FaShieldAlt />,
      xp: "25+ Years Experience",
      title: <><span className="text-blood-red">C</span>yber Security & Audits</>,
      desc: <>Implementing <span className="text-blood-red">zero-trust</span> access, secure compliance pipelines, and scoring system <span className="text-blood-red">vulnerabilities</span> against SOC2/ISO metrics.</>
    }
  ]

  const timelineNodes = [
    {
      icon: <FaBook />,
      title: <><span className="text-blood-red">B</span>ooks</>,
      desc: "Theoretical foundations, standard engineering manuals, and core algorithm mastery."
    },
    {
      icon: <FaGoogle />,
      title: <><span className="text-blood-red">G</span>oogle</>,
      desc: "Global documentation indexing, fast references, and high development velocity."
    },
    {
      icon: <FaStackOverflow />,
      title: <><span className="text-blood-red">S</span>tack Overflow</>,
      desc: "Crowd-sourced solutions, community-led debugging, and collaborative debugging patterns."
    },
    {
      icon: <FaRobot />,
      title: <><span className="text-blood-red">A</span>I Agents</>,
      desc: <>Autonomous system operations, <span className="text-blood-red">self-healing</span> runbooks, and zero-human-intervention loops.</>
    }
  ]

  return (
    <div className="page">
      <SEO 
        title="About Us - DevOps & SRE Experts" 
        description="Discover the team behind CItoCD. We bring decades of expertise in high-scale microservices, continuous delivery, zero-trust cloud security, and self-healing automation."
        keywords="About CItoCD, DevOps engineers, SRE specialists, cloud architects, DevSecOps specialists, container orchestration experts"
      />
      <div className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blood-red">A</span>bout <span className="brand-name">CItoCD</span>
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
          <h2>Our <span className="text-blood-red">C</span>ore <span className="text-blood-red">I</span>dentity</h2>
          <p>
            <span className="brand-name">CItoCD</span> was built on the principle that modern software environments shouldn't require <span className="text-blood-red text-uppercase-bold">manual firefighting</span>. 
            We are a group of seasoned consultants and engineers with deep expertise across <span className="text-blood-red">application design</span>, 
            <span className="text-blood-red">operations orchestration</span>, and <span className="text-blood-red">data security</span>.
          </p>
        </div>

        {/* Team Strengths */}
        <div className="content-section">
          <h2>Our <span className="text-blood-red">V</span>eteran <span className="text-blood-red">T</span>eam <span className="text-blood-red">S</span>trength</h2>
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
          <h2>The <span className="text-blood-red">A</span>daptability <span className="text-blood-red">V</span>ector</h2>
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
