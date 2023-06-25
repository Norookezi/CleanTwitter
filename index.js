function removeAds() {
  const ads = document.querySelectorAll('[d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"]');
  const getVerif = document.querySelectorAll('[href="/i/verified-choose"]');
  const verified = document.querySelectorAll('[data-testid="icon-verified"]');
  const showMore = document.querySelectorAll('[data-testid="tweet-text-show-more-link"]');

  // Hide all sponsored tweets
  ads.forEach(element => element.closest('[data-testid="cellInnerDiv"]').style.display = 'none');

  // Remove the button to become a verified member
  getVerif.forEach(element => element.style.display = 'none');

  // Hide all "certified" icon
  verified.forEach(element => element.style.display = 'none');

  // I don't want to read 999 lines tweets, lets delete the "Show more" link
  showMore.forEach(element => element.style.display = 'none');
}

// Run at each scrolls
document.addEventListener('scroll', removeAds);
