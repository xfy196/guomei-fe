const comfortable = require('./comfortable.json')
const kitchen = require('./kitchen.json')
const life = require('./life.json')
const telephone = require('./telephone.json')
const shoppingGuide = require('./shoppingGuide.json')

module.exports = function() {
  return {
    comfortable,
    kitchen,
    life,
    telephone,
    shoppingGuide
  }
}
