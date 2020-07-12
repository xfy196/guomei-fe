const comfortable = require('./comfortable.json')
const kitchen = require('./kitchen.json')
const life = require('./life.json')
const telephone = require('./telephone.json')
const shoppingGuide = require('./shoppingGuide.json')
const recommend = require('./recommend.json')
const area = require('./area.json')
const cities = require('./cities.json')
const housekeeping = require('./housekeeping.json')

module.exports = function() {
  return {
    comfortable,
    kitchen,
    life,
    telephone,
    shoppingGuide,
    recommend,
    area,
    cities,
    housekeeping
  }
}
