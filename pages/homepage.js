const {expect}= require('@playwright/test');
class HomePage
{
    constructor(page)
    {
        this.page=page;
        this.homepageHeader=page.locator("//a[@role='button']") //homepage header locator
        this.avatar=page.locator("//img[@alt='avatar']");  //logout menu option
        this.logoutoption=page.getByRole('link', { name: 'Logout' }) //logout button
    }

    async verifyHomepage()
    {
        await expect(this.homepageHeader).toBeVisible() //assertion to check homepage header is visible or not
    }

    async logoutFromApplication()
    {
        await this.avatar.click()
        await this.logoutoption.click()
        await this.page.pause()
        await expect(this.page).toHaveURL("https://dev.cnsbd.com:5050/") //assertion to check user is navigated to login page after logout
    }
}

module.exports=HomePage;