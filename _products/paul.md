---
layout: product
title: Paul - PostgreSQL User Data Viewer
permalink: /products/paul
---

<div class="product-page product-page-paul">

<style>
  /* Page-level wrapper to scope Paul-specific overrides */
  .product-page-paul {
    --paul-accent: #159957;
    --paul-accent-soft: rgba(21, 153, 87, 0.12);
    --paul-text-muted: #606c71;
  }

  /* Hero: subtle gradient glow + entrance (uses shared keyframes) */
  .product-page-paul .product-hero {
    position: relative;
    overflow: hidden;
  }

  .product-page-paul .product-hero::before {
    content: "";
    position: absolute;
    inset: -40%;
    background:
      radial-gradient(circle at 0% 0%, rgba(21, 153, 87, 0.22), transparent 55%),
      radial-gradient(circle at 100% 0%, rgba(0, 132, 255, 0.16), transparent 55%);
    opacity: 0.9;
    transform: translate3d(0, 0, 0);
    animation: productGradientDrift 18s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: -1;
  }

  .product-page-paul .product-hero-inner {
    animation: productFadeInUp 0.8s ease-out 0.05s both;
    transform-origin: top center;
  }

  .product-page-paul .product-hero-logo img {
    filter: drop-shadow(0 18px 45px rgba(0, 0, 0, 0.25));
    transform-origin: center;
    animation: productLogoFloat 9s ease-in-out infinite;
  }

  .product-page-paul .product-hero-title {
    letter-spacing: 0.03em;
  }

  .product-page-paul .product-hero-subtitle {
    max-width: 32rem;
    margin-inline: auto;
  }

  /* Paul: richer card background on top of shared hover */
  .product-page-paul .product-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.97), rgba(248, 252, 250, 0.95));
  }

  .product-page-paul .product-card::before {
    background: radial-gradient(circle at 0 0, var(--paul-accent-soft), transparent 55%);
  }

  .product-page-paul .product-feature-icon {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.14));
  }

  .product-page-paul .product-screenshot-caption {
    color: var(--paul-text-muted);
  }

  /* CTA banner: soft breathing effect on top of shared CTA styling */
  .product-page-paul .product-cta-banner-inner::before {
    content: "";
    position: absolute;
    inset: -30%;
    background:
      radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.22), transparent 55%),
      radial-gradient(circle at 100% 100%, rgba(255, 215, 0, 0.18), transparent 60%);
    opacity: 0.65;
    mix-blend-mode: screen;
    pointer-events: none;
    animation: productCtaGlow 16s ease-in-out infinite alternate;
  }
</style>

<section class="product-hero">
  <div class="product-hero-inner">
    <div class="product-hero-logo">
      <img src="/assets/img/paul-logo.svg" alt="Paul logo">
    </div>
    <p class="product-badge" data-animate="hero-badge">Free macOS app · Read‑only PostgreSQL</p>
    <h1 class="product-hero-title" data-animate="hero-title">Paul</h1>
    <p class="product-hero-subtitle" data-animate="hero-subtitle">
      Investigate FAST with confidence.<br>
    </p>
    <div class="product-hero-actions" data-animate="hero-cta">
      <a href="/assets/files/Paul.dmg" class="btn product-cta-primary">
        Download for macOS
      </a>
    </div>
  </div>
</section>

<section class="product-section product-section-muted">
  <div class="product-section-inner">
    <h2 class="product-section-title" data-animate="section-title">Classic DB Tools suck for quick investigation</h2>
    <p class="product-section-lead" data-animate="section-lead">
      Great for admins, terrible for “I need to check this user”.
    </p>

    <div class="product-grid">
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
      <div class="product-card product-idea-card" style="grid-column: span 2; text-align: center;" data-animate="feature-3">
        <div class="product-feature-icon">💡</div>
        <h3>There’s a better way</h3>
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
  </div>
</section>

</div>