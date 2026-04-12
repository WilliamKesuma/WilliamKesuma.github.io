// main.js — William Sanjaya Kesuma Portfolio (FIXED)

/* ────────────────────────────────────────────────────────────────
   Portfolio Module — All functionality namespaced to avoid conflicts
   ──────────────────────────────────────────────────────────────── */

const Portfolio = {
  /* ── SKILL CATEGORIES DATA ── */
  skillCategories: [
    {
      title: 'Languages & Frameworks',
      tags: [
        { l: 'Python',       i: 'devicon-python-plain colored' },
        { l: 'JavaScript',   i: 'devicon-javascript-plain colored' },
        { l: 'TypeScript',   i: 'devicon-typescript-plain colored' },
        { l: 'Swift',        i: 'devicon-swift-plain colored' },
        { l: 'HTML',         i: 'devicon-html5-plain colored' },
        { l: 'CSS',          i: 'devicon-css3-plain colored' },
        { l: 'React',        i: 'devicon-react-original colored' },
        { l: 'Tailwind CSS', i: 'devicon-tailwindcss-plain colored' },
        { l: 'REST APIs',    i: 'devicon-fastapi-plain colored' },
        { l: 'JSON',         i: 'devicon-json-plain colored' },
        { l: 'C#',           i: 'devicon-csharp-plain colored' },
      ]
    },
    {
      title: 'AWS Cloud Services',
      tags: [
        { l: 'AWS CDK',        i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'Lambda',         i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'DynamoDB',       i: 'devicon-dynamodb-plain colored' },
        { l: 'API Gateway',    i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'S3',             i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'EC2',            i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'IAM',            i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'VPC',            i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'Cognito',        i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'Textract',       i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'OpenSearch',     i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'SQS',            i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'SES',            i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'X-Ray',          i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'CodePipeline',   i: 'devicon-amazonwebservices-plain-wordmark colored' },
        { l: 'CloudFormation', i: 'devicon-amazonwebservices-plain-wordmark colored' },
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      tags: [
        { l: 'Git',                     i: 'devicon-git-plain colored' },
        { l: 'GitHub',                  i: 'devicon-github-original' },
        { l: 'Infrastructure as Code',  i: 'devicon-terraform-plain' },
        { l: 'CI/CD',                   i: 'devicon-githubactions-plain colored' },
        { l: 'WebSocket',               i: 'devicon-nodejs-plain colored' },
        { l: 'Serverless Architecture', i: 'devicon-amazonwebservices-plain-wordmark colored' },
      ]
    },
    {
      title: 'Data & Analytics',
      tags: [
        { l: 'SQL',                     i: 'devicon-azuresqldatabase-plain colored' },
        { l: 'ARIMA / SARIMA',          i: 'devicon-numpy-plain colored' },
        { l: 'CRISP-DM',                i: 'devicon-jupyter-plain colored' },
        { l: 'Data Analysis',           i: 'devicon-pandas-plain' },
        { l: 'Time Series Forecasting', i: 'devicon-matplotlib-plain colored' },
        { l: 'Excel',                   i: 'devicon-microsoftexcel-plain colored' },
        { l: 'Google Sheets',           i: 'devicon-google-plain colored' },
      ]
    },
    {
      title: 'Design & Product',
      tags: [
        { l: 'Figma',              i: 'devicon-figma-plain colored' },
        { l: 'Wireframing',        i: 'devicon-figma-plain colored' },
        { l: 'SwiftUI',            i: 'devicon-swift-plain colored' },
        { l: 'iOS',                i: 'devicon-apple-plain' },
        { l: 'iPadOS',             i: 'devicon-apple-plain' },
        { l: 'watchOS',            i: 'devicon-apple-plain' },
        { l: 'macOS',              i: 'devicon-apple-plain' },
        { l: 'Product Management', i: 'devicon-trello-plain colored' },
      ]
    },
    {
      title: 'Project & BA Tools',
      tags: [
        { l: 'Jira',                     i: 'devicon-jira-plain colored' },
        { l: 'Trello',                   i: 'devicon-trello-plain colored' },
        { l: 'Requirements Elicitation', i: 'devicon-confluence-plain colored' },
        { l: 'Process Mapping',          i: 'devicon-confluence-plain colored' },
        { l: 'Gap Analysis',             i: 'devicon-confluence-plain colored' },
        { l: 'UAT',                      i: 'devicon-confluence-plain colored' },
        { l: 'BRD Documentation',        i: 'devicon-confluence-plain colored' },
        { l: 'Agile / Scrum',            i: 'devicon-jira-plain colored' },
        { l: 'Workflow Optimization',    i: 'devicon-confluence-plain colored' },
        { l: 'Stakeholder Management',   i: 'devicon-confluence-plain colored' },
      ]
    },
    {
      title: 'Soft Skills & Leadership',
      tags: [
        { l: 'Team Leadership' },
        { l: 'Cross-functional Collaboration' },
        { l: 'Strategic Problem-Solving' },
        { l: 'Conflict Resolution' },
        { l: 'Public Speaking' },
        { l: 'Agile Project Management' },
        { l: 'Time Management' },
        { l: 'Adaptability' },
        { l: 'Communication' },
        { l: 'Digital Marketing' },
      ]
    },
  ],

  /* ── INITIALIZATION ── */
  init() {
    this.initScrollAnimations();
    this.initTypewriter();
    this.initCarousel();
    this.initKeyboardNavigation();
  },

  /* ── 1. SCROLL ANIMATIONS ── */
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up, .exp-item, .project-card').forEach(el => observer.observe(el));

    document.querySelectorAll('.project-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.08}s`;
    });
    document.querySelectorAll('.exp-item').forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.1}s`;
    });
  },

  /* ── 2. TYPEWRITER EFFECT ── */
  initTypewriter() {
    const el = document.querySelector('.typewriter-text');
    if (!el) {
      console.warn('Typewriter element not found');
      return;
    }

    const wordsJson = el.getAttribute('data-words');
    if (!wordsJson) {
      console.warn('No words data found for typewriter');
      return;
    }

    let words = [];
    try {
      words = JSON.parse(wordsJson);
    } catch (e) {
      console.warn('Failed to parse typewriter words:', e);
      return;
    }

    if (!words.length) {
      console.warn('Typewriter words array is empty');
      return;
    }

    let wordIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;

    const type = () => {
      const current = words[wordIndex];
      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }
      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }
      setTimeout(type, typeSpeed);
    };

    type();
  },

  /* ── 3. SKILLS CAROUSEL (FIXED) ── */
  initCarousel() {
    const track   = document.getElementById('skillTrack');
    const dotsEl  = document.getElementById('skillDots');
    const outer   = document.getElementById('skillOuter');
    const prevBtn = document.getElementById('skillPrev');
    const nextBtn = document.getElementById('skillNext');
    const curEl   = document.getElementById('skillCur');
    const totEl   = document.getElementById('skillTot');

    if (!track || !dotsEl || !outer || !prevBtn || !nextBtn) {
      console.warn('Carousel elements not found. Carousel disabled.');
      return;
    }

    const cats = this.skillCategories;
    const N = cats.length;
    totEl.textContent = String(N).padStart(2, '0');

    // Build slides: [clone of last, ...real slides..., clone of first] for seamless loop
    [cats[N - 1], ...cats, cats[0]].forEach(cat => {
      const s = document.createElement('div');
      s.className = 'slide';
      s.innerHTML = `<div class="slide-inner">
        <p class="slide-heading">${cat.title}</p>
        <div class="skill-tags">${
          cat.tags.map(t =>
            `<span class="skill-tag">${t.i ? `<i class="${t.i}"></i>` : ''}${t.l}</span>`
          ).join('')
        }</div>
      </div>`;
      track.appendChild(s);
    });

    // Build dots (one per real slide, not clones)
    cats.forEach((_, i) => {
      const d = document.createElement('div');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.setAttribute('role', 'tab');
      d.setAttribute('tabindex', '0');
      d.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      d.addEventListener('click', () => { this.carouselJumpTo(i); this.carouselPauseFor(2000); });
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.carouselJumpTo(i);
          this.carouselPauseFor(2000);
        }
      });
      dotsEl.appendChild(d);
    });

    // STATE
    const SPEED = 60; // pixels per second (frame-rate independent)
    let rawPx = 0;
    let currentIdx = 0;
    let paused = false;
    let pauseTimer = null;
    let lastTime = performance.now();

    const getW = () => track.querySelector('.slide').offsetWidth;

    const applyPx = (px) => {
      track.style.transform = `translateX(-${px}px)`;
    };

    const updateUI = (idx) => {
      document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
        d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      });
      curEl.textContent = String(idx + 1).padStart(2, '0');
    };

    const jumpTo = (i) => {
      currentIdx = ((i % N) + N) % N;
      const w = getW();
      rawPx = (currentIdx + 1) * w;
      applyPx(rawPx);
      updateUI(currentIdx);
    };

    const pauseFor = (ms) => {
      paused = true;
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(() => { paused = false; }, ms);
    };

    const animate = (currentTime) => {
      const deltaSeconds = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!paused) {
        const w = getW();
        rawPx += SPEED * deltaSeconds;

        // SEAMLESS LOOP: wrap around
        if (rawPx >= (N + 1) * w) rawPx -= N * w;
        if (rawPx < w) rawPx += N * w;

        applyPx(rawPx);

        // Re-sync currentIdx from position (drift correction)
        const posIdx = Math.round(rawPx / w) - 1;
        const driftIdx = ((posIdx % N) + N) % N;
        if (driftIdx !== currentIdx) {
          currentIdx = driftIdx;
          updateUI(currentIdx);
        }
      }

      requestAnimationFrame(animate);
    };

    prevBtn.addEventListener('click', () => {
      jumpTo((currentIdx - 1 + N) % N);
      pauseFor(2000);
    });

    nextBtn.addEventListener('click', () => {
      jumpTo((currentIdx + 1) % N);
      pauseFor(2000);
    });

    // Pause on hover
    outer.addEventListener('mouseenter', () => { paused = true; });
    outer.addEventListener('mouseleave', () => { paused = false; });

    // Touch swipe support (80px threshold to avoid accidental triggers)
    let tx = 0;
    const SWIPE_THRESHOLD = 80;
    track.addEventListener('touchstart', (e) => { 
      tx = e.touches[0].clientX; 
      paused = true; 
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > SWIPE_THRESHOLD) {
        jumpTo((currentIdx + (dx < 0 ? 1 : -1) + N) % N);
        pauseFor(2000);
      } else {
        paused = false;
      }
    }, { passive: true });

    // FIX: Recalculate position on window resize
    window.addEventListener('resize', () => {
      const newW = getW();
      rawPx = (currentIdx + 1) * newW;
      applyPx(rawPx);
    });

    // Store carousel state for keyboard navigation
    this.carouselState = { jumpTo, pauseFor };

    // Start animation
    jumpTo(0);
    requestAnimationFrame(animate);
  },

  carouselJumpTo(i) {
    if (this.carouselState) {
      this.carouselState.jumpTo(i);
    }
  },

  carouselPauseFor(ms) {
    if (this.carouselState) {
      this.carouselState.pauseFor(ms);
    }
  },

  /* ── 4. KEYBOARD NAVIGATION ── */
  initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      const skillOuter = document.getElementById('skillOuter');
      if (!skillOuter || !skillOuter.offsetParent) return; // Not visible

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        document.getElementById('skillPrev')?.click();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        document.getElementById('skillNext')?.click();
      }
    });
  }
};

/* ── INITIALIZE ON DOM READY ── */
winlocaldow.addEventListener('DOMContentLoaded', () => {
  Portfolio.init();
});