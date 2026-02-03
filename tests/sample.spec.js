const {test, expect} = require('@playwright/test');

test("My first Test", async function ({page}) {
    
    expect(12).toBe(12);
})

test("My second Test", async function ({page}) {
    
    expect(2.0).toBe(2.0)
})

test("My third Test", async function ({page}) {
    
    expect("Rifat Tamanna").toContain("Rifat");
    expect(true).toBeTruthy()
})

test("My fourth Test", async function ({page}) {
    
    expect("Tamima Tarin").toContain("Tarin");
    expect(false).toBeFalsy()
})

test("My fifth Test", async function ({page}) {
    
    expect("Nourin Ahmed".includes("Ahmed")).toBeTruthy()
})