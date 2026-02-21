function showTab(tabId, el) {
  let tabs = document.querySelectorAll(".tab-content");
  let buttons = document.querySelectorAll(".pose-tabs button");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  el.classList.add("active");

  AOS.refresh();
}

// Navbar Scroll Logic
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
