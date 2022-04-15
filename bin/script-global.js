#!/usr/bin/env node

var myLibrary = require('../lib/index');

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

var opts = ['-u', '-e']

if (args[0] == '--help' || args[0] == '-h') {
    myLibrary.help();
} else if (opts.includes(args[0]) && args[1] != undefined) {
    // Retrieve the first argument
    var name = args[1].charAt(0).toLocaleUpperCase() + args[1].slice(1);
    if (isNaN(parseInt(args[1]))) {
        toFindCommand(args)
    } else {
        console.log("\x1b[31m", 'Name must be a string!')
    }
} else {
    console.log('Command not exist, to see in solid use the -h (or --help)\n')
}


function toFindCommand(args) {
    switch (args[0]) {
        case '-u':
            myLibrary.createUsecase(name);
            break;
        case '-e':
            if (args.length > 2) {
                myLibrary.createEntities(name, args.splice(2, args.length))
            } else {
                console.log("\x1b[31m", 'Must contain at least 1 argument')
            }
            break;
        default:
            break;
    }
}