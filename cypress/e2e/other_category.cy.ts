describe("The other category Test", () => {
  it("Checks other category", () => {
    cy.visit("/");

    cy.contains("GET STARTED").click();
    cy.contains("Other").click();
  });
});
