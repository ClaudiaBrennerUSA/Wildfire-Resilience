let generateHeader = (headerContainerElementId) =>
{
  let headerContainer = document.getElementById(headerContainerElementId);
  let markup = `
  <header>
    <div class="images-column">
      <div>
       <a href="/">  <img src="assets/images/cd-logo.png" alt="CDlogo" class="top-left-image"> </a>
       <a href="/">   <img src="assets/images/CWPCLogoW.png" alt="CWPC" class="top-right-image"> </a>
      </div>
      <div>
        <a href="/">  <img src="assets/images/arise.png" alt="arise" class="centered-image"> </a>
      </div>
    </div>
    </a>
    <div class="content-column">
      <button id="hamburger" aria-expanded="false" onclick="toggleHamburger()">
       <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <nav class="global-navbar">
      <ul>
          <li><a href="/" id="home">Home</a></li>
          <li><a href="/using_the_scorecard" id="usescorecard">Using Scorecard</a></li>
          <li><a href="/press_release" id="press">Press Release</a></li>
          <li><a href="/scorecard_info" id="scorecardinfo">Participation</a></li>
          <li><a href="/faq" id="faq">FAQ</a></li>
          <li><a href="/about_us" id="about">About</a></li>
          <li><a href="/subscribe">Subscribe</a></li>
          <li><a href="/contact_us">Contact</a></li>
            <li>
            <div class="search-box">
              <input type="text" placeholder="Search">
              <button type="button">Search</button>
            </div>
          </li>
        </ul>
      </nav>
      <div class="title">
        <h1>Community Wildfire Resilience Scorecard</h1>
        <p>Empower Communities to Assess Wildfire Risk, Boost Preparedness</p>
      </div>
    </div>
  </header>
  `;
  headerContainer.innerHTML = markup;
}
