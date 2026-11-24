---
layout: product
title: NuzzleCam - The Baby Monitor Made of the iPhones You Already Own
permalink: /products/nuzzlecam
favicon: /assets/img/nuzzlecam-logo.png
description: "Turn two iPhones or iPads into a baby monitor. Picture and sound go straight from one device to the other: no server, no relay, no account. Open source."
image: /assets/img/nuzzlecam-logo.png
---

<div class="product-page product-page-nuzzlecam">

  <style>
    .product-page-nuzzlecam {
      --nz-night: #0f1524;
      --nz-deep: #070a12;
      --nz-card: #182038;
      --nz-border: #2a3350;
      --nz-text: #f4f1ea;
      --nz-muted: #a9b1c6;
      --nz-amber: #f2b66d;
      --nz-on-amber: #1a1408;
      --nz-mint: #6fd3b8;
      --nz-coral: #f28b7d;
      --nz-round: ui-rounded, "SF Pro Rounded", "Nunito", "Open Sans", system-ui, sans-serif;
      background: var(--nz-night);
      color: var(--nz-text);
    }

    .product-page-nuzzlecam a { color: var(--nz-amber); }

    .product-page-nuzzlecam h1,
    .product-page-nuzzlecam h2,
    .product-page-nuzzlecam h3 {
      font-family: var(--nz-round);
      color: var(--nz-text);
      text-wrap: balance;
    }

    /* Hero */
    .nz-hero {
      background:
        radial-gradient(circle at 78% 18%, rgba(242, 182, 109, 0.16) 0, transparent 42%),
        radial-gradient(circle at 10% 90%, rgba(111, 211, 184, 0.08) 0, transparent 45%),
        linear-gradient(180deg, var(--nz-deep) 0%, var(--nz-night) 100%);
      padding: 84px 24px 76px;
    }

    .nz-hero-inner {
      max-width: 1080px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
      gap: 48px;
      align-items: center;
    }

    .nz-brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 22px;
      font-family: var(--nz-round);
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: 0.01em;
    }

    .nz-brand img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: block;
    }

    .nz-hero h1 {
      font-size: clamp(2.1rem, 4.6vw, 3.3rem);
      line-height: 1.1;
      margin: 0 0 0.5em;
      font-weight: 700;
    }

    .nz-hero h1 em {
      font-style: normal;
      color: var(--nz-amber);
    }

    .nz-hero-sub {
      font-size: 1.1rem;
      line-height: 1.65;
      color: var(--nz-muted);
      max-width: 34rem;
      margin: 0 0 2em;
    }

    .nz-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px 20px;
      align-items: center;
    }

    .nz-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 26px;
      border-radius: 999px;
      background: var(--nz-amber);
      color: var(--nz-on-amber) !important;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      box-shadow: 0 6px 24px rgba(242, 182, 109, 0.25);
    }

    .nz-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 30px rgba(242, 182, 109, 0.38);
      text-decoration: none;
    }

    .nz-link {
      color: var(--nz-text) !important;
      text-decoration: none;
      border-bottom: 1px solid var(--nz-border);
      padding-bottom: 2px;
      font-size: 0.95rem;
    }

    .nz-link:hover { border-bottom-color: var(--nz-amber); text-decoration: none; }

    .nz-facts {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 20px;
      margin: 1.8em 0 0;
      padding: 0;
      list-style: none;
      font-size: 0.88rem;
      color: var(--nz-muted);
    }

    .nz-facts li {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nz-facts li::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--nz-mint);
    }

    /* Phone illustration */
    .nz-phones {
      position: relative;
      height: 440px;
      max-width: 400px;
      margin: 0 auto;
      width: 100%;
    }

    .nz-phone {
      position: absolute;
      width: 205px;
      height: 400px;
      border-radius: 34px;
      background: var(--nz-deep);
      border: 1px solid var(--nz-border);
      box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55), inset 0 0 0 5px #05070d;
      overflow: hidden;
      font-family: var(--nz-round);
    }

    .nz-phone-baby { left: 0; top: 0; transform: rotate(-5deg); }
    .nz-phone-parent { right: 0; bottom: 0; transform: rotate(4deg); }

    .nz-screen {
      position: absolute;
      inset: 5px;
      border-radius: 29px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .nz-screen-baby {
      background: radial-gradient(circle at 50% 42%, #1c1a16 0, #070a12 62%);
      align-items: center;
      justify-content: center;
      gap: 14px;
      text-align: center;
    }

    .nz-moon {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      box-shadow: -17px 9px 0 0 var(--nz-amber);
      transform: translate(17px, -9px);
      animation: nz-breathe 5s ease-in-out infinite;
    }

    @keyframes nz-breathe {
      0%, 100% { opacity: 0.75; }
      50% { opacity: 1; }
    }

    .nz-screen-label {
      font-size: 0.72rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--nz-muted);
    }

    .nz-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 5px 11px;
      border-radius: 999px;
      background: rgba(111, 211, 184, 0.12);
      color: var(--nz-mint);
      font-size: 0.7rem;
      font-weight: 600;
    }

    .nz-pill::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--nz-mint);
      animation: nz-pulse 2s ease-in-out infinite;
    }

    @keyframes nz-pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(111, 211, 184, 0.5); }
      50% { box-shadow: 0 0 0 5px rgba(111, 211, 184, 0); }
    }

    .nz-screen-parent { background: var(--nz-night); }

    .nz-picture {
      flex: 1;
      background:
        radial-gradient(ellipse at 50% 68%, #2b2f45 0, #151c31 45%, #05070d 100%);
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 16px 13px;
    }

    .nz-picture::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 24%;
      width: 82px;
      height: 46px;
      transform: translateX(-50%);
      border-radius: 50% 50% 46% 46%;
      background: radial-gradient(ellipse at 50% 40%, #4a4f68 0, #2b2f45 70%);
      opacity: 0.8;
    }

    .nz-time { font-size: 0.68rem; color: var(--nz-muted); padding-top: 5px; }

    .nz-meter {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 4px;
      height: 34px;
      padding: 10px 0 4px;
      background: var(--nz-night);
    }

    .nz-meter span {
      width: 4px;
      border-radius: 2px;
      background: var(--nz-mint);
      height: 30%;
      animation: nz-level 1.8s ease-in-out infinite;
    }

    .nz-meter span:nth-child(2) { animation-delay: -0.3s; }
    .nz-meter span:nth-child(3) { animation-delay: -0.9s; }
    .nz-meter span:nth-child(4) { animation-delay: -0.5s; }
    .nz-meter span:nth-child(5) { animation-delay: -1.2s; }
    .nz-meter span:nth-child(6) { animation-delay: -0.7s; }
    .nz-meter span:nth-child(7) { animation-delay: -0.2s; }

    @keyframes nz-level {
      0%, 100% { height: 18%; }
      50% { height: 70%; }
    }

    .nz-controls {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 7px;
      padding: 8px 12px 20px;
      background: var(--nz-night);
    }

    .nz-controls span {
      aspect-ratio: 1;
      border-radius: 13px;
      background: var(--nz-card);
      border: 1px solid var(--nz-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.95rem;
    }

    .nz-controls span.is-on {
      background: rgba(242, 182, 109, 0.16);
      border-color: var(--nz-amber);
    }

    .nz-illustration-note {
      text-align: center;
      font-size: 0.75rem;
      color: #6b7592;
      margin: 14px 0 0;
    }

    /* Sections */
    .nz-section { padding: 72px 24px; }
    .nz-section-alt { background: var(--nz-deep); }

    .nz-inner { max-width: 1000px; margin: 0 auto; }

    .nz-section h2 {
      font-size: clamp(1.6rem, 3vw, 2.1rem);
      margin: 0 0 0.4em;
      font-weight: 700;
    }

    .nz-lead {
      color: var(--nz-muted);
      font-size: 1.05rem;
      line-height: 1.65;
      max-width: 40rem;
      margin: 0 0 2.2em;
    }

    .nz-steps {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      counter-reset: nz-step;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nz-steps li {
      counter-increment: nz-step;
      background: var(--nz-card);
      border: 1px solid var(--nz-border);
      border-radius: 20px;
      padding: 24px 22px;
    }

    .nz-steps li::before {
      content: counter(nz-step);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: var(--nz-amber);
      color: var(--nz-on-amber);
      font-family: var(--nz-round);
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 14px;
    }

    .nz-steps h3, .nz-grid h3 {
      font-size: 1.08rem;
      margin: 0 0 0.4em;
      font-weight: 700;
    }

    .nz-steps p, .nz-grid p {
      margin: 0;
      color: var(--nz-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .nz-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px 32px;
    }

    .nz-grid > div {
      border-top: 1px solid var(--nz-border);
      padding-top: 18px;
    }

    .nz-icon { font-size: 1.4rem; display: block; margin-bottom: 10px; }

    /* Privacy split */
    .nz-split {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
      gap: 48px;
      align-items: start;
    }

    .nz-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 14px;
    }

    .nz-list li {
      background: var(--nz-card);
      border: 1px solid var(--nz-border);
      border-radius: 16px;
      padding: 16px 18px;
      color: var(--nz-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .nz-list strong { color: var(--nz-text); display: block; margin-bottom: 2px; }

    .nz-honest {
      border-left: 3px solid var(--nz-coral);
      padding: 4px 0 4px 18px;
      color: var(--nz-muted);
      font-size: 0.95rem;
      line-height: 1.65;
      margin: 2em 0 0;
      max-width: 44rem;
    }

    .nz-honest strong { color: var(--nz-text); }

    /* CTA */
    .nz-cta {
      text-align: center;
      padding: 80px 24px 88px;
      background:
        radial-gradient(circle at 50% 0%, rgba(242, 182, 109, 0.14) 0, transparent 55%),
        var(--nz-night);
      border-top: 1px solid var(--nz-border);
    }

    .nz-cta h2 { font-size: clamp(1.7rem, 3.4vw, 2.3rem); margin: 0 0 0.4em; }
    .nz-cta p { color: var(--nz-muted); margin: 0 auto 2em; max-width: 34rem; line-height: 1.6; }
    .nz-cta .nz-actions { justify-content: center; }

    .nz-req {
      margin: 2em auto 0 !important;
      font-size: 0.85rem;
    }

    @media (max-width: 880px) {
      .nz-hero { padding: 40px 16px 48px; }
      .nz-hero-inner { grid-template-columns: minmax(0, 1fr); gap: 40px; }
      .nz-section { padding: 48px 16px; }
      .nz-steps, .nz-grid { grid-template-columns: 1fr; }
      .nz-split { grid-template-columns: minmax(0, 1fr); gap: 24px; }
      .nz-phones { transform: scale(0.82); transform-origin: top center; height: 365px; }
      .nz-cta { padding: 56px 16px 64px; }
    }

    @media (prefers-reduced-motion: reduce) {
      .nz-moon, .nz-pill::before, .nz-meter span { animation: none; }
    }
  </style>

  <section class="nz-hero">
    <div class="nz-hero-inner">
      <div>
        <div class="nz-brand">
          <img src="/assets/img/nuzzlecam-logo.png" alt="" width="40" height="40">
          NuzzleCam
        </div>
        <h1>A baby monitor made of the iPhones <em>you already own</em>.</h1>
        <p class="nz-hero-sub">
          One device stays in the baby's room, up to two others stay with the parents.
          Picture and sound go straight from one device to the other. No server, no relay, no account.
        </p>
        <div class="nz-actions">
          <a href="https://github.com/guillim/babyphone" class="nz-btn" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            View the source on GitHub
          </a>
          <a href="#how" class="nz-link">How it works &darr;</a>
        </div>
        <ul class="nz-facts">
          <li>Open source</li>
          <li>iPhone &amp; iPad, iOS 16+</li>
          <li>Works without internet at home</li>
          <li>English &amp; French</li>
        </ul>
      </div>

      <div>
        <div class="nz-phones" role="img" aria-label="Illustration: a baby-side device showing a dimmed night screen, and a parent-side device showing the live picture, a sound meter and controls.">
          <div class="nz-phone nz-phone-baby">
            <div class="nz-screen nz-screen-baby">
              <div class="nz-moon"></div>
              <div class="nz-screen-label">Baby side</div>
              <div class="nz-pill">Monitoring</div>
            </div>
          </div>
          <div class="nz-phone nz-phone-parent">
            <div class="nz-screen nz-screen-parent">
              <div class="nz-picture">
                <span class="nz-pill">Live</span>
                <span class="nz-time">02:14</span>
              </div>
              <div class="nz-meter"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <div class="nz-controls">
                <span title="Talk">🎙️</span>
                <span title="Night light" class="is-on">💡</span>
                <span title="Lullaby">🎵</span>
                <span title="White noise">🌊</span>
              </div>
            </div>
          </div>
        </div>
        <p class="nz-illustration-note">Illustration, not a screenshot.</p>
      </div>
    </div>
  </section>

  <section class="nz-section nz-section-alt" id="how">
    <div class="nz-inner">
      <h2>Set up in a minute</h2>
      <p class="nz-lead">That old iPhone in the drawer is a better camera than most baby monitors. Put it to work.</p>
      <ol class="nz-steps">
        <li>
          <h3>Pick a side</h3>
          <p>On each device, choose "Baby side" or "Parent side". Any iPhone or iPad can play either role.</p>
        </li>
        <li>
          <h3>Pair once, side by side</h3>
          <p>The parent device scans the QR code shown on the baby device, or you type its six digits. No shared Wi-Fi needed to pair.</p>
        </li>
        <li>
          <h3>Start monitoring</h3>
          <p>Tap start on the baby device and leave it plugged in. The parent device connects by itself, and reconnects by itself.</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="nz-section">
    <div class="nz-inner">
      <h2>Everything a night needs</h2>
      <p class="nz-lead">Built by a parent, for the 3 a.m. version of yourself.</p>
      <div class="nz-grid">
        <div>
          <span class="nz-icon">👶</span>
          <h3>Cry detection</h3>
          <p>Runs on the baby device with the sound classifier that ships in iOS. Choose to be alerted for any noise, or for crying only.</p>
        </div>
        <div>
          <span class="nz-icon">🔔</span>
          <h3>Alerts you will hear</h3>
          <p>Noise, unplugged charger, low battery, lost link. Alarms play through the app's own audio, so they ring on silent and in a Focus mode.</p>
        </div>
        <div>
          <span class="nz-icon">👫</span>
          <h3>Two parents</h3>
          <p>Each parent pairs separately, zooms independently and can switch to audio only. Either one can be removed at any time.</p>
        </div>
        <div>
          <span class="nz-icon">🌙</span>
          <h3>Night light, lullaby, white noise</h3>
          <p>Triggered from the parent's phone. The lullaby and white noise are synthesised by the app, with a 15, 30 or 60 minute timer.</p>
        </div>
        <div>
          <span class="nz-icon">🔦</span>
          <h3>Low light &amp; zoom</h3>
          <p>Low-light mode slows the camera for longer exposures in a dark room. Pinch up to 4× on the parent's screen.</p>
        </div>
        <div>
          <span class="nz-icon">🎙️</span>
          <h3>Talk back</h3>
          <p>Hold the talk button to soothe from the next room. The microphone opens only while you hold it.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="nz-section nz-section-alt">
    <div class="nz-inner nz-split">
      <div>
        <h2>Nobody else is in the room</h2>
        <p class="nz-lead" style="margin-bottom: 0;">
          Most camera apps send your nursery through somebody's cloud. NuzzleCam has no cloud to send it to.
          Video and audio are encrypted between your two devices and travel directly from one to the other.
        </p>
      </div>
      <ul class="nz-list">
        <li>
          <strong>At home: Wi-Fi only</strong>
          The devices find each other with Bonjour. This needs neither internet nor iCloud.
        </li>
        <li>
          <strong>Away from home: a direct link</strong>
          The devices leave each other one small encrypted note in iCloud with their current addresses, then connect directly. Nothing else goes through iCloud.
        </li>
        <li>
          <strong>A key that never travels</strong>
          Pairing runs a password-authenticated key exchange. The resulting 256-bit key lives in the Keychain, and only the paired device gets through.
        </li>
        <li>
          <strong>No account, no tracking</strong>
          Nothing to sign up for, and every line is on GitHub for you to read.
        </li>
      </ul>
    </div>
    <div class="nz-inner">
      <p class="nz-honest">
        <strong>The honest part.</strong> No relay means some networks cannot be crossed.
        When no direct path exists, the parent device says so and falls back to alerts only, read through iCloud about every 20 seconds: no picture, no sound.
        NuzzleCam is a young project, and it does not replace checking on your child.
      </p>
    </div>
  </section>

  <section class="nz-cta">
    <h2>Build it tonight</h2>
    <p>NuzzleCam is not on the App Store yet. The whole app is open source: clone it, open it in Xcode, and run it on your own devices.</p>
    <div class="nz-actions">
      <a href="https://github.com/guillim/babyphone" class="nz-btn" target="_blank" rel="noopener noreferrer">Get the code on GitHub</a>
      <a href="https://github.com/guillim/babyphone/issues" class="nz-link" target="_blank" rel="noopener noreferrer">Report an issue</a>
    </div>
    <p class="nz-req">Requires Xcode 16+, two iPhones or iPads on iOS 16+, and an Apple Developer account.</p>
  </section>

</div>
