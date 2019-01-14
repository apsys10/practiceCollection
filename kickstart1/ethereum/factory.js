import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface) ,'0x0035cDA889E5C0296b42d18FD1dB0B4802d0D642' );

export default instance;
