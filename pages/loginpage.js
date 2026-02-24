class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.username ="//input[@id='p_user_name']"
        this.password = "//input[@name='p_user_pass']"
        this.loginButton = "//button[normalize-space()='Log In']"
    }

    async loginToApplication()
    {
        await this.page.fill(this.username,"025131",{delay:100})
        await this.page.fill(this.password,"Raise@1234#",{delay:100})
        await this.page.click(this.loginButton)
        // await this.page.pause()
    }
}
module.exports = LoginPage;