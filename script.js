const form = document.querySelector('.sign-up-form-container');
const emailInput = document.getElementById('email');
const successMessage = document.querySelector('.success-message-container');
const dismissButton = document.getElementById('dismissButton');
const mainHeaderImg = document.querySelector('.main-card-header-img');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const userEmail = document.getElementById('userEmail');
  userEmail.textContent = email;

  // Show the success message and hide the form and header image
  form.classList.add('hidden');
  successMessage.classList.remove('hidden');
  mainHeaderImg.classList.add('hidden');
});

dismissButton.addEventListener('click', () => {
  // Hide the success message and show the form and header image
  form.classList.remove('hidden');
  successMessage.classList.add('hidden');
  mainHeaderImg.classList.remove('hidden');
});