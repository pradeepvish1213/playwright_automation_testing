const {chromium} = require('playwright');
(async () => {
    const browser = await chromium.launch({headless: false, slowMo: 100}) // // Test start running with browser
    // const browser = await chromium.launch() // Test start running without browser
    const context = await browser.newContext()
    const page = await context.newPage()

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://dev.dataseers.in/login');
    console.log('Logged in form Started')
    await page.fill('#normal_login_email', 'pvishwakarma@dataseers.in');
    await page.fill('#normal_login_password', 'PASSWORD');
    await page.click('button.ant-btn.login-form-button.text-white.ant-btn-block');

    await navigationPromise
    console.log('Logged in Success')
    await page.waitForSelector('div#root section.ant-layout.ant-layout-has-sider  > aside.ant-layout-sider.ant-layout-sider-dark aside.ant-layout-sider.ant-layout-sider-dark li:nth-child(2)');
    await page.click('div#root section.ant-layout.ant-layout-has-sider  > aside.ant-layout-sider.ant-layout-sider-dark aside.ant-layout-sider.ant-layout-sider-dark li:nth-child(2)');

    await page.waitForSelector('div#root section.ant-layout.ant-layout-has-sider  > aside.ant-layout-sider.ant-layout-sider-dark aside.ant-layout-sider.ant-layout-sider-dark li:nth-child(2) ul.ant-menu.ant-menu-sub.ant-menu-inline');
    await page.click('div#root section.ant-layout.ant-layout-has-sider  > aside.ant-layout-sider.ant-layout-sider-dark aside.ant-layout-sider.ant-layout-sider-dark li:nth-child(2)  ul.ant-menu.ant-menu-sub.ant-menu-inline > li:nth-child(2)');

    await page.click('button[title="Add new user"]');
    await navigationPromise

    console.log('Add new user page - started for filling')
    await page.fill('input#add_user_first_name', 'xyz')
    await page.fill('input#add_user_last_name', 'Abc')
    await page.click('div#add_user_phone_code');
    await page.fill('input#add_user_phone_code', '91 - India')
    await page.fill('input#add_user_email', 'xyz.abc@dataseers.in')
    await page.fill('input#add_user_contact_number', '9876543210')
    await page.fill('input#add_user_password', 'Qwerty@12345')
    await page.fill('input#add_user_confirm_password', 'Qwerty@12345')
    await page.fill('input#add_user_confirm_password', 'Qwerty@12345')
    await page.click('div#add_user_role_id')
    await page.fill('input#add_user_role_id', 'Global Admin')
    await page.click('ul li[itemid="1"]');
    await page.click('div#add_user_report_group')
    await page.fill('input#add_user_report_group', 'Global reports')
    await page.keyboard.press('Tab')
    await page.click('div#add_user_program_group')
    await page.fill('input#add_user_program_group', 'Global programs')
    await page.keyboard.press('Enter')
    await page.click('button#add_user_email_notification')
    await page.click('button#add_user_is_active')
    await page.click('button#add_user_two_factor_auth_status')
    await page.click('//*[@id="root"]/section/section/main/div/div/div/form/div[5]/div/div/div/div/div/div/div/table/tbody/tr[3]/td[1]/span/label/span/input')
    await page.click('button#cluster-2');
    console.log('form filling completed')
    console.log('form Submitted')
    await page.click('button.ant-btn.m-t-10.ant-btn-primary[type="submit"]')

    await page.waitForSelector('.ant-message span')
    let message = await page.innerText('.ant-message')

    console.info('User Management getting response- :',message);

    await page.screenshot({ path: `example.png` });
    await browser.close()
})()
