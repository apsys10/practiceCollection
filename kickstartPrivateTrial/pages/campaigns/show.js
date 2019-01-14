import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../campaign';
import {Card , Grid, Button}  from 'semantic-ui-react';
import web3 from '../../web3';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign (props.query.address);

    const summary = await campaign.methods.getSummary().call();
    return {
        address: props.query.address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]

    };
    }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;   
   
    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description: 'Created campaign'
      },
      {
        header: minimumContribution,
        meta: "Minimum contribution",
        description: 'You must contribute atleast this much wei to become an approver '
      },
      {
        header: requestsCount,
        meta: "Number of requests",
        description: 'Tries to withdraw money from contract. needs approval'
      },
      {
        header: web3.utils.fromWei(balance , 'ether'),
        meta: "Balance",
        description: 'How much money left in contract'
      },
      {
        header: approversCount,
        meta: "Number of approvers",
        description: 'Number of people already donated to campaign'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h1>
          CampaignShow
        </h1>
        <Grid>
           <Grid.Row>
            <Grid.Column width = {10}>{this.renderCards()}
            
            </Grid.Column>
            <Grid.Column width = {6}><ContributeForm address= {this.props.address}/></Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <Link route={`/campaigns/${this.props.address}/requests`}>
            <a><Button primary> View Requests</Button></a></Link>
                </Grid.Column>
            
            </Grid.Row>
        </Grid>
        
     
      </Layout>
    );
  }
}
export default CampaignShow;
