describe('Enter GURU99 Name', function() {  
   
    it('should add a Name as GURU99', function() {
    browser.get('https://angularjs.org');
    browser.get('https://google.com');
    element(by.model('yourName')).sendKeys('GURU99');
    browser.sleep(5000);
    element(by.binding("yourName")).getText().then(function(text){

      console.log(Text);
    });
     });
   });

describe('Protractor Demo App', function(){
       it('get title test', function(){
         browser.get('http://juliemr.github.io/protractor-demo/');
         //expect(browser.getTitle()).toEqual('http://juliemr.github.io/protractor-demo/');
         expect(browser.getTitle()).toEqual('Super Calculator');
         browser.driver.sleep(3000);  
        element(by.model('first')).sendKeys('Selenium');
        browser.driver.sleep(3000); 
       });
   });

describe('Multiple elements', function(){
    it('should add one and two', function(){
      browser.get('http://juliemr.github.io/protractor-demo/');      
      browser.driver.sleep(3000);  
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(3);
      element(by.id('gobutton')).click();
      browser.driver.sleep(5000);
      expect(element(by.className('ng-binding')).getText()).toEqual('4');
     browser.driver.sleep(3000); 
    });
});

describe('Handling Multiple scenarios', function(){

    var firstNumer = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    var history =element.all(by.repeater('result in memory'))

    beforeEach(() => {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    //tc1
    it('get title test (Multiple)', function(){
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.driver.sleep(3000);  
      });
    //tc2
    it('should add one and two (Multiple)', function(){          
        
      firstNumer.sendKeys(1);
      secondNumber.sendKeys(3);
      goButton.click();
      browser.driver.sleep(5000);
      expect(result.getText()).toEqual('4');
     browser.driver.sleep(3000); 
    });
    //tc3
    it('should add four and six (Multiple)', function(){          
        
        firstNumer.sendKeys(4);
        secondNumber.sendKeys(6);
        goButton.click();
        browser.driver.sleep(5000);
        expect(result.getText()).toEqual('10');
       browser.driver.sleep(3000); 
      });
    // tc4
    it('should read value from element (Multiple)', function(){          
        
        firstNumer.sendKeys(4);
        expect (firstNumer.getAttribute('value')).toEqual('5');
       browser.driver.sleep(3000); 
      });

    function add (a,b){
        firstNumer.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }
    //tc5
    it('Check History', function(){

        add(3,5);
        add(4,5);
        add(2,7);
        expect(history.count()).toEqual(3);
        add (4,6);
        add(9,100);
        expect(history.count()).toEqual(6);

    });
});            