import * as authUser from "../fixtures/auth-user.json";
describe("The Login Test", () => {
  it("Should login with email and password", () => {
    const {name, email, password} = authUser;
    cy.visit("/");

    cy.contains("login").click();
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("button[type=submit]").click();
    cy.contains(name).should("exist");
  });
});
