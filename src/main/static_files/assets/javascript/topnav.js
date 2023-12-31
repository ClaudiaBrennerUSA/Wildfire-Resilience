let __generateTopNav = (topNavContainerElementId) =>
{
    let topNavContainer= document.getElementById(topNavContainerElementId);
    let markup = `
    <nav class="navbar navbar-expand-sm navbar-dark custom-navbar-bg py-0">
        <div class="global-navbar" id="top-navbar">
            <div class="first-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="/" class="nav-link">HOME</a></li>
                    <li><a href="/faq" class="nav-link">FAQ</a></li>
                </ul>
            </div>
        </div>
    </nav>

  `;
  topNavContainer.innerHTML = markup;
}


let generateTopNav = (topNavContainerElementId) =>
{
  let topNavContainer= document.getElementById(topNavContainerElementId);
  let markup = `
  <nav class="navbar navbar-expand-sm navbar-dark custom-navbar-bg py-0" >
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#topmenu-navbar"
        aria-controls="topmenu-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="global-navbar" id="top-navbar">
        <div class="first-navbar">
          <div class="collapse navbar-collapse" id="topmenu-navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a href="/" class="nav-link active"> Home </a>
              </li>
              <li class="nav-item">
                <a href="/using_the_scorecard" class="nav-link">Using the Scorecard</a>
              </li>
              <li class="nav-item">
                <a href="/faq" class="nav-link"> FAQ </a>
              </li>
              <li class="nav-item">
                <a href="/press_release" class="nav-link"> Press Release </a>
              </li>                    
              <li class="nav-item">
                <a href="/scorecard_info" class="nav-link"> Scorecard Info </a>
              </li>
              <li class="nav-item">
                <a href="/about_us" class="nav-link"> About Us </a>
              </li>
            </ul>
          </div>
          <!--/navbar-navigation-->
        </div>
      </div>
    </nav>
  `;
  topNavContainer.innerHTML = markup;
}

// let generateTopNav = (topNavContainerElementId) =>
// {
//   let topNavContainer= document.getElementById(topNavContainerElementId);
//   let markup = `
//   <header>
//     <div class="images-column">
//       <img src="assets/images/wildfire3logos.png"
//         alt="CrowdDoing">
//     </div>
//     <div class="content-column">
//       <nav>
//         <ul>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Using Scorecard</a></li>
//           <li><a href="#">Press Release</a></li>
//           <li><a href="#">Scorecard Info</a></li>
//           <li><a href="#">FAQ</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Subscribe</a></li>
//           <li><a href="#">Contact Us</a></li>
//             <li>
//             <div class="search-box">
//               <input type="text" placeholder="Search">
//               <button type="button">Search</button>
//             </div>
//           </li>
//         </ul>
//       </nav>
//       <div class="title">
//         <h1>Community Wildfire Resilience Scorecard</h1>
//         <p>Empower Communities to Assess Wildfire Risk, Boost Preparedness</p>
//       </div>
//     </div>
//   </header>
//   `;
//   topNavContainer.innerHTML = markup;
// }