(() => {
  "use strict";

  const ORIGINAL_ASSET_BASE = "janhavi-portfolio-iknq.vercel.app/assets/images/";

  const skills = [
    {
      title: "Web Develpoment ",
      description: "Web designing is the process of creating the visual look and layout of a website.It focuses on colors, fonts, images, buttons, and user-friendly design."
    },
    {
      title: "Problem Solving",
      description: "Problem solving is the ability to identify a problem and find an effective solution.It helps programmers analyze errors and create logical solutions using code."
    },

    {
      title: "Responsive web design",
      description: "Responsive web design creates websites that adjust automatically to different screen sizes.It makes websites user-friendly on mobile, tablet, and desktop devices."
    },
    {
      title: "Basic GitHub",
      description: " GitHub is a platform used to store, manage, and share code online.It helps developers track changes and work together on projects."
    },
    {
      title: "HTML, CSS & Javascript",
      description: "HTML creates the structure of a web page, CSS designs its appearance, and JavaScript adds interactive features.Together, they are the basic technologies used to create modern websites."
    },
    {
      title: "Hobby Skills",
      description: " Web Development, Web Designing "
    }
  ];


  const badges = [
        
    {
      image: "aws-educate-getting-started-with-security-training--DTBWn5uc.png",
      title: "AWS Educate Getting Started with Security - Training Badge",
      skills: "AWS Cloud, AWS Security Services",
      issuedOn: "11 Dec 2025",
      issuedBy: "Amazon Web Services (AWS)",
      verify: "https://www.credly.com/badges/a86c5849-50e8-499d-8faa-9c0310e14d27/public_url"
    },
    {
      image: "aws-educate-getting-started-with-cloud-ops-training-BxSTYby9.png",
      title: "AWS Educate Getting Started with Cloud Ops - Training Badge",
      skills: "AWS Cloud, AWS Cloud Operations",
      issuedOn: "11 Dec 2025",
      issuedBy: "Amazon Web Services (AWS)",
      verify: "https://www.credly.com/badges/f6101b76-13e2-449f-beaf-c82906950f4a/public_url"
    }
  ];
   
  const projects = [
   {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles with smooth animations and optimal performance.",
      image: "Portfolio-CDjlsqTs.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      projectLink: "https://janhavi-jadhav.vercel.app/",
      codeLink: "https://github.com/janhavijadhav0159-cmyk/Janhavi-portfolio.git"
    },
    {
      id: 2,
       title: "Job Portal",
      description: "A job portal is web-based application that helps job seefind and apply for job online. Employers can post job vacancies and view applications from candidates. It makes the recruitment process faster, easier, and more convenient.",     image: "Smart-defi-router-DK8_fFkE.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      /*
      projectLink: "janhavi-portfolio-iknq.vercel.app",  
      codeLink: "https://github.com/janhavijadhav0159-cmyk/Janhavi-portfolio.git"
      */
    
    },
    /*
    {
     id: 3,
      title: "Marc_0.2 (Under Development)",
      description: "We've created a virtual fitting room that makes online formal wear shopping as reliable as trying clothes on in person. Using AI and 3D technology, customers see exactly how garments fit before buying—reducing returns and increasing confidence.",
      image: "Marc-DDuuMLQX.png",
      technologies: ["React", "Node.js", "Express", "MySQL", "3js", "Python ML Models", "Crypto Payments"],
      projectLink: "#",
      codeLink: "#"
    }
      */
 ];
 
  const progressBar = document.getElementById("progressBar");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const hamburger = document.getElementById("hamburger");
  const sidebarClose = document.getElementById("sidebarClose");
  const sections = [...document.querySelectorAll("section")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sidebarLinks = [...document.querySelectorAll(".sidebar-link")];

  function hostedAsset(fileName) {
    return ORIGINAL_ASSET_BASE + encodeURI(fileName).replace(/#/g, "%23");
  }

  function setImageFallback(img, fallback) {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";
      img.src = fallback;
    });
  }

  // -------------------------------------------------------
  // Render Skills
  // -------------------------------------------------------
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    grid.innerHTML = skills.map(skill => `
      <div class="skill-card">
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      </div>
    `).join("");
  }

  // -------------------------------------------------------
  // Render Badges
  // -------------------------------------------------------
  function renderBadges() {
    const grid = document.getElementById("badgesGrid");
    document.getElementById("totalBadgeCount").textContent = badges.length;

    grid.innerHTML = badges.map((badge, index) => `
      <div class="badge-card-wrapper" data-badge-index="${index}">
        <div class="badges-card" role="button" tabindex="0" aria-label="Badge: ${badge.title}">
          <div class="card-front">
            <div class="badge-image-wrapper">
              <img
                src="${hostedAsset(badge.image)}"
                alt="${badge.title}"
                class="badge-image"
              />
              <div class="badge-glow"></div>
            </div>
            <h3 class="badge-title">${badge.title}</h3>
            <p class="badge-skills">${badge.skills}</p>
            <span class="card-flip-hint">Click to flip</span>
          </div>

          <div class="card-back">
            <div class="card-back-content">
              <p class="issued-label">Issued On</p>
              <p class="issued-date">${badge.issuedOn}</p>
              <p class="issued-by-label">Issued By</p>
              <p class="issued-by-name">${badge.issuedBy}</p>
              <a
                href="${badge.verify}"
                target="_blank"
                rel="noopener noreferrer"
                class="verify-link"
              >Verify Badge →</a>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    const wrappers = [...grid.querySelectorAll(".badge-card-wrapper")];

    wrappers.forEach(wrapper => {
      const card = wrapper.querySelector(".badges-card");
      const img = wrapper.querySelector(".badge-image");

      setImageFallback(img, "assets/images/badge-placeholder.svg");

      const flip = () => card.classList.toggle("flipped");

      card.addEventListener("click", event => {
        if (event.target.closest(".verify-link")) return;
        flip();
      });

      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          if (event.target.closest(".verify-link")) return;
          event.preventDefault();
          flip();
        }
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });

    wrappers.forEach(wrapper => observer.observe(wrapper));
  }

  // -------------------------------------------------------
  // Render Projects
  // -------------------------------------------------------
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");

    grid.innerHTML = projects.map(project => `
      <article class="project-card">
        <div class="project-image">
          <img
            src="${hostedAsset(project.image)}"
            alt="${project.title}"
            class="project-img"
          />
        </div>

        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>

          <div class="project-technologies">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>

          <div class="project-actions">
            <a
              href="${project.projectLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >View Project</a>

            <a
              href="${project.codeLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >View Code</a>
          </div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".project-img").forEach(img => {
      setImageFallback(img, "assets/images/project-placeholder.svg");
    });
  }

  // -------------------------------------------------------
  // Sidebar / navigation
  // -------------------------------------------------------
  function openSidebar() {
    sidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    hamburger.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  hamburger.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) closeSidebar();
    else openSidebar();
  });

  sidebarClose.addEventListener("click", closeSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeSidebar();
  });

  function smoothNavigate(event) {
    const href = event.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });

    closeSidebar();
  }

  [...navLinks, ...sidebarLinks, ...document.querySelectorAll('a.cta-button')].forEach(link => {
    link.addEventListener("click", smoothNavigate);
  });

  // -------------------------------------------------------
  // Scroll progress, active nav, section reveal, parallax
  // -------------------------------------------------------
  function updatePageFromScroll() {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.pageYOffset / maxScroll) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

    let activeSection = "home";

    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 200) {
        activeSection = section.id;
      }

      const sectionTop = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.8;

      if (sectionTop < trigger) {
        section.classList.add("animate");
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${activeSection}`
      );
    });

    sidebarLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${activeSection}`
      );
    });

    document.querySelectorAll(".floating-shape").forEach((shape, index) => {
      const speed = 0.5 + index * 0.1;
      const y = -(window.pageYOffset * speed);
      shape.style.transform = `translate3d(0, ${y}px, 0)`;
    });
  }

  window.addEventListener("scroll", updatePageFromScroll, { passive: true });

  // -------------------------------------------------------
  // Initial render
  // -------------------------------------------------------
  renderSkills();
  renderBadges();
  renderProjects();
  updatePageFromScroll();
})();
