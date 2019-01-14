"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  var abi = [{
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "approvers",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "beneficiary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "manager",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "requests",
    "outputs": [{
      "name": "description",
      "type": "string"
    }, {
      "name": "value",
      "type": "uint256"
    }, {
      "name": "recipient",
      "type": "address"
    }, {
      "name": "complete",
      "type": "bool"
    }, {
      "name": "approvalCount",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "approversCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "minimumContribution",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "people",
    "outputs": [{
      "name": "addr",
      "type": "address"
    }, {
      "name": "funds",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "minimum",
      "type": "uint256"
    }, {
      "name": "creater",
      "type": "address"
    }, {
      "name": "forWho",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }, {
    "constant": false,
    "inputs": [],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "description",
      "type": "string"
    }, {
      "name": "value",
      "type": "uint256"
    }, {
      "name": "recipient",
      "type": "address"
    }],
    "name": "createRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "index",
      "type": "uint256"
    }],
    "name": "approveRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "index",
      "type": "uint256"
    }],
    "name": "finalizeRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getSummary",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "address"
    }, {
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getRequestsCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getPeople",
    "outputs": [{
      "name": "",
      "type": "address[]"
    }, {
      "name": "",
      "type": "uint256[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }];
  return new _web2.default.eth.Contract(abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJhZGRyZXNzIiwiYWJpIiwiZXRoIiwiQ29udHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVSxBQUdqQjs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxTQUNoQixBQUFFO01BQU07Z0JBQ0osQUFDYyxBQUNaOztjQUNFLEFBQ1UsQUFDUjtjQUxOLEFBRVksQUFDUixBQUVVLEFBR1o7QUFMRSxBQUNFLEtBRk07WUFGWixBQVFVLEFBQ1I7O2NBQ0UsQUFDVSxBQUNSO2NBWk4sQUFTYSxBQUNULEFBRVUsQUFHWjtBQUxFLEFBQ0UsS0FGTztlQVRiLEFBZWEsQUFDWDt1QkFoQkYsQUFnQnFCLEFBQ25CO1lBbEJRLEFBQ1YsQUFpQlU7QUFqQlYsQUFDRSxHQUZRO2dCQW9CVixBQUNjLEFBQ1o7Y0FGRixBQUVZLEFBQ1Y7WUFIRixBQUdVLEFBQ1I7O2NBQ0UsQUFDVSxBQUNSO2NBUE4sQUFJYSxBQUNULEFBRVUsQUFHWjtBQUxFLEFBQ0UsS0FGTztlQUpiLEFBVWEsQUFDWDt1QkFYRixBQVdxQixBQUNuQjtZQWhDUSxBQW9CVixBQVlVO0FBWlYsQUFDRTtnQkFhRixBQUNjLEFBQ1o7Y0FGRixBQUVZLEFBQ1Y7WUFIRixBQUdVLEFBQ1I7O2NBQ0UsQUFDVSxBQUNSO2NBUE4sQUFJYSxBQUNULEFBRVUsQUFHWjtBQUxFLEFBQ0UsS0FGTztlQUpiLEFBVWEsQUFDWDt1QkFYRixBQVdxQixBQUNuQjtZQTlDUSxBQWtDVixBQVlVO0FBWlYsQUFDRTtnQkFhRixBQUNjLEFBQ1o7O2NBQ0UsQUFDVSxBQUNSO2NBTE4sQUFFWSxBQUNSLEFBRVUsQUFHWjtBQUxFLEFBQ0UsS0FGTTtZQUZaLEFBUVUsQUFDUjs7Y0FDRSxBQUNVLEFBQ1I7Y0FITyxBQUNULEFBRVU7QUFGVixBQUNFLEtBRk87Y0FLVCxBQUNVLEFBQ1I7Y0FQTyxBQUtULEFBRVU7QUFGVixBQUNFO2NBR0YsQUFDVSxBQUNSO2NBWE8sQUFTVCxB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VCxBQUVVO0FBRlYsQUFDRTtjQUdGLEFBQ1UsQUFDUjtjQWZPLEFBYVQsQUFFVTtBQUZWLEFBQ0U7Y0FHRixBQUNVLEFBQ1I7Y0FuQk8sQUFpQlQsQUFFVTtBQUZWLEFBQ0U7Y0FHRixBQUNVLEFBQ1I7Y0EzQk4sQUFJYSxBQXFCVCxBQUVVLEFBR1o7QUFMRSxBQUNFO2VBMUJOLEFBOEJhLEFBQ1g7dUJBL0JGLEFBK0JxQixBQUNuQjtZQXBQUSxBQW9OVixBQWdDVTtBQWhDVixBQUNFO2dCQWlDRixBQUNjLEFBQ1o7Y0FGRixBQUVZLEFBQ1Y7WUFIRixBQUdVLEFBQ1I7O2NBQ0UsQUFDVSxBQUNSO2NBUE4sQUFJYSxBQUNULEFBRVUsQUFHWjtBQUxFLEFBQ0UsS0FGTztlQUpiLEFBVWEsQUFDWDt1QkFYRixBQVdxQixBQUNuQjtZQWxRUSxBQXNQVixBQVlVO0FBWlYsQUFDRTtnQkFhRixBQUNjLEFBQ1o7Y0FGRixBQUVZLEFBQ1Y7WUFIRixBQUdVLEFBQ1I7O2NBQ0UsQUFDVSxBQUNSO2NBSE8sQUFDVCxBQUVVO0FBRlYsQUFDRSxLQUZPO2NBS1QsQUFDVSxBQUNSO2NBWE4sQUFJYSxBQUtULEFBRVUsQUFHWjtBQUxFLEFBQ0U7ZUFWTixBQWNhLEFBQ1g7dUJBZkYsQUFlcUIsQUFDbkI7WUFwUkosQUFBWSxBQW9RVixBQWdCVSxBQUdiO0FBbkJHLEFBQ0U7U0FrQkUsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQWIsQUFBdUIsS0FBOUIsQUFBTyxBQUE2QixBQUVwQztBQTFSRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Baml0YS5QYW5jaG9saS9EZXNrdG9wL2s0In0=