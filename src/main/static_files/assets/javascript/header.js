let generateHeader = (headerContainerElementId) => {
  let headerContainer = document.getElementById(headerContainerElementId);
  let markup = `
  <header>
    <div id="header-nav">
      <div class="images-column">
        <a href="/">  <img src="assets/images/cd-logo.png" alt="CDlogo" class="top-left-image"> </a>
        <a href="/">  <img src="assets/images/CWPCLogoW.png" alt="CWPC" class="top-right-image"> </a>
        <a href="/">  <img src="assets/images/arise.png" alt="arise" class="centered-image"> </a>
      </div>
      <button id="hamburger" aria-expanded="false" onclick="toggleHamburger()" title="main menu">
        <i class="fa-solid fa-bars" aria-hidden="true"></i> MENU
      </button>
      <nav class="global-navbar">
        <ul>
          <li><a href="/" id="home">Home</a></li>
          <li><a href="/using_the_scorecard" id="usescorecard">Using Scorecard</a></li>
          <li><a href="/press_release" id="press">News</a></li>
          <li><a href="/scorecard_info" id="scorecardinfo">Participation</a></li>
          <li><a href="/faq" id="faq">FAQ</a></li>
          <li><a href="/about_us" id="about">About</a></li>
          <li><a href="/subscribe">Subscribe</a></li>
          <li><a href="/contact_us">Contact</a></li>
          <li style="display:none;">
            <div class="search-box">
              <input type="text" placeholder="Search">
              <button type="button">Search</button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header-content">
      <div class="content-column">
        <div class="title">
          <h1>Community Wildfire Resilience Scorecard</h1>
          <p>Empower Communities to Assess Wildfire Risk, Boost Preparedness</p>
        </div>
      </div>
    </div>
    </header>
  `;
  headerContainer.innerHTML = markup;
};
