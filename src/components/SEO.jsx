import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, keywords }) {
    const location = useLocation()

    useEffect(() => {
        // Base Title
        const defaultTitle = 'CItoCD - Revolutionizing DevOps & Cloud Consultancy'
        document.title = title ? `${title} | CItoCD` : defaultTitle

        // Update Description
        const defaultDesc = 'CItoCD is a premier DevOps consulting agency specializing in CI/CD automation, cloud migration, application modernization, DevSecOps, and AI-powered DevOps solutions.'
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.name = 'description'
            document.head.appendChild(metaDescription)
        }
        metaDescription.setAttribute('content', description || defaultDesc)

        // Update Keywords
        const defaultKeywords = 'DevOps consulting, CI/CD, Cloud migration, DevSecOps, AI DevOps, Kubernetes, Automation'
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.name = 'keywords'
            document.head.appendChild(metaKeywords)
        }
        metaKeywords.setAttribute('content', keywords || defaultKeywords)

        // Update Canonical Link
        let canonicalLink = document.querySelector('link[rel="canonical"]')
        if (!canonicalLink) {
            canonicalLink = document.createElement('link')
            canonicalLink.rel = 'canonical'
            document.head.appendChild(canonicalLink)
        }
        const siteUrl = 'https://citocd.com'
        canonicalLink.setAttribute('href', `${siteUrl}${location.pathname}`)

        // Update Open Graph url & contents
        let ogUrl = document.querySelector('meta[property="og:url"]')
        if (ogUrl) {
            ogUrl.setAttribute('content', `${siteUrl}${location.pathname}`)
        }
        let ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle) {
            ogTitle.setAttribute('content', title ? `${title} | CItoCD` : defaultTitle)
        }
        let ogDesc = document.querySelector('meta[property="og:description"]')
        if (ogDesc) {
            ogDesc.setAttribute('content', description || defaultDesc)
        }

        // Update Twitter url & contents
        let twitterUrl = document.querySelector('meta[property="twitter:url"]')
        if (twitterUrl) {
            twitterUrl.setAttribute('content', `${siteUrl}${location.pathname}`)
        }
        let twitterTitle = document.querySelector('meta[property="twitter:title"]')
        if (twitterTitle) {
            twitterTitle.setAttribute('content', title ? `${title} | CItoCD` : defaultTitle)
        }
        let twitterDesc = document.querySelector('meta[property="twitter:description"]')
        if (twitterDesc) {
            twitterDesc.setAttribute('content', description || defaultDesc)
        }

    }, [title, description, keywords, location])

    return null
}
