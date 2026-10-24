/* ==========================================================================
   University of Excellence - Main JavaScript file (vanilla JS only)
   Features:
   1. Mobile hamburger menu
   2. Current year in the footer
   3. Smooth scrolling for in-page links
   4. FAQ accordion
   5. Admission form validation
   6. Contact form validation
   7. Success messages
   ========================================================================== */

/* Wait until the HTML page is fully loaded before running the scripts */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. MOBILE HAMBURGER MENU ---------- */
  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* Close the menu when a link is clicked (useful on mobile) */
    var navLinks = mainNav.querySelectorAll("a");
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    }
  }

  /* ---------- 2. CURRENT YEAR IN THE FOOTER ---------- */
  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ---------- 3. SMOOTH SCROLLING FOR SAME-PAGE LINKS ---------- */
  var anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var targetId = anchor.getAttribute("href");
      if (targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  /* ---------- 4. FAQ ACCORDION ---------- */
  var faqButtons = document.querySelectorAll(".faq-question");
  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var item = button.parentElement;
      var isActive = item.classList.contains("active");

      /* Close every item first (only one open at a time) */
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.classList.remove("active");
        var q = other.querySelector(".faq-question");
        if (q) {
          q.setAttribute("aria-expanded", "false");
          var ic = q.querySelector(".icon");
          if (ic) ic.textContent = "+";
        }
      });

      /* Re-open the clicked one if it was closed */
      if (!isActive) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        var icon = button.querySelector(".icon");
        if (icon) icon.textContent = "\u2212";
      }
    });
  });

  /* ---------- HELPER FUNCTIONS USED BY BOTH FORMS ---------- */

  /* Show an error message under a field */
  function showError(field, message) {
    var errorBox = document.getElementById(field.id + "Error");
    if (errorBox) errorBox.textContent = message;
    field.classList.add("input-error");
  }

  /* Clear the error message of a field */
  function clearError(field) {
    var errorBox = document.getElementById(field.id + "Error");
    if (errorBox) errorBox.textContent = "";
    field.classList.remove("input-error");
  }

  /* Check that a field is not empty */
  function checkRequired(field, message) {
    if (field.value.trim() === "") {
      showError(field, message);
      return false;
    }
    clearError(field);
    return true;
  }

  /* Check a simple email format: text@text.text */
  function checkEmail(field) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!pattern.test(field.value.trim())) {
      showError(field, "Please enter a valid email address.");
      return false;
    }
    clearError(field);
    return true;
  }

  /* Check a phone number: 9 to 15 digits, spaces and + allowed */
  function checkPhone(field) {
    var pattern = /^[+]?[0-9\s-]{9,15}$/;
    if (!pattern.test(field.value.trim())) {
      showError(field, "Please enter a valid phone number (9-15 digits).");
      return false;
    }
    clearError(field);
    return true;
  }

  /* Display a success message box */
  function showSuccess(box, message) {
    box.textContent = message;
    box.classList.add("show");
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- 5. ADMISSION FORM VALIDATION ---------- */
  var admissionForm = document.getElementById("admissionForm");
  if (admissionForm) {
    admissionForm.addEventListener("submit", function (event) {
      event.preventDefault(); /* no backend: we stay on the page */

      var fullName = document.getElementById("fullName");
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      var dob = document.getElementById("dob");
      var gender = document.getElementById("gender");
      var program = document.getElementById("program");
      var qualification = document.getElementById("qualification");
      var address = document.getElementById("address");

      var valid = true;

      if (!checkRequired(fullName, "Full name is required.")) valid = false;
      else if (fullName.value.trim().length < 3) {
        showError(fullName, "Name must be at least 3 characters.");
        valid = false;
      }

      if (!checkRequired(email, "Email is required.")) valid = false;
      else if (!checkEmail(email)) valid = false;

      if (!checkRequired(phone, "Phone number is required.")) valid = false;
      else if (!checkPhone(phone)) valid = false;

      if (!checkRequired(dob, "Date of birth is required.")) valid = false;
      if (!checkRequired(gender, "Please select your gender.")) valid = false;
      if (!checkRequired(program, "Please select a program.")) valid = false;
      if (!checkRequired(qualification, "Previous qualification is required.")) valid = false;
      if (!checkRequired(address, "Address is required.")) valid = false;

      if (valid) {
        showSuccess(
          document.getElementById("admissionSuccess"),
          "Your application has been submitted successfully."
        );
        admissionForm.reset();
      }
    });
  }

  /* ---------- 6. CONTACT FORM VALIDATION ---------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("contactName");
      var email = document.getElementById("contactEmail");
      var subject = document.getElementById("contactSubject");
      var message = document.getElementById("contactMessage");

      var valid = true;

      if (!checkRequired(name, "Your name is required.")) valid = false;
      if (!checkRequired(email, "Email is required.")) valid = false;
      else if (!checkEmail(email)) valid = false;
      if (!checkRequired(subject, "Subject is required.")) valid = false;
      if (!checkRequired(message, "Message is required.")) valid = false;
      else if (message.value.trim().length < 10) {
        showError(message, "Message must be at least 10 characters.");
        valid = false;
      }

      if (valid) {
        showSuccess(
          document.getElementById("contactSuccess"),
          "Your message has been sent successfully. We will reply soon."
        );
        contactForm.reset();
      }
    });
  }

  /* ---------- 7. BASIC INTERACTIVE BUTTONS ---------- */
  /* "Learn More" buttons on the programs page show extra details */
  var detailButtons = document.querySelectorAll(".toggle-details");
  detailButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var details = button.nextElementSibling;
      if (!details) return;
      var hidden = details.hasAttribute("hidden");
      if (hidden) {
        details.removeAttribute("hidden");
        button.textContent = "Show Less";
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Learn More";
      }
    });
  });

  /* "Back to top" behaviour for any element with the class back-to-top */
  var topButtons = document.querySelectorAll(".back-to-top");
  topButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

});
