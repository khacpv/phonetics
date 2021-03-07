webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Phonetic.jsx":
/*!*********************************!*\
  !*** ./components/Phonetic.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Phonetic = function Phonetic(_ref) {\n  _s();\n\n  var ipa = _ref.ipa,\n      sound = _ref.sound,\n      example = _ref.example,\n      rest = Object(_Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"ipa\", \"sound\", \"example\"]);\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var playSound = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    alert('test');\n    audioRef.current.play();\n  }, [sound]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-669322791\" + \" \" + \"phonetic\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"jsx-669322791\",\n      children: ipa\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: playSound,\n      className: \"jsx-669322791\" + \" \" + \"sound\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/img/sound.png\",\n        className: \"jsx-669322791\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-669322791\" + \" \" + \"popup\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-669322791\" + \" \" + \"popup-content\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        src: sound,\n        className: \"jsx-669322791\" + \" \" + \"audio\",\n        children: \"Your browser does not support the audio element.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"669322791\",\n      children: \".phonetic.jsx-669322791{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;}.phonetic.jsx-669322791:hover{background:#dbdbdb;cursor:pointer;}.sound.jsx-669322791{width:100%;height:100%;object-fit:contain;position:absolute;right:0;top:0;opacity:0;padding:8px;}.popup.jsx-669322791{position:absolute;bottom:0px;left:-200px;display:none;}.popup-content.jsx-669322791{margin-bottom:44px;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:0.5px solid #797979;box-shadow:3px 3px 8px #efefef;overflow-y:auto;width:auto;height:200px;min-width:400px;}.audio.jsx-669322791{display:none;}.phonetic.jsx-669322791:hover .popup.jsx-669322791{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.phonetic.jsx-669322791:hover .sound.jsx-669322791{opacity:0.5;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUdzQyxBQVdSLEFBSVIsQUFVTyxBQU1DLEFBWU4sQUFHQSxBQUdELFdBakNBLENBa0NkLENBTkEsS0FsQmEsQ0FkSSxBQW9CRSxJQWZFLElBaEJSLEVBMEJDLEtBZGQsRUFvQndCLEVBL0JWLEdBMEJDLENBVkssUUFmQSxJQTBCcEIsTUFWVSxRQWZjLEFBZ0JoQixNQUNJLEFBMEJaLFVBekJjLE1BakJLLE1Ba0JuQixXQWpCcUIsT0E0QlAsWUEzQkcsQUE0QlksZUEzQlQsWUE0QmEsTUEzQmpDLHlCQTRCa0IsZ0JBQ0wsV0FDRSxhQUNHLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvcGhhbWtoYWMvV29ya3NwYWNlcy9naXRodWJfd29ya3NwYWNlcy9PaWNQaG9uZXRpY3MuY29tL2NvbXBvbmVudHMvUGhvbmV0aWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBob25ldGljID0gKHsgaXBhLCBzb3VuZCwgZXhhbXBsZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwbGF5U291bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYWxlcnQoJ3Rlc3QnKTtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3NvdW5kXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZXRpY1wiPlxuICAgICAgPHNwYW4+e2lwYX08L3NwYW4+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3BsYXlTb3VuZH0gY2xhc3NOYW1lPVwic291bmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NvdW5kLnBuZ1wiID48L2ltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNvbnRlbnRcIj48L2Rpdj5cblxuICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gc3JjPXtzb3VuZH0gY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG9uZXRpYyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc291bmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvcHVwIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBvcHVwLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjNzk3OTc5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4ICNlZmVmZWY7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF1ZGlvIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAucG9wdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIC5zb3VuZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZXRpYztcbiJdfQ== */\\n/*@ sourceURL=/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Phonetic, \"D9vcMWjooU1rtMdp9ten6uazJx8=\");\n\n_c = Phonetic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phonetic);\n\nvar _c;\n\n$RefreshReg$(_c, \"Phonetic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3g/NTJkYyJdLCJuYW1lcyI6WyJQaG9uZXRpYyIsImlwYSIsInNvdW5kIiwiZXhhbXBsZSIsInJlc3QiLCJhdWRpb1JlZiIsInVzZVJlZiIsInBsYXlTb3VuZCIsInVzZUNhbGxiYWNrIiwiYWxlcnQiLCJjdXJyZW50IiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXNDO0FBQUE7O0FBQUEsTUFBbkNDLEdBQW1DLFFBQW5DQSxHQUFtQztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBWEMsSUFBVzs7QUFDckQsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0MsU0FBSyxDQUFDLE1BQUQsQ0FBTDtBQUNBSixZQUFRLENBQUNLLE9BQVQsQ0FBaUJDLElBQWpCO0FBQ0QsR0FINEIsRUFHMUIsQ0FBQ1QsS0FBRCxDQUgwQixDQUE3QjtBQUlBLHNCQUNFO0FBQUEsdUNBQWUsVUFBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQSxnQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGFBQU8sRUFBRU0sU0FBZDtBQUFBLHlDQUFtQyxPQUFuQztBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBS0U7QUFBQSx5Q0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFBQSwyQ0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQU8sV0FBRyxFQUFFRixRQUFaO0FBQXNCLFdBQUcsRUFBRUgsS0FBM0I7QUFBQSwyQ0FBNEMsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNFRCxDQTVFRDs7R0FBTUYsUTs7S0FBQUEsUTtBQThFU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob25ldGljLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQaG9uZXRpYyA9ICh7IGlwYSwgc291bmQsIGV4YW1wbGUsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcGxheVNvdW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGFsZXJ0KCd0ZXN0Jyk7XG4gICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gIH0sIFtzb3VuZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvbmV0aWNcIj5cbiAgICAgIDxzcGFuPntpcGF9PC9zcGFuPlxuICAgICAgPGRpdiBvbkNsaWNrPXtwbGF5U291bmR9IGNsYXNzTmFtZT1cInNvdW5kXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltZy9zb3VuZC5wbmdcIiA+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50XCI+PC9kaXY+XG5cbiAgICAgICAgPGF1ZGlvIHJlZj17YXVkaW9SZWZ9IHNyYz17c291bmR9IGNsYXNzTmFtZT1cImF1ZGlvXCI+XG4gICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGF1ZGlvIGVsZW1lbnQuXG4gICAgICAgIDwvYXVkaW8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucGhvbmV0aWMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RiZGJkYjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvdW5kIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzc5Nzk3OTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjZWZlZmVmO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvbmV0aWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Phonetic.jsx\n");

/***/ })

})