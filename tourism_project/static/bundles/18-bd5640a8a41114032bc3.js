(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/css-loader/dist/cjs.js!./react/components/all_blogs/all_blogs.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./react/components/all_blogs/all_blogs.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".all_blogs_heading{\\r\\n    text-align: center;\\r\\n    font-family: fantasy;\\r\\n    margin-top: 1em;\\r\\n    margin-bottom: 1em;\\r\\n  }\\r\\n  .all_blogs_card\\r\\n  {\\r\\n    cursor:pointer;\\r\\n  }\\r\\n  .all_blogs_row\\r\\n  {\\r\\n      font-family: sans-serif;\\r\\n    font-style: inherit;\\r\\n    font-size: 20px;\\r\\n    font-weight: 600\\r\\n  }\\r\\n .all_blogs_container\\r\\n {\\r\\n  margin-top:2.5%;\\r\\n  margin-bottom:2.5%;\\r\\n   padding:0 ! important;\\r\\n }\\r\\n\\r\\n @media (min-width: 1080px)\\r\\n {\\r\\n .all_blogs_container {\\r\\n    max-width: 90%;\\r\\n}\\r\\n\\r\\n }\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./react/components/all_blogs/all_blogs.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./react/components/all_blogs/all_blogs.css":
/*!**************************************************!*\
  !*** ./react/components/all_blogs/all_blogs.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./all_blogs.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/all_blogs/all_blogs.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js!./all_blogs.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/all_blogs/all_blogs.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./all_blogs.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/all_blogs/all_blogs.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./react/components/all_blogs/all_blogs.css?");

/***/ }),

/***/ "./react/components/all_blogs/all_blogs.jsx":
/*!**************************************************!*\
  !*** ./react/components/all_blogs/all_blogs.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\n__webpack_require__(/*! ./all_blogs.css */ \"./react/components/all_blogs/all_blogs.css\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction MyVerticallyCenteredModal(props) {\n\n  return _react2.default.createElement(\n    _reactBootstrap.Modal,\n    _extends({}, props, {\n      size: 'lg',\n      'aria-labelledby': 'contained-modal-title-vcenter',\n      centered: true,\n      style: { color: 'white' }\n    }),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Header,\n      { closeButton: true, className: 'modal_cross_sign_white', style: { background: 'black' } },\n      _react2.default.createElement(\n        _reactBootstrap.Modal.Title,\n        { id: 'contained-modal-title-vcenter', style: { color: '#FFCC03', fontSize: '1.2rem' } },\n        'LATEST UPDATE'\n      )\n    ),\n    _react2.default.createElement(\n      _reactBootstrap.Modal.Body,\n      null,\n      _react2.default.createElement(\n        'p',\n        { style: { textTransform: 'capitalize', whiteSpace: 'pre-line', color: 'black', fontSize: '1.4rem', fontWeight: '600', textAlign: 'center' } },\n        props.title\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(_reactBootstrap.Image, { src: props.src, thumbnail: true }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'p',\n        { id: 'replace_br', style: { whiteSpace: 'pre-line', color: 'black', fontSize: '1.2rem', fontWeight: '600' } },\n        props.data\n      )\n    )\n  );\n}\n\nvar Blog_component = function (_React$Component) {\n  _inherits(Blog_component, _React$Component);\n\n  function Blog_component(props) {\n    _classCallCheck(this, Blog_component);\n\n    var _this2 = _possibleConstructorReturn(this, (Blog_component.__proto__ || Object.getPrototypeOf(Blog_component)).call(this, props));\n\n    _this2.state = {\n      flag: false,\n      modal_data: '',\n      title: '',\n      src: ''\n    };\n    return _this2;\n  }\n\n  _createClass(Blog_component, [{\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var variant = this.props.blogs;\n      return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'col-lg-4 col-md-3 testimonials-item ', onClick: function onClick() {\n              _this3.setState({ src: \"/static/media/\" + variant.blog_image, flag: true, modal_data: variant.blog_details, title: variant.blog_title });\n            } },\n          _react2.default.createElement(\n            'div',\n            { className: 'carousel-item-c' },\n            _react2.default.createElement(\n              'div',\n              { className: 'card-box-b card-shadow news-box' },\n              _react2.default.createElement(\n                'div',\n                { className: 'img-box-b' },\n                _react2.default.createElement('img', { src: \"/static/media/\" + this.props.blogs.blog_image, alt: '', className: 'img-b img-fluid', style: { height: '280px' } })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'card-overlay' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'card-header-b' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'card-category-b' },\n                    _react2.default.createElement(\n                      'a',\n                      { className: 'category-b' },\n                      'News'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'card-title-b' },\n                    _react2.default.createElement(\n                      'h2',\n                      { className: 'title-2' },\n                      _react2.default.createElement(\n                        'a',\n                        null,\n                        this.props.blogs.blog_subject\n                      )\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'card-date' },\n                    _react2.default.createElement(\n                      'span',\n                      { className: 'date-b' },\n                      '18 Sep. 2020'\n                    )\n                  )\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(MyVerticallyCenteredModal, {\n          show: this.state.flag,\n          data: this.state.modal_data,\n          title: this.state.title,\n          src: this.state.src,\n          onHide: function onHide() {\n            return _this3.setState({ flag: false });\n          }\n        })\n      );\n    }\n  }]);\n\n  return Blog_component;\n}(_react2.default.Component);\n\nvar all_blogs_component = function (_React$Component2) {\n  _inherits(all_blogs_component, _React$Component2);\n\n  function all_blogs_component(props) {\n    _classCallCheck(this, all_blogs_component);\n\n    // Don't call this.setState() here!\n    var _this4 = _possibleConstructorReturn(this, (all_blogs_component.__proto__ || Object.getPrototypeOf(all_blogs_component)).call(this, props));\n\n    _this4.state = { blogs: {}\n      //  this.handleOptionChange = this.handleOptionChange.bind(this);\n    };return _this4;\n  }\n\n  _createClass(all_blogs_component, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this5 = this;\n\n      document.getElementById('call_back_fixed_button_id').style.display = 'block';\n\n      _axios2.default.get('http://localhost:8000/view_blogs_ALL/' /*{params:{gender:getState().gender.gender_selected,item:getState().show.item_selected}}*/).then(function (res) {\n\n        _this5.setState({ blogs: res.data.blogs });\n      });\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n\n      $(document).ready(function () {\n\n        // external js: isotope.pkgd.js\n\n        // store filter for each group\n        var buttonFilters = {};\n        var buttonFilter;\n        // quick search regex\n        var qsRegex;\n\n        // init Isotope\n        var $grid = $('.testimonials-container-blog').isotope({\n          itemSelector: '.testimonials-item',\n          filter: function filter() {\n            var $this = $(this);\n            var searchResult = qsRegex ? $this.text().match(qsRegex) : true;\n            var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;\n            return searchResult && buttonResult;\n          }\n        });\n\n        $('#testimonials-flters li').on('click', function () {\n          var $this = $(this);\n          $(\"#testimonials-flters li\").removeClass('filter-active');\n          $(this).addClass('filter-active');\n          // get group key\n          var $buttonGroup = $this.parents('.button-group');\n          var filterGroup = $buttonGroup.attr('data-filter-group');\n          // set filter for group\n          buttonFilters[filterGroup] = $this.attr('data-filter');\n          // combine filters\n          buttonFilter = concatValues(buttonFilters);\n          // Isotope arrange\n          $grid.isotope();\n        });\n\n        // use value of search field to filter\n        var $quicksearch = $('.quicksearch').keyup(debounce(function () {\n          qsRegex = new RegExp($quicksearch.val(), 'gi');\n          $grid.isotope();\n        }));\n        // flatten object by concatting values\n        function concatValues(obj) {\n          var value = '';\n          for (var prop in obj) {\n            value += obj[prop];\n          }\n          return value;\n        }\n\n        // debounce so filtering doesn't happen every millisecond\n        function debounce(fn, threshold) {\n          var timeout;\n          threshold = threshold || 100;\n          return function debounced() {\n            clearTimeout(timeout);\n            var args = arguments;\n            var _this = this;\n            function delayed() {\n              fn.apply(_this, args);\n            }\n            timeout = setTimeout(delayed, threshold);\n          };\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      var blog_length = Object.keys(this.state.blogs).length;\n      //let track_media_length=Object.keys(this.state.track_media).length\n\n      //\n      var items = [];\n      for (var i = 0; i < blog_length; i++) {\n        items.push(_react2.default.createElement(Blog_component, { blogs: this.state.blogs[i], index: i }));\n      }\n      var src = \"/static/media/home_images/\";\n      //let images = [\"3.jpg\",\"28.jpg\",\"6.jpg\",\"7.jpg\",\"10.jpg\",\"13.jpg\",\"15.jpg\",\"16.jpg\",\"18.jpg\",\"21.jpg\",\"22.jpg\",\"23.jpg\",\"24.jpg\"];\n      var images = [\"3.jpg\"];\n      var elements = images.map(function (element, i, arr) {\n        var style_obj = {\n          backgroundImage: \"url(\" + src + element + \")\"\n        };\n        var cls = i == 0 ? \"carousel-item active\" : \"carousel-item\";\n        return _react2.default.createElement(\n          'div',\n          { className: cls, style: style_obj },\n          _react2.default.createElement(\n            'div',\n            { className: 'carousel-container' },\n            _react2.default.createElement(\n              'div',\n              { className: 'container' },\n              _react2.default.createElement(\n                'h2',\n                { className: 'animate__animated animate__fadeInDown' },\n                'WELCOME TO ',\n                _react2.default.createElement(\n                  'span',\n                  { style: { borderLeft: '4px solid #18d26e', color: '#18d26e' } },\n                  '\\xA0\\xA0NEWS SECTION'\n                )\n              )\n            )\n          )\n        );\n      });\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'section',\n          { id: 'intro', className: 'height_450px' },\n          _react2.default.createElement(\n            'div',\n            { className: 'intro-container' },\n            _react2.default.createElement(\n              'div',\n              { id: 'introCarousel', className: 'carousel  slide carousel-fade', 'data-ride': 'carousel' },\n              _react2.default.createElement('ol', { className: 'carousel-indicators' }),\n              _react2.default.createElement(\n                'div',\n                { className: 'carousel-inner', role: 'listbox' },\n                elements\n              ),\n              _react2.default.createElement(\n                'a',\n                { className: 'carousel-control-prev', href: '#introCarousel', role: 'button', 'data-slide': 'prev' },\n                _react2.default.createElement('span', { className: 'carousel-control-prev-icon ion-chevron-left', 'aria-hidden': 'true' }),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'sr-only' },\n                  'Previous'\n                )\n              ),\n              _react2.default.createElement(\n                'a',\n                { className: 'carousel-control-next', href: '#introCarousel', role: 'button', 'data-slide': 'next' },\n                _react2.default.createElement('span', { className: 'carousel-control-next-icon ion-chevron-right', 'aria-hidden': 'true' }),\n                _react2.default.createElement(\n                  'span',\n                  { className: 'sr-only' },\n                  'Next'\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'section',\n          { id: 'testimonials', className: 'courses section-bg' },\n          _react2.default.createElement(\n            'div',\n            { className: 'container', 'data-aos': 'fade-up' },\n            _react2.default.createElement(\n              'div',\n              { className: 'section-header' },\n              _react2.default.createElement(\n                'h3',\n                null,\n                'Latest News Updates'\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row', 'data-aos': 'fade-up', 'data-aos-delay': '100' },\n              _react2.default.createElement('div', { className: ' col-lg-4' }),\n              _react2.default.createElement(\n                'div',\n                { className: ' col-lg-4' },\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  _react2.default.createElement('input', { type: 'text', className: 'quicksearch input-sm form-control', placeholder: 'news title/keyword' })\n                )\n              ),\n              _react2.default.createElement('div', { className: ' col-lg-4' })\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'row testimonials-container-blog', 'data-aos': 'fade-up', 'data-aos-delay': '200' },\n              items\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return all_blogs_component;\n}(_react2.default.Component);\n\nexports.default = all_blogs_component;\n\n//# sourceURL=webpack:///./react/components/all_blogs/all_blogs.jsx?");

/***/ })

}]);