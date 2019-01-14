"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import CampaignFactory from './build/CampaignFactory.json';

var abi = [{
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "deployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "minimum",
    "type": "uint256"
  }, {
    "name": "forWho",
    "type": "address"
  }],
  "name": "createCampaign",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDeployedCampaigns",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "b",
    "type": "address"
  }],
  "name": "getMyCampaigns",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];

//const address = '0x639389ac9084f68265e894561793897f3b990025';
//const address = '0x3de2d32b28132a1df43a49050fd6f62c4bc14b65';
var address = '0x98eb88eca5a81da511727831c82c88498b012d84';
var instance = new _web2.default.eth.Contract(abi, address);
console.log(instance);
console.log(instance.options);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImFiaSIsImFkZHJlc3MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7Ozs7O0FBQ2pCOztBQUVBLElBQU07Y0FDRixBQUNjLEFBQ1o7O1lBQ0UsQUFDVSxBQUNSO1lBTE4sQUFFWSxBQUNSLEFBRVUsQUFHWjtBQUxFLEFBQ0UsR0FGTTtVQUZaLEFBUVUsQUFDUjs7WUFDRSxBQUNVLEFBQ1I7WUFaTixBQVNhLEFBQ1QsQUFFVSxBQUdaO0FBTEUsQUFDRSxHQUZPO2FBVGIsQUFlYSxBQUNYO3FCQWhCRixBQWdCcUIsQUFDbkI7VUFsQk0sQUFDUixBQWlCVTtBQWpCVixBQUNFLENBRk07Y0FvQlIsQUFDYyxBQUNaOztZQUNFLEFBQ1UsQUFDUjtZQUhNLEFBQ1IsQUFFVTtBQUZWLEFBQ0UsR0FGTTtZQUtSLEFBQ1UsQUFDUjtZQVROLEFBRVksQUFLUixBQUVVLEFBR1o7QUFMRSxBQUNFO1VBUk4sQUFZVSxBQUNSO2FBYkYsQUFhYSxBQUNYO2FBZEYsQUFjYSxBQUNYO3FCQWZGLEFBZXFCLEFBQ25CO1VBcENNLEFBb0JSLEFBZ0JVO0FBaEJWLEFBQ0U7Y0FpQkYsQUFDYyxBQUNaO1lBRkYsQUFFWSxBQUNWO1VBSEYsQUFHVSxBQUNSOztZQUNFLEFBQ1UsQUFDUjtZQVBOLEFBSWEsQUFDVCxBQUVVLEFBR1o7QUFMRSxBQUNFLEdBRk87YUFKYixBQVVhLEFBQ1g7cUJBWEYsQUFXcUIsQUFDbkI7VUFsRE0sQUFzQ1IsQUFZVTtBQVpWLEFBQ0U7Y0FhRixBQUNjLEFBQ1o7O1lBQ0UsQUFDVSxBQUNSO1lBTE4sQUFFWSxBQUNSLEFBRVUsQUFHWjtBQUxFLEFBQ0UsR0FGTTtVQUZaLEFBUVUsQUFDUjs7WUFDRSxBQUNVLEFBQ1I7WUFaTixBQVNhLEFBQ1QsQUFFVSxBQUdaO0FBTEUsQUFDRSxHQUZPO2FBVGIsQUFlYSxBQUNYO3FCQWhCRixBQWdCcUIsQUFDbkI7VUFyRU4sQUFBWSxBQW9EUixBQWlCVTtBQWpCVixBQUNFOztBQXFCTjtBQUNBO0FBQ0EsSUFBTSxVQUFOLEFBQWdCO0FBQ2hCLElBQUksV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FBYixBQUFzQixLQUFyQyxBQUFlLEFBQTBCO0FBQ3JDLFFBQUEsQUFBUSxJQUFSLEFBQVk7QUFDWixRQUFBLEFBQVEsSUFBSSxTQUFaLEFBQXFCLEFBRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9rNCJ9