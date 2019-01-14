module.exports = {
  rpc: {
  host:"localhost",
  port:8543
  },
  networks: {
  development: {
  host: "localhost" , //our network is running on localhost
  port: 8543, // port where your blockchain is running
  network_id: "*",
  from: "0xaa54074ef1e358786461ed11261d3aff5600a25b", // use the account-id generated during the setup process
  gas: 4000000
  }
  }
  };