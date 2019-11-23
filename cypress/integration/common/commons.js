const {
    Before,
    After,
    Given,
    Then,
    When,
} = require('cypress-cucumber-preprocessor/steps');

const selector = {
    searchInput: '[data-js="search-input"]'
};
const url = 'http://localhost:8080';

Given('search page', () => {
    cy.visit(url);
});

Then(`Search for {string}`, (query) => {
    cy.get(selector.searchInput).type(query);
});
