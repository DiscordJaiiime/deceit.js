const Highscore = require('../structures/Highscore');
const ELOHighscore = require('../structures/ELOHighscore');
const TicketHighscore = require('../structures/TicketHighscore');
const ReputationHighscore = require('../structures/ReputationHighscore');
const Endpoints = require('../util/Endpoints');
const fetch = require('node-fetch');

class Highscores {

 /**
  * Fetch an highscores
  * @param {string} type The type of the highscores
  * @returns {Promise<Object[]>}
  */
  static async fetch(type) {
    const request = await fetch(`${Endpoints.HIGHSCORES}?type=${type === 'tickets' ? 'xp' : type}`);
    const response = await request.json();
    if(request.status !== 200) throw new Error(response.error);

    const HighscoreType
      = type === 'elo' ? ELOHighscore
      : type === 'tickets' ? TicketHighscore
      : type === 'rep' ? ReputationHighscore
      : Highscore;

    return new HighscoreType({ entries: response }, Highscores);
  }

}

module.exports = Highscores;
