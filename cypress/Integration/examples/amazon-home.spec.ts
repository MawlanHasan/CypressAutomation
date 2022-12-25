import { AMAZON_CONSTATNS } from "../../constants/amazon.constants";
import { NUMERICAL_CONSTANTS } from "../../constants/numerical.constants";

/// <refrence types="Cypress"/>
describe("Amazon home page automation Test", function () {
  it("Amazon search product functionality and auth test", function () {
    cy.visit(AMAZON_CONSTATNS.amazonURL);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonGreetingMessageText);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonLogo);
    cy.enterText(
      AMAZON_CONSTATNS.amazonSearchBox,
      AMAZON_CONSTATNS.amazonProductName
    );
    cy.clickElement(AMAZON_CONSTATNS.amazonSearchButton);
    cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonResultText);
    cy.clickElement(AMAZON_CONSTATNS.amazonProductMediumSizeFilter);
    cy.elementIsVisibleByText(
      AMAZON_CONSTATNS.amazonProductTodaysDealFilterText
    );
    cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonBestSellerItemsBadgeText);
    cy.get(AMAZON_CONSTATNS.amazonProductResultList).eq(0).click();
    cy.clickElement(AMAZON_CONSTATNS.amazonAddtoCartButton);
    cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonAddedToChartMessage);
    cy.clickElement(AMAZON_CONSTATNS.amazonProccedToCheckoutBtn);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonSignInHeader);
    cy.clickElement(AMAZON_CONSTATNS.amazonContinueBtn);
    cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonSignInErrorText);
    cy.clickElement(AMAZON_CONSTATNS.amazonSignInUserNamelBox);
    cy.enterText(
      AMAZON_CONSTATNS.amazonSignInUserNamelBox,
      AMAZON_CONSTATNS.amazonEmailAddress
    );
    cy.clickElement(AMAZON_CONSTATNS.amazonContinueBtn);
    cy.clickElement(AMAZON_CONSTATNS.amazonSignInBtn);
    cy.elementIsVisibleByText(AMAZON_CONSTATNS.amazonPasswordErrorText);
    cy.clickElement(AMAZON_CONSTATNS.amazonSignInPasswordBox);
    cy.enterText(
      AMAZON_CONSTATNS.amazonSignInPasswordBox,
      AMAZON_CONSTATNS.amazonEmailPassword
    );
    cy.clickElement(AMAZON_CONSTATNS.amazonSignInBtn);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonAuthErrorMessage);
    cy.clickElement(AMAZON_CONSTATNS.amazonLogoLink);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonLogo);
    cy.elementIsVisible(AMAZON_CONSTATNS.amazonGreetingMessageText);
    cy.verifyElementText(
      AMAZON_CONSTATNS.amazonChartCount,
      NUMERICAL_CONSTANTS.one
    );
  });
});
