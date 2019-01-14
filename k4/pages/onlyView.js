import React, {Component} from 'react';
import Layout from '../components/Layout';
import Campaign from '../campaign';
import {Card, Grid, Button} from 'semantic-ui-react';
import web3 from '../web3';
import {Link} from '../routes';

class OnlyView extends Component {
    constructor(props)
    {     super(props)
        this.state = {showComponent: false}
        this.handleClick = this.handleClick.bind(this);
    }

    
  static async getInitialProps (props) {
    const campaign = Campaign (props.query.address);
    const accountInfo = props.query.accountInfo;
    const people = await campaign.methods.getPeople ().call ();

    const summary = await campaign.methods.getSummary ().call ();
    return {
      address: props.query.address,
      accountInfo: accountInfo,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      beneficiary: summary[5],
      people: people,
    };
  }
  handleClick()
  {
    this.setState({
        showComponent: true,
      });
  }

  renderCards () {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      beneficiary
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description: 'Created campaign',
      },
      {
        header: minimumContribution,
        meta: 'Minimum contribution',
        description: 'Contribute atleast this much wei. ',
      },

      {
        header: web3.utils.fromWei (balance, 'ether'),
        meta: 'Balance',
        description: 'How much money left in contract',
      },
      {
        header: beneficiary,
        meta: 'Owner',
        description: 'Campaign belongs to this person.',
      }
    ];

    return <Card.Group items={items} />;
  }
  renderNames = () => {
    return this.props.people[0].map ((value, index) => {
      return (
        <table>

          <tbody>
            <tr>
              <td  style={{color: 'blue'}}>
                Contributer

              </td>
              <td key = {index}>{value}</td>
            </tr>
          </tbody>

        </table>
      );
    });
  };
  renderAmounts = () => {
    return this.props.people[1].map ((value, index) => {
      return (
        <table>
          <tbody>
            <tr>
              <td style={{color: 'green'}}>Amount in ether</td>
              <td key = {index}>{web3.utils.fromWei (value, 'ether')}</td>
            </tr>
          </tbody>

        </table>
      );
    });
  };

  render () {
    return (
      <Layout>
        <h1>
          CampaignShow
        </h1>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards ()}

            </Grid.Column>
        
          </Grid.Row>

        </Grid>
       
        <div>
            <Button primary style={{marginTop: '20px'}}
           onClick = {this.handleClick}
            >Show Contributers</Button>
            {this.state.showComponent ?
        <div style ={{float: 'left' ,  marginTop: '50px'}}>{this.renderNames()}</div>   :
           null
        }
        {this.state.showComponent ?
           <div style ={{float: 'left' ,  marginTop: '50px'}}>{this.renderAmounts()}</div>  :
           null
        }
        </div>
      </Layout>
    );
  }
}
export default OnlyView;