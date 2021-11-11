// imports
import { fetchMovies, updateList } from "./movies";
import { initSortable } from "./plugins/init_sortable";
import { initSelect2 } from "./plugins/init_select2";

import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// initializers
initSortable();
initSelect2();

// activators
fetchMovies("harry potter"); // on 1st page load
const form = document.querySelector("#search-form");
form.addEventListener("submit", updateList);
