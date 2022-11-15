#!/usr/bin/env node

const path = require('node:path');
const fs = require('node:fs');
const readline = require('node:readline');
const yargs = require('yargs/yargs');
const { randomNumber, setResultGame } = require('./helpers');

const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv));
const fileName = argv.argv._[0] || 'logger';
const resultGamePath = path.join(__dirname, `${fileName}.json`)

const startData = {
  totalGames: 0,
  win: 0,
  louse: 0
}

fs.writeFile(resultGamePath, JSON.stringify(startData), (err) => {
  if (err) throw Error(err);
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

console.log('Орел или решка? Орел - 1, Решка - 2');

rl.on('line', (line) => {
    const number = randomNumber(1, 3)
    const inputNum = +line.trim();

    if (inputNum === number) {
      setResultGame(resultGamePath, 'win')
      console.log('You win!');
    } else {
      setResultGame(resultGamePath, 'louse')
      console.log('You lose!')
    }

    console.log('Орел или решка? Орел - 1, Решка - 2');

}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
  
