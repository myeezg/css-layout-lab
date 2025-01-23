document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const saveUserCheckbox = document.getElementById('save-user');
  const continueButton = document.querySelector('.button-primary');
  const createAccountButton = document.querySelector('.button-secondary');

  continueButton.addEventListener('click', function() {
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