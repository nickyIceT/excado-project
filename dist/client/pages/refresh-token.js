"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

var _react = _interopRequireDefault(require("react"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RefreshToken =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RefreshToken, _React$Component);

  function RefreshToken() {
    _classCallCheck(this, RefreshToken);

    return _possibleConstructorReturn(this, _getPrototypeOf(RefreshToken).apply(this, arguments));
  }

  _createClass(RefreshToken, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _core.initializeFirebaseApp)();

      _app.default.auth().onAuthStateChanged(function (user) {
        if (user) {
          _app.default.auth().currentUser.getIdToken(true).then(function (idToken) {
            (0, _core.submitLoginForm)(idToken);
          });
        } else {
          window.location.href = '/';
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "refresh-token",
        style: {
          textAlign: 'center',
          marginTop: '100px'
        }
      }, _react.default.createElement(_spin.default, {
        spinning: true
      }), _react.default.createElement("form", {
        id: "form",
        method: "post",
        action: "/auth/login",
        style: {
          display: 'none'
        }
      }));
    }
  }]);

  return RefreshToken;
}(_react.default.Component);

var _default = RefreshToken;
exports.default = _default;
//# sourceMappingURL=refresh-token.js.map