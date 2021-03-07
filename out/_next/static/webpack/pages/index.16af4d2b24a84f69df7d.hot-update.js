webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Phonetic.jsx":
/*!*********************************!*\
  !*** ./components/Phonetic.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Phonetic = function Phonetic(_ref) {\n  _s();\n\n  var ipa = _ref.ipa,\n      sound = _ref.sound,\n      children = _ref.children,\n      startTime = _ref.startTime,\n      endTime = _ref.endTime,\n      rest = Object(_Users_phamkhac_Workspaces_github_workspaces_OicPhonetics_com_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"ipa\", \"sound\", \"children\", \"startTime\", \"endTime\"]);\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var playSound = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function () {\n    audioRef.current.currentTime = startTime;\n    audioRef.current.addEventListener('timeupdate', function () {});\n    audioRef.current.play();\n  }, [sound]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-673576631\" + \" \" + \"phonetic\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"jsx-673576631\",\n      children: ipa\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      onClick: playSound,\n      className: \"jsx-673576631\" + \" \" + \"sound\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/img/sound.png\",\n        className: \"jsx-673576631\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-673576631\" + \" \" + \"popup\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-673576631\" + \" \" + \"popup-content\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        src: sound,\n        className: \"jsx-673576631\" + \" \" + \"audio\",\n        children: \"Your browser does not support the audio element.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"673576631\",\n      children: \".phonetic.jsx-673576631{border:1px solid lightgray;width:40px;height:40px;text-align:center;vertical-align:middle;line-height:40px;white-space:nowrap;font-size:16px;position:relative;margin-right:8px;}.phonetic.jsx-673576631:hover{background:#dbdbdb;}.sound.jsx-673576631{position:absolute;right:0;top:0;opacity:0;padding:8px;width:100%;height:100%;z-index:1;cursor:pointer;background:#797979;}.sound.jsx-673576631 img.jsx-673576631{width:100%;height:100%;object-fit:contain;}.popup.jsx-673576631{position:absolute;bottom:0px;left:-200px;display:none;}.popup-content.jsx-673576631{margin-bottom:44px;background:white;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:8px;border:0.5px solid #797979;box-shadow:3px 3px 8px #efefef;overflow-y:auto;width:auto;height:auto;min-width:400px;min-height:100px;pointer-events:all;text-align:left;vertical-align:top;font-size:14px;line-height:16px;}.audio.jsx-673576631{display:none;}.phonetic.jsx-673576631:hover .popup.jsx-673576631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.phonetic.jsx-673576631:hover .sound.jsx-673576631{opacity:1;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waGFta2hhYy9Xb3Jrc3BhY2VzL2dpdGh1Yl93b3Jrc3BhY2VzL09pY1Bob25ldGljcy5jb20vY29tcG9uZW50cy9QaG9uZXRpYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUdzQyxBQVlSLEFBR0QsQUFZUCxBQUtPLEFBTUMsQUFrQk4sQUFHQSxBQUdILFVBQ1osQ0FuQ2MsRUE2QmQsS0F6Q1UsQUFpQkcsQ0FwQmIsQUEwQm1CLElBVkUsR0FaYixDQWhCSyxFQWlDQyxHQWhCRixJQXNCWSxFQXRDVixHQWlDQyxDQWhCRCxBQVdkLFFBM0JvQixJQWlCUCxBQWdCYixXQWZjLEdBakJVLE1Bd0R4QixHQXRDWSxVQUNLLEdBbEJFLFlBbUJFLEtBbEJBLE9BbUNQLE9BaEJkLEtBbEJpQixBQW1DWSxlQWxDVCxZQW1DYSxNQWxDZCxpQkFDbkIsUUFrQ2tCLGdCQUNMLFdBQ0MsWUFDSSxnQkFDQyxpQkFDRSxtQkFDSCxnQkFDRyxtQkFDSixlQUNFLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcGhhbWtoYWMvV29ya3NwYWNlcy9naXRodWJfd29ya3NwYWNlcy9PaWNQaG9uZXRpY3MuY29tL2NvbXBvbmVudHMvUGhvbmV0aWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBob25ldGljID0gKHsgaXBhLCBzb3VuZCwgY2hpbGRyZW4sIHN0YXJ0VGltZSwgZW5kVGltZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwbGF5U291bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHN0YXJ0VGltZTtcbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCgpPT57XG4gICAgICBcbiAgICB9KVxuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICB9LCBbc291bmRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25ldGljXCI+XG4gICAgICA8c3Bhbj57aXBhfTwvc3Bhbj5cbiAgICAgIDxkaXYgb25DbGljaz17cGxheVNvdW5kfSBjbGFzc05hbWU9XCJzb3VuZFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvc291bmQucG5nXCI+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXG4gICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e3NvdW5kfSBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBob25ldGljIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvdW5kIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzc5Nzk3OTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjZWZlZmVmO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25ldGljO1xuIl19 */\\n/*@ sourceURL=/Users/phamkhac/Workspaces/github_workspaces/OicPhonetics.com/components/Phonetic.jsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Phonetic, \"D9vcMWjooU1rtMdp9ten6uazJx8=\");\n\n_c = Phonetic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phonetic);\n\nvar _c;\n\n$RefreshReg$(_c, \"Phonetic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaG9uZXRpYy5qc3g/NTJkYyJdLCJuYW1lcyI6WyJQaG9uZXRpYyIsImlwYSIsInNvdW5kIiwiY2hpbGRyZW4iLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwicmVzdCIsImF1ZGlvUmVmIiwidXNlUmVmIiwicGxheVNvdW5kIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY3VycmVudFRpbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTJEO0FBQUE7O0FBQUEsTUFBeERDLEdBQXdELFFBQXhEQSxHQUF3RDtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLFNBQWtDLFFBQWxDQSxTQUFrQztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFYQyxJQUFXOztBQUMxRSxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDSCxZQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFdBQWpCLEdBQStCUixTQUEvQjtBQUNBRyxZQUFRLENBQUNJLE9BQVQsQ0FBaUJFLGdCQUFqQixDQUFrQyxZQUFsQyxFQUErQyxZQUFJLENBRWxELENBRkQ7QUFHQU4sWUFBUSxDQUFDSSxPQUFULENBQWlCRyxJQUFqQjtBQUNELEdBTjRCLEVBTTFCLENBQUNaLEtBQUQsQ0FOMEIsQ0FBN0I7QUFPQSxzQkFDRTtBQUFBLHVDQUFlLFVBQWY7QUFBQSw0QkFDRTtBQUFBO0FBQUEsZ0JBQU9EO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxhQUFPLEVBQUVRLFNBQWQ7QUFBQSx5Q0FBbUMsT0FBbkM7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBQyxnQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUtFO0FBQUEseUNBQWUsT0FBZjtBQUFBLDhCQUNFO0FBQUEsMkNBQWUsZUFBZjtBQUFBLGtCQUFnQ047QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBTyxXQUFHLEVBQUVJLFFBQVo7QUFBc0IsV0FBRyxFQUFFTCxLQUEzQjtBQUFBLDJDQUE0QyxPQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUZELENBNUZEOztHQUFNRixROztLQUFBQSxRO0FBOEZTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUGhvbmV0aWMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBob25ldGljID0gKHsgaXBhLCBzb3VuZCwgY2hpbGRyZW4sIHN0YXJ0VGltZSwgZW5kVGltZSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwbGF5U291bmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHN0YXJ0VGltZTtcbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCgpPT57XG4gICAgICBcbiAgICB9KVxuICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICB9LCBbc291bmRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBob25ldGljXCI+XG4gICAgICA8c3Bhbj57aXBhfTwvc3Bhbj5cbiAgICAgIDxkaXYgb25DbGljaz17cGxheVNvdW5kfSBjbGFzc05hbWU9XCJzb3VuZFwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvc291bmQucG5nXCI+PC9pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXG4gICAgICAgIDxhdWRpbyByZWY9e2F1ZGlvUmVmfSBzcmM9e3NvdW5kfSBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBhdWRpbyBlbGVtZW50LlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBob25ldGljIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG4gICAgICAgIH1cbiAgICAgICAgLnNvdW5kIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgICAgIC5zb3VuZCBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5wb3B1cC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzc5Nzk3OTtcbiAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAjZWZlZmVmO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdWRpbyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAucGhvbmV0aWM6aG92ZXIgLnBvcHVwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5waG9uZXRpYzpob3ZlciAuc291bmQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBob25ldGljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Phonetic.jsx\n");

/***/ })

})