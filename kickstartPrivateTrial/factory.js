import web3 from './web3';
//import CampaignFactory from './build/CampaignFactory.json';

const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"deployedCampaigns","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDeployedCampaigns","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"minimum","type":"uint256"}],"name":"createCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
  
  
const address = '0x639389ac9084f68265e894561793897f3b990025';

var instance = new web3.eth.Contract(abi,address);
    console.log(instance);
    console.log(instance.options);

export default instance;