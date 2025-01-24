document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const saveUserCheckbox = document.getElementById('save-user');
  const defaultButton = document.querySelector('.button-default');
  const primaryButton = document.querySelector('.button-primary');
  const createAccountButton = document.querySelector('.button-secondary');

  emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    const isValidGmail = email.length >= 4 && email.endsWith('@gmail.com');
    
    if (isValidGmail) {
      defaultButton.style.display = 'none';
      primaryButton.style.display = 'block';
    } else {
      defaultButton.style.display = 'block';
      primaryButton.style.display = 'none';
    }
  });

  primaryButton.addEventListener('click', function() {
    const email = emailInput.value;
    const rememberMe = saveUserCheckbox.checked;
    
    if (email) {
      console.log('Email:', email);
      console.log('Remember me:', rememberMe);
      // Add your form submission logic here
    }
  });

  createAccountButton.addEventListener('click', function() {
    console.log('Create account clicked');
    // Add your create account logic here
  });
});