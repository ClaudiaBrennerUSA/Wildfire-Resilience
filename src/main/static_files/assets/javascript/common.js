const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 50,
    behavior: 'smooth'
  });
});

function switchNavActive(){
// Get the current page URL
  const currentPage = window.location.href;

  // Get all the links in the navigation
  const navLinks = document.querySelectorAll('nav a');

  // Loop through each link and check if it matches the current page URL
  navLinks.forEach(link => {
    if(link.id == 'home'){
      link.classList.add('active');
    }
    else if (link.id!='home' && currentPage.includes(link.getAttribute('href'))) {
      link.classList.add('active'); // Add a class to highlight the active link
      document.querySelectorAll('nav a')[0].classList.remove('active');
    }
  });
}

function submitForm() {
  // Simulated database storage
  // In a real scenario, you would send the data to a server and store it in a database
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  // Display success message
  const successMessage = document.getElementById('successMessage');
  successMessage.textContent = `Thank you, ${firstName} ${lastName}! Your email (${email}) has been submitted.`;

  // Clear form fields
  document.getElementById('signupForm').reset();
}

function toggleHamburger() {
  const navMenu = document.querySelector(".global-navbar");
  navMenu.classList.toggle("show");
}

function toggleAdvHamburger(){
  const advMenu = document.querySelector(".advanced-navbar");
  advMenu.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleLinks = document.querySelectorAll('.toggle-link');

  for (const link of toggleLinks) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetCardID = link.getAttribute('href').substring(1);
      const targetCard = document.getElementById(targetCardID);

      if (targetCard.style.display === 'none' || targetCard.style.display === '') {
        targetCard.style.display = 'block';
      } else {
        targetCard.style.display = 'none';
      }
    });
  }
});
