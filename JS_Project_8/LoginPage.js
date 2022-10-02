const webdriver     = require('selenium-webdriver');

module.exports = class LoginPage {

    constructor(driver) {
        this.driverSession = driver;
    }

    sleep() {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // бавим се и вършим някаква работа
                resolve("Sample string");
            }, 10000);
        })
    }

    loginAsAdmin() {
        return this.login("admin", "АДМИНСКАТА ПАРОЛА!!!");
    }

    login($username, $password) {

        return new Promise((resolve, reject) => {

            const promiseToGetWpLogin = this.driverSession.get(`http://localhost:1337/wordpress/wp-login.php`);

            promiseToGetWpLogin.then(() => {
    
                const domElement = this.driverSession.findElement(webdriver.By.id("user_login"));
    
                domElement.then(() => {
    
                    domElement.sendKeys($username).then(() => {
    
                        const passwordDomElement = this.driverSession.findElement(webdriver.By.id("user_pass"));
                        passwordDomElement.then(() => {
                            passwordDomElement.sendKeys($password).then(() => {
    
                                const submitDomElement = this.driverSession.findElement(webdriver.By.id('wp-submit'));
                                submitDomElement.click().then(() => {
                                    resolve();
                                });
                            });
                        })
                    })
                })
            });
        });
    }
}



// const webdriver = require(`selenium-webdriver`);


// module.exports = class LoginPage {

//     constructor(driver) {
//         this.driverSession = driver;
//     }

//     login($username, $password, afterLoginFunction) {
        
//         // Нашият тест
//         const promiseToGetWpLogin = this.driverSession.get(`http://localhost/wordpress/wp_login.php`);

//         promiseToGetWpLogin.then(() => {

//     // Откриване на INPUT - user_login  
//         const domElement = this.driverSession.findElement(webdriver.By.id(`user_login`));
        
//         domElement.then(() => {
//             domElement.sendKeys($username).then(() =>
//             {
//      // Откриване на INPUT - user_password
//                 const passwordDomElement = this.driverSession.findElement(webdriver.By.id(`user_pass`));
//                 passwordDomElement.then(() => {
//                     passwordDomElement.sendKeys($password).then(() => {
//                         const submitDomElement = this.driverSession.findElement(webdriver.By.id(`wp-submit`));
//                         submitDomlement.click().then(() => {
//                             afterLoginFunction();
//                         });
//                     });
//                 })       
//             })
//         })
//      });
//     }
// } 
// // const LoginPage = new LoginPage();
