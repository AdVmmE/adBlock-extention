chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // List of ad-related domains or patterns to block
      const adPatterns = [
        "*://*.doubleclick.net/*",
        "*://*.adservice.google.com/*",
        "*://*.adserver.com/*",
        "*://*.bannerads.com/*"
      ];
  
      // Check if the URL matches any ad pattern
      for (let pattern of adPatterns) {
        if (details.url.match(pattern)) {
          return { cancel: true }; // Block the request
        }
      }
      return { cancel: false }; // Allow non-ad requests
    },
    { urls: ["<all_urls>"] }, // Apply to all URLs
    ["blocking"] // Required for blocking requests
  );