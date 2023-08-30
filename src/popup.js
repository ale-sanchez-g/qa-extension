document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.getBackgroundPage((backgroundPage) => {
    //   get tips from local storage
    const tip = window.localStorage.getItem("tips");
    const tipElement = document.getElementById("tip");
    tipElement.textContent = tip;
  });
});
