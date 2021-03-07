webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Phonetic.jsx":
/*!*********************************!*\
  !*** ./components/Phonetic.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Phonetic = function Phonetic(_ref) {\n  _s();\n\n  var ipa = _ref.ipa,\n      sound = _ref.sound,\n      children = _ref.children,\n      rest = Object(_Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"ipa\", \"sound\", \"children\"]);\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var playSound = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    audioRef.current.play();\n  }, [sound]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3566269822\" + \" \" + \"phonetic\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"jsx-3566269822\",\n      children: ipa\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: playSound,\n      className: \"jsx-3566269822\" + \" \" + \"sound\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/img/sound.png\",\n        className: \"jsx-3566269822\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-3566269822\" + \" \" + \"popup\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-3566269822\" + \" \" + \"popup-content\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        src: sound,\n        className: \"jsx-3566269822\" + \" \" + \"audio\",\n        children: \"Your browser does not support the audio element.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"3566269822\",\n      children: \".phonetic.jsx-3566269822{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;}.phonetic.jsx-3566269822:hover{background:#dbdbdb;}.sound.jsx-3566269822{position:absolute;right:0;top:0;opacity:0;padding:8px;width:100%;height:100%;z-index:1;cursor:pointer;}.sound.jsx-3566269822 img.jsx-3566269822{width:100%;height:100%;object-fit:contain;}.popup.jsx-3566269822{position:absolute;bottom:0px;left:-200px;display:none;}.popup-content.jsx-3566269822{margin-bottom:44px;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:0.5px solid #797979;box-shadow:3px 3px 8px #efefef;overflow-y:auto;width:auto;height:auto;min-width:400px;min-height:100px;pointer-events:all;text-align:left;vertical-align:top;font-size:14px;line-height:16px;}.audio.jsx-3566269822{display:none;}.popup-content.jsx-3566269822 .strong.jsx-3566269822{line-height:18px;margin-bottom:8px;font-weight:bold;}.phonetic.jsx-3566269822:hover .popup.jsx-3566269822{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.phonetic.jsx-3566269822:hover .sound.jsx-3566269822{opacity:0.5;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJrQixBQUdzQyxBQVdSLEFBR0QsQUFXUCxBQUtPLEFBTUMsQUFrQk4sQUFHSSxBQUtKLEFBR0QsV0F2Q0EsQ0F3Q2QsQ0FYQSxJQUdvQixDQTNDVixBQWdCRyxDQW5CYixBQXlCbUIsSUFWRSxHQVhiLENBZkssRUErQkMsR0FmRixHQTBDTyxDQXJCSyxFQXBDVixHQStCQyxDQWZELEFBVWQsUUF6Qm9CLEVBeURwQixFQXpDYSxBQWViLFdBZGMsR0FoQlUsTUEyRHhCLEdBMUNZLFVBQ0ssR0FqQkUsWUFrQm5CLEtBakJxQixPQWlDUCxZQWhDRyxBQWlDWSxlQWhDVCxZQWlDYSxNQWhDakMseUJBaUNrQixnQkFDTCxXQUNDLFlBQ0ksZ0JBQ0MsaUJBQ0UsbUJBQ0gsZ0JBQ0csbUJBQ0osZUFDRSxpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3BoYW1raGFjL1dvcmtzcGFjZXMvZ2l0aHViX3dvcmtzcGFjZXMvT2ljUGhvbmV0aWNzLmNvbS9jb21wb25lbnRzL1Bob25ldGljLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQaG9uZXRpYyA9ICh7IGlwYSwgc291bmQsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBsYXlTb3VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3NvdW5kXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZXRpY1wiPlxuICAgICAgPHNwYW4+e2lwYX08L3NwYW4+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3BsYXlTb3VuZH0gY2xhc3NOYW1lPVwic291bmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NvdW5kLnBuZ1wiPjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblxuICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gc3JjPXtzb3VuZH0gY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG9uZXRpYyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvdW5kIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgICAgLnBvcHVwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBvcHVwLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNzk3OTc5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNlZmVmZWY7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1ZGlvIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IC5zdHJvbmcge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvbmV0aWM7XG4iXX0= */\\n/*@ sourceURL=/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Phonetic, \"D9vcMWjooU1rtMdp9ten6uazJx8=\");\n\n_c = Phonetic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phonetic);\n\nvar _c;\n\n$RefreshReg$(_c, \"Phonetic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3g/NTJkYyJdLCJuYW1lcyI6WyJQaG9uZXRpYyIsImlwYSIsInNvdW5kIiwiY2hpbGRyZW4iLCJyZXN0IiwiYXVkaW9SZWYiLCJ1c2VSZWYiLCJwbGF5U291bmQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsR0FBb0MsUUFBcENBLEdBQW9DO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFYQyxJQUFXOztBQUN0RCxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDSCxZQUFRLENBQUNJLE9BQVQsQ0FBaUJDLElBQWpCO0FBQ0QsR0FGNEIsRUFFMUIsQ0FBQ1IsS0FBRCxDQUYwQixDQUE3QjtBQUdBLHNCQUNFO0FBQUEsd0NBQWUsVUFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQSxnQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGFBQU8sRUFBRU0sU0FBZDtBQUFBLDBDQUFtQyxPQUFuQztBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0U7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFBQSw0Q0FBZSxlQUFmO0FBQUEsa0JBQWdDSjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFPLFdBQUcsRUFBRUUsUUFBWjtBQUFzQixXQUFHLEVBQUVILEtBQTNCO0FBQUEsNENBQTRDLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRkQsQ0EzRkQ7O0dBQU1GLFE7O0tBQUFBLFE7QUE2RlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGhvbmV0aWMgPSAoeyBpcGEsIHNvdW5kLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwbGF5U291bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gIH0sIFtzb3VuZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmV0aWNcIj5cbiAgICAgIDxzcGFuPntpcGF9PC9zcGFuPlxuICAgICAgPGRpdiBvbkNsaWNrPXtwbGF5U291bmR9IGNsYXNzTmFtZT1cInNvdW5kXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy9zb3VuZC5wbmdcIj48L2ltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG5cbiAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17c291bmR9IGNsYXNzTmFtZT1cImF1ZGlvXCI+XG4gICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIGVsZW1lbnQuXG4gICAgICAgIDwvYXVkaW8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGhvbmV0aWMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RiZGJkYjtcbiAgICAgICAgfVxuICAgICAgICAuc291bmQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzc5Nzk3OTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjZWZlZmVmO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucG9wdXAtY29udGVudCAuc3Ryb25nIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIC5wb3B1cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnNvdW5kIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25ldGljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Phonetic.jsx\n");

/***/ })

})