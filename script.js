document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menuToggle").addEventListener("click", toggleMenu);

  function toggleMenu() {
    console.log("Toggle function called");
    const navbarUl = document.querySelector(".navbar ul");
    navbarUl.classList.toggle("active");
  }
  // Menu Toggle
  function toggleMenu() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  }

  const logo = document.querySelector(".logo");

  // Logo Hover Effect
  logo.addEventListener("mouseover", function () {
    setTimeout(() => {
      logo.src = "images/Vtlogo hover.png";
    }, 100);
  });

  logo.addEventListener("mouseout", function () {
    setTimeout(() => {
      logo.src = "images/Vtlogo.png";
    }, 100);
  });

  // Enquiry Modal Pop-Up
  const enquiryButtons = document.querySelectorAll(".enquiry-button");
  const modal = document.getElementById("enquiryModal");
  const closeButton = document.querySelector(".close-btn");
  const navEnquireLink = document.querySelector(".nav-enquire");
  navEnquireLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block"; // Open the form modal
  });

  enquiryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modal.style.display = "block";
    });
  });

  const enquiryForm = document.getElementById("enquiryForm");

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    enquiryForm.reset();
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      enquiryForm.reset();
    }
  });

  // Form Validation
  const form = document.querySelector("form");
  const errorMessage = document.getElementById("error-message");
  const tryAgainBtn = document.getElementById("tryAgainBtn");
  const nameField = document.getElementById("name");
  const phoneField = document.getElementById("phone");
  const questionField = document.getElementById("question");

  const contactBtnInsideModal = document.querySelector(".contact-btn");

  contactBtnInsideModal.addEventListener("click", function () {
    modal.style.display = "none"; // Close the enquiry modal
    form.reset(); // Reset the form
  });

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Name validation
    if (!/^[a-zA-Z\s]+$/.test(nameField.value) || nameField.value.length > 20) {
      valid = false;
    }

    // Phone validation
    if (!/^\d+$/.test(phoneField.value)) {
      valid = false;
    }

    // Question validation
    const questionWords = questionField.value.split(" ");
    if (questionWords.length > 100) {
      valid = false;
    }

    if (!valid) {
      errorMessage.style.display = "block";
      event.preventDefault();
    }
  });

  tryAgainBtn.addEventListener("click", function () {
    errorMessage.style.display = "none";
    form.reset(); // reset the form when the "Try Again" button is clicked
  });
});
