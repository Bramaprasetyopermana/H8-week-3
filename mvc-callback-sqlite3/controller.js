"use strict"
const Model = require('./model.js');
const View = require('./view.js');

class Controller {
    static addContact(name, phone, email, company) {
        Model.contact(name, company, phone, email, (statusMessage, err) => {
            if (err) {
                View.showErrorMessage(statusMessage);
            } else {
                View.showSuccessMessage(statusMessage);
            }
        });
    }

    static findBy(input_column, input_value) {
        Model.findContact(input_column, input_value, (statusMessage, err) => {
            if (err) {
                View.showErrorMessage(statusMessage);
            } else {
                View.showSuccessMessage(statusMessage[0]);
            }
        });
    }
}

module.exports = Controller;