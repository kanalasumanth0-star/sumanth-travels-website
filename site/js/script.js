/* =====================================================
   SUMANTH TRAVELS & TOURS — SITE SCRIPT
   Handles the mobile nav toggle and the two form
   submissions (booking + contact). No external libraries.
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- MOBILE NAV TOGGLE ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    /* close the menu once a link is chosen (mobile) */
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- BOOKING FORM ---------- */
  var bookingForm = document.getElementById("bookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var successBox = document.getElementById("bookingSuccess");
      var name = document.getElementById("name").value.trim();

      if (successBox) {
        successBox.querySelector(".msg-text").textContent =
          "Thank you, " + (name || "traveller") + "! Your booking request has been received. " +
          "Our team will call you shortly to confirm the details.";
        successBox.classList.add("show");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      bookingForm.reset();
    });
  }

  /* ---------- CONTACT FORM ---------- */
  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var successBox = document.getElementById("contactSuccess");

      if (successBox) {
        successBox.classList.add("show");
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      contactForm.reset();
    });
  }

  /* ---------- SET CURRENT YEAR IN FOOTER ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
