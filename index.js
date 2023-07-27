// ==UserScript==
// @name         FuckUElon
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Trying to fix Elons shits
// @author       Norookezi
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function findX(){
        const listX = document.querySelectorAll('path[d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"]');

        if (listX.length == 0) return;

        listX.forEach((e)=>{
            const parent = e.closest('svg');

            parent.setAttribute('viewBox', '0 0 512 512');
            e.setAttribute('d', 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z')
        });
    }

    function replaceFavIcon() {
         document.querySelector('link[rel="shortcut icon"]').href = "https://abs.twimg.com/favicons/twitter.2.ico"
    }

    function removeAds() {
        const ads = document.querySelectorAll('[d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"]') ?? [];
        const getVerif = document.querySelectorAll('[href="/i/verified-choose"]') ?? [];
        const verified = document.querySelectorAll('[data-testid="icon-verified"]') ?? [];
        const showMore = document.querySelectorAll('[data-testid="tweet-text-show-more-link"]') ?? [];

        // Remove the button to become a verified member
        getVerif.forEach(element => {element.style.display = 'none'});

        // Hide all "certified" icon
        verified.forEach(element => {element.style.display = 'none'});

        // I don't want to read 999 lines tweets, lets delete the "Show more" link
        showMore.forEach(element => {element.style.display = 'none'});

        ads.forEach(element => { element.closest('[data-testid="cellInnerDiv"]').style.display = 'none'});
    }

    setInterval(()=>{
        findX();
        replaceFavIcon();
        removeAds();
    }, 100);
})();
