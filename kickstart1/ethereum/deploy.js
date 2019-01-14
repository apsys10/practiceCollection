const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDwalletProvider('escape anxiety arrive shell verify spy job wink anger fortune simple apart', 'https://rinkeby.infura.io/v3/507e568960c8416c94729de7c93b5bf5');

const web3 = new Web3(provider);

const deploy = async () =>
{
const accounts = await web3.eth.getAccounts();
console.log("attempting to deploy from" , accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: compiledFactory.bytecode}).send({ gas: '1000000' , from: accounts[0]}).catch( error => {console.log("===================>" , error)})

console.log( "contract deployed to" , result.options.address);
};

deploy();
