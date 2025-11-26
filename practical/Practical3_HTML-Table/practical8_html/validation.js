const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitButton = form.querySelector('button');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation functions
function validateUsername() {
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    return false;
  } else {
    usernameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (!passPattern.test(password.value)) {
    passwordError.textContent = "Password must have 8+ chars, 1 uppercase, 1 lowercase & 1 special character";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

// Enable button only if all valid
function checkAllValid() {
  const allValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
  submitButton.disabled = !allValid;
  submitButton.classList.toggle('enabled', allValid);
}

// Real-time validation
username.addEventListener('input', () => { validateUsername(); checkAllValid(); });
email.addEventListener('input', () => { validateEmail(); checkAllValid(); });
password.addEventListener('input', () => { validatePassword(); checkAllValid(); });
confirmPassword.addEventListener('input', () => { validateConfirmPassword(); checkAllValid(); });

// Prevent page reload on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
});
