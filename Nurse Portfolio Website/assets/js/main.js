/* ==========================================================================
   Main site script — vanilla JavaScript, no dependencies.
   Modules: config binding, theme, navigation, reveal animations, services,
   testimonials carousel, FAQ accordion, modals, booking form, floating UI.
   ========================================================================== */
(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};

  /* ---------------------------------------------------------------- DATA */

  // EDIT: services shown in the grid, the modal and the booking dropdown.
  var SERVICES = [
    {
      icon: "fa-solid fa-house-medical",
      title: "Home Nursing Care",
      short: "Professional nursing support and personalized care in the comfort of the patient's home.",
      details: [
        "Scheduled home visits arranged around your routine",
        "Assessment, documentation and family updates",
        "Coordination with your treating physician where needed"
      ]
    },
    {
      icon: "fa-solid fa-hand-holding-heart",
      title: "Elderly Care",
      short: "Compassionate assistance and healthcare support for elderly patients.",
      details: [
        "Support with mobility, hygiene and daily comfort",
        "Chronic condition monitoring and routine checks",
        "Companionship and respectful, unhurried care"
      ]
    },
    {
      icon: "fa-solid fa-bed-pulse",
      title: "Post-Operative Care",
      short: "Professional monitoring and support during recovery after surgery.",
      details: [
        "Recovery monitoring and complication awareness",
        "Surgical site care and dressing changes",
        "Mobility and rehabilitation encouragement"
      ]
    },
    {
      icon: "fa-solid fa-pills",
      title: "Medication Assistance",
      short: "Professional support with medication schedules and adherence.",
      details: [
        "Organised medication schedules and reminders",
        "Administration within the nurse's scope of practice",
        "Monitoring for side effects and reporting concerns"
      ]
    },
    {
      icon: "fa-solid fa-bandage",
      title: "Wound Care",
      short: "Professional wound monitoring, dressing and care.",
      details: [
        "Sterile dressing technique and infection prevention",
        "Progress tracking and documentation",
        "Guidance for patients and caregivers between visits"
      ]
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Vital Signs Monitoring",
      short: "Monitoring of blood pressure, temperature, pulse, oxygen levels and other relevant vital signs.",
      details: [
        "Consistent, accurately recorded measurements",
        "Trend tracking over time for your physician",
        "Prompt escalation when readings fall outside expected ranges"
      ]
    },
    {
      icon: "fa-solid fa-baby",
      title: "Maternal & Newborn Support",
      short: "Compassionate support for mothers and newborns where professionally appropriate.",
      details: [
        "Postnatal comfort and recovery support",
        "Newborn care guidance for new parents",
        "Referral to specialist services when required"
      ]
    },
    {
      icon: "fa-solid fa-chalkboard-user",
      title: "Patient Education",
      short: "Helping patients and families understand healthcare routines and care plans.",
      details: [
        "Plain-language explanations of care plans",
        "Practical caregiver training for the home",
        "Written summaries you can keep and refer back to"
      ]
    }
  ];

  // EDIT: replace with genuine, consented patient testimonials before launch.
  var TESTIMONIALS = [
    { name: "Patient Name", role: "Home nursing patient", rating: 5, image: "./assets/images/avatar-placeholder.svg",
      text: "Professional, compassionate and extremely attentive. I always felt that my concerns were listened to and taken seriously." },
    { name: "Patient Name", role: "Daughter of an elderly patient", rating: 5, image: "./assets/images/avatar-placeholder.svg",
      text: "My mother is treated with such patience and dignity. The daily updates gave our whole family real peace of mind." },
    { name: "Patient Name", role: "Post-operative recovery", rating: 5, image: "./assets/images/avatar-placeholder.svg",
      text: "Recovery at home felt safe because everything was explained clearly and checked carefully at every visit." },
    { name: "Patient Name", role: "Wound care patient", rating: 5, image: "./assets/images/avatar-placeholder.svg",
      text: "Punctual, meticulous and calm. The dressing changes were handled gently and my healing progressed steadily." },
    { name: "Patient Name", role: "Family caregiver", rating: 5, image: "./assets/images/avatar-placeholder.svg",
      text: "We were taught exactly how to support my father between visits. That guidance made an enormous difference." },
    { name: "Patient Name", role: "Chronic condition monitoring", rating: 4, image: "./assets/images/avatar-placeholder.svg",
      text: "Reliable scheduling and clear record keeping. My physician appreciated how well my readings were documented." }
  ];

  // EDIT: FAQ questions and answers.
  var FAQS = [
    { q: "What nursing services do you provide?", a: "Home nursing care, elderly care, post-operative support, medication assistance, wound care, vital signs monitoring, maternal and newborn support, and patient education — all within a registered nurse's scope of practice." },
    { q: "How can I book an appointment?", a: "Use the appointment request form in the Book an Appointment section, or contact me directly by phone, email or WhatsApp. Every request is reviewed personally and confirmed before the visit." },
    { q: "Do you provide home visits?", a: "Yes. Home visits are a core part of the service and are scheduled around the patient's routine and the care required." },
    { q: "How long does an appointment take?", a: "It depends on the type of care. A routine check or dressing change is usually 30–60 minutes, while a full assessment or extended care visit can take longer. Duration is agreed in advance." },
    { q: "Can family members be involved in care?", a: "Absolutely. Family involvement is encouraged, with the patient's consent. Caregivers receive practical guidance so care continues safely between visits." },
    { q: "What areas do you serve?", a: "Care is offered in and around the listed location. If you are outside the usual service area, please get in touch and we can discuss what is possible." },
    { q: "Can I request a specific appointment time?", a: "Yes. Indicate your preferred date and time in the booking form. Requests are subject to availability and are confirmed personally." },
    { q: "How can I contact you?", a: "By phone, email or WhatsApp using the details in the Contact section. Messages are answered as quickly as the care schedule allows." }
  ];

  /* ------------------------------------------------------------ HELPERS */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ------------------------------------------------------ CONFIG BINDING */

  function whatsappUrl() {
    var num = (CONFIG.whatsappNumber || "").replace(/\D/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(CONFIG.whatsappMessage || "Hello");
  }

  function applyConfig() {
    var fullName = (CONFIG.nurseName || "") + (CONFIG.credentials ? ", " + CONFIG.credentials : "");
    var textMap = {
      nurseNameFull: fullName,
      nurseName: CONFIG.nurseName,
      phoneDisplay: CONFIG.phoneDisplay,
      email: CONFIG.email,
      location: CONFIG.location,
      availability: CONFIG.availability
    };
    $$("[data-config]").forEach(function (el) {
      var val = textMap[el.getAttribute("data-config")];
      if (val) el.textContent = val;
    });

    var hrefMap = {
      phoneHref: CONFIG.phoneHref,
      emailHref: "mailto:" + CONFIG.email,
      whatsappHref: whatsappUrl(),
      mapsUrl: CONFIG.mapsUrl,
      linkedin: CONFIG.social && CONFIG.social.linkedin,
      facebook: CONFIG.social && CONFIG.social.facebook,
      instagram: CONFIG.social && CONFIG.social.instagram
    };
    $$("[data-config-href]").forEach(function (el) {
      var val = hrefMap[el.getAttribute("data-config-href")];
      if (val) el.setAttribute("href", val);
    });

    var waBook = $("#whatsappBookBtn");
    if (waBook) waBook.setAttribute("href", whatsappUrl());

    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    var stats = $("#statsGrid");
    if (stats && CONFIG.stats) {
      stats.innerHTML = CONFIG.stats.map(function (s) {
        return '<div class="stat"><strong>' + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></div>";
      }).join("");
    }
  }

  /* -------------------------------------------------------------- THEME */

  function initTheme() {
    var toggle = $("#themeToggle");
    var stored = null;
    try { stored = localStorage.getItem("theme"); } catch (e) { /* storage unavailable */ }
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    setTheme(theme);

    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    });

    function setTheme(value) {
      document.documentElement.setAttribute("data-theme", value);
      if (toggle) toggle.setAttribute("aria-pressed", value === "dark" ? "true" : "false");
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", value === "dark" ? "#08111f" : "#0b1f3a");
    }
  }

  /* --------------------------------------------------------- NAVIGATION */

  function initNav() {
    var header = $("#header");
    var nav = $("#nav");
    var toggle = $("#navToggle");
    var backdrop = $("#navBackdrop");

    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
        var top = $("#backToTop");
        if (top) top.classList.toggle("is-visible", window.scrollY > 500);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    function closeMenu() {
      if (!nav) return;
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      }
      if (backdrop) { backdrop.classList.remove("is-open"); backdrop.hidden = true; }
    }

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", open);
        document.body.classList.toggle("nav-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        toggle.innerHTML = open
          ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
          : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        if (backdrop) { backdrop.hidden = !open; requestAnimationFrame(function () { backdrop.classList.toggle("is-open", open); }); }
      });
    }

    if (backdrop) backdrop.addEventListener("click", closeMenu);
    if (nav) $$("a", nav).forEach(function (link) { link.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

    // Scroll spy
    var sections = $$("main section[id]");
    var links = $$(".nav__link");
    if ("IntersectionObserver" in window && sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          links.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---------------------------------------------------- REVEAL ANIMATION */

  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        setTimeout(function () { el.classList.add("is-visible"); }, Math.min(i * 70, 280));
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------ SERVICES */

  function initServices() {
    var grid = $("#servicesGrid");
    if (grid) {
      grid.innerHTML = SERVICES.map(function (s, i) {
        return (
          '<article class="card service-card reveal">' +
          '<div class="icon-badge"><i class="' + s.icon + '" aria-hidden="true"></i></div>' +
          "<h3>" + esc(s.title) + "</h3>" +
          "<p>" + esc(s.short) + "</p>" +
          '<p><button class="link-arrow" type="button" data-service="' + i + '">Learn More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button></p>' +
          "</article>"
        );
      }).join("");

      grid.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-service]");
        if (!btn) return;
        openServiceModal(SERVICES[Number(btn.getAttribute("data-service"))]);
      });
    }

    // Populate the booking service dropdown from the same source of truth.
    var select = $("#service");
    if (select) {
      SERVICES.forEach(function (s) {
        var opt = document.createElement("option");
        opt.textContent = s.title;
        select.appendChild(opt);
      });
      var other = document.createElement("option");
      other.textContent = "Other / Not sure yet";
      select.appendChild(other);
    }
  }

  function openServiceModal(service) {
    if (!service) return;
    $("#serviceModalTitle").textContent = service.title;
    $("#serviceModalText").textContent = service.short;
    $("#serviceModalIcon").className = service.icon;
    $("#serviceModalList").innerHTML = service.details.map(function (d) {
      return '<li><i class="fa-solid fa-check" aria-hidden="true"></i>' + esc(d) + "</li>";
    }).join("");
    openModal($("#serviceModal"));
  }

  /* -------------------------------------------------------------- MODALS */

  var lastFocused = null;

  function openModal(modal) {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.hidden = false;
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    document.body.style.overflow = "hidden";
    var close = $(".modal__close", modal);
    if (close) close.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(function () { modal.hidden = true; }, 280);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function initModals() {
    $$("[data-modal-open]").forEach(function (btn) {
      btn.addEventListener("click", function () { openModal($("#" + btn.getAttribute("data-modal-open"))); });
    });
    $$(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal || e.target.closest("[data-modal-close]")) closeModal(modal);
      });
      // Simple focus trap
      modal.addEventListener("keydown", function (e) {
        if (e.key !== "Tab") return;
        var focusables = $$('a[href], button, input, select, textarea', modal).filter(function (el) { return !el.disabled; });
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      $$(".modal.is-open").forEach(closeModal);
    });
  }

  /* -------------------------------------------------------- TESTIMONIALS */

  function initTestimonials() {
    var track = $("#testimonialTrack");
    var dotsWrap = $("#testimonialDots");
    if (!track) return;

    track.innerHTML = TESTIMONIALS.map(function (t) {
      var stars = "";
      for (var i = 0; i < 5; i++) {
        stars += '<i class="fa-' + (i < t.rating ? "solid" : "regular") + ' fa-star" aria-hidden="true"></i>';
      }
      return (
        '<div class="carousel__slide" role="group" aria-roledescription="slide" aria-label="' + esc(t.name) + '">' +
        '<figure class="testimonial">' +
        '<i class="fa-solid fa-quote-left testimonial__quote-icon" aria-hidden="true"></i>' +
        '<div class="testimonial__stars" aria-label="' + t.rating + ' out of 5 stars">' + stars + "</div>" +
        "<blockquote>&ldquo;" + esc(t.text) + "&rdquo;</blockquote>" +
        '<figcaption class="testimonial__person">' +
        '<img src="' + t.image + '" alt="Placeholder portrait for ' + esc(t.name) + '" width="52" height="52" loading="lazy" />' +
        "<span><strong>" + esc(t.name) + "</strong><span>" + esc(t.role) + "</span></span>" +
        "</figcaption></figure></div>"
      );
    }).join("");

    dotsWrap.innerHTML = TESTIMONIALS.map(function (t, i) {
      return '<button class="carousel__dot" type="button" role="tab" aria-label="Testimonial ' + (i + 1) + '"></button>';
    }).join("");
    var dots = $$(".carousel__dot", dotsWrap);

    var index = 0;
    var timer = null;
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function go(i) {
      index = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach(function (d, di) {
        d.classList.toggle("is-active", di === index);
        d.setAttribute("aria-selected", di === index ? "true" : "false");
      });
    }

    function start() { if (!reduced) { stop(); timer = setInterval(function () { go(index + 1); }, 6500); } }
    function stop() { if (timer) clearInterval(timer); timer = null; }

    $("#nextTestimonial").addEventListener("click", function () { go(index + 1); start(); });
    $("#prevTestimonial").addEventListener("click", function () { go(index - 1); start(); });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { go(i); start(); }); });

    var carousel = $("#testimonialCarousel");
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { go(index + 1); }
      if (e.key === "ArrowLeft") { go(index - 1); }
    });

    // Touch / swipe support
    var startX = 0, delta = 0;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; delta = 0; stop(); }, { passive: true });
    track.addEventListener("touchmove", function (e) { delta = e.touches[0].clientX - startX; }, { passive: true });
    track.addEventListener("touchend", function () {
      if (Math.abs(delta) > 45) go(index + (delta < 0 ? 1 : -1));
      start();
    });

    go(0);
    start();
  }

  /* ------------------------------------------------------------- FAQ */

  function initFaq() {
    var list = $("#faqList");
    if (!list) return;

    list.innerHTML = FAQS.map(function (f, i) {
      return (
        '<div class="faq__item">' +
        '<h3 style="margin:0"><button class="faq__question" type="button" aria-expanded="false" aria-controls="faqAnswer' + i + '" id="faqQuestion' + i + '">' +
        "<span>" + esc(f.q) + '</span><i class="fa-solid fa-plus" aria-hidden="true"></i></button></h3>' +
        '<div class="faq__answer" id="faqAnswer' + i + '" role="region" aria-labelledby="faqQuestion' + i + '"><p>' + esc(f.a) + "</p></div>" +
        "</div>"
      );
    }).join("");

    var buttons = $$(".faq__question", list);
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        // Close all — only one open at a time.
        buttons.forEach(function (other) {
          other.setAttribute("aria-expanded", "false");
          var panel = document.getElementById(other.getAttribute("aria-controls"));
          panel.style.height = "0px";
        });
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          var target = document.getElementById(btn.getAttribute("aria-controls"));
          target.style.height = target.scrollHeight + "px";
        }
      });
    });
  }

  /* --------------------------------------------------------- BOOKING FORM */

  function initBookingForm() {
    var form = $("#bookingForm");
    if (!form) return;

    var status = $("#formStatus");
    var dateInput = $("#date");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

    var rules = {
      fullName: function (v) {
        if (!v.trim()) return "Please enter your full name.";
        if (v.trim().length < 2 || v.trim().length > 100) return "Name must be between 2 and 100 characters.";
        return "";
      },
      email: function (v) {
        if (!v.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return "Please enter a valid email address.";
        return "";
      },
      phone: function (v) {
        if (!v.trim()) return "Please enter your phone number.";
        if (!/^[+]?[\d\s().-]{7,20}$/.test(v.trim())) return "Please enter a valid phone number.";
        return "";
      },
      service: function (v) { return v ? "" : "Please select the type of service."; },
      date: function (v) {
        if (!v) return "Please choose a preferred date.";
        var today = new Date(); today.setHours(0, 0, 0, 0);
        if (new Date(v) < today) return "Please choose today or a future date.";
        return "";
      },
      time: function (v) { return v ? "" : "Please choose a preferred time."; },
      method: function (v) { return v ? "" : "Please select a consultation method."; },
      message: function (v) { return v.length > 1000 ? "Message must be under 1000 characters." : ""; }
    };

    function validateField(name) {
      var input = form.elements[name];
      if (!input) return true;
      var error = rules[name](input.value);
      var field = input.closest(".field");
      var errorEl = document.getElementById(name + "Error");
      field.classList.toggle("has-error", !!error);
      input.setAttribute("aria-invalid", error ? "true" : "false");
      if (errorEl) errorEl.textContent = error;
      return !error;
    }

    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      if (!input) return;
      input.addEventListener("blur", function () { validateField(name); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("has-error")) validateField(name);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = "";

      var valid = true;
      var firstInvalid = null;
      Object.keys(rules).forEach(function (name) {
        var ok = validateField(name);
        if (!ok && !firstInvalid) firstInvalid = form.elements[name];
        valid = valid && ok;
      });

      if (!valid) {
        status.className = "form__status is-error";
        status.textContent = "Please correct the highlighted fields and submit again.";
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var data = {
        fullName: form.elements.fullName.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.trim(),
        service: form.elements.service.value,
        date: form.elements.date.value,
        time: form.elements.time.value,
        method: form.elements.method.value,
        message: form.elements.message.value.trim()
      };

      /* --------------------------------------------------------------
         BACKEND INTEGRATION POINT
         No backend is connected, so the request is not transmitted
         anywhere. To connect a real service, replace the block below
         with e.g. Formspree / EmailJS / Google Calendar / Calendly /
         your own API:

           fetch("https://formspree.io/f/YOUR_ID", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(data)
           }).then(...)
         -------------------------------------------------------------- */

      status.className = "form__status is-success";
      status.innerHTML =
        "Thank you, " + esc(data.fullName) + ". Your appointment request has been prepared for " +
        esc(data.date) + " at " + esc(data.time) + " (" + esc(data.method) + ").<br />" +
        "<strong>This request is not yet confirmed and has not been sent automatically</strong> — no booking " +
        "service is connected to this form yet. Please send the details by WhatsApp, phone or email so the " +
        "appointment can be confirmed personally.";
      status.scrollIntoView({ behavior: "smooth", block: "center" });
      form.reset();
    });
  }

  /* ------------------------------------------------------ FLOATING / MISC */

  function initFloating() {
    var top = $("#backToTop");
    if (!top) return;
    top.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------- INIT */

  document.addEventListener("DOMContentLoaded", function () {
    applyConfig();
    initTheme();
    initNav();
    initServices();
    initTestimonials();
    initFaq();
    initModals();
    initBookingForm();
    initFloating();
    initReveal();
  });
})();
