import web3 from './web3';

const address = '0x0ce586fCbbE7088f16Fbc367Dd078560c382e28f';

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
];

export default new web3.eth.Contract(abi , address);