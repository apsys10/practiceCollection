import React, {Component} from 'react';
import factory from '../factory';
import {Card, Button, Form, Label, Input , Dropdown , Message} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../web3'
import CampaignIndex from './index2';
import styled from  'styled-components';




class TrueLogin extends Component
{    state = {
    accountInfo: this.props.accounts[0],
    EMessage : '',
    password: ''
   };
  static async getInitialProps (props) {
    const campaigns = await factory.methods.getDeployedCampaigns ().call ();
    //const accountInfo = props.query;
    const accounts = await web3.eth.getAccounts();
  
   

    return {campaigns, accounts};
  }

    onSubmit = async (event) =>
  {     event.preventDefault();
    console.log("state of accountInfo", this.state.accountInfo)
    try {

        await web3.eth.personal.unlockAccount(this.state.accountInfo , this.state.password , 15000)
       
        Router.pushRoute(`/it/${this.state.accountInfo}`)
       
            }
      
    catch (error) {
      this.setState({EMessage: 'Could not decrypt key with given passphrase'})
      
    }
    
    
    
      
      
  }
  selectAccount()
  {
    
   
    this.setState({accountInfo: this.refs.accountSelector.value});
    
    
  }

    render(){
        let optionItems = this.props.accounts.map((account , index) =>
    <option key={index}>{account}</option>
);

    return (
      
      <Layout >
        <div style={{float: 'right'}}>
          <h4>Select Account </h4>
          <select style ={{float: 'right', color: 'black' , padding: '1px' , marginTop: '0px'}} ref ="accountSelector" onChange ={(e) => {
            e.preventDefault();
            this.selectAccount()}}>{optionItems}</select>
        </div>
         
        <Form onSubmit = {this.onSubmit} error ={!!this.state.EMessage} >

        <Form.Field style={{marginTop: "100px"}}>
          <Label style={{color: 'black', fontSize: '15px'}}>
              Enter Account Key to view,create and donate to campaigns
            </Label>
            <Input 
              value={this.state.accountInfo}
              onChange={event => {
                this.setState ({accountInfo: event.target.value});
              }}
              label="address"
              labelPosition="right"
            />
          </Form.Field>
          <Form.Field>
        <Input
              value={this.state.password}
              onChange={event => {
                this.setState ({password: event.target.value});
              }}
              label="password"
              labelPosition="right"
            />
          </Form.Field>
          <Message error header= "Oops!" content ={this.state.EMessage} />
          <Button>Enter</Button>

          
          
        </Form>
        
        
      </Layout>
    
     
    );
  }
    }
    export default TrueLogin;
