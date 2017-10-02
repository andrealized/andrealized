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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ayang/Desktop/andrea-site/pages/AboutPage.js';

var LeftArrow = require('react-icons/lib/ti/arrow-left');

var PHOTO_SET = [{
	src: '/static/images/img1.jpg',
	width: 640,
	height: 640,
	alt: 'code',
	label: 'code'
}, {
	src: '/static/images/img2.jpg',
	width: 640,
	height: 640,
	alt: 'photography',
	label: 'photography'
}, {
	src: '/static/images/img3.jpg',
	width: 640,
	height: 640,
	alt: 'design',
	label: 'design'
}];

var AboutPage = function (_Component) {
	(0, _inherits3.default)(AboutPage, _Component);

	function AboutPage() {
		(0, _classCallCheck3.default)(this, AboutPage);

		return (0, _possibleConstructorReturn3.default)(this, (AboutPage.__proto__ || (0, _getPrototypeOf2.default)(AboutPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(AboutPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('div', { className: 'content-page-header', __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement(LeftArrow, { className: 'nav-icon', onClick: this.props.onBack, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			})), _react2.default.createElement('div', { className: 'about-page-body', __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('div', { className: 'bio-container', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'About Me'), 'Hi, I\'m Andrea. I grew up in Potomac, Maryland and currently live in Lehi, Utah. You might ask - how in the world did I end up in Utah? Well, a number of factors. My dream company, Adobe, has a breathtaking campus on the Wasatch front. I was recruited for a position at Adobe that aligned with my passions in both front-end engineering and data analysis. I love embracing the unknown, and Utah is a state where none of my friends have lived before. Last but not least, I fell in love with the 360 degree mountain views, numerous ski resorts within an hour\'s drive, and the "Best Snow on Earth". That\'s in quotes because that\'s what it literally says on Utah license plates. While living in Utah, I also picked up mountain biking and rock climbing.'), _react2.default.createElement('img', { src: '/static/images/myphoto.png', className: 'bio-photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			})));
		}
	}]);

	return AboutPage;
}(_react.Component);

exports.default = AboutPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0Fib3V0UGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxlZnRBcnJvdyIsInJlcXVpcmUiLCJQSE9UT19TRVQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxhYmVsIiwiQWJvdXRQYWdlIiwicHJvcHMiLCJvbkJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7OztBQUNoQixJQUFJLFlBQUosQUFBZ0I7O0FBRWhCLElBQU07TUFDSixBQUNJLEFBQ0w7UUFGQyxBQUVNLEFBQ1A7U0FIQyxBQUdPLEFBQ1I7TUFKQyxBQUlJLEFBQ0w7UUFOaUIsQUFDaEIsQUFLTTtBQUxOLEFBQ0QsQ0FGaUI7TUFRaEIsQUFDSSxBQUNMO1FBRkMsQUFFTSxBQUNQO1NBSEMsQUFHTyxBQUNSO01BSkMsQUFJSSxBQUNMO1FBYmlCLEFBUWhCLEFBS007QUFMTixBQUNEO01BTUMsQUFDSSxBQUNMO1FBRkMsQUFFTSxBQUNQO1NBSEMsQUFHTyxBQUNSO01BSkMsQUFJSSxBQUNMO1FBcEJELEFBQWtCLEFBZWhCLEFBS007QUFMTixBQUNEOztJLEFBUW9COzs7Ozs7Ozs7OzsyQkFFWCxBQUNSOzBCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDQztBQUREO29DQUNDLEFBQUMsYUFBVSxXQUFYLEFBQXFCLFlBQVcsU0FBUyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7ZUFBcEQ7aUJBRkYsQUFDQyxBQUNDLEFBRUQ7QUFGQzt3QkFFRCxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLGFBRkYsQUFDQyxBQWFBLDJ4QkFBSyxLQUFMLEFBQVMsOEJBQTZCLFdBQXRDLEFBQWdEO2VBQWhEO2lCQW5CSCxBQUNDLEFBSUMsQUFjQyxBQUtIO0FBTEc7Ozs7OztBQXRCa0MsQTs7a0JBQWxCLEEiLCJmaWxlIjoiQWJvdXRQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9heWFuZy9EZXNrdG9wL2FuZHJlYS1zaXRlIn0=