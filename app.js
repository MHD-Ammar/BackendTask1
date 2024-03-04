'use strict';
const yargs = require("yargs");
const data10 = require("./data10.js");
yargs.command({
    command: "add",
    describe: "To add an item",
    builder: {
        fname: {
            describe: "this is the first name",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "this is the lst name sescription in add command",
            demandOption: true,
            type: "string",
        },
        id: {
            describe: "This is the Id",
            demandOption: true,
            type: "string",
        },
        age: {
            describe: " This is the Age",
            demandOption: true,
            type: "Int"
        },
        city: {
            describe: "This is the city",
            demandOption: true,
            type: "string",
        },
    },
    handler: (x) => {
        data10.addPerson(x.fname, x.lname, x.id, x.age, x.city);
    }


})

yargs.command({
    command: "delete",
    describe: "To delet Item by Id",
    handler: (x) => {
        data10.del(x.id)
    }
})
yargs.command({
    command: "read",
    describe: "used to read data by ID",
    builder: {
        id: {
            describe: "This is id describe in read command",
            demandOption: true,
        }
    },
    handler: (x) => {
        data10.readData(x.id);
    }
})
yargs.command({
    command: "list",
    describe: "used for show all the person name",
    handler: () => {
        data10.theList()
    }
})
yargs.parse();