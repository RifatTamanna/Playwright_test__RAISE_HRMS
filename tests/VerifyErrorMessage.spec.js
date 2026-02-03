const {test,expect}=require("@playwright/test")

test("Verify Error Message",async function({page}){

    await page.goto("https://dev.cnsbd.com:5050/")
 
    await page.getByPlaceholder("Enter username").fill("025131")

    await page.locator("//input[@name='p_user_pass']").fill("gagdrasgt")

    await page.locator("//button[normalize-space()='Log In']").click()

    await page.waitForTimeout(2000)
    
    const errormessage=await page.getByRole('alert').textContent()
    console.log("Error Message is "+errormessage)

    expect(errormessage.includes("INVALID")).toBeTruthy()

})