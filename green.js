const Luxafor = require('node-luxafor');

const MyLight = new Luxafor();

MyLight
  .fade(0, 255, 0)
  .exec()