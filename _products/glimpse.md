---
layout: product
title: Glimpse - Desktop Companions for Claude Code
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

    /* Download button */
    .product-page-variant-1 .glimpse-download-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      font-size: 1.05rem;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
      border-radius: 12px;
      text-decoration: none;
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5), 0 4px 14px rgba(34, 197, 94, 0.3);
      animation: glimpse-glow 2.5s ease-in-out infinite;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .product-page-variant-1 .glimpse-download-btn:hover {
      transform: translateY(-1px) scale(1.03);
      box-shadow: 0 0 20px 4px rgba(34, 197, 94, 0.35), 0 8px 24px rgba(34, 197, 94, 0.3);
      animation: none;
    }

    @keyframes glimpse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4), 0 4px 14px rgba(34, 197, 94, 0.3); }
      50% { box-shadow: 0 0 18px 4px rgba(34, 197, 94, 0.25), 0 4px 14px rgba(34, 197, 94, 0.3); }
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
            Desktop companions for Claude Code
          </div>
        </div>
        <h1 class="product-hero-title" data-animate="hero-title">
          Your AI agents alive on your desktop.
        </h1>
        <p class="product-hero-subtitle" data-animate="hero-subtitle">
          Know what every agent is doing — without leaving your editor.
        </p>
        <div class="product-hero-actions" data-animate="hero-cta">
          <a href="/assets/files/Glimpse.dmg" class="glimpse-download-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink: 0;"><path d="M8 1v9.5M8 10.5L4.5 7M8 10.5L11.5 7M3 13h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Download for macOS
            <span style="opacity: 0.7; font-size: 0.8rem; font-weight: 400;">&lt; 1 MB</span>
          </a>
          <a href="https://github.com/guillim/Glimpse" class="product-hero-secondary-link" target="_blank" rel="noopener noreferrer">
            View on GitHub &rarr;
          </a>
        </div>
        <div class="product-hero-metadata" data-animate="hero-cta">
          <span>Free &amp; open source</span>
          <span>100% on-device</span>
          <span>No account, no tracking</span>
        </div>
      </div>

      <div class="product-hero-right" data-animate="feature-1">
        <div class="product-hero-mock" style="border-radius: 15px; overflow: hidden; box-shadow: 0 2px 18px 0 rgba(19,30,45,0.13);">
          <img src="/assets/img/glimpse-hero.gif" alt="Glimpse — animated characters on your desktop" style="display: block; width: 100%; border-radius: 15px;">
        </div>
      </div>
    </div>
  </section>


  <section class="product-section" id="demo">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">See it in action</h2>
      <p class="product-section-lead" data-animate="section-lead">
        30 seconds to understand why you'll never check your terminals the same way again.
      </p>
      <div class="glimpse-video-wrapper" style="position: relative; width: 100%; max-width: 800px; margin: 0 auto; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; box-shadow: 0 24px 70px rgba(15, 23, 42, 0.3); cursor: pointer; background: #000;">
        <iframe srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:68px;width:68px;left:0;right:0;display:flex;align-items:center;justify-content:center;background:rgba(255,0,0,.85);border-radius:14px;font-size:30px}</style><a href=https://www.youtube.com/embed/ui-DR_9oKoY?autoplay=1><img src=https://img.youtube.com/vi/ui-DR_9oKoY/maxresdefault.jpg alt='Glimpse demo'><span>&#9654;</span></a>" title="Glimpse — Desktop Companions for Claude Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
      </div>
    </div>
  </section>




  <section class="product-section product-section-muted">
    <div class="product-section-inner">
      <h2 class="product-section-title" data-animate="section-title">Why developers download it</h2>
      <div class="product-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
        <div class="product-card" style="text-align: center; padding: 20px 16px;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">👾</div>
          <h4 style="color: #159957; margin: 0 0 4px;">7 character styles</h4>
          <p style="margin: 0; font-size: 0.9rem;">Kawaii, Star Wars, One Piece, Dragon Ball Z, The Office, Marvel, Demon Slayer</p>
        </div>
        <div class="product-card" style="text-align: center; padding: 20px 16px;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🟠</div>
          <h4 style="color: #159957; margin: 0 0 4px;">Subtle notifications</h4>
          <p style="margin: 0; font-size: 0.9rem;">An orange dot in the menu bar when an agent needs you. No popups, no sounds.</p>
        </div>
        <div class="product-card" style="text-align: center; padding: 20px 16px;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🪶</div>
          <h4 style="color: #159957; margin: 0 0 4px;">Under 1% CPU</h4>
          <p style="margin: 0; font-size: 0.9rem;">Minimal RAM. No Dock icon. Just your menu bar.</p>
        </div>
        <div class="product-card" style="text-align: center; padding: 20px 16px;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🔓</div>
          <h4 style="color: #159957; margin: 0 0 4px;">Open source &amp; private</h4>
          <p style="margin: 0; font-size: 0.9rem;">100% on-device. No network, no account. <a href="https://github.com/guillim/Glimpse" target="_blank" rel="noopener noreferrer">Read every line.</a></p>
        </div>
        <div class="product-card" style="text-align: center; padding: 20px 16px;">
          <div style="font-size: 1.5rem; margin-bottom: 6px;">🖥️</div>
          <h4 style="color: #159957; margin: 0 0 4px;">Works with everything</h4>
          <p style="margin: 0; font-size: 0.9rem;">Terminal, iTerm2, Cursor IDE. macOS 13.0+.</p>
        </div>
      </div>
      <p style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 0.85rem;">
        Something wrong? Something missing? <a href="https://guillim.notion.site/cb03a89ec49b825a98f1010b6aa3d085?pvs=105" target="_blank" rel="noopener noreferrer" style="color: #159957;">Share your feedback</a>
      </p>
    </div>
  </section>

  <section class="product-cta-banner">
    <div class="product-cta-banner-inner">
      <h2>10-second install. Zero config. Just open it.</h2>
      <p>Free, open source, no account required.</p>
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
