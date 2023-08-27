// ==UserScript==
// @name         Kunduz Cevap Gösterici
// @namespace    https://kunduz.com/
// @version      0.1
// @description  Shows the answer when the specified link is clicked.
// @author       CrawLeyYou & MrHakan & Luxotick
// @match        https://kunduz.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = JSON.parse(document.getElementById('__NEXT_DATA__').innerText).props.pageProps.question.raw_answer_image;
    var linkHTML = '<a id="showAnswerLink" style="position: fixed; top: 100px; right: 100px; background-color: #f2f2f2; padding: 50px; text-decoration: none; color: #333; border: 1px solid #ccc; cursor: pointer;">Cevabı Göster</a>';

    // Add the link element to the top level
    document.body.insertAdjacentHTML('beforeend', linkHTML);

    // Select the link element
    var showAnswerLink = document.getElementById('showAnswerLink');

    // Define the action to be taken when the link is clicked
    showAnswerLink.addEventListener('click', function() {
        window.open(url, "_blank");
    });
})();
