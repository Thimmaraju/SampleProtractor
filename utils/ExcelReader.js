var XLSX = require('xlsx');
exports.getExcelData = function(){
var workbook = XLSX.readFile('D:/ProtractorTests/Test.xlsx');

var first_sheet_name = workbook.SheetNames[0];

//var first_sheet_name = "LoginTest";

var address_of_cell = 'A2';

var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];

/* Get the value */
var desired_value = desired_cell.v;

var mapusername = new Map();
var mappassword = new Map();
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) { /* iterate through sheets */
    var worksheet = workbook.Sheets[y];
    for (z in worksheet) {
        /* all keys that do not begin with "!" correspond to cell addresses */
        if(z[0] === '!') continue;
        if(z.includes('A'))
        mapusername.set(JSON.stringify(worksheet[z].v));
        if(z.includes('B'))
        mappassword.set(JSON.stringify(worksheet[z].v));
       
    }
});
var result = new Map(function*() {yeild*mapusername;}(), function*() {yeild*mappassword;}());
console.log(result);
return result;
};

