"use strict"
const Controller = require('./controller.js');

const argv = process.argv;
const input = {
    argv1: argv[3],
    argv2: argv[4],
    argv3: argv[5],
    argv4: argv[6]
};

switch(argv[2]) {
    case 'addContact':
    let company = [];
    for (let i = 6; i < argv.length; i++) {
        company.push(argv[i])
    }
    let companies = company.join(' ');
    Controller.addContact(input.argv1, input.argv2, input.argv3, companies);
    break;
    case 'findBy':
    Controller.findBy(input.argv1, input.argv2);
    break;
}
