var FlightSuretyApp = artifacts.require('FlightSuretyApp')
var FlightSuretyData = artifacts.require('FlightSuretyData')
var BigNumber = require('bignumber.js')

var Config = async function (accounts) {
  // These test addresses are useful when you need to add
  // multiple users in test scripts
  const testAddresses = [
    '0x7109b275fa4a82061f61703a9a533e45f8bb4f14',
    '0x21c099123ecebfc64921084d75a3ae5701af66d1',
    '0x89c726c0ae63f5752e07391b32e8a03998aa53fb',
    '0x7132e80905c2072c4f73e62cf7deb21415e5d4af',
    '0xdff6c6ee4e0ab5dd4d6bf47fa74a8731ce1b07cd',
    '0xc17008a33ee1074131098c769e68f3c0e2d17c88',
    '0x6668535a23f58ffb96c38e905f7cdc391d6e446c',
    '0xa29e85b4a212b2ef8355dc06de2e4a2a1dcc4325',
    '0x4935d7e3e0c8c3b0b00218603e486f76e82ed90e'
  ]

  let owner = accounts[0]
  let firstAirline = accounts[1]

  let flightSuretyData = await FlightSuretyData.new(firstAirline)
  let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address)

  return {
    owner: owner,
    firstAirline: firstAirline,
    weiMultiple: (new BigNumber(10)).pow(18),
    testAddresses: testAddresses,
    flightSuretyData: flightSuretyData,
    flightSuretyApp: flightSuretyApp
  }
}

module.exports = {
  Config: Config
}
