function generateStandardFooter() {
  let footerMarkup = `
  <footer class="footer">
  <div class="footer-column">
   <div class="footer-logo">
      <img src="assets/images/cd-logo-white.png" alt="CDlogo" class="top-left-image">
      <img src="assets/images/CWPC-white.png" alt="CWPC" class="top-right-image">
      <img src="assets/images/arise.png" alt="arise" class="centered-image">
      </div>
   <div class="copyright">
    &copy; 2023. All rights reserved.
  </div>
  </div>

  <div class="footer-column">
    <h4>Company</h4>
    <div class="footer-links">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Press Release</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-column">
    <h4>Scorecard</h4>
    <div class="footer-links">
      <ul>
        <li><a href="#">Using the Scorecard</a></li>
        <li><a href="#">Scorecard Info</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-column">
    <h4>Follow Us</h4>
    <div class="social-icons">
     <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
     <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
     <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
     <a href="#" target="_blank"><i class="fa-sharp fa-solid fa-share-nodes"></i></a>
     </div>
     <div class="footer-links">
      <ul>
        <li><a href="#">Subscribe</a></li>
      </ul>
    </div>
  </div>

  
</footer>
    `;
  footer = document.getElementById("footer-container");
  footer.innerHTML = footerMarkup;

  return;

}