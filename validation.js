document.addEventListener("DOMContentLoaded", function () {
  // Get the contact form element
  const contactForm = document.getElementById("contactForm");

  // Add an event listener for form submission
  contactForm.addEventListener("submit", function (event) {
    let hasError = false;
    let errorMessage = "Please ensure all details are correct:\n";

    // Validate contactName
    const contactName = document.getElementById("contactName");
    if (!contactName.value.match(/^[a-zA-Z\s]{1,20}$/)) {
      errorMessage += "- Name: Only alphabets and up to 20 characters.\n";
      hasError = true;
    }

    // Validate contactEmail
    const contactEmail = document.getElementById("contactEmail");
    if (!contactEmail.value.match(/^[\w\.-]+@[\w\.-]+\.\w+$/)) {
      errorMessage += "- Email: Only valid emails.\n";
      hasError = true;
    }

    // Validate contactMessage
    const contactMessage = document.getElementById("contactMessage");
    if (contactMessage.value.length > 500) {
      // Limiting to 500 characters for example
      errorMessage += "- Message: Up to 500 characters.\n";
      hasError = true;
    }

    if (hasError) {
      alert(errorMessage); // Show an alert with the error messages
      event.preventDefault(); // Prevent form from submitting
    }
  });
});
