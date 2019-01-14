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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\k4\\pages\\index2.js';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var _this2 = this;

      var items = this.props.campaigns.map(function (address, index) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + _this2.props.accountInfo.accountInfo + '/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, ' view campaign ')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h3', { style: { padding: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Open Campaigns'), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaigns, accountInfo, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 3:
                campaigns = _context.sent;
                accountInfo = props.query;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns, accountInfo: accountInfo, accounts: accounts });

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleDIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJmYWN0b3J5IiwiQ2FyZCIsIkJ1dHRvbiIsIkZvcm0iLCJMYWJlbCIsIklucHV0IiwiRHJvcGRvd24iLCJMYXlvdXQiLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsImluZGV4IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJhY2NvdW50SW5mbyIsImZsdWlkIiwicGFkZGluZyIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJxdWVyeSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVEsQUFBTSxBQUFRLEFBQU0sQUFBTyxBQUFROztBQUMzQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFNLEFBQWE7O0FBQzNCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7c0NBb0JhO21CQUtmOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFLLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMxRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUssdUJBQXFCLE9BQUEsQUFBSyxNQUFMLEFBQVcsWUFBaEMsQUFBNEMsb0JBQWxELEFBQWlFO3dCQUFqRTswQkFBQSxBQUNFO0FBREY7V0FBQSxrQkFDRSxjQUFBOzt3QkFBQTswQkFBQTtBQUFBO0FBQUEsYUFKQyxBQUdILEFBQ0UsQUFHSjtpQkFQRixBQUFPLEFBT0UsQUFFVjtBQVRRLEFBQ0w7QUFGSixBQUFjLEFBV2QsT0FYYzsyQ0FXUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdDLEFBRVQ7OzZCQUNHLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsa0JBQ0csY0FBQTs7b0JBQUE7c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUUsY0FBQSxRQUFJLE9BQVMsRUFBQyxTQUFkLEFBQWEsQUFBVTtvQkFBdkI7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFDQyx3QkFMVCxBQUNHLEFBQ0csQUFHRyxBQUFLLEFBUWQ7Ozs7OzJHQXBEOEIsQTs7Ozs7Ozs7dUJBRUgsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF3QyxBOzttQkFBMUQ7QSxxQ0FDQTtBLDhCQUFjLE1BQU0sQTs7dUJBS0gsY0FBQSxBQUFLLElBQUwsQSxBQUFTOzttQkFBMUI7QTtpREFFQyxFQUFDLFdBQUQsV0FBWSxhQUFaLGFBQTBCLFUsQUFBMUI7Ozs7Z0RBRU47O3dCQUFBLEFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkYSxBLEFBeUQ1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleDIuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9rNCJ9