const{test, expect} =require('@playwright/test')

test("Verify Login", async function ({page}) {

    await page.goto("https://dev.cnsbd.com:5050/")

    await page.getByPlaceholder("Enter username").fill("025131",{delay:100})

    await page.locator("//input[@name='p_user_pass']").fill("Raise@1234#",{delay:100})

    await page.locator("//button[normalize-space()='Log In']").click()

    //await page.waitForTimeout(5000) 

    await expect(page).toHaveURL(/dashboard/)

    await page.locator("//img[@alt='avatar']").click()

    await page.getByRole('link', { name: 'Logout' }).click()

    //await page.waitForTimeout(3000)

    await expect(page).toHaveURL("https://dev.cnsbd.com:5050/")
})