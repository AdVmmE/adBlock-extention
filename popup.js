// Communicate with background.js to get block count
chrome.runtime.sendMessage({ request: "getCount" }, (response) => {
    document.getElementById("count").textContent = response.count;
  });