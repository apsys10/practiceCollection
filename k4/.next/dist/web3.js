'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var provider = new _web2.default.providers.HttpProvider("http://localhost:8543");

web3 = new _web2.default(provider);
console.log(web3);
web3.eth.net.isListening().then(function () {
   return console.log('is connected');
}).catch(function (e) {
   return console.log('Wow. Something went wrong');
});

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwid2ViMyIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJuZXQiLCJpc0xpc3RlbmluZyIsInRoZW4iLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFqQjs7QUFFQSxPQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVA7QUFDQSxRQUFRLEFBQVIsSUFBWSxBQUFaO0FBQ0EsS0FBSyxBQUFMLElBQVMsQUFBVCxJQUFhLEFBQWIsY0FDSSxBQURKLEtBQ1MsWUFBQTtVQUFNLFFBQVEsQUFBUixJQUFZLEFBQVosQUFBTjtBQURULEdBRUksQUFGSixNQUVVLGFBQUE7VUFBSyxRQUFRLEFBQVIsSUFBWSxBQUFaLEFBQUw7QUFGVixBQU9BOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9rNCJ9