const {test, expect} = require('@playwright/test');
const LoginPage=require("../pages/loginpage"); //importing the login page class from pages folder
const HomePage=require("../pages/homepage") //importing the homepage class from pages folder

test("Login To Application using POM", async ({page}) => {

    await page.goto("https://dev.cnsbd.com:5050/")
    
    const loginPage = new LoginPage(page)
    await loginPage.loginToApplication()

    const  homepage = new HomePage(page)
    await homepage.verifyHomepage()
    await homepage.logoutFromApplication()
})