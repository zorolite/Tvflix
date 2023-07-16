'use strict';

/**
 * Add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements)
        elem.addEventListener(eventType, callback);
}


/**
 * Toggle search box in mobile device || small screen
 */

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");


addEventOnElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});


const container = document.querySelector(".slider-control");
// where "container" is the id of the container
container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 100;
        e.preventDefault();
        // prevenDefault() will help avoid worrisome 
        // inclusion of vertical scroll 
    }
    else {
        container.scrollLeft -= 100;
        e.preventDefault();
    }
});