#! /usr/bin/evn node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 7 + 1);
const guess = await inquirer.prompt ([
    {
        name : "userguessednumber",
        type : "number",
        message : "please guess a number between 1-7"
    }
])

if (guess.userguessednumber === randomNumber){
    console.log("congratulation! you guessed right number🥳");
    
}else{
    console.log("you guess wrong number😞");
    
}

