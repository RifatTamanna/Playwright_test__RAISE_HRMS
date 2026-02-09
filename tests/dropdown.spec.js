const {test, expect} = require('@playwright/test');

test('Select Values from Dropdown', async function ({page}) {
    await page.goto("https://dev.cnsbd.com:5050/")

    await page.getByPlaceholder("Enter username").fill("025131",{delay:100})

    await page.locator("//input[@name='p_user_pass']").fill("Raise@1234#",{delay:100})

    await page.locator("//button[normalize-space()='Log In']").click()

    //await page.waitForTimeout(5000) 

    await page.locator('nav.navbar.navbar-default').click()

    await page.getByText('Bangla').click()

    await page.waitForTimeout(8000)

    await page.locator('nav.navbar.navbar-default').click()

    await page.getByText('English').click()

    // await page.waitForTimeout(5000)

    // const dropdown = await page.locator('nav.navbar.navbar-default').textContent()

    // console.log("All Dropdown Values: " + dropdown);

    let state=await page.$('nav.navbar.navbar-default')

    let allElements=await state.$$('li')

    let ddValues=false

    for(let i=0; i<allElements.length; i++){

        let element=allElements[i]
        let value=await element.textContent()
        console.log("Dropdown Values: " + value)
        
        if(value.includes("Bangla"))
            {
            ddValues=true
            break
        }
        console.log("Bangla is present in the dropdown", value);

        
    }
    await expect(ddValues).toBeTruthy()
})