'use strict';

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const chalk = require('chalk');
const moment = require('moment');

const customFormat = printf(options => {
    let log = chalk.bold.blue('======================================================================')+'\n'+
        'LEVEL          : '+(options.level.toUpperCase() == 'ERROR' ? chalk.bold.red(options.level.toUpperCase()) : chalk.bold.green(options.level.toUpperCase())) +'\n'+
        'IP             : '+chalk.bold.yellow(options.message.ip)+'\n'+
        'ENDPOINT       : '+chalk.bold.yellow(options.message.endpoint)+'\n'+
        'METHOD         : '+chalk.bold.yellow(options.message.method)+'\n'+
        'RESPONSE TIME  : '+chalk.bold.yellow(options.message.responseTime)+'\n'+
        'DATE           : '+chalk.bold.yellow(moment().format())+'\n'+
        chalk.cyan('============================= PARAMS =================================')+'\n'+
        JSON.stringify(options.message.params)+'\n'+
        chalk.cyan('============================ MESSAGE =================================')+'\n'+
        (JSON.stringify(options.message.results))+'\n'+
        chalk.bold.blue('======================================================================');
    
    return log;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        customFormat
    ),
    transports: [new transports.Console()]
})

module.exports = logger;