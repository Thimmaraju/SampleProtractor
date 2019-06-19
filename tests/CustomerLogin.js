
var SelectWrapper = require('../utils/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Automating Customer Login functionality",function(){


   it("Login to the Account",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

       element(by.partialButtonText("Customer")).click();

       mySelect.selectByText("Harry Potter");

       element(by.buttonText("Login")).click();

   }) ;


    it("Validate Deposits",function(){


        element(by.buttonText("Deposit")).click();
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();

        element(by.binding("message")).getText().then(function(text){

            console.log(text);

        });

        expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");

    }) ;


    it("Validate Withdrawl",function(){


        element(by.buttonText("Withdrawl")).click();
        element(by.model("amount")).sendKeys("1000");
        element(by.css(".btn.btn-default")).click();

        element(by.binding("message")).getText().then(function(text){

            console.log(text);

        });

        expect(element(by.binding("message")).getText()).toEqual("Transaction successful");

    }) ;



});
