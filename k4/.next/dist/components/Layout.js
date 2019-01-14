'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Ajita.Pancholi\\Desktop\\k4\\components\\Layout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 4em;\n  background-image: url("/static/bg1.jpg");\n  height: 100%; \n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: fixed;\n\n'], ['\n  padding: 4em;\n  background-image: url("/static/bg1.jpg");\n  height: 100%; \n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: fixed;\n\n']);

//import myImage from '../public/bg.jpg';

var Wrapper = _styledComponents2.default.div(_templateObject);
//width: 100%;
//background: papayawhip;
//background-image: url(${myImage});

exports.default = function (props) {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), props.children)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJzdHlsZWQiLCJGb290ZXIiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7Ozs7Ozs7OztBQUNuQjs7QUFFQSxJQUFNLFVBQVUsMkJBQVYsQUFBaUIsSUFBdkI7QUFXQTtBQUNBO0FBQ0EsQUFDQTs7a0JBQWUsaUJBQVMsQUFDdEI7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDTTtBQUROO0FBQUEsR0FBQSxrQkFDTSxBQUFDOztnQkFBRDtrQkFBQSxBQUNGO0FBREU7QUFBQSxxQkFDRixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQTtTQUNFLEFBQ00sQUFDSjtVQUZGLEFBRU87O2dCQUZQO2tCQUZBLEFBQ0YsQUFDRSxBQU9GO0FBUEU7QUFDRSx1QkFNSixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0M7QUFERDtBQUFBLFlBWlIsQUFDRSxBQUNNLEFBU0YsQUFFUyxBQVNoQjtBQXZCRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWppdGEuUGFuY2hvbGkvRGVza3RvcC9rNCJ9