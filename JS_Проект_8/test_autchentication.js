const assert = require(`assert`);
const webdriver = require(`selenium-webdriver`);
const chromeBrowser = require(`selenium-webdriver/chrome`);
const chromeDriver = require(`chromedriver`);
// const { Session, WebDriver } = require("selenium-webdriver");


// Добавяне на функции за работа в тестовата среда
// const { describe } = require(`mocha`);
// const { doesNotMatch } = require("assert");
const LoginPage = require("../pages/LoginPage");
// const { elementIsDisabled } = require("selenium-webdriver/lib/until");
// const { userInfo } = require("os");

let driverSession = null;

describe.skip('Test Wordpress - authentication feature', function() {

    // Пример за употреба на Promise обекта в JS
    // it("Execute assert after specific time frame", async function() {

    //     const stringResult = await new LoginPage(driverSession).sleep();
    //     console.log(stringResult);
    //     assert.equal(1,2, "Expected result 1");
    // }).timeout(0);
    beforeEach(() => {

        const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
        const options = new chromeBrowser.Options();
        driverSession = chromeBrowser.Driver.createSession(options, service);
    });

    afterEach(() => {
        driverSession.quit();
    });

    it("Try to log in as Admin user - correctly", async function() {

        await new LoginPage(driverSession).login("admin", "АДМИНСКАТА ПАРОЛА");

        const element       = await driverSession.findElement(webdriver.By.xpath(`//*[@id="wpbody-content"]/div[3]/h1`));
        const elementText   = await element.getText();

        assert.equal(elementText, 'Dashboard', "Expected end page is Dashboard");
    }).timeout(0);

    it("Try to log in as Admin user - icorrect password", async function() {

        await new LoginPage(driverSession).login("admin", "incorrect");

        const element       = await driverSession.findElement(webdriver.By.id(`login_error`));
        const elementText   = await element.getText();

        const assertMessage = `Error: The password you entered for the username admin is incorrect. Lost your password?`;
        assert.equal(elementText, assertMessage, "Expected error message for incorrect password");

    }).timeout(0);


    it("Try to log in as Admin user - incorrect username", async function() {

        const LOGIN_USERNAME = "incorrect_user";
        const LOGIN_PASSWORD = "incorrect";
        await new LoginPage(driverSession).login(LOGIN_USERNAME, LOGIN_PASSWORD);

        const element       = await driverSession.findElement(webdriver.By.id(`login_error`));
        const elementText   = await element.getText();

        const assertMessage = `Error: The username ${LOGIN_USERNAME} is not registered on this site. If you are unsure of your username, try your email address instead.`;
        assert.equal(elementText, assertMessage, "Expected error message for incorrect password");
    }).timeout(0);

});

// // Настройки на Chrome browser-a
// // service = пазят всички настройки на browser-a
// const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
// // options = съдържа информация за cookies и пр.
// const options = new chromeBrowser.Options();


// // Browser-нa сесия (създава нова сесия)
// const driverSession = chromeBrowser.Driver.createSession(options, service);


// describe(`Test Wordpress - authentication feature`, function() {
//     it(`Try to log in as Admin user - correctly`, async function() {

//     assert.equal(10, 10, `Values is not equal`);
//     await driverSession.get(`http://localhost/wordpress/wp_login.php`);
//     assert.equal(10, 100, `Values is not equal`);
        

//     // Navigation 
//     // Selection / Find
//      // Executors 

//     });

//     it(`Try to log in as Subscriber user - correctly`, function() {

//         new LoginPage(driverSession).login(`admin`, `АДМИНСКАТА ПАРОЛА`, async function(){

//             const element = await driverSession.findElement(WebDriver.by.xpath(`//*[@id="wpbody-content"]/ div[3]/h1`))
//             const elementText = await element.getText();
//                 console.log(elementText);
//             });
//         });

//     });

//     it('should take less than 500ms', function(done){
//         this.timeout(500);
//         setTimeout(done, 300);
//       });

//     it(`Try to log in with incorrect credentials - username`, function() {

//     });

//     it(`Try to log in with incorrect credentials - password`, function() {

//     });



// // Намиране на път до файл ... 
// // console.log(chromeDriver.path);
