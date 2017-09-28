'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _PhotographyPage = require('./PhotographyPage');

var _PhotographyPage2 = _interopRequireDefault(_PhotographyPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ayang/Desktop/andrea-site/pages/App.js';

var Camera = require('react-icons/lib/ti/camera-outline');
var Mail = require('react-icons/lib/ti/mail');
var BusinessCard = require('react-icons/lib/ti/business-card');
var Briefcase = require('react-icons/lib/ti/briefcase');
var Desktop = require('react-icons/lib/ti/device-desktop');
var Laptop = require('react-icons/lib/ti/device-laptop');
var Paintbrush = require('react-icons/lib/ti/brush');

var App = function (_Component) {
	(0, _inherits3.default)(App, _Component);

	function App() {
		(0, _classCallCheck3.default)(this, App);

		var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

		_this.state = {
			content: 'photography'
		};
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'showContent',
		value: function showContent(content) {
			console.log('show content for', content);
			this.setState({
				content: content
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var content = this.state.content;

			return _react2.default.createElement('div', { className: 'an-body', __source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/App.css', __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			})), content === 'home' ? _react2.default.createElement('div', { className: 'header', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('div', { className: 'andrea-title', id: 'andrealized', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'andrealized'), _react2.default.createElement('div', { className: 'andrea-subtitle', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'andrea yang'), _react2.default.createElement('br', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			})), _react2.default.createElement('div', { className: 'nav-container', __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement(Laptop, { className: 'nav-icon', onClick: this.showContent.bind(this, 'coding'), __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), _react2.default.createElement(Paintbrush, { className: 'nav-icon', onClick: this.showContent.bind(this, 'design'), __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}), _react2.default.createElement(Camera, { className: 'nav-icon', onClick: this.showContent.bind(this, 'photography'), __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}), _react2.default.createElement(BusinessCard, { className: 'nav-icon', onClick: this.showContent.bind(this, 'about'), __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}))) : null, content === 'about' ? _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}) : null, content === 'photography' ? _react2.default.createElement(_PhotographyPage2.default, { onBack: this.showContent.bind(this, 'home'), __source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}) : null);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;


var Nav = function (_React$Component) {
	(0, _inherits3.default)(Nav, _React$Component);

	function Nav() {
		(0, _classCallCheck3.default)(this, Nav);

		return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
	}

	(0, _createClass3.default)(Nav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'an-nav', onClick: this.props.onClick, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, this.props.text);
		}
	}]);

	return Nav;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWQiLCJQaG90b2dyYXBoeVBhZ2UiLCJDYW1lcmEiLCJyZXF1aXJlIiwiTWFpbCIsIkJ1c2luZXNzQ2FyZCIsIkJyaWVmY2FzZSIsIkRlc2t0b3AiLCJMYXB0b3AiLCJQYWludGJydXNoIiwiQXBwIiwic3RhdGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic2hvd0NvbnRlbnQiLCJiaW5kIiwiTmF2IiwicHJvcHMiLCJvbkNsaWNrIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBQ1AsSUFBSSxTQUFKLEFBQWE7QUFDYixJQUFJLE9BQUosQUFBVztBQUNYLElBQUksZUFBSixBQUFtQjtBQUNuQixJQUFJLFlBQUosQUFBZ0I7QUFDaEIsSUFBSSxVQUFKLEFBQWM7QUFDZCxJQUFJLFNBQUosQUFBYTtBQUNiLElBQUksYUFBSixBQUFpQjs7SSxBQUVJOzhCQUVwQjs7Z0JBQWM7c0NBQUE7O3dIQUViOztRQUFBLEFBQUs7WUFGUSxBQUViLEFBQWEsQUFDSDtBQURHLEFBQ1o7U0FFRDs7Ozs7OEJBRVcsQSxTQUFTLEFBQ3BCO1dBQUEsQUFBUSxJQUFSLEFBQVksb0JBQVosQUFBZ0MsQUFDaEM7UUFBQSxBQUFLO2FBQUwsQUFBYyxBQUNKLEFBRVY7QUFIYyxBQUNiOzs7OzJCQUlPO09BQUEsQUFDSCxVQUFXLEtBRFIsQUFDYSxNQURiLEFBQ0gsQUFFTDs7MEJBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsOENBQ08sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7ZUFBNUI7aUJBRkYsQUFDQyxBQUNDLEFBR0M7QUFIRDtvQkFHQyxBQUFZLHlCQUNiLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWUsZ0JBQWUsSUFBOUIsQUFBaUM7ZUFBakM7aUJBQUE7QUFBQTtNQURELEFBQ0MsQUFDQSxnQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUE7QUFBQTtNQUZELEFBRUMsQUFDQTs7ZUFBQTtpQkFKRixBQUNDLEFBR0MsQUFHRDtBQUhDO0FBQUEsd0JBR0QsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtvQ0FDQyxBQUFDLFVBQU8sV0FBUixBQUFrQixZQUFXLFNBQVMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBakIsQUFBc0IsTUFBNUQsQUFBc0MsQUFBNEI7ZUFBbEU7aUJBREQsQUFDQyxBQUNBO0FBREE7cUNBQ0EsQUFBQyxjQUFXLFdBQVosQUFBc0IsWUFBVyxTQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLE1BQWhFLEFBQTBDLEFBQTRCO2VBQXRFO2lCQUZELEFBRUMsQUFDQTtBQURBO3FDQUNBLEFBQUMsVUFBTyxXQUFSLEFBQWtCLFlBQVcsU0FBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFqQixBQUFzQixNQUE1RCxBQUFzQyxBQUE0QjtlQUFsRTtpQkFIRCxBQUdDLEFBQ0E7QUFEQTtxQ0FDQSxBQUFDLGdCQUFhLFdBQWQsQUFBd0IsWUFBVyxTQUFTLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLE1BQWxFLEFBQTRDLEFBQTRCO2VBQXhFO2lCQVpELEFBQ0QsQUFPQyxBQUlDO0FBQUE7VUFqQkosQUFvQkcsQUFHQSxrQkFBQSxBQUFZOztlQUNiO2lCQURDLEFBQ0Q7QUFBQTtBQUFBLElBQUEsSUF4QkYsQUF5QkcsQUFHQSxrQkFBQSxBQUFZLGdDQUNiLEFBQUMsMkNBQWdCLFFBQVEsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBakIsQUFBc0IsTUFBL0MsQUFBeUIsQUFBNEI7ZUFBckQ7aUJBREMsQUFDRDtBQUFBO0lBQUEsSUE5QkgsQUFDQyxBQThCRyxBQUdKOzs7OztBQXJEK0IsQTs7a0JBQVosQTs7O0lBd0RmLEE7Ozs7Ozs7Ozs7OzJCQUNJLEFBQ1I7MEJBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZSxVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXRDLEFBQTRDO2VBQTVDO2lCQUFBLEFBQ0U7QUFERjtJQUFBLE9BQ0UsQUFBSyxNQUZSLEFBQ0MsQUFDYSxBQUdkOzs7OztFQVBnQixnQkFBTSxBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXlhbmcvRGVza3RvcC9hbmRyZWEtc2l0ZSJ9