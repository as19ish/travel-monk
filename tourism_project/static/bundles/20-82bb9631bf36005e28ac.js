(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/css-loader/dist/cjs.js!./react/components/event_article/event_article.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./react/components/event_article/event_article.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"a {\\n  text-decoration: none;\\n}\\n\\n.control ul, li {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.control ul {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.control ul li {\\n  width: 70%;\\n  margin: 0 2%;\\n  margin-bottom: 50px;\\n}\\n\\n.control ul li a {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.control ul li .team-img {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n  border-radius: 50%;\\n  transition: 0.6s;\\n  transform-style: preserve-3d;\\n}\\n\\n/* Fake content for size */\\n.control ul li .team-img::before {\\n  display: block;\\n  padding-bottom: 100%;\\n  content: '';\\n}\\n\\n/* Border gradient */\\n.control ul li .team-img::after {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%; \\n  top: -100%;\\n  left: -100%;\\n  border-radius: 50%;\\n  background-color: #FFCC03;\\n  content: '';\\n  z-index: -1;\\n  transition: 0.5s;\\n}\\n\\n/* Image border */\\n.control ul li .team-img .front,\\n.control ul li .team-img .back {\\n  position: absolute;\\n  top: 6px;\\n  left: 6px;\\n  right: 6px;\\n  bottom: 6px;\\n}\\n\\n/* Center img */\\n.control ul li .team-img .front img,\\n.control ul li .team-img .back img {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 50%;\\n  left: 50%;\\n  border-radius: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.control ul li .team-img .back {\\n  opacity: 0;\\n  transition: all 0s 0.15s;\\n  transform: ratateY(180deg);\\n}\\n\\n.control ul li a:hover .team-img {\\n  transform: rotateY(180deg);\\n}\\n\\n.control ul li a:hover .team-img::after {\\n  top: 0;\\n  left: 0;\\n}\\n\\n.control ul li a:hover .team-img .back {\\n  opacity: 1;\\n}\\n\\n.ev_button\\n{\\n\\n    border-radius: 20px;\\n    font-weight: bold;\\n    width: 150px;\\n    font-size: 1rem;\\n    background-color: #ffc107;\\n    border-color: #ffc107;\\n\\n}\\n \\n.event_heading{\\nfont-size: 32px;\\n    font-weight: 600;\\n    background-color: #FFCC03;\\n    display: inline-block;\\n    line-height: 1;\\n    padding: 12px 35px 10px;\\n    margin-top: 40px;\\n    margin-bottom: 50px;\\n}\\n\\n@media screen and (max-width: 900px){\\n\\n.on_small_padding_0\\n{\\n padding:0 !important;\\n}\\n}\\n\\n\\n.container_loading {\\n\\tz-index: 999;\\n\\theight: 2em;\\n\\twidth: 15em;\\n\\toverflow: show;\\n\\tmargin: auto;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n}\\n\\n.bar {\\n\\twidth: 10px;\\n\\theight: 2px;\\n\\tmargin-right: 4px;\\n\\tdisplay: inline-block;\\n\\tbackground-color: #7B5DED;\\n}\\n\\n.progress {\\n\\twidth: 172px;\\n\\theight: 5px;\\n\\tdisplay: block;\\n\\tbackground-color: #7B5DED;\\n\\tposition: relative;\\n\\ttop: 10px;\\n\\tanimation-name: Progress;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: ease-in-out;\\n\\tanimation-delay: 0S;\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate;\\n\\tanimation-fill-mode: forwards;\\n}\\n\\n@keyframes Progress {\\n\\t0% {\\n\\t\\twidth: 0px;\\n\\t}\\n\\n\\t100% {\\n\\t\\twidth: 172px;\\n\\t}\\n}\\n\\n.bar1 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.03s;\\n}\\n\\n.bar2 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.06s;\\n}\\n\\n.bar3 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.09s;\\n}\\n\\n.bar4 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.12s;\\n}\\n\\n.bar5 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.15s;\\n}\\n\\n.bar6 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.18s;\\n}\\n\\n.bar7 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.21s;\\n}\\n\\n.bar8 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.24s;\\n}\\n\\n.bar9 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.27s;\\n}\\n\\n.bar10 {\\n\\tanimation-name: Bar;\\n\\tanimation-duration: 800ms;\\n\\tanimation-timing-function: cubic- bezier(0.54, -0.01, 0.42, 0.99);\\n\\tanimation-iteration-count: infinite;\\n\\tanimation-direction: alternate-reverse;\\n\\tanimation-fill-mode: both;\\n\\tanimation-delay: 0.3s;\\n}\\n\\n@keyframes Bar {\\n\\t0% {\\n\\t\\tbackground-color: #7B5DED;\\n\\t\\ttransform: scaleY(0.5);\\n\\t}\\n\\n\\t100% {\\n\\t\\ttransform: scaleY(10);\\n\\t}\\n}\\n\\n.blog_tab_container{\\nmargin-top: 10px;\\ntext-align: center;\\n} \", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./react/components/event_article/event_article.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./react/components/event_article/event_article.css":
/*!**********************************************************!*\
  !*** ./react/components/event_article/event_article.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./event_article.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/event_article/event_article.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js!./event_article.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/event_article/event_article.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./event_article.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/event_article/event_article.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./react/components/event_article/event_article.css?");

/***/ }),

/***/ "./react/components/event_article/event_article.jsx":
/*!**********************************************************!*\
  !*** ./react/components/event_article/event_article.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\n__webpack_require__(/*! ./event_article.css */ \"./react/components/event_article/event_article.css\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction MyVerticallyCenteredModal(props) {\n  return _react2.default.createElement(\n    _reactBootstrap.Modal,\n    _extends({}, props, {\n      size: 'lg',\n      'aria-labelledby': 'contained-modal-title-vcenter',\n      centered: true,\n      style: { color: 'white' }\n    }),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Header,\n      { closeButton: true, className: 'modal_cross_sign_white', style: { background: 'black' } },\n      _react2.default.createElement(\n        _reactBootstrap.Modal.Title,\n        { id: 'contained-modal-title-vcenter', style: { color: '#FFCC03', fontSize: '1.2rem', textTransform: 'capitalize' } },\n        props.data['subject']\n      )\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Body,\n      null,\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '650', textAlign: 'center' } },\n        props.data['sub1']\n      ),\n      _react2.default.createElement(_reactBootstrap.Image, { src: \"/static/media/\" + props.data['img1'], thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1rem', fontWeight: '600', textAlign: 'left' } },\n        props.data['des1']\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '650', textAlign: 'center' } },\n        props.data['sub2']\n      ),\n      _react2.default.createElement(_reactBootstrap.Image, { src: \"/static/media/\" + props.data['img2'], thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1rem', fontWeight: '600', textAlign: 'left' } },\n        props.data['des2']\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '650', textAlign: 'center' } },\n        props.data['sub3']\n      ),\n      _react2.default.createElement(_reactBootstrap.Image, { src: \"/static/media/\" + props.data['img3'], thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1rem', fontWeight: '600', textAlign: 'left' } },\n        props.data['des3']\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '650', textAlign: 'center' } },\n        props.data['sub4']\n      ),\n      _react2.default.createElement(_reactBootstrap.Image, { src: \"/static/media/\" + props.data['img4'], thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1rem', fontWeight: '600', textAlign: 'left' } },\n        props.data['des4']\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null)\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Footer,\n      null,\n      _react2.default.createElement(\n        _reactBootstrap.Button,\n        { onClick: props.onHide },\n        'Close'\n      )\n    )\n  );\n}\n\nfunction Loading() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'container_loading' },\n    _react2.default.createElement('div', { className: 'bar1 bar' }),\n    _react2.default.createElement('div', { className: 'bar2 bar' }),\n    _react2.default.createElement('div', { className: 'bar3 bar' }),\n    _react2.default.createElement('div', { className: 'bar4 bar' }),\n    _react2.default.createElement('div', { className: 'bar5 bar' }),\n    _react2.default.createElement('div', { className: 'bar6 bar' }),\n    _react2.default.createElement('div', { className: 'bar7 bar' }),\n    _react2.default.createElement('div', { className: 'bar8 bar' }),\n    _react2.default.createElement('div', { className: 'bar9 bar' }),\n    _react2.default.createElement('div', { className: 'bar10 bar' }),\n    _react2.default.createElement(\n      'div',\n      { className: 'progressContainer' },\n      _react2.default.createElement('div', { className: 'progress' })\n    )\n  );\n}\n\nvar Event_article = function (_React$Component) {\n  _inherits(Event_article, _React$Component);\n\n  function Event_article(props) {\n    _classCallCheck(this, Event_article);\n\n    var _this = _possibleConstructorReturn(this, (Event_article.__proto__ || Object.getPrototypeOf(Event_article)).call(this, props));\n\n    _this.state = {\n      loading: true,\n      modal_data: {},\n      modalShow: false,\n      data: {},\n      event: {},\n      blog: {},\n      info: {},\n      article: {},\n      other: {},\n      flag: '' //decides which to expand on click,, its, values are.....event,blog etc\n    };\n    _this.handle_expand = _this.handle_expand.bind(_this);\n    return _this;\n  }\n\n  _createClass(Event_article, [{\n    key: 'handle_expand',\n    value: function handle_expand(name) {\n      this.setState({ flag: name });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var event = [];\n      var blog = [];\n      var info = [];\n      var article = [];\n      var other = [];\n      _axios2.default.get('/view_event_article_ALL/').then(function (res) {\n        for (var x = 0; x < res.data.event_data.length; x++) {\n          if (res.data.event_data[x]['type'] == 'Event') {\n            event.push(res.data.event_data[x]);\n          }\n          if (res.data.event_data[x]['type'] == 'Blog') {\n            blog.push(res.data.event_data[x]);\n          }\n          if (res.data.event_data[x]['type'] == 'Info') {\n            info.push(res.data.event_data[x]);\n          }\n          if (res.data.event_data[x]['type'] == 'Article') {\n            article.push(res.data.event_data[x]);\n          }\n          if (res.data.event_data[x]['type'] == 'Other') {\n            other.push(res.data.event_data[x]);\n          }\n        }\n        _this2.setState({\n          loading: false,\n          data: res.data.event_data,\n          event: event,\n          blog: blog,\n          info: info,\n          article: article,\n          other: other\n\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var items = ['event', 'blog', 'info', 'article', 'other'];\n      var event_items = [[], [], [], [], []];\n\n      var _loop = function _loop(i) {\n        var name = items[i];\n\n        var _loop2 = function _loop2(x) {\n          if (x > 3) {\n            if (_this3.state.flag != name) {\n              event_items[i].push(_react2.default.createElement(\n                'div',\n                { className: 'm-left-30', style: { textAlign: 'center', marginTop: '50px' } },\n                _react2.default.createElement(\n                  _reactBootstrap.Button,\n                  { className: 'ev_button', onClick: function onClick() {\n                      return _this3.handle_expand(name);\n                    } },\n                  'View All'\n                )\n              ));\n              return 'break';\n            }\n          }\n          var variant = _this3.state[name][x];\n          event_items[i].push(_react2.default.createElement(\n            'div',\n            { className: 'col-lg-4 col-md-3 testimonials-item', style: { height: '230px' }, onClick: function onClick() {\n                _this3.setState({ modal_data: variant, modalShow: true });\n              } },\n            _react2.default.createElement(\n              'div',\n              { className: 'carousel-item-c' },\n              _react2.default.createElement(\n                'div',\n                { className: 'card-box-b card-shadow news-box' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'img-box-b' },\n                  _react2.default.createElement('img', { src: \"/static/media/\" + _this3.state[name][x]['img1'], alt: '', className: 'img-b img-fluid', style: { height: '200px' } })\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'card-overlay' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'card-header-b' },\n                    _react2.default.createElement(\n                      'div',\n                      { className: 'card-title-b' },\n                      _react2.default.createElement(\n                        'h2',\n                        { className: 'title-2' },\n                        _react2.default.createElement(\n                          'a',\n                          null,\n                          _this3.state[name][x]['subject']\n                        )\n                      )\n                    )\n                  )\n                )\n              )\n            )\n          ));\n        };\n\n        for (var x = 0; x < _this3.state[name].length; x++) {\n          var _ret2 = _loop2(x);\n\n          if (_ret2 === 'break') break;\n        }\n      };\n\n      for (var i = 0; i < items.length; i++) {\n        _loop(i);\n      }\n\n      var src = \"/static/media/home_images/\";\n      //let images = [\"3.jpg\",\"28.jpg\",\"6.jpg\",\"7.jpg\",\"10.jpg\",\"13.jpg\",\"15.jpg\",\"16.jpg\",\"18.jpg\",\"21.jpg\",\"22.jpg\",\"23.jpg\",\"24.jpg\"];\n      var images = [\"3.jpg\"];\n      var elements = images.map(function (element, i, arr) {\n        var style_obj = {\n          backgroundImage: \"url(\" + src + element + \")\"\n        };\n        var cls = i == 0 ? \"carousel-item active\" : \"carousel-item\";\n        return _react2.default.createElement(\n          'div',\n          { className: cls, style: style_obj },\n          _react2.default.createElement(\n            'div',\n            { className: 'carousel-container' },\n            _react2.default.createElement(\n              'div',\n              { className: 'container' },\n              _react2.default.createElement(\n                'h2',\n                { className: 'animate__animated animate__fadeInDown' },\n                'WELCOME TO ',\n                _react2.default.createElement(\n                  'span',\n                  { style: { borderLeft: '4px solid #18d26e', color: '#18d26e' } },\n                  '\\xA0\\xA0Event / Article'\n                )\n              )\n            )\n          )\n        );\n      });\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'section',\n          { id: 'intro', className: 'height_450px' },\n          _react2.default.createElement(\n            'div',\n            { className: 'intro-container' },\n            _react2.default.createElement(\n              'div',\n              { id: 'introCarousel', className: 'carousel  slide carousel-fade', 'data-ride': 'carousel' },\n              _react2.default.createElement('ol', { className: 'carousel-indicators' }),\n              _react2.default.createElement(\n                'div',\n                { className: 'carousel-inner', role: 'listbox' },\n                elements\n              ),\n              _react2.default.createElement(\n                'a',\n                { className: 'carousel-control-prev', href: '#introCarousel', role: 'button', 'data-slide': 'prev' },\n                _react2.default.createElement('span', { className: 'carousel-control-prev-icon ion-chevron-left', 'aria-hidden': 'true' }),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'sr-only' },\n                  'Previous'\n                )\n              ),\n              _react2.default.createElement(\n                'a',\n                { className: 'carousel-control-next', href: '#introCarousel', role: 'button', 'data-slide': 'next' },\n                _react2.default.createElement('span', { className: 'carousel-control-next-icon ion-chevron-right', 'aria-hidden': 'true' }),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'sr-only' },\n                  'Next'\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _reactBootstrap.Tabs,\n          { defaultActiveKey: \"EVENTS\", id: 'uncontrolled-tab-example' },\n          _react2.default.createElement(\n            _reactBootstrap.Tab,\n            { eventKey: 'EVENTS', title: 'EVENTS' },\n            _react2.default.createElement(\n              _reactBootstrap.Container,\n              { className: 'blog_tab_container' },\n              _react2.default.createElement(\n                _reactBootstrap.Row,\n                { className: 'row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog' },\n                this.state.loading ? _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(Loading, null)\n                ) : event_items[0]\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Tab,\n            { eventKey: 'BLOGS', title: 'BLOGS' },\n            _react2.default.createElement(\n              _reactBootstrap.Container,\n              { className: 'blog_tab_container' },\n              _react2.default.createElement(\n                _reactBootstrap.Row,\n                { className: 'row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog' },\n                this.state.loading ? _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(Loading, null)\n                ) : event_items[1]\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Tab,\n            { eventKey: 'INFO', title: 'INFO' },\n            _react2.default.createElement(\n              _reactBootstrap.Container,\n              { className: 'blog_tab_container' },\n              _react2.default.createElement(\n                _reactBootstrap.Row,\n                { className: 'row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog' },\n                this.state.loading ? _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(Loading, null)\n                ) : event_items[2]\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Tab,\n            { eventKey: 'ARTICLES', title: 'ARTICLES' },\n            _react2.default.createElement(\n              _reactBootstrap.Container,\n              { className: 'blog_tab_container' },\n              _react2.default.createElement(\n                _reactBootstrap.Row,\n                { className: 'row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog' },\n                this.state.loading ? _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(Loading, null)\n                ) : event_items[3]\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Tab,\n            { eventKey: 'OTHERS', title: 'OTHERS' },\n            _react2.default.createElement(\n              _reactBootstrap.Container,\n              { className: 'blog_tab_container' },\n              _react2.default.createElement(\n                _reactBootstrap.Row,\n                { className: 'row-cols-md-4 row-cols-lg-4 row-cols-12 testimonials-container-blog' },\n                this.state.loading ? _react2.default.createElement(\n                  'div',\n                  null,\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(Loading, null)\n                ) : event_items[4]\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(MyVerticallyCenteredModal, {\n          show: this.state.modalShow,\n          data: this.state.modal_data,\n          onHide: function onHide() {\n            return _this3.setState({ modalShow: false });\n          }\n        })\n      );\n    }\n  }]);\n\n  return Event_article;\n}(_react2.default.Component);\n\nexports.default = Event_article;\n\n//# sourceURL=webpack:///./react/components/event_article/event_article.jsx?");

/***/ })

}]);