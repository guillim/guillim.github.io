---
layout: product
title: Paul - The Simple PostgreSQL Client for Mac
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
            Simple PostgreSQL client for Mac
          </div>
        </div>
        <h1 class="product-hero-title" data-animate="hero-title">
          The PostgreSQL client for people who aren't DBAs.
        </h1>
        <p class="product-hero-subtitle" data-animate="hero-subtitle">
          <strong>Paul</strong> is an AI-first PostgreSQL client for engineers, support teams, and anyone
          who needs fast answers from their database &mdash; without the complexity of traditional tools.
          Read-only by default. Edit when you need to.
        </p>
        <div class="product-hero-actions" data-animate="hero-cta">
          <a href="/assets/files/Paul.dmg" class="btn product-cta-primary">
            Download for macOS
          </a>
          <a href="#screenshots" class="product-hero-secondary-link">See it in action &darr;</a>
        </div>
        <div class="product-hero-metadata" data-animate="hero-cta">
          <span>Free macOS app</span>
          <span>Read-only by default</span>
          <span>Edit mode when you need it</span>
          <span>No account, no tracking</span>
        </div>
      </div>

      <div class="product-hero-right" data-animate="feature-1">
        <div class="product-hero-mock" style="border-radius: 15px; overflow: hidden; box-shadow: 0 2px 18px 0 rgba(19,30,45,0.13);">
          <img src="/assets/img/paul-hero-agent.png" alt="Paul &mdash; AI agent mode" style="display: block; width: 100%; border-radius: 15px;">
        </div>
      </div>
    </div>
  </section>

  <div class="product-logo-ribbon">
    <p class="product-logo-ribbon-label">Trusted by teams at</p>
    <div class="product-logo-ribbon-logos">
      <div class="product-logo-ribbon-item">
        <img src="/assets/img/logos/alan.webp" alt="Alan">
        <span>Alan</span>
      </div>
      <div class="product-logo-ribbon-item">
        <img src="/assets/img/logos/twenty.webp" alt="Twenty">
        <span>Twenty</span>
      </div>
      <div class="product-logo-ribbon-item">
        <img src="/assets/img/logos/korint.webp" alt="Korint">
        <span>Korint</span>
      </div>
      <div class="product-logo-ribbon-item">
        <img src="/assets/img/logos/certo.webp" alt="Certo">
        <span>Certo</span>
      </div>
    </div>
  </div>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Classic DB tools were not built for you</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Great for database admins. Overkill for everyone else.
      </p>

      <div class="problem-grid">
        <div class="product-card" style="text-align: center;" data-animate="feature-1">
          <div class="product-feature-icon">&#x23F1;&#xFE0F;</div>
          <h3>Slow &amp; Heavy</h3>
          <p>pgAdmin takes 900MB and minutes to open. DBeaver eats your RAM. DataGrip needs 30 seconds to cold start.</p>
        </div>
        <div class="product-card" style="text-align: center;" data-animate="feature-2">
          <div class="product-feature-icon">&#x1F9E9;</div>
          <h3>Too Complex</h3>
          <p>Dozens of panels, menus, and settings designed for DBAs &mdash; when you just need to check a user or fix a row.</p>
        </div>
        <div class="product-card product-idea-card product-idea-card-wide" style="text-align: center; background: linear-gradient(135deg, rgba(21, 153, 87, 0.06) 0%, rgba(21, 87, 153, 0.04) 100%); border: 2px solid rgba(21, 153, 87, 0.35);" data-animate="feature-3">
          <div style="display: inline-flex; align-items: center; gap: 10px; margin-bottom: 4px;">
            <img src="/assets/img/paul-logo.svg" alt="" style="width: 24px; height: 24px;">
            <h3 style="margin: 0; font-size: 1.15rem;">Paul is different</h3>
          </div>
          <p style="font-size: 1.05rem; font-weight: 500; color: #374151;">Opens in 2 seconds. Ask in plain language. Safe by default. Simple as that.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Perfect for</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Works with any PostgreSQL database &mdash; local, staging, or production.
      </p>
      <div class="product-audience-grid">
        <div class="product-audience-card">
          <h4>On-call engineers</h4>
          <p>Investigate user issues in seconds. Trace data relationships across tables without writing SQL under pressure.</p>
        </div>
        <div class="product-audience-card">
          <h4>Support &amp; success teams</h4>
          <p>Look up customer data yourself. Ask in plain language, get answers &mdash; no need to wait for an engineer.</p>
        </div>
        <div class="product-audience-card">
          <h4>Startup teams</h4>
          <p>Give your team safe database access without building internal tools. Simpler than Metabase, safer than DBeaver.</p>
        </div>
        <div class="product-audience-card">
          <h4>Quick data fixes</h4>
          <p>Switch to edit mode to INSERT, UPDATE, or DELETE rows directly &mdash; with a clear safety toggle so you never edit by accident.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted" id="screenshots">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">See it in action</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Connect in seconds, browse tables, ask in plain language, and edit when you need to.
      </p>
      <div class="product-carousel">
        <div class="product-carousel-track">
          <div class="product-carousel-slides">
            <div class="product-carousel-slide" data-caption="AI agent mode: ask questions in plain language instead of writing SQL">
              <img src="/assets/img/paul-7-agent.png" alt="Paul &mdash; AI agent mode">
            </div>
            <div class="product-carousel-slide" data-caption="Edit mode: INSERT, UPDATE &amp; DELETE rows &mdash; read-only by default, edit when you need to">
              <img src="/assets/img/paul-8-edit-mode.png" alt="Paul &mdash; edit mode">
            </div>
            <div class="product-carousel-slide" data-caption="Browse &amp; filter table data without writing SQL">
              <img src="/assets/img/paul-1.png" alt="Paul &mdash; table view with filters">
            </div>
            <div class="product-carousel-slide" data-caption="Split-view navigation keeps context as you explore related tables">
              <img src="/assets/img/paul-5-split-view.png" alt="Paul &mdash; split-view navigation">
            </div>
          </div>
        </div>
        <button class="product-carousel-btn product-carousel-btn--prev" aria-label="Previous screenshot">&lsaquo;</button>
        <button class="product-carousel-btn product-carousel-btn--next" aria-label="Next screenshot">&rsaquo;</button>
        <p class="product-carousel-caption"></p>
        <div class="product-carousel-dots">
          <button class="product-carousel-dot is-active" aria-label="Slide 1"></button>
          <button class="product-carousel-dot" aria-label="Slide 2"></button>
          <button class="product-carousel-dot" aria-label="Slide 3"></button>
          <button class="product-carousel-dot" aria-label="Slide 4"></button>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Built for simplicity, not database admin</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Fast, safe, and focused &mdash; without the complexity of traditional tools.
      </p>
      <div class="product-grid">
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">&#x1F916;</div>
          <h3>AI-first</h3>
          <p>Ask questions in plain language. Paul turns your words into queries &mdash; no SQL needed.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">&#x1F512;</div>
          <h3>Safe by default</h3>
          <p>Read-only mode by default. Switch to edit mode when you need it &mdash; INSERT, UPDATE, DELETE with full control.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">&#x26A1;</div>
          <h3>Opens in 2 seconds</h3>
          <p>Under 20MB. No loading screens, no bloated setup. Connect and start working immediately.</p>
        </div>
        <div class="product-card" style="text-align: center;">
          <div class="product-feature-icon">&#x1F50D;</div>
          <h3>Visual navigation</h3>
          <p>Follow foreign keys, split-view across tables, filter &amp; sort &mdash; all without writing a single query.</p>
        </div>
      </div>

      <div class="product-mid-cta" data-animate="hero-cta">
        <a href="/assets/files/Paul.dmg" class="btn product-cta-primary">Download for macOS</a>
        <p>Try it now &mdash; takes 30 seconds to set up. Free, no account required.</p>
      </div>
    </div>
  </section>

  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Paul vs. the rest</h2>
      <p class="product-section-lead" data-animate="section-lead">
        Built for people who use a database, not people who administer one.
      </p>
      <div style="overflow-x: auto; margin-top: 24px;">
        <table class="product-comparison-table" style="width: 100%; border-collapse: separate; border-spacing: 0; font-size: 0.95rem; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06);">
          <thead>
            <tr>
              <th style="text-align: left; padding: 14px 18px; background: #f9fafb; color: #6b7280; font-weight: 500; border-bottom: 2px solid #e5e7eb;"></th>
              <th style="text-align: center; padding: 14px 18px; background: rgba(21, 153, 87, 0.08); color: #159957; font-weight: 700; font-size: 1.05rem; border-bottom: 2px solid #159957;">Paul</th>
              <th style="text-align: center; padding: 14px 18px; background: #f9fafb; color: #6b7280; font-weight: 500; border-bottom: 2px solid #e5e7eb;">pgAdmin / DBeaver</th>
              <th style="text-align: center; padding: 14px 18px; background: #f9fafb; color: #6b7280; font-weight: 500; border-bottom: 2px solid #e5e7eb;">TablePlus / DataGrip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 14px 18px; font-weight: 600; color: #374151; border-bottom: 1px solid #f0f0f0;">Startup time</td>
              <td style="text-align: center; padding: 14px 18px; color: #159957; font-weight: 700; background: rgba(21, 153, 87, 0.04); border-bottom: 1px solid #f0f0f0;">2 seconds</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">Minutes</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">15&ndash;30 sec</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: 600; color: #374151; border-bottom: 1px solid #f0f0f0;">App size</td>
              <td style="text-align: center; padding: 14px 18px; color: #159957; font-weight: 700; background: rgba(21, 153, 87, 0.04); border-bottom: 1px solid #f0f0f0;">&lt;20 MB</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">200&ndash;900 MB</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">100&ndash;400 MB</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: 600; color: #374151; border-bottom: 1px solid #f0f0f0;">AI / natural language</td>
              <td style="text-align: center; padding: 14px 18px; color: #159957; font-weight: 700; background: rgba(21, 153, 87, 0.04); border-bottom: 1px solid #f0f0f0;">Built-in agent</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">No</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">Plugin / paid</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: 600; color: #374151; border-bottom: 1px solid #f0f0f0;">Production safety</td>
              <td style="text-align: center; padding: 14px 18px; color: #159957; font-weight: 700; background: rgba(21, 153, 87, 0.04); border-bottom: 1px solid #f0f0f0;">Read-only default</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">Full write access</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af; border-bottom: 1px solid #f0f0f0;">Full write access</td>
            </tr>
            <tr>
              <td style="padding: 14px 18px; font-weight: 600; color: #374151;">Price</td>
              <td style="text-align: center; padding: 14px 18px; color: #159957; font-weight: 700; background: rgba(21, 153, 87, 0.04);">Free</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af;">Free (bloated)</td>
              <td style="text-align: center; padding: 14px 18px; color: #9ca3af;">$99+ / year</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="product-cta-banner">
    <div class="product-cta-banner-inner">
      <h2>Ready to ditch the bloat?</h2>
      <p>Free. No account. Opens in 2 seconds.</p>
      <p class="product-cta-banner-actions">
        <a href="/assets/files/Paul.dmg" class="product-cta-secondary">Download for macOS</a>
      </p>
      <p class="product-cta-banner-meta">
        Problem opening the app? <a href="https://support.apple.com/en-us/102445" target="_blank" rel="noopener noreferrer" style="color:white; text-decoration: underline; transition: color 0.2s, text-decoration-color 0.2s;" onmouseover="this.style.color='#ffd700'; this.style.textDecorationColor='#ffd700';" onmouseout="this.style.color='white'; this.style.textDecorationColor='white';">Refer to this Apple instructions</a>
      </p>
      <p class="product-cta-banner-meta" style="margin-top: 1em;">
        <a href="/products/paul/privacy" style="color:white; text-decoration: underline; opacity: 0.9;">Privacy</a>
        <span style="opacity: 0.8;"> &middot; </span>
        <a href="/products/paul/support" style="color:white; text-decoration: underline; opacity: 0.9;">Support</a>
      </p>
    </div>
  </section>

</div>
