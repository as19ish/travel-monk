(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./react/components/trekker_story/slider_trekker_story/slider_trekker_story.jsx":
/*!**************************************************************************************!*\
  !*** ./react/components/trekker_story/slider_trekker_story/slider_trekker_story.jsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactOwlCarousel = __webpack_require__(/*! react-owl-carousel */ \"./node_modules/react-owl-carousel/umd/OwlCarousel.js\");\n\nvar _reactOwlCarousel2 = _interopRequireDefault(_reactOwlCarousel);\n\n__webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ \"./node_modules/owl.carousel/dist/assets/owl.carousel.css\");\n\n__webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ \"./node_modules/owl.carousel/dist/assets/owl.theme.default.css\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _reactLazyLoadImageComponent = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction MyVerticallyCenteredModal(props) {\n\n  return _react2.default.createElement(\n    _reactBootstrap.Modal,\n    _extends({}, props, {\n      size: 'lg',\n      'aria-labelledby': 'contained-modal-title-vcenter',\n      centered: true,\n      style: { color: 'white' }\n    }),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Header,\n      { closeButton: true, className: 'modal_cross_sign_white', style: { background: 'black' } },\n      _react2.default.createElement(\n        _reactBootstrap.Modal.Title,\n        { id: 'contained-modal-title-vcenter', style: { color: '#FFCC03', fontSize: '1.2rem' } },\n        'TREKKER STORY'\n      )\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Body,\n      null,\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '600', textAlign: 'center' } },\n        props.title\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactBootstrap.Image, { src: props.src, thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { id: 'replace_br', style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1.2rem', fontWeight: '600' } },\n        props.data\n      )\n    )\n  );\n}\n\nvar Slider_trekker_story = function (_React$Component) {\n  _inherits(Slider_trekker_story, _React$Component);\n\n  function Slider_trekker_story(props) {\n    _classCallCheck(this, Slider_trekker_story);\n\n    var _this = _possibleConstructorReturn(this, (Slider_trekker_story.__proto__ || Object.getPrototypeOf(Slider_trekker_story)).call(this, props));\n\n    _this.state = { stories: [],\n      flag: false,\n      modal_data: '',\n      title: '',\n      src: ''\n    };\n    return _this;\n  }\n\n  _createClass(Slider_trekker_story, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _axios2.default.get('http://localhost:8000/view_trekker_story_4/').then(function (res) {\n\n        _this2.setState(res.data);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var options = {\n        autoplay: false,\n        lazyLoad: true,\n        rewind: true,\n        margin: 20,\n\n        animateOut: 'fadeOut',\n        animateIn: 'fadeIn',\n\n        responsiveClass: true,\n        autoHeight: true,\n        autoplayTimeout: 7000,\n        smartSpeed: 600,\n        nav: true,\n        loop: true,\n        responsive: {\n          0: {\n            items: 1\n          },\n\n          600: {\n            items: 3\n          },\n\n          1024: {\n            items: 3\n          },\n\n          1366: {\n            items: 3\n          }\n        }\n      };\n\n      var cards = [];\n      cards = this.state.stories.map(function (variant, idx) {\n\n        return _react2.default.createElement(\n          'div',\n          { className: 'col-lg-12 col-md-12 d-flex align-items-stretch', style: { cursor: 'pointer' } },\n          _react2.default.createElement(\n            'div',\n            { className: 'course-item', onClick: function onClick() {\n                _this3.setState({ src: \"/static/media/\" + variant.trek_photo, flag: true, modal_data: variant.description, title: variant.name + \"'s Story\" });\n              } },\n            _react2.default.createElement(_reactLazyLoadImageComponent.LazyLoadImage, {\n              alt: '...',\n              src: \"/static/media/\" + variant.trek_photo // use normal <img> attributes as props\n              , width: '100%',\n              height: '200px' }),\n            _react2.default.createElement(\n              'div',\n              { className: 'course-content' },\n              _react2.default.createElement(\n                'div',\n                { className: 'd-flex justify-content-between align-items-center mb-3' },\n                _react2.default.createElement(\n                  'h4',\n                  null,\n                  variant.trek_name\n                )\n              ),\n              _react2.default.createElement(\n                'p',\n                { style: { marginBottom: '0' } },\n                variant.description.substring(0, 120).concat('.... ')\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'trainer d-flex justify-content-between align-items-center' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'trainer-profile d-flex align-items-center' },\n                  _react2.default.createElement(_reactLazyLoadImageComponent.LazyLoadImage, {\n                    className: 'img-fluid',\n                    alt: '...',\n                    src: \"/static/media/\" + variant.profile_photo }),\n                  _react2.default.createElement(\n                    'span',\n                    null,\n                    variant.name\n                  )\n                )\n              )\n            )\n          )\n        );\n      });\n\n      console.log('stories = ', this.state.stories);\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'section',\n          { id: 'testimonials', className: 'courses section-bg' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container', 'data-aos': 'fade-up' },\n            _react2.default.createElement(\n              'div',\n              { className: 'section-header' },\n              _react2.default.createElement(\n                'h3',\n                null,\n                'Trekker stories'\n              )\n            ),\n            cards.length > 0 ? _react2.default.createElement(\n              'div',\n              { className: 'row', 'data-aos': 'zoom-in', 'data-aos-delay': '100' },\n              _react2.default.createElement(\n                _reactOwlCarousel2.default,\n                _extends({\n                  className: 'owl-theme'\n                }, options),\n                cards\n              )\n            ) : null\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: { marginTop: '10px', textAlign: 'center' } },\n            _react2.default.createElement(\n              'a',\n              { href: '/all_trekker_stories', className: 'common_btn btn-get-started scrollto animate__animated animate__fadeInUp' },\n              'View All'\n            )\n          )\n        ),\n        _react2.default.createElement(MyVerticallyCenteredModal, {\n          show: this.state.flag,\n          data: this.state.modal_data,\n          title: this.state.title,\n          src: this.state.src,\n          onHide: function onHide() {\n            return _this3.setState({ flag: false });\n          }\n        })\n      );\n    }\n  }]);\n\n  return Slider_trekker_story;\n}(_react2.default.Component);\n\nexports.default = Slider_trekker_story;\n\n//# sourceURL=webpack:///./react/components/trekker_story/slider_trekker_story/slider_trekker_story.jsx?");

/***/ })

}]);