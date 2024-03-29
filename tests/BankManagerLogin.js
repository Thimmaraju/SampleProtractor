
var SelectWrapper = require('../utils/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));
require('../utils/customlocators.js');

describe("Automating BankManager Login functionality",function(){




    it("Login to the Bank Manager Account",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        element(by.ngClick("manager()")).click();
        browser.sleep(2000);


    }) ;


    it("Validate Add Customer",function(){


        element(by.ngClick("addCust()")).click();
        element(by.model("fName")).sendKeys("Raman");
        element(by.model("lName")).sendKeys("Arora");
        element(by.model("postCd")).sendKeys("110095");
        element(by.css(".btn.btn-default")).click();
        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    }) ;

    it("Validate Open Account",function(){


        element(by.ngClick("openAccount()")).click();
        mySelect.selectByText("Raman Arora");
        currency.selectByText("Rupee");
        element(by.buttonText("Process")).click();


        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    }) ;

    it("Validate Customer Existance",function(){


        element(by.buttonText("Customers")).click();
        element(by.model("searchCustomer")).sendKeys("Raman");

        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));

        firstName.getText().then(function(text){


            console.log(text);
        });

        expect(firstName.getText()).toEqual("Raman");

        browser.sleep(2000);

    }) ;






});
