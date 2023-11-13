function generateStandardFooter() {
  let footerMarkup = `
  <footer>
  <div class="row">
    <div class="col-3" id="footer-logo">
      <img style="width: inherit; height: inherit; margin-top: 2px;" src="assets/images/cd-logo-name-resize-70.png" alt="CrowdDoing">
      <img style="height: inherit; width: inherit;" src="assets/images/wildfire_logo-removebg-preview.png" alt="Wildfire Prevention & Consortium">
    </div>
    <div class="col-4">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link4</a></li>
        <li><a href="#">Link5</a></li>
      </ul>
    </div>
    <div class="col-4">
      <ul>
        <li><a href="#">Link 6</a></li>
        <li><a href="#">Link 7</a></li>
        <li><a href="#">Link 8</a></li>
        <li><a href="#">Link 9</a></li>
        <li><a href="#">Link 10</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group" id="social">
    <span>
      Follow us on Socials </br>
    </span>
    <a href="#" class="btn"><i class="fa-brands fa-facebook fa-2xl"></i></a>
    <a href="#" class="btn"><i class="fa-brands fa-twitter fa-2xl"></i></a>
    <a href="#" class="btn"><i class="fa-solid fa-share-nodes fa-2xl"></i></a>
    <a href="#" class="btn"><i class="fa-brands fa-instagram fa-2xl"></i></a>
  </div>
  <div class="row" id="copyright">
    <p> Copyright message will be here </p>
  </div>
  </footer>
    `;
  footer = document.getElementById("footer-container");
  footer.innerHTML = footerMarkup;

  return;

}