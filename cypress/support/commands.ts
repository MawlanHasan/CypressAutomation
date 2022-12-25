// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />
import { AMAZON_CONSTATNS } from "../constants/amazon.constants";
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Find element and verify visibility
       * @param elementName - element locator name
       * @see cypress/support/commands.ts
       * @example
       * cy.elementIsVisible(AMAZON_CONSTANTS.amazonLogo)
       */
      elementIsVisible(elementName: string): Chainable;
      /**
       * Find element and click
       * @param elementName - element locator name
       * @see cypress/support/commands.ts
       * @example
       * cy.clickElement(AMAZON_CONSTANTS.amazonSearchBox)
       */
      clickElement(elementName: string): Chainable;
      /**
       *  enter the text in the text box
       * @param elementName - element locator name
       * @param text - text to match
       * @see cypress/support/commands.ts
       * @example
       * cy.enterText(AMAZON_CONSTANTS.amazonSearchBox, AMAZON_CONSTANTS.amazonTestingText)
       */
      enterText(elementName: string, text: string): Chainable;
      /**
       * Selects index of a list element
       * @param elementToClick - element locator name
       * @param index - index to click
       * @see cypress/support/commands.ts
       * @example
       * cy.clickOnElementIndex(AMAZON_CONSTATNS.amazonProductResultList, 1)
       */
      clickOnElementIndex(elementToClick: string, index: any): Chainable;
      /**
       * Find element by text (using contains) and verify visibility
       * @param elementName - element locator name
       * @see cypress/support/commands.ts
       * @example
       * cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonSignInText)
       */
      elementIsVisibleByText(elementName: string): Chainable;
      /**
       * Verify element is not visibile
       * @param elementName - element locator name
       * @see cypress/support/commands.ts
       * @example
       * cy.elementNotVisible(AMAZON_CONSTATNS.amazonAuthErrorMessage)
       */
      elementNotVisible(elementName: string): Chainable;
      /**
       * Selects the dropdown option from the dropdown element
       * @param dropdownElementName - dropdown element locator name
       * @param option - name or index of the option to select
       * @see cypress/support/commands.ts
       * @example
       * cy.selectDropdownOption(AMAZON_CONSTATNS.amazonProductSizeDropdown, AMAZON_CONSTATNS.amazonProductMediumSize)
       */
      selectDropdownOption(dropdownElementName: string, option: any): Chainable;
      /**
       * Verifies that the element contains text
       * @param elementName - element locator name
       * @param text - text to verify
       * @see cypress/support/commands.ts
       * @example
       * cy.verifyElementText(AMAZON_CONSTATNS.amazonChartCount, NUMERICAL_CONSTANTS.two);
       */
      verifyElementText(elementName: string, text: string): Chainable;
    }
  }
}

Cypress.Commands.add("elementIsVisible", (elementName) => {
  cy.get(elementName).should("be.visible");
});
Cypress.Commands.add("clickElement", (elementName) => {
  cy.get(elementName).click();
});
Cypress.Commands.add("elementIsVisibleByText", (elementName) => {
  cy.contains(elementName).should("be.visible");
});
Cypress.Commands.add("enterText", (fieldName, text) => {
  cy.get(fieldName).type(text, { force: true }).should("have.value", text);
});
Cypress.Commands.add("clickOnElementIndex", (elementToClick: string, index) => {
  cy.elementIsVisible(elementToClick)
    .eq(index - 1)
    .click({ force: true });
});
Cypress.Commands.add("elementNotVisible", (elementName) => {
  cy.get(elementName).should("not.be.visible");
});
Cypress.Commands.add(
  "selectDropdownOption",
  (dropdownElementName: string, option: any) => {
    cy.elementIsVisible(dropdownElementName).select(option);
  }
);
Cypress.Commands.add("verifyElementText", (elementName, text) => {
  cy.elementIsVisible(elementName).contains(text).should("contain", text);
});
