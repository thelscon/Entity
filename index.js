"use strict";
let a = ["AACTA Awards" /* EFilmAward.AACTAA */];
class Film {
    rating;
    listOfAwards;
    _name;
    _yearOfIssue;
    get name() {
        return this._name;
    }
    get yearOfIssue() {
        return this._yearOfIssue;
    }
    constructor(name, yearOfIssue, rating, listOfAwards) {
        this.rating = rating;
        this.listOfAwards = listOfAwards;
        this._name = name;
        this._yearOfIssue = yearOfIssue;
    }
}
class Films {
    statusFilter;
    listOfFilms = [];
    searchByName(name) {
        return new Film('name', new Date, "High" /* ERatingFilm.High */, ["AACTA Awards" /* EFilmAward.AACTAA */, "Bodil Awards" /* EFilmAward.BA */]);
    }
    filteringByYear(statusFilter, filter, filterTo, ...values) {
        return [];
    }
    filteringByRating(statusFilter, filter, filterTo, ...values) {
        return [];
    }
    filteringByAwards(statusFilter, filter, ...values) {
        return [];
    }
    applyFiltersValue(currentFilter) {
        this.statusFilter = currentFilter;
    }
}
class Category {
    _name;
    listOfFilms = [];
    get name() {
        return this._name;
    }
    constructor(name) {
        this._name = name;
    }
}
class Categories {
    statusFilter;
    listOfCategories = [];
    searchByName(statusFilter, filter, ...values) {
        return [];
    }
    applyFiltersValue(currentFilter) {
        this.statusFilter = currentFilter;
    }
}
