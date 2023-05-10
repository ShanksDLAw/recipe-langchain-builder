//import { OpenAI } from "langchain";
//import { PromptTemplate } from "langchain";
//import { LLMChain } from "langchain/chains";
const { OpenAI, LLMChain, PromptTemplate} = require('langchain'); // Initialising Langchain using Javascript
require('dotenv').config(); // Declaring/ initialising API key
const model = new OpenAI({temperature: 0.98}); //setting the model 
const api = process.env.OPENAI_API_KEY; // using the APi key
const template = "Write me a detailed recipe"; //Declaring a 'template'
//arranging the prompt template
const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["recipe"],

});
const chain = new LLMChain({ llm: model, prompt: prompt });
/* 
const readlineSync = require('readline-sync');
const userInput = readlineSync.question('Enter recipe name: ');

chain.call({ inputs: { recipe: userInput } }).then((output) => {
    console.log(output.choices[0].text);
}).catch((error) => {
    console.error(error);
});
**/
const readlineSync = require('readline-sync');

const userInput = readlineSync.question('Enter a product: ');

chain.call({product: userInput}).then((res) => {
  console.log(res);
}).catch((error) => {
  console.error(error);
});
