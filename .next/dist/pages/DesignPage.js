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

var _jsxFileName = '/Users/ayang/Desktop/andrea-site/pages/DesignPage.js';

var LeftArrow = require('react-icons/lib/ti/arrow-left');

var images = [{
	key: 'ghibli',
	src: '/static/images/totoro.png',
	title: 'Studio Ghibli Visual Book',
	description: 'Comb bound book containing five illustrated pages, a front cover, and a back cover. Made in Illustrator.'
}, {
	key: 'houseplus',
	src: '/static/images/houseplus_bg.png',
	title: 'House+ App Icon',
	description: 'Designed an icon using Illustrator for the multi award-winning House+ app.'
}, {
	key: 'tealight',
	src: '/static/images/tealight.jpg',
	title: 'Tea Light Holder',
	description: 'Handmade tea light holder made of paper. Iterated and prototyped before arriving at this final design.'
}, {
	key: 'cardboardchair',
	src: '/static/images/cardboardchair.jpg',
	title: 'Cardboard Chair',
	description: 'Handmade cardboard chair created using an ergonomic pentagon-like shape.'
}, {
	key: 'baskerville',
	src: '/static/images/baskerville.png',
	title: 'Baskerville Typeface Research',
	description: 'Poster describing the origins of Baskerville. Made with InDesign.'
}];

var DesignPage = function (_Component) {
	(0, _inherits3.default)(DesignPage, _Component);

	function DesignPage() {
		(0, _classCallCheck3.default)(this, DesignPage);

		return (0, _possibleConstructorReturn3.default)(this, (DesignPage.__proto__ || (0, _getPrototypeOf2.default)(DesignPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(DesignPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement('div', { className: 'content-page-header', __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(LeftArrow, { className: 'nav-icon', onClick: this.props.onBack, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			})), _react2.default.createElement('div', { className: 'photos-page-content', __source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Design'), images.map(function (image, idx) {
				return _react2.default.createElement('img', { src: image.src, className: 'photo', onClick: _this2.props.showModal.bind(_this2, image), key: idx, __source: {
						fileName: _jsxFileName,
						lineNumber: 45
					}
				});
			})));
		}
	}]);

	return DesignPage;
}(_react.Component);

exports.default = DesignPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0Rlc2lnblBhZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMZWZ0QXJyb3ciLCJyZXF1aXJlIiwiaW1hZ2VzIiwia2V5Iiwic3JjIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2lnblBhZ2UiLCJwcm9wcyIsIm9uQmFjayIsIm1hcCIsImltYWdlIiwiaWR4Iiwic2hvd01vZGFsIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7O0FBQ2hCLElBQUksWUFBSixBQUFnQjs7QUFFaEIsSUFBTTtNQUNMLEFBQ00sQUFDTDtNQUZELEFBRU0sQUFDTDtRQUhELEFBR1EsQUFDUDtjQUxhLEFBQ2QsQUFJYztBQUpkLEFBQ0MsQ0FGYTtNQU1YLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQVZhLEFBTVgsQUFJVztBQUpYLEFBQ0Y7TUFJRSxBQUNHLEFBQ0w7TUFGRSxBQUVHLEFBQ0w7UUFIRSxBQUdLLEFBQ1A7Y0FmYSxBQVdYLEFBSVc7QUFKWCxBQUNGO01BSUUsQUFDRyxBQUNMO01BRkUsQUFFRyxBQUNMO1FBSEUsQUFHSyxBQUNQO2NBcEJhLEFBZ0JYLEFBSVc7QUFKWCxBQUNGO01BSUUsQUFDRyxBQUNMO01BRkUsQUFFRyxBQUNMO1FBSEUsQUFHSyxBQUNQO2NBekJGLEFBQWUsQUFxQlgsQUFJVztBQUpYLEFBQ0Y7O0ksQUFPbUI7Ozs7Ozs7Ozs7OzJCQUVYO2dCQUNSOzswQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtvQ0FDQyxBQUFDLGFBQVUsV0FBWCxBQUFxQixZQUFXLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO2VBQXBEO2lCQUZGLEFBQ0MsQUFDQyxBQUVEO0FBRkM7d0JBRUQsY0FBQSxTQUFLLFdBQUwsQUFBZTtlQUFmO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDRSxrQkFBQSxBQUFPLElBQUksVUFBQSxBQUFDLE9BQUQsQUFBUSxLQUFRLEFBQzVCO2tEQUNNLEtBQUssTUFBVixBQUFnQixLQUFLLFdBQXJCLEFBQStCLFNBQVEsU0FBUyxPQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsYUFBckUsQUFBZ0QsQUFBZ0MsUUFBUSxLQUF4RixBQUE2RjtnQkFBN0Y7a0JBREQsQUFDQyxBQUVEO0FBRkM7S0FBQTtBQVRMLEFBQ0MsQUFJQyxBQUVHLEFBU0w7Ozs7O0FBbkJzQyxBOztrQkFBbkIsQSIsImZpbGUiOiJEZXNpZ25QYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9heWFuZy9EZXNrdG9wL2FuZHJlYS1zaXRlIn0=