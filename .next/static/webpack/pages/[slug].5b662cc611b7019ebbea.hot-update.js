webpackHotUpdate_N_E("pages/[slug]",{

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/gwozniak/REPO/node-next-graphcms/pages/[slug].js\",\n    _this = undefined;\n\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (props) {\n  var getContent = function getContent() {\n    return {\n      __html: page.content\n    };\n  };\n\n  var page = props.page;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: page.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: getContent()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, _this);\n});\n/*\nexport async function getStaticProps(props) {\n  const { page } = await graphcms.request(`\n    {\n      query PageQuery($slug: String!) {\n        page(where: { slug: $slug }) {\n          title,\n          content { html }\n        }\n      }\n    }\n  `, { slug: props.params.slug }\n  )\n  return {\n    props: {\n      page\n    }\n  }\n}\n\nexport async function getStaticPaths() {\n  const { pages } = await graphcms.request(\n    `\n      {\n        pages {\n          slug\n        }\n      }\n    `\n  )\n\n  return {\n    paths: pages.map((page) => ({\n      params: {\n        slug: page.slug\n      }\n    })),\n    fallback: false\n  }\n}\n\nexport default (props) => {\n  const page = props.page\n  return (\n    <React.Fragment>\n      <h1>{page.title}</h1>\n    </React.Fragment>\n  )\n}\n*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLmpzPzQ2MmIiXSwibmFtZXMiOlsicHJvcHMiLCJnZXRDb250ZW50IiwiX19odG1sIiwicGFnZSIsImNvbnRlbnQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUE0Q2UseUVBQUNBLEtBQUQsRUFBVztBQUN4QixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFdBQU87QUFBQ0MsWUFBTSxFQUFFQyxJQUFJLENBQUNDO0FBQWQsS0FBUDtBQUNELEdBRkQ7O0FBR0EsTUFBTUQsSUFBSSxHQUFHSCxLQUFLLENBQUNHLElBQW5CO0FBQ0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssNkJBQXVCLEVBQUVKLFVBQVU7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FYRDtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5jb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KCdodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrbHdlcTFhNGNtNWowMXhwN29qbDB1b2IvbWFzdGVyJylcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHByb3BzKSB7XG4gIGNvbnN0IHsgcGFnZSB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChgXG4gICAgcXVlcnkgUGFnZVF1ZXJ5KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICBwYWdlKHdoZXJlOiB7IHNsdWc6ICRzbHVnIH0pIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbnRlbnQgeyBodG1sIH1cbiAgICAgIH1cbiAgICB9XG4gIGAsIHsgc2x1ZzogcHJvcHMucGFyYW1zLnNsdWcgfVxuICApXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBhZ2VcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHsgcGFnZXMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgYFxuICAgICAge1xuICAgICAgICBwYWdlcyB7XG4gICAgICAgICAgc2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGFnZXMubWFwKChwYWdlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHBhZ2Uuc2x1Z1xuICAgICAgfVxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgY29uc3QgZ2V0Q29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4ge19faHRtbDogcGFnZS5jb250ZW50fVxuICB9XG4gIGNvbnN0IHBhZ2UgPSBwcm9wcy5wYWdlXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGgxPntwYWdlLnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtnZXRDb250ZW50KCl9IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG4vKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHByb3BzKSB7XG4gIGNvbnN0IHsgcGFnZSB9ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdChgXG4gICAge1xuICAgICAgcXVlcnkgUGFnZVF1ZXJ5KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgICAgIHBhZ2Uod2hlcmU6IHsgc2x1ZzogJHNsdWcgfSkge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQgeyBodG1sIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCwgeyBzbHVnOiBwcm9wcy5wYXJhbXMuc2x1ZyB9XG4gIClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcGFnZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHsgcGFnZXMgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3QoXG4gICAgYFxuICAgICAge1xuICAgICAgICBwYWdlcyB7XG4gICAgICAgICAgc2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGFnZXMubWFwKChwYWdlKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHBhZ2Uuc2x1Z1xuICAgICAgfVxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgY29uc3QgcGFnZSA9IHByb3BzLnBhZ2VcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8aDE+e3BhZ2UudGl0bGV9PC9oMT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4qLyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ })

})