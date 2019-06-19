
var Objects2 = require('../utils/ExcelReader.js');

describe("Locator testing By Model",function(){


   it("Automating User Reg form",function(){

       browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

       element(by.model("Auth.user.name")).sendKeys(Objects2.desired_value);
       element(by.model("Auth.user.password")).sendKeys("password");
       element(by.model("model[options.key]")).sendKeys("Raman");

       element(by.buttonText("Login")).click();

       browser.sleep(2000);
       element(by.className("ng-scope")).getText().then(function(text){

           console.log(text);
           expect(text).toContain("Home");

       });

   }) ;


});