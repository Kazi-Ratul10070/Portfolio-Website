document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Glassmorphism Header
  const header = document.getElementById("header");
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // 2. Project Category Filtering
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("btn-primary", "active");
        b.classList.add("btn-outline-secondary", "text-slate");
      });
      btn.classList.add("btn-primary", "active");
      btn.classList.remove("btn-outline-secondary", "text-slate");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });

  // 3. Project Modal Integration using Bootstrap JS API
  const modalData = {
    "project-1": {
      title: "Packet Analyzer & Topology Monitor",
      category: "Networking & Communication Systems",
      description:
        "A socket-level traffic inspection script built to capture frames, log throughput, and display latency across local networks.",
      techStack: ["Python", "Socket API", "Wireshark", "Matplotlib"],
      challenges:
        "Managing packet drops during high-queue traffic processing without high system overhead.",
      outcome:
        "Successfully evaluated throughput metrics across custom lab subnets.",
    },
    "project-2": {
      title: "Student Performance Dashboard",
      category: "Software & Web Application",
      description:
        "A responsive dashboard built with semantic layouts and client-side charting libraries to analyze academic metrics.",
      techStack: ["JavaScript (ES6)", "Bootstrap 5", "Chart.js", "HTML5"],
      challenges:
        "Ensuring accessible design compliance across dark UI elements.",
      outcome: "Achieved full responsiveness on all device viewports.",
    },
    "project-3": {
      title: "Smart Sensor Telemetry Node",
      category: "IoT & Microcontroller Interfacing",
      description:
        "Embedded systems project implementing sensor data ingestion and lightweight network transmission over MQTT protocols.",
      techStack: ["ESP32", "C++", "MQTT Protocol", "Sensor Interfacing"],
      challenges:
        "Minimizing active power draw during active socket handshakes.",
      outcome:
        "Reduced transceiver wakeup latency and verified continuous data collection.",
    },
  };

  const projectModalElement = document.getElementById("projectModal");
  const projectModal = new bootstrap.Modal(projectModalElement);
  const modalBody = document.getElementById("modal-body");
  const openModalBtns = document.querySelectorAll(".open-modal-btn");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-project");
      const data = modalData[projectId];

      if (data) {
        modalBody.innerHTML = `
                    <span class="x-small font-semibold text-primary text-uppercase tracking-wider">${data.category}</span>
                    <h3 class="h4 font-bold text-white mt-1 mb-3">${data.title}</h3>
                    <div class="mb-3">
                        <h4 class="small font-semibold text-slate text-uppercase mb-1">Overview</h4>
                        <p class="small text-slate mb-0">${data.description}</p>
                    </div>
                    <div class="mb-3">
                        <h4 class="small font-semibold text-slate text-uppercase mb-1">Key Challenge</h4>
                        <p class="small text-slate mb-0">${data.challenges}</p>
                    </div>
                    <div class="mb-3">
                        <h4 class="small font-semibold text-slate text-uppercase mb-1">Result</h4>
                        <p class="small text-slate mb-0">${data.outcome}</p>
                    </div>
                    <div>
                        <h4 class="small font-semibold text-slate text-uppercase mb-2">Technologies</h4>
                        <div class="d-flex flex-wrap gap-1">
                            ${data.techStack.map((tech) => `<span class="badge bg-slate-800 text-slate border border-slate-700">${tech}</span>`).join("")}
                        </div>
                    </div>
                `;
        projectModal.show();
      }
    });
  });

  // 4. Scroll To Top Button
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.remove("d-none");
    } else {
      scrollTopBtn.classList.add("d-none");
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 5. Contact Form Validation
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !subject || !message) {
        formFeedback.textContent = "Please fill out all required fields.";
        formFeedback.className =
          "alert alert-danger mt-3 text-center small font-medium";
        formFeedback.classList.remove("d-none");
        return;
      }

      formFeedback.textContent =
        "Thank you! Your message has been sent successfully.";
      formFeedback.className =
        "alert alert-success mt-3 text-center small font-medium";
      formFeedback.classList.remove("d-none");

      contactForm.reset();
      setTimeout(() => {
        formFeedback.classList.add("d-none");
      }, 6000);
    });
  }
});
