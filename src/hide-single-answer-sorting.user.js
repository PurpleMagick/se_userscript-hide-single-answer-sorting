// ==UserScript==
// @name            StackExchange hide sorting for a single answer
// @author          VLAZ
// @description     Hide "sorted by" combobox when only one answer is on the page
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/questions/*
// @match           https://serverfault.com/questions/*
// @match           https://superuser.com/questions/*
// @match           https://*.stackexchange.com/questions/*
// @match           https://askubuntu.com/questions/*
// @match           https://stackapps.com/questions/*
// @match           https://mathoverflow.net/questions/*
// @match           https://pt.stackoverflow.com/questions/*
// @match           https://ja.stackoverflow.com/questions/*
// @match           https://ru.stackoverflow.com/questions/*
// @match           https://es.stackoverflow.com/questions/*
// @match           https://meta.stackoverflow.com/questions/*
// @match           https://meta.serverfault.com/questions/*
// @match           https://meta.superuser.com/questions/*
// @match           https://meta.askubuntu.com/questions/*
// @match           https://meta.mathoverflow.net/questions/*
// @match           https://pt.meta.stackoverflow.com/questions/*
// @match           https://ja.meta.stackoverflow.com/questions/*
// @match           https://ru.meta.stackoverflow.com/questions/*
// @match           https://es.meta.stackoverflow.com/questions/*
// @namespace       https://github.com/PurpleMagick/
// @run-at          document-end
// @version         1.0.0
// ==/UserScript==
(function() {
  const answerCountSelector = "#answers-header [data-answercount]";
  
  const countEl = document.querySelector(answerCountSelector);
  
  if (!countEl)
    throw new Error(`Element with selector [${answerCountSelector}] not found on the page. Unable to get the number of answers. Possibly a UI update broke the userscript.`);
  
  const numAnswers = Number(countEl.dataset.answercount);
  
  if (numAnswers !== 1)
    return;
  
  //hide sorting dropdown and related elements
  countEl
    .closest(".flex--item")
    .nextElementSibling
    .style
    .display = "none";
})();
