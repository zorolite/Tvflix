'use strict';

import { api_key, fetchDataFromServer } from "./api.js";
import { createMovieCard } from "./movie-card.js";

export function search() {
    const searchWrapper = document.querySelector("[search-wrapper]");
    const searchField = document.querySelector("[search-field]");

    const searchResultModal = document.createElement("div");
    searchResultModal.classList.add("search-modal");

    document.querySelector("main").appendChild(searchResultModal);

    let searchTimeout;

    searchField.addEventListener("input", function () {
        if (!searchField.value.trim()) {
            searchResultModal.classList.remove("active");
            searchWrapper.classList.remove("searching");
            clearTimeout(searchTimeout);
            return;
        }

        searchWrapper.classList.add("searching");
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function () {

            const query = searchField.value.trim();
            fetchDataFromServer(`https://api.themoviedb.org/3/search/movie?api_key=1e4c67619d6fe8e214c2e718a2483612&page=1&include_adult=false&query=${query}`, function ({ results: movieList }) {



                searchWrapper.classList.remove("searching");

                searchResultModal.classList.add("active");

                searchResultModal.innerHTML = `
                <p class="label">Results for</p>
            
                <h1 class="heading">${query}</h1>
            
                <div class="movie-list">
                    <div class="grid-list"></div>
                </div>
                `;

                for (const movie of movieList) {
                    const movieCard = createMovieCard(movie);

                    searchResultModal.querySelector(".grid-list").appendChild(movieCard);
                }

            });


        }, 500);


    });

}
