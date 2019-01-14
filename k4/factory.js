import web3 from './web3';
//import CampaignFactory from './build/CampaignFactory.json';

const abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedCampaigns",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "minimum",
          "type": "uint256"
        },
        {
          "name": "forWho",
          "type": "address"
        }
      ],
      "name": "createCampaign",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDeployedCampaigns",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "b",
          "type": "address"
        }
      ],
      "name": "getMyCampaigns",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
  
//const address = '0x639389ac9084f68265e894561793897f3b990025';
//const address = '0x3de2d32b28132a1df43a49050fd6f62c4bc14b65';
const address = '0x98eb88eca5a81da511727831c82c88498b012d84';
var instance = new web3.eth.Contract(abi,address);
    console.log(instance);
    console.log(instance.options);

export default instance;