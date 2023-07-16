'use strict';

const api_key = "";
const imageBaseURL = "";

/**
 * fetch data from a server using 'url' and passes
 * the result in JSON data to a callaback function
 * along  with an optional paramenter if has 'optionalParam"
 */

const fetchDataFromServer = function (url, callaback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callaback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };