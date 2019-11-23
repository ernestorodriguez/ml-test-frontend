const {
    Before,
    After,
    Given,
    Then,
    When,
} = require('cypress-cucumber-preprocessor/steps');

const selector = {
    searchInput: '[data-js="search-input"]',
    searchSubmit: '[data-js="search-submit"]',
    item: '[data-js="item"]',
    description: '[data-js="description"]'
};
const url = 'http://localhost:8080';

Given('search page', () => {
    cy.visit(url);
});

Then(`Search for {string}`, (query) => {
    cy.get(selector.searchInput).type(query);
    cy.get(selector.searchSubmit).click();
});

Then(`I am on {string} page`, (page) => {
    cy.url().should('include', page);
});

Then(`must show {int} results`, (cuantity) => {
    cy.get(selector.item).should('have.length', cuantity);
});

When(`click in first result`, () => {
    cy.get(selector.item).first().click();
});

Then(`mush show item info`, () => {
    cy.get(selector.description).contains('iPhone 8');
});

