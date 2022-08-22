require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o37ivn4ZcdnW4381o6NbfkCDjkB1Z7JY',
      accounts: [ '2baf4592feadf4a3fd806963f972844b202f1bb0549fd4050eda9ea894aa9233' ]
    }
  }
}

// https://eth-goerli.g.alchemy.com/v2/o37ivn4ZcdnW4381o6NbfkCDjkB1Z7JY