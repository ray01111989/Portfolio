const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const form = document.getElementById('web-form');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to server here
  form.submit();
  // 👇️ Reset form here
  form.reset();
});
