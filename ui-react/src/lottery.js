import web3 from './web3';
const abi = [
    {
      constant: true,
      inputs: [],
      name: 'manager',
      outputs: [{name: '', type: 'address'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'pickwinner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getPlayers',
      outputs: [{name: '', type: 'address[]'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'enter',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{name: '', type: 'uint256'}],
      name: 'players',
      outputs: [{name: '', type: 'address'}],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
  ]
  
  
  const address = '0x69f2fa63e2bc94633cdc907ee3c9420eae7cc42a';

var MyContract = new web3.eth.Contract(abi,address);
    console.log(MyContract);
    console.log(MyContract.options);

export default MyContract;




