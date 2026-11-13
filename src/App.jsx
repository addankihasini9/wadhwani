import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  const problemCards = [
    {
      title: 'Scattered Feedback',
      text: 'Customer feedback can come from multiple sources and be difficult to organize.',
    },
    {
      title: 'Missed Insights',
      text: 'Important customer needs and emerging trends can be overlooked.',
    },
    {
      title: 'Slow Decisions',
      text: 'Without clear insights, businesses may take longer to respond to customer needs.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Collect Feedback',
      text: 'Collect customer feedback through your feedback channels.',
    },
    {
      number: '02',
      title: 'Analyze With AI',
      text: 'CustomerConnect analyzes feedback using AI-powered sentiment and need identification.',
    },
    {
      number: '03',
      title: 'Discover Insights',
      text: 'Identify customer needs, sentiment, and emerging trends.',
    },
    {
      number: '04',
      title: 'Take Action',
      text: 'Use clear insights to improve products, services, and customer satisfaction.',
    },
  ]

  const features = [
    {
      title: 'Customer Feedback Collection',
      text: 'Collect customer feedback in one simple platform.',
      icon: 'FB',
    },
    {
      title: 'AI Sentiment Analysis',
      text: 'Understand whether customer feedback is positive, negative, or neutral.',
      icon: 'AI',
    },
    {
      title: 'Customer Need Identification',
      text: 'Identify what customers want, expect, and need.',
      icon: 'CN',
    },
    {
      title: 'Trend Detection',
      text: 'Discover recurring themes and emerging customer trends.',
      icon: 'TR',
    },
    {
      title: 'Automated Insights',
      text: 'Convert feedback into simple, actionable business insights.',
      icon: 'IN',
    },
    {
      title: 'Simple Business Reports',
      text: 'View clear reports that help you understand customer feedback and make decisions.',
      icon: 'RP',
    },
  ]

  const benefits = [
    {
      title: 'Understand Customer Needs',
      text: 'Know what customers actually want.',
    },
    {
      title: 'Make Better Decisions',
      text: 'Use feedback-driven insights instead of guesswork.',
    },
    {
      title: 'Improve Customer Satisfaction',
      text: 'Respond to customer expectations more effectively.',
    },
    {
      title: 'Identify Trends',
      text: 'Detect recurring feedback and emerging needs.',
    },
    {
      title: 'Save Time',
      text: 'Reduce the effort required to manually analyze feedback.',
    },
    {
      title: 'Grow Sustainably',
      text: 'Use customer insights to support long-term business growth.',
    },
  ]

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  return (
    <div className="page-shell">
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          onClick={(event) => {
            event.preventDefault()
            scrollTo('home')
          }}
        >
          CustomerConnect
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollTo(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-small"
            onClick={() => scrollTo('contact')}
          >
            Get Started
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section reveal">
          <div className="hero-content">
            <p className="eyebrow">CustomerConnect</p>
            <h1>Turn Customer Feedback Into Smarter Business Decisions.</h1>
            <p className="lead">
              CustomerConnect uses AI to analyze customer feedback, helping small businesses
              understand customer needs, identify trends, and make better decisions.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn" onClick={() => scrollTo('contact')}>
                Get Started
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('how-it-works')}
              >
                See How It Works
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-label="CustomerConnect sample dashboard preview">
            <div className="sample-tag">Sample Dashboard</div>
            <div className="dashboard-card">
              <div className="dashboard-head">
                <h3>CustomerConnect AI</h3>
                <span className="sparkle" aria-hidden="true">
                  *
                </span>
              </div>
              <ul>
                <li>
                  <strong>Customer Feedback:</strong> Organized feed
                </li>
                <li>
                  <strong>Sentiment:</strong> Positive, Neutral, Mixed
                </li>
                <li>
                  <strong>Customer Needs:</strong> Faster service
                </li>
                <li>
                  <strong>Emerging Trends:</strong> Product variety
                </li>
                <li>
                  <strong>AI Insights:</strong> Clear next actions
                </li>
              </ul>
            </div>
            <div className="bubble bubble-a">Sample: Customers love the service</div>
            <div className="bubble bubble-b">Sample: Waiting time needs improvement</div>
            <div className="bubble bubble-c">Sample: More product options requested</div>
          </div>
        </section>

        <section className="section reveal" id="problem">
          <h2>Customer feedback is valuable. Understanding it shouldn&apos;t be difficult.</h2>
          <p className="section-intro">
            Small and early-stage businesses receive feedback through different channels, but
            manually reviewing and understanding all that feedback can take time and important
            customer needs may be missed.
          </p>
          <div className="grid three">
            {problemCards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="solution">
          <h2>Meet CustomerConnect</h2>
          <p className="section-intro">
            CustomerConnect brings customer feedback together and uses AI to turn it into simple,
            actionable insights for small businesses.
          </p>
          <div className="flow" role="presentation">
            <span>Customer Feedback</span>
            <span className="arrow">↓</span>
            <span>AI Analysis</span>
            <span className="arrow">↓</span>
            <span>Customer Needs</span>
            <span className="arrow">↓</span>
            <span>Trends &amp; Insights</span>
            <span className="arrow">↓</span>
            <span>Better Business Decisions</span>
          </div>
        </section>

        <section id="how-it-works" className="section reveal">
          <h2>How It Works</h2>
          <div className="grid four">
            {steps.map((step) => (
              <article className="card step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section reveal">
          <h2>Everything you need to understand your customers.</h2>
          <div className="grid three">
            {features.map((feature) => (
              <article className="card feature" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="insights-demo">
          <h2>From feedback to insight.</h2>
          <p className="sample-note">Sample AI Insight</p>
          <div className="grid two">
            <article className="card demo">
              <h3>Sample Feedback Insight</h3>
              <p>
                <strong>Customer Feedback:</strong> "The service was great, but the waiting time
                was too long."
              </p>
              <p>
                <strong>Sentiment:</strong> Mixed
              </p>
              <p>
                <strong>Customer Need:</strong> Faster service
              </p>
              <p>
                <strong>Trend:</strong> Waiting time
              </p>
              <p>
                <strong>AI Insight:</strong> Consider improving service speed during busy periods.
              </p>
            </article>
            <article className="card demo">
              <h3>Sample Feedback Insight</h3>
              <p>
                <strong>Customer Feedback:</strong> "Would love to see more product choices."
              </p>
              <p>
                <strong>AI Insight:</strong> Product variety is an emerging customer need.
              </p>
              <p className="sample-note">Sample AI Insight</p>
            </article>
          </div>
        </section>

        <section id="benefits" className="section reveal">
          <h2>Why CustomerConnect?</h2>
          <div className="grid three">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section reveal">
          <h2>Built for small and early-stage businesses.</h2>
          <p className="section-intro">
            CustomerConnect is designed for businesses that want a simple way to understand
            customer feedback without complex enterprise systems.
          </p>
          <p className="section-intro">
            Primary customers: small and early-stage businesses in urban and semi-urban areas.
          </p>
        </section>

        <section className="section reveal uvp">
          <h2>Simple AI. Clear Customer Insights.</h2>
          <p>
            <strong>AI-powered</strong> <strong>Customer insights</strong> that help small
            businesses understand needs, make <strong>better decisions</strong>, and support
            <strong> sustainable growth</strong>.
          </p>
        </section>

        <section className="section reveal" id="differentiation">
          <h2>Designed specifically for small businesses.</h2>
          <p className="section-intro">
            CustomerConnect focuses on personalized AI customer insights, real-time feedback and
            trend analysis, and affordable, simple tools for small businesses.
          </p>
          <div className="grid two comparison">
            <article className="card">
              <h3>Direct alternatives</h3>
              <ul>
                <li>SurveyMonkey</li>
                <li>Qualtrics</li>
                <li>Typeform</li>
              </ul>
            </article>
            <article className="card">
              <h3>Indirect alternatives</h3>
              <ul>
                <li>Google Forms</li>
                <li>WhatsApp</li>
                <li>Social media</li>
                <li>Manual customer interviews</li>
              </ul>
            </article>
          </div>
          <div className="card focus-card">
            <h3>CustomerConnect focuses on</h3>
            <ul>
              <li>Personalized AI customer insights</li>
              <li>Real-time feedback and trend analysis</li>
              <li>Affordable and simple tools for small businesses</li>
            </ul>
          </div>
        </section>

        <section className="section reveal" id="dashboard-preview">
          <h2>Simple dashboard preview</h2>
          <p className="sample-note">Demo data for product preview</p>
          <div className="dashboard-preview">
            <div className="metric-grid">
              <div className="metric">
                <span>Customer Feedback</span>
                <strong>Sample: 128 entries</strong>
              </div>
              <div className="metric">
                <span>Sentiment</span>
                <strong>Sample: Mixed</strong>
              </div>
              <div className="metric">
                <span>Customer Needs</span>
                <strong>Sample: Faster service</strong>
              </div>
              <div className="metric">
                <span>Trends</span>
                <strong>Sample: Waiting time</strong>
              </div>
            </div>
            <div className="grid two dashboard-panels">
              <div className="card">
                <h3>Sentiment Overview</h3>
                <div className="bars" aria-hidden="true">
                  <span style={{ '--size': '78%' }}>Positive</span>
                  <span style={{ '--size': '56%' }}>Neutral</span>
                  <span style={{ '--size': '63%' }}>Negative</span>
                </div>
              </div>
              <div className="card">
                <h3>Topics and Needs</h3>
                <ul>
                  <li>Feedback topics: Service speed, product choices</li>
                  <li>Customer needs: Faster support, more options</li>
                  <li>Trend detection: Repeat mentions during peak hours</li>
                  <li>AI insights: Prioritize speed improvements</li>
                  <li>Simple report generation: Weekly summary export</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal cta">
          <h2>Ready to understand your customers better?</h2>
          <p>
            Turn customer feedback into clear insights and smarter business decisions with
            CustomerConnect.
          </p>
          <div className="hero-actions center">
            <button type="button" className="btn" onClick={() => scrollTo('contact')}>
              Get Started
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Request a Demo
            </button>
          </div>
        </section>

        <section id="contact" className="section reveal contact">
          <h2>Let&apos;s connect.</h2>
          <p className="section-intro">
            Have questions or want to learn more about CustomerConnect? Get in touch with us.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="business">Business Name</label>
            <input id="business" name="business" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="btn full">
              Send Message
            </button>
            {isSubmitted && (
              <p className="success" role="status">
                Thanks for reaching out. This is a prototype message confirmation.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-brand">CustomerConnect</p>
        <p>AI-powered customer insights for small businesses.</p>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollTo(item.id)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p>&copy; 2026 CustomerConnect. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
