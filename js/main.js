// main.js — William Sanjaya Kesuma Portfolio

/* ── 1. SCROLL ANIMATIONS ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .exp-item, .project-card, .timeline-item').forEach(el => observer.observe(el));

document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});
document.querySelectorAll('.exp-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.1}s`;
});


/* ── 2. TYPEWRITER ── */
function initTypewriter() {
  const el = document.querySelector('.typewriter-text');
  if (!el) return;
  const words = JSON.parse(el.getAttribute('data-words'));
  let wordIndex = 0, charIndex = 0, isDeleting = false, typeSpeed = 100;
  function type() {
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
  }
  type();
}


/* ── 3. SKILLS CAROUSEL ── */
const cats = [
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
];

function initCarousel() {
  const track   = document.getElementById('skillTrack');
  const dotsEl  = document.getElementById('skillDots');
  const outer   = document.getElementById('skillOuter');
  const prevBtn = document.getElementById('skillPrev');
  const nextBtn = document.getElementById('skillNext');
  const curEl   = document.getElementById('skillCur');
  const totEl   = document.getElementById('skillTot');
  if (!track) return;

  const N = cats.length;
  totEl.textContent = String(N).padStart(2, '0');

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

  cats.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => { jumpTo(i); pauseFor(2000); });
    dotsEl.appendChild(d);
  });

  const SPEED = 0.8;
  let rawPx = 0;
  let currentIdx = 0;
  let paused = false;
  let pauseTimer = null;

  function getW() { return track.querySelector('.slide').offsetWidth; }
  function applyPx(px) { track.style.transform = `translateX(-${px}px)`; }
  function updateUI(idx) {
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    curEl.textContent = String(idx + 1).padStart(2, '0');
  }
  function jumpTo(i) {
    currentIdx = ((i % N) + N) % N;
    rawPx = (currentIdx + 1) * getW();
    applyPx(rawPx);
    updateUI(currentIdx);
  }
  function pauseFor(ms) {
    paused = true;
    clearTimeout(pauseTimer);
    pauseTimer = setTimeout(() => { paused = false; }, ms);
  }
  function animate() {
    if (!paused) {
      const w = getW();
      rawPx += SPEED;
      if (rawPx >= (N + 1) * w) rawPx -= N * w;
      if (rawPx < w)             rawPx += N * w;
      applyPx(rawPx);
      const driftIdx = (((Math.round(rawPx / w) - 1) % N) + N) % N;
      if (driftIdx !== currentIdx) {
        currentIdx = driftIdx;
        updateUI(currentIdx);
      }
    }
    requestAnimationFrame(animate);
  }

  prevBtn.addEventListener('click', () => { jumpTo((currentIdx - 1 + N) % N); pauseFor(2000); });
  nextBtn.addEventListener('click', () => { jumpTo((currentIdx + 1) % N); pauseFor(2000); });
  outer.addEventListener('mouseenter', () => { paused = true; });
  outer.addEventListener('mouseleave', () => { paused = false; });

  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; paused = true; });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 40) jumpTo(((currentIdx + (dx < 0 ? 1 : -1)) + N) % N);
    pauseFor(2000);
  });

  window.addEventListener('resize', () => applyPx(rawPx));
  jumpTo(0);
  animate();
}


/* ── 4. EXPERIENCE DROPDOWNS ── */
document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.exp-toggle');
  toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = button.closest('.exp-item');
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.exp-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.exp-toggle');
        if (btn) btn.innerHTML = 'View Details <span class="arrow">↓</span>';
      });
      if (!isActive) {
        parent.classList.add('active');
        button.innerHTML = 'Close Details <span class="arrow">↑</span>';
      }
    });
  });
});


/* ── 5. MOBILE NAV ── */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('nav-mobile-open');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('nav-mobile-open');
      });
    });
  }
});


/* ── INIT ── */
window.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initCarousel();
});