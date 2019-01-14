'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("==+++++++++++++++++++====>", _this.props.address);

              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;

              console.log(accounts);
              _context.next = 7;
              return (0, _campaign2.default)(_this.props.address);

            case 7:
              campaign = _context.sent;
              _context.next = 10;
              return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              _context2.next = 5;
              return (0, _campaign2.default)(_this.props.address);

            case 5:
              campaign = _context2.sent;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWduIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUTs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEEscUZBQVksbUJBQUE7b0JBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1Y7c0JBQUEsQUFBUSxJQUFSLEFBQVksOEJBQStCLE1BQUEsQUFBSyxNQUR0QyxBQUNWLEFBQXNEOzs4QkFENUM7cUJBR1ksY0FBQSxBQUFLLElBSGpCLEFBR1ksQUFBUzs7aUJBQTFCO0FBSEssa0NBSVg7O3NCQUFBLEFBQVEsSUFKRyxBQUlYLEFBQVk7OEJBSkQ7cUJBS1ksd0JBQVMsTUFBQSxBQUFLLE1BTDFCLEFBS1ksQUFBb0I7O2lCQUFyQztBQUxLLGtDQUFBOzhCQUFBO3FCQU1MLFNBQUEsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDLEtBQUssRUFBQyxNQUFNLFNBTnRELEFBTUwsQUFBb0QsQUFBTyxBQUFTOztpQkFOL0Q7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QSxlQVNkLEEsc0ZBQWEsb0JBQUE7b0JBQUE7c0VBQUE7a0JBQUE7NkNBQUE7aUJBQUE7K0JBQUE7cUJBR2MsY0FBQSxBQUFLLElBSG5CLEFBR2MsQUFBUzs7aUJBQTFCO0FBSEcsbUNBQUE7K0JBQUE7cUJBSWMsd0JBQVMsTUFBQSxBQUFLLE1BSjVCLEFBSWMsQUFBb0I7O2lCQUFyQztBQUpHLG1DQUFBOytCQUFBO3FCQUtILFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0QsS0FBSyxFQUFDLE1BQU0sU0FMekQsQUFLSCxBQUFxRCxBQUFPLEFBQVM7O2lCQUxsRTtpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs2QkFXRDtVQUFBLEFBQ0QsTUFEQyxBQUNZLHVCQURaLEFBQ0Q7VUFEQyxBQUNJLE9BREosQUFDWSx1QkFEWixBQUNJO21CQUM0QixLQUZoQyxBQUVxQztVQUZyQyxBQUVELFlBRkMsQUFFRDtVQUZDLEFBRUksaUJBRkosQUFFSTtVQUZKLEFBRWMsd0JBRmQsQUFFYyxBQUN0Qjs7VUFBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBK0QsQUFFL0Q7OzZCQUFRLGNBQUQsT0FBSyxVQUFZLFFBQWpCLEFBQXlCLFVBQVUsVUFBWSxtQkFBbUIsQ0FBQyxRQUFuRSxBQUEyRTtvQkFBM0U7c0JBQUEsQUFDSDtBQURHO09BQUEsa0JBQ0YsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsU0FERyxBQUNILEFBR1AscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSlUsQUFJVixBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUx4QixBQUtWLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBTlUsQUFNVixBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBZSxlQUFnQixLQVByQixBQU9WLEFBRUEsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFFSTtBQUZKO0FBQUEsaUJBRUksQUFBUSxXQUFSLEFBQW1CLHVCQUNyQixBQUFDLHlDQUFPLE9BQVIsQUFBZ0IsU0FBUSxPQUF4QixNQUE4QixTQUFXLEtBQXpDLEFBQThDO29CQUE5QztzQkFBQTtBQUFBO09BQUEsRUFaUSxBQVNWLEFBR0UsQUFHRiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUVJO0FBRko7QUFBQSxpQkFFSSxBQUFRLFdBQVIsQUFBbUIsdUJBQ3JCLEFBQUMseUNBQU8sT0FBUixBQUFnQixRQUFPLE9BQXZCLE1BQTZCLFNBQVcsS0FBeEMsQUFBNkM7b0JBQTdDO3NCQUFBO0FBQUE7T0FBQSxFQWxCQyxBQUFPLEFBZVYsQUFHRSxBQUlBOzs7OztBQWhEc0IsQSxBQWtEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Baml0YS5QYW5jaG9saS9EZXNrdG9wL2tpY2tzdGFydCJ9