(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/css-loader/dist/cjs.js!./react/components/trekker_story/trekker_story_form/trekker_story_form.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./react/components/trekker_story/trekker_story_form/trekker_story_form.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".label_style\\r\\n{\\r\\nfont-weight:600;\\r\\n font-size:1.1rem;\\r\\n}\\r\\n.width_50_in_large\\r\\n{\\r\\ndisplay:inline;\\r\\n width:50%;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 700px) {\\r\\n.width_50_in_large\\r\\n{\\r\\n width:100%;\\r\\n}\\r\\n }\\r\\n\\r\\n.imgPreview1 {\\r\\n  text-align: center;\\r\\n  margin: 5px 15px;\\r\\n  height: 200px;\\r\\n  width: 50%;\\r\\n  border-left: 1px solid #808080;\\r\\n  border-right: 1px solid #808080;\\r\\n  border-top: 5px solid #808080;\\r\\n  border-bottom: 5px solid #808080;\\r\\n}\\r\\n.imgPreview1 img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./react/components/trekker_story/trekker_story_form/trekker_story_form.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./react/components/trekker_story/trekker_story_form/trekker_story_form.css":
/*!**********************************************************************************!*\
  !*** ./react/components/trekker_story/trekker_story_form/trekker_story_form.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./trekker_story_form.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/trekker_story/trekker_story_form/trekker_story_form.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js!./trekker_story_form.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/trekker_story/trekker_story_form/trekker_story_form.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./trekker_story_form.css */ \"./node_modules/css-loader/dist/cjs.js!./react/components/trekker_story/trekker_story_form/trekker_story_form.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./react/components/trekker_story/trekker_story_form/trekker_story_form.css?");

/***/ }),

/***/ "./react/components/trekker_story/trekker_story_form/trekker_story_form.jsx":
/*!**********************************************************************************!*\
  !*** ./react/components/trekker_story/trekker_story_form/trekker_story_form.jsx ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./trekker_story_form.css */ \"./react/components/trekker_story/trekker_story_form/trekker_story_form.css\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Trekker_story_form = function (_React$Component) {\n  _inherits(Trekker_story_form, _React$Component);\n\n  function Trekker_story_form(props) {\n    _classCallCheck(this, Trekker_story_form);\n\n    var _this = _possibleConstructorReturn(this, (Trekker_story_form.__proto__ || Object.getPrototypeOf(Trekker_story_form)).call(this, props));\n\n    _this.state = {\n      loading: false,\n      name: '',\n      description: '',\n      file: '',\n      file1: '',\n      imagePreviewUrl: '',\n      imagePreviewUrl1: '',\n      track_details: [],\n      track_selected: []\n    };\n\n    _this.name_handleChange = _this.name_handleChange.bind(_this);\n    _this.description_handleChange = _this.description_handleChange.bind(_this);\n    _this._handleImageChange = _this._handleImageChange.bind(_this);\n    _this._handleImageChange1 = _this._handleImageChange1.bind(_this);\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n\n    return _this;\n  }\n\n  _createClass(Trekker_story_form, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _axios2.default.get('http://localhost:8000/get_track_id_name/').then(function (res) {\n        _this2.setState({ track_details: res.data.result });\n      });\n    }\n  }, {\n    key: 'name_handleChange',\n    value: function name_handleChange(event) {\n      this.setState({\n        name: event.target.value\n      });\n    }\n  }, {\n    key: 'description_handleChange',\n    value: function description_handleChange(event) {\n\n      if (event.target.value.length >= 5001) {\n        var msg = 'You Entered ' + event.target.value.length + ' Characters, ';\n        alert(msg + 'Only 5000 Characters Are Allowed In Review Description..');\n      } else {\n        this.setState({\n          description: event.target.value\n        });\n      }\n    }\n  }, {\n    key: '_handleImageChange',\n    value: function _handleImageChange(e) {\n      var _this3 = this;\n\n      e.preventDefault();\n      var reader = new FileReader();\n      var file = e.target.files[0];\n      var max_size = 2 * 1024 * 1024;\n      if (file.size > max_size) {\n        alert('File size exceeded limit 2 MB.');\n        this.setState({\n          file: ''\n        });\n      } else {\n        this.setState({\n          file: file\n        });\n      }\n      reader.onloadend = function () {\n        _this3.setState({\n          imagePreviewUrl: reader.result\n        });\n      };\n\n      reader.readAsDataURL(file);\n    }\n  }, {\n    key: '_handleImageChange1',\n    value: function _handleImageChange1(e) {\n      var _this4 = this;\n\n      e.preventDefault();\n      var reader = new FileReader();\n      var file = e.target.files[0];\n      var max_size = 2 * 1024 * 1024;\n      if (file.size > max_size) {\n        alert('File size exceeded limit 2 MB.');\n        this.setState({\n          file1: ''\n        });\n      } else {\n        this.setState({\n          file1: file\n        });\n      }\n      reader.onloadend = function () {\n        _this4.setState({\n          imagePreviewUrl1: reader.result\n        });\n      };\n\n      reader.readAsDataURL(file);\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var _this5 = this;\n\n      var call_API = true;\n\n      for (var key in this.state) {\n        if (key == 'loading') {} else if (this.state[key] == '') {\n          call_API = false;\n        }\n      }\n\n      if (call_API == false) {\n        var a = ' All Fields Are Required';\n        alert(a);\n        event.preventDefault();\n      }\n\n      if (call_API == true) {\n\n        var data = new FormData();\n        data.append('profile_image', this.state.file);\n        data.append('trek_image', this.state.file1);\n        data.append('name', this.state.name);\n        data.append('description', this.state.description);\n        data.append('track_id', this.state.track_selected[0]['id']);\n        data.append('track_name', this.state.track_selected[0]['track_name']);\n\n        var response_data = {};\n\n        this.setState({ loading: true });\n\n        (0, _axios2.default)({\n          method: 'post',\n          url: 'http://localhost:8000/submit_trekker_story/',\n          data: data\n        }).then(function (response) {\n          //handle success\n\n          document.getElementById('success_message').style.display = 'block';\n          window.setTimeout(function () {\n            (0, _jquery2.default)(\".alert\").fadeTo(500, 0).slideUp(500, function () {\n\n              (0, _jquery2.default)(\".alert\").fadeTo(500, 1);\n              document.getElementById('success_message').style.display = 'none';\n            });\n          }, 500);\n\n          _this5.setState({\n\n            loading: false,\n            name: '',\n            description: '',\n            file: '',\n            file1: '',\n            imagePreviewUrl: '',\n            imagePreviewUrl1: ''\n\n          });\n        }).catch(function (response) {\n          //handle error\n\n        });\n\n        //$(\".query_form\")[0].reset();\n\n        event.preventDefault();\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this6 = this;\n\n      console.log('state = ', this.state);\n      var color = this.state.file == '' ? 'red' : 'black';\n      var color_style = { color: color, fontSize: '16px' };\n\n      var color1 = this.state.file1 == '' ? 'red' : 'black';\n      var color_style1 = { color: color1, fontSize: '16px' };\n\n      console.log('color1 = ', color_style);\n      console.log('color2 = ', color_style1);\n\n      var item = [];\n\n      var _loop = function _loop(x) {\n        var selected = [_this6.state.track_details[x]];\n        item.push(_react2.default.createElement(\n          _reactBootstrap.Dropdown.Item,\n          { eventKey: selected['id'], onSelect: function onSelect(selected) {\n              _this6.setState({ track_selected: [_this6.state.track_details[x]] });\n            } },\n          _react2.default.createElement(\n            'span',\n            { style: { textTransform: 'capitalize' } },\n            selected[0]['track_name']\n          )\n        ));\n      };\n\n      for (var x = 0; x < this.state.track_details.length; x++) {\n        _loop(x);\n      }\n\n      var imagePreviewUrl = this.state.imagePreviewUrl;\n\n      var $imagePreview = null;\n      if (imagePreviewUrl) {\n        $imagePreview = _react2.default.createElement(_reactBootstrap.Image, { thumbnail: true, roundedCircle: true, variant: 'top', src: imagePreviewUrl, style: { height: '200px', width: '200px' } });\n      } else {\n        $imagePreview = _react2.default.createElement(_reactBootstrap.Image, { thumbnail: true, roundedCircle: true, variant: 'top', style: { height: '200px', width: '200px' } });\n      }\n\n      var imagePreviewUrl1 = this.state.imagePreviewUrl1;\n\n      var $imagePreview1 = null;\n      if (imagePreviewUrl1) {\n        $imagePreview1 = _react2.default.createElement(_reactBootstrap.Image, { thumbnail: true, variant: 'top', src: imagePreviewUrl1, style: { height: '300px', width: '300px' } });\n      } else {\n        $imagePreview1 = _react2.default.createElement(_reactBootstrap.Image, { thumbnail: true, variant: 'top', style: { height: '300px', width: '300px' } });\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactBootstrap.Form,\n          { onSubmit: this.handleSubmit, style: { padding: '2% 5%' } },\n          _react2.default.createElement(\n            'legend',\n            { style: { textTransform: 'uppercase' } },\n            'Trekker Story Form'\n          ),\n          _react2.default.createElement(\n            _reactBootstrap.Container,\n            { fluid: true, style: { padding: '4%', background: 'whitesmoke', borderRadius: '50px' } },\n            _react2.default.createElement(\n              _reactBootstrap.Row,\n              null,\n              _react2.default.createElement(\n                _reactBootstrap.Col,\n                { style: { textAlign: 'center' } },\n                _react2.default.createElement(\n                  'p',\n                  { style: { display: 'inline', fontSize: '1.1rem' } },\n                  'We ',\n                  _react2.default.createElement(\n                    'b',\n                    null,\n                    'MOUNTAINS-ROVER'\n                  ),\n                  ' Welcome You , Please Share Your Experience Here.'\n                )\n              )\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              _reactBootstrap.Row,\n              null,\n              _react2.default.createElement(\n                _reactBootstrap.Col,\n                null,\n                _react2.default.createElement(\n                  _reactBootstrap.Form.Group,\n                  { controlId: 'exampleForm.ControlInput1', style: { textAlign: 'left' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Form.Label,\n                    { className: 'label_style' },\n                    '1. Your Name'\n                  ),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(_reactBootstrap.Form.Control, { type: 'text', value: this.state.name, onChange: this.name_handleChange, className: 'width_50_in_large', style: { width: '30%' } })\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Form.Group,\n                  { controlId: 'exampleForm.ControlInput2', style: { textAlign: 'left' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Form.Label,\n                    { className: 'label_style' },\n                    '2. Select Trek'\n                  ),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(\n                    _reactBootstrap.Dropdown,\n                    { as: 'Primary' },\n                    _react2.default.createElement(\n                      _reactBootstrap.Button,\n                      { variant: 'info', className: 'width_50_in_large', style: { textTransform: 'uppercase', width: '30%' } },\n                      this.state.track_selected.length != 0 ? this.state.track_selected[0]['track_name'] : 'Select Trek'\n                    ),\n                    _react2.default.createElement(_reactBootstrap.Dropdown.Toggle, { split: true, variant: 'success', id: 'dropdown-custom-2' }),\n                    _react2.default.createElement(\n                      _reactBootstrap.Dropdown.Menu,\n                      { style: { maxHeight: '400px', overflow: 'scroll' } },\n                      item\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Form.Group,\n                  { controlId: 'exampleForm.ControlInput3', style: { textAlign: 'left' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Form.Label,\n                    { className: 'label_style' },\n                    '3. Add Trek Story Description (Limit 200 character)'\n                  ),\n                  _react2.default.createElement('br', null),\n                  _react2.default.createElement(_reactBootstrap.Form.Control, { as: 'textarea', rows: '10', cols: '15', value: this.state.description, onChange: this.description_handleChange, style: { width: '100%' } })\n                )\n              ),\n              _react2.default.createElement(\n                _reactBootstrap.Col,\n                null,\n                _react2.default.createElement(\n                  _reactBootstrap.Form.Group,\n                  { controlId: 'exampleForm.ControlInput3', style: { textAlign: 'left' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Row,\n                    null,\n                    _react2.default.createElement(\n                      _reactBootstrap.Col,\n                      { xs: 12, sm: 12, md: 12, lg: 6 },\n                      _react2.default.createElement(\n                        'h5',\n                        { style: { marginTop: '10%' } },\n                        '4. Upload Your Profile Photo (',\n                        _react2.default.createElement(\n                          'span',\n                          { style: color_style },\n                          'size limit 2 MB'\n                        ),\n                        ')'\n                      ),\n                      _react2.default.createElement('input', { type: 'file', onChange: function onChange(e) {\n                          return _this6._handleImageChange(e);\n                        } })\n                    ),\n                    _react2.default.createElement(\n                      _reactBootstrap.Col,\n                      { xs: 12, sm: 12, md: 12, lg: 6 },\n                      _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', textAlign: 'center' } },\n                        $imagePreview\n                      )\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  _reactBootstrap.Form.Group,\n                  { controlId: 'exampleForm.ControlInput1', style: { textAlign: 'left' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Row,\n                    null,\n                    _react2.default.createElement(\n                      _reactBootstrap.Col,\n                      { xs: 12, sm: 12, md: 12, lg: 6 },\n                      _react2.default.createElement(\n                        'h5',\n                        { style: { marginTop: '10%' } },\n                        '5. Upload Your Trek Photo (',\n                        _react2.default.createElement(\n                          'span',\n                          { style: color_style1 },\n                          'size limit 2 MB'\n                        ),\n                        ')'\n                      ),\n                      _react2.default.createElement('input', { type: 'file', onChange: function onChange(e) {\n                          return _this6._handleImageChange1(e);\n                        } })\n                    ),\n                    _react2.default.createElement(\n                      _reactBootstrap.Col,\n                      { xs: 12, sm: 12, md: 12, lg: 6 },\n                      _react2.default.createElement(\n                        'div',\n                        { style: { width: '100%', textAlign: 'center' } },\n                        $imagePreview1\n                      )\n                    )\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(\n              _reactBootstrap.Row,\n              null,\n              _react2.default.createElement(\n                _reactBootstrap.Col,\n                null,\n                _react2.default.createElement(\n                  'div',\n                  { id: 'success_message', className: 'alert alert-success', role: 'alert', style: { display: 'none', borderRadius: '15px' } },\n                  _react2.default.createElement(\n                    'button',\n                    { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },\n                    _react2.default.createElement(\n                      'span',\n                      { 'aria-hidden': 'true' },\n                      '\\xD7'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'form_success_msg' },\n                    _react2.default.createElement(\n                      'strong',\n                      null,\n                      'Success!'\n                    )\n                  ),\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'form_success_msg' },\n                    _react2.default.createElement(\n                      'p',\n                      null,\n                      'Thank-You. Your Review Means A Lot To Us.'\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { style: { textAlign: 'center' } },\n                  _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: 'success', type: 'submit', disabled: this.state.loading },\n                    this.state.loading ? 'In Process..' : 'Submit'\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Trekker_story_form;\n}(_react2.default.Component);\n\nexports.default = Trekker_story_form;\n\n//# sourceURL=webpack:///./react/components/trekker_story/trekker_story_form/trekker_story_form.jsx?");

/***/ })

}]);