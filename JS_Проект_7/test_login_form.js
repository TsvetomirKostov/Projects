const webdriver = require(`selenium-webdriver`);
const chromeBrowser = require(`selenium-webdriver/chrome`);
const chromeDriver = require(`chromedriver`);
const { Session } = require("selenium-webdriver");


// Намиране на път до файл ... 
// console.log(chromeDriver.path);

// Настройки на Chrome browser-a
// service = пазят всички настройки на browser-a
const service = new chromeBrowser.ServiceBuilder(chromeDriver.path).build();
// options = съдържа информация за cookies и пр.
const options = new chromeBrowser.Options();


// Browser-нa сесия (създава нова сесия)
const driverSession = chromeBrowser.Driver.createSession(options, service);

// Нашият тест 
//*
driverSession.get(`http://localhost/wordpress/wp-login.php`);


// Откриване на INPUT - user_login 
const domElementSelector = webdriver.By.id(`user_login`);
const domElement = driverSession.findElement(domElementSelector);
domElement.sendKeys(`a`, `d`, `m`, `i`, `n`);

// Откриване на INPUT - user_password 
const passwordDomElement = driverSession.findElement(webdriver.By.id(`user_pass`));
passwordDomElement.sendKeys(*//да се сложи админската паролата тук);


const submitDomElement = driverSession.findElement(webdriver.By.id(`wp-submit`));
submitDomElement.click();


// Navigation 
// Selection / Find
// Executors