const fs = require('node:fs');

const randomNumber = (min, max) => Math.floor(Math.random()*(max-min) + min);

const setResultGame = (resultGamePath, result) => {
  fs.readFile(resultGamePath, 'utf-8', (err, data) => {
    if (err) throw Error(err);
    dataFile = JSON.parse(data);
    dataFile[result] += 1;
    dataFile.totalGames += 1;
    fs.writeFile(resultGamePath, JSON.stringify(dataFile), (err) => {
      if (err) throw Error(err);
    })
  })
}

module.exports = {
  randomNumber,
  setResultGame,
}