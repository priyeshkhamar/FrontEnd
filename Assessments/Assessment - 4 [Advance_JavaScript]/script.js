function validateForm() {
  var email = document.getElementById("email");
  var pwd = document.getElementById("pwd");
  var cnfpwd = document.getElementById("cnfpwd");
  var mobile = document.getElementById("mobile");
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var gender = document.querySelectorAll('input[name="gender"]');
  var country = document.getElementById("Country");
  var termsAndConditions = document.getElementById("T&C");
  var newsletter = document.getElementById("newsletter");

  // Clear existing error messages on every submission
  var errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach(function (element) {
    element.remove();
  });

  // Array to store error messages
  var errors = [];

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value === "") {
    errors.push("Email is required.");
  } else if (!emailPattern.test(email.value)) {
    errors.push("Invalid email format.");
  }

  if (pwd.value === "") {
    errors.push("Password is required.");
  }

  if (cnfpwd.value === "") {
    errors.push("Please re-enter your password.");
  } else if (cnfpwd.value !== pwd.value) {
    errors.push("Passwords do not match");
  }

  var mobilePattern = /^\d{10}$/;
  if (mobile.value === "") {
    errors.push("Mobile number is required.");
  } else if (!mobilePattern.test(mobile.value)) {
    errors.push("Invalid mobile number format (10 digits (numbers) only).");
  }

  if (fname.value === "") {
    errors.push("First name is required.");
  }

  if (lname.value === "") {
    errors.push("Last name is required.");
  }

  var genderSelected = false;
  gender.forEach(function (radio) {
    if (radio.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    errors.push("Please select a gender.");
  }

  if (country.value === "") {
    errors.push("Please select a country.");
  }

  if (!termsAndConditions.checked) {
    errors.push("You must agree to the terms and conditions.");
  }

  if (!newsletter.checked) {
    errors.push("You must accept the newsletter.");
  }

  // If there are errors, print them
  if (errors.length > 0) {
    errors.forEach(function (error) {
      var errorMessage = document.createElement("p");
      errorMessage.className = "error";
      errorMessage.textContent = error;
      document.querySelector(".card-body").appendChild(errorMessage);
    });
  } else {
    alert("Form submitted successfully!");
  }
  form.reset();
}
