let generateHeader = (headerContainerElementId) =>
{
  let headerContainer = document.getElementById(headerContainerElementId);
  let markup = `
  <div class="col-3" id="logo-col">
    <div class="logo-box">
      <img style="width: 30%; height: 30%; margin-top: 2px;" src="assets/images/cd-logo-name-resize-70.png"
        alt="CrowdDoing">
      <img style="height: 50%; width: 50%;" src="assets/images/wildfire_logo-removebg-preview.png"
        alt="Wildfire Prevention & Consortium">
    </div>
  </div>
  <div class="col-9" id="search-and-company-name">
    <div class="row" id="contact-and-search-row">
      <div class="col-12" id="contact-and-search-col">
        <span style="white-space: nowrap; margin-right: 3em">
          Subscribe
        </span>
        <span style="white-space: nowrap; margin-right: 3em">
          Contact Us
        </span>
        <form class="search-form">
          <input class="_form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
    <div class="row" id="company-name-row">
      <div class="col-12" id="company-name-col">
        <div id="company-name-box">
          <h1 class="company-name">
            Community Wildfire Resilience Scorecard
          </h1>
          <p>
            Empower Communities to Assess Wildfire Risk, Boost Preparedness
          <p>
        </div>
      </div>
    </div>
  </div>
  

  `;
  headerContainer.innerHTML = markup;
}
