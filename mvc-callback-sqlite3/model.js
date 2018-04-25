"use strict"
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

class Contacts {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.phone = options.phone;
        this.email = options.email;
        this.company = options.company;
    }
}

class Model {
    static showFile(cbData) {
        db.all(`SELECT * FROM Contacts;`, (err, rows) => {
            if (err) {
                cbData(err.message);
            } else {
                cbData(rows);
            }
        });
    }

    static contact(name, company, phone, email, cbContact) {
        Model.showFile((data) => {
            let arrEmail = [];
            for (let i = 0; i < data.length; i++) {
                arrEmail.push(data[i].email);
            }

            if (arrEmail.includes(email) === true) {
                cbContact(`Email sudah ada di database`);
            } else {
                let contact = new Contacts({
                    id: data[data.length - 1].id + 1,
                    name: name,
                    company: company,
                    phone: phone,
                    email: email
                });
                let queryContact = `INSERT INTO Contacts
                                    VALUES (NULL, '${contact.name}', '${contact.company}', '${contact.phone}', '${contact.email}');`;
                db.run(queryContact, (err) => {
                    if (err) {
                        cbContact(err.message, true);
                    } else {
                        cbContact(`Data baru berhasil dimasukkan dengan id ${contact.id}`, false);
                    }
                });
            }
        })
    }

    static findContact(input_column, input_value, cbFind) {
        db.all(`SELECT * FROM Contacts WHERE ${input_column} = '${input_value}';`, (err, rows) => {
            if (err) {
                cbFind(err.message, true);
            } else {
                cbFind(rows, false);
            }
        });
    }
}

module.exports = Model;