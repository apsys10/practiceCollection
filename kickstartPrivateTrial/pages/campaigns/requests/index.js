import React ,  {Component} from 'react';
import Layout from '../../../components/Layout';
import {Button, Table } from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../campaign';
import RequestRow from '../../../components/RequestRow';
 
class RequestIndex extends Component {


static async getInitialProps(props)
{
    const {address} = props.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();
    
        const requests = await Promise.all(Array(parseInt(requestsCount)).fill().map((element , index) =>
    {
        return campaign.methods.requests(index).call();
}));
const approversCount = await campaign.methods.approversCount().call();

        console.log(requests);
        return {address , requests , requestsCount , approversCount}
    
}    

renderRow()
{
return this.props.requests.map((request , index) =>
{
return <RequestRow  request = {request}
key= {index} address = {this.props.address} id = {index} approversCount = {this.props.approversCount}/>

})

}
    render()
    {  const { Header , Row , HeaderCell , Body} = Table;
        return <Layout>
            <h3>Requests</h3>
            <Link route ={`/campaigns/${this.props.address}/requests/new`}>
            <a>
                <Button primary floated = "right"  style = {{ marginBottom: 10}}> Add Request</Button>
            </a>
            </Link>
            <Table>
                <Header>

                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell> Recipient</HeaderCell>
                        <HeaderCell>Approval Count</HeaderCell>
                        
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {this.renderRow()}
                </Body>
            </Table>
            <div> Found {this.props.requestsCount} requests.</div>
        </Layout>
    }
}
export default RequestIndex;
