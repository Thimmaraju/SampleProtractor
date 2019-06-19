var winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
    transports: [
      new winston.transports.Console(),      
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });


const category1 = winston.loggers.get('category1');
const category2 = winston.loggers.get('category2');
 
category1.info('logging to file and console transports');
category2.info('logging to http transport');


module.exports = winston;

 