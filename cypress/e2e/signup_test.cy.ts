import * as authUser from "../fixtures/auth-user.json";
describe("The Signup Test", () => {
  it("Should register a new user with email and password", () => {
    const {name, email, password} = authUser;
    cy.visit("/");

    cy.contains("login").click();
    cy.contains("Or sign up").click();
    cy.get("input[type=text]").type(name);
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(password);
    cy.get("button[type=submit]").click();
  });
});
