'use strict';

import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
    const genreList = {};
    fetchDataFromServer('', function
        ({ genres }) {
        for (const { id, name } of genres) {
            genreList[id] = name;
        }

        genreLink();
    });

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    
        < div class="sidebar-list" >
            <p class="title">Genre</p>
        </div >
        <div class="sidebar-list">
            <p class="title">Language</p>

            <a href="./movie-list.html" menu-close class="sidebar-link">English</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Hindi</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">French</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Chinese</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Spanish</a>
            <a href="./movie-list.html" menu-close class="sidebar-link">Japnese</a>
        </div>

        <div class="sidebar-footer">
            <p class="copyright">
                Copyright 2023 <a href="https://github.com/SunilBarewar">Sunil Barewar</a>
            </p>

            <img src="./images/tmdb-logo.png" width="130" height="17" alt="the movie database logo">
        </div>
    `;

    const genreLink = function () {
        for (const [genreId, genreName] of Object.entries(genreList)) {

            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");

            // link.setAttribute("onclick", `getMovieList("with_genres=${genreId}", "${genreName}")`);

            sidebarInner.querySelectorAll(".sidebar-list")[0]
                .appendChild(link);
        }

        const sidebar = document.querySelector("[sidebar]");

        sidebar.appendChild(sidebarInner);

        toggleSidebar(sidebar);
    }

    const toggleSidebar = function (sidebar) {
        /**
         * Toggle sidebar in mobile screen
         */

        const sidebarBtn = document.querySelector("[menu-btn]");

        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");

        const sidebarClose = document.querySelectorAll("[menu-close]");

        const overlay = document.querySelector("[overlay]");

        addEventsOnElements(sidebarTogglers, "click", function () {
            sidebar.classList.toggle("active");
            sidebarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventsOnElements(sidebarClose, "click", function () {
            sidebar.classList.remove("active");
            sidebarBtn.classList.remove("active");
            overlay.classList.remove("active");
        });
    }
}

