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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../web3');

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\k4\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.renderNames = function () {
      return _this.props.people[0].map(function (value, index) {
        return _react2.default.createElement('table', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, _react2.default.createElement('tbody', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement('tr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement('td', { style: { color: 'blue' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, 'Contributer'), _react2.default.createElement('td', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, value))));
      });
    }, _this.renderAmounts = function () {
      return _this.props.people[1].map(function (value, index) {
        return _react2.default.createElement('table', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react2.default.createElement('tbody', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement('tr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react2.default.createElement('td', { style: { color: 'green' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, 'Amount in ether'), _react2.default.createElement('td', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _web2.default.utils.fromWei(value, 'ether')))));
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          beneficiary = _props.beneficiary;

      var items = [{
        header: manager,
        meta: 'Address of manager',
        description: 'Created campaign'
      }, {
        header: minimumContribution,
        meta: 'Minimum contribution',
        description: 'Contribute atleast this much wei. '
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Balance',
        description: 'How much money left in contract'
      }, {
        header: beneficiary,
        meta: 'Owner',
        description: 'Campaign belongs to this person.'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'CampaignShow'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_contributeForm2.default, {
        address: this.props.address,
        accountInfo: this.props.accountInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, accountInfo, people, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                accountInfo = props.query.accountInfo;
                _context.next = 4;
                return campaign.methods.getPeople().call();

              case 4:
                people = _context.sent;
                _context.next = 7;
                return campaign.methods.getSummary().call();

              case 7:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  accountInfo: accountInfo,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4],
                  beneficiary: summary[5],
                  people: people
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInJlbmRlck5hbWVzIiwicHJvcHMiLCJwZW9wbGUiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiY29sb3IiLCJyZW5kZXJBbW91bnRzIiwidXRpbHMiLCJmcm9tV2VpIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiYmVuZWZpY2lhcnkiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImFjY291bnRJbmZvIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRQZW9wbGUiLCJjYWxsIiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVEsQUFBTSxBQUFNOztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFRLEFBQVc7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozt3TixBQXdESixjQUFjLFlBQU0sQUFDbEI7bUJBQU8sQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixHQUFsQixBQUFxQixJQUFLLFVBQUEsQUFBQyxPQUFELEFBQVEsT0FBVSxBQUNqRDsrQkFDRSxjQUFBOztzQkFBQTt3QkFBQSxBQUVFO0FBRkY7QUFBQSxTQUFBLGtCQUVFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUEsUUFBSyxPQUFPLEVBQUMsT0FBYixBQUFZLEFBQVE7c0JBQXBCO3dCQUFBO0FBQUE7V0FERixBQUNFLEFBSUEsZ0NBQUEsY0FBQSxRQUFJLEtBQUosQUFBVztzQkFBWDt3QkFBQSxBQUFtQjtBQUFuQjtXQVRSLEFBQ0UsQUFFRSxBQUNFLEFBS0UsQUFNVDtBQWhCRCxBQUFPLEFBaUJSLE9BakJRO0EsYSxBQWtCVCxnQkFBZ0IsWUFBTSxBQUNwQjttQkFBTyxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLEdBQWxCLEFBQXFCLElBQUssVUFBQSxBQUFDLE9BQUQsQUFBUSxPQUFVLEFBQ2pEOytCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBQyxPQUFaLEFBQVcsQUFBUTtzQkFBbkI7d0JBQUE7QUFBQTtXQURGLEFBQ0UsQUFDQSxvQ0FBQSxjQUFBLFFBQUksS0FBSixBQUFXO3NCQUFYO3dCQUFBLEFBQW1CO0FBQW5CO3lCQUFtQixBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW9CLE9BTC9DLEFBQ0UsQUFDRSxBQUNFLEFBRUUsQUFBbUIsQUFBMkIsQUFNdkQ7QUFaRCxBQUFPLEFBYVIsT0FiUTtBOzs7OztrQ0F4RE07bUJBUVQsS0FSUyxBQVFKO1VBUkksQUFFWCxpQkFGVyxBQUVYO1VBRlcsQUFHWCxpQkFIVyxBQUdYO1VBSFcsQUFJWCw2QkFKVyxBQUlYO1VBSlcsQUFLWCx1QkFMVyxBQUtYO1VBTFcsQUFNWCx3QkFOVyxBQU1YO1VBTlcsQUFPWCxxQkFQVyxBQU9YLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUpVLEFBQ1osQUFHZTtBQUhmLEFBQ0UsT0FGVTtnQkFNWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBVFUsQUFNWixBQUdlO0FBSGYsQUFDRTtnQkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBb0IsU0FEOUIsQUFDVSxBQUE2QixBQUNyQztjQUZGLEFBRVEsQUFDTjtxQkFmVSxBQVlaLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFwQkosQUFBYyxBQWlCWixBQUdlLEFBSWpCO0FBUEUsQUFDRTs7MkNBTUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTs7Ozs2QkFxQ0MsQUFDUjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFHQSxpQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0c7QUFESDtjQURGLEFBQ0UsQUFDRyxBQUFLLEFBR1IsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7aUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO3FCQUFhLEtBQUEsQUFBSyxNQUZwQixBQUUwQjs7b0JBRjFCO3NCQVpWLEFBQ0UsQUFJRSxBQUNFLEFBS0UsQUFDRSxBQVdYO0FBWFc7QUFDRTs7Ozs7NEcsQUF4R2dCOzs7OzttQkFDdEI7QSwyQkFBVyx3QkFBVSxNQUFBLEFBQU0sTUFBaEIsQUFBc0IsQSxBQUNqQztBLDhCQUFjLE1BQUEsQUFBTSxNQUFNLEE7O3VCQUNYLFNBQUEsQUFBUyxRQUFULEFBQWlCLFksQUFBakIsQUFBOEI7O21CQUE3QztBOzt1QkFFZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBYyxBLEFBQS9COzttQkFBaEI7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7K0JBRkssQUFFUSxBQUNiO3VDQUFxQixRQUhoQixBQUdnQixBQUFRLEFBQzdCOzJCQUFTLFFBSkosQUFJSSxBQUFRLEFBQ2pCO2lDQUFlLFFBTFYsQUFLVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQU5YLEFBTVcsQUFBUSxBQUN4QjsyQkFBUyxRQVBKLEFBT0ksQUFBUSxBQUNqQjsrQkFBYSxRQVJSLEFBUVEsQUFBUSxBQUNyQjswQkFUSyxBQVNHLEE7QUFUSCxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUnFCLEEsQUFxSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9rNCJ9