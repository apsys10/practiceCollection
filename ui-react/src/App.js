import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import MyContract from './lottery'


class App extends Component {
  state = {
    manager: '',
    players: [],
    balance : '',
    value: '',
    message:''
  };
async componentDidMount () {
console.log(web3);
    web3.eth.net.isListening()
   .then(() => console.log('is connected'))
   .catch(e => console.log('Wow. Something went wrong'));
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    
   const manager = await MyContract.methods.manager().call();
   const players = await MyContract.methods.getPlayers().call();
   const balance = await web3.eth.getBalance(MyContract.options.address);

    console.log(manager);
    this.setState({manager, players, balance})
}
  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
     this.setState({message: 'Waiting on transaction success...'})

    await MyContract.methods.enter().send({
      from: accounts[0] , value: web3.utils.toWei(this.state.value)
    });  
    this.setState({message: 'you have been entered'})
  
  };
  onClick = async () =>{
    const accounts = await web3.eth.getAccounts();
    this.setState({message:'Waiting on transaction success...' })
     await MyContract.methods.pickwinner().send({
       from: accounts[0]
     });
  
     this.setState({message: "A winner has been picked"})
  }

  render () {
    //console.log(web3.version);

    return (
      <div>
        <h2>Lottery Contract</h2>
        <p> This contract is run by {this.state.manager}
        There are currently {this.state.players.length} competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
        <hr />
        <form onSubmit = {this.onSubmit}>
          <h4>
            Want to try your luck?
          </h4>
          <div>
            <label>
              Amount of ether to enter
            </label>
            <input  value = {this.state.value }onChange = {event => {
              this.setState({value: event.target.value})
            }}
            />
          </div>
         <button>Enter</button>
        </form>
        <hr />
        <h4>
          Ready to pick a winner?
        </h4>
        <button onClick = {
           this.onClick
        }>Pick a Winner</button>
        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;