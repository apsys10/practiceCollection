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

var _campaign = require('../campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\k4\\components\\contributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                console.log(_this.props.accountInfo);
                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.contribute().send({
                  from: _this.props.accountInfo,
                  value: _web2.default.utils.toWei(_this.state.value, 'ether'),
                  gas: 3000000
                });

              case 10:
                //Router.pushRoute(`/index/${this.props.accountInfo.accountInfo}`);
                _routes.Router.replaceRoute('/campaigns/' + _this.props.accountInfo + '/' + _this.props.address);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false, value: '' });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  //   static async getInitialProps (props) {
  //     const accountInfo = props.query;
  //     console.log(accountInfo);
  //     return {accountInfo};
  //   }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log('=========+++++', this.props.accountInfo);
      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, ' Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'oops', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Contribute'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJhY2NvdW50SW5mbyIsImNhbXBhaWduIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwiZ2FzIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFPLEFBQVM7O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0o7YUFBUSxBQUNDLEFBQ1A7b0JBRk0sQUFFUSxBQUNkO2UsQUFITSxBQUdHO0FBSEgsQUFDTixhQVdGLEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUNqQjtBQUpHLDJCQUlRLHdCQUFVLE1BQUEsQUFBSyxNQUp2QixBQUlRLEFBQXFCLEFBQ3RDOztzQkFBQSxBQUFLLFNBQVUsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUx0QixBQUtULEFBQWUsQUFBOEI7Z0NBTHBDO2dDQUFBO3VCQU9nQixjQUFBLEFBQUssSUFQckIsQUFPZ0IsQUFBUzs7bUJBQTFCO0FBUEMsb0NBQUE7Z0NBQUE7Z0NBUUQsQUFBUyxRQUFULEFBQ0gsYUFERyxBQUVIO3dCQUNPLE1BQUEsQUFBSyxNQUROLEFBQ1ksQUFDakI7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFPLE1BQUEsQUFBSyxNQUF2QixBQUE2QixPQUYvQixBQUVFLEFBQW9DLEFBQzNDO3VCQWJHLEFBUUQsQUFFRyxBQUdBO0FBSEEsQUFDTCxpQkFIRTs7bUJBT0o7QUFDRjsrQkFBQSxBQUFPLDZCQUE0QixNQUFBLEFBQUssTUFBeEMsQUFBOEMsb0JBQWUsTUFBQSxBQUFLLE1BaEIzRCxBQWdCUCxBQUF3RTtnQ0FoQmpFO0FBQUE7O21CQUFBO2dDQUFBO2dEQWtCUDs7c0JBQUEsQUFBSyxTQUFVLEVBQUMsY0FBYyxZQWxCdkIsQUFrQlAsQUFBZSxBQUFtQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBVSxFQUFDLFNBQUQsQUFBVSxPQUFPLE9BcEJ2QixBQW9CVCxBQUFlLEFBQXdCOzttQkFwQjlCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7OztBQU5iOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkF5Qlk7bUJBQ1I7O2NBQUEsQUFBUSxJQUFSLEFBQVksa0JBQWtCLEtBQUEsQUFBSyxNQUFuQyxBQUF5QyxBQUN6Qzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUUsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDBDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBUyxBQUNqQjtpQkFBQSxBQUFLLFNBQVUsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUE3QixBQUFlLEFBQXFCLEFBQ3JDO0FBSkgsQUFLRTtlQUxGLEFBS1EsQUFDTjt1QkFORixBQU1nQjs7b0JBTmhCO3NCQUpKLEFBQ0UsQUFHRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7b0JBQWpEO3NCQWJGLEFBYUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBZkosQUFDRSxBQWNFLEFBR0w7Ozs7O0FBeEQwQixBLEFBMkQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Baml0YS5QYW5jaG9saS9EZXNrdG9wL2s0In0=