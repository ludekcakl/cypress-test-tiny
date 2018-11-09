describe("Cypress.Log", function() {
  it("should not fail", function() {
    Cypress.log({ name: "foo", message: ["foo"] });
  });
});
