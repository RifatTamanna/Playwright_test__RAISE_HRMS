const {test, expect} = require('@playwright/test');

test('Provident Fund', async function ({page}) {
    await page.goto("https://dev.cnsbd.com:5050/")

    await page.getByPlaceholder("Enter username").fill("025131",{delay:100})

    await page.locator("//input[@name='p_user_pass']").fill("Raise@1234#",{delay:100})
    await page.locator("//button[normalize-space()='Log In']").click()

    await page.waitForTimeout(5000)

    await page.locator("a.nav-link-label[data-toggle='dropdown']").nth(1).click()
    await page.locator("//p[normalize-space()='Provident Fund - PF']").click()

    expect(page.url()).toBe("https://dev.cnsbd.com:5050/pmis/provident-fund")

    await page.waitForTimeout(5000)

    await page.getByText('GPF Reports', { exact: true }).click()
    await page.locator("//select[@class='form-control text-uppercase']").click()
    await await page.locator('select').selectOption({ label: 'GPF STATEMENT' });

    await page.locator('#__BVID__19').click()
    await page.locator('#__BVID__19').selectOption('1')
    await page.locator('input[type="search"]').fill('025131')
    await page.getByRole('option', { name: '02513' }).click()
    await page.getByRole('button', { name: 'Generate Report' }).click()

    await page.waitForTimeout(5000)

})