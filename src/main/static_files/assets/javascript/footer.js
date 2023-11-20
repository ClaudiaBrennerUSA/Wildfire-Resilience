function generateStandardFooter() {
  let footerMarkup = `
  <footer class="footer">
  <img class="footer-logo" src="assets/images/wildfire3logos.png" alt="Footer Logo">
  
  <div class="social-icons">
   <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
    <a href="#" target="_blank"><i class="fa-sharp fa-solid fa-share-nodes"></i></a>
  </div>

  <div class="footer-links">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
    <a href="#">Link 5</a>
    <a href="#">Link 6</a>
    <a href="#">Link 7</a>
    <a href="#">Link 8</a>
    <a href="#">Link 9</a>
    <a href="#">Link 10</a>
  </div>

  <div class="copyright">
    &copy; 2023 Your Company. All rights reserved.
  </div>
</footer>
    `;
  footer = document.getElementById("footer-container");
  footer.innerHTML = footerMarkup;

  return;

}