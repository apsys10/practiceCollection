import React , {Component} from 'react';
import Layout from '../../components/Layout';
import {Button , Form , Input , Message} from 'semantic-ui-react';
import factory from '../../factory';
import web3 from '../../web3';
import {Router} from '../../routes';


class CampaignNew extends Component
{
   state = {
       minimumContribution: '',
       beneficiary: '',
       errorMessage:'',
       loading: false
   };

static async getInitialProps(props) {
    const accountInfo = props.query;
    
    //console.log(accountInfo);
      return {accountInfo}
}
onSubmit = async (event)=>{

event.preventDefault();
this.setState({loading: true , errorMessage: ''})
try{
    
    const accounts = await web3.eth.getAccounts();
   
    await factory.methods.createCampaign(this.state.minimumContribution , this.state.beneficiary).send({from: this.props.accountInfo.accountInfo , gas: 3000000});

    Router.pushRoute(`/index/${this.props.accountInfo.accountInfo}`);
}

catch(err)
{
this.setState({errorMessage: err.message})
}
this.setState({loading: false})
 }
    render()
    {
        return <Layout><h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error ={!!this.state.errorMessage}>
        <Form.Field>
            
            <label>Minimum Contribution</label>
            <Input label ="wei" labelPosition = "right" 
            value={this.state.minimumContribution}
            onChange= {event => this.setState ({minimumContribution : event.target.value})}
            />
        </Form.Field>
        <Form.Field>
            
            <label>Beneficiary</label>
            <Input label ="address" labelPosition = "right" 
            value={this.state.beneficiary}
            onChange= {event => this.setState ({beneficiary : event.target.value})}
            />
        </Form.Field>

 <Message error header= "Oops!" content ={this.state.errorMessage} />
      <Button loading = {this.state.loading} primary>
      Create</Button>

        </Form>
        
        
        
        </Layout>
    }
}

export default CampaignNew;