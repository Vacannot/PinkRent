import * as authUser from "../fixtures/auth-user.json";
describe("The profile page Test", () => {
  it("Checks for profilepage", () => {
    const {name} = authUser;
    cy.visit("/");

    cy.contains(name).click();
    cy.contains("Name:").should("exist");
    cy.contains("Email:").should("exist");
  });
});
