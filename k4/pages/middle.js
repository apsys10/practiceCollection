import React, {Component} from 'react';
import factory from '../factory';
import {Card, Button, Form, Label, Input , Dropdown} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link, Router} from '../routes';
import web3 from '../web3'
import CampaignIndex from './index2';

class Middle extends Component
{   
 static async getInitialProps (props) {
  const accountInfo = props.query.accountInfo;
  console.log('accountInfo ' , accountInfo)
  

   return {accountInfo}
       
  }

  Handle()
  {
    console.log(this.props.accountInfo);
    if(this.props.accountInfo == "0xaa54074eF1e358786461ed11261D3aff5600A25b")
     {
       
 
       Router.pushRoute(`/id/${this.props.accountInfo}`);
       
       }
       else if(this.props.accountInfo == "0x099f423Ca1Ec11e6833f24a53F904335765f0c74" || this.props.accountInfo == "0x451e4d57Da1072BEf34e8e3D29160D172cE1Ae7B")
       {
             Router.pushRoute(`/myCampaigns/${this.props.accountInfo}`)
       }
       else{
         Router.pushRoute(`/ind/${this.props.accountInfo}`);
 
       }
  }
  

render(){


    return (
      <Layout>
         <Button primary style ={{fontSize: "150px"}} onClick ={this.Handle()}>Welcome</Button>
        

        </Layout>
    );
    }
}
export default Middle;