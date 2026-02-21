---
layout: product
title: Paul - PostgreSQL User Data Viewer
permalink: /products/paul
favicon: /assets/img/paul-logo.svg
---

<div class="product-page product-page-paul product-page-variant-1">

  <style>
    .product-page-variant-1 .product-hero {
      background: radial-gradient(circle at 0% 0%, #21c08b 0, rgba(21, 153, 87, 0) 50%),
                  radial-gradient(circle at 100% 0%, #155799 0, rgba(21, 87, 153, 0) 50%),
                  linear-gradient(135deg, #050816 0%, #020617 40%, #020617 100%);
      color: #f9fafb;
      text-align: left;
      padding: 88px 24px 80px;
    }

    .product-page-variant-1 .product-hero-inner {
      max-width: 1120px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
      gap: 40px;
      align-items: center;
    }

    .product-page-variant-1 .product-hero-left {
      max-width: 520px;
    }

    .product-page-variant-1 .product-hero-brand-row {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 18px;
    }

    .product-page-variant-1 .product-hero-logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 5px;
      overflow: hidden;
    }

    .product-page-variant-1 .product-hero-logo img {
      width: 34px;
      height: 34px;
      display: flex;
    }

    .product-page-variant-1 .product-hero-tagline {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 4px 12px;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.5);
      background: rgba(15, 23, 42, 0.8);
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #e5e7eb;
      margin-bottom: 0;
      opacity: 0.9;
    }

    .product-page-variant-1 .product-hero-tagline-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: #22c55e;
      box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.35);
    }

    .product-page-variant-1 .product-hero-title {
      font-size: clamp(2.6rem, 3vw, 3.2rem);
      margin: 0 0 0.3em;
      letter-spacing: 0.03em;
    }

    .product-page-variant-1 .product-hero-subtitle {
      font-size: 1.05rem;
      line-height: 1.6;
      color: #e5e7eb;
      max-width: 32rem;
      margin: 0 0 1.8em;
    }

    .product-page-variant-1 .product-hero-subtitle strong {
      color: #a5b4fc;
      font-weight: 600;
    }

    .product-page-variant-1 .product-hero-metadata {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 18px;
      margin-top: 1.2em;
      font-size: 0.85rem;
      color: #9ca3af;
    }

    .product-page-variant-1 .product-hero-metadata span {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .product-page-variant-1 .product-hero-metadata span::before {
      content: "●";
      font-size: 0.6rem;
      color: #22c55e;
    }

    .product-page-variant-1 .product-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }

    .product-page-variant-1 .product-hero-secondary-link {
      color: #c4d5ff;
      text-decoration: none;
      font-size: 0.95rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.5);
      padding-bottom: 1px;
    }

    .product-page-variant-1 .product-hero-secondary-link:hover {
      border-bottom-color: #e5e7eb;
      color: #e5e7eb;
    }

    .product-page-variant-1 .product-hero-screenshot-shell {
      position: relative;
      border-radius: 24px;
      background: radial-gradient(circle at 0 0, rgba(34, 197, 94, 0.15), transparent 55%),
                  radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.2), transparent 60%),
                  #020617;
      padding: 18px 18px 8px;
      box-shadow: 0 28px 80px rgba(15, 23, 42, 0.8);
      overflow: hidden;
    }

    .product-page-variant-1 .product-hero-window-chrome {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 11px;
      color: #6b7280;
    }

    .product-page-variant-1 .product-hero-window-dots {
      display: inline-flex;
      gap: 6px;
    }

    .product-page-variant-1 .product-hero-window-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: #4b5563;
    }

    .product-page-variant-1 .product-hero-window-dot.red { background: #f97373; }
    .product-page-variant-1 .product-hero-window-dot.amber { background: #fbbf24; }
    .product-page-variant-1 .product-hero-window-dot.green { background: #22c55e; }

    .product-page-variant-1 .product-hero-mock {
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(148, 163, 184, 0.4);
      background: #020617;
    }

    .product-page-variant-1 .product-hero-mock img {
      display: block;
      width: 100%;
      height: auto;
    }

    .product-page-variant-1 .product-hero-footnote {
      margin-top: 10px;
      font-size: 0.78rem;
      color: #9ca3af;
      text-align: left;
    }

    /* Sections */
    .product-page-variant-1 .product-section {
      border-top: none;
    }

    .product-page-variant-1 .product-section-inner {
      max-width: 1040px;
    }

    .product-page-variant-1 .product-section.product-section-muted {
      background: radial-gradient(circle at 0 0, rgba(21, 153, 87, 0.06), transparent 55%),
                  #f5f7fa;
      border-top: 1px solid #e5e7eb;
    }

    /* 3-column problem section */
    .product-page-variant-1 .problem-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 24px;
    }

    .product-page-variant-1 .problem-card-eyebrow {
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 4px;
    }

    .product-page-variant-1 .product-idea-card {
      border: 1px solid rgba(21, 153, 87, 0.25);
    }

    .product-page-variant-1 .product-idea-card-wide {
      grid-column: span 2;
    }

    /* How it works */
    .product-page-variant-1 .steps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-top: 28px;
    }

    .product-page-variant-1 .step-index {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 999px;
      background: rgba(21, 153, 87, 0.08);
      color: #159957;
      font-size: 0.86rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    /* Two-column feature row */
    .product-page-variant-1 .feature-row {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.05fr);
      gap: 40px;
      align-items: center;
      margin-top: 36px;
    }

    .product-page-variant-1 .feature-row-media img {
      display: block;
      width: 100%;
      max-width: 560px;
      border-radius: 22px;
      box-shadow: 0 24px 70px rgba(15, 23, 42, 0.5);
      margin: 0 auto;
    }

    /* Comparison table */
    .product-page-variant-1 .comparison-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 22px;
      margin-top: 26px;
    }

    .product-page-variant-1 .comparison-card h4 {
      font-size: 1.05rem;
      margin-top: 0;
    }

    .product-page-variant-1 .comparison-card ul {
      list-style: none;
      padding-left: 0;
      margin: 10px 0 0;
      color: #4b5563;
    }

    .product-page-variant-1 .comparison-card li::before {
      content: "•";
      color: #159957;
      display: inline-block;
      margin-right: 6px;
    }

    /* Use cases */
    .product-page-variant-1 .usecase-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 24px;
    }

    .product-page-variant-1 .usecase-title-pill {
      font-size: 0.9rem;
      color: #159957;
      margin-bottom: 4px;
    }

    /* Final CTA tweaks (reuse shared CTA animations) */
    .product-page-variant-1 .product-cta-banner {
      background: radial-gradient(circle at 0 0, rgba(34, 197, 94, 0.2), transparent 55%),
                  radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.25), transparent 60%),
                  linear-gradient(135deg, #159957 0%, #155799 100%);
    }

    .product-page-variant-1 .product-cta-banner-inner {
      max-width: 760px;
    }

    @media (max-width: 880px) {
      .product-page-variant-1 .product-hero-inner {
        grid-template-columns: minmax(0, 1fr);
      }

      .product-page-variant-1 .product-hero {
        text-align: left;
        padding: 32px 16px 28px;
      }

      .product-page-variant-1 .product-hero-left {
        max-width: 100%;
      }

      .product-page-variant-1 .product-section {
        padding: 28px 16px;
      }

      .product-page-variant-1 .product-cta-banner {
        padding: 32px 16px 36px;
      }

      .product-page-variant-1 .product-hero-title {
        font-size: clamp(1.8rem, 5vw, 2.6rem);
        margin-bottom: 0.4em;
      }

      .product-page-variant-1 .product-hero-subtitle {
        font-size: 0.95rem;
        margin-bottom: 1.2em;
      }

      .product-page-variant-1 .problem-grid {
        grid-template-columns: 1fr;
        gap: 12px;
        margin-top: 16px;
      }

      .product-page-variant-1 .product-idea-card-wide {
        grid-column: span 1;
      }

      .product-page-variant-1 .product-card {
        padding: 18px 16px 16px;
      }

      .product-page-variant-1 .product-card h3 {
        font-size: 1.1rem;
        margin-top: 0;
        margin-bottom: 0.4em;
      }

      .product-page-variant-1 .product-feature-icon {
        font-size: 2rem;
        margin-bottom: 8px;
      }

      .product-page-variant-1 .product-section-title {
        font-size: 1.5rem;
        margin-bottom: 0.4em;
      }

      .product-page-variant-1 .product-section-lead {
        font-size: 0.95rem;
        margin-bottom: 1.2em;
      }
    }
  </style>

  <section class="product-hero">
    <div class="product-hero-inner">
      <div class="product-hero-left">
        <div class="product-hero-brand-row" data-animate="hero-badge">
          <div class="product-hero-logo">
            <img src="/assets/img/paul-logo.svg" alt="Paul logo">
          </div>
          <div class="product-hero-tagline">
            <span class="product-hero-tagline-dot"></span>
            Read‑only PostgreSQL for on‑call
          </div>
        </div>
        <h1 class="product-hero-title" data-animate="hero-title">
          Investigate user data in seconds, not minutes.
        </h1>
        <p class="product-hero-subtitle" data-animate="hero-subtitle">
          <strong>Paul</strong> is a fast, read‑only PostgreSQL viewer for engineers and support teams
          who need to answer "what's happening with this user?"
        </p>
        <div class="product-hero-actions" data-animate="hero-cta">
          <a href="/assets/files/Paul.dmg" class="btn product-cta-primary">
            Download for macOS
          </a>
        </div>
        <div class="product-hero-metadata" data-animate="hero-cta">
          <span>Free macOS app</span>
          <span>Read‑only by design</span>
          <span>No account, no tracking</span>
        </div>
      </div>

      <div class="product-hero-right" data-animate="feature-1">
        <div class="product-hero-mock" style="border-radius: 15px; overflow: hidden; box-shadow: 0 2px 18px 0 rgba(19,30,45,0.13);">
          <img src="/assets/img/paul-filter-cropped.png" alt="Paul — table view with filters" style="display: block; width: 100%; border-radius: 15px;">
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Classic DB Tools suck for quick investigation</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Great for admins, terrible for “I need to check this user”.
      </p>

      <div class="problem-grid">
        <div class="product-card" style="text-align: center;" data-animate="feature-1">
          <div class="product-feature-icon">⏱️</div>
          <h3>Slow Start</h3>
          <p>PgAdmin, DBeaver… take minutes to open when you just need a quick look.</p>
        </div>
        <div class="product-card" style="text-align: center;" data-animate="feature-2">
          <div class="product-feature-icon">🧩</div>
          <h3>Too Complex</h3>
          <p>Schemas, connections, queries... are great for admins, but painful for fast support.</p>
        </div>
        <div class="product-card product-idea-card product-idea-card-wide" style="text-align: center;" data-animate="feature-3">
          <div class="product-feature-icon">💡</div>
          <h3>There's a better way</h3>
          <p>Paul is fast &amp; simple: search a user, instantly see the data, answer your customer in seconds.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section" id="screenshots">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">See it in action</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Connect in seconds, then browse tables, filter data, and run SQL when you need it.
      </p>
      <div class="product-screenshots">
        <div class="product-screenshot">
          <img src="/assets/img/paul-3.png" alt="Paul — saved connections and Add Connection">
          <p class="product-screenshot-caption">Saved connections &amp; quick "Add connection" flow</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-1.png" alt="Paul — table view with filters">
          <p class="product-screenshot-caption">Browse &amp; filter table data without writing SQL</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-2.png" alt="Paul — raw SQL editor and results">
          <p class="product-screenshot-caption">Drop to SQL when you need more control</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-5-split-view.png" alt="Paul — split-view navigation with multiple tables">
          <p class="product-screenshot-caption">Split-view navigation keeps context as you explore related tables</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-6-filter-sort.png" alt="Paul — filter and sort table data">
          <p class="product-screenshot-caption">Filter &amp; sort table data with intuitive controls</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-4-export-csv.png" alt="Paul — export data to CSV">
          <p class="product-screenshot-caption">Export filtered data to CSV for further analysis</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/paul-7-agent.png" alt="Paul — agent mode">
          <p class="product-screenshot-caption">Agent mode</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Built for debugging, not database admin</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Fast, read‑only, and focused. Perfect for on‑call, support, and debugging—without touching production.
      </p>
      <div class="product-grid">
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">🔍</div>
          <h3>Trace user data</h3>
          <p>Follow foreign keys row‑by‑row across related tables. No SQL needed.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">🔒</div>
          <h3>Read‑only by design</h3>
          <p>Move fast and stay safe. No accidental edits in production data.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">⚡</div>
          <h3>Keep context</h3>
          <p>Split‑view navigation so you never lose track of where you came from.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Paul vs. traditional database tools</h2>
      <p class="product-section-lead" data-animate="section-lead">
        When you need to investigate user data, not manage schemas or run complex analytics.
      </p>
      <div class="product-grid">
        <div class="product-card">
          <h4 style="color: #159957;">⚡ Lightweight & Fast</h4>
          <p><strong>Paul:</strong> &lt;20MB, opens in 2 seconds</p>
          <p><strong>Traditional tools:</strong> 200MB+, slow startup</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">🔒 Read‑only by design</h4>
          <p><strong>Paul:</strong> Safe for production, no accidental edits</p>
          <p><strong>Traditional tools:</strong> Full admin access, risky</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">🎯 Focused workflow</h4>
          <p><strong>Paul:</strong> Visual navigation, no SQL needed</p>
          <p><strong>Traditional tools:</strong> Complex UI, requires SQL expertise</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Perfect for</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Works with any PostgreSQL database—local, staging, or production. Read‑only by design, so you can move fast and stay safe.
      </p>
      <div class="product-grid">
        <div class="product-card">
          <h4 style="color: #159957;">✓ Debugging user issues</h4>
          <p>Trace data relationships to understand bugs and edge cases.</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">✓ Quick data investigations</h4>
          <p>Answer questions quickly without crafting ad‑hoc queries.</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">✓ Exploring table relationships</h4>
          <p>Navigate foreign keys visually across your database schema.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">What it is (and isn’t)</h2>
      <div class="product-grid">
        <div class="product-card">
          <h3 style="color: #159957;">✓ It is</h3>
          <ul style="color: #606c71; line-height: 2;">
            <li>A purpose‑built user investigation viewer</li>
            <li>Read‑only and safe for production</li>
            <li>Fast and focused workflow</li>
            <li>Visual foreign key navigation</li>
          </ul>
        </div>
        <div class="product-card">
          <h3 style="color: #dc143c;">✗ It isn’t</h3>
          <ul style="color: #606c71; line-height: 2;">
            <li>A general database admin tool</li>
            <li>For schema design or migrations</li>
            <li>For editing or modifying data</li>
            <li>For writing complex queries</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Feedback</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Using Paul? We’d love to hear from you—bugs, ideas, or anything else.
      </p>
      <p class="product-section-lead">
        <a href="https://guillim.notion.site/4622de7119464bae8c4adb7aeffadee9?pvs=105" target="_blank" rel="noopener noreferrer" class="btn product-cta-primary">Share your feedback</a>
      </p>
    </div>
  </section>

  <section class="product-cta-banner">
    <div class="product-cta-banner-inner">
      <h2>Ready for FAST data investigation?</h2>
      <p>Free. No account required.</p>
      <p class="product-cta-banner-actions">
        <a href="/assets/files/Paul.dmg" class="product-cta-secondary">Download for macOS</a>
      </p>
      <p class="product-cta-banner-meta">
        Problem opening the app? <a href="https://support.apple.com/en-us/102445" target="_blank" rel="noopener noreferrer" style="color:white; text-decoration: underline; transition: color 0.2s, text-decoration-color 0.2s;" onmouseover="this.style.color='#ffd700'; this.style.textDecorationColor='#ffd700';" onmouseout="this.style.color='white'; this.style.textDecorationColor='white';">Refer to this Apple instructions</a>
      </p>
      <p class="product-cta-banner-meta" style="margin-top: 1em;">
        <a href="/products/paul/privacy" style="color:white; text-decoration: underline; opacity: 0.9;">Privacy</a>
        <span style="opacity: 0.8;"> · </span>
        <a href="/products/paul/support" style="color:white; text-decoration: underline; opacity: 0.9;">Support</a>
      </p>
    </div>
  </section>

</div>