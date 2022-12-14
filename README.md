## About
deceit.js is a [Node.js](https://nodejs.org) module to interact with the [Deceit](https://playdeceit.com/) API.

## Installation

**Latest version of Node.js required**
```sh-session
npm install deceit.js
```

## Example usage

Log the username and level of the user with id `#3290992`:
```javascript
const Deceit = require('deceit.js');

Deceit.users.fetch('3290992').then(user => console.log(user.username, user.level));
```

Log ticket highscores:
```javascript
const Deceit = require('deceit.js');

Deceit.highscores.fetch('tickets').then(console.log);
```

Log servers informations:
```javascript
const Deceit = require('deceit.js');

Deceit.parties.fetch().then(party => console.log(party.availableServers));
```
