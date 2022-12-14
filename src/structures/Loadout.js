const Equipment = require('./Equipment');
const Item = require('./Item');

class Loadout {
  constructor(data) {
    this.alex = new Equipment(data[0]);
    this.chang = new Equipment(data[1]);
    this.lisa = new Equipment(data[2]);
    this.rachel = new Equipment(data[3]);
    this.hans = new Equipment(data[4]);
    this.nina = new Equipment(data[5]);
    this.experiment = data[6] ? new Item({ id: data[6][0] }) : null;
    this.yeti = data[7] ? new Item({ id: data[7][0] }) : null;
    this.werewolf = data[8] ? new Item({ id: data[8][0] }) : null;
    this.vampire = data[9] ? new Item({ id: data[9][0] }) : null;
    this.spider = data[10] ? new Item({ id: data[10][0] }) : null;
  }
}

module.exports = Loadout;
