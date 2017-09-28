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

var _jsxFileName = '/Users/ayang/Desktop/andrea-site/pages/PhotographyPage.js';

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

var PhotographyPage = function (_Component) {
	(0, _inherits3.default)(PhotographyPage, _Component);

	function PhotographyPage() {
		(0, _classCallCheck3.default)(this, PhotographyPage);

		return (0, _possibleConstructorReturn3.default)(this, (PhotographyPage.__proto__ || (0, _getPrototypeOf2.default)(PhotographyPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(PhotographyPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', { className: 'content-page', __source: {
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
			})), _react2.default.createElement('img', { src: PHOTO_SET[0].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement('img', { src: PHOTO_SET[1].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}), _react2.default.createElement('img', { src: PHOTO_SET[2].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement('img', { src: PHOTO_SET[0].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}), _react2.default.createElement('img', { src: PHOTO_SET[1].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}), _react2.default.createElement('img', { src: PHOTO_SET[2].src, className: 'photo', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}));
		}
	}]);

	return PhotographyPage;
}(_react.Component);

exports.default = PhotographyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Bob3RvZ3JhcGh5UGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxlZnRBcnJvdyIsInJlcXVpcmUiLCJQSE9UT19TRVQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImxhYmVsIiwiUGhvdG9ncmFwaHlQYWdlIiwicHJvcHMiLCJvbkJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7OztBQUNoQixJQUFJLFlBQUosQUFBZ0I7O0FBRWhCLElBQU07TUFDSixBQUNJLEFBQ0w7UUFGQyxBQUVNLEFBQ1A7U0FIQyxBQUdPLEFBQ1I7TUFKQyxBQUlJLEFBQ0w7UUFOaUIsQUFDaEIsQUFLTTtBQUxOLEFBQ0QsQ0FGaUI7TUFRaEIsQUFDSSxBQUNMO1FBRkMsQUFFTSxBQUNQO1NBSEMsQUFHTyxBQUNSO01BSkMsQUFJSSxBQUNMO1FBYmlCLEFBUWhCLEFBS007QUFMTixBQUNEO01BTUMsQUFDSSxBQUNMO1FBRkMsQUFFTSxBQUNQO1NBSEMsQUFHTyxBQUNSO01BSkMsQUFJSSxBQUNMO1FBcEJELEFBQWtCLEFBZWhCLEFBS007QUFMTixBQUNEOztJLEFBUW9COzs7Ozs7Ozs7OzsyQkFFWCxBQUNSOzBCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxjQUFBLFNBQUssV0FBTCxBQUFlO2VBQWY7aUJBQUEsQUFDQztBQUREO29DQUNDLEFBQUMsYUFBVSxXQUFYLEFBQXFCLFlBQVcsU0FBUyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7ZUFBcEQ7aUJBRkYsQUFDQyxBQUNDLEFBRUQ7QUFGQzsrQ0FFSSxLQUFLLFVBQUEsQUFBVSxHQUFwQixBQUF1QixLQUFLLFdBQTVCLEFBQXNDO2VBQXRDO2lCQUpELEFBSUMsQUFDQTtBQURBOzhDQUNLLEtBQUssVUFBQSxBQUFVLEdBQXBCLEFBQXVCLEtBQUssV0FBNUIsQUFBc0M7ZUFBdEM7aUJBTEQsQUFLQyxBQUNBO0FBREE7OENBQ0ssS0FBSyxVQUFBLEFBQVUsR0FBcEIsQUFBdUIsS0FBSyxXQUE1QixBQUFzQztlQUF0QztpQkFORCxBQU1DLEFBQ0E7QUFEQTs4Q0FDSyxLQUFLLFVBQUEsQUFBVSxHQUFwQixBQUF1QixLQUFLLFdBQTVCLEFBQXNDO2VBQXRDO2lCQVBELEFBT0MsQUFDQTtBQURBOzhDQUNLLEtBQUssVUFBQSxBQUFVLEdBQXBCLEFBQXVCLEtBQUssV0FBNUIsQUFBc0M7ZUFBdEM7aUJBUkQsQUFRQyxBQUNBO0FBREE7OENBQ0ssS0FBSyxVQUFBLEFBQVUsR0FBcEIsQUFBdUIsS0FBSyxXQUE1QixBQUFzQztlQUF0QztpQkFWRixBQUNDLEFBU0MsQUFHRjtBQUhFOzs7Ozs7QUFieUMsQTs7a0JBQXhCLEEiLCJmaWxlIjoiUGhvdG9ncmFwaHlQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9heWFuZy9EZXNrdG9wL2FuZHJlYS1zaXRlIn0=