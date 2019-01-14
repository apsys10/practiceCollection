import React, {Component} from 'react';
import factory from '../factory';
import {Card, Button, Form, Label, Input , Dropdown} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../web3'

class CampaignIndex extends Component {
 
   static async getInitialProps (props){
     try {
      const campaigns = await factory.methods.getDeployedCampaigns ().call ();
      const accountInfo = props.query;
      
      
      
      
      const accounts = await web3.eth.getAccounts();
      
      return {campaigns, accountInfo , accounts };
     } catch (error) {
       console.log(error)
     }
    
  }

 
renderCampaigns () {
  
  
  
    
    const items = this.props.campaigns.map ((address, index) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${this.props.accountInfo.accountInfo}/${address}`}>
            <a> view campaign </a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  
  render () {
   
   return (
      <Layout>
         <div>
           
           <h3 style = {{padding: '10px'}}>Open Campaigns</h3>
           {this.renderCampaigns()}
           </div>
          

    

        </Layout>
    );
  }
}

export default CampaignIndex;
