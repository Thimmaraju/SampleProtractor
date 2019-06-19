var logger = require('../utils/loggerHelper.js');

describe("Validating the Calculator app",function(){

   var title;

    beforeEach(function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        //logger.info('Navigating to the Website');
        logger.log({
            level: 'info',
            message: 'Navigating to the Website!'
          });
        title = browser.getTitle();
    });


    it("Validate exact title",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toEqual("Protractor practice website - Calculator");
            //logger.info('validating the exact title');
            logger.log({
                level: 'info',
                message: 'validating the exact title!'
              });
        });



        });


    it("Validate title should not match",function(){

        title.then(function(text){

            console.log(text);
            expect(title).not.toEqual("1Protractor practice website - Calculator");
            //logger.info('Validate title should not match');
            logger.log({
                level: 'info',
                message: 'Validate title should not match!'
              });
        });



    });


    it("Validate partial title match",function(){

        title.then(function(text){

            console.log(text);
            expect(title).toMatch("practice");
            logger.info('Validate partial title match');
        });



    });





});
