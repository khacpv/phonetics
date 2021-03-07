webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Phonetic.jsx":
/*!*********************************!*\
  !*** ./components/Phonetic.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Phonetic = function Phonetic(_ref) {\n  _s();\n\n  var ipa = _ref.ipa,\n      sound = _ref.sound,\n      example = _ref.example,\n      rest = Object(_Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"ipa\", \"sound\", \"example\"]);\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var playSound = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    audioRef.current.play();\n  }, [sound]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: playSound,\n    className: \"jsx-1944970629\" + \" \" + \"phonetic\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"jsx-1944970629\",\n      children: ipa\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: \"/img/sound.png\",\n      className: \"jsx-1944970629\" + \" \" + \"sound\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1944970629\" + \" \" + \"popup\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        controls: true,\n        src: sound,\n        className: \"jsx-1944970629\" + \" \" + \"audio\",\n        children: \"Your browser does not support the audio element.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"1944970629\",\n      children: \".phonetic.jsx-1944970629{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;}.phonetic.jsx-1944970629:hover{background:#dbdbdb;cursor:pointer;}.sound.jsx-1944970629{width:16px;height:16px;object-fit:contain;position:absolute;right:0;top:0;opacity:0;}.popup.jsx-1944970629{position:absolute;bottom:4px;left:-150px;width:300px;height:200px;overflow-y:auto;display:none;background:#eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:1px solid gray;}.audio.jsx-1944970629{margin:5px;-webkit-flex:1;-ms-flex:1;flex:1;}.phonetic.jsx-1944970629:hover .popup.jsx-1944970629,.phonetic.jsx-1944970629:hover .sound.jsx-1944970629{opacity:1;display:block;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUdzQyxBQVdSLEFBSVIsQUFTTyxBQWNQLEFBS0QsVUFDSSxDQTVCRixBQXVCTCxPQWRJLENBYkksSUFLSSxDQTRCckIsR0E1Q2EsRUF5QkMsS0FiZCxJQVhjLEdBeUJBLENBVE0sRUFzQnBCLE1BckNvQixHQXlCTCxPQVRMLE1BVVEsRUF6Qk0sQUFnQmhCLE1BQ0ksUUFTRyxFQVJmLE1BakJtQixLQTBCRSxZQXpCQSxPQTBCTixZQXpCRSxlQUNHLGtCQUNwQiw2QkF3QndCLDhFQUNWLFlBQ1Usc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGhvbmV0aWMgPSAoeyBpcGEsIHNvdW5kLCBleGFtcGxlLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBsYXlTb3VuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3NvdW5kXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZXRpY1wiIG9uQ2xpY2s9e3BsYXlTb3VuZH0+XG4gICAgICA8c3Bhbj57aXBhfTwvc3Bhbj5cbiAgICAgIDxpbWcgc3JjPVwiL2ltZy9zb3VuZC5wbmdcIiBjbGFzc05hbWU9XCJzb3VuZFwiPjwvaW1nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxuICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gY29udHJvbHMgc3JjPXtzb3VuZH0gY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG9uZXRpYyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuc291bmQge1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDRweDtcbiAgICAgICAgICBsZWZ0OiAtMTUwcHg7XG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwLFxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnNvdW5kIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZXRpYztcbiJdfQ== */\\n/*@ sourceURL=/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Phonetic, \"D9vcMWjooU1rtMdp9ten6uazJx8=\");\n\n_c = Phonetic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phonetic);\n\nvar _c;\n\n$RefreshReg$(_c, \"Phonetic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3g/NTJkYyJdLCJuYW1lcyI6WyJQaG9uZXRpYyIsImlwYSIsInNvdW5kIiwiZXhhbXBsZSIsInJlc3QiLCJhdWRpb1JlZiIsInVzZVJlZiIsInBsYXlTb3VuZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxHQUFtQyxRQUFuQ0EsR0FBbUM7QUFBQSxNQUE5QkMsS0FBOEIsUUFBOUJBLEtBQThCO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQVhDLElBQVc7O0FBQ3JELE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbENILFlBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsSUFBakI7QUFDRCxHQUY0QixFQUUxQixDQUFDUixLQUFELENBRjBCLENBQTdCO0FBR0Esc0JBQ0U7QUFBMEIsV0FBTyxFQUFFSyxTQUFuQztBQUFBLHdDQUFlLFVBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUEsZ0JBQU9OO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxTQUFHLEVBQUMsZ0JBQVQ7QUFBQSwwQ0FBb0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsNkJBQ0U7QUFBTyxXQUFHLEVBQUVJLFFBQVo7QUFBc0IsZ0JBQVEsTUFBOUI7QUFBK0IsV0FBRyxFQUFFSCxLQUFwQztBQUFBLDRDQUFxRCxPQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZERCxDQWxFRDs7R0FBTUYsUTs7S0FBQUEsUTtBQW9FU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob25ldGljLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQaG9uZXRpYyA9ICh7IGlwYSwgc291bmQsIGV4YW1wbGUsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcGxheVNvdW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICB9LCBbc291bmRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25ldGljXCIgb25DbGljaz17cGxheVNvdW5kfT5cbiAgICAgIDxzcGFuPntpcGF9PC9zcGFuPlxuICAgICAgPGltZyBzcmM9XCIvaW1nL3NvdW5kLnBuZ1wiIGNsYXNzTmFtZT1cInNvdW5kXCI+PC9pbWc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG4gICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBjb250cm9scyBzcmM9e3NvdW5kfSBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBob25ldGljIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICAgIGxlZnQ6IC0xNTBweDtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLmF1ZGlvIHtcbiAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAucG9wdXAsXG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25ldGljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Phonetic.jsx\n");

/***/ })

})