#!/usr/bin/env node

const path = require('node:path');
const fs = require('node:fs');
const yargs = require('yargs/yargs');

const {hideBin} = require('yargs/helpers');

const argv = yargs(hideBin(process.argv));
const fileName = argv.argv._[0] || 'logger';
const resultGamePath = path.join(__dirname, `${fileName}`);

let data = '';

fs.createReadStream(resultGamePath)
.setEncoding('utf-8')
.on('data', (chunk) => {
    data += chunk;
})
.on('end', () => {
    const result = JSON.parse(data);
    const {totalGames, win, louse} = result
    percentageOfGamesWon = Math.ceil((win / totalGames) * 100)
    console.log(`
      Всего партий: ${totalGames}
      Количество побед: ${win}
      Количество поражений: ${louse}
      Процентное соотношение выигранных партий: ${percentageOfGamesWon}%
    `)
})
