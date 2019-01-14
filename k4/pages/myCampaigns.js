import React, {Component} from 'react';
import factory from '../factory';
import {Card, Button, Form, Label, Input , Dropdown} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../web3'


class MyCampaigns extends Component{
    

    static async getInitialProps(props)
    {   const accountInfo = props.query;
        const MyCampaigns = await factory.methods.getMyCampaigns(accountInfo.accountInfo).call();
        console.log('===',MyCampaigns);
        console.log(accountInfo.accountInfo);
        

        return {MyCampaigns , accountInfo}
    }
    renderCampaigns () {
     const items = this.props.MyCampaigns.map ((address, index) => {
          return {
            header: address,
            description: (
                <Link route={`/details/${this.props.accountInfo.accountInfo}/${address}`}>
                  <a> view campaign </a>
                </Link>
              ),
            fluid: true,
          };
        });
        return <Card.Group items={items} />;
      }
    render()
    {
        return <Layout>
            <div>
                {this.renderCampaigns()}
            </div>
        </Layout>
    }
}
export default MyCampaigns;