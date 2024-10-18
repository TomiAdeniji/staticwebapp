// script.js

const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");
document.querySelector(".cta-button").addEventListener("click", function () {
  window.location.href = "https://qbiclesapp.com"; // Redirect to your sales site
});
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");

    // Change content based on tab
    if (tab.textContent === "Businesses") {
      tabContent.innerHTML = `
        <p class="main-heading">Turn your dreams into something beautiful</p>
          <div class="biz-login-signup">
            <a href="#" class="login-signup-link">Login or SignUp</a>
          </div>
          <div class="store-buttons">
            <button class="store-button">
              <img src="appstore.png" alt="App Store" class="store-icon" />
              <span
                >Coming Soon on <br />
                <span class="store">App Store</span>
              </span>
            </button>
            <button class="store-button">
              <img src="playstore.png" alt="Play Store" class="store-icon" />
              <span
                >Coming Soon on <br />
                <span class="store">Play Store</span>
              </span>
            </button>
          </div>
            `;
    } else if (tab.textContent === "Individuals") {
      tabContent.innerHTML = `
        <p class="main-heading">Connect with your favourite businesses</p>
        <div class="ind-login-signup">
          </div>
          <div class="store-buttons">
            <button class="store-button">
              <img src="appstore.png" alt="App Store" class="store-icon" />
              <span
                >Coming Soon on <br />
                <span class="store">App Store</span>
              </span>
            </button>
            <button class="store-button">
              <img src="playstore.png" alt="Play Store" class="store-icon" />
              <span
                >Coming Soon on <br />
                <span class="store">Play Store</span>
              </span>
            </button>
          </div>
            `;
    }
  });
});
