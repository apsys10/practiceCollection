import React, {Component} from 'react';
import factory from '../factory';
import {Card, Button, Form, Label, Input , Dropdown} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../web3'

class OnlyCreate extends Component {
 
   static async getInitialProps (props){
     try {
      const campaigns = await factory.methods.getDeployedCampaigns ().call ();
      const accountInfo = props.query;
     
      
      
  
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      return {campaigns, accountInfo , accounts};
     } catch (error) {
       console.log(error)
     }
    
  }
render () {
   return (
      <Layout>
         <div>

          
          <Link route={`/campaigns/${this.props.accountInfo.accountInfo}`}>
          <a>
              <Button
                floated = "left"
                content="create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
         </div>

        </Layout>
    );
  }
}

export default OnlyCreate;