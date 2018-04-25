"use strict"
const Controller = require('./controller.js');

class View {
    static showSuccessMessage(statusMessage) {
        console.log(statusMessage);
    }

    static showErrorMessage(statusMessage) {
        console.log(statusMessage);
    }
}

module.exports = View;