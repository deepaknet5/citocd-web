import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import '../SharedPages.css'
import SEO from '../../components/SEO'

const keywordsToHighlight = [
  /\b(citocd)\b/gi,
  /\b(ai|artificial intelligence)\b/gi,
  /\b(devops)\b/gi,
  /\b(automation|automated|automate)\b/gi,
  /\b(cloud|clouds|cloud-native)\b/gi,
  /\b(security|secure)\b/gi,
  /\b(ci\/cd)\b/gi,
  /\b(sovereign|compliance|compliant)\b/gi,
  /\b(vulnerabilities|vulnerability)\b/gi,
  /\b(microservices)\b/gi,
  /\b(zero-trust)\b/gi,
  /\b(self-healing|self-healing-runs)\b/gi,
  /\b(performance)\b/gi,
  /\b(scalability|scalable)\b/gi,
  /\b(docker|kubernetes)\b/gi,
  /\b(orchestration|orchestrated)\b/gi,
  /\b(legacy)\b/gi,
  /\b(modernize|modernization)\b/gi
];

export function highlightText(text) {
  if (typeof text !== 'string') return text;
  
  let parts = [text];
  
  keywordsToHighlight.forEach(regex => {
    const newParts = [];
    parts.forEach(part => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }
      
      const splitParts = part.split(regex);
      const matches = part.match(regex);
      
      if (matches) {
        splitParts.forEach((subPart, i) => {
          newParts.push(subPart);
          if (i < matches.length) {
            const matchVal = matches[i];
            if (matchVal.toLowerCase() === 'citocd') {
              newParts.push(
                <span key={i} className="brand-name">
                  CItoCD
                </span>
              );
            } else {
              newParts.push(
                <span key={i} className="text-blood-red text-uppercase-bold">
                  {matchVal}
                </span>
              );
            }
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });
  
  return <>{parts}</>;
}

export function highlightFirstLetter(text) {
  if (typeof text !== 'string' || text.length === 0) return text;
  return (
    <>
      <span className="text-blood-red">{text[0]}</span>
      {text.slice(1)}
    </>
  );
}

export function highlightTitleLetters(title) {
  if (typeof title !== 'string') return title;
  return title.split(' ').map((word, idx) => {
    if (word.length === 0) return word;
    const isConnector = /^(and|&|with|to|of|for|in|on|a|the)$/i.test(word);
    if (isConnector) return <React.Fragment key={idx}>{word} </React.Fragment>;
    return (
      <span key={idx}>
        <span className="text-blood-red">{word[0]}</span>
        {word.slice(1)}{' '}
      </span>
    );
  });
}

export function createServicePage(config) {
  return function ServicePage() {
    return (
      <div className="page">
        <SEO 
          title={config.title}
          description={config.subtitle || config.overview.substring(0, 155)}
          keywords={`DevOps consultancy, Cloud architecture, ${config.title}, CI/CD automation, DevOps consulting, enterprise automation`}
        />
        <Link to="/services" className="back-button" aria-label="Back to services">
          <FaArrowLeft />
        </Link>
        <div className="service-hero">
          <div className="container">
            <div className="service-icon-large">{config.icon}</div>
            <h1>{highlightTitleLetters(config.title)}</h1>
            <p className="lead">{highlightText(config.subtitle)}</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="content-section">
            <h2>{highlightFirstLetter("Overview")}</h2>
            <p>{highlightText(config.overview)}</p>
          </div>

          <div className="content-section">
            <h2>{highlightFirstLetter("Key")} {highlightFirstLetter("Benefits")}</h2>
            <div className="benefits-grid">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>✓ {highlightFirstLetter(benefit.title)}</h3>
                  <p>{highlightText(benefit.description)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section text-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              {highlightFirstLetter("Get")} {highlightFirstLetter("Started")} with {highlightText(config.title)}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
