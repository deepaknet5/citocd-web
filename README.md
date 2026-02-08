# CITOCD Website

Modern, responsive React website for CITOCD - Revolutionizing DevOps with comprehensive CI/CD and business automation solutions.

## 🚀 Features

- **Modern React Stack**: Built with React 18, Vite, and React Router
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Premium UI/UX**: Glassmorphism, smooth animations, and modern design aesthetics
- **8 Service Pages**: Comprehensive solutions for DevOps and business automation
- **Docker Deployment**: Production-ready containerization with Nginx
- **SEO Optimized**: Meta tags and semantic HTML for better search rankings

## 📋 Services Offered

### DevOps & Cloud
- **Cloud Migration** - AWS, Azure, GCP migration with zero downtime
- **Application Modernization** - Transform legacy systems to cloud-native
- **Advanced Automation** - CI/CD pipelines and Infrastructure as Code

### Business Solutions
- **Payment Integration** - Secure payment gateways (Stripe, Razorpay, PayPal)
- **Healthcare Solutions** - Complete HMS with EHR and telemedicine
- **WhatsApp Marketing** - Business API integration and automated campaigns
- **Attendance Systems** - Geo-location tracking with face recognition
- **LMS Solutions** - Comprehensive learning management platform

## 🛠️ Tech Stack

- **Frontend**: React 18.3, React Router 7.1
- **Build Tool**: Vite 6.0
- **Animations**: Framer Motion 11.15
- **Icons**: React Icons 5.4
- **HTTP Client**: Axios 1.7
- **Styling**: CSS3 with custom design system
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (Alpine)

## 📦 Installation & Setup

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Docker and Docker Compose (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd citocd-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🐳 Docker Deployment

### Local Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   ./deploy.sh
   ```

   Or manually:
   ```bash
   docker compose build
   docker compose up -d
   ```

2. **Access the application**
   
   Navigate to `http://localhost:8080`

3. **View logs**
   ```bash
   docker logs -f citocd-web
   ```

### Stop the Container

```bash
docker compose down
```

## 🌐 Remote Server Deployment

### Server Prerequisites

- Ubuntu 20.04+ or similar Linux distribution
- Root or sudo access
- Docker and Docker Compose installed
- Domain name pointed to server IP
- Ports 80 and 443 open

### Deployment Steps

1. **Install Docker on remote server**
   ```bash
   # Update packages
   sudo apt update

   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh

   # Install Docker Compose
   sudo apt install docker-compose-plugin
   ```

2. **Clone repository on remote server**
   ```bash
   git clone <repository-url>
   cd citocd-web
   ```

3. **Deploy the application**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

4. **Install and configure Nginx (for SSL)**
   ```bash
   sudo apt install nginx certbot python3-certbot-nginx

   # Create Nginx configuration for domain
   sudo nano /etc/nginx/sites-available/citocd.com
   ```

   Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name citocd.com www.citocd.com;

       location / {
           proxy_pass http://localhost:8080;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

   Enable the site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/citocd.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **Setup SSL with Certbot**
   ```bash
   sudo certbot --nginx -d citocd.com -d www.citocd.com
   ```

   Follow the prompts to complete SSL setup. Certbot will automatically:
   - Obtain SSL certificate from Let's Encrypt
   - Configure Nginx for HTTPS
   - Set up auto-renewal

6. **Verify deployment**
   
   Navigate to `https://citocd.com`

### Update Deployment

To update the application after code changes:

```bash
cd citocd-web
git pull
./deploy.sh
```

## 📧 Contact Configuration

To enable the contact form email functionality:

1. Update `src/pages/Contact.jsx` with your email service integration
2. Options include:
   - **FormSubmit.co** (easiest, no backend needed)
   - **EmailJS** (free tier available)
   - **Custom backend** with Nodemailer

Example for FormSubmit.co:
```javascript
<form action="https://formsubmit.co/accounts@citocd.com" method="POST">
  {/* form fields */}
</form>
```

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --color-primary: #F39C12;      /* Orange (matching logo) */
  --color-primary-dark: #E67E22;
  --color-secondary: #2C3E50;    /* Dark blue-gray */
  /* ... */
}
```

### Logo

Replace logo files in `public/assets/`:
- `logo.png` - Full logo
- `logd.png` - Logo for dark backgrounds

### Content

Update service content in:
- `src/pages/services/*.jsx` - Service page configurations
- `src/pages/Home.jsx` - Homepage content
- `src/pages/About.jsx` - About page content

## 📱 Mobile Responsive

The site is fully responsive with breakpoints:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## 🔒 Security Features

- XSS Protection headers
- Content Security Policy
- HTTPS enforcement (when deployed with SSL)
- Secure form handling
- Input validation

## 🚦 Performance

- Lazy loading for better initial load time
- Code splitting and tree shaking
- Optimized images and assets
- Gzip compression
- Browser caching headers

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary to CITOCD.

## 📧 Support

For support and inquiries:
- Email: accounts@citocd.com
- WhatsApp: [Your WhatsApp number]

## 🎯 Project Structure

```
citocd-web/
├── public/
│   └── assets/
│       ├── logo.png
│       └── logd.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── services/
│   │   │   ├── ServiceTemplate.jsx
│   │   │   ├── CloudMigration.jsx
│   │   │   ├── ApplicationModernization.jsx
│   │   │   ├── AdvancedAutomation.jsx
│   │   │   ├── PaymentIntegration.jsx
│   │   │   ├── HealthcareSolutions.jsx
│   │   │   ├── WhatsAppMarketing.jsx
│   │   │   ├── AttendanceSystems.jsx
│   │   │   └── LMSSolutions.jsx
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── SharedPages.css
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── deploy.sh
├── package.json
├── vite.config.js
└── README.md
```

---

Built with ❤️ by CITOCD Team
