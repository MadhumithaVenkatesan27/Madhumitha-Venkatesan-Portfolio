// Tabs
function opentab(event, tabname) {
  var tablinks = document.querySelectorAll(".tab-links");
  var tabcontents = document.querySelectorAll(".tab-contents");

  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuButton.style.display = "none";
    closeButton.style.display = "block";
  } else {
    menuButton.style.display = "block";
    closeButton.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");

  menuButton.addEventListener("click", toggleMenu);

  closeButton.addEventListener("click", toggleMenu);
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxpJtpAtY8pR5_PPnwyNsPaRs4HsIVDsv2HtYyQijFA4CpfK6ypW2tg6ktL3lmDSpBe6w/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitting form...");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Message submitted successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("There was an error submitting the form. Please try again.");
    });
});

const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopButton.classList.add("visible");
  } else {
    scrollTopButton.classList.remove("visible");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
