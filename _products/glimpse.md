---
layout: product
title: Glimpse - Pixel-Art Desktop Companions for Claude Code
permalink: /products/glimpse
favicon: /assets/img/glimpse-logo.png
---

<div class="product-page product-page-glimpse product-page-variant-1">

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
            <img src="/assets/img/glimpse-logo.png" alt="Glimpse logo">
          </div>
          <div class="product-hero-tagline">
            <span class="product-hero-tagline-dot"></span>
            Pixel-art companions for Claude Code
          </div>
        </div>
        <h1 class="product-hero-title" data-animate="hero-title">
          See your AI agents come alive on your desktop.
        </h1>
        <p class="product-hero-subtitle" data-animate="hero-subtitle">
          <strong>Glimpse</strong> displays your active Claude Code sessions as pixel-art characters
          right on your desktop. Click a character to jump to its terminal window.
        </p>
        <div class="product-hero-actions" data-animate="hero-cta">
          <a href="/assets/files/Glimpse.dmg" class="btn product-cta-primary">
            Download for macOS
          </a>
          <a href="https://github.com/guillim/Glimpse" class="product-hero-secondary-link" target="_blank" rel="noopener noreferrer">
            View on GitHub &rarr;
          </a>
        </div>
        <div class="product-hero-metadata" data-animate="hero-cta">
          <span>Free macOS app</span>
          <span>100% on-device</span>
          <span>No account, no tracking</span>
        </div>
      </div>

      <div class="product-hero-right" data-animate="feature-1">
        <div class="product-hero-mock" style="border-radius: 15px; overflow: hidden; box-shadow: 0 2px 18px 0 rgba(19,30,45,0.13);">
          <img src="/assets/img/glimpse-raw.png" alt="Glimpse — pixel-art characters on your desktop" style="display: block; width: 100%; border-radius: 15px;">
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Running agents are invisible</h2>
      <p class="product-section-lead" data-animate="section-lead">
        You launch multiple Claude Code sessions, then forget which is which.
      </p>

      <div class="problem-grid">
        <div class="product-card" style="text-align: center;" data-animate="feature-1">
          <div class="product-feature-icon">🪟</div>
          <h3>Lost in tabs</h3>
          <p>Multiple terminal windows, no way to tell which session is doing what.</p>
        </div>
        <div class="product-card" style="text-align: center;" data-animate="feature-2">
          <div class="product-feature-icon">⏳</div>
          <h3>Waiting blind</h3>
          <p>Is the agent thinking, waiting for input, or done? You have to switch tabs to find out.</p>
        </div>
        <div class="product-card product-idea-card product-idea-card-wide" style="text-align: center;" data-animate="feature-3">
          <div class="product-feature-icon">👾</div>
          <h3>There's a better way</h3>
          <p>Glimpse puts a pixel-art character on your desktop for each session. Glance at your screen and know instantly what every agent is doing.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section" id="screenshots">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">See it in action</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Pixel-art characters on your desktop, each representing a live Claude Code session.
      </p>
      <div class="product-screenshots">
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-raw.png" alt="Glimpse — four agents on desktop with different statuses">
          <p class="product-screenshot-caption">From 1 to 20+ agents — the grid adapts automatically, each with its own character &amp; status</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-status.png" alt="Glimpse — agent status indicator">
          <p class="product-screenshot-caption">Color-coded status: done, idle, asking — visible at a glance</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-asking.png" alt="Glimpse — agent waiting for user input">
          <p class="product-screenshot-caption">Orange glow when an agent is waiting for your input</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-conversation.png" alt="Glimpse — conversation preview on a character card">
          <p class="product-screenshot-caption">Conversation preview shows what the agent is working on</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-notification.png" alt="Glimpse — menu bar notification">
          <p class="product-screenshot-caption">Menu bar notification keeps you informed without switching windows</p>
        </div>
        <div class="product-screenshot">
          <img src="/assets/img/glimpse-cta.png" alt="Glimpse — click to redirect to terminal">
          <p class="product-screenshot-caption">Click any character to jump straight to its terminal window</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">How it works</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Download, open, and your agents appear. No configuration needed.
      </p>
      <div class="steps-grid">
        <div class="product-card" data-animate="feature-1">
          <div class="step-index">1</div>
          <h3>Install &amp; launch</h3>
          <p>Download the app and open it. Glimpse runs in the background with a menu bar icon — no Dock clutter.</p>
        </div>
        <div class="product-card" data-animate="feature-2">
          <div class="step-index">2</div>
          <h3>Characters appear</h3>
          <p>Each active Claude Code session gets a unique pixel-art character on your desktop, showing live activity status.</p>
        </div>
        <div class="product-card" data-animate="feature-3">
          <div class="step-index">3</div>
          <h3>Click to jump</h3>
          <p>Click any character to instantly activate its terminal window or IDE tab. Works with iTerm2, Terminal, and Cursor.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Built to stay out of your way</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Lightweight, always visible, and designed for engineers running multiple agents.
      </p>
      <div class="product-grid">
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">👾</div>
          <h3>Unique characters</h3>
          <p>Procedurally generated pixel-art avatars — deterministic per session ID, so each agent has its own look.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">🔴</div>
          <h3>Live status</h3>
          <p>Color-coded dots show reading, writing, thinking, asking, done — at a glance, no tab switching.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">🖥️</div>
          <h3>Multi-monitor</h3>
          <p>Characters appear on all connected screens. Click from any monitor to jump to the right window.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Glimpse vs. checking your terminals</h2>
      <p class="product-section-lead" data-animate="section-lead">
        When you're running 3+ agents, context-switching kills your flow.
      </p>
      <div class="product-grid">
        <div class="product-card">
          <h4 style="color: #159957;">👾 Always visible</h4>
          <p><strong>Glimpse:</strong> Characters live on your desktop, visible at all times</p>
          <p><strong>Without:</strong> Buried in terminal tabs, must switch to check</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">⚡ Instant context</h4>
          <p><strong>Glimpse:</strong> Status + project name + keyword summary at a glance</p>
          <p><strong>Without:</strong> Read terminal output to figure out what each session is doing</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">🪶 Near-zero overhead</h4>
          <p><strong>Glimpse:</strong> &lt;10% CPU, &lt;100 MB RAM, 3 fps idle</p>
          <p><strong>Without:</strong> No overhead, but constant manual tab-switching instead</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Perfect for</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Works with any Claude Code session — Terminal, iTerm2, or Cursor IDE. macOS 13.0+.
      </p>
      <div class="product-grid">
        <div class="product-card">
          <h4 style="color: #159957;">✓ Multi-agent workflows</h4>
          <p>Running several Claude Code sessions in parallel? See them all without switching windows.</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">✓ Waiting for input</h4>
          <p>The asking state glows orange so you never miss when an agent needs your attention.</p>
        </div>
        <div class="product-card">
          <h4 style="color: #159957;">✓ Staying in flow</h4>
          <p>Keep working in your editor while your agents' status floats on the desktop.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">What it is (and isn't)</h2>
      <div class="product-grid">
        <div class="product-card">
          <h3 style="color: #159957;">✓ It is</h3>
          <ul style="color: #606c71; line-height: 2;">
            <li>A desktop companion that visualises Claude Code sessions</li>
            <li>Pixel-art characters with live activity status</li>
            <li>Click-to-activate for instant window switching</li>
            <li>100% on-device — no network, no account, no tracking</li>
            <li>Multi-monitor aware</li>
          </ul>
        </div>
        <div class="product-card">
          <h3 style="color: #dc143c;">✗ It isn't</h3>
          <ul style="color: #606c71; line-height: 2;">
            <li>A terminal emulator or IDE</li>
            <li>A Claude Code replacement or wrapper</li>
            <li>A session manager or orchestrator</li>
            <li>Available on Windows or Linux (macOS only)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Feedback</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Using Glimpse? We'd love to hear from you — bugs, ideas, or anything else.
      </p>
      <p class="product-section-lead">
        <a href="https://guillim.notion.site/cb03a89ec49b825a98f1010b6aa3d085?pvs=105" target="_blank" rel="noopener noreferrer" class="btn product-cta-primary">Share your feedback</a>
      </p>
    </div>
  </section>

  <section class="product-cta-banner">
    <div class="product-cta-banner-inner">
      <h2>See your agents at a glance.</h2>
      <p>Free. No account required.</p>
      <p class="product-cta-banner-actions">
        <a href="/assets/files/Glimpse.dmg" class="product-cta-secondary">Download for macOS</a>
      </p>
      <p class="product-cta-banner-meta">
        Problem opening the app? <a href="https://support.apple.com/en-us/102445" target="_blank" rel="noopener noreferrer" style="color:white; text-decoration: underline; transition: color 0.2s, text-decoration-color 0.2s;" onmouseover="this.style.color='#ffd700'; this.style.textDecorationColor='#ffd700';" onmouseout="this.style.color='white'; this.style.textDecorationColor='white';">Refer to this Apple instructions</a>
      </p>
      <p class="product-cta-banner-meta" style="margin-top: 1em;">
        <a href="/products/glimpse/privacy" style="color:white; text-decoration: underline; opacity: 0.9;">Privacy</a>
        <span style="opacity: 0.8;"> · </span>
        <a href="/products/glimpse/support" style="color:white; text-decoration: underline; opacity: 0.9;">Support</a>
      </p>
    </div>
  </section>

</div>
