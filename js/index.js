// Small behaviors shared by every page of the portfolio.

// The menu button that shows and hides the navigation on small screens
const navToggle = document.querySelector('.nav-toggle');
// Every link inside the navigation
const navLinks = document.querySelectorAll('.nav__link');
// The contact form in the footer
const form = document.getElementById('web-form');

// Clicking the menu button adds or removes the "nav-open" class on <body>; the stylesheet uses it to show the menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Choosing a link closes the menu again, so it does not stay open over the page after navigating
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// When the form is submitted, send it to FormSubmit (the address in the form's action attribute)
// and then clear the fields. The browser has already checked the required fields at this point.
form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  // Send the form data to the server
  form.submit();
  // Empty the form so the visitor sees a fresh one after sending
  form.reset();
});
