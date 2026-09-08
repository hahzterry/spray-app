export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <a href="/" className="logo">
              PAY.<span>3WORDPIN</span>
            </a>
            <div className="nav-links">
              <a href="#how">How It Works</a>
              <a href="#benefits">Benefits</a>
              <a
                href="https://plasma.to"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-button"
              >
                Open Plasma
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Simple payments. Powered by Plasma.
          </div>
          <h1>
            PAY WITH <span className="green">3 WORDS.</span>
          </h1>
          <p className="hero-subtitle">
            Forget long payment addresses and complicated instructions. Your 3
            Word Pin gives people a simple way to find you, pay you, and share
            your payment destination.
          </p>
          <div className="hero-actions">
            <a href="/create" className="primary-button">
              Create Your 3 Word Pin →
            </a>
            <a
              href="https://plasma.to"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Open Plasma
            </a>
          </div>

          {/* PIN DEMO */}
          <div className="pin-demo">
            <div className="pin-label">Your payment address</div>
            <div className="pin">///KEEP.IT.SIMPLE</div>
            <div className="pin-description">
              One simple address people can remember and share.
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="container">
          <h2>
            Payments shouldn't
            <br />
            be this complicated.
          </h2>
          <p className="section-subtitle">
            Stop sending people long strings of numbers, copying addresses, or
            explaining where to send money.
          </p>
          <div className="comparison">
            <div className="comparison-card bad">
              <h3>Traditional</h3>
              <div className="address">
                0x1646452F98E36A3c9Cfc3eDD8868221E207B5eEC
              </div>
              <p style={{ marginTop: 15 }}>
                Hard to remember. Easy to copy incorrectly.
              </p>
            </div>
            <div className="comparison-card good">
              <h3>PAY.3WORDPIN</h3>
              <div className="three-word">///KEEP.IT.SIMPLE</div>
              <p style={{ marginTop: 15 }}>
                Simple enough to say, remember, and share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="benefits">
        <div className="container">
          <h2>
            One simple way
            <br />
            to move money.
          </h2>
          <p className="section-subtitle">
            PAY.3WORDPIN turns complicated payment destinations into something
            humans can actually remember.
          </p>
          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💸</div>
              <h3>Get Paid</h3>
              <p>
                Share your 3 Word Pin when someone needs to send you money.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📤</div>
              <h3>Send Money</h3>
              <p>
                Use a simple payment identity instead of asking someone for a
                long address.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📍</div>
              <h3>Find Anyone</h3>
              <p>
                Your 3 words can become a memorable destination for people to
                find you.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Payments</h3>
              <p>
                Built on modern payment infrastructure designed for everyday
                transactions.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔐</div>
              <h3>Simple & Secure</h3>
              <p>
                Keep the complexity behind the scenes while users interact with
                a simple identity.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💳</div>
              <h3>Use Your Card</h3>
              <p>
                Pair your payment identity with the Plasma XPL Card for
                everyday spending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>How it works.</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Three steps. That's it.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div>
                <h3>Create your 3 Word Pin</h3>
                <p>Choose a unique three-word payment identity.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div>
                <h3>Share it</h3>
                <p>
                  Text it, post it, put it on your profile, or give it to
                  someone in person.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div>
                <h3>Get paid</h3>
                <p>People use your 3 Word Pin to reach your payment destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLASMA */}
      <section className="plasma">
        <div className="container">
          <div className="plasma-card">
            <div>
              <h2>
                Your simple address.
                <br />
                Powerful payment infrastructure.
              </h2>
              <p>
                PAY.3WORDPIN keeps the payment experience simple while Plasma
                handles the underlying payment infrastructure.
              </p>
              <p>
                You don't need to understand the technology. Just use your 3
                words.
              </p>
            </div>
            <div className="plasma-actions">
              <a
                href="https://plasma.to"
                target="_blank"
                rel="noopener noreferrer"
                className="plasma-button"
              >
                Open Plasma →
              </a>
              <a
                href="https://plasma.to"
                target="_blank"
                rel="noopener noreferrer"
                className="plasma-button outline"
              >
                Learn About Plasma
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to keep payments simple?</h2>
          <p>
            Create your 3 Word Pin and give people one simple address they can
            actually remember.
          </p>
          <a href="/create" className="primary-button">
            Create Your 3 Word Pin →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo">PAY.<span>3WORDPIN</span></div>
              <p>Simple payments. Three words.</p>
            </div>
            <div className="footer-links">
              <a href="/create">Create Pin</a>
              <a href="/how-it-works">How It Works</a>
              <a href="https://plasma.to" target="_blank" rel="noopener noreferrer">
                Plasma App
              </a>
              <a href="https://plasma.to" target="_blank" rel="noopener noreferrer">
                Plasma XPL Card
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 PAY.3WORDPIN. Simple payment identity.
          </div>
        </div>
      </footer>
    </>
  );
}
