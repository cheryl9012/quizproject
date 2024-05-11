#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: " Which is the biggest Ocean in the world?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
    },
    {
        name: "question_2",
        type: "list",
        message: "How many continents are there?",
        choices: [4, 5, 6, 7]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which is the Largest Continent on Earth?",
        choices: ["Asia", "Africa", "Europe", "Australia"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which Continent has the most countries?",
        choices: ["Europe", "Asia", "Africa", "Oceania"]
    },
    {
        name: "question_5",
        type: "list",
        message: "How many oceans are there?",
        choices: [5, 7, 6, 4]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Pacific Ocean":
        console.log("1. Right!");
        ++score;
        break;
    default:
        console.log("1. Wrong!");
}
switch (quiz.question_2) {
    case 7:
        console.log("2. Right!");
        ++score;
        break;
    default:
        console.log("2. Wrong!");
}
switch (quiz.question_3) {
    case "Asia":
        console.log("3. Right!");
        ++score;
        break;
    default:
        console.log("3. Wrong!");
}
switch (quiz.question_4) {
    case "Africa":
        console.log("4. Right!");
        ++score;
        break;
    default:
        console.log("4. Wrong!");
}
switch (quiz.question_5) {
    case 5:
        console.log("5. Right!");
        ++score;
        break;
    default:
        console.log("5. Wrong!");
}
console.log(`Score : ${score}`);
