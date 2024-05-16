const signinBtn = document.getElementById('signin');
const loginBtn = document.getElementById('login');

signinBtn.addEventListener('click', () => {
  signinBtn.classList.add('active');
  loginBtn.classList.remove('active');
});

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  signinBtn.classList.remove('active');
});