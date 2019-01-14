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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\kickstart\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                console.log("=============>", _this.props.address.address);
                                campaign = (0, _campaign2.default)(_this.props.address.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;

                                console.log(accounts);

                                _context.next = 12;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 12:

                                _routes.Router.pushRoute('/campaigns/' + _this.props.address.address + '/requests');

                                _context.next = 19;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](5);

                                console.log(_context.t0);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 19:
                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Value in ether'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value, onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(event) {
                    _this3.setState({ recipient: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query;
                                return _context2.abrupt('return', { address: address });

                            case 2:
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

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFPLEFBQVMsQUFBVTs7QUFDbEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBYTs7QUFDM0IsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFJYixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRjttQkFBUSxBQUNHLEFBQ1A7eUJBRkksQUFFUyxBQUNiO3VCQUhJLEFBR08sQUFDWDtxQkFKSSxBQUlNLEFBQ1Y7MEJBTEksQUFLVSxBO0FBTFYsQUFDSixpQkFjSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDswRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBRVA7c0NBQUEsQUFBTSxBQUNOO3dDQUFBLEFBQVEsSUFBUixBQUFZLGtCQUFtQixNQUFBLEFBQUssTUFBTCxBQUFXLFFBQTFDLEFBQWtELEFBQzVDO0FBSkMsMkNBSVUsd0JBQVMsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUo5QixBQUlVLEFBQTRCOzhDQUUzQyxNQU5LLEFBTUEsT0FOQSxBQUtBLDBCQUxBLEFBS0EsYUFMQSxBQUtjLG9CQUxkLEFBS2MsT0FMZCxBQUtzQix3QkFMdEIsQUFLc0IsQUFFN0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFPLGNBUHhCLEFBT1AsQUFBYyxBQUErQjs7Z0RBUHRDO2dEQUFBO3VDQVlvQixjQUFBLEFBQUssSUFaekIsQUFZb0IsQUFBUzs7aUNBQTFCO0FBWkgsb0RBYUg7O3dDQUFBLEFBQVEsSUFiTCxBQWFILEFBQVk7O2dEQWJUO3VDQWVHLFNBQUEsQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQStCLGFBQWMsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BQTlELEFBQTZDLEFBQXdCLFVBQXJFLEFBQStFLFdBQS9FLEFBQTJGLEtBQUssRUFBQyxNQUFNLFNBZjFHLEFBZUcsQUFBZ0csQUFBTyxBQUFTOztpQ0FHdEg7OytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFBMUMsQUFBa0QsVUFsQi9DOztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUF1Qkg7O3dDQUFBLEFBQVEsYUFDWDtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBeEJ2QixBQXdCTixBQUFjLEFBQW1COztpQ0FHbEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0EzQlIsQUEyQlAsQUFBYyxBQUFVOztpQ0EzQmpCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBZ0NYO3lCQUNJOzttQ0FBTyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNIO0FBREc7QUFBQSxhQUFBLGtCQUNILEFBQUMsOEJBQUssdUJBQXVCLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxVQUF4Qzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkcsQUFDSCxBQUNBLEFBSUEsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkcsQUFNSCxBQUNKLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQVEsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDs4QkFBcEQ7Z0NBQUEsQUFFSTtBQUZKOytCQUVLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUMsd0NBQU0sT0FBUSxLQUFBLEFBQUssTUFBcEIsQUFBMEIsYUFBYyxVQUFVLHlCQUFTLEFBQ3ZEOzJCQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BQWxDLEFBQWMsQUFBMkIsQUFDNUM7QUFGRDs4QkFBQTtnQ0FKUixBQUVJLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsd0NBQU0sT0FBUSxLQUFBLEFBQUssTUFBcEIsQUFBMEIsT0FBUSxVQUFVLHlCQUFTLEFBQ2pEOzJCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQTVCLEFBQWMsQUFBcUIsQUFDdEM7QUFGRDs4QkFBQTtnQ0FWUixBQVFJLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUMsd0NBQU0sT0FBUSxLQUFBLEFBQUssTUFBcEIsQUFBMEIsV0FBWSxVQUFVLHlCQUFTLEFBQ3JEOzJCQUFBLEFBQUssU0FBUyxFQUFDLFdBQVcsTUFBQSxBQUFNLE9BQWhDLEFBQWMsQUFBeUIsQUFDMUM7QUFGRDs4QkFBQTtnQ0FoQlIsQUFjSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXVCLFFBQU8sU0FBVSxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQXBCSixBQW9CSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBNUJKLEFBQU8sQUFPUCxBQXFCSSxBQUdQOzs7OzttSEF0RTRCLEE7Ozs7O2lDQUVuQjtBLDBDQUFVLE1BQU0sQTtrRUFDZixFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJVLEEsQUFrRnpCOztrQkFBQSxBQUFnQiIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9raWNrc3RhcnQifQ==