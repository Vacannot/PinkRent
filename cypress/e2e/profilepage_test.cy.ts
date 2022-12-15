import * as authUser from "../fixtures/auth-user.json";
describe("The profile page Test", () => {
  it("Checks for profilepage", () => {
    const {email, password, name} = authUser;
    cy.visit("/");
    cy.contains("login").click();
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("button[type=submit]").click();
    cy.contains(name).should("exist");
    cy.contains(name).click();
    cy.contains("Name:").should("exist");
    cy.contains("Email:").should("exist");
  });
});
