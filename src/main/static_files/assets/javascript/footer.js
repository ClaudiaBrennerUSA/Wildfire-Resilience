function generateStandardFooter() {
  let footerMarkup = `
  <footer class="footer">
  <div class="footer-column">
   <div class="footer-logo">
      <img src="assets/images/cd-logo.png" alt="CDlogo" class="top-left-image">
      <img src="assets/images/CWPCLogoW.png" alt="CWPC" class="top-right-image">
      <img src="assets/images/arise.png" alt="arise" class="centered-image">
      </div>
   <div class="copyright">
    &copy; 2024. All rights reserved.
  </div>
  </div>

  <div class="footer-column">
    <h4>Company</h4>
    <div class="footer-links">
      <ul>
        <li><a href="/about_us">About</a></li>
        <li><a href="/press_release">Press Release</a></li>
        <li><a href="/contact_us">Contact</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-column">
    <h4>Scorecard</h4>
    <div class="footer-links">
      <ul>
        <li><a href="/using_the_scorecard">Using the Scorecard</a></li>
        <li><a href="/scorecard_info">Scorecard Information</a></li>
        <li><a href="/faq">FAQs</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-column">
    <h4>Follow Us</h4>
    <div class="social-icons">
     <a href="https://www.linkedin.com/company/crowddoing/" target="_blank" aria-label="Link to our LinkedIn page"><i class="fab fa-linkedin"></i></a>
     <a href="https://www.facebook.com/profile.php?id=100066404896166" target="_blank" aria-label="Link to our Facebook page"><i class="fab fa-facebook"></i></a>
     <a href="https://www.youtube.com/@crowddoing" target="_blank" aria-label="Link to our youtube page"><i class="fab fa-youtube"></i></a>
     <a href="#" target="_blank" aria-label="Get link to share our website"><i class="fa-sharp fa-solid fa-share-nodes"></i></a>
     </div>
     <div class="footer-links">
      <ul>
        <li><a href="/subscribe">Subscribe</a></li>
      </ul>
    </div>
  </div>

  
</footer>
    `;
  footer = document.getElementById("footer-container");
  footer.innerHTML = footerMarkup;

  return;

}