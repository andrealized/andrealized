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

var images = [{
	key: 'rail-trail-bridge',
	src: '/static/images/rail-trail-bridge.jpg',
	title: 'Lehi Historic Rail Trail',
	description: 'During one of my morning runs I stopped to take a picture of the warm glow of the sun against the underside of a bridge.'
}, {
	key: 'kennedy',
	src: '/static/images/kennedy.jpg',
	title: 'Kennedy Center',
	description: 'My family loves to visit the Kennedy Center for concerts and musicals. I was inspired by the Center\'s magnificent architecture.'
}, {
	key: 'horses',
	src: '/static/images/horses.jpg',
	title: 'Horse-Drawn Carriage at Fontainebleau',
	description: 'This photo is actually unedited. The natural sunlight performed its magic on this.'
}, {
	key: 'vegas',
	src: '/static/images/vegas.jpg',
	title: 'Las Vegas Premium Outlets',
	description: 'Playing with contrast and perspective is especially fun in black and white.'
}, {
	key: 'pier',
	src: '/static/images/pier.jpg',
	title: 'Reykjavik Harbor Sunset',
	description: 'I took this photo through a window inside Harpa Concert Hall. Harpa is probably the most beautiful building I have ever seen.'
}, {
	key: 'eiffel',
	src: '/static/images/eiffel.jpg',
	title: 'Eiffel Tower',
	description: 'I did some editing on this to create an old-fashioned postcard vibe. The Eiffel Tower is such a beautiful structure!'
}, {
	key: 'dc',
	src: '/static/images/dc.jpg',
	title: 'City Center, Washington, D.C.',
	description: 'Whenever I visit D.C., I love to see what ever-changing decorations the City Center has to offer.'
}, {
	key: 'hawaii',
	src: '/static/images/hawaii.jpg',
	title: 'Ko Olina Lagoon',
	description: 'I would wait for the sunset every day in hopes of capturing a cool sunset picture, but this one turned out nice too.'
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
			var _this2 = this;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('div', { className: 'content-page-header', __source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(LeftArrow, { className: 'nav-icon', onClick: this.props.onBack, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			})), _react2.default.createElement('div', { className: 'photos-page-content', __source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Photography'), images.map(function (image, idx) {
				return _react2.default.createElement('img', { src: image.src, className: 'photo', onClick: _this2.props.showModal.bind(_this2, image), key: idx, __source: {
						fileName: _jsxFileName,
						lineNumber: 60
					}
				});
			})));
		}
	}]);

	return PhotographyPage;
}(_react.Component);

exports.default = PhotographyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Bob3RvZ3JhcGh5UGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxlZnRBcnJvdyIsInJlcXVpcmUiLCJpbWFnZXMiLCJrZXkiLCJzcmMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiUGhvdG9ncmFwaHlQYWdlIiwicHJvcHMiLCJvbkJhY2siLCJtYXAiLCJpbWFnZSIsImlkeCIsInNob3dNb2RhbCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7OztBQUNoQixJQUFJLFlBQUosQUFBZ0I7O0FBRWhCLElBQU07TUFDTCxBQUNNLEFBQ0w7TUFGRCxBQUVNLEFBQ0w7UUFIRCxBQUdRLEFBQ1A7Y0FMYSxBQUNkLEFBSWM7QUFKZCxBQUNDLENBRmE7TUFNWCxBQUNHLEFBQ0w7TUFGRSxBQUVHLEFBQ0w7UUFIRSxBQUdLLEFBQ1A7Y0FWYSxBQU1YLEFBSVc7QUFKWCxBQUNGO01BSUUsQUFDRyxBQUNMO01BRkUsQUFFRyxBQUNMO1FBSEUsQUFHSyxBQUNQO2NBZmEsQUFXWCxBQUlXO0FBSlgsQUFDRjtNQUlFLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQXBCYSxBQWdCWCxBQUlXO0FBSlgsQUFDRjtNQUlFLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQXpCYSxBQXFCWCxBQUlXO0FBSlgsQUFDRjtNQUlFLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQTlCYSxBQTBCWCxBQUlXO0FBSlgsQUFDRjtNQUlFLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQW5DYSxBQStCWCxBQUlXO0FBSlgsQUFDRjtNQUlFLEFBQ0csQUFDTDtNQUZFLEFBRUcsQUFDTDtRQUhFLEFBR0ssQUFDUDtjQXhDRixBQUFlLEFBb0NYLEFBSVc7QUFKWCxBQUNGOztJQU9tQixBOzs7Ozs7Ozs7OzsyQkFFWDtnQkFDUjs7MEJBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7b0NBQ0MsQUFBQyxhQUFVLFdBQVgsQUFBcUIsWUFBVyxTQUFTLEtBQUEsQUFBSyxNQUE5QyxBQUFvRDtlQUFwRDtpQkFGRixBQUNDLEFBQ0MsQUFFRDtBQUZDO3dCQUVELGNBQUEsU0FBSyxXQUFMLEFBQWU7ZUFBZjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0UsdUJBQUEsQUFBTyxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsS0FBUSxBQUM1QjtrREFDTSxLQUFLLE1BQVYsQUFBZ0IsS0FBSyxXQUFyQixBQUErQixTQUFRLFNBQVMsT0FBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLGFBQXJFLEFBQWdELEFBQWdDLFFBQVEsS0FBeEYsQUFBNkY7Z0JBQTdGO2tCQURELEFBQ0MsQUFFRDtBQUZDO0tBQUE7QUFUTCxBQUNDLEFBSUMsQUFFRyxBQVNMOzs7OztBQW5CMkMsQTs7a0JBQXhCLEEiLCJmaWxlIjoiUGhvdG9ncmFwaHlQYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9heWFuZy9EZXNrdG9wL2FuZHJlYS1zaXRlIn0=