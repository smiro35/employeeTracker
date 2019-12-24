var questions = [

    {
        message: "What would you like to do??",
        type: "list",
        name: "Todo",
        choices: ["Add", "View", "Update"],
        validate: validateName
    },



    {
        message: "On which table would you like to add??",
        type: "list",
        name: "Add",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },

    {
        message: "Which table would you like to view??",
        type: "list",
        name: "View",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },

    {
        message: "Which table would you like to update??",
        type: "list",
        name: "Update",
        choices: ["Department", "role", "Employee"],
        validate: validateName
    },




];


module.exports = questions