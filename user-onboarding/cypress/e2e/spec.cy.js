describe('empty spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

const name = () => cy.get("input[name=first_name")
const last_name = () => cy.get("input[name=last_name")
const email = () => cy.get("input[name=email")
const password = () => cy.get("input[name=password")
const tos = () => cy.get("input[name=tos")
const submit = () => cy.get("button")

it( "sanity check", () => {
  expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict ===
    expect({}).not.to.equal({}); // strict === passes!
    expect({}).to.eql({}); // ==
})

describe("getter works and can insert text in elements", () => {
  
  it("getters work", () => {
    name().should("exist");
    email().should("exist");
    password().should("exist");
    tos().should("exist");})

  it("can insert text", () => {
    name().should("have.value", "")
    .type("Jason")
    .should("have.value", "Jason");

    email().should("have.value", "")
    .type("jdecker227@gmail.com")
    .should("have.value", "jdecker227@gmail.com");

    password().should("have.value", "")
    .type("asdfghjk")
    .should("have.value", "asdfghjk")
  })

  it("tos can be checked", () => {
    tos().click()
    .should("be.checked");
  })
})

describe("adding a new user", () => {

  it("adds a new user when all fields are filled", () => {
    name().type("Jason");
    last_name().type("Decker");
    password().type("jfjfjfj");
    email().type("jdecker117@gmail.com");
    tos().click();
    submit().click();

    cy.contains("Jason")
    cy.contains("Decker")
    cy.contains("jdecker117@gmail.com")

  })
})

describe("form validations works", () => {

  it("button disabled unless all fields filled ", () => {
    if(name().value === "" ||
    last_name().value === "" ||
    email().value === "" ||
    password().value <= 5 ||
    tos().checked === false){cy.get('.errors > div'.should('not.be.empty'))}
    
  })
})

})