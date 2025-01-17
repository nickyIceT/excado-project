"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/row/style");

var _row = _interopRequireDefault(require("antd/lib/row"));

require("antd/lib/col/style");

var _col = _interopRequireDefault(require("antd/lib/col"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("../../../../../core");

require("./DetailMachineBoxHorizontal.less");

var _i18n = require("../../../../../i18n");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var DetailMachineBoxHorizontal =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailMachineBoxHorizontal, _Component);

  function DetailMachineBoxHorizontal() {
    _classCallCheck(this, DetailMachineBoxHorizontal);

    return _possibleConstructorReturn(this, _getPrototypeOf(DetailMachineBoxHorizontal).apply(this, arguments));
  }

  _createClass(DetailMachineBoxHorizontal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var translate = this.props.t;

      var newsState = _core.newsStates.filter(function (item) {
        return item.value === _this.props.statusMachine;
      })[0];

      var newsType = _core.newsTypes.filter(function (item) {
        return item.value === _this.props.typeOfMachine;
      })[0];

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("a", {
        style: {
          color: 'black'
        },
        href: this.props.linkRedirect,
        title: this.props.title
      }, _react.default.createElement(_row.default, {
        gutter: 16
      }, _react.default.createElement(_col.default, {
        lg: 8,
        md: 6,
        xs: 12,
        sm: 12
      }, _react.default.createElement("a", {
        style: {
          backgroundImage: "url('".concat(this.props.imageUrl, "')")
        },
        className: "grid-post-image"
      })), _react.default.createElement(_col.default, {
        className: "col-info",
        lg: 16,
        md: 18,
        xs: 12,
        sm: 12
      }, _react.default.createElement(_row.default, {
        className: "info-main"
      }, _react.default.createElement("div", null, _react.default.createElement("a", {
        href: this.props.linkRedirect,
        className: "grid-post-title",
        title: this.props.title
      }, this.props.title), _react.default.createElement("div", {
        className: "grid-post-price"
      }, this.props.price ? (0, _core.formatMoney)(Number(this.props.price)) : '')), _react.default.createElement("div", null, _react.default.createElement("div", null, translate("common:".concat(newsState.value.toLowerCase()))), _react.default.createElement("div", null, newsType && newsType.label, " | ", translate('common:brand-name'), " ", this.props.brand), _react.default.createElement("div", null, this.props.location), this.props.isShowTotalFollowAndView ? _react.default.createElement("div", null, this.props.counterView ? _react.default.createElement("div", null, translate('common:counter-view-text'), ": ", this.props.counterView) : null, this.props.counterFollow ? _react.default.createElement("div", null, " ", translate('common:counter-follow-text'), ": ", this.props.counterFollow) : null) : null))))), _react.default.createElement("hr", {
        className: "end-line"
      }));
    }
  }]);

  return DetailMachineBoxHorizontal;
}(_react.Component);

var _default = (0, _i18n.withNamespaces)('common')(DetailMachineBoxHorizontal);

exports.default = _default;
//# sourceMappingURL=DetailMachineBoxHorizontal.js.map