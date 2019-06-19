var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
  //directConnect: true,
   framework: 'jasmine2',
   seleniumAddress: 'http://localhost:4723/wd/hub',
   specs: ['./tests/BankManagerLogin.js'],
   capabilities : {
    browserName: 'chrome',
    platformName: 'android',
    deviceName: 'd6f6d6e7'
    //browserName: 'firefox' 
    },
    // Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 90000
	},
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports/screenshots'
      }).getJasmine2Reporter());

   }
 };