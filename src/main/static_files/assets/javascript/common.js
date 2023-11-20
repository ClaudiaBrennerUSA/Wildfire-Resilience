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
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the current page URL
  const currentPage = window.location.href;

  // Get all the links in the navigation
  const navLinks = document.querySelectorAll('nav a');

  // Loop through each link and check if it matches the current page URL
  navLinks.forEach(link => {
    if (currentPage.includes(link.getAttribute('href'))) {
      link.classList.add('active'); // Add a class to highlight the active link
    }
  });
});

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

// const hamburgerBtn = document.getElementById("hamburger");

// hamburgerBtn.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  const navMenu = document.querySelector(".global-navbar");
  navMenu.classList.toggle("show");
  // hamburgerBtn.setAttribute(
  //     "aria-expanded",
  //     hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  // );
}

