var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
    framework: 'jasmine2',

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/spec.js'],
    capabilities : {
        browserName: 'chrome'
        //browserName: 'firefox' 
    },
    suites: {

			smoke: ['./smoke/!*.spec.js'],
			regression: ['./regression/!*.spec.js'],
			functional: ['./functional/!*.spec.js'],
			all: ['./!*!/!*.spec.js'],
			selected: ['./functional/addcustomer.spec.js','./regression/openaccount.spec.js'],


    },
    // Options to be passed to Jasmine.
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'Reports/screenshots'
        }).getJasmine2Reporter());
     },
     onComplete:function(){

        var sys = require('util');
        var exec = require('child_process').exec;
        function puts (error, stdout, stderr){
            sys.puts(stdout) }
        exec ("node mail.js", puts);
     }
   
 };