/** Quorix: Mind Boost — store URLs & smart redirect */
(function (global) {
  const APP_NAME = "Quorix: Mind Boost";
  const IOS_URL =
    "https://apps.apple.com/us/app/quorix-mind-boost/id6770055395";
  const ANDROID_URL =
    "https://play.google.com/store/apps/details?id=com.talhacosar.quorix";

  function detectPlatform() {
    const ua = navigator.userAgent || navigator.vendor || "";
    if (/android/i.test(ua)) return "android";
    if (/iPad|iPhone|iPod/i.test(ua)) return "ios";
    // iPadOS 13+ desktop UA
    if (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) {
      return "ios";
    }
    return "desktop";
  }

  function getStoreUrl(platform) {
    const p = platform || detectPlatform();
    if (p === "ios") return IOS_URL;
    if (p === "android") return ANDROID_URL;
    return null;
  }

  function redirectToStore(platform) {
    const url = getStoreUrl(platform);
    if (url) {
      window.location.replace(url);
      return true;
    }
    return false;
  }

  global.QuorixStore = {
    APP_NAME,
    IOS_URL,
    ANDROID_URL,
    detectPlatform,
    getStoreUrl,
    redirectToStore,
  };
})(window);
