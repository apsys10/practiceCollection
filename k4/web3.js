import Web3 from 'web3';
const provider = new Web3.providers.HttpProvider("http://localhost:8543");

web3 = new Web3(provider);
console.log(web3);
web3.eth.net.isListening()
   .then(() => console.log('is connected'))
   .catch(e => console.log('Wow. Something went wrong'));

   
 

export default web3;