webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Phonetic.jsx":
/*!*********************************!*\
  !*** ./components/Phonetic.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Phonetic = function Phonetic(_ref) {\n  _s();\n\n  var ipa = _ref.ipa,\n      sound = _ref.sound,\n      children = _ref.children,\n      startTime = _ref.startTime,\n      endTime = _ref.endTime,\n      rest = Object(_Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"ipa\", \"sound\", \"children\", \"startTime\", \"endTime\"]);\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    audioRef.current.addEventListener('timeupdate', function () {\n      if (audioRef.current.currentTime >= endTime) {}\n    });\n  }, [audioRef.current]);\n  var playSound = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    audioRef.current.currentTime = startTime;\n    audioRef.current.play();\n  }, [sound]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-673576631\" + \" \" + \"phonetic\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"jsx-673576631\",\n      children: ipa\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: playSound,\n      className: \"jsx-673576631\" + \" \" + \"sound\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/img/sound.png\",\n        className: \"jsx-673576631\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-673576631\" + \" \" + \"popup\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-673576631\" + \" \" + \"popup-content\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        src: sound,\n        className: \"jsx-673576631\" + \" \" + \"audio\",\n        children: \"Your browser does not support the audio element.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"673576631\",\n      children: \".phonetic.jsx-673576631{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;margin-right:8px;}.phonetic.jsx-673576631:hover{background:#dbdbdb;}.sound.jsx-673576631{position:absolute;right:0;top:0;opacity:0;padding:8px;width:100%;height:100%;z-index:1;cursor:pointer;background:#797979;}.sound.jsx-673576631 img.jsx-673576631{width:100%;height:100%;object-fit:contain;}.popup.jsx-673576631{position:absolute;bottom:0px;left:-200px;display:none;}.popup-content.jsx-673576631{margin-bottom:44px;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:0.5px solid #797979;box-shadow:3px 3px 8px #efefef;overflow-y:auto;width:auto;height:auto;min-width:400px;min-height:100px;pointer-events:all;text-align:left;vertical-align:top;font-size:14px;line-height:16px;}.audio.jsx-673576631{display:none;}.phonetic.jsx-673576631:hover .popup.jsx-673576631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.phonetic.jsx-673576631:hover .sound.jsx-673576631{opacity:1;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUdzQyxBQVlSLEFBR0QsQUFZUCxBQUtPLEFBTUMsQUFrQk4sQUFHQSxBQUdILFVBQ1osQ0FuQ2MsRUE2QmQsS0F6Q1UsQUFpQkcsQ0FwQmIsQUEwQm1CLElBVkUsR0FaYixDQWhCSyxFQWlDQyxHQWhCRixJQXNCWSxFQXRDVixHQWlDQyxDQWhCRCxBQVdkLFFBM0JvQixJQWlCUCxBQWdCYixXQWZjLEdBakJVLE1Bd0R4QixHQXRDWSxVQUNLLEdBbEJFLFlBbUJFLEtBbEJBLE9BbUNQLE9BaEJkLEtBbEJpQixBQW1DWSxlQWxDVCxZQW1DYSxNQWxDZCxpQkFDbkIsUUFrQ2tCLGdCQUNMLFdBQ0MsWUFDSSxnQkFDQyxpQkFDRSxtQkFDSCxnQkFDRyxtQkFDSixlQUNFLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcGhhbWtoYWMvV29ya3NwYWNlcy9naXRodWJfd29ya3NwYWNlcy9PaWNQaG9uZXRpY3MuY29tL2NvbXBvbmVudHMvUGhvbmV0aWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGhvbmV0aWMgPSAoeyBpcGEsIHNvdW5kLCBjaGlsZHJlbiwgc3RhcnRUaW1lLCBlbmRUaW1lLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcbiAgICAgIGlmKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPj0gZW5kVGltZSl7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbYXVkaW9SZWYuY3VycmVudF0pO1xuICBjb25zdCBwbGF5U291bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHN0YXJ0VGltZTtcblxuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICB9LCBbc291bmRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25ldGljXCI+XG4gICAgICA8c3Bhbj57aXBhfTwvc3Bhbj5cbiAgICAgIDxkaXYgb25DbGljaz17cGxheVNvdW5kfSBjbGFzc05hbWU9XCJzb3VuZFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvc291bmQucG5nXCI+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXG4gICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e3NvdW5kfSBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBob25ldGljIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvdW5kIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzc5Nzk3OTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjZWZlZmVmO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25ldGljO1xuIl19 */\\n/*@ sourceURL=/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Phonetic, \"OmX8ijjnXyK8uR55VI0notSeJnE=\");\n\n_c = Phonetic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phonetic);\n\nvar _c;\n\n$RefreshReg$(_c, \"Phonetic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3g/NTJkYyJdLCJuYW1lcyI6WyJQaG9uZXRpYyIsImlwYSIsInNvdW5kIiwiY2hpbGRyZW4iLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVzdCIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50VGltZSIsInBsYXlTb3VuZCIsInVzZUNhbGxiYWNrIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTJEO0FBQUE7O0FBQUEsTUFBeERDLEdBQXdELFFBQXhEQSxHQUF3RDtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFYQyxJQUFXOztBQUMxRSxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNGLFFBQVEsQ0FBQ0csT0FBZCxFQUF1QjtBQUNyQjtBQUNEOztBQUNESCxZQUFRLENBQUNHLE9BQVQsQ0FBaUJDLGdCQUFqQixDQUFrQyxZQUFsQyxFQUFnRCxZQUFNO0FBQ3BELFVBQUdKLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkUsV0FBakIsSUFBZ0NQLE9BQW5DLEVBQTJDLENBRTFDO0FBQ0YsS0FKRDtBQUtELEdBVFEsRUFTTixDQUFDRSxRQUFRLENBQUNHLE9BQVYsQ0FUTSxDQUFUO0FBVUEsTUFBTUcsU0FBUyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbENQLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQkUsV0FBakIsR0FBK0JSLFNBQS9CO0FBRUFHLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQkssSUFBakI7QUFDRCxHQUo0QixFQUkxQixDQUFDYixLQUFELENBSjBCLENBQTdCO0FBS0Esc0JBQ0U7QUFBQSx1Q0FBZSxVQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBLGdCQUFPRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssYUFBTyxFQUFFWSxTQUFkO0FBQUEseUNBQW1DLE9BQW5DO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsZ0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFLRTtBQUFBLHlDQUFlLE9BQWY7QUFBQSw4QkFDRTtBQUFBLDJDQUFlLGVBQWY7QUFBQSxrQkFBZ0NWO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQU8sV0FBRyxFQUFFSSxRQUFaO0FBQXNCLFdBQUcsRUFBRUwsS0FBM0I7QUFBQSwyQ0FBNEMsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1GRCxDQXBHRDs7R0FBTUYsUTs7S0FBQUEsUTtBQXNHU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bob25ldGljLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBob25ldGljID0gKHsgaXBhLCBzb3VuZCwgY2hpbGRyZW4sIHN0YXJ0VGltZSwgZW5kVGltZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCAoKSA9PiB7XG4gICAgICBpZihhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID49IGVuZFRpbWUpe1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2F1ZGlvUmVmLmN1cnJlbnRdKTtcbiAgY29uc3QgcGxheVNvdW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSBzdGFydFRpbWU7XG5cbiAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcbiAgfSwgW3NvdW5kXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwaG9uZXRpY1wiPlxuICAgICAgPHNwYW4+e2lwYX08L3NwYW4+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e3BsYXlTb3VuZH0gY2xhc3NOYW1lPVwic291bmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NvdW5kLnBuZ1wiPjwvaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblxuICAgICAgICA8YXVkaW8gcmVmPXthdWRpb1JlZn0gc3JjPXtzb3VuZH0gY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgYXVkaW8gZWxlbWVudC5cbiAgICAgICAgPC9hdWRpbz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5waG9uZXRpYyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICAuc291bmQgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucG9wdXAtY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM3OTc5Nzk7XG4gICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggI2VmZWZlZjtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuYXVkaW8ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnBob25ldGljOmhvdmVyIC5wb3B1cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnNvdW5kIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZXRpYztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Phonetic.jsx\n");

/***/ })

})