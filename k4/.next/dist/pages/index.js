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

var _factory = require('../factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _index = require('./index2');

var _index2 = _interopRequireDefault(_index);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\k4\\pages\\index.js?entry';


var TrueLogin = function (_Component) {
  (0, _inherits3.default)(TrueLogin, _Component);

  function TrueLogin() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TrueLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TrueLogin.__proto__ || (0, _getPrototypeOf2.default)(TrueLogin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      accountInfo: _this.props.accounts[0],
      EMessage: '',
      password: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log("state of accountInfo", _this.state.accountInfo);
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.personal.unlockAccount(_this.state.accountInfo, _this.state.password, 15000);

              case 5:

                _routes.Router.pushRoute('/it/' + _this.state.accountInfo);

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                _this.setState({ EMessage: 'Could not decrypt key with given passphrase' });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 8]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TrueLogin, [{
    key: 'selectAccount',
    value: function selectAccount() {

      this.setState({ accountInfo: this.refs.accountSelector.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var optionItems = this.props.accounts.map(function (account, index) {
        return _react2.default.createElement('option', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, account);
      });

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('div', { style: { float: 'right' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Select Account '), _react2.default.createElement('select', { style: { float: 'right', color: 'black', padding: '1px', marginTop: '0px' }, ref: 'accountSelector', onChange: function onChange(e) {
          e.preventDefault();
          _this3.selectAccount();
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, optionItems)), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.EMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { marginTop: "100px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { style: { color: 'black', fontSize: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'Enter Account Key to view,create and donate to campaigns'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.accountInfo,
        onChange: function onChange(event) {
          _this3.setState({ accountInfo: event.target.value });
        },
        label: 'address',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.password,
        onChange: function onChange(event) {
          _this3.setState({ password: event.target.value });
        },
        label: 'password',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.EMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'Enter')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var campaigns, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context2.sent;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                return _context2.abrupt('return', { campaigns: campaigns, accounts: accounts });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return TrueLogin;
}(_react.Component);

exports.default = TrueLogin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIkxhYmVsIiwiSW5wdXQiLCJEcm9wZG93biIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIkNhbXBhaWduSW5kZXgiLCJzdHlsZWQiLCJUcnVlTG9naW4iLCJzdGF0ZSIsImFjY291bnRJbmZvIiwicHJvcHMiLCJhY2NvdW50cyIsIkVNZXNzYWdlIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwicGVyc29uYWwiLCJ1bmxvY2tBY2NvdW50IiwicHVzaFJvdXRlIiwic2V0U3RhdGUiLCJyZWZzIiwiYWNjb3VudFNlbGVjdG9yIiwidmFsdWUiLCJvcHRpb25JdGVtcyIsIm1hcCIsImFjY291bnQiLCJpbmRleCIsImZsb2F0IiwiY29sb3IiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZSIsInNlbGVjdEFjY291bnQiLCJmb250U2l6ZSIsInRhcmdldCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjYW1wYWlnbnMiLCJnZXRBY2NvdW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFRLEFBQU0sQUFBUSxBQUFNLEFBQU8sQUFBUSxBQUFXOztBQUN0RCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW1COzs7O0FBQzFCLEFBQU87Ozs7Ozs7OztJLEFBS0Q7Ozs7Ozs7Ozs7Ozs7OztrTixBQUNEO21CQUNZLE1BQUEsQUFBSyxNQUFMLEFBQVcsU0FEZixBQUNJLEFBQW9CLEFBQ2pDO2dCQUZTLEFBRUUsQUFDWDtnQixBQUhTLEFBR0M7QUFIRCxBQUNULGEsQUFjQTsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1A7c0JBQUEsQUFBTSxBQUNWO3dCQUFBLEFBQVEsSUFBUixBQUFZLHdCQUF3QixNQUFBLEFBQUssTUFGOUIsQUFFWCxBQUErQztnQ0FGcEM7Z0NBQUE7dUJBS0QsY0FBQSxBQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLGNBQWMsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLGFBQWMsTUFBQSxBQUFLLE1BQTlELEFBQW9FLFVBTG5FLEFBS0QsQUFBK0U7O21CQUVyRjs7K0JBQUEsQUFBTyxtQkFBaUIsTUFBQSxBQUFLLE1BUHRCLEFBT1AsQUFBbUM7O2dDQVA1QjtBQUFBOzttQkFBQTtnQ0FBQTtnREFZVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsVUFaTixBQVlULEFBQWMsQUFBVzs7bUJBWmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7b0NBc0JiLEFBR0U7O1dBQUEsQUFBSyxTQUFTLEVBQUMsYUFBYSxLQUFBLEFBQUssS0FBTCxBQUFVLGdCQUF0QyxBQUFjLEFBQXdDLEFBR3ZEOzs7OzZCQUVTO21CQUNKOztVQUFJLG1CQUFjLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFXLE9BQVg7K0JBQzlDLGNBQUEsWUFBUSxLQUFSLEFBQWE7c0JBQWI7d0JBQUEsQUFBcUI7QUFBckI7U0FBQSxFQUQ4QyxBQUM5QztBQURJLEFBQWtCLEFBSXRCLE9BSnNCOzs2QkFNcEIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBLFNBQUssT0FBTyxFQUFDLE9BQWIsQUFBWSxBQUFRO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG9DQUFBLGNBQUEsWUFBUSxPQUFRLEVBQUMsT0FBRCxBQUFRLFNBQVMsT0FBakIsQUFBd0IsU0FBVSxTQUFsQyxBQUEyQyxPQUFRLFdBQW5FLEFBQWdCLEFBQThELFNBQVEsS0FBdEYsQUFBMkYsbUJBQWtCLFVBQVcsa0JBQUEsQUFBQyxHQUFNLEFBQzdIO1lBQUEsQUFBRSxBQUNGO2lCQUFBLEFBQUssQUFBZ0I7QUFGdkI7b0JBQUE7c0JBQUEsQUFFMEI7QUFGMUI7U0FISixBQUNFLEFBRUUsQUFLRiwrQkFBQSxBQUFDLHVDQUFLLFVBQVksS0FBbEIsQUFBdUIsVUFBVSxPQUFRLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBaEQsQUFBc0Q7b0JBQXREO3NCQUFBLEFBRUE7QUFGQTt5QkFFQyxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFPLEVBQUMsV0FBcEIsQUFBbUIsQUFBWTtvQkFBL0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQU0sT0FBTyxFQUFDLE9BQUQsQUFBUSxTQUFTLFVBQS9CLEFBQWMsQUFBMkI7b0JBQXpDO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0UsNkVBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFTLEFBQ2pCO2lCQUFBLEFBQUssU0FBVSxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BQW5DLEFBQWUsQUFBMkIsQUFDM0M7QUFKSCxBQUtFO2VBTEYsQUFLUSxBQUNOO3VCQU5GLEFBTWdCOztvQkFOaEI7c0JBTkosQUFFQSxBQUlJLEFBU0Y7QUFURTtBQUNFLDJCQVFILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRjtBQURFO0FBQUEseUJBQ0YsQUFBQztlQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNsQjtrQkFBVSx5QkFBUyxBQUNqQjtpQkFBQSxBQUFLLFNBQVUsRUFBQyxVQUFVLE1BQUEsQUFBTSxPQUFoQyxBQUFlLEFBQXdCLEFBQ3hDO0FBSlAsQUFLTTtlQUxOLEFBS1ksQUFDTjt1QkFOTixBQU1vQjs7b0JBTnBCO3NCQWhCQSxBQWVFLEFBQ0YsQUFTRTtBQVRGO0FBQ00sMkJBUUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF1QixTQUFRLFNBQVUsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO29CQUFwRDtzQkF6QkYsQUF5QkUsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQXBDTixBQUVFLEFBUUUsQUEwQkUsQUFXUDs7Ozs7NkdBNUY2QixBOzs7Ozs7O3VCQUNKLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF3Qzs7bUJBQTFEO0E7O3VCQUVpQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBO2tEQUlDLEVBQUMsV0FBRCxXQUFZLFUsQUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJhLEEsQUFvR3BCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FqaXRhLlBhbmNob2xpL0Rlc2t0b3AvazQifQ==