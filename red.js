const Luxafor = require('node-luxafor');

const MyLight = new Luxafor();

MyLight
  .fade(255, 0, 0)
  .exec()