
//import {getExcelData} from '../utils/ExcelReader';
const myModule = require('../utils/ExcelReader');
var dataarr = myModule.getExcelData();
dataarr.forEach(function(element, key) {
	console.log(element);console.log(key);
});


describe('Angular Home Test', function() {

  
  it("excel",function()
  {


	  browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");

	  element(by.model("Auth.user.name")).sendKeys('hyghiugt');
	  element(by.model("Auth.user.password")).sendKeys("password");

	  element(by.model("model[options.key]")).sendKeys("Raman");

	  element(by.ngClick('Auth.login()')).click();
		browser.sleep(2000);

});
	  
  });

