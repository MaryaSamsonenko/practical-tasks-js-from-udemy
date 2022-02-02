window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabsContent() {
    tabsContent.forEach((item) => (item.style.display = "none"));
    tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
  }
  function showTabsContent() {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }
});
