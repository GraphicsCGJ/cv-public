/* ==========================================================================
   PREMIUM SINGLE-PAGE RESUME JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* --- 1. DARK / LIGHT THEME TOGGLE --- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.className = 'fa-solid fa-moon';
  }
  
  // Theme Toggle Event Listener
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
      newTheme = 'dark';
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      themeIcon.className = 'fa-solid fa-moon';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });


  /* --- 2. SCROLL SECTION ACTIVE NAV HIGHLIGHT --- */
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  
  // Intersection Observer for highlighting sections
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Highlight when section is in middle/top of viewport
    threshold: 0
  };
  
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${activeId}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));


  /* --- 3. INTERACTIVE PROJECT DRAWER LOADER (DYNAMIC MARKDOWN) --- */
  const projectCards = document.querySelectorAll('.project-card');
  const drawer = document.getElementById('project-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close-btn');
  const drawerContent = document.getElementById('drawer-content');
  
  // Open Drawer and Fetch/Render Markdown
  const openProjectDrawer = async (projectId) => {
    // Open drawer overlay UI
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent page scroll
    
    // Show spinner
    drawerContent.innerHTML = `
      <div class="loading-spinner">
        <i class="fa-solid fa-circle-notch fa-spin"></i>
        <span>Retrieving technical deep-dive documentation from repository...</span>
      </div>
    `;
    
    try {
      // Fetch the markdown file from the copied local projects directory
      const response = await fetch(`./projects/${projectId}.md`);
      
      if (!response.ok) {
        throw new Error(`Failed to load markdown: ${response.status} ${response.statusText}`);
      }
      
      const markdownText = await response.text();
      
      // Parse markdown to HTML using Marked.js
      const htmlContent = marked.parse(markdownText);
      
      // Inject and render
      drawerContent.innerHTML = htmlContent;
      
    } catch (error) {
      console.error(error);
      drawerContent.innerHTML = `
        <div class="loading-spinner" style="color: #ef4444;">
          <i class="fa-solid fa-triangle-exclamation" style="color: #ef4444;"></i>
          <span>Failed to load project documentation.</span>
          <p style="font-size: 0.8rem; margin-top: 8px; color: var(--text-secondary);">
            Verify that projects/${projectId}.md is pushed and available.
          </p>
        </div>
      `;
    }
  };
  
  // Attach Click Events to Cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      if (projectId) {
        openProjectDrawer(projectId);
      }
    });
  });
  
  // Close Drawer Function
  const closeProjectDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scroll
  };
  
  closeBtn.addEventListener('click', closeProjectDrawer);
  overlay.addEventListener('click', closeProjectDrawer);
  
  // Support Escape Key to close drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeProjectDrawer();
    }
  });
});
