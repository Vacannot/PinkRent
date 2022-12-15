import * as authUser from "../fixtures/auth-user.json";
describe("The Logout Test", () => {
  it("Should logout", () => {
    const {name} = authUser;
    cy.visit("/");

    cy.contains(name).click();
    cy.contains("Logout").click();
    cy.contains("login").should("exist");
  });
});
