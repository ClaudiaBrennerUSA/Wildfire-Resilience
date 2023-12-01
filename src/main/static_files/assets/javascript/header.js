// let generateHeader = (headerContainerElementId) =>
// {
//   let headerContainer = document.getElementById(headerContainerElementId);
//   let markup = `
//   <div class="col-3" id="logo-col">
//     <div class="logo-box">
//       <img style="width: 30%; height: 30%; margin-top: 2px;" src="assets/images/cd-logo-name-resize-70.png"
//         alt="CrowdDoing">
//       <img style="height: 50%; width: 50%;" src="assets/images/wildfire_logo-removebg-preview.png"
//         alt="Wildfire Prevention & Consortium">
//     </div>
//   </div>
//   <div class="col-9" id="search-and-company-name">
//     <div class="row" id="contact-and-search-row">
//       <div class="col-12" id="contact-and-search-col">
//         <span style="white-space: nowrap; margin-right: 3em">
//           Subscribe
//         </span>
//         <span style="white-space: nowrap; margin-right: 3em">
//           Contact Us
//         </span>
//         <form class="search-form">
//           <input class="_form-control" type="search" placeholder="Search" aria-label="Search">
//           <button class="btn btn-primary" type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//     <div class="row" id="company-name-row">
//       <div class="col-12" id="company-name-col">
//         <div id="company-name-box">
//           <h1 class="company-name">
//             Community Wildfire Resilience Scorecard
//           </h1>
//           <p>
//             Empower Communities to Assess Wildfire Risk, Boost Preparedness
//           <p>
//         </div>
//       </div>
//     </div>
//   </div>
  

//   `;
//   headerContainer.innerHTML = markup;
// }

let generateHeader = (headerContainerElementId) =>
{
  let headerContainer = document.getElementById(headerContainerElementId);
  let markup = `
  <header>
    <div class="images-column">
      <img src="assets/images/wildfire3logos2.png"
        alt="CrowdDoing">
    </div>
    <div class="content-column">
    <button id="hamburger" aria-expanded="false" onclick="toggleHamburger()">
       <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </button>
      <nav class="global-navbar">
      <ul>
          <li><a href="/" id="home">Home</a></li>
          <li><a href="/using_the_scorecard" id="usescorecard">Using Scorecard</a></li>
          <li><a href="/press_release" id="press">Press Release</a></li>
          <li><a href="/scorecard_info" id="scorecardinfo">Scorecard Info</a></li>
          <li><a href="/faq" id="faq">FAQ</a></li>
          <li><a href="/about_us" id="about">About</a></li>
          <li><a href="#">Subscribe</a></li>
          <li><a href="/contact_us">Contact Us</a></li>
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
