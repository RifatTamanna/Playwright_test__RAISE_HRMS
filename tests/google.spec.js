const {test, expect} = require('@playwright/test')

test("Verify Google Title", async function ({page}) {

    await page.goto("https://www.google.com/")
    const url=await page.url()
    console.log("This is "+url)

    const searchbox =page.getByRole("combobox")
    await searchbox.fill("Playwright")
    await searchbox.press("Enter")

    const title= await page.title()
    console.log("This is "+title)
    await expect(page).toHaveTitle(/Playwright/)

})