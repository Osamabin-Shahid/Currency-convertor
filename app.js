#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta.bold("================>>Welcome to Currency Convertor<<================="));
const currency = {
    USD: 1,
    INR: 83.4,
    JPY: 158.09,
    SGD: 1.36,
    CNY: 7.25,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: chalk.bold.yellow("Enter From Currency"),
        type: "list",
        choices: ["USD", "INR", "JPY", "SGD", "CNY"],
    },
    {
        name: "to",
        message: chalk.yellow.bold("Enter To Currency"),
        type: "list",
        choices: ["USD", "INR", "JPY", "SGD", "CNY"],
    },
    {
        name: "amount",
        message: chalk.green.italic("Enter the amount"),
        type: "number",
    },
]);
let fromAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let amount = user_input.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.red.bold(convertedAmount));
