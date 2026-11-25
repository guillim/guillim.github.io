---
layout: product
title: Fyrestore - A Light, Read-Only Firestore Browser for Mac
permalink: /products/fyrestore
favicon: /assets/img/fyrestore-logo.svg
description: "Browse any Google Firestore project from a native macOS app. Sign in with Google, filter, drill into sub-collections, copy as JSON. Read-only by design. Free and open source."
image: /assets/img/fyrestore-overview.png
---

<div class="product-page product-page-fyrestore">

  <style>
    .product-page-fyrestore {
      --fy-paper: #fbfaf7;
      --fy-panel: #ffffff;
      --fy-ink: #37352f;
      --fy-muted: #787373;
      --fy-line: #ebebe8;
      --fy-chip: #f5f3ef;
      --fy-accent: #2373b4;
      --fy-accent-dark: #1b5c91;
      --fy-ember: #c9701f;
      --fy-mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
      background: var(--fy-paper);
      color: var(--fy-ink);
    }

    .product-page-fyrestore a { color: var(--fy-accent); }

    .product-page-fyrestore h1,
    .product-page-fyrestore h2,
    .product-page-fyrestore h3 {
      color: var(--fy-ink);
      text-wrap: balance;
      letter-spacing: -0.01em;
    }

    .fy-inner { max-width: 1040px; margin: 0 auto; }

    /* Hero */
    .fy-hero { padding: 72px 24px 0; text-align: center; }

    .fy-brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--fy-mono);
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 26px;
    }

    .fy-brand img { width: 34px; height: 34px; display: block; }

    .fy-hero h1 {
      font-size: clamp(2.1rem, 5vw, 3.4rem);
      line-height: 1.08;
      margin: 0 auto 0.45em;
      max-width: 15em;
      font-weight: 700;
    }

    .fy-hero h1 span { color: var(--fy-accent); }

    .fy-sub {
      font-size: 1.12rem;
      line-height: 1.6;
      color: var(--fy-muted);
      max-width: 36rem;
      margin: 0 auto 2em;
    }

    .fy-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 22px;
      align-items: center;
      justify-content: center;
    }

    .fy-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 13px 24px;
      border-radius: 10px;
      background: var(--fy-accent);
      color: #fff !important;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.25) inset, 0 6px 18px rgba(35, 115, 180, 0.25);
      transition: background 0.15s ease, transform 0.15s ease;
    }

    .fy-btn:hover { background: var(--fy-accent-dark); transform: translateY(-1px); text-decoration: none; }

    .fy-link {
      color: var(--fy-ink) !important;
      text-decoration: none;
      border-bottom: 1px solid #cfcdc7;
      padding-bottom: 2px;
      font-size: 0.95rem;
    }

    .fy-link:hover { border-bottom-color: var(--fy-accent); text-decoration: none; }

    .fy-facts {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      list-style: none;
      padding: 0;
      margin: 1.8em 0 0;
    }

    .fy-facts li {
      font-family: var(--fy-mono);
      font-size: 0.76rem;
      padding: 4px 10px;
      border-radius: 6px;
      background: var(--fy-chip);
      border: 1px solid var(--fy-line);
      color: var(--fy-muted);
    }

    .fy-shot {
      max-width: 1120px;
      margin: 28px auto 0;
    }

    .fy-shot img { display: block; width: 100%; height: auto; }

    /* Sections */
    .fy-section { padding: 64px 24px; border-top: 1px solid var(--fy-line); }
    .fy-section-panel { background: var(--fy-panel); }

    .fy-section h2 {
      font-size: clamp(1.55rem, 3vw, 2rem);
      margin: 0 0 0.4em;
      font-weight: 700;
    }

    .fy-lead {
      color: var(--fy-muted);
      font-size: 1.05rem;
      line-height: 1.6;
      max-width: 40rem;
      margin: 0 0 2em;
    }

    .fy-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      border: 1px solid var(--fy-line);
      border-radius: 14px;
      overflow: hidden;
      background: var(--fy-line);
      gap: 1px;
    }

    .fy-grid > div { background: var(--fy-panel); padding: 22px 22px 24px; }

    .fy-key {
      font-family: var(--fy-mono);
      font-size: 0.78rem;
      color: var(--fy-accent);
      display: block;
      margin-bottom: 8px;
    }

    .fy-grid h3 { font-size: 1.05rem; margin: 0 0 0.35em; font-weight: 700; }

    .fy-grid p, .fy-split p {
      margin: 0;
      color: var(--fy-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    /* Filter demo */
    .fy-split {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 48px;
      align-items: center;
    }

    .fy-filters {
      list-style: none;
      margin: 0;
      padding: 8px;
      border: 1px solid var(--fy-line);
      border-radius: 14px;
      background: var(--fy-paper);
      font-family: var(--fy-mono);
      font-size: 0.92rem;
    }

    .fy-filters li {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      padding: 10px 12px;
      border-radius: 8px;
    }

    .fy-filters li + li { border-top: 1px solid var(--fy-line); border-radius: 0; }

    .fy-op {
      padding: 2px 8px;
      border-radius: 5px;
      background: #e6eff7;
      color: var(--fy-accent-dark);
    }

    .fy-val { color: var(--fy-ember); }

    .fy-ops { margin-top: 1.2em !important; font-size: 0.88rem !important; }
    .fy-ops code {
      font-family: var(--fy-mono);
      background: var(--fy-chip);
      border: 1px solid var(--fy-line);
      border-radius: 4px;
      padding: 1px 5px;
      color: var(--fy-ink);
      font-size: 0.85em;
    }

    /* Read-only */
    .fy-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 12px;
    }

    .fy-list li {
      border-left: 3px solid var(--fy-accent);
      background: var(--fy-panel);
      border-radius: 0 10px 10px 0;
      padding: 14px 18px;
      color: var(--fy-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .fy-list strong { color: var(--fy-ink); display: block; }
    .fy-list code { font-family: var(--fy-mono); font-size: 0.85em; color: var(--fy-ink); }

    /* CTA */
    .fy-cta {
      text-align: center;
      padding: 72px 24px 80px;
      border-top: 1px solid var(--fy-line);
      background: var(--fy-panel);
    }

    .fy-cta h2 { font-size: clamp(1.7rem, 3.4vw, 2.2rem); margin: 0 0 0.4em; }
    .fy-cta > p { color: var(--fy-muted); margin: 0 auto 1.8em; max-width: 34rem; line-height: 1.6; }

    .fy-notes {
      max-width: 40rem;
      margin: 2.4em auto 0 !important;
      text-align: left;
      font-size: 0.88rem;
      color: var(--fy-muted);
      line-height: 1.6;
      padding-left: 1.2em;
    }

    .fy-notes li + li { margin-top: 6px; }

    @media (max-width: 880px) {
      .fy-hero { padding: 40px 16px 0; }
      .fy-section { padding: 44px 16px; }
      .fy-grid { grid-template-columns: 1fr; }
      .fy-split { grid-template-columns: minmax(0, 1fr); gap: 24px; }
      .fy-cta { padding: 52px 16px 60px; }
      .fy-shot { margin-top: 12px; }
    }
  </style>

  <section class="fy-hero">
    <div class="fy-inner">
      <div class="fy-brand">
        <img src="/assets/img/fyrestore-logo.svg" alt="" width="34" height="34">
        Fyrestore
      </div>
      <h1>Look at your Firestore data. <span>Break nothing.</span></h1>
      <p class="fy-sub">
        A light, read-only macOS browser for Google Firestore.
        Sign in with your Google account and browse any project you have access to.
      </p>
      <div class="fy-actions">
        <a href="https://github.com/guillim/fyrestore/releases" class="fy-btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1v9.5M8 10.5L4.5 7M8 10.5L11.5 7M3 13h10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Download for macOS
        </a>
        <a href="https://github.com/guillim/fyrestore" class="fy-link" target="_blank" rel="noopener noreferrer">View on GitHub &rarr;</a>
      </div>
      <ul class="fy-facts">
        <li>read-only</li>
        <li>free &amp; open source</li>
        <li>native Swift</li>
        <li>no Firebase SDK</li>
        <li>macOS 13+</li>
      </ul>
    </div>
    <div class="fy-shot">
      <img src="/assets/img/fyrestore-overview.png" width="1800" height="1262"
           alt="Fyrestore window: a sidebar of collections, a filtered document list, and a field inspector showing typed values and nested maps.">
    </div>
  </section>

  <section class="fy-section fy-section-panel">
    <div class="fy-inner">
      <h2>Three panes, nothing else</h2>
      <p class="fy-lead">Projects and collections on the left, documents in the middle, fields on the right. It opens fast and stays out of the way.</p>
      <div class="fy-grid">
        <div>
          <span class="fy-key">sign-in</span>
          <h3>One button</h3>
          <p>Sign in with Google in your browser and you are back in the app. Tokens are cached in your macOS Keychain.</p>
        </div>
        <div>
          <span class="fy-key">inspector</span>
          <h3>Typed fields</h3>
          <p>Every value shows its type. Maps and arrays fold and unfold, and you can filter fields by name.</p>
        </div>
        <div>
          <span class="fy-key">sub-collections</span>
          <h3>Drill down</h3>
          <p>Sub-collections appear on the document. Click to go in, and use the breadcrumb to come back up.</p>
        </div>
        <div>
          <span class="fy-key">pagination</span>
          <h3>100 at a time</h3>
          <p>The first 100 documents load right away. "Load more" fetches the next page when you want it.</p>
        </div>
        <div>
          <span class="fy-key">copy</span>
          <h3>Copy as JSON</h3>
          <p>Copy any document as JSON, or just its reference path. Right-click for more.</p>
        </div>
        <div>
          <span class="fy-key">console</span>
          <h3>Jump to Firebase</h3>
          <p>Need to change something? One click opens the same document in the Firebase Console.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="fy-section">
    <div class="fy-inner fy-split">
      <div>
        <h2>Find the document in one line</h2>
        <p>Type a filter as <em>field, operator, value</em>. No query builder, no index to set up for a quick look.</p>
        <p class="fy-ops">
          Operators: <code>==</code> <code>!=</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code> and <code>contains</code>, a case-insensitive substring match.
        </p>
      </div>
      <ul class="fy-filters" aria-label="Filter examples">
        <li>age <span class="fy-op">&gt;=</span> <span class="fy-val">18</span></li>
        <li>name <span class="fy-op">==</span> <span class="fy-val">"alice"</span></li>
        <li>email <span class="fy-op">contains</span> <span class="fy-val">"alice"</span></li>
      </ul>
    </div>
  </section>

  <section class="fy-section">
    <div class="fy-inner fy-split" style="align-items: start;">
      <div>
        <h2>Read-only, on purpose</h2>
        <p>
          The Firebase Console puts "delete" one click away from production data.
          Fyrestore has no write or delete call anywhere in its code, so there is nothing to click by mistake.
          Hand it to a teammate who only needs to look.
        </p>
      </div>
      <ul class="fy-list">
        <li>
          <strong>Your Google account, your permissions</strong>
          You see the projects your account can already see. A missing project means a missing IAM role, not a bug.
        </li>
        <li>
          <strong>Two viewer roles are enough</strong>
          <code>roles/datastore.viewer</code> on each project, and <code>roles/browser</code> so the app can list your projects.
        </li>
        <li>
          <strong>Small and readable</strong>
          A pure Swift package that talks to Google's APIs directly. Every line is on GitHub.
        </li>
      </ul>
    </div>
  </section>

  <section class="fy-cta">
    <h2>Download it, sign in, browse</h2>
    <p>Free and open source. Or clone the repository and run <code style="font-family: var(--fy-mono); font-size: 0.9em;">swift run Fyrestore</code>.</p>
    <div class="fy-actions">
      <a href="https://github.com/guillim/fyrestore/releases" class="fy-btn" target="_blank" rel="noopener noreferrer">Download for macOS</a>
      <a href="https://github.com/guillim/fyrestore" class="fy-link" target="_blank" rel="noopener noreferrer">Read the source</a>
    </div>
    <ul class="fy-notes">
      <li>The app is not notarized by Apple yet: the first time, right-click it and choose Open.</li>
      <li>Google may show a "Google hasn't verified this app" screen at sign-in. Choose Advanced, then Continue.</li>
      <li>Requires macOS 13 or later.</li>
    </ul>
  </section>

</div>
