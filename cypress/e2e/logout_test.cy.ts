import * as authUser from "../fixtures/auth-user.json";
describe("The Logout Test", () => {
  it("Should logout", () => {
    const {email, password, name} = authUser;
    cy.visit("/");
    cy.contains("login").click();
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("button[type=submit]").click();
    cy.contains(name).should("exist");
    cy.contains(name).click();
    cy.contains("Logout").click();
    cy.contains("login").should("exist");
  });
});
