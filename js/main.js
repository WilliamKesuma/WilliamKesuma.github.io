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

/* ── 3. SKILLS FLAT GRID ── */
function initSkillsGrid() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  cats.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'skill-category';
    section.innerHTML = `
      <p class="skill-category-title">${cat.title}</p>
      <div class="skill-tags">${
        cat.tags.map(t =>
          `<span class="skill-tag">${t.i ? `<i class="${t.i}"></i>` : ''}${t.l}</span>`
        ).join('')
      }</div>`;
    grid.appendChild(section);
  });
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
  initSkillsGrid();
});

/* ── 6. MOBILE EXPERIENCE CAROUSELS ── */
function initMobileExpCarousels() {
  if (window.innerWidth > 768) return;

  document.querySelectorAll('.exp-carousel').forEach(carousel => {
    const track = carousel.querySelector('.exp-carousel-track');
    if (!track) return;

    // Remove desktop duplicates, keep only the unique first half
    const allImgs = Array.from(track.querySelectorAll('.exp-photo'));
    const uniqueCount = Math.ceil(allImgs.length / 2);
    const uniqueImgs = allImgs.slice(0, uniqueCount);
    allImgs.slice(uniqueCount).forEach(img => img.remove());

    const total = uniqueImgs.length;
    let current = 0;

    // JS sizes the track and each photo by pixel width so translateX works correctly.
    // CSS aspect-ratio: 4/3 still controls height — we never set height inline.
    function w() { return carousel.offsetWidth; }

    function sizeSlides() {
      const px = w();
      track.style.width = (px * total) + 'px';
      uniqueImgs.forEach(function(img) { img.style.width = px + 'px'; });
    }

    function setPos(offset, animated) {
      track.style.transition = animated ? 'transform 0.35s ease' : 'none';
      track.style.transform = 'translateX(' + offset + 'px)';
    }

    sizeSlides();
    window.addEventListener('resize', function() { sizeSlides(); setPos(-(current * w()), false); });

    // Dot indicators
    const dotsEl = document.createElement('div');
    dotsEl.className = 'exp-carousel-dots';
    uniqueImgs.forEach(function(_, i) {
      const dot = document.createElement('div');
      dot.className = 'exp-carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function() { goTo(i); });
      dotsEl.appendChild(dot);
    });
    carousel.after(dotsEl);

    function updateDots() {
      dotsEl.querySelectorAll('.exp-carousel-dot').forEach(function(d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, total - 1));
      setPos(-(current * w()), true);
      updateDots();
    }

    // Touch — direction-aware + live drag
    let startX = 0, startY = 0, dragX = 0;
    let isHorizontal = null;

    track.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      dragX = 0;
      isHorizontal = null;
      track.style.transition = 'none';
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (isHorizontal === null) {
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
        isHorizontal = Math.abs(dx) > Math.abs(dy);
      }
      if (!isHorizontal) return;
      e.preventDefault();
      dragX = dx;
      setPos(-(current * w()) + dragX, false);
    }, { passive: false });

    track.addEventListener('touchend', function() {
      if (!isHorizontal) return;
      if (dragX < -40 && current < total - 1) goTo(current + 1);
      else if (dragX > 40 && current > 0)     goTo(current - 1);
      else                                     setPos(-(current * w()), true);
    }, { passive: true });

  });
}

// Re-init on DOMContentLoaded (adds to existing listeners)
document.addEventListener('DOMContentLoaded', function() {
  initMobileExpCarousels();
});