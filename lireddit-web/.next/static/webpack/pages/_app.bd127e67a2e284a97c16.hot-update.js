self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginDocument": function() { return /* binding */ LoginDocument; },
/* harmony export */   "useLoginMutation": function() { return /* binding */ useLoginMutation; },
/* harmony export */   "RegisterDocument": function() { return /* binding */ RegisterDocument; },
/* harmony export */   "useRegisterMutation": function() { return /* binding */ useRegisterMutation; },
/* harmony export */   "MeDocument": function() { return /* binding */ MeDocument; },
/* harmony export */   "useMeQuery": function() { return /* binding */ useMeQuery; }
/* harmony export */ });
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    query Me {\n  me {\n    _id\n    username\n  }\n}\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n    }\n  }\n}\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n    mutation Login($options: UsernamePasswordInput!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      username\n    }\n  }\n}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LoginDocument = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject());
function useLoginMutation() {
  _s();

  return urql__WEBPACK_IMPORTED_MODULE_3__.useMutation(LoginDocument);
}

_s(useLoginMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__.useMutation];
});

;
var RegisterDocument = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject2());
function useRegisterMutation() {
  _s2();

  return urql__WEBPACK_IMPORTED_MODULE_3__.useMutation(RegisterDocument);
}

_s2(useRegisterMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__.useMutation];
});

;
var MeDocument = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject3());
function useMeQuery() {
  _s3();

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return urql__WEBPACK_IMPORTED_MODULE_3__.useQuery(_objectSpread({
    query: MeDocument
  }, options));
}

_s3(useMeQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function () {
  return [urql__WEBPACK_IMPORTED_MODULE_3__.useQuery];
});

;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! urql */ "./node_modules/urql/dist/urql.es.js");
/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @urql/exchange-graphcache */ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Youri\\Documents\\Apprendre\\React JS Works\\liReddit\\lireddit-web\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Youri_Documents_Apprendre_React_JS_Works_liReddit_lireddit_web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function betterUpdateQuery(cache, qi, result, fn) {
  return cache.updateQuery(qi, function (data) {
    return fn(result, data);
  });
}

var client = (0,urql__WEBPACK_IMPORTED_MODULE_4__.createClient)({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  // * Permet de rajouter le cookie
  exchanges: [urql__WEBPACK_IMPORTED_MODULE_4__.dedupExchange, (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__.cacheExchange)({
    updates: {
      Mutation: {
        login: function login(result, args, cache, info) {
          /*cache.updateQuery({ query :  MeDocument} , data => { data.value = })*/
          betterUpdateQuery(cache, {
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.MeDocument
          }, result, function (result, query) {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: result.login.user
              };
            }
          });
        }
      }
    }
  }), urql__WEBPACK_IMPORTED_MODULE_4__.fetchExchange]
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(urql__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    value: client,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, {
      resetCSS: true,
      theme: _theme__WEBPACK_IMPORTED_MODULE_2__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ColorModeProvider, {
        options: {
          useSystemColorMode: true,
          initialColorMode: "dark"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  return (_extends = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) {
        if (Object.prototype.hasOwnProperty.call(n, r)) {
          t[r] = n[r];
        }
      }
    }
    return t;
  }).apply(this, arguments);
}


//# sourceMappingURL=5301ccd2.mjs.map


/***/ }),

/***/ "./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": function() { return /* binding */ Store; },
/* harmony export */   "cacheExchange": function() { return /* binding */ cacheExchange; },
/* harmony export */   "offlineExchange": function() { return /* binding */ offlineExchange; },
/* harmony export */   "query": function() { return /* binding */ query; },
/* harmony export */   "write": function() { return /* binding */ write; }
/* harmony export */ });
/* harmony import */ var _urql_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @urql/core */ "./node_modules/@urql/core/dist/urql-core.mjs");
/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ "./node_modules/wonka/dist/wonka.mjs");
/* harmony import */ var _5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./5301ccd2.mjs */ "./node_modules/@urql/exchange-graphcache/dist/5301ccd2.mjs");
/* harmony import */ var graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql/utilities/valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
/* harmony import */ var graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");












function getName(e) {
  return e.name.value;
}

function getFragmentTypeName(e) {
  return e.typeCondition.name.value;
}

function getFieldAlias(e) {
  return e.alias ? e.alias.value : getName(e);
}

function getSelectionSet(e) {
  return e.selectionSet ? e.selectionSet.selections : [];
}

function getTypeCondition(e) {
  return e.typeCondition ? getName(e.typeCondition) : null;
}

function isFieldNode(e) {
  return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FIELD;
}

function isInlineFragment(e) {
  return e.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT;
}

function getFieldArguments(e, t) {
  var r = {};
  var i = 0;
  if (e.arguments && e.arguments.length) {
    for (var n = 0, a = e.arguments.length; n < a; n++) {
      var o = e.arguments[n];
      var s = (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(o.value, t);
      if (null != s) {
        r[getName(o)] = s;
        i++;
      }
    }
  }
  return i > 0 ? r : null;
}

function filterVariables(e, t) {
  if (!t || !e.variableDefinitions) {
    return;
  }
  var r = {};
  for (var i = 0, n = e.variableDefinitions.length; i < n; i++) {
    var a = getName(e.variableDefinitions[i].variable);
    r[a] = t[a];
  }
  return r;
}

function normalizeVariables(e, t) {
  var r = {};
  if (!t) {
    return r;
  }
  if (e.variableDefinitions) {
    for (var i = 0, n = e.variableDefinitions.length; i < n; i++) {
      var a = e.variableDefinitions[i];
      var o = getName(a.variable);
      r[o] = void 0 === t[o] && a.defaultValue ? (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(a.defaultValue, t) : t[o];
    }
  }
  for (var s in t) {
    if (!(s in r)) {
      r[s] = t[s];
    }
  }
  return r;
}

var O = "\nhttps://bit.ly/2XbVrpR#";

var _ = new Set;

var E = [];

function popDebugNode() {
  return E.pop();
}

function pushDebugNode(e, t) {
  var r = "";
  if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT) {
    r = e ? 'Inline Fragment on "' + e + '"' : "Inline Fragment";
  } else if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION) {
    r = (t.name ? '"' + t.name.value + '"' : "Unnamed") + " " + t.operation;
  } else if (t.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION) {
    r = '"' + t.name.value + '" Fragment';
  }
  if (r) {
    E.push(r);
  }
}

function getDebugOutput() {
  return E.length ? "\n(Caused At: " + E.join(", ") + ")" : "";
}

function invariant(e, t, r) {
  if (!e) {
    var i = t || "Minfied Error #" + r + "\n";
    if (true) {
      i += getDebugOutput();
    }
    var n = new Error(i + O + r);
    n.name = "Graphcache Error";
    throw n;
  }
}

function warn(e, t) {
  if (!_.has(e)) {
    console.warn(e + getDebugOutput() + O + t);
    _.add(e);
  }
}

function getMainOperation(e) {
  for (var t = 0; t < e.definitions.length; t++) {
    if (e.definitions[t].kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION) {
      return e.definitions[t];
    }
  }
  invariant(!1,  true ? "Invalid GraphQL document: All GraphQL documents must contain an OperationDefinitionnode for a query, subscription, or mutation." : 0, 1);
}

function getFragments(e) {
  var t = {};
  for (var r = 0; r < e.definitions.length; r++) {
    var i = e.definitions[r];
    if (i.kind === graphql_language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION) {
      t[getName(i)] = i;
    }
  }
  return t;
}

function shouldInclude(e, t) {
  var r = e.directives;
  if (!r) {
    return !0;
  }
  for (var i = 0, n = r.length; i < n; i++) {
    var a = r[i];
    var o = getName(a);
    if (("include" === o || "skip" === o) && a.arguments && a.arguments[0] && "if" === getName(a.arguments[0])) {
      var s = (0,graphql_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_1__.valueFromASTUntyped)(a.arguments[0].value, t);
      return "include" === o ? !!s : !s;
    }
  }
  return !0;
}

var b = /^__/;

function isFieldNullable(e, t, r) {
  if (b.test(r)) {
    return !0;
  }
  var i = getField(e, t, r);
  return !!i && "NON_NULL" !== i.type.kind;
}

function isListNullable(e, t, r) {
  var i = getField(e, t, r);
  if (!i) {
    return !1;
  }
  var n = "NON_NULL" === i.type.kind ? i.type.ofType : i.type;
  return "LIST" === n.kind && "NON_NULL" !== n.ofType.kind;
}

function isFieldAvailableOnType(e, t, r) {
  if (b.test(r)) {
    return !0;
  }
  return !!getField(e, t, r);
}

function isInterfaceOfType(e, t, r) {
  if (!r) {
    return !1;
  }
  var i = getTypeCondition(t);
  if (!i || r === i) {
    return !0;
  }
  if (e.types[i] && "OBJECT" === e.types[i].kind) {
    return i === r;
  }
  !function expectAbstractType(e, t) {
    invariant(e.types[t] && ("INTERFACE" === e.types[t].kind || "UNION" === e.types[t].kind),  true ? "Invalid Abstract type: The type `" + t + "` is not an Interface or Union type in the defined schema, but a fragment in the GraphQL document is using it as a type condition." : 0, 5);
  }(e, i);
  expectObjectType(e, r);
  return e.isSubType(i, r);
}

function getField(e, t, r) {
  expectObjectType(e, t);
  var i = e.types[t].fields[r];
  if (true) {
    if (!i) {
      warn("Invalid field: The field `" + r + "` does not exist on `" + t + "`, but the GraphQL document expects it to exist.\nTraversal will continue, however this may lead to undefined behavior!", 4);
    }
  }
  return i;
}

function expectObjectType(e, t) {
  invariant(e.types[t] && "OBJECT" === e.types[t].kind,  true ? "Invalid Object type: The type `" + t + "` is not an object in the defined schema, but the GraphQL document is traversing it." : 0, 3);
}

function warnAboutResolver(e) {
   true && warn("Invalid resolver: `" + e + "` is not in the defined schema, but the `resolvers` option is referencing it.", 23);
}

function keyOfField(t, r) {
  return r ? t + "(" + (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(r) + ")" : t;
}

function joinKeys(e, t) {
  return e + "." + t;
}

function fieldInfoOfKey(e) {
  var t = e.indexOf("(");
  if (t > -1) {
    return {
      fieldKey: e,
      fieldName: e.slice(0, t),
      arguments: JSON.parse(e.slice(t + 1, -1))
    };
  } else {
    return {
      fieldKey: e,
      fieldName: e,
      arguments: null
    };
  }
}

function deserializeKeyInfo(e) {
  var t = e.indexOf(".");
  return {
    entityKey: e.slice(0, t).replace(/%2e/g, "."),
    fieldKey: e.slice(t + 1)
  };
}

function makeDict() {
  return Object.create(null);
}

var w = null;

var D = null;

var F = null;

var S = null;

var L = !1;

function makeNodeMap() {
  return {
    optimistic: makeDict(),
    base: new Map
  };
}

function initDataState(e, t, r, i) {
  w = e;
  D = t;
  F = makeDict();
  L = !!i;
  if (true) {
    E.length = 0;
  }
  if (!r) {
    S = null;
  } else if (i || t.optimisticOrder.length > 0) {
    if (!i && !t.commutativeKeys.has(r)) {
      reserveLayer(t, r);
    } else if (i) {
      t.commutativeKeys.delete(r);
    }
    S = r;
    !function createLayer(e, t) {
      if (-1 === e.optimisticOrder.indexOf(t)) {
        e.optimisticOrder.unshift(t);
      }
      if (!e.refLock[t]) {
        e.refLock[t] = makeDict();
        e.links.optimistic[t] = new Map;
        e.records.optimistic[t] = new Map;
      }
    }(t, r);
  } else {
    S = null;
    deleteLayer(t, r);
  }
}

function clearDataState() {
  if (true) {
    getCurrentDependencies();
  }
  var t = D;
  var r = S;
  L = !1;
  S = null;
  if (r && t.optimisticOrder.indexOf(r) > -1) {
    var i = t.optimisticOrder.length;
    while (--i >= 0 && t.refLock[t.optimisticOrder[i]] && t.commutativeKeys.has(t.optimisticOrder[i])) {
      squashLayer(t.optimisticOrder[i]);
    }
  }
  w = null;
  D = null;
  F = null;
  if (true) {
    E.length = 0;
  }
  if ( true && !t.defer) {
    t.defer = !0;
    Promise.resolve().then((function() {
      initDataState("read", t, null);
      !function gc() {
        D.gc.forEach((function(e, t, r) {
          if ((D.refCount[e] || 0) > 0) {
            r.delete(e);
            return;
          }
          for (var i in D.refLock) {
            var n = D.refLock[i];
            if ((n[e] || 0) > 0) {
              return;
            }
            delete n[e];
          }
          delete D.refCount[e];
          r.delete(e);
          D.records.base.delete(e);
          var a = D.links.base.get(e);
          if (a) {
            D.links.base.delete(e);
            for (var o in a) {
              updateRCForLink(r, D.refCount, a[o], -1);
            }
          }
        }));
      }();
      !function persistData() {
        if (D.storage) {
          L = !0;
          w = "read";
          var t = makeDict();
          D.persist.forEach((function(r) {
            var i = deserializeKeyInfo(r);
            var n = i.entityKey;
            var a = i.fieldKey;
            var o;
            if (void 0 !== (o = readLink(n, a))) {
              t[r] = ":" + (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(o);
            } else if (void 0 !== (o = readRecord(n, a))) {
              t[r] = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.stringifyVariables)(o);
            } else {
              t[r] = void 0;
            }
          }));
          L = !1;
          D.storage.writeData(t);
          D.persist.clear();
        }
      }();
      clearDataState();
      t.defer = !1;
    }));
  }
}

function noopDataState(e, t, r) {
  initDataState("read", e, t, r);
  clearDataState();
}

function getCurrentOperation() {
  invariant(null !== w,  true ? "Invalid Cache call: The cache may only be accessed or mutated duringoperations like write or query, or as part of its resolvers, updaters, or optimistic configs." : 0, 2);
  return w;
}

function getCurrentDependencies() {
  invariant(null !== F,  true ? "Invalid Cache call: The cache may only be accessed or mutated duringoperations like write or query, or as part of its resolvers, updaters, or optimistic configs." : 0, 2);
  return F;
}

function setNode(e, t, r, i) {
  var n = S ? e.optimistic[S] : e.base;
  var a = n.get(t);
  if (void 0 === a) {
    n.set(t, a = makeDict());
  }
  if (void 0 === i && !S) {
    delete a[r];
  } else {
    a[r] = i;
  }
}

function getNode(e, t, r) {
  var i;
  var n = !L && "read" === w && S && D.commutativeKeys.has(S);
  for (var a = 0, o = D.optimisticOrder.length; a < o; a++) {
    var s = D.optimisticOrder[a];
    var u = e.optimistic[s];
    n = n && s !== S;
    if (u && (!n || !D.commutativeKeys.has(s)) && (!L || "write" === w || D.commutativeKeys.has(s)) && void 0 !== (i = u.get(t)) && r in i) {
      return i[r];
    }
  }
  return void 0 !== (i = e.base.get(t)) ? i[r] : void 0;
}

function updateRCForEntity(e, t, r, i) {
  var n = void 0 !== t[r] ? t[r] : 0;
  var a = t[r] = n + i | 0;
  if (void 0 !== e) {
    if (a <= 0) {
      e.add(r);
    } else if (n <= 0 && a > 0) {
      e.delete(r);
    }
  }
}

function updateRCForLink(e, t, r, i) {
  if ("string" == typeof r) {
    updateRCForEntity(e, t, r, i);
  } else if (Array.isArray(r)) {
    for (var n = 0, a = r.length; n < a; n++) {
      if (Array.isArray(r[n])) {
        updateRCForLink(e, t, r[n], i);
      } else if (r[n]) {
        updateRCForEntity(e, t, r[n], i);
      }
    }
  }
}

function extractNodeFields(e, t, r) {
  if (void 0 !== r) {
    for (var i in r) {
      if (!t.has(i)) {
        e.push(fieldInfoOfKey(i));
        t.add(i);
      }
    }
  }
}

function extractNodeMapFields(e, t, r, i) {
  extractNodeFields(e, t, i.base.get(r));
  for (var n = 0, a = D.optimisticOrder.length; n < a; n++) {
    var o = i.optimistic[D.optimisticOrder[n]];
    if (void 0 !== o) {
      extractNodeFields(e, t, o.get(r));
    }
  }
}

function updateDependencies(e, t) {
  if ("__typename" !== t) {
    if (e !== D.queryRootKey) {
      F[e] = !0;
    } else if (void 0 !== t) {
      F[joinKeys(e, t)] = !0;
    }
  }
}

function updatePersist(e, t) {
  if (!L && D.storage) {
    D.persist.add(function serializeKeys(e, t) {
      return e.replace(/\./g, "%2e") + "." + t;
    }(e, t));
  }
}

function readRecord(e, t) {
  updateDependencies(e, t);
  return getNode(D.records, e, t);
}

function readLink(e, t) {
  updateDependencies(e, t);
  return getNode(D.links, e, t);
}

function writeRecord(e, t, r) {
  updateDependencies(e, t);
  updatePersist(e, t);
  setNode(D.records, e, t, r);
}

function writeLink(e, t, r) {
  var i = D;
  var n;
  var a;
  var o;
  if (S) {
    n = i.refLock[S] || (i.refLock[S] = makeDict());
    a = i.links.optimistic[S];
  } else {
    n = i.refCount;
    a = i.links.base;
    o = i.gc;
  }
  var s = a && a.get(e);
  var u = s && s[t];
  updateDependencies(e, t);
  updatePersist(e, t);
  setNode(i.links, e, t, r);
  updateRCForLink(o, n, u, -1);
  updateRCForLink(o, n, r, 1);
}

function reserveLayer(e, t) {
  var r = e.optimisticOrder.indexOf(t);
  if (-1 === r) {
    e.optimisticOrder.unshift(t);
  } else if (!e.commutativeKeys.has(t)) {
    clearLayer(e, t);
    e.optimisticOrder.splice(r, 1);
    e.optimisticOrder.unshift(t);
  }
  e.commutativeKeys.add(t);
}

function clearLayer(e, t) {
  if (e.refLock[t]) {
    delete e.refLock[t];
    delete e.records.optimistic[t];
    delete e.links.optimistic[t];
  }
}

function deleteLayer(e, t) {
  var r = e.optimisticOrder.indexOf(t);
  if (r > -1) {
    e.optimisticOrder.splice(r, 1);
    e.commutativeKeys.delete(t);
  }
  clearLayer(e, t);
}

function squashLayer(e) {
  var t = F;
  F = makeDict();
  var r = D.links.optimistic[e];
  if (r) {
    r.forEach((function(e, t) {
      for (var r in e) {
        writeLink(t, r, e[r]);
      }
    }));
  }
  var i = D.records.optimistic[e];
  if (i) {
    i.forEach((function(e, t) {
      for (var r in e) {
        writeRecord(t, r, e[r]);
      }
    }));
  }
  F = t;
  deleteLayer(D, e);
}

function inspectFields(e) {
  var t = D.links;
  var r = D.records;
  var i = [];
  var n = new Set;
  updateDependencies(e);
  extractNodeMapFields(i, n, e, t);
  extractNodeMapFields(i, n, e, r);
  return i;
}

var q = {
  current: null
};

function getFieldError(e) {
  return e.__internal.path.length > 0 && e.__internal.errorMap ? e.__internal.errorMap[e.__internal.path.join(".")] : void 0;
}

function makeContext(e, t, r, i, n, a, o) {
  var s = {
    store: e,
    variables: t,
    fragments: r,
    parent: {
      __typename: i
    },
    parentTypeName: i,
    parentKey: n,
    parentFieldKey: "",
    fieldName: "",
    error: void 0,
    partial: !1,
    optimistic: !!a,
    __internal: {
      path: [],
      errorMap: void 0
    }
  };
  if (o && o.graphQLErrors) {
    for (var u = 0; u < o.graphQLErrors.length; u++) {
      var c = o.graphQLErrors[u];
      if (c.path && c.path.length) {
        if (!s.__internal.errorMap) {
          s.__internal.errorMap = Object.create(null);
        }
        s.__internal.errorMap[c.path.join(".")] = c;
      }
    }
  }
  return s;
}

function updateContext(e, t, r, i, n, a) {
  q.current = e;
  e.parent = t;
  e.parentTypeName = r;
  e.parentKey = i;
  e.parentFieldKey = n;
  e.fieldName = a;
  e.error = getFieldError(e);
}

function isFragmentHeuristicallyMatching(e, t, r, i) {
  if (!t) {
    return !1;
  }
  var n = getTypeCondition(e);
  if (!n || t === n) {
    return !0;
  }
   true && warn("Heuristic Fragment Matching: A fragment is trying to match against the `" + t + "` type, but the type condition is `" + n + "`. Since GraphQL allows for interfaces `" + n + "` may be aninterface.\nA schema needs to be defined for this match to be deterministic, otherwise the fragment will be matched heuristically!", 16);
  return !getSelectionSet(e).some((function(e) {
    if (!isFieldNode(e)) {
      return !1;
    }
    var t = keyOfField(getName(e), getFieldArguments(e, i));
    return !function hasField(e, t) {
      return void 0 !== readRecord(e, t) || void 0 !== readLink(e, t);
    }(r, t);
  }));
}

function makeSelectionIterator(e, t, r, i) {
  var n;
  var a = 0;
  return function next() {
    if (void 0 !== n) {
      var o = n();
      if (void 0 !== o) {
        return o;
      }
      n = void 0;
      if (true) {
        popDebugNode();
      }
    }
    while (a < r.length) {
      var s = r[a++];
      if (!shouldInclude(s, i.variables)) {
        continue;
      } else if (!isFieldNode(s)) {
        var u = !isInlineFragment(s) ? i.fragments[getName(s)] : s;
        if (void 0 !== u) {
          if (i.store.schema ? isInterfaceOfType(i.store.schema, u, e) : isFragmentHeuristicallyMatching(u, e, t, i.variables)) {
            if (true) {
              pushDebugNode(e, u);
            }
            return (n = makeSelectionIterator(e, t, getSelectionSet(u), i))();
          }
        }
      } else {
        return s;
      }
    }
  };
}

function ensureData(e) {
  return void 0 === e ? null : e;
}

function ensureLink(e, t) {
  if (null == t) {
    return t;
  } else if (Array.isArray(t)) {
    var r = new Array(t.length);
    for (var i = 0, n = r.length; i < n; i++) {
      r[i] = ensureLink(e, t[i]);
    }
    return r;
  }
  var a = e.keyOfEntity(t);
  if (true) {
    if (!a && t && "object" == typeof t) {
      warn("Can't generate a key for link(...) item.\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + t.__typename + "`.", 12);
    }
  }
  return a;
}

function write(e, t, r, i, n) {
  initDataState("write", e.data, n || null);
  var a = startWrite(e, t, r, i);
  clearDataState();
  return a;
}

function startWrite(e, t, r, i, n) {
  var a = getMainOperation(t.query);
  var o = {
    data: r,
    dependencies: getCurrentDependencies()
  };
  var s = e.rootFields[a.operation];
  var u = makeContext(e, normalizeVariables(a, t.variables), getFragments(t.query), s, s, !!n, i);
  if (true) {
    pushDebugNode(s, a);
  }
  writeSelection(u, s, getSelectionSet(a), r);
  if (true) {
    popDebugNode();
  }
  return o;
}

function writeSelection(e, t, r, i) {
  var n = t === e.store.rootFields.query;
  var a = !n && !!e.store.rootNames[t];
  var o = a || n ? t : i.__typename;
  if (!o) {
     true && warn("Couldn't find __typename when writing.\nIf you're writing to the cache manually have to pass a `__typename` property on each entity in your data.", 14);
    return;
  } else if (!a && !n && t) {
    writeRecord(t, "__typename", o);
  }
  var s = makeSelectionIterator(o, t || o, r, e);
  var u;
  while (u = s()) {
    var c = getName(u);
    var l = getFieldArguments(u, e.variables);
    var d = keyOfField(c, l);
    var f = getFieldAlias(u);
    var p = i[f];
    if (true) {
      if (!a && void 0 === p) {
         true && warn("Invalid undefined: The field at `" + d + "` is `undefined`, but the GraphQL query expects a " + (void 0 === u.selectionSet ? "scalar (number, boolean, etc)" : "selection set") + " for this field." + (e.optimistic ? "\nYour optimistic result may be missing a field!" : ""), 13);
        continue;
      } else if (e.store.schema && o && "__typename" !== c) {
        isFieldAvailableOnType(e.store.schema, o, c);
      }
    }
    if ("__typename" === c) {
      continue;
    }
    e.__internal.path.push(f);
    if (e.optimistic && a) {
      var v = e.store.optimisticMutations[c];
      if (!v) {
        continue;
      }
      updateContext(e, i, o, o, d, c);
      p = i[f] = ensureData(v(l || {}, e.store, e));
    }
    if (u.selectionSet) {
      if (t && !a) {
        var y = joinKeys(t, d);
        writeLink(t || o, d, writeField(e, getSelectionSet(u), ensureData(p), y));
      } else {
        writeField(e, getSelectionSet(u), ensureData(p));
      }
    } else if (t && !a) {
      writeRecord(t || o, d, null !== p || !getFieldError(e) ? p : void 0);
    }
    if (a) {
      var m = e.store.updates[o][c];
      if (m) {
        updateContext(e, i, o, o, joinKeys(o, d), c);
        i[c] = p;
        m(i, l || {}, e.store, e);
      }
    }
    e.__internal.path.pop();
  }
}

var I = /^__|PageInfo|(Connection|Edge)$/;

function writeField(e, t, r, i) {
  if (Array.isArray(r)) {
    var n = new Array(r.length);
    for (var a = 0, o = r.length; a < o; a++) {
      e.__internal.path.push(a);
      var s = i ? joinKeys(i, "" + a) : void 0;
      var u = writeField(e, t, r[a], s);
      n[a] = u;
      e.__internal.path.pop();
    }
    return n;
  } else if (null === r) {
    return getFieldError(e) ? void 0 : null;
  }
  var c = e.store.keyOfEntity(r);
  var l = r.__typename;
  if (true) {
    if (i && !e.store.keys[r.__typename] && null === c && "string" == typeof l && !I.test(l)) {
      warn("Invalid key: The GraphQL query at the field at `" + i + "` has a selection set, but no key could be generated for the data at this field.\nYou have to request `id` or `_id` fields for all selection sets or create a custom `keys` config for `" + l + "`.\nEntities without keys will be embedded directly on the parent entity. If this is intentional, create a `keys` config for `" + l + "` that always returns null.", 15);
    }
  }
  var d = c || i;
  writeSelection(e, d, t, r);
  return d || null;
}

function Store(e) {
  var t, r;
  this.keyOfField = keyOfField;
  this.resolveFieldByKey = this.resolve;
  if (!e) {
    e = {};
  }
  this.resolvers = e.resolvers || {};
  this.optimisticMutations = e.optimistic || {};
  this.keys = e.keys || {};
  var i = "Query";
  var n = "Mutation";
  var a = "Subscription";
  if (e.schema) {
    var o = function buildClientSchema(e) {
      var t = e.__schema;
      var r = {};
      function buildNameMap(e) {
        var t = {};
        for (var r = 0; r < e.length; r++) {
          t[e[r].name] = e[r];
        }
        return t;
      }
      function buildType(e) {
        switch (e.kind) {
         case "OBJECT":
         case "INTERFACE":
          return {
            name: e.name,
            kind: e.kind,
            interfaces: buildNameMap(e.interfaces || []),
            fields: buildNameMap(e.fields.map((function(e) {
              return {
                name: e.name,
                type: e.type,
                args: buildNameMap(e.args)
              };
            })))
          };

         case "UNION":
          return {
            name: e.name,
            kind: e.kind,
            types: buildNameMap(e.possibleTypes || [])
          };
        }
      }
      var i = {
        query: t.queryType ? t.queryType.name : null,
        mutation: t.mutationType ? t.mutationType.name : null,
        subscription: t.subscriptionType ? t.subscriptionType.name : null,
        types: void 0,
        isSubType: function isSubType(e, t) {
          var i = r[e];
          var n = r[t];
          if (!i || !n) {
            return !1;
          } else if ("UNION" === i.kind) {
            return !!i.types[t];
          } else if ("OBJECT" !== i.kind && "OBJECT" === n.kind) {
            return !!n.interfaces[e];
          } else {
            return e === t;
          }
        }
      };
      if (t.types) {
        i.types = r;
        for (var n = 0; n < t.types.length; n++) {
          var a = t.types[n];
          if (a && a.name) {
            var o = buildType(a);
            if (o) {
              r[a.name] = o;
            }
          }
        }
      }
      return i;
    }(e.schema);
    i = o.query || i;
    n = o.mutation || n;
    a = o.subscription || a;
    if (o.types) {
      this.schema = o;
    }
  }
  this.updates = ((t = {})[n] = e.updates && e.updates.Mutation || {}, t[a] = e.updates && e.updates.Subscription || {}, 
  t);
  this.rootFields = {
    query: i,
    mutation: n,
    subscription: a
  };
  this.rootNames = ((r = {})[i] = "query", r[n] = "mutation", r[a] = "subscription", 
  r);
  this.data = function make(e) {
    return {
      defer: !1,
      gc: new Set,
      persist: new Set,
      queryRootKey: e,
      refCount: makeDict(),
      refLock: makeDict(),
      links: makeNodeMap(),
      records: makeNodeMap(),
      commutativeKeys: new Set,
      optimisticOrder: [],
      storage: null
    };
  }(i);
  if (this.schema && "production" !== "development") {
    !function expectValidKeyingConfig(e, t) {
      if (true) {
        for (var r in t) {
          if (true) {
            if (!e.types[r]) {
              warn("Invalid Object type: The type `" + r + "` is not an object in the defined schema, but the `keys` option is referencing it.", 20);
            }
          }
        }
      }
    }(this.schema, this.keys);
    !function expectValidUpdatesConfig(e, t) {
      if (false) {}
      if (e.mutation) {
        var r = e.types[e.mutation].fields;
        var i = t[e.mutation] || {};
        for (var n in i) {
          if (true) {
            if (void 0 === r[n]) {
              warn("Invalid mutation field: `" + n + "` is not in the defined schema, but the `updates.Mutation` option is referencing it.", 21);
            }
          }
        }
      }
      if (e.subscription) {
        var a = e.types[e.subscription].fields;
        var o = t[e.subscription] || {};
        for (var s in o) {
          if (true) {
            if (void 0 === a[s]) {
              warn("Invalid subscription field: `" + s + "` is not in the defined schema, but the `updates.Subscription` option is referencing it.", 22);
            }
          }
        }
      }
    }(this.schema, this.updates);
    !function expectValidResolversConfig(e, t) {
      if (false) {}
      for (var r in t) {
        if ("Query" === r) {
          if (e.query) {
            var i = e.types[e.query].fields;
            for (var n in t.Query) {
              if (!i[n]) {
                warnAboutResolver("Query." + n);
              }
            }
          } else {
            warnAboutResolver("Query");
          }
        } else if (!e.types[r]) {
          warnAboutResolver(r);
        } else if ("INTERFACE" === e.types[r].kind || "UNION" === e.types[r].kind) {
          s = r, u = e.types[r].kind,  true && warn("Invalid resolver: `" + s + "` does not match to a concrete type in the schema, but the `resolvers` option is referencing it. Implement the resolver for the types that " + ("UNION" === u ? "make up the union" : "implement the interface") + " instead.", 26);
        } else {
          var a = e.types[r].fields;
          for (var o in t[r]) {
            if (!a[o]) {
              warnAboutResolver(r + "." + o);
            }
          }
        }
      }
      var s, u;
    }(this.schema, this.resolvers);
    !function expectValidOptimisticMutationsConfig(e, t) {
      if (false) {}
      if (e.mutation) {
        var r = e.types[e.mutation].fields;
        for (var i in t) {
          if (true) {
            if (!r[i]) {
              warn("Invalid optimistic mutation field: `" + i + "` is not a mutation field in the defined schema, but the `optimistic` option is referencing it.", 24);
            }
          }
        }
      }
    }(this.schema, this.optimisticMutations);
  }
}

Store.prototype.keyOfEntity = function keyOfEntity(e) {
  if (q.current && e === q.current.parent) {
    return q.current.parentKey;
  }
  if (null == e || "string" == typeof e) {
    return e || null;
  }
  if (!e.__typename) {
    return null;
  }
  if (this.rootNames[e.__typename]) {
    return e.__typename;
  }
  var t;
  if (this.keys[e.__typename]) {
    t = this.keys[e.__typename](e);
  } else if (null != e.id) {
    t = "" + e.id;
  } else if (null != e._id) {
    t = "" + e._id;
  }
  return t ? e.__typename + ":" + t : null;
};

Store.prototype.resolve = function resolve(e, t, r) {
  var i = keyOfField(t, r);
  var n = this.keyOfEntity(e);
  if (!n) {
    return null;
  }
  var a = readRecord(n, i);
  if (void 0 !== a) {
    return a;
  }
  return readLink(n, i) || null;
};

Store.prototype.invalidate = function invalidate(e, t, r) {
  var i = this.keyOfEntity(e);
  invariant(i,  true ? "Can't generate a key for invalidate(...).\nYou have to pass an id or _id field or create a custom `keys` field for `" + typeof e == "object" ? e.__typename : e + "`." : 0, 19);
  !function invalidateEntity(e, t, r) {
    var i = t ? [ {
      fieldKey: keyOfField(t, r)
    } ] : inspectFields(e);
    for (var n = 0, a = i.length; n < a; n++) {
      var o = i[n].fieldKey;
      if (void 0 !== readLink(e, o)) {
        writeLink(e, o, void 0);
      } else {
        writeRecord(e, o, void 0);
      }
    }
  }(i, t, r);
};

Store.prototype.inspectFields = function inspectFields$1(e) {
  var t = this.keyOfEntity(e);
  return t ? inspectFields(t) : [];
};

Store.prototype.updateQuery = function updateQuery(e, i) {
  var n = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e.query, e.variables);
  n.query = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(n.query);
  var a = i(this.readQuery(n));
  if (null !== a) {
    startWrite(this, n, a);
  }
};

Store.prototype.readQuery = function readQuery(e) {
  var i = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e.query, e.variables);
  i.query = (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(i.query);
  return read(this, i).data;
};

Store.prototype.readFragment = function readFragment$1(e, t, i) {
  return function readFragment(e, t, r, i) {
    var n = getFragments(t);
    var a = Object.keys(n);
    var o = n[a[0]];
    if (!o) {
       true && warn("readFragment(...) was called with an empty fragment.\nYou have to call it with at least one fragment in your GraphQL document.", 6);
      return null;
    }
    var s = getFragmentTypeName(o);
    if ("string" != typeof r && !r.__typename) {
      r.__typename = s;
    }
    var u = e.keyOfEntity(r);
    if (!u) {
       true && warn("Can't generate a key for readFragment(...).\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + s + "`.", 7);
      return null;
    }
    if (true) {
      pushDebugNode(s, o);
    }
    var c = readSelection(makeContext(e, i || {}, n, s, u), u, getSelectionSet(o), {}) || null;
    if (true) {
      popDebugNode();
    }
    return c;
  }(this, (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e), t, i);
};

Store.prototype.writeFragment = function writeFragment$1(e, t, i) {
  !function writeFragment(e, t, r, i) {
    var n = getFragments(t);
    var a = n[Object.keys(n)[0]];
    if (!a) {
      return  true ? warn("writeFragment(...) was called with an empty fragment.\nYou have to call it with at least one fragment in your GraphQL document.", 11) : 0;
    }
    var o = getFragmentTypeName(a);
    var s = (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, {
      __typename: o
    }, r);
    var u = e.keyOfEntity(s);
    if (!u) {
      return  true ? warn("Can't generate a key for writeFragment(...) data.\nYou have to pass an `id` or `_id` field or create a custom `keys` config for `" + o + "`.", 12) : 0;
    }
    if (true) {
      pushDebugNode(o, a);
    }
    writeSelection(makeContext(e, i || {}, n, o, u, void 0), u, getSelectionSet(a), s);
    if (true) {
      popDebugNode();
    }
  }(this, (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e), t, i);
};

Store.prototype.link = function link(e, t, r, i) {
  var n = void 0 !== i ? r : null;
  var link = void 0 !== i ? i : r;
  var a = ensureLink(this, e);
  if ("string" == typeof a) {
    writeLink(a, keyOfField(t, n), ensureLink(this, link));
  }
};

function query(e, t, r, i, n) {
  initDataState("read", e.data, r && n || null);
  var a = read(e, t, r, i);
  clearDataState();
  return a;
}

function read(e, t, r, i) {
  var n = getMainOperation(t.query);
  var a = e.rootFields[n.operation];
  var o = getSelectionSet(n);
  var s = makeContext(e, normalizeVariables(n, t.variables), getFragments(t.query), a, a, !1, i);
  if (true) {
    pushDebugNode(a, n);
  }
  var u = a !== s.store.rootFields.query ? readRoot(s, a, o, r || {}) : readSelection(s, a, o, {});
  if (true) {
    popDebugNode();
  }
  return {
    dependencies: getCurrentDependencies(),
    partial: s.partial || !u,
    data: u || null
  };
}

function readRoot(e, t, r, i) {
  var n = e.store.rootNames[t] ? t : i.__typename;
  if ("string" != typeof n) {
    return i;
  }
  var a = makeSelectionIterator(t, t, r, e);
  var o = {
    __typename: n
  };
  var s;
  while (s = a()) {
    var u = getFieldAlias(s);
    var c = i[u];
    e.__internal.path.push(u);
    if (s.selectionSet && null !== c) {
      var l = ensureData(c);
      o[u] = readRootField(e, getSelectionSet(s), l);
    } else {
      o[u] = c;
    }
    e.__internal.path.pop();
  }
  return o;
}

function readRootField(e, t, r) {
  if (Array.isArray(r)) {
    var i = new Array(r.length);
    for (var n = 0, a = r.length; n < a; n++) {
      e.__internal.path.push(n);
      i[n] = readRootField(e, t, r[n]);
      e.__internal.path.pop();
    }
    return i;
  } else if (null === r) {
    return null;
  }
  var o = e.store.keyOfEntity(r);
  if (null !== o) {
    var s = readSelection(e, o, t, {});
    return void 0 === s ? null : s;
  } else {
    return readRoot(e, r.__typename, t, r);
  }
}

function readSelection(e, t, r, i, n) {
  var a = e.store;
  var o = t === a.rootFields.query;
  var s = n && a.keyOfEntity(n) || t;
  if (true) {
    if (!o && e.store.rootNames[s]) {
      warn("Invalid root traversal: A selection was being read on `" + s + "` which is an uncached root type.\nThe `" + e.store.rootFields.mutation + "` and `" + e.store.rootFields.subscription + "` types are special Operation Root Types and cannot be read back from the cache.", 25);
    }
  }
  var u = !o ? readRecord(s, "__typename") || n && n.__typename : t;
  if ("string" != typeof u) {
    return;
  } else if (n && u !== n.__typename) {
     true && warn("Invalid resolver data: The resolver at `" + s + "` returned an invalid typename that could not be reconciled with the cache.", 8);
    return;
  }
  var c = makeSelectionIterator(u, s, r, e);
  var l;
  var d = !1;
  var f = !1;
  while (void 0 !== (l = c())) {
    var p = getName(l);
    var v = getFieldArguments(l, e.variables);
    var y = getFieldAlias(l);
    var m = keyOfField(p, v);
    var h = joinKeys(s, m);
    var g = readRecord(s, m);
    var N = n ? n[p] : void 0;
    var k = a.resolvers[u];
    if ( true && a.schema && u) {
      isFieldAvailableOnType(a.schema, u, p);
    }
    if ("__typename" === p) {
      i[y] = u;
      continue;
    }
    var O = void 0;
    e.__internal.path.push(y);
    if (void 0 !== N && void 0 === l.selectionSet) {
      O = N;
    } else if ("read" === getCurrentOperation() && k && "function" == typeof k[p]) {
      updateContext(e, i, u, s, h, p);
      if (void 0 !== g) {
        i[y] = g;
      }
      O = k[p](i, v || {}, a, e);
      if (l.selectionSet) {
        O = resolveResolverResult(e, u, p, h, getSelectionSet(l), i[y], O);
      }
      if (a.schema && null === O && !isFieldNullable(a.schema, u, p)) {
        return;
      }
    } else if (!l.selectionSet) {
      O = g;
    } else if (void 0 !== N) {
      O = resolveResolverResult(e, u, p, h, getSelectionSet(l), i[y], N);
    } else {
      var _ = readLink(s, m);
      if (void 0 !== _) {
        O = resolveLink(e, _, u, p, getSelectionSet(l), i[y]);
      } else if ("object" == typeof g && null !== g) {
        O = g;
      }
    }
    if (void 0 === O && getFieldError(e)) {
      f = !0;
      O = null;
    }
    e.__internal.path.pop();
    if (void 0 === O && a.schema && isFieldNullable(a.schema, u, p)) {
      f = !0;
      i[y] = null;
    } else if (void 0 === O) {
      return;
    } else {
      d = !0;
      i[y] = O;
    }
  }
  if (f) {
    e.partial = !0;
  }
  return o && f && !d ? void 0 : i;
}

function resolveResolverResult(e, t, r, i, n, a, o) {
  if (Array.isArray(o)) {
    var s = e.store;
    var u = s.schema ? isListNullable(s.schema, t, r) : !1;
    var c = new Array(o.length);
    for (var l = 0, d = o.length; l < d; l++) {
      e.__internal.path.push(l);
      var f = resolveResolverResult(e, t, r, joinKeys(i, "" + l), n, null != a ? a[l] : void 0, o[l]);
      e.__internal.path.pop();
      if (void 0 === f && !u) {
        return;
      } else {
        c[l] = void 0 !== f ? f : null;
      }
    }
    return c;
  } else if (null == o) {
    return o;
  } else if (null === a) {
    return null;
  } else if (function isDataOrKey(e) {
    return "string" == typeof e || "object" == typeof e && "string" == typeof e.__typename;
  }(o)) {
    var p = a || {};
    return "string" == typeof o ? readSelection(e, o, n, p) : readSelection(e, i, n, p, o);
  } else {
     true && warn("Invalid resolver value: The field at `" + i + "` is a scalar (number, boolean, etc), but the GraphQL query expects a selection set for this field.", 9);
    return;
  }
}

function resolveLink(e, t, r, i, n, a) {
  if (Array.isArray(t)) {
    var o = e.store;
    var s = o.schema ? isListNullable(o.schema, r, i) : !1;
    var u = new Array(t.length);
    for (var c = 0, l = t.length; c < l; c++) {
      e.__internal.path.push(c);
      var d = resolveLink(e, t[c], r, i, n, null != a ? a[c] : void 0);
      e.__internal.path.pop();
      if (void 0 === d && !s) {
        return;
      } else {
        u[c] = void 0 !== d ? d : null;
      }
    }
    return u;
  } else if (null === t || null === a) {
    return null;
  } else {
    return readSelection(e, t, n, a || {});
  }
}

function addCacheOutcome(e, t) {
  return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, e, (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context, {
    meta: (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context.meta, {
      cacheOutcome: t
    })
  }));
}

function toRequestPolicy(e, t) {
  return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, e, (0,_5301ccd2_mjs__WEBPACK_IMPORTED_MODULE_3__._)({}, e.context, {
    requestPolicy: t
  }));
}

function cacheExchange(e) {
  return function(t) {
    var m = t.forward;
    var h = t.client;
    var g = t.dispatchDebug;
    var N = new Store(e);
    var k;
    if (e && e.storage) {
      k = e.storage.readData().then((function(t) {
        !function hydrateData(e, t, r) {
          initDataState("write", e, null);
          for (var i in r) {
            var n = r[i];
            if (void 0 !== n) {
              var a = deserializeKeyInfo(i);
              var o = a.entityKey;
              var s = a.fieldKey;
              if (":" === n[0]) {
                writeLink(o, s, JSON.parse(n.slice(1)));
              } else {
                writeRecord(o, s, JSON.parse(n));
              }
            }
          }
          clearDataState();
          e.storage = t;
        }(N.data, e.storage, t);
      }));
    }
    var O = new Map;
    var _ = [];
    var E = new Map;
    var b = makeDict();
    var w = new Set;
    var D = makeDict();
    function isBlockedByOptimisticUpdate(e) {
      for (var t in e) {
        if (b[t]) {
          return !0;
        }
      }
      return !1;
    }
    function collectPendingOperations(e, t) {
      if (t) {
        for (var r in t) {
          var i = D[r];
          if (i) {
            D[r] = [];
            for (var n = 0, a = i.length; n < a; n++) {
              e.add(i[n]);
            }
          }
        }
      }
    }
    function executePendingOperations(e, t) {
      t.forEach((function(t) {
        if (t !== e.key) {
          var r = E.get(t);
          if (r) {
            E.delete(t);
            var i = "cache-first";
            if (w.has(t)) {
              w.delete(t);
              i = "cache-and-network";
            }
            h.reexecuteOperation(toRequestPolicy(r, i));
          }
        }
      }));
    }
    function prepareForwardedOperation(e) {
      if ("query" === e.kind) {
        reserveLayer(N.data, e.key);
      } else if ("teardown" === e.kind) {
        E.delete(e.key);
        noopDataState(N.data, e.key);
      } else if ("mutation" === e.kind && "network-only" !== e.context.requestPolicy) {
        var t = function writeOptimistic(e, t, r) {
          if (true) {
            invariant("mutation" === getMainOperation(t.query).operation,  true ? "writeOptimistic(...) was called with an operation that is not a mutation.\nThis case is unsupported and should never occur." : 0, 10);
          }
          initDataState("write", e.data, r, !0);
          var i = startWrite(e, t, {}, void 0, !0);
          clearDataState();
          return i;
        }(N, e, e.key).dependencies;
        if (!function isDictEmpty(e) {
          for (var t in e) {
            return !1;
          }
          return !0;
        }(t)) {
          for (var n in t) {
            b[n] = !0;
          }
          O.set(e.key, t);
          var a = new Set;
          collectPendingOperations(a, t);
          executePendingOperations(e, a);
        }
      }
      return (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)(e.kind, {
        key: e.key,
        query: (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.formatDocument)(e.query),
        variables: e.variables ? filterVariables(getMainOperation(e.query), e.variables) : e.variables
      }, e.context);
    }
    function updateDependencies(e, t) {
      for (var r in t) {
        (D[r] || (D[r] = [])).push(e.key);
        E.set(e.key, e);
      }
    }
    function operationResultFromCache(e) {
      var t = query(N, e);
      var r = t.data ? !t.partial ? "hit" : "partial" : "miss";
      updateDependencies(e, t.dependencies);
      return {
        outcome: r,
        operation: e,
        data: t.data,
        dependencies: t.dependencies
      };
    }
    function updateCacheWithResult(e, t) {
      var r = e.operation;
      var i = e.error;
      var n = e.extensions;
      var a = r.key;
      if ("mutation" === r.kind) {
        collectPendingOperations(t, O.get(a));
        O.delete(a);
      } else {
        reserveLayer(N.data, r.key);
      }
      var o;
      if (e.data) {
        collectPendingOperations(t, write(N, r, e.data, e.error, a).dependencies);
        var s = query(N, r, e.data, e.error, a);
        e.data = s.data;
        if ("query" === r.kind) {
          collectPendingOperations(t, o = s.dependencies);
        }
      } else {
        noopDataState(N.data, r.key);
      }
      if (o) {
        updateDependencies(e.operation, o);
      }
      return {
        data: e.data,
        error: i,
        extensions: n,
        operation: r
      };
    }
    return function(e) {
      var t = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(e);
      var r = k ? (0,wonka__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((function(e) {
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromArray)(e[0]);
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.take)(1)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.combine)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.scan)((function(e, t) {
        return e.push(t), e;
      }), [])(t), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromPromise)(k)))) : wonka__WEBPACK_IMPORTED_MODULE_4__.empty;
      var i = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.concat)([ r, t ]));
      var E = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)(operationResultFromCache)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "query" === e.kind && "network-only" !== e.context.requestPolicy;
      }))(i)));
      var D = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "query" !== e.kind || "network-only" === e.context.requestPolicy;
      }))(i);
      var F = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
         true && g({
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache",
          operation: e.operation,
          source: "cacheExchange"
        });
        return addCacheOutcome(e.operation, "miss");
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "miss" === e.outcome && "cache-only" !== e.operation.context.requestPolicy && !isBlockedByOptimisticUpdate(e.dependencies);
      }))(E));
      var S = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
        var t = e.operation;
        var r = e.outcome;
        var i = e.dependencies;
        var n = {
          operation: addCacheOutcome(t, r),
          data: e.data,
          error: e.error,
          extensions: e.extensions
        };
        if ("cache-and-network" === t.context.requestPolicy || "cache-first" === t.context.requestPolicy && "partial" === r) {
          n.stale = !0;
          if (!isBlockedByOptimisticUpdate(i)) {
            h.reexecuteOperation(toRequestPolicy(t, "network-only"));
          } else if ("cache-and-network" === t.context.requestPolicy) {
            w.add(t.key);
          }
        }
         true && g({
          type: "cacheHit",
          message: "A requested operation was found and returned from the cache.",
          operation: e.operation,
          data: {
            value: n
          },
          source: "cacheExchange"
        });
        return n;
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return "miss" !== e.outcome || "cache-only" === e.operation.context.requestPolicy;
      }))(E));
      var L = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(m((0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)(prepareForwardedOperation)((0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ D, F ]))));
      var q = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.map)((function(e) {
        var t = new Set;
        var r = updateCacheWithResult(e, t);
        executePendingOperations(e.operation, t);
        return r;
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return !O.has(e.operation.key);
      }))(L));
      var I = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((function(e) {
        if (_.push(e) < O.size) {
          return wonka__WEBPACK_IMPORTED_MODULE_4__.empty;
        }
        for (var t = 0; t < _.length; t++) {
          reserveLayer(N.data, _[t].operation.key);
        }
        for (var r in b) {
          delete b[r];
        }
        var i = [];
        var n = new Set;
        var a;
        while (a = _.shift()) {
          i.push(updateCacheWithResult(a, n));
        }
        executePendingOperations(e.operation, n);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.fromArray)(i);
      }))((0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
        return O.has(e.operation.key);
      }))(L));
      return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ q, I, S ]);
    };
  };
}

function isOfflineError(e) {
  return e && e.networkError && !e.response && ("undefined" != typeof navigator && !1 === navigator.onLine || /request failed|failed to fetch|network\s?error/i.test(e.networkError.message));
}

function offlineExchange(e) {
  return function(r) {
    var a = e.storage;
    if (a && a.onOnline && a.readMetadata && a.writeMetadata) {
      var o = r.forward;
      var s = r.client;
      var u = r.dispatchDebug;
      var c = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.makeSubject)();
      var l = c.source;
      var d = c.next;
      var f = e.optimistic || {};
      var p = [];
      var updateMetadata = function() {
        var e = [];
        for (var t = 0; t < p.length; t++) {
          var r = p[t];
          if ("mutation" === r.kind) {
            e.push({
              query: (0,graphql_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(r.query),
              variables: r.variables
            });
          }
        }
        a.writeMetadata(e);
      };
      var h = !1;
      var flushQueue = function() {
        if (!h) {
          h = !0;
          for (var e = 0; e < p.length; e++) {
            var t = p[e];
            if ("mutation" === t.kind) {
              d((0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.makeOperation)("teardown", t));
            }
          }
          for (var r = 0; r < p.length; r++) {
            s.reexecuteOperation(p[r]);
          }
          p.length = 0;
          h = !1;
          updateMetadata();
        }
      };
      a.onOnline(flushQueue);
      a.readMetadata().then((function(e) {
        if (e) {
          for (var r = 0; r < e.length; r++) {
            p.push(s.createRequestOperation("mutation", (0,_urql_core__WEBPACK_IMPORTED_MODULE_2__.createRequest)(e[r].query, e[r].variables)));
          }
          flushQueue();
        }
      }));
      var g = cacheExchange(e)({
        client: s,
        dispatchDebug: u,
        forward: function(e) {
          return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
            if ("mutation" === e.operation.kind && isOfflineError(e.error) && function isOptimisticMutation(e, t) {
              var r = t.variables || makeDict();
              var i = getFragments(t.query);
              var n = [].concat(getSelectionSet(getMainOperation(t.query)));
              var a;
              while (a = n.pop()) {
                if (!shouldInclude(a, r)) {
                  continue;
                } else if (!isFieldNode(a)) {
                  var o = !isInlineFragment(a) ? i[getName(a)] : a;
                  if (o) {
                    n.push.apply(n, getSelectionSet(o));
                  }
                } else if (e[getName(a)]) {
                  return !0;
                }
              }
              return !1;
            }(f, e.operation)) {
              p.push(e.operation);
              updateMetadata();
              return !1;
            }
            return !0;
          }))(o(e));
        }
      });
      return function(e) {
        var t = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.share)(e);
        var r = (0,wonka__WEBPACK_IMPORTED_MODULE_4__.merge)([ l, t ]);
        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.filter)((function(e) {
          if ("query" === e.operation.kind && isOfflineError(e.error)) {
            d(toRequestPolicy(e.operation, "cache-only"));
            p.push(e.operation);
            return !1;
          }
          return !0;
        }))(g(r));
      };
    }
    return cacheExchange(e)(r);
  };
}


//# sourceMappingURL=urql-exchange-graphcache.mjs.map


/***/ }),

/***/ "./node_modules/graphql-tag/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/graphql-tag/lib/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gql": function() { return /* binding */ gql; },
/* harmony export */   "resetCaches": function() { return /* binding */ resetCaches; },
/* harmony export */   "disableFragmentWarnings": function() { return /* binding */ disableFragmentWarnings; },
/* harmony export */   "enableExperimentalFragmentVariables": function() { return /* binding */ enableExperimentalFragmentVariables; },
/* harmony export */   "disableExperimentalFragmentVariables": function() { return /* binding */ disableExperimentalFragmentVariables; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                        + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                        + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            }
            else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        }
        else {
            definitions.push(fragmentDefinition);
        }
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, ast), { definitions: definitions });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function (node) {
        if (node.loc)
            delete node.loc;
        Object.keys(node).forEach(function (key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = (0,graphql__WEBPACK_IMPORTED_MODULE_1__.parse)(source, {
            experimentalFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [literals];
    }
    var result = literals[0];
    args.forEach(function (arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        }
        else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function (gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
/* harmony default export */ __webpack_exports__["default"] = (gql);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql/error/formatError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/formatError.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatError": function() { return /* binding */ formatError; }
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  var _error$message;

  error || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'Received null or undefined error.');
  var message = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */


/***/ }),

/***/ "./node_modules/graphql/error/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/error/index.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLError": function() { return /* reexport safe */ _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError; },
/* harmony export */   "printError": function() { return /* reexport safe */ _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.printError; },
/* harmony export */   "syntaxError": function() { return /* reexport safe */ _syntaxError_mjs__WEBPACK_IMPORTED_MODULE_1__.syntaxError; },
/* harmony export */   "locatedError": function() { return /* reexport safe */ _locatedError_mjs__WEBPACK_IMPORTED_MODULE_2__.locatedError; },
/* harmony export */   "formatError": function() { return /* reexport safe */ _formatError_mjs__WEBPACK_IMPORTED_MODULE_3__.formatError; }
/* harmony export */ });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _syntaxError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony import */ var _locatedError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _formatError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatError.mjs */ "./node_modules/graphql/error/formatError.mjs");






/***/ }),

/***/ "./node_modules/graphql/error/locatedError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/locatedError.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locatedError": function() { return /* binding */ locatedError; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Given an arbitrary value, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(rawOriginalError, nodes, path) {
  var _nodes;

  // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
  var originalError = rawOriginalError instanceof Error ? rawOriginalError : new Error('Unexpected error value: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(rawOriginalError)); // Note: this uses a brand-check to support GraphQL errors originating from other contexts.

  if (Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError(originalError.message, (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes, originalError.source, originalError.positions, path, originalError);
}


/***/ }),

/***/ "./node_modules/graphql/execution/execute.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/execution/execute.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "execute": function() { return /* binding */ execute; },
/* harmony export */   "executeSync": function() { return /* binding */ executeSync; },
/* harmony export */   "assertValidExecutionArguments": function() { return /* binding */ assertValidExecutionArguments; },
/* harmony export */   "buildExecutionContext": function() { return /* binding */ buildExecutionContext; },
/* harmony export */   "collectFields": function() { return /* binding */ collectFields; },
/* harmony export */   "buildResolveInfo": function() { return /* binding */ buildResolveInfo; },
/* harmony export */   "defaultTypeResolver": function() { return /* binding */ defaultTypeResolver; },
/* harmony export */   "defaultFieldResolver": function() { return /* binding */ defaultFieldResolver; },
/* harmony export */   "getFieldDef": function() { return /* binding */ getFieldDef; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_memoize3_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../jsutils/memoize3.mjs */ "./node_modules/graphql/jsutils/memoize3.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../jsutils/safeArrayFrom.mjs */ "./node_modules/graphql/jsutils/safeArrayFrom.mjs");
/* harmony import */ var _jsutils_promiseReduce_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/promiseReduce.mjs */ "./node_modules/graphql/jsutils/promiseReduce.mjs");
/* harmony import */ var _jsutils_promiseForObject_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/promiseForObject.mjs */ "./node_modules/graphql/jsutils/promiseForObject.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./values.mjs */ "./node_modules/graphql/execution/values.mjs");




















/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}
/**
 * Also implements the "Evaluating requests" section of the GraphQL specification.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function executeSync(args) {
  var result = executeImpl(args); // Assert that the execution was synchronous.

  if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function executeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 *
 * @internal
 */


function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(0, 'Must provide document.'); // If the schema used for execution is invalid, throw an error.

  (0,_type_validate_mjs__WEBPACK_IMPORTED_MODULE_2__.assertValidSchema)(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(rawVariableValues) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(0, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 *
 * @internal
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var _definition$name, _operation$variableDe;

  var operation;
  var fragments = Object.create(null);

  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];

    switch (definition.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.OPERATION_DEFINITION:
        if (operationName == null) {
          if (operation !== undefined) {
            return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError('Must provide operation name if query contains multiple operations.')];
          }

          operation = definition;
        } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
          operation = definition;
        }

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName != null) {
      return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Unknown operation named \"".concat(operationName, "\"."))];
    }

    return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError('Must provide an operation.')];
  } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')


  var variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
  var coercedVariableValues = (0,_values_mjs__WEBPACK_IMPORTED_MODULE_6__.getVariableValues)(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
    maxErrors: 50
  });

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
    typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
    errors: []
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = (0,_utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_7__.getOperationRootType)(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return (0,_jsutils_promiseReduce_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.addPath)(path, responseName, parentType.name);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.addPath)(path, responseName, parentType.name);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return (0,_jsutils_promiseForObject_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 *
 * @internal
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];

    switch (selection.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = (0,_values_mjs__WEBPACK_IMPORTED_MODULE_6__.getDirectiveValues)(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_11__.GraphQLSkipDirective, node, exeContext.variableValues);

  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }

  var include = (0,_values_mjs__WEBPACK_IMPORTED_MODULE_6__.getDirectiveValues)(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_11__.GraphQLIncludeDirective, node, exeContext.variableValues);

  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_12__.typeFromAST)(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isAbstractType)(conditionalType)) {
    return exeContext.schema.isSubType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;

  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var returnType = fieldDef.type;
  var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal or abrupt (error).

  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = (0,_values_mjs__WEBPACK_IMPORTED_MODULE_6__.getArgumentValues)(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    var completed;

    if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (rawError) {
        var error = (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_14__.locatedError)(rawError, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.pathToArray)(path));
        return handleFieldError(error, returnType, exeContext);
      });
    }

    return completed;
  } catch (rawError) {
    var error = (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_14__.locatedError)(rawError, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.pathToArray)(path));
    return handleFieldError(error, returnType, exeContext);
  }
}
/**
 * @internal
 */


function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}

function handleFieldError(error, returnType, exeContext) {
  // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isNonNullType)(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isNonNullType)(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null or undefined then return null.


  if (result == null) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isListType)(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isLeafType)(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isAbstractType)(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.
  // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isObjectType)(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // istanbul ignore next (Not reachable. All possible output types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_15__.default)(0, 'Cannot complete value of unexpected output type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.
  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = (0,_jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_17__.default)(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var itemPath = (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.addPath)(path, index, undefined);

    try {
      var completedItem;

      if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(item)) {
        completedItem = item.then(function (resolved) {
          return completeValue(exeContext, itemType, fieldNodes, info, itemPath, resolved);
        });
      } else {
        completedItem = completeValue(exeContext, itemType, fieldNodes, info, itemPath, item);
      }

      if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(completedItem)) {
        containsPromise = true; // Note: we don't rely on a `catch` method, but we do expect "thenable"
        // to take a second callback for the error case.

        return completedItem.then(undefined, function (rawError) {
          var error = (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_14__.locatedError)(rawError, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.pathToArray)(itemPath));
          return handleFieldError(error, itemType, exeContext);
        });
      }

      return completedItem;
    } catch (rawError) {
      var error = (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_14__.locatedError)(rawError, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__.pathToArray)(itemPath));
      return handleFieldError(error, itemType, exeContext);
    }
  });

  if (completedResults == null) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Expected Iterable, but did not find one for field \"".concat(info.parentType.name, ".").concat(info.fieldName, "\"."));
  }

  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);

  if (serializedResult === undefined) {
    throw new Error("Expected a value of type \"".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(returnType), "\" but ") + "received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var _returnType$resolveTy;

  var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  if (runtimeTypeOrName == null) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Abstract type \"".concat(returnType.name, "\" must resolve to an Object type at runtime for field \"").concat(info.parentType.name, ".").concat(info.fieldName, "\". Either the \"").concat(returnType.name, "\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."), fieldNodes);
  } // FIXME: temporary workaround until support for passing object types would be removed in v16.0.0


  var runtimeTypeName = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isNamedType)(runtimeTypeOrName) ? runtimeTypeOrName.name : runtimeTypeOrName;

  if (typeof runtimeTypeName !== 'string') {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Abstract type \"".concat(returnType.name, "\" must resolve to an Object type at runtime for field \"").concat(info.parentType.name, ".").concat(info.fieldName, "\" with ") + "value ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(result), ", received \"").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(runtimeTypeOrName), "\"."));
  }

  var runtimeType = exeContext.schema.getType(runtimeTypeName);

  if (runtimeType == null) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Abstract type \"".concat(returnType.name, "\" was resolve to a type \"").concat(runtimeTypeName, "\" that does not exist inside schema."), fieldNodes);
  }

  if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_13__.isObjectType)(runtimeType)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Abstract type \"".concat(returnType.name, "\" was resolve to a non-object type \"").concat(runtimeTypeName, "\"."), fieldNodes);
  }

  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type for \"").concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError("Expected value of type \"".concat(returnType.name, "\" but got: ").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = (0,_jsutils_memoize3_mjs__WEBPACK_IMPORTED_MODULE_18__.default)(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
    var node = fieldNodes[_i8];

    if (node.selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


var defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(value) && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type.name;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
        if (isTypeOfResults[_i9]) {
          return possibleTypes[_i9].name;
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(source) || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the three introspection fields,
 * __schema, __type and __typename. __typename is special because
 * it can always be queried as a field, even in situations where no
 * other fields are allowed, like on a Union. __schema and __type
 * could get automatically added to the query type, but that would
 * require mutating type definitions, which would cause issues.
 *
 * @internal
 */

function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.SchemaMetaFieldDef;
  } else if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.TypeMetaFieldDef;
  } else if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.TypeNameMetaFieldDef.name) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_19__.TypeNameMetaFieldDef;
  }

  return parentType.getFields()[fieldName];
}


/***/ }),

/***/ "./node_modules/graphql/execution/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/execution/index.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "responsePathAsArray": function() { return /* reexport safe */ _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_0__.pathToArray; },
/* harmony export */   "execute": function() { return /* reexport safe */ _execute_mjs__WEBPACK_IMPORTED_MODULE_1__.execute; },
/* harmony export */   "executeSync": function() { return /* reexport safe */ _execute_mjs__WEBPACK_IMPORTED_MODULE_1__.executeSync; },
/* harmony export */   "defaultFieldResolver": function() { return /* reexport safe */ _execute_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultFieldResolver; },
/* harmony export */   "defaultTypeResolver": function() { return /* reexport safe */ _execute_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultTypeResolver; },
/* harmony export */   "getDirectiveValues": function() { return /* reexport safe */ _values_mjs__WEBPACK_IMPORTED_MODULE_2__.getDirectiveValues; }
/* harmony export */ });
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _execute_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _values_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.mjs */ "./node_modules/graphql/execution/values.mjs");





/***/ }),

/***/ "./node_modules/graphql/execution/values.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/execution/values.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVariableValues": function() { return /* binding */ getVariableValues; },
/* harmony export */   "getArgumentValues": function() { return /* binding */ getArgumentValues; },
/* harmony export */   "getDirectiveValues": function() { return /* binding */ getDirectiveValues; }
/* harmony export */ });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/printPathArray.mjs */ "./node_modules/graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _utilities_coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/coerceInputValue.mjs */ "./node_modules/graphql/utilities/coerceInputValue.mjs");












/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 *
 * @internal
 */
function getVariableValues(schema, varDefNodes, inputs, options) {
  var errors = [];
  var maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;

  try {
    var coerced = coerceVariableValues(schema, varDefNodes, inputs, function (error) {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Too many errors processing variables, error limit reached. Execution aborted.');
      }

      errors.push(error);
    });

    if (errors.length === 0) {
      return {
        coerced: coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }

  return {
    errors: errors
  };
}

function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  var coercedValues = {};

  var _loop = function _loop(_i2) {
    var varDefNode = varDefNodes[_i2];
    var varName = varDefNode.variable.name.value;
    var varType = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_1__.typeFromAST)(schema, varDefNode.type);

    if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputType)(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      var varTypeStr = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__.print)(varDefNode.type);
      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Variable \"$".concat(varName, "\" expected value of type \"").concat(varTypeStr, "\" which cannot be used as an input type."), varDefNode.type));
      return "continue";
    }

    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = (0,_utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__.valueFromAST)(varDefNode.defaultValue, varType);
      } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(varType)) {
        var _varTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(varType);

        onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Variable \"$".concat(varName, "\" of required type \"").concat(_varTypeStr, "\" was not provided."), varDefNode));
      }

      return "continue";
    }

    var value = inputs[varName];

    if (value === null && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(varType)) {
      var _varTypeStr2 = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(varType);

      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Variable \"$".concat(varName, "\" of non-null type \"").concat(_varTypeStr2, "\" must not be null."), varDefNode));
      return "continue";
    }

    coercedValues[varName] = (0,_utilities_coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_6__.coerceInputValue)(value, varType, function (path, invalidValue, error) {
      var prefix = "Variable \"$".concat(varName, "\" got invalid value ") + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(invalidValue);

      if (path.length > 0) {
        prefix += " at \"".concat(varName).concat((0,_jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(path), "\"");
      }

      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(prefix + '; ' + error.message, varDefNode, undefined, undefined, undefined, error.originalError));
    });
  };

  for (var _i2 = 0; _i2 < varDefNodes.length; _i2++) {
    var _ret = _loop(_i2);

    if (_ret === "continue") continue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 *
 * @internal
 */


function getArgumentValues(def, node, variableValues) {
  var _node$arguments;

  var coercedValues = {}; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')

  var argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
  var argNodeMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(argumentNodes, function (arg) {
    return arg.name.value;
  });

  for (var _i4 = 0, _def$args2 = def.args; _i4 < _def$args2.length; _i4++) {
    var argDef = _def$args2[_i4];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];

    if (!argumentNode) {
      if (argDef.defaultValue !== undefined) {
        coercedValues[name] = argDef.defaultValue;
      } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(argType)) {
        throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(argType), "\" ") + 'was not provided.', node);
      }

      continue;
    }

    var valueNode = argumentNode.value;
    var isNull = valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_9__.Kind.NULL;

    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_9__.Kind.VARIABLE) {
      var variableName = valueNode.name.value;

      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(argType)) {
          throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Argument \"".concat(name, "\" of required type \"").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(argType), "\" ") + "was provided the variable \"$".concat(variableName, "\" which was not provided a runtime value."), valueNode);
        }

        continue;
      }

      isNull = variableValues[variableName] == null;
    }

    if (isNull && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(argType)) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Argument \"".concat(name, "\" of non-null type \"").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(argType), "\" ") + 'must not be null.', valueNode);
    }

    var coercedValue = (0,_utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__.valueFromAST)(valueNode, argType, variableValues);

    if (coercedValue === undefined) {
      // Note: ValuesOfCorrectTypeRule validation should catch this before
      // execution. This is a runtime check to ensure execution does not
      // continue with an invalid argument value.
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Argument \"".concat(name, "\" has invalid value ").concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__.print)(valueNode), "."), valueNode);
    }

    coercedValues[name] = coercedValue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./node_modules/graphql/graphql.mjs":
/*!******************************************!*\
  !*** ./node_modules/graphql/graphql.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphql": function() { return /* binding */ graphql; },
/* harmony export */   "graphqlSync": function() { return /* binding */ graphqlSync; }
/* harmony export */ });
/* harmony import */ var _jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsutils/isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");





/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * contextValue:
 *    The context value is provided as an argument to resolver functions after
 *    field arguments. It is used to pass shared information useful at any point
 *    during executing this query, for example the currently logged in user and
 *    connections to databases or other services.
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 * typeResolver:
 *    A type resolver function to use when none is provided by the schema.
 *    If not provided, the default type resolver is used (which looks for a
 *    `__typename` field or alternatively calls the `isTypeOf` method).
 */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
      schema: argsOrSchema,
      source: source,
      rootValue: rootValue,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver,
      typeResolver: typeResolver
    }));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
    schema: argsOrSchema,
    source: source,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  }); // Assert that the execution was synchronous.

  if ((0,_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(args) {
  var schema = args.schema,
      source = args.source,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // Validate Schema

  var schemaValidationErrors = (0,_type_validate_mjs__WEBPACK_IMPORTED_MODULE_1__.validateSchema)(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = (0,_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__.parse)(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = (0,_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__.validate)(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_4__.execute)({
    schema: schema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}


/***/ }),

/***/ "./node_modules/graphql/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/graphql/index.mjs ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* reexport safe */ _version_mjs__WEBPACK_IMPORTED_MODULE_0__.version; },
/* harmony export */   "versionInfo": function() { return /* reexport safe */ _version_mjs__WEBPACK_IMPORTED_MODULE_0__.versionInfo; },
/* harmony export */   "graphql": function() { return /* reexport safe */ _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__.graphql; },
/* harmony export */   "graphqlSync": function() { return /* reexport safe */ _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__.graphqlSync; },
/* harmony export */   "GraphQLSchema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLSchema; },
/* harmony export */   "GraphQLDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLDirective; },
/* harmony export */   "GraphQLScalarType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLScalarType; },
/* harmony export */   "GraphQLObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLObjectType; },
/* harmony export */   "GraphQLInterfaceType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLInterfaceType; },
/* harmony export */   "GraphQLUnionType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLUnionType; },
/* harmony export */   "GraphQLEnumType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLEnumType; },
/* harmony export */   "GraphQLInputObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLInputObjectType; },
/* harmony export */   "GraphQLList": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLList; },
/* harmony export */   "GraphQLNonNull": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLNonNull; },
/* harmony export */   "specifiedScalarTypes": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.specifiedScalarTypes; },
/* harmony export */   "GraphQLInt": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLInt; },
/* harmony export */   "GraphQLFloat": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLFloat; },
/* harmony export */   "GraphQLString": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLString; },
/* harmony export */   "GraphQLBoolean": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLBoolean; },
/* harmony export */   "GraphQLID": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLID; },
/* harmony export */   "specifiedDirectives": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.specifiedDirectives; },
/* harmony export */   "GraphQLIncludeDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLIncludeDirective; },
/* harmony export */   "GraphQLSkipDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLSkipDirective; },
/* harmony export */   "GraphQLDeprecatedDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLDeprecatedDirective; },
/* harmony export */   "GraphQLSpecifiedByDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLSpecifiedByDirective; },
/* harmony export */   "TypeKind": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.TypeKind; },
/* harmony export */   "DEFAULT_DEPRECATION_REASON": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_DEPRECATION_REASON; },
/* harmony export */   "introspectionTypes": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.introspectionTypes; },
/* harmony export */   "__Schema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__Schema; },
/* harmony export */   "__Directive": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__Directive; },
/* harmony export */   "__DirectiveLocation": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__DirectiveLocation; },
/* harmony export */   "__Type": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__Type; },
/* harmony export */   "__Field": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__Field; },
/* harmony export */   "__InputValue": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__InputValue; },
/* harmony export */   "__EnumValue": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__EnumValue; },
/* harmony export */   "__TypeKind": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.__TypeKind; },
/* harmony export */   "SchemaMetaFieldDef": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.SchemaMetaFieldDef; },
/* harmony export */   "TypeMetaFieldDef": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.TypeMetaFieldDef; },
/* harmony export */   "TypeNameMetaFieldDef": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.TypeNameMetaFieldDef; },
/* harmony export */   "isSchema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isSchema; },
/* harmony export */   "isDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isDirective; },
/* harmony export */   "isType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isType; },
/* harmony export */   "isScalarType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isScalarType; },
/* harmony export */   "isObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType; },
/* harmony export */   "isInterfaceType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType; },
/* harmony export */   "isUnionType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isUnionType; },
/* harmony export */   "isEnumType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isEnumType; },
/* harmony export */   "isInputObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputObjectType; },
/* harmony export */   "isListType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isListType; },
/* harmony export */   "isNonNullType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType; },
/* harmony export */   "isInputType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputType; },
/* harmony export */   "isOutputType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isOutputType; },
/* harmony export */   "isLeafType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isLeafType; },
/* harmony export */   "isCompositeType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isCompositeType; },
/* harmony export */   "isAbstractType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isAbstractType; },
/* harmony export */   "isWrappingType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isWrappingType; },
/* harmony export */   "isNullableType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isNullableType; },
/* harmony export */   "isNamedType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isNamedType; },
/* harmony export */   "isRequiredArgument": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredArgument; },
/* harmony export */   "isRequiredInputField": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredInputField; },
/* harmony export */   "isSpecifiedScalarType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isSpecifiedScalarType; },
/* harmony export */   "isIntrospectionType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isIntrospectionType; },
/* harmony export */   "isSpecifiedDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.isSpecifiedDirective; },
/* harmony export */   "assertSchema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertSchema; },
/* harmony export */   "assertDirective": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertDirective; },
/* harmony export */   "assertType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertType; },
/* harmony export */   "assertScalarType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertScalarType; },
/* harmony export */   "assertObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertObjectType; },
/* harmony export */   "assertInterfaceType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertInterfaceType; },
/* harmony export */   "assertUnionType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertUnionType; },
/* harmony export */   "assertEnumType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertEnumType; },
/* harmony export */   "assertInputObjectType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertInputObjectType; },
/* harmony export */   "assertListType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertListType; },
/* harmony export */   "assertNonNullType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertNonNullType; },
/* harmony export */   "assertInputType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertInputType; },
/* harmony export */   "assertOutputType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertOutputType; },
/* harmony export */   "assertLeafType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertLeafType; },
/* harmony export */   "assertCompositeType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertCompositeType; },
/* harmony export */   "assertAbstractType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertAbstractType; },
/* harmony export */   "assertWrappingType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertWrappingType; },
/* harmony export */   "assertNullableType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertNullableType; },
/* harmony export */   "assertNamedType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertNamedType; },
/* harmony export */   "getNullableType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.getNullableType; },
/* harmony export */   "getNamedType": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.getNamedType; },
/* harmony export */   "validateSchema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.validateSchema; },
/* harmony export */   "assertValidSchema": function() { return /* reexport safe */ _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__.assertValidSchema; },
/* harmony export */   "Token": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Token; },
/* harmony export */   "Source": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Source; },
/* harmony export */   "Location": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Location; },
/* harmony export */   "getLocation": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.getLocation; },
/* harmony export */   "printLocation": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.printLocation; },
/* harmony export */   "printSourceLocation": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.printSourceLocation; },
/* harmony export */   "Lexer": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Lexer; },
/* harmony export */   "TokenKind": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.TokenKind; },
/* harmony export */   "parse": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.parse; },
/* harmony export */   "parseValue": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.parseValue; },
/* harmony export */   "parseType": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.parseType; },
/* harmony export */   "print": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.print; },
/* harmony export */   "visit": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.visit; },
/* harmony export */   "visitInParallel": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.visitInParallel; },
/* harmony export */   "getVisitFn": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.getVisitFn; },
/* harmony export */   "BREAK": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.BREAK; },
/* harmony export */   "Kind": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind; },
/* harmony export */   "DirectiveLocation": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation; },
/* harmony export */   "isDefinitionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isDefinitionNode; },
/* harmony export */   "isExecutableDefinitionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isExecutableDefinitionNode; },
/* harmony export */   "isSelectionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isSelectionNode; },
/* harmony export */   "isValueNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isValueNode; },
/* harmony export */   "isTypeNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isTypeNode; },
/* harmony export */   "isTypeSystemDefinitionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isTypeSystemDefinitionNode; },
/* harmony export */   "isTypeDefinitionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isTypeDefinitionNode; },
/* harmony export */   "isTypeSystemExtensionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isTypeSystemExtensionNode; },
/* harmony export */   "isTypeExtensionNode": function() { return /* reexport safe */ _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__.isTypeExtensionNode; },
/* harmony export */   "execute": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.execute; },
/* harmony export */   "executeSync": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.executeSync; },
/* harmony export */   "defaultFieldResolver": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultFieldResolver; },
/* harmony export */   "defaultTypeResolver": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultTypeResolver; },
/* harmony export */   "responsePathAsArray": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.responsePathAsArray; },
/* harmony export */   "getDirectiveValues": function() { return /* reexport safe */ _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__.getDirectiveValues; },
/* harmony export */   "subscribe": function() { return /* reexport safe */ _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__.subscribe; },
/* harmony export */   "createSourceEventStream": function() { return /* reexport safe */ _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__.createSourceEventStream; },
/* harmony export */   "validate": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.validate; },
/* harmony export */   "ValidationContext": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.ValidationContext; },
/* harmony export */   "specifiedRules": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.specifiedRules; },
/* harmony export */   "ExecutableDefinitionsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.ExecutableDefinitionsRule; },
/* harmony export */   "FieldsOnCorrectTypeRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.FieldsOnCorrectTypeRule; },
/* harmony export */   "FragmentsOnCompositeTypesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.FragmentsOnCompositeTypesRule; },
/* harmony export */   "KnownArgumentNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.KnownArgumentNamesRule; },
/* harmony export */   "KnownDirectivesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.KnownDirectivesRule; },
/* harmony export */   "KnownFragmentNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.KnownFragmentNamesRule; },
/* harmony export */   "KnownTypeNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.KnownTypeNamesRule; },
/* harmony export */   "LoneAnonymousOperationRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.LoneAnonymousOperationRule; },
/* harmony export */   "NoFragmentCyclesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoFragmentCyclesRule; },
/* harmony export */   "NoUndefinedVariablesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoUndefinedVariablesRule; },
/* harmony export */   "NoUnusedFragmentsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoUnusedFragmentsRule; },
/* harmony export */   "NoUnusedVariablesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoUnusedVariablesRule; },
/* harmony export */   "OverlappingFieldsCanBeMergedRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.OverlappingFieldsCanBeMergedRule; },
/* harmony export */   "PossibleFragmentSpreadsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.PossibleFragmentSpreadsRule; },
/* harmony export */   "ProvidedRequiredArgumentsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.ProvidedRequiredArgumentsRule; },
/* harmony export */   "ScalarLeafsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.ScalarLeafsRule; },
/* harmony export */   "SingleFieldSubscriptionsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.SingleFieldSubscriptionsRule; },
/* harmony export */   "UniqueArgumentNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueArgumentNamesRule; },
/* harmony export */   "UniqueDirectivesPerLocationRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueDirectivesPerLocationRule; },
/* harmony export */   "UniqueFragmentNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueFragmentNamesRule; },
/* harmony export */   "UniqueInputFieldNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueInputFieldNamesRule; },
/* harmony export */   "UniqueOperationNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueOperationNamesRule; },
/* harmony export */   "UniqueVariableNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueVariableNamesRule; },
/* harmony export */   "ValuesOfCorrectTypeRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.ValuesOfCorrectTypeRule; },
/* harmony export */   "VariablesAreInputTypesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.VariablesAreInputTypesRule; },
/* harmony export */   "VariablesInAllowedPositionRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.VariablesInAllowedPositionRule; },
/* harmony export */   "LoneSchemaDefinitionRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.LoneSchemaDefinitionRule; },
/* harmony export */   "UniqueOperationTypesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueOperationTypesRule; },
/* harmony export */   "UniqueTypeNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueTypeNamesRule; },
/* harmony export */   "UniqueEnumValueNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueEnumValueNamesRule; },
/* harmony export */   "UniqueFieldDefinitionNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueFieldDefinitionNamesRule; },
/* harmony export */   "UniqueDirectiveNamesRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.UniqueDirectiveNamesRule; },
/* harmony export */   "PossibleTypeExtensionsRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.PossibleTypeExtensionsRule; },
/* harmony export */   "NoDeprecatedCustomRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoDeprecatedCustomRule; },
/* harmony export */   "NoSchemaIntrospectionCustomRule": function() { return /* reexport safe */ _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__.NoSchemaIntrospectionCustomRule; },
/* harmony export */   "GraphQLError": function() { return /* reexport safe */ _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__.GraphQLError; },
/* harmony export */   "syntaxError": function() { return /* reexport safe */ _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__.syntaxError; },
/* harmony export */   "locatedError": function() { return /* reexport safe */ _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__.locatedError; },
/* harmony export */   "printError": function() { return /* reexport safe */ _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__.printError; },
/* harmony export */   "formatError": function() { return /* reexport safe */ _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__.formatError; },
/* harmony export */   "getIntrospectionQuery": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.getIntrospectionQuery; },
/* harmony export */   "getOperationAST": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.getOperationAST; },
/* harmony export */   "getOperationRootType": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.getOperationRootType; },
/* harmony export */   "introspectionFromSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.introspectionFromSchema; },
/* harmony export */   "buildClientSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.buildClientSchema; },
/* harmony export */   "buildASTSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.buildASTSchema; },
/* harmony export */   "buildSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.buildSchema; },
/* harmony export */   "getDescription": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.getDescription; },
/* harmony export */   "extendSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.extendSchema; },
/* harmony export */   "lexicographicSortSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.lexicographicSortSchema; },
/* harmony export */   "printSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.printSchema; },
/* harmony export */   "printType": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.printType; },
/* harmony export */   "printIntrospectionSchema": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.printIntrospectionSchema; },
/* harmony export */   "typeFromAST": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.typeFromAST; },
/* harmony export */   "valueFromAST": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.valueFromAST; },
/* harmony export */   "valueFromASTUntyped": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.valueFromASTUntyped; },
/* harmony export */   "astFromValue": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.astFromValue; },
/* harmony export */   "TypeInfo": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.TypeInfo; },
/* harmony export */   "visitWithTypeInfo": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.visitWithTypeInfo; },
/* harmony export */   "coerceInputValue": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.coerceInputValue; },
/* harmony export */   "concatAST": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.concatAST; },
/* harmony export */   "separateOperations": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.separateOperations; },
/* harmony export */   "stripIgnoredCharacters": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.stripIgnoredCharacters; },
/* harmony export */   "isEqualType": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.isEqualType; },
/* harmony export */   "isTypeSubTypeOf": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.isTypeSubTypeOf; },
/* harmony export */   "doTypesOverlap": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.doTypesOverlap; },
/* harmony export */   "assertValidName": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.assertValidName; },
/* harmony export */   "isValidNameError": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.isValidNameError; },
/* harmony export */   "BreakingChangeType": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.BreakingChangeType; },
/* harmony export */   "DangerousChangeType": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.DangerousChangeType; },
/* harmony export */   "findBreakingChanges": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.findBreakingChanges; },
/* harmony export */   "findDangerousChanges": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.findDangerousChanges; },
/* harmony export */   "findDeprecatedUsages": function() { return /* reexport safe */ _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__.findDeprecatedUsages; }
/* harmony export */ });
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.mjs */ "./node_modules/graphql/version.mjs");
/* harmony import */ var _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql.mjs */ "./node_modules/graphql/graphql.mjs");
/* harmony import */ var _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type/index.mjs */ "./node_modules/graphql/type/index.mjs");
/* harmony import */ var _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/index.mjs */ "./node_modules/graphql/language/index.mjs");
/* harmony import */ var _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/index.mjs */ "./node_modules/graphql/execution/index.mjs");
/* harmony import */ var _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription/index.mjs */ "./node_modules/graphql/subscription/index.mjs");
/* harmony import */ var _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation/index.mjs */ "./node_modules/graphql/validation/index.mjs");
/* harmony import */ var _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/index.mjs */ "./node_modules/graphql/error/index.mjs");
/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/index.mjs */ "./node_modules/graphql/utilities/index.mjs");
/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */
// The GraphQL.js version info.
 // The primary entry point into fulfilling a GraphQL request.

 // Create and operate on GraphQL type definitions and schema.


// Parse and operate on GraphQL language source files.

// Execute GraphQL queries.


// Validate GraphQL documents.

// Create, format, and print GraphQL errors.

// Utilities for operating on GraphQL type schema and parsed sources.



/***/ }),

/***/ "./node_modules/graphql/jsutils/Path.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/jsutils/Path.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPath": function() { return /* binding */ addPath; },
/* harmony export */   "pathToArray": function() { return /* binding */ pathToArray; }
/* harmony export */ });
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
function addPath(prev, key, typename) {
  return {
    prev: prev,
    key: key,
    typename: typename
  };
}
/**
 * Given a Path, return an Array of the path keys.
 */

function pathToArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/didYouMean.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/didYouMean.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ didYouMean; }
/* harmony export */ });
var MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */

// eslint-disable-next-line no-redeclare
function didYouMean(firstArg, secondArg) {
  var _ref = typeof firstArg === 'string' ? [firstArg, secondArg] : [undefined, firstArg],
      subMessage = _ref[0],
      suggestionsArg = _ref[1];

  var message = ' Did you mean ';

  if (subMessage) {
    message += subMessage + ' ';
  }

  var suggestions = suggestionsArg.map(function (x) {
    return "\"".concat(x, "\"");
  });

  switch (suggestions.length) {
    case 0:
      return '';

    case 1:
      return message + suggestions[0] + '?';

    case 2:
      return message + suggestions[0] + ' or ' + suggestions[1] + '?';
  }

  var selected = suggestions.slice(0, MAX_SUGGESTIONS);
  var lastItem = selected.pop();
  return message + selected.join(', ') + ', or ' + lastItem + '?';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/identityFunc.mjs ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ identityFunc; }
/* harmony export */ });
/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isAsyncIterable.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/jsutils/isAsyncIterable.mjs ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isAsyncIterable; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 */

// eslint-disable-next-line no-redeclare
function isAsyncIterable(maybeAsyncIterable) {
  return typeof (maybeAsyncIterable === null || maybeAsyncIterable === void 0 ? void 0 : maybeAsyncIterable[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__.SYMBOL_ASYNC_ITERATOR]) === 'function';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isPromise.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isPromise; }
/* harmony export */ });
/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === 'function';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyMap.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keyMap; }
/* harmony export */ });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyValMap.mjs ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ keyValMap; }
/* harmony export */ });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/mapValue.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mapValue; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");


/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(map); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var _key = _ref2[0];
    var _value = _ref2[1];
    result[_key] = fn(_value, _key);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/memoize3.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ memoize3; }
/* harmony export */ });
/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;
  return function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  };
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/naturalCompare.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/naturalCompare.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ naturalCompare; }
/* harmony export */ });
/**
 * Returns a number indicating whether a reference string comes before, or after,
 * or is the same as the given string in natural sort order.
 *
 * See: https://en.wikipedia.org/wiki/Natural_sort_order
 *
 */
function naturalCompare(aStr, bStr) {
  var aIdx = 0;
  var bIdx = 0;

  while (aIdx < aStr.length && bIdx < bStr.length) {
    var aChar = aStr.charCodeAt(aIdx);
    var bChar = bStr.charCodeAt(bIdx);

    if (isDigit(aChar) && isDigit(bChar)) {
      var aNum = 0;

      do {
        ++aIdx;
        aNum = aNum * 10 + aChar - DIGIT_0;
        aChar = aStr.charCodeAt(aIdx);
      } while (isDigit(aChar) && aNum > 0);

      var bNum = 0;

      do {
        ++bIdx;
        bNum = bNum * 10 + bChar - DIGIT_0;
        bChar = bStr.charCodeAt(bIdx);
      } while (isDigit(bChar) && bNum > 0);

      if (aNum < bNum) {
        return -1;
      }

      if (aNum > bNum) {
        return 1;
      }
    } else {
      if (aChar < bChar) {
        return -1;
      }

      if (aChar > bChar) {
        return 1;
      }

      ++aIdx;
      ++bIdx;
    }
  }

  return aStr.length - bStr.length;
}
var DIGIT_0 = 48;
var DIGIT_9 = 57;

function isDigit(code) {
  return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/printPathArray.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/printPathArray.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ printPathArray; }
/* harmony export */ });
/**
 * Build a string describing the path.
 */
function printPathArray(path) {
  return path.map(function (key) {
    return typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key;
  }).join('');
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseForObject.mjs ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ promiseForObject; }
/* harmony export */ });
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseReduce.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ promiseReduce; }
/* harmony export */ });
/* harmony import */ var _isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");

/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */

function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return (0,_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/safeArrayFrom.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/safeArrayFrom.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ safeArrayFrom; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Safer version of `Array.from` that return `null` if value isn't convertible to array.
 * Also protects against Array-like objects without items.
 *
 * @example
 *
 * safeArrayFrom([ 1, 2, 3 ]) // [1, 2, 3]
 * safeArrayFrom('ABC') // null
 * safeArrayFrom({ length: 1 }) // null
 * safeArrayFrom({ length: 1, 0: 'Alpha' }) // ['Alpha']
 * safeArrayFrom({ key: 'value' }) // null
 * safeArrayFrom(new Map()) // []
 *
 */

function safeArrayFrom(collection) {
  var mapFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (item) {
    return item;
  };

  if (collection == null || _typeof(collection) !== 'object') {
    return null;
  }

  if (Array.isArray(collection)) {
    return collection.map(mapFn);
  } // Is Iterable?


  var iteratorMethod = collection[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__.SYMBOL_ITERATOR];

  if (typeof iteratorMethod === 'function') {
    // $FlowFixMe[incompatible-use]
    var iterator = iteratorMethod.call(collection);
    var result = [];
    var step;

    for (var i = 0; !(step = iterator.next()).done; ++i) {
      result.push(mapFn(step.value, i));
    }

    return result;
  } // Is Array like?


  var length = collection.length;

  if (typeof length === 'number' && length >= 0 && length % 1 === 0) {
    var _result = [];

    for (var _i = 0; _i < length; ++_i) {
      if (!Object.prototype.hasOwnProperty.call(collection, _i)) {
        return null;
      }

      _result.push(mapFn(collection[String(_i)], _i));
    }

    return _result;
  }

  return null;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/suggestionList.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ suggestionList; }
/* harmony export */ });
/* harmony import */ var _naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./naturalCompare.mjs */ "./node_modules/graphql/jsutils/naturalCompare.mjs");

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */

function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var lexicalDistance = new LexicalDistance(input);
  var threshold = Math.floor(input.length * 0.4) + 1;

  for (var _i2 = 0; _i2 < options.length; _i2++) {
    var option = options[_i2];
    var distance = lexicalDistance.measure(option, threshold);

    if (distance !== undefined) {
      optionsByDistance[option] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    var distanceDiff = optionsByDistance[a] - optionsByDistance[b];
    return distanceDiff !== 0 ? distanceDiff : (0,_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(a, b);
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 */

var LexicalDistance = /*#__PURE__*/function () {
  function LexicalDistance(input) {
    this._input = input;
    this._inputLowerCase = input.toLowerCase();
    this._inputArray = stringToArray(this._inputLowerCase);
    this._rows = [new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0)];
  }

  var _proto = LexicalDistance.prototype;

  _proto.measure = function measure(option, threshold) {
    if (this._input === option) {
      return 0;
    }

    var optionLowerCase = option.toLowerCase(); // Any case change counts as a single edit

    if (this._inputLowerCase === optionLowerCase) {
      return 1;
    }

    var a = stringToArray(optionLowerCase);
    var b = this._inputArray;

    if (a.length < b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var aLength = a.length;
    var bLength = b.length;

    if (aLength - bLength > threshold) {
      return undefined;
    }

    var rows = this._rows;

    for (var j = 0; j <= bLength; j++) {
      rows[0][j] = j;
    }

    for (var i = 1; i <= aLength; i++) {
      var upRow = rows[(i - 1) % 3];
      var currentRow = rows[i % 3];
      var smallestCell = currentRow[0] = i;

      for (var _j = 1; _j <= bLength; _j++) {
        var cost = a[i - 1] === b[_j - 1] ? 0 : 1;
        var currentCell = Math.min(upRow[_j] + 1, // delete
        currentRow[_j - 1] + 1, // insert
        upRow[_j - 1] + cost // substitute
        );

        if (i > 1 && _j > 1 && a[i - 1] === b[_j - 2] && a[i - 2] === b[_j - 1]) {
          // transposition
          var doubleDiagonalCell = rows[(i - 2) % 3][_j - 2];
          currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
        }

        if (currentCell < smallestCell) {
          smallestCell = currentCell;
        }

        currentRow[_j] = currentCell;
      } // Early exit, since distance can't go smaller than smallest element of the previous row.


      if (smallestCell > threshold) {
        return undefined;
      }
    }

    var distance = rows[aLength % 3][bLength];
    return distance <= threshold ? distance : undefined;
  };

  return LexicalDistance;
}();

function stringToArray(str) {
  var strLength = str.length;
  var array = new Array(strLength);

  for (var i = 0; i < strLength; ++i) {
    array[i] = str.charCodeAt(i);
  }

  return array;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/toObjMap.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/toObjMap.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toObjMap; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");

function toObjMap(obj) {
  /* eslint-enable no-redeclare */
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  var map = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(obj); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var key = _ref2[0];
    var value = _ref2[1];
    map[key] = value;
  }

  return map;
}


/***/ }),

/***/ "./node_modules/graphql/language/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/index.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Source": function() { return /* reexport safe */ _source_mjs__WEBPACK_IMPORTED_MODULE_0__.Source; },
/* harmony export */   "getLocation": function() { return /* reexport safe */ _location_mjs__WEBPACK_IMPORTED_MODULE_1__.getLocation; },
/* harmony export */   "printLocation": function() { return /* reexport safe */ _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printLocation; },
/* harmony export */   "printSourceLocation": function() { return /* reexport safe */ _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__.printSourceLocation; },
/* harmony export */   "Kind": function() { return /* reexport safe */ _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__.Kind; },
/* harmony export */   "TokenKind": function() { return /* reexport safe */ _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_4__.TokenKind; },
/* harmony export */   "Lexer": function() { return /* reexport safe */ _lexer_mjs__WEBPACK_IMPORTED_MODULE_5__.Lexer; },
/* harmony export */   "parse": function() { return /* reexport safe */ _parser_mjs__WEBPACK_IMPORTED_MODULE_6__.parse; },
/* harmony export */   "parseValue": function() { return /* reexport safe */ _parser_mjs__WEBPACK_IMPORTED_MODULE_6__.parseValue; },
/* harmony export */   "parseType": function() { return /* reexport safe */ _parser_mjs__WEBPACK_IMPORTED_MODULE_6__.parseType; },
/* harmony export */   "print": function() { return /* reexport safe */ _printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print; },
/* harmony export */   "visit": function() { return /* reexport safe */ _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__.visit; },
/* harmony export */   "visitInParallel": function() { return /* reexport safe */ _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__.visitInParallel; },
/* harmony export */   "getVisitFn": function() { return /* reexport safe */ _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__.getVisitFn; },
/* harmony export */   "BREAK": function() { return /* reexport safe */ _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__.BREAK; },
/* harmony export */   "Location": function() { return /* reexport safe */ _ast_mjs__WEBPACK_IMPORTED_MODULE_9__.Location; },
/* harmony export */   "Token": function() { return /* reexport safe */ _ast_mjs__WEBPACK_IMPORTED_MODULE_9__.Token; },
/* harmony export */   "isDefinitionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isDefinitionNode; },
/* harmony export */   "isExecutableDefinitionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isExecutableDefinitionNode; },
/* harmony export */   "isSelectionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isSelectionNode; },
/* harmony export */   "isValueNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isValueNode; },
/* harmony export */   "isTypeNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isTypeNode; },
/* harmony export */   "isTypeSystemDefinitionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isTypeSystemDefinitionNode; },
/* harmony export */   "isTypeDefinitionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isTypeDefinitionNode; },
/* harmony export */   "isTypeSystemExtensionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isTypeSystemExtensionNode; },
/* harmony export */   "isTypeExtensionNode": function() { return /* reexport safe */ _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__.isTypeExtensionNode; },
/* harmony export */   "DirectiveLocation": function() { return /* reexport safe */ _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_11__.DirectiveLocation; }
/* harmony export */ });
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony import */ var _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _parser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _printer_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _ast_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");














/***/ }),

/***/ "./node_modules/graphql/language/predicates.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/predicates.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDefinitionNode": function() { return /* binding */ isDefinitionNode; },
/* harmony export */   "isExecutableDefinitionNode": function() { return /* binding */ isExecutableDefinitionNode; },
/* harmony export */   "isSelectionNode": function() { return /* binding */ isSelectionNode; },
/* harmony export */   "isValueNode": function() { return /* binding */ isValueNode; },
/* harmony export */   "isTypeNode": function() { return /* binding */ isTypeNode; },
/* harmony export */   "isTypeSystemDefinitionNode": function() { return /* binding */ isTypeSystemDefinitionNode; },
/* harmony export */   "isTypeDefinitionNode": function() { return /* binding */ isTypeDefinitionNode; },
/* harmony export */   "isTypeSystemExtensionNode": function() { return /* binding */ isTypeSystemExtensionNode; },
/* harmony export */   "isTypeExtensionNode": function() { return /* binding */ isTypeExtensionNode; }
/* harmony export */ });
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");

function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FIELD || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_SPREAD || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INT || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FLOAT || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.STRING || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.BOOLEAN || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT;
}
function isTypeNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NAMED_TYPE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST_TYPE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCALAR_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INTERFACE_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.UNION_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.SCALAR_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INTERFACE_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.UNION_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INPUT_OBJECT_TYPE_EXTENSION;
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/arrayFrom.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/polyfills/arrayFrom.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");


/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound]
var arrayFrom = Array.from || function (obj, mapFn, thisArg) {
  if (obj == null) {
    throw new TypeError('Array.from requires an array-like object - not null or undefined');
  } // Is Iterable?


  var iteratorMethod = obj[_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__.SYMBOL_ITERATOR];

  if (typeof iteratorMethod === 'function') {
    var iterator = iteratorMethod.call(obj);
    var result = [];
    var step;

    for (var i = 0; !(step = iterator.next()).done; ++i) {
      result.push(mapFn.call(thisArg, step.value, i)); // Infinite Iterators could cause forEach to run forever.
      // After a very large number of iterations, produce an error.
      // istanbul ignore if (Too big to actually test)

      if (i > 9999999) {
        throw new TypeError('Near-infinite iteration.');
      }
    }

    return result;
  } // Is Array like?


  var length = obj.length;

  if (typeof length === 'number' && length >= 0 && length % 1 === 0) {
    var _result = [];

    for (var _i = 0; _i < length; ++_i) {
      if (Object.prototype.hasOwnProperty.call(obj, _i)) {
        _result.push(mapFn.call(thisArg, obj[_i], _i));
      }
    }

    return _result;
  }

  return [];
};

/* harmony default export */ __webpack_exports__["default"] = (arrayFrom);


/***/ }),

/***/ "./node_modules/graphql/polyfills/find.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/polyfills/find.mjs ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound]
var find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var value = list[_i2];

    if (predicate(value)) {
      return value;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/polyfills/isFinite.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound] workaround for: https://github.com/facebook/flow/issues/4441
var isFinitePolyfill = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

/* harmony default export */ __webpack_exports__["default"] = (isFinitePolyfill);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/polyfills/isInteger.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound] workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/* harmony default export */ __webpack_exports__["default"] = (isInteger);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectEntries.mjs ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound] workaround for: https://github.com/facebook/flow/issues/4441
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectEntries);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectValues.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe[name-already-bound] workaround for: https://github.com/facebook/flow/issues/4441
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectValues);


/***/ }),

/***/ "./node_modules/graphql/subscription/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/subscription/index.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribe": function() { return /* reexport safe */ _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe; },
/* harmony export */   "createSourceEventStream": function() { return /* reexport safe */ _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__.createSourceEventStream; }
/* harmony export */ });
/* harmony import */ var _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.mjs */ "./node_modules/graphql/subscription/subscribe.mjs");



/***/ }),

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/subscription/mapAsyncIterator.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mapAsyncIterator; }
/* harmony export */ });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  // $FlowFixMe[prop-missing]
  var iteratorMethod = iterable[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__.SYMBOL_ASYNC_ITERATOR];
  var iterator = iteratorMethod.call(iterable);
  var $return;
  var abruptClose;

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__.SYMBOL_ASYNC_ITERATOR, function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}


/***/ }),

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/subscription/subscribe.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subscribe": function() { return /* binding */ subscribe; },
/* harmony export */   "createSourceEventStream": function() { return /* binding */ createSourceEventStream; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isAsyncIterable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/isAsyncIterable.mjs */ "./node_modules/graphql/jsutils/isAsyncIterable.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _execution_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../execution/values.mjs */ "./node_modules/graphql/execution/values.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _mapAsyncIterator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapAsyncIterator.mjs */ "./node_modules/graphql/subscription/mapAsyncIterator.mjs");









function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    subscribeFieldResolver: subscribeFieldResolver
  });
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */

function reportGraphQLError(error) {
  if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      subscribeFieldResolver = args.subscribeFieldResolver;
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.execute)({
      schema: schema,
      document: document,
      rootValue: payload,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver
    });
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      (0,_jsutils_isAsyncIterable_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(resultOrStream) ? (0,_mapAsyncIterator_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  });
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.assertValidExecutionArguments)(schema, document, variableValues);
  return new Promise(function (resolve) {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.buildExecutionContext)(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver);
    resolve( // Return early errors if execution context failed.
    Array.isArray(exeContext) ? {
      errors: exeContext
    } : executeSubscription(exeContext));
  }).catch(reportGraphQLError);
}

function executeSubscription(exeContext) {
  var schema = exeContext.schema,
      operation = exeContext.operation,
      variableValues = exeContext.variableValues,
      rootValue = exeContext.rootValue;
  var type = (0,_utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_4__.getOperationRootType)(schema, operation);
  var fields = (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.collectFields)(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var responseNames = Object.keys(fields);
  var responseName = responseNames[0];
  var fieldNodes = fields[responseName];
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.getFieldDef)(schema, type, fieldName);

  if (!fieldDef) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
  }

  var path = (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_5__.addPath)(undefined, responseName, type.name);
  var info = (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_1__.buildResolveInfo)(exeContext, fieldDef, fieldNodes, type, path); // Coerce to Promise for easier error handling and consistent return type.

  return new Promise(function (resolveResult) {
    var _fieldDef$subscribe;

    // Implements the "ResolveFieldEventStream" algorithm from GraphQL specification.
    // It differs from "ResolveFieldValue" due to providing a different `resolveFn`.
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    var args = (0,_execution_values_mjs__WEBPACK_IMPORTED_MODULE_6__.getArgumentValues)(fieldDef, fieldNodes[0], variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var contextValue = exeContext.contextValue; // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.

    var resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.fieldResolver;
    resolveResult(resolveFn(rootValue, args, contextValue, info));
  }).then(function (eventStream) {
    if (eventStream instanceof Error) {
      throw (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_7__.locatedError)(eventStream, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_5__.pathToArray)(path));
    } // Assert field returned an event stream, otherwise yield an error.


    if (!(0,_jsutils_isAsyncIterable_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(eventStream)) {
      throw new Error('Subscription field must return Async Iterable. ' + "Received: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(eventStream), "."));
    }

    return eventStream;
  }, function (error) {
    throw (0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_7__.locatedError)(error, fieldNodes, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_5__.pathToArray)(path));
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/definition.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/definition.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isType": function() { return /* binding */ isType; },
/* harmony export */   "assertType": function() { return /* binding */ assertType; },
/* harmony export */   "isScalarType": function() { return /* binding */ isScalarType; },
/* harmony export */   "assertScalarType": function() { return /* binding */ assertScalarType; },
/* harmony export */   "isObjectType": function() { return /* binding */ isObjectType; },
/* harmony export */   "assertObjectType": function() { return /* binding */ assertObjectType; },
/* harmony export */   "isInterfaceType": function() { return /* binding */ isInterfaceType; },
/* harmony export */   "assertInterfaceType": function() { return /* binding */ assertInterfaceType; },
/* harmony export */   "isUnionType": function() { return /* binding */ isUnionType; },
/* harmony export */   "assertUnionType": function() { return /* binding */ assertUnionType; },
/* harmony export */   "isEnumType": function() { return /* binding */ isEnumType; },
/* harmony export */   "assertEnumType": function() { return /* binding */ assertEnumType; },
/* harmony export */   "isInputObjectType": function() { return /* binding */ isInputObjectType; },
/* harmony export */   "assertInputObjectType": function() { return /* binding */ assertInputObjectType; },
/* harmony export */   "isListType": function() { return /* binding */ isListType; },
/* harmony export */   "assertListType": function() { return /* binding */ assertListType; },
/* harmony export */   "isNonNullType": function() { return /* binding */ isNonNullType; },
/* harmony export */   "assertNonNullType": function() { return /* binding */ assertNonNullType; },
/* harmony export */   "isInputType": function() { return /* binding */ isInputType; },
/* harmony export */   "assertInputType": function() { return /* binding */ assertInputType; },
/* harmony export */   "isOutputType": function() { return /* binding */ isOutputType; },
/* harmony export */   "assertOutputType": function() { return /* binding */ assertOutputType; },
/* harmony export */   "isLeafType": function() { return /* binding */ isLeafType; },
/* harmony export */   "assertLeafType": function() { return /* binding */ assertLeafType; },
/* harmony export */   "isCompositeType": function() { return /* binding */ isCompositeType; },
/* harmony export */   "assertCompositeType": function() { return /* binding */ assertCompositeType; },
/* harmony export */   "isAbstractType": function() { return /* binding */ isAbstractType; },
/* harmony export */   "assertAbstractType": function() { return /* binding */ assertAbstractType; },
/* harmony export */   "GraphQLList": function() { return /* binding */ GraphQLList; },
/* harmony export */   "GraphQLNonNull": function() { return /* binding */ GraphQLNonNull; },
/* harmony export */   "isWrappingType": function() { return /* binding */ isWrappingType; },
/* harmony export */   "assertWrappingType": function() { return /* binding */ assertWrappingType; },
/* harmony export */   "isNullableType": function() { return /* binding */ isNullableType; },
/* harmony export */   "assertNullableType": function() { return /* binding */ assertNullableType; },
/* harmony export */   "getNullableType": function() { return /* binding */ getNullableType; },
/* harmony export */   "isNamedType": function() { return /* binding */ isNamedType; },
/* harmony export */   "assertNamedType": function() { return /* binding */ assertNamedType; },
/* harmony export */   "getNamedType": function() { return /* binding */ getNamedType; },
/* harmony export */   "GraphQLScalarType": function() { return /* binding */ GraphQLScalarType; },
/* harmony export */   "GraphQLObjectType": function() { return /* binding */ GraphQLObjectType; },
/* harmony export */   "argsToArgsConfig": function() { return /* binding */ argsToArgsConfig; },
/* harmony export */   "isRequiredArgument": function() { return /* binding */ isRequiredArgument; },
/* harmony export */   "GraphQLInterfaceType": function() { return /* binding */ GraphQLInterfaceType; },
/* harmony export */   "GraphQLUnionType": function() { return /* binding */ GraphQLUnionType; },
/* harmony export */   "GraphQLEnumType": function() { return /* binding */ GraphQLEnumType; },
/* harmony export */   "GraphQLInputObjectType": function() { return /* binding */ GraphQLInputObjectType; },
/* harmony export */   "isRequiredInputField": function() { return /* binding */ isRequiredInputField; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/mapValue.mjs */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/identityFunc.mjs */ "./node_modules/graphql/jsutils/identityFunc.mjs");
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



















function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL type."));
  }

  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Scalar type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Interface type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Union type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Enum type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Input Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL List type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL Non-Null type."));
  }

  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL input type."));
  }

  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL output type."));
  }

  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL leaf type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL composite type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL abstract type."));
  }

  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: new GraphQLList(PersonType) },
 *         children: { type: new GraphQLList(PersonType) },
 *       })
 *     })
 *
 */
// FIXME: workaround to fix issue with Babel parser

/* ::
declare class GraphQLList<+T: GraphQLType> {
  +ofType: T;
  static <T>(ofType: T): GraphQLList<T>;
  // Note: constructors cannot be used for covariant types. Drop the "new".
  constructor(ofType: GraphQLType): void;
}
*/

function GraphQLList(ofType) {
  // istanbul ignore else (to be removed in v16.0.0)
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
};

GraphQLList.prototype.toJSON = function toJSON() {
  return this.toString();
};

Object.defineProperty(GraphQLList.prototype, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG, {
  get: function get() {
    return 'GraphQLList';
  }
}); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: new GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */
// FIXME: workaround to fix issue with Babel parser

/* ::
declare class GraphQLNonNull<+T: GraphQLNullableType> {
  +ofType: T;
  static <T>(ofType: T): GraphQLNonNull<T>;
  // Note: constructors cannot be used for covariant types. Drop the "new".
  constructor(ofType: GraphQLType): void;
}
*/

function GraphQLNonNull(ofType) {
  // istanbul ignore else (to be removed in v16.0.0)
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
};

GraphQLNonNull.prototype.toJSON = function toJSON() {
  return this.toString();
};

Object.defineProperty(GraphQLNonNull.prototype, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG, {
  get: function get() {
    return 'GraphQLNonNull';
  }
}); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL wrapping type."));
  }

  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL nullable type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), " to be a GraphQL named type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe[incompatible-use]
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType = /*#__PURE__*/function () {
  function GraphQLScalarType(config) {
    var _config$parseValue, _config$serialize, _config$parseLiteral;

    var parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_4__.default;
    this.name = config.name;
    this.description = config.description;
    this.specifiedByUrl = config.specifiedByUrl;
    this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_4__.default;
    this.parseValue = parseValue;
    this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : function (node, variables) {
      return parseValue((0,_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_5__.valueFromASTUntyped)(node, variables));
    };
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
    config.specifiedByUrl == null || typeof config.specifiedByUrl === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide \"specifiedByUrl\" as a string, ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(config.specifiedByUrl), "."));
    config.serialize == null || typeof config.serialize === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    var _this$extensionASTNod;

    return {
      name: this.name,
      description: this.description,
      specifiedByUrl: this.specifiedByUrl,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  };

  _proto.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLScalarType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLScalarType';
    }
  }]);

  return GraphQLScalarType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = /*#__PURE__*/function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(config.isTypeOf), "."));
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  _proto2.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLObjectType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLObjectType';
    }
  }]);

  return GraphQLObjectType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLObjectType);

function defineInterfaces(config) {
  var _resolveThunk;

  var interfaces = (_resolveThunk = resolveThunk(config.interfaces)) !== null && _resolveThunk !== void 0 ? _resolveThunk : [];
  Array.isArray(interfaces) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields);
  isPlainObj(fieldMap) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(fieldMap, function (fieldConfig, fieldName) {
    var _fieldConfig$args;

    isPlainObj(fieldConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object."));
    !('isDeprecated' in fieldConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(fieldConfig.resolve), "."));
    var argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
    isPlainObj(argsConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    var args = (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          argConfig = _ref[1];
      return {
        name: argName,
        description: argConfig.description,
        type: argConfig.type,
        defaultValue: argConfig.defaultValue,
        deprecationReason: argConfig.deprecationReason,
        extensions: argConfig.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(argConfig.extensions),
        astNode: argConfig.astNode
      };
    });
    return {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: args,
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      isDeprecated: fieldConfig.deprecationReason != null,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}

function isPlainObj(obj) {
  return (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(obj) && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}
/**
 * @internal
 */


function argsToArgsConfig(args) {
  return (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_11__.default)(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      deprecationReason: arg.deprecationReason,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = /*#__PURE__*/function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(config.resolveType), "."));
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto3.toConfig = function toConfig() {
    var _this$extensionASTNod2;

    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod2 = this.extensionASTNodes) !== null && _this$extensionASTNod2 !== void 0 ? _this$extensionASTNod2 : []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  _proto3.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLInterfaceType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLInterfaceType';
    }
  }]);

  return GraphQLInterfaceType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = /*#__PURE__*/function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._types = defineTypes.bind(undefined, config);
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(config.resolveType), "."));
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    var _this$extensionASTNod3;

    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod3 = this.extensionASTNodes) !== null && _this$extensionASTNod3 !== void 0 ? _this$extensionASTNod3 : []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  _proto4.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLUnionType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLUnionType';
    }
  }]);

  return GraphQLUnionType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types);
  Array.isArray(types) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
= /*#__PURE__*/function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_12__.default)(this._values, function (value) {
      return value.name;
    });
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(outputValue) {
    var enumValue = this._valueLookup.get(outputValue);

    if (enumValue === undefined) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__.GraphQLError("Enum \"".concat(this.name, "\" cannot represent value: ").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(outputValue)));
    }

    return enumValue.name;
  };

  _proto5.parseValue = function parseValue(inputValue)
  /* T */
  {
    if (typeof inputValue !== 'string') {
      var valueStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(inputValue);
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__.GraphQLError("Enum \"".concat(this.name, "\" cannot represent non-string value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr));
    }

    var enumValue = this.getValue(inputValue);

    if (enumValue == null) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__.GraphQLError("Value \"".concat(inputValue, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, inputValue));
    }

    return enumValue.value;
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_14__.Kind.ENUM) {
      var valueStr = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__.print)(valueNode);
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__.GraphQLError("Enum \"".concat(this.name, "\" cannot represent non-enum value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr), valueNode);
    }

    var enumValue = this.getValue(valueNode.value);

    if (enumValue == null) {
      var _valueStr = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__.print)(valueNode);

      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_13__.GraphQLError("Value \"".concat(_valueStr, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, _valueStr), valueNode);
    }

    return enumValue.value;
  };

  _proto5.toConfig = function toConfig() {
    var _this$extensionASTNod4;

    var values = (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_11__.default)(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod4 = this.extensionASTNodes) !== null && _this$extensionASTNod4 !== void 0 ? _this$extensionASTNod4 : []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  _proto5.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLEnumType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLEnumType';
    }
  }]);

  return GraphQLEnumType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLEnumType);

function didYouMeanEnumValue(enumType, unknownValueStr) {
  var allNames = enumType.getValues().map(function (value) {
    return value.name;
  });
  var suggestedValues = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_16__.default)(unknownValueStr, allNames);
  return (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_17__.default)('the enum value', suggestedValues);
}

function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(typeName, " values must be an object with value names as keys."));
  return (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        valueConfig = _ref2[1];
    isPlainObj(valueConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(valueConfig), "."));
    !('isDeprecated' in valueConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    return {
      name: valueName,
      description: valueConfig.description,
      value: valueConfig.value !== undefined ? valueConfig.value : valueName,
      isDeprecated: valueConfig.deprecationReason != null,
      deprecationReason: valueConfig.deprecationReason,
      extensions: valueConfig.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(valueConfig.extensions),
      astNode: valueConfig.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = /*#__PURE__*/function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    typeof config.name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, 'Must provide name.');
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var _this$extensionASTNod5;

    var fields = (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod5 = this.extensionASTNodes) !== null && _this$extensionASTNod5 !== void 0 ? _this$extensionASTNod5 : []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  _proto6.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLInputObjectType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_2__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLInputObjectType';
    }
  }]);

  return GraphQLInputObjectType;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields);
  isPlainObj(fieldMap) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ "./node_modules/graphql/type/directives.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/directives.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDirective": function() { return /* binding */ isDirective; },
/* harmony export */   "assertDirective": function() { return /* binding */ assertDirective; },
/* harmony export */   "GraphQLDirective": function() { return /* binding */ GraphQLDirective; },
/* harmony export */   "GraphQLIncludeDirective": function() { return /* binding */ GraphQLIncludeDirective; },
/* harmony export */   "GraphQLSkipDirective": function() { return /* binding */ GraphQLSkipDirective; },
/* harmony export */   "DEFAULT_DEPRECATION_REASON": function() { return /* binding */ DEFAULT_DEPRECATION_REASON; },
/* harmony export */   "GraphQLDeprecatedDirective": function() { return /* binding */ GraphQLDeprecatedDirective; },
/* harmony export */   "GraphQLSpecifiedByDirective": function() { return /* binding */ GraphQLSpecifiedByDirective; },
/* harmony export */   "specifiedDirectives": function() { return /* binding */ specifiedDirectives; },
/* harmony export */   "isSpecifiedDirective": function() { return /* binding */ isSpecifiedDirective; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/defineInspect.mjs */ "./node_modules/graphql/jsutils/defineInspect.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(directive), " to be a GraphQL directive."));
  }

  return directive;
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective = /*#__PURE__*/function () {
  function GraphQLDirective(config) {
    var _config$isRepeatable, _config$args;

    this.name = config.name;
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(config.extensions);
    this.astNode = config.astNode;
    config.name || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, 'Directive must be named.');
    Array.isArray(config.locations) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, "@".concat(config.name, " locations must be an Array."));
    var args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
    (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(args) && !Array.isArray(args) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, "@".concat(config.name, " args must be an object with argument names as keys."));
    this.args = (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(args).map(function (_ref) {
      var argName = _ref[0],
          argConfig = _ref[1];
      return {
        name: argName,
        description: argConfig.description,
        type: argConfig.type,
        defaultValue: argConfig.defaultValue,
        deprecationReason: argConfig.deprecationReason,
        extensions: argConfig.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(argConfig.extensions),
        astNode: argConfig.astNode
      };
    });
  }

  var _proto = GraphQLDirective.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.argsToArgsConfig)(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  };

  _proto.toString = function toString() {
    return '@' + this.name;
  };

  _proto.toJSON = function toJSON() {
    return this.toString();
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLDirective, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_7__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLDirective';
    }
  }]);

  return GraphQLDirective;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

(0,_jsutils_defineInspect_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.FIELD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.FRAGMENT_SPREAD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.FIELD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.FRAGMENT_SPREAD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.FIELD_DEFINITION, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.ARGUMENT_DEFINITION, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.INPUT_FIELD_DEFINITION, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * Used to provide a URL for specifying the behaviour of custom scalar definitions.
 */

var GraphQLSpecifiedByDirective = new GraphQLDirective({
  name: 'specifiedBy',
  description: 'Exposes a URL that specifies the behaviour of this scalar.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_9__.DirectiveLocation.SCALAR],
  args: {
    url: {
      type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.GraphQLString),
      description: 'The URL that specifies the behaviour of this scalar.'
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, GraphQLSpecifiedByDirective]);
function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (_ref2) {
    var name = _ref2.name;
    return name === directive.name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/graphql/type/index.mjs ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSchema": function() { return /* reexport safe */ _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.isSchema; },
/* harmony export */   "assertSchema": function() { return /* reexport safe */ _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.assertSchema; },
/* harmony export */   "GraphQLSchema": function() { return /* reexport safe */ _schema_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLSchema; },
/* harmony export */   "isType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isType; },
/* harmony export */   "isScalarType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isScalarType; },
/* harmony export */   "isObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isObjectType; },
/* harmony export */   "isInterfaceType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInterfaceType; },
/* harmony export */   "isUnionType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isUnionType; },
/* harmony export */   "isEnumType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isEnumType; },
/* harmony export */   "isInputObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInputObjectType; },
/* harmony export */   "isListType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isListType; },
/* harmony export */   "isNonNullType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNonNullType; },
/* harmony export */   "isInputType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInputType; },
/* harmony export */   "isOutputType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isOutputType; },
/* harmony export */   "isLeafType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeafType; },
/* harmony export */   "isCompositeType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isCompositeType; },
/* harmony export */   "isAbstractType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isAbstractType; },
/* harmony export */   "isWrappingType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isWrappingType; },
/* harmony export */   "isNullableType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNullableType; },
/* harmony export */   "isNamedType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNamedType; },
/* harmony export */   "isRequiredArgument": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isRequiredArgument; },
/* harmony export */   "isRequiredInputField": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isRequiredInputField; },
/* harmony export */   "assertType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertType; },
/* harmony export */   "assertScalarType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertScalarType; },
/* harmony export */   "assertObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertObjectType; },
/* harmony export */   "assertInterfaceType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertInterfaceType; },
/* harmony export */   "assertUnionType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertUnionType; },
/* harmony export */   "assertEnumType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertEnumType; },
/* harmony export */   "assertInputObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertInputObjectType; },
/* harmony export */   "assertListType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertListType; },
/* harmony export */   "assertNonNullType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertNonNullType; },
/* harmony export */   "assertInputType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertInputType; },
/* harmony export */   "assertOutputType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertOutputType; },
/* harmony export */   "assertLeafType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertLeafType; },
/* harmony export */   "assertCompositeType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertCompositeType; },
/* harmony export */   "assertAbstractType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertAbstractType; },
/* harmony export */   "assertWrappingType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertWrappingType; },
/* harmony export */   "assertNullableType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertNullableType; },
/* harmony export */   "assertNamedType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.assertNamedType; },
/* harmony export */   "getNullableType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.getNullableType; },
/* harmony export */   "getNamedType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.getNamedType; },
/* harmony export */   "GraphQLScalarType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLScalarType; },
/* harmony export */   "GraphQLObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLObjectType; },
/* harmony export */   "GraphQLInterfaceType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLInterfaceType; },
/* harmony export */   "GraphQLUnionType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLUnionType; },
/* harmony export */   "GraphQLEnumType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLEnumType; },
/* harmony export */   "GraphQLInputObjectType": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLInputObjectType; },
/* harmony export */   "GraphQLList": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLList; },
/* harmony export */   "GraphQLNonNull": function() { return /* reexport safe */ _definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull; },
/* harmony export */   "isDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.isDirective; },
/* harmony export */   "assertDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.assertDirective; },
/* harmony export */   "GraphQLDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLDirective; },
/* harmony export */   "isSpecifiedDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.isSpecifiedDirective; },
/* harmony export */   "specifiedDirectives": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.specifiedDirectives; },
/* harmony export */   "GraphQLIncludeDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLIncludeDirective; },
/* harmony export */   "GraphQLSkipDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLSkipDirective; },
/* harmony export */   "GraphQLDeprecatedDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLDeprecatedDirective; },
/* harmony export */   "GraphQLSpecifiedByDirective": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLSpecifiedByDirective; },
/* harmony export */   "DEFAULT_DEPRECATION_REASON": function() { return /* reexport safe */ _directives_mjs__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_DEPRECATION_REASON; },
/* harmony export */   "isSpecifiedScalarType": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.isSpecifiedScalarType; },
/* harmony export */   "specifiedScalarTypes": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.specifiedScalarTypes; },
/* harmony export */   "GraphQLInt": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLInt; },
/* harmony export */   "GraphQLFloat": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLFloat; },
/* harmony export */   "GraphQLString": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLString; },
/* harmony export */   "GraphQLBoolean": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLBoolean; },
/* harmony export */   "GraphQLID": function() { return /* reexport safe */ _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLID; },
/* harmony export */   "isIntrospectionType": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.isIntrospectionType; },
/* harmony export */   "introspectionTypes": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.introspectionTypes; },
/* harmony export */   "__Schema": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__Schema; },
/* harmony export */   "__Directive": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__Directive; },
/* harmony export */   "__DirectiveLocation": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__DirectiveLocation; },
/* harmony export */   "__Type": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__Type; },
/* harmony export */   "__Field": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__Field; },
/* harmony export */   "__InputValue": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__InputValue; },
/* harmony export */   "__EnumValue": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__EnumValue; },
/* harmony export */   "__TypeKind": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.__TypeKind; },
/* harmony export */   "TypeKind": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeKind; },
/* harmony export */   "SchemaMetaFieldDef": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.SchemaMetaFieldDef; },
/* harmony export */   "TypeMetaFieldDef": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeMetaFieldDef; },
/* harmony export */   "TypeNameMetaFieldDef": function() { return /* reexport safe */ _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeNameMetaFieldDef; },
/* harmony export */   "validateSchema": function() { return /* reexport safe */ _validate_mjs__WEBPACK_IMPORTED_MODULE_5__.validateSchema; },
/* harmony export */   "assertValidSchema": function() { return /* reexport safe */ _validate_mjs__WEBPACK_IMPORTED_MODULE_5__.assertValidSchema; }
/* harmony export */ });
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _validate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate.mjs */ "./node_modules/graphql/type/validate.mjs");



// Common built-in scalar instances.


// Validate GraphQL schema.



/***/ }),

/***/ "./node_modules/graphql/type/introspection.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/type/introspection.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__Schema": function() { return /* binding */ __Schema; },
/* harmony export */   "__Directive": function() { return /* binding */ __Directive; },
/* harmony export */   "__DirectiveLocation": function() { return /* binding */ __DirectiveLocation; },
/* harmony export */   "__Type": function() { return /* binding */ __Type; },
/* harmony export */   "__Field": function() { return /* binding */ __Field; },
/* harmony export */   "__InputValue": function() { return /* binding */ __InputValue; },
/* harmony export */   "__EnumValue": function() { return /* binding */ __EnumValue; },
/* harmony export */   "TypeKind": function() { return /* binding */ TypeKind; },
/* harmony export */   "__TypeKind": function() { return /* binding */ __TypeKind; },
/* harmony export */   "SchemaMetaFieldDef": function() { return /* binding */ SchemaMetaFieldDef; },
/* harmony export */   "TypeMetaFieldDef": function() { return /* binding */ TypeMetaFieldDef; },
/* harmony export */   "TypeNameMetaFieldDef": function() { return /* binding */ TypeNameMetaFieldDef; },
/* harmony export */   "introspectionTypes": function() { return /* binding */ introspectionTypes; },
/* harmony export */   "isIntrospectionType": function() { return /* binding */ isIntrospectionType; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _utilities_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");








var __Schema = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(schema) {
          return schema.description;
        }
      },
      types: {
        description: 'A list of all types supported by this server.',
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          return (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__Directive',
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: function fields() {
    return {
      name: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
        resolve: function resolve(directive) {
          return directive.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(directive) {
          return directive.description;
        }
      },
      isRepeatable: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        resolve: function resolve(directive) {
          return directive.isRepeatable;
        }
      },
      locations: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__DirectiveLocation))),
        resolve: function resolve(directive) {
          return directive.locations;
        }
      },
      args: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args;
        }
      }
    };
  }
});
var __DirectiveLocation = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLEnumType({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_3__.DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isScalarType)(type)) {
            return TypeKind.SCALAR;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(type)) {
            return TypeKind.OBJECT;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(type)) {
            return TypeKind.INTERFACE;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isUnionType)(type)) {
            return TypeKind.UNION;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(type)) {
            return TypeKind.ENUM;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(type)) {
            return TypeKind.INPUT_OBJECT;
          }

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(type)) {
            return TypeKind.LIST;
          } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(type)) {
            return TypeKind.NON_NULL;
          } // istanbul ignore next (Not reachable. All possible types have been considered)


           false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(0, "Unexpected type: \"".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(type), "\"."));
        }
      },
      name: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(type) {
          return type.name !== undefined ? type.name : undefined;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(type) {
          return type.description !== undefined ? type.description : undefined;
        }
      },
      specifiedByUrl: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(obj) {
          return obj.specifiedByUrl !== undefined ? obj.specifiedByUrl : undefined;
        }
      },
      fields: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(type) || (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(type)) {
            var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type.getFields());
            return includeDeprecated ? fields : fields.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      interfaces: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(type) || (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type)),
        resolve: function resolve(type, _args, _context, _ref2) {
          var schema = _ref2.schema;

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isAbstractType)(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(type)) {
            var values = type.getValues();
            return includeDeprecated ? values : values.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      inputFields: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__InputValue)),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref4) {
          var includeDeprecated = _ref4.includeDeprecated;

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(type)) {
            var values = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type.getFields());
            return includeDeprecated ? values : values.filter(function (field) {
              return field.deprecationReason == null;
            });
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(type) {
          return type.ofType !== undefined ? type.ofType : undefined;
        }
      }
    };
  }
});
var __Field = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
        resolve: function resolve(field) {
          return field.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(field) {
          return field.description;
        }
      },
      args: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLList(new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__InputValue))),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(field, _ref5) {
          var includeDeprecated = _ref5.includeDeprecated;
          return includeDeprecated ? field.args : field.args.filter(function (arg) {
            return arg.deprecationReason == null;
          });
        }
      },
      type: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type),
        resolve: function resolve(field) {
          return field.type;
        }
      },
      isDeprecated: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        resolve: function resolve(field) {
          return field.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(field) {
          return field.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
        resolve: function resolve(inputValue) {
          return inputValue.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(inputValue) {
          return inputValue.description;
        }
      },
      type: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Type),
        resolve: function resolve(inputValue) {
          return inputValue.type;
        }
      },
      defaultValue: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this input value.',
        resolve: function resolve(inputValue) {
          var type = inputValue.type,
              defaultValue = inputValue.defaultValue;
          var valueAST = (0,_utilities_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_6__.astFromValue)(defaultValue, type);
          return valueAST ? (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print)(valueAST) : null;
        }
      },
      isDeprecated: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        resolve: function resolve(field) {
          return field.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var __EnumValue = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLObjectType({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
        resolve: function resolve(enumValue) {
          return enumValue.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(enumValue) {
          return enumValue.description;
        }
      },
      isDeprecated: {
        type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLBoolean),
        resolve: function resolve(enumValue) {
          return enumValue.deprecationReason != null;
        }
      },
      deprecationReason: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString,
        resolve: function resolve(enumValue) {
          return enumValue.deprecationReason;
        }
      }
    };
  }
});
var TypeKind = Object.freeze({
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
});
var __TypeKind = new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLEnumType({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. `inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref6) {
    var schema = _ref6.schema;
    return schema;
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    description: undefined,
    type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
    defaultValue: undefined,
    deprecationReason: undefined,
    extensions: undefined,
    astNode: undefined
  }],
  resolve: function resolve(_source, _ref7, _context, _ref8) {
    var name = _ref7.name;
    var schema = _ref8.schema;
    return schema.getType(name);
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: new _definition_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLNonNull(_scalars_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref9) {
    var parentType = _ref9.parentType;
    return parentType.name;
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
function isIntrospectionType(type) {
  return introspectionTypes.some(function (_ref10) {
    var name = _ref10.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/scalars.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/type/scalars.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphQLInt": function() { return /* binding */ GraphQLInt; },
/* harmony export */   "GraphQLFloat": function() { return /* binding */ GraphQLFloat; },
/* harmony export */   "GraphQLString": function() { return /* binding */ GraphQLString; },
/* harmony export */   "GraphQLBoolean": function() { return /* binding */ GraphQLBoolean; },
/* harmony export */   "GraphQLID": function() { return /* binding */ GraphQLID; },
/* harmony export */   "specifiedScalarTypes": function() { return /* binding */ specifiedScalarTypes; },
/* harmony export */   "isSpecifiedScalarType": function() { return /* binding */ isSpecifiedScalarType; }
/* harmony export */ });
/* harmony import */ var _polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../polyfills/isFinite.mjs */ "./node_modules/graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/isInteger.mjs */ "./node_modules/graphql/polyfills/isInteger.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");







 // As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function serializeInt(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 1 : 0;
  }

  var num = coercedValue;

  if (typeof coercedValue === 'string' && coercedValue !== '') {
    num = Number(coercedValue);
  }

  if (!(0,_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(num)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Int cannot represent non-integer value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(coercedValue)));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError('Int cannot represent non 32-bit signed integer value: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(coercedValue));
  }

  return num;
}

function coerceInt(inputValue) {
  if (!(0,_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(inputValue)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Int cannot represent non-integer value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue)));
  }

  if (inputValue > MAX_INT || inputValue < MIN_INT) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(inputValue));
  }

  return inputValue;
}

var GraphQLInt = new _definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  serialize: serializeInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Int cannot represent non-integer value: ".concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(valueNode)), valueNode);
    }

    var num = parseInt(valueNode.value, 10);

    if (num > MAX_INT || num < MIN_INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Int cannot represent non 32-bit signed integer value: ".concat(valueNode.value), valueNode);
    }

    return num;
  }
});

function serializeFloat(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 1 : 0;
  }

  var num = coercedValue;

  if (typeof coercedValue === 'string' && coercedValue !== '') {
    num = Number(coercedValue);
  }

  if (!(0,_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(num)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Float cannot represent non numeric value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(coercedValue)));
  }

  return num;
}

function coerceFloat(inputValue) {
  if (!(0,_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(inputValue)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Float cannot represent non numeric value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue)));
  }

  return inputValue;
}

var GraphQLFloat = new _definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
  serialize: serializeFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.FLOAT && valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Float cannot represent non numeric value: ".concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(valueNode)), valueNode);
    }

    return parseFloat(valueNode.value);
  }
}); // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(outputValue) {
  if ((0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(outputValue)) {
    if (typeof outputValue.valueOf === 'function') {
      var valueOfResult = outputValue.valueOf();

      if (!(0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(valueOfResult)) {
        return valueOfResult;
      }
    }

    if (typeof outputValue.toJSON === 'function') {
      // $FlowFixMe[incompatible-use]
      return outputValue.toJSON();
    }
  }

  return outputValue;
}

function serializeString(outputValue) {
  var coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
  // attempt to coerce object, function, symbol, or other types as strings.

  if (typeof coercedValue === 'string') {
    return coercedValue;
  }

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 'true' : 'false';
  }

  if ((0,_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(coercedValue)) {
    return coercedValue.toString();
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("String cannot represent value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(outputValue)));
}

function coerceString(inputValue) {
  if (typeof inputValue !== 'string') {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("String cannot represent a non string value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue)));
  }

  return inputValue;
}

var GraphQLString = new _definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
  serialize: serializeString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.STRING) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("String cannot represent a non string value: ".concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(valueNode)), valueNode);
    }

    return valueNode.value;
  }
});

function serializeBoolean(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue;
  }

  if ((0,_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(coercedValue)) {
    return coercedValue !== 0;
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(coercedValue)));
}

function coerceBoolean(inputValue) {
  if (typeof inputValue !== 'boolean') {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue)));
  }

  return inputValue;
}

var GraphQLBoolean = new _definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: serializeBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.BOOLEAN) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Boolean cannot represent a non boolean value: ".concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(valueNode)), valueNode);
    }

    return valueNode.value;
  }
});

function serializeID(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'string') {
    return coercedValue;
  }

  if ((0,_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(coercedValue)) {
    return String(coercedValue);
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("ID cannot represent value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(outputValue)));
}

function coerceID(inputValue) {
  if (typeof inputValue === 'string') {
    return inputValue;
  }

  if ((0,_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(inputValue)) {
    return inputValue.toString();
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("ID cannot represent value: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputValue)));
}

var GraphQLID = new _definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize: serializeID,
  parseValue: coerceID,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.STRING && valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError('ID cannot represent a non-string and non-integer value: ' + (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(valueNode), valueNode);
    }

    return valueNode.value;
  }
});
var specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);
function isSpecifiedScalarType(type) {
  return specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/schema.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/type/schema.mjs ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSchema": function() { return /* binding */ isSchema; },
/* harmony export */   "assertSchema": function() { return /* binding */ assertSchema; },
/* harmony export */   "GraphQLSchema": function() { return /* binding */ GraphQLSchema; }
/* harmony export */ });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













/**
 * Test if the given value is a GraphQL schema.
 */

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return (0,_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(schema, GraphQLSchema);
}
function assertSchema(schema) {
  if (!isSchema(schema)) {
    throw new Error("Expected ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(schema), " to be a GraphQL schema."));
  }

  return schema;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 *     const characterInterface = new GraphQLInterfaceType({
 *       name: 'Character',
 *       ...
 *     });
 *
 *     const humanType = new GraphQLObjectType({
 *       name: 'Human',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const droidType = new GraphQLObjectType({
 *       name: 'Droid',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const schema = new GraphQLSchema({
 *       query: new GraphQLObjectType({
 *         name: 'Query',
 *         fields: {
 *           hero: { type: characterInterface, ... },
 *         }
 *       }),
 *       ...
 *       // Since this schema references only the `Character` interface it's
 *       // necessary to explicitly list the types that implement it if
 *       // you want them to be included in the final schema.
 *       types: [humanType, droidType],
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema = /*#__PURE__*/function () {
  // Used as a cache for validateSchema().
  function GraphQLSchema(config) {
    var _config$directives;

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    this.__validationErrors = config.assumeValid === true ? [] : undefined; // Check for common mistakes during construction to produce early errors.

    (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(config) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, 'Must provide configuration object.');
    !config.types || Array.isArray(config.types) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, "\"types\" must be Array if provided but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(config.types), "."));
    !config.directives || Array.isArray(config.directives) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, '"directives" must be Array if provided but got: ' + "".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(config.directives), "."));
    this.description = config.description;
    this.extensions = config.extensions && (0,_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives_mjs__WEBPACK_IMPORTED_MODULE_5__.specifiedDirectives; // To preserve order of user-provided types, we add first to add them to
    // the set of "collected" types, so `collectReferencedTypes` ignore them.

    var allReferencedTypes = new Set(config.types);

    if (config.types != null) {
      for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
        var type = _config$types2[_i2];
        // When we ready to process this type, we remove it from "collected" types
        // and then add it together with all dependent types in the correct position.
        allReferencedTypes.delete(type);
        collectReferencedTypes(type, allReferencedTypes);
      }
    }

    if (this._queryType != null) {
      collectReferencedTypes(this._queryType, allReferencedTypes);
    }

    if (this._mutationType != null) {
      collectReferencedTypes(this._mutationType, allReferencedTypes);
    }

    if (this._subscriptionType != null) {
      collectReferencedTypes(this._subscriptionType, allReferencedTypes);
    }

    for (var _i4 = 0, _this$_directives2 = this._directives; _i4 < _this$_directives2.length; _i4++) {
      var directive = _this$_directives2[_i4];

      // Directives are not validated until validateSchema() is called.
      if ((0,_directives_mjs__WEBPACK_IMPORTED_MODULE_5__.isDirective)(directive)) {
        for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
          var arg = _directive$args2[_i6];
          collectReferencedTypes(arg.type, allReferencedTypes);
        }
      }
    }

    collectReferencedTypes(_introspection_mjs__WEBPACK_IMPORTED_MODULE_6__.__Schema, allReferencedTypes); // Storing the resulting map for reference by the schema.

    this._typeMap = Object.create(null);
    this._subTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementationsMap = Object.create(null);

    for (var _i8 = 0, _arrayFrom2 = (0,_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(allReferencedTypes); _i8 < _arrayFrom2.length; _i8++) {
      var namedType = _arrayFrom2[_i8];

      if (namedType == null) {
        continue;
      }

      var typeName = namedType.name;
      typeName || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, 'One of the provided types for building the Schema is missing a name.');

      if (this._typeMap[typeName] !== undefined) {
        throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(typeName, "\"."));
      }

      this._typeMap[typeName] = namedType;

      if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInterfaceType)(namedType)) {
        // Store implementations by interface.
        for (var _i10 = 0, _namedType$getInterfa2 = namedType.getInterfaces(); _i10 < _namedType$getInterfa2.length; _i10++) {
          var iface = _namedType$getInterfa2[_i10];

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInterfaceType)(iface)) {
            var implementations = this._implementationsMap[iface.name];

            if (implementations === undefined) {
              implementations = this._implementationsMap[iface.name] = {
                objects: [],
                interfaces: []
              };
            }

            implementations.interfaces.push(namedType);
          }
        }
      } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isObjectType)(namedType)) {
        // Store implementations by objects.
        for (var _i12 = 0, _namedType$getInterfa4 = namedType.getInterfaces(); _i12 < _namedType$getInterfa4.length; _i12++) {
          var _iface = _namedType$getInterfa4[_i12];

          if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInterfaceType)(_iface)) {
            var _implementations = this._implementationsMap[_iface.name];

            if (_implementations === undefined) {
              _implementations = this._implementationsMap[_iface.name] = {
                objects: [],
                interfaces: []
              };
            }

            _implementations.objects.push(namedType);
          }
        }
      }
    }
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    return (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isUnionType)(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
  };

  _proto.getImplementations = function getImplementations(interfaceType) {
    var implementations = this._implementationsMap[interfaceType.name];
    return implementations !== null && implementations !== void 0 ? implementations : {
      objects: [],
      interfaces: []
    };
  } // @deprecated: use isSubType instead - will be removed in v16.
  ;

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    return this.isSubType(abstractType, possibleType);
  };

  _proto.isSubType = function isSubType(abstractType, maybeSubType) {
    var map = this._subTypeMap[abstractType.name];

    if (map === undefined) {
      map = Object.create(null);

      if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isUnionType)(abstractType)) {
        for (var _i14 = 0, _abstractType$getType2 = abstractType.getTypes(); _i14 < _abstractType$getType2.length; _i14++) {
          var type = _abstractType$getType2[_i14];
          map[type.name] = true;
        }
      } else {
        var implementations = this.getImplementations(abstractType);

        for (var _i16 = 0, _implementations$obje2 = implementations.objects; _i16 < _implementations$obje2.length; _i16++) {
          var _type = _implementations$obje2[_i16];
          map[_type.name] = true;
        }

        for (var _i18 = 0, _implementations$inte2 = implementations.interfaces; _i18 < _implementations$inte2.length; _i18++) {
          var _type2 = _implementations$inte2[_i18];
          map[_type2.name] = true;
        }
      }

      this._subTypeMap[abstractType.name] = map;
    }

    return map[maybeSubType.name] !== undefined;
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  _proto.toConfig = function toConfig() {
    var _this$extensionASTNod;

    return {
      description: this.description,
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(this.getTypeMap()),
      directives: this.getDirectives().slice(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : [],
      assumeValid: this.__validationErrors !== undefined
    };
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLSchema, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_11__.SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'GraphQLSchema';
    }
  }]);

  return GraphQLSchema;
}();

function collectReferencedTypes(type, typeSet) {
  var namedType = (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.getNamedType)(type);

  if (!typeSet.has(namedType)) {
    typeSet.add(namedType);

    if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isUnionType)(namedType)) {
      for (var _i20 = 0, _namedType$getTypes2 = namedType.getTypes(); _i20 < _namedType$getTypes2.length; _i20++) {
        var memberType = _namedType$getTypes2[_i20];
        collectReferencedTypes(memberType, typeSet);
      }
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isObjectType)(namedType) || (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInterfaceType)(namedType)) {
      for (var _i22 = 0, _namedType$getInterfa6 = namedType.getInterfaces(); _i22 < _namedType$getInterfa6.length; _i22++) {
        var interfaceType = _namedType$getInterfa6[_i22];
        collectReferencedTypes(interfaceType, typeSet);
      }

      for (var _i24 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(namedType.getFields()); _i24 < _objectValues2.length; _i24++) {
        var field = _objectValues2[_i24];
        collectReferencedTypes(field.type, typeSet);

        for (var _i26 = 0, _field$args2 = field.args; _i26 < _field$args2.length; _i26++) {
          var arg = _field$args2[_i26];
          collectReferencedTypes(arg.type, typeSet);
        }
      }
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInputObjectType)(namedType)) {
      for (var _i28 = 0, _objectValues4 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(namedType.getFields()); _i28 < _objectValues4.length; _i28++) {
        var _field = _objectValues4[_i28];
        collectReferencedTypes(_field.type, typeSet);
      }
    }
  }

  return typeSet;
}


/***/ }),

/***/ "./node_modules/graphql/type/validate.mjs":
/*!************************************************!*\
  !*** ./node_modules/graphql/type/validate.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateSchema": function() { return /* binding */ validateSchema; },
/* harmony export */   "assertValidSchema": function() { return /* binding */ assertValidSchema; }
/* harmony export */ });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _utilities_assertValidName_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/assertValidName.mjs */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");











/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  (0,_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.assertSchema)(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext = /*#__PURE__*/function () {
  function SchemaValidationContext(schema) {
    this._errors = [];
    this.schema = schema;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this.addError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError(message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(queryType)) {
    var _getOperationTypeNode;

    context.reportError("Query root type must be Object type, it cannot be ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(queryType), "."), (_getOperationTypeNode = getOperationTypeNode(schema, 'query')) !== null && _getOperationTypeNode !== void 0 ? _getOperationTypeNode : queryType.astNode);
  }

  var mutationType = schema.getMutationType();

  if (mutationType && !(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(mutationType)) {
    var _getOperationTypeNode2;

    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(mutationType), "."), (_getOperationTypeNode2 = getOperationTypeNode(schema, 'mutation')) !== null && _getOperationTypeNode2 !== void 0 ? _getOperationTypeNode2 : mutationType.astNode);
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(subscriptionType)) {
    var _getOperationTypeNode3;

    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(subscriptionType), "."), (_getOperationTypeNode3 = getOperationTypeNode(schema, 'subscription')) !== null && _getOperationTypeNode3 !== void 0 ? _getOperationTypeNode3 : subscriptionType.astNode);
  }
}

function getOperationTypeNode(schema, operation) {
  var operationNodes = getAllSubNodes(schema, function (node) {
    return node.operationTypes;
  });

  for (var _i2 = 0; _i2 < operationNodes.length; _i2++) {
    var node = operationNodes[_i2];

    if (node.operation === operation) {
      return node.type;
    }
  }

  return undefined;
}

function validateDirectives(context) {
  for (var _i4 = 0, _context$schema$getDi2 = context.schema.getDirectives(); _i4 < _context$schema$getDi2.length; _i4++) {
    var directive = _context$schema$getDi2[_i4];

    // Ensure all directives are in fact GraphQL directives.
    if (!(0,_directives_mjs__WEBPACK_IMPORTED_MODULE_4__.isDirective)(directive)) {
      context.reportError("Expected directive but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(directive), "."), directive === null || directive === void 0 ? void 0 : directive.astNode);
      continue;
    } // Ensure they are named correctly.


    validateName(context, directive); // TODO: Ensure proper locations.
    // Ensure the arguments are valid.

    for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
      var arg = _directive$args2[_i6];
      // Ensure they are named correctly.
      validateName(context, arg); // Ensure the type is an input type.

      if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputType)(arg.type)) {
        context.reportError("The type of @".concat(directive.name, "(").concat(arg.name, ":) must be Input Type ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(arg.type), "."), arg.astNode);
      }

      if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredArgument)(arg) && arg.deprecationReason != null) {
        var _arg$astNode;

        context.reportError("Required argument @".concat(directive.name, "(").concat(arg.name, ":) cannot be deprecated."), [getDeprecatedDirectiveNode(arg.astNode), // istanbul ignore next (TODO need to write coverage tests)
        (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type]);
      }
    }
  }
}

function validateName(context, node) {
  // Ensure names are valid, however introspection types opt out.
  var error = (0,_utilities_assertValidName_mjs__WEBPACK_IMPORTED_MODULE_5__.isValidNameError)(node.name);

  if (error) {
    context.addError((0,_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_6__.locatedError)(error, node.astNode));
  }
}

function validateTypes(context) {
  var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  var typeMap = context.schema.getTypeMap();

  for (var _i8 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(typeMap); _i8 < _objectValues2.length; _i8++) {
    var type = _objectValues2[_i8];

    // Ensure all provided types are in fact GraphQL type.
    if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNamedType)(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type), "."), type.astNode);
      continue;
    } // Ensure it is named correctly (excluding introspection types).


    if (!(0,_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__.isIntrospectionType)(type)) {
      validateName(context, type);
    }

    if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(type)) {
      // Ensure fields are valid.
      validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isUnionType)(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isEnumType)(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputObjectType)(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}

function validateFields(context, type) {
  var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  for (var _i10 = 0; _i10 < fields.length; _i10++) {
    var field = fields[_i10];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isOutputType)(field.type)) {
      var _field$astNode;

      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(field.type), "."), (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
    } // Ensure the arguments are valid


    for (var _i12 = 0, _field$args2 = field.args; _i12 < _field$args2.length; _i12++) {
      var arg = _field$args2[_i12];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure the type is an input type

      if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputType)(arg.type)) {
        var _arg$astNode2;

        context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(arg.type), "."), (_arg$astNode2 = arg.astNode) === null || _arg$astNode2 === void 0 ? void 0 : _arg$astNode2.type);
      }

      if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredArgument)(arg) && arg.deprecationReason != null) {
        var _arg$astNode3;

        context.reportError("Required argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) cannot be deprecated."), [getDeprecatedDirectiveNode(arg.astNode), // istanbul ignore next (TODO need to write coverage tests)
        (_arg$astNode3 = arg.astNode) === null || _arg$astNode3 === void 0 ? void 0 : _arg$astNode3.type]);
      }
    }
  }
}

function validateInterfaces(context, type) {
  var ifaceTypeNames = Object.create(null);

  for (var _i14 = 0, _type$getInterfaces2 = type.getInterfaces(); _i14 < _type$getInterfaces2.length; _i14++) {
    var iface = _type$getInterfaces2[_i14];

    if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(iface)) {
      context.reportError("Type ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type), " must only implement Interface types, ") + "it cannot implement ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(iface), "."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    if (type === iface) {
      context.reportError("Type ".concat(type.name, " cannot implement itself because it would create a circular reference."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    if (ifaceTypeNames[iface.name]) {
      context.reportError("Type ".concat(type.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    ifaceTypeNames[iface.name] = true;
    validateTypeImplementsAncestors(context, type, iface);
    validateTypeImplementsInterface(context, type, iface);
  }
}

function validateTypeImplementsInterface(context, type, iface) {
  var typeFieldMap = type.getFields(); // Assert each interface field is implemented.

  for (var _i16 = 0, _objectValues4 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(iface.getFields()); _i16 < _objectValues4.length; _i16++) {
    var ifaceField = _objectValues4[_i16];
    var fieldName = ifaceField.name;
    var typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.

    if (!typeField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(type.name, " does not provide it."), [ifaceField.astNode].concat(getAllNodes(type)));
      continue;
    } // Assert interface field type is satisfied by type field type, by being
    // a valid subtype. (covariant)


    if (!(0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_9__.isTypeSubTypeOf)(context.schema, typeField.type, ifaceField.type)) {
      var _ifaceField$astNode, _typeField$astNode;

      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(ifaceField.type), " but ").concat(type.name, ".").concat(fieldName, " ") + "is type ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(typeField.type), "."), [// istanbul ignore next (TODO need to write coverage tests)
      (_ifaceField$astNode = ifaceField.astNode) === null || _ifaceField$astNode === void 0 ? void 0 : _ifaceField$astNode.type, // istanbul ignore next (TODO need to write coverage tests)
      (_typeField$astNode = typeField.astNode) === null || _typeField$astNode === void 0 ? void 0 : _typeField$astNode.type]);
    } // Assert each interface field arg is implemented.


    var _loop = function _loop(_i18, _ifaceField$args2) {
      var ifaceArg = _ifaceField$args2[_i18];
      var argName = ifaceArg.name;
      var typeArg = (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(typeField.args, function (arg) {
        return arg.name === argName;
      }); // Assert interface field arg exists on object field.

      if (!typeArg) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(type.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, typeField.astNode]);
        return "continue";
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?


      if (!(0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_9__.isEqualType)(ifaceArg.type, typeArg.type)) {
        var _ifaceArg$astNode, _typeArg$astNode;

        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(ifaceArg.type), " but ") + "".concat(type.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(typeArg.type), "."), [// istanbul ignore next (TODO need to write coverage tests)
        (_ifaceArg$astNode = ifaceArg.astNode) === null || _ifaceArg$astNode === void 0 ? void 0 : _ifaceArg$astNode.type, // istanbul ignore next (TODO need to write coverage tests)
        (_typeArg$astNode = typeArg.astNode) === null || _typeArg$astNode === void 0 ? void 0 : _typeArg$astNode.type]);
      } // TODO: validate default values?

    };

    for (var _i18 = 0, _ifaceField$args2 = ifaceField.args; _i18 < _ifaceField$args2.length; _i18++) {
      var _ret = _loop(_i18, _ifaceField$args2);

      if (_ret === "continue") continue;
    } // Assert additional arguments must not be required.


    var _loop2 = function _loop2(_i20, _typeField$args2) {
      var typeArg = _typeField$args2[_i20];
      var argName = typeArg.name;
      var ifaceArg = (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(ifaceField.args, function (arg) {
        return arg.name === argName;
      });

      if (!ifaceArg && (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredArgument)(typeArg)) {
        context.reportError("Object field ".concat(type.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [typeArg.astNode, ifaceField.astNode]);
      }
    };

    for (var _i20 = 0, _typeField$args2 = typeField.args; _i20 < _typeField$args2.length; _i20++) {
      _loop2(_i20, _typeField$args2);
    }
  }
}

function validateTypeImplementsAncestors(context, type, iface) {
  var ifaceInterfaces = type.getInterfaces();

  for (var _i22 = 0, _iface$getInterfaces2 = iface.getInterfaces(); _i22 < _iface$getInterfaces2.length; _i22++) {
    var transitive = _iface$getInterfaces2[_i22];

    if (ifaceInterfaces.indexOf(transitive) === -1) {
      context.reportError(transitive === type ? "Type ".concat(type.name, " cannot implement ").concat(iface.name, " because it would create a circular reference.") : "Type ".concat(type.name, " must implement ").concat(transitive.name, " because it is implemented by ").concat(iface.name, "."), [].concat(getAllImplementsInterfaceNodes(iface, transitive), getAllImplementsInterfaceNodes(type, iface)));
    }
  }
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
  }

  var includedTypeNames = Object.create(null);

  for (var _i24 = 0; _i24 < memberTypes.length; _i24++) {
    var memberType = memberTypes[_i24];

    if (includedTypeNames[memberType.name]) {
      context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
      continue;
    }

    includedTypeNames[memberType.name] = true;

    if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(memberType)) {
      context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
    }
  }
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
  }

  for (var _i26 = 0; _i26 < enumValues.length; _i26++) {
    var enumValue = enumValues[_i26];
    var valueName = enumValue.name; // Ensure valid name.

    validateName(context, enumValue);

    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
    }
  }
}

function validateInputFields(context, inputObj) {
  var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
  } // Ensure the arguments are valid


  for (var _i28 = 0; _i28 < fields.length; _i28++) {
    var field = fields[_i28];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!(0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputType)(field.type)) {
      var _field$astNode2;

      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(field.type), "."), (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
    }

    if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isRequiredInputField)(field) && field.deprecationReason != null) {
      var _field$astNode3;

      context.reportError("Required input field ".concat(inputObj.name, ".").concat(field.name, " cannot be deprecated."), [getDeprecatedDirectiveNode(field.astNode), // istanbul ignore next (TODO need to write coverage tests)
      (_field$astNode3 = field.astNode) === null || _field$astNode3 === void 0 ? void 0 : _field$astNode3.type]);
    }
  }
}

function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  var fieldPath = []; // Position in the type path

  var fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }

    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(inputObj.getFields());

    for (var _i30 = 0; _i30 < fields.length; _i30++) {
      var field = fields[_i30];

      if ((0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(field.type) && (0,_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputObjectType)(field.type.ofType)) {
        var fieldType = field.type.ofType;
        var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);

        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          var cyclePath = fieldPath.slice(cycleIndex);
          var pathStr = cyclePath.map(function (fieldObj) {
            return fieldObj.name;
          }).join('.');
          context.reportError("Cannot reference Input Object \"".concat(fieldType.name, "\" within itself through a series of non-null fields: \"").concat(pathStr, "\"."), cyclePath.map(function (fieldObj) {
            return fieldObj.astNode;
          }));
        }

        fieldPath.pop();
      }
    }

    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes !== null && extensionASTNodes !== void 0 ? extensionASTNodes : [];
}

function getAllSubNodes(object, getter) {
  var subNodes = [];

  for (var _i32 = 0, _getAllNodes2 = getAllNodes(object); _i32 < _getAllNodes2.length; _i32++) {
    var _getter;

    var node = _getAllNodes2[_i32];
    // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
    subNodes = subNodes.concat((_getter = getter(node)) !== null && _getter !== void 0 ? _getter : []);
  }

  return subNodes;
}

function getAllImplementsInterfaceNodes(type, iface) {
  return getAllSubNodes(type, function (typeNode) {
    return typeNode.interfaces;
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}

function getUnionMemberTypeNodes(union, typeName) {
  return getAllSubNodes(union, function (unionNode) {
    return unionNode.types;
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}

function getDeprecatedDirectiveNode(definitionNode) {
  var _definitionNode$direc;

  // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
  return definitionNode === null || definitionNode === void 0 ? void 0 : (_definitionNode$direc = definitionNode.directives) === null || _definitionNode$direc === void 0 ? void 0 : _definitionNode$direc.find(function (node) {
    return node.name.value === _directives_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLDeprecatedDirective.name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/utilities/TypeInfo.mjs ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeInfo": function() { return /* binding */ TypeInfo; },
/* harmony export */   "visitWithTypeInfo": function() { return /* binding */ visitWithTypeInfo; }
/* harmony export */ });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_ast_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");







/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

var TypeInfo = /*#__PURE__*/function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant code bases. You should never need to use it.
  // It may disappear in the future.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  // beginning somewhere other than documents.
  initialType) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;

    if (initialType) {
      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputType)(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isOutputType)(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  _proto.enter = function enter(node) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SELECTION_SET:
        {
          var namedType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(this.getType());

          this._parentTypeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(namedType) ? namedType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD:
        {
          var parentType = this.getParentType();
          var fieldDef;
          var fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isOutputType)(fieldType) ? fieldType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION:
        {
          var type;

          switch (node.operation) {
            case 'query':
              type = schema.getQueryType();
              break;

            case 'mutation':
              type = schema.getMutationType();
              break;

            case 'subscription':
              type = schema.getSubscriptionType();
              break;
          }

          this._typeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(type) ? type : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INLINE_FRAGMENT:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION:
        {
          var typeConditionAST = node.typeCondition;
          var outputType = typeConditionAST ? (0,_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_2__.typeFromAST)(schema, typeConditionAST) : (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(this.getType());

          this._typeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isOutputType)(outputType) ? outputType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.VARIABLE_DEFINITION:
        {
          var inputType = (0,_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_2__.typeFromAST)(schema, node.type);

          this._inputTypeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputType)(inputType) ? inputType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ARGUMENT:
        {
          var _this$getDirective;

          var argDef;
          var argType;
          var fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();

          if (fieldOrDirective) {
            argDef = (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(fieldOrDirective.args, function (arg) {
              return arg.name === node.name.value;
            });

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputType)(argType) ? argType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.LIST:
        {
          var listType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNullableType)(this.getInputType());
          var itemType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(listType) ? listType.ofType : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputType)(itemType) ? itemType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_FIELD:
        {
          var objectType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(this.getInputType());
          var inputFieldType;
          var inputField;

          if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

          this._inputTypeStack.push((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputType)(inputFieldType) ? inputFieldType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM:
        {
          var enumType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(this.getInputType());
          var enumValue;

          if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DIRECTIVE:
        this._directive = null;
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INLINE_FRAGMENT:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.LIST:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */

function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.SchemaMetaFieldDef;
  }

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeMetaFieldDef;
  }

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeNameMetaFieldDef.name && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(parentType)) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_4__.TypeNameMetaFieldDef;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(parentType) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(parentType)) {
    return parentType.getFields()[name];
  }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */


function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_5__.getVisitFn)(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if ((0,_language_ast_mjs__WEBPACK_IMPORTED_MODULE_6__.isNode)(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_5__.getVisitFn)(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/assertValidName.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertValidName": function() { return /* binding */ assertValidName; },
/* harmony export */   "isValidNameError": function() { return /* binding */ isValidNameError; }
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */

function isValidNameError(name) {
  typeof name === 'string' || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0, 'Expected name to be a string.');

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."));
  }

  if (!NAME_RX.test(name)) {
    return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."));
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/astFromValue.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "astFromValue": function() { return /* binding */ astFromValue; }
/* harmony export */ });
/* harmony import */ var _polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/isFinite.mjs */ "./node_modules/graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/safeArrayFrom.mjs */ "./node_modules/graphql/jsutils/safeArrayFrom.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");









/**
 * Produces a GraphQL Value AST given a JavaScript object.
 * Function will match JavaScript/JSON values to GraphQL AST schema format
 * by using suggested GraphQLInputType. For example:
 *
 *     astFromValue("value", GraphQLString)
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(type)) {
    var astValue = astFromValue(value, type.ofType);

    if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NULL
    };
  } // undefined


  if (value === undefined) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(type)) {
    var itemType = type.ofType;
    var items = (0,_jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(value);

    if (items != null) {
      var valuesNodes = [];

      for (var _i2 = 0; _i2 < items.length; _i2++) {
        var item = items[_i2];
        var itemNode = astFromValue(item, itemType);

        if (itemNode != null) {
          valuesNodes.push(itemNode);
        }
      }

      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(type)) {
    if (!(0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(value)) {
      return null;
    }

    var fieldNodes = [];

    for (var _i4 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldValue = astFromValue(value[field.name], field.type);

      if (fieldValue) {
        fieldNodes.push({
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_FIELD,
          name: {
            kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }

    return {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT,
      fields: fieldNodes
    };
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isLeafType)(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if (serialized == null) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number' && (0,_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(serialized)) {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INT,
        value: stringNum
      } : {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(type)) {
        return {
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLID && integerStringRegExp.test(serialized)) {
        return {
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INT,
          value: serialized
        };
      }

      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(serialized), "."));
  } // istanbul ignore next (Not reachable. All possible input types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(0, 'Unexpected input type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;


/***/ }),

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/utilities/buildASTSchema.mjs ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildASTSchema": function() { return /* binding */ buildASTSchema; },
/* harmony export */   "buildSchema": function() { return /* binding */ buildSchema; }
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extendSchema.mjs */ "./node_modules/graphql/utilities/extendSchema.mjs");








/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(documentAST, options) {
  documentAST != null && documentAST.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.DOCUMENT || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(0, 'Must provide valid Document AST.');

  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    (0,_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_2__.assertValidSDL)(documentAST);
  }

  var emptySchemaConfig = {
    description: undefined,
    types: [],
    directives: [],
    extensions: undefined,
    extensionASTNodes: [],
    assumeValid: false
  };
  var config = (0,_extendSchema_mjs__WEBPACK_IMPORTED_MODULE_3__.extendSchemaImpl)(emptySchemaConfig, documentAST, options);

  if (config.astNode == null) {
    for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
      var type = _config$types2[_i2];

      switch (type.name) {
        // Note: While this could make early assertions to get the correctly
        // typed values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        case 'Query':
          config.query = type;
          break;

        case 'Mutation':
          config.mutation = type;
          break;

        case 'Subscription':
          config.subscription = type;
          break;
      }
    }
  }

  var directives = config.directives; // If specified directives were not explicitly declared, add them.

  var _loop = function _loop(_i4) {
    var stdDirective = _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__.specifiedDirectives[_i4];

    if (directives.every(function (directive) {
      return directive.name !== stdDirective.name;
    })) {
      directives.push(stdDirective);
    }
  };

  for (var _i4 = 0; _i4 < _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__.specifiedDirectives.length; _i4++) {
    _loop(_i4);
  }

  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLSchema(config);
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */

function buildSchema(source, options) {
  var document = (0,_language_parser_mjs__WEBPACK_IMPORTED_MODULE_6__.parse)(source, {
    noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
    allowLegacySDLEmptyFields: options === null || options === void 0 ? void 0 : options.allowLegacySDLEmptyFields,
    allowLegacySDLImplementsInterfaces: options === null || options === void 0 ? void 0 : options.allowLegacySDLImplementsInterfaces,
    experimentalFragmentVariables: options === null || options === void 0 ? void 0 : options.experimentalFragmentVariables
  });
  return buildASTSchema(document, {
    commentDescriptions: options === null || options === void 0 ? void 0 : options.commentDescriptions,
    assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/graphql/utilities/buildClientSchema.mjs ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildClientSchema": function() { return /* binding */ buildClientSchema; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");












/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */

function buildClientSchema(introspection, options) {
  (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(introspection) && (0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(introspection.__schema) || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(0, "Invalid or incomplete introspection result. Ensure that you are passing \"data\" property of introspection response and no \"errors\" was returned alongside: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(introspection), ".")); // Get the schema from the introspection result.

  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  }); // Include standard types only if they are used.

  for (var _i2 = 0, _ref2 = [].concat(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__.specifiedScalarTypes, _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.introspectionTypes); _i2 < _ref2.length; _i2++) {
    var stdType = _ref2[_i2];

    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.


  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLSchema({
    description: schemaIntrospection.description,
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(typeMap),
    directives: directives,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLList(getType(itemRef));
    }

    if (typeRef.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLNonNull((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.assertNullableType)(nullableType));
    }

    return getNamedType(typeRef);
  }

  function getNamedType(typeRef) {
    var typeName = typeRef.name;

    if (!typeName) {
      throw new Error("Unknown type reference: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(typeRef), "."));
    }

    var type = typeMap[typeName];

    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
    }

    return type;
  }

  function getObjectType(typeRef) {
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.assertObjectType)(getNamedType(typeRef));
  }

  function getInterfaceType(typeRef) {
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.assertInterfaceType)(getNamedType(typeRef));
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type != null && type.name != null && type.kind != null) {
      switch (type.kind) {
        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.SCALAR:
          return buildScalarDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.OBJECT:
          return buildObjectDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.INTERFACE:
          return buildInterfaceDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.UNION:
          return buildUnionDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.ENUM:
          return buildEnumDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type);
    throw new Error("Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ".concat(typeStr, "."));
  }

  function buildScalarDef(scalarIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description,
      specifiedByUrl: scalarIntrospection.specifiedByUrl
    });
  }

  function buildImplementationsList(implementingIntrospection) {
    // TODO: Temporary workaround until GraphQL ecosystem will fully support
    // 'interfaces' on interface types.
    if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.TypeKind.INTERFACE) {
      return [];
    }

    if (!implementingIntrospection.interfaces) {
      var implementingIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(implementingIntrospection);
      throw new Error("Introspection result missing interfaces: ".concat(implementingIntrospectionStr, "."));
    }

    return implementingIntrospection.interfaces.map(getInterfaceType);
  }

  function buildObjectDef(objectIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(objectIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(interfaceIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      var unionIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(unionIntrospection);
      throw new Error("Introspection result missing possibleTypes: ".concat(unionIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      var enumIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(enumIntrospection);
      throw new Error("Introspection result missing enumValues: ".concat(enumIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      var inputObjectIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(inputObjectIntrospection);
      throw new Error("Introspection result missing inputFields: ".concat(inputObjectIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error("Introspection result missing fields: ".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(typeIntrospection), "."));
    }

    return (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, buildField);
  }

  function buildField(fieldIntrospection) {
    var type = getType(fieldIntrospection.type);

    if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isOutputType)(type)) {
      var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type);
      throw new Error("Introspection must provide output type for fields, but received: ".concat(typeStr, "."));
    }

    if (!fieldIntrospection.args) {
      var fieldIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(fieldIntrospection);
      throw new Error("Introspection result missing field args: ".concat(fieldIntrospectionStr, "."));
    }

    return {
      description: fieldIntrospection.description,
      deprecationReason: fieldIntrospection.deprecationReason,
      type: type,
      args: buildInputValueDefMap(fieldIntrospection.args)
    };
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getType(inputValueIntrospection.type);

    if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__.isInputType)(type)) {
      var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type);
      throw new Error("Introspection must provide input type for arguments, but received: ".concat(typeStr, "."));
    }

    var defaultValue = inputValueIntrospection.defaultValue != null ? (0,_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__.valueFromAST)((0,_language_parser_mjs__WEBPACK_IMPORTED_MODULE_10__.parseValue)(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue,
      deprecationReason: inputValueIntrospection.deprecationReason
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      var directiveIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(directiveIntrospection);
      throw new Error("Introspection result missing directive args: ".concat(directiveIntrospectionStr, "."));
    }

    if (!directiveIntrospection.locations) {
      var _directiveIntrospectionStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(directiveIntrospection);

      throw new Error("Introspection result missing directive locations: ".concat(_directiveIntrospectionStr, "."));
    }

    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_11__.GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      isRepeatable: directiveIntrospection.isRepeatable,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/coerceInputValue.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/utilities/coerceInputValue.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coerceInputValue": function() { return /* binding */ coerceInputValue; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/safeArrayFrom.mjs */ "./node_modules/graphql/jsutils/safeArrayFrom.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/printPathArray.mjs */ "./node_modules/graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");












/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
function coerceInputValue(inputValue, type) {
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOnError;
  return coerceInputValueImpl(inputValue, type, onError);
}

function defaultOnError(path, invalidValue, error) {
  var errorPrefix = 'Invalid value ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(invalidValue);

  if (path.length > 0) {
    errorPrefix += " at \"value".concat((0,_jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(path), "\"");
  }

  error.message = errorPrefix + ': ' + error.message;
  throw error;
}

function coerceInputValueImpl(inputValue, type, onError, path) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }

    onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected non-nullable type \"".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type), "\" not to be null.")));
    return;
  }

  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isListType)(type)) {
    var itemType = type.ofType;
    var coercedList = (0,_jsutils_safeArrayFrom_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(inputValue, function (itemValue, index) {
      var itemPath = (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.addPath)(path, index, undefined);
      return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
    });

    if (coercedList != null) {
      return coercedList;
    } // Lists accept a non-list value as a list of one.


    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputObjectType)(type)) {
    if (!(0,_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(inputValue)) {
      onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected type \"".concat(type.name, "\" to be an object.")));
      return;
    }

    var coercedValue = {};
    var fieldDefs = type.getFields();

    for (var _i2 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(fieldDefs); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = inputValue[field.name];

      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          coercedValue[field.name] = field.defaultValue;
        } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(field.type)) {
          var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(field.type);
          onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Field \"".concat(field.name, "\" of required type \"").concat(typeStr, "\" was not provided.")));
        }

        continue;
      }

      coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, (0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.addPath)(path, field.name, type.name));
    } // Ensure every provided field is defined.


    for (var _i4 = 0, _Object$keys2 = Object.keys(inputValue); _i4 < _Object$keys2.length; _i4++) {
      var fieldName = _Object$keys2[_i4];

      if (!fieldDefs[fieldName]) {
        var suggestions = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(fieldName, Object.keys(type.getFields()));
        onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Field \"".concat(fieldName, "\" is not defined by type \"").concat(type.name, "\".") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(suggestions)));
      }
    }

    return coercedValue;
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isLeafType)(type)) {
    var parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
    // which can throw to indicate failure. If it throws, maintain a reference
    // to the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError) {
        onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, error);
      } else {
        onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected type \"".concat(type.name, "\". ") + error.message, undefined, undefined, undefined, undefined, error));
      }

      return;
    }

    if (parseResult === undefined) {
      onError((0,_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_3__.pathToArray)(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected type \"".concat(type.name, "\".")));
    }

    return parseResult;
  } // istanbul ignore next (Not reachable. All possible input types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_10__.default)(0, 'Unexpected input type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(type));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/utilities/concatAST.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatAST": function() { return /* binding */ concatAST; }
/* harmony export */ });
/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(documents) {
  var definitions = [];

  for (var _i2 = 0; _i2 < documents.length; _i2++) {
    var doc = documents[_i2];
    definitions = definitions.concat(doc.definitions);
  }

  return {
    kind: 'Document',
    definitions: definitions
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/extendSchema.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendSchema": function() { return /* binding */ extendSchema; },
/* harmony export */   "extendSchemaImpl": function() { return /* binding */ extendSchemaImpl; },
/* harmony export */   "getDescription": function() { return /* binding */ getDescription; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/mapValue.mjs */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../language/tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _execution_values_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../execution/values.mjs */ "./node_modules/graphql/execution/values.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  (0,_type_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.assertSchema)(schema);
  documentAST != null && documentAST.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DOCUMENT || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(0, 'Must provide valid Document AST.');

  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    (0,_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__.assertValidSDLExtension)(documentAST, schema);
  }

  var schemaConfig = schema.toConfig();
  var extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
  return schemaConfig === extendedConfig ? schema : new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLSchema(extendedConfig);
}
/**
 * @internal
 */

function extendSchemaImpl(schemaConfig, documentAST, options) {
  var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;

  // Collect the type definitions and extensions found in the document.
  var typeDefs = [];
  var typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExtensions = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_EXTENSION) {
      schemaExtensions.push(def);
    } else if ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_4__.isTypeDefinitionNode)(def)) {
      typeDefs.push(def);
    } else if ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_4__.isTypeExtensionNode)(def)) {
      var extendedTypeName = def.name.value;
      var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
      typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
    } else if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.


  if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
    return schemaConfig;
  }

  var typeMap = Object.create(null);

  for (var _i4 = 0, _schemaConfig$types2 = schemaConfig.types; _i4 < _schemaConfig$types2.length; _i4++) {
    var existingType = _schemaConfig$types2[_i4];
    typeMap[existingType.name] = extendNamedType(existingType);
  }

  for (var _i6 = 0; _i6 < typeDefs.length; _i6++) {
    var _stdTypeMap$name;

    var typeNode = typeDefs[_i6];
    var name = typeNode.name.value;
    typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
  }

  var operationTypes = _objectSpread(_objectSpread({
    // Get the extended root operation types.
    query: schemaConfig.query && replaceNamedType(schemaConfig.query),
    mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
    subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription)
  }, schemaDef && getOperationTypes([schemaDef])), getOperationTypes(schemaExtensions)); // Then produce and return a Schema config with these types.


  return _objectSpread(_objectSpread({
    description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value
  }, operationTypes), {}, {
    types: (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(typeMap),
    directives: [].concat(schemaConfig.directives.map(replaceDirective), directiveDefs.map(buildDirective)),
    extensions: undefined,
    astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
    assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isListType)(type)) {
      // $FlowFixMe[incompatible-return]
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLList(replaceType(type.ofType));
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isNonNullType)(type)) {
      // $FlowFixMe[incompatible-return]
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLNonNull(replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    return typeMap[type.name];
  }

  function replaceDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
      args: (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(config.args, extendArg)
    }));
  }

  function extendNamedType(type) {
    if ((0,_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_9__.isIntrospectionType)(type) || (0,_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.isSpecifiedScalarType)(type)) {
      // Builtin types are not extended.
      return type;
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isScalarType)(type)) {
      return extendScalarType(type);
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isObjectType)(type)) {
      return extendObjectType(type);
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isInterfaceType)(type)) {
      return extendInterfaceType(type);
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isUnionType)(type)) {
      return extendUnionType(type);
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isEnumType)(type)) {
      return extendEnumType(type);
    } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.isInputObjectType)(type)) {
      return extendInputObjectType(type);
    } // istanbul ignore next (Not reachable. All possible types have been considered)


     false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_11__.default)(0, 'Unexpected type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_12__.default)(type));
  }

  function extendInputObjectType(type) {
    var _typeExtensionsMap$co;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLInputObjectType(_objectSpread(_objectSpread({}, config), {}, {
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(config.fields, function (field) {
          return _objectSpread(_objectSpread({}, field), {}, {
            type: replaceType(field.type)
          });
        })), buildInputFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendEnumType(type) {
    var _typeExtensionsMap$ty;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLEnumType(_objectSpread(_objectSpread({}, config), {}, {
      values: _objectSpread(_objectSpread({}, config.values), buildEnumValueMap(extensions)),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendScalarType(type) {
    var _typeExtensionsMap$co2;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
    var specifiedByUrl = config.specifiedByUrl;

    for (var _i8 = 0; _i8 < extensions.length; _i8++) {
      var _getSpecifiedByUrl;

      var extensionNode = extensions[_i8];
      specifiedByUrl = (_getSpecifiedByUrl = getSpecifiedByUrl(extensionNode)) !== null && _getSpecifiedByUrl !== void 0 ? _getSpecifiedByUrl : specifiedByUrl;
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLScalarType(_objectSpread(_objectSpread({}, config), {}, {
      specifiedByUrl: specifiedByUrl,
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendObjectType(type) {
    var _typeExtensionsMap$co3;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
      },
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(config.fields, extendField)), buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendInterfaceType(type) {
    var _typeExtensionsMap$co4;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLInterfaceType(_objectSpread(_objectSpread({}, config), {}, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
      },
      fields: function fields() {
        return _objectSpread(_objectSpread({}, (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(config.fields, extendField)), buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendUnionType(type) {
    var _typeExtensionsMap$co5;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLUnionType(_objectSpread(_objectSpread({}, config), {}, {
      types: function types() {
        return [].concat(type.getTypes().map(replaceNamedType), buildUnionTypes(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendField(field) {
    return _objectSpread(_objectSpread({}, field), {}, {
      type: replaceType(field.type),
      // $FlowFixMe[incompatible-call]
      args: (0,_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(field.args, extendArg)
    });
  }

  function extendArg(arg) {
    return _objectSpread(_objectSpread({}, arg), {}, {
      type: replaceType(arg.type)
    });
  }

  function getOperationTypes(nodes) {
    var opTypes = {};

    for (var _i10 = 0; _i10 < nodes.length; _i10++) {
      var _node$operationTypes;

      var node = nodes[_i10];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];

      for (var _i12 = 0; _i12 < operationTypesNodes.length; _i12++) {
        var operationType = operationTypesNodes[_i12];
        opTypes[operationType.operation] = getNamedType(operationType.type);
      }
    } // Note: While this could make early assertions to get the correctly
    // typed values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.


    return opTypes;
  }

  function getNamedType(node) {
    var _stdTypeMap$name2;

    var name = node.name.value;
    var type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];

    if (type === undefined) {
      throw new Error("Unknown type: \"".concat(name, "\"."));
    }

    return type;
  }

  function getWrappedType(node) {
    if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.LIST_TYPE) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLList(getWrappedType(node.type));
    }

    if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.NON_NULL_TYPE) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLNonNull(getWrappedType(node.type));
    }

    return getNamedType(node);
  }

  function buildDirective(node) {
    var locations = node.locations.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__.GraphQLDirective({
      name: node.name.value,
      description: getDescription(node, options),
      locations: locations,
      isRepeatable: node.repeatable,
      args: buildArgumentMap(node.arguments),
      astNode: node
    });
  }

  function buildFieldMap(nodes) {
    var fieldConfigMap = Object.create(null);

    for (var _i14 = 0; _i14 < nodes.length; _i14++) {
      var _node$fields;

      var node = nodes[_i14];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var nodeFields = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];

      for (var _i16 = 0; _i16 < nodeFields.length; _i16++) {
        var field = nodeFields[_i16];
        fieldConfigMap[field.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: getWrappedType(field.type),
          description: getDescription(field, options),
          args: buildArgumentMap(field.arguments),
          deprecationReason: getDeprecationReason(field),
          astNode: field
        };
      }
    }

    return fieldConfigMap;
  }

  function buildArgumentMap(args) {
    // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
    var argsNodes = args !== null && args !== void 0 ? args : [];
    var argConfigMap = Object.create(null);

    for (var _i18 = 0; _i18 < argsNodes.length; _i18++) {
      var arg = argsNodes[_i18];
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      var type = getWrappedType(arg.type);
      argConfigMap[arg.name.value] = {
        type: type,
        description: getDescription(arg, options),
        defaultValue: (0,_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_13__.valueFromAST)(arg.defaultValue, type),
        deprecationReason: getDeprecationReason(arg),
        astNode: arg
      };
    }

    return argConfigMap;
  }

  function buildInputFieldMap(nodes) {
    var inputFieldMap = Object.create(null);

    for (var _i20 = 0; _i20 < nodes.length; _i20++) {
      var _node$fields2;

      var node = nodes[_i20];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var fieldsNodes = (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];

      for (var _i22 = 0; _i22 < fieldsNodes.length; _i22++) {
        var field = fieldsNodes[_i22];
        // Note: While this could make assertions to get the correctly typed
        // value, that would throw immediately while type system validation
        // with validateSchema() will produce more actionable results.
        var type = getWrappedType(field.type);
        inputFieldMap[field.name.value] = {
          type: type,
          description: getDescription(field, options),
          defaultValue: (0,_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_13__.valueFromAST)(field.defaultValue, type),
          deprecationReason: getDeprecationReason(field),
          astNode: field
        };
      }
    }

    return inputFieldMap;
  }

  function buildEnumValueMap(nodes) {
    var enumValueMap = Object.create(null);

    for (var _i24 = 0; _i24 < nodes.length; _i24++) {
      var _node$values;

      var node = nodes[_i24];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var valuesNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];

      for (var _i26 = 0; _i26 < valuesNodes.length; _i26++) {
        var value = valuesNodes[_i26];
        enumValueMap[value.name.value] = {
          description: getDescription(value, options),
          deprecationReason: getDeprecationReason(value),
          astNode: value
        };
      }
    }

    return enumValueMap;
  }

  function buildInterfaces(nodes) {
    var interfaces = [];

    for (var _i28 = 0; _i28 < nodes.length; _i28++) {
      var _node$interfaces;

      var node = nodes[_i28];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var interfacesNodes = (_node$interfaces = node.interfaces) !== null && _node$interfaces !== void 0 ? _node$interfaces : [];

      for (var _i30 = 0; _i30 < interfacesNodes.length; _i30++) {
        var type = interfacesNodes[_i30];
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable
        // results.
        interfaces.push(getNamedType(type));
      }
    }

    return interfaces;
  }

  function buildUnionTypes(nodes) {
    var types = [];

    for (var _i32 = 0; _i32 < nodes.length; _i32++) {
      var _node$types;

      var node = nodes[_i32];
      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var typeNodes = (_node$types = node.types) !== null && _node$types !== void 0 ? _node$types : [];

      for (var _i34 = 0; _i34 < typeNodes.length; _i34++) {
        var type = typeNodes[_i34];
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable
        // results.
        types.push(getNamedType(type));
      }
    }

    return types;
  }

  function buildType(astNode) {
    var _typeExtensionsMap$na;

    var name = astNode.name.value;
    var description = getDescription(astNode, options);
    var extensionNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];

    switch (astNode.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_TYPE_DEFINITION:
        {
          var extensionASTNodes = extensionNodes;
          var allNodes = [astNode].concat(extensionASTNodes);
          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLObjectType({
            name: name,
            description: description,
            interfaces: function interfaces() {
              return buildInterfaces(allNodes);
            },
            fields: function fields() {
              return buildFieldMap(allNodes);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INTERFACE_TYPE_DEFINITION:
        {
          var _extensionASTNodes = extensionNodes;

          var _allNodes = [astNode].concat(_extensionASTNodes);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLInterfaceType({
            name: name,
            description: description,
            interfaces: function interfaces() {
              return buildInterfaces(_allNodes);
            },
            fields: function fields() {
              return buildFieldMap(_allNodes);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM_TYPE_DEFINITION:
        {
          var _extensionASTNodes2 = extensionNodes;

          var _allNodes2 = [astNode].concat(_extensionASTNodes2);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLEnumType({
            name: name,
            description: description,
            values: buildEnumValueMap(_allNodes2),
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes2
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.UNION_TYPE_DEFINITION:
        {
          var _extensionASTNodes3 = extensionNodes;

          var _allNodes3 = [astNode].concat(_extensionASTNodes3);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLUnionType({
            name: name,
            description: description,
            types: function types() {
              return buildUnionTypes(_allNodes3);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes3
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCALAR_TYPE_DEFINITION:
        {
          var _extensionASTNodes4 = extensionNodes;
          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLScalarType({
            name: name,
            description: description,
            specifiedByUrl: getSpecifiedByUrl(astNode),
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes4
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INPUT_OBJECT_TYPE_DEFINITION:
        {
          var _extensionASTNodes5 = extensionNodes;

          var _allNodes4 = [astNode].concat(_extensionASTNodes5);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__.GraphQLInputObjectType({
            name: name,
            description: description,
            fields: function fields() {
              return buildInputFieldMap(_allNodes4);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes5
          });
        }
    } // istanbul ignore next (Not reachable. All possible type definition nodes have been considered)


     false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_11__.default)(0, 'Unexpected type definition node: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_12__.default)(astNode));
  }
}
var stdTypeMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_14__.default)(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_10__.specifiedScalarTypes.concat(_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_9__.introspectionTypes), function (type) {
  return type.name;
});
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */

function getDeprecationReason(node) {
  var deprecated = (0,_execution_values_mjs__WEBPACK_IMPORTED_MODULE_15__.getDirectiveValues)(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__.GraphQLDeprecatedDirective, node);
  return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
}
/**
 * Given a scalar node, returns the string value for the specifiedByUrl.
 */


function getSpecifiedByUrl(node) {
  var specifiedBy = (0,_execution_values_mjs__WEBPACK_IMPORTED_MODULE_15__.getDirectiveValues)(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__.GraphQLSpecifiedByDirective, node);
  return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
}
/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return (0,_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_16__.dedentBlockStringValue)('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token != null && token.kind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_17__.TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.length > 0 ? comments.reverse().join('\n') : undefined;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findBreakingChanges.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakingChangeType": function() { return /* binding */ BreakingChangeType; },
/* harmony export */   "DangerousChangeType": function() { return /* binding */ DangerousChangeType; },
/* harmony export */   "findBreakingChanges": function() { return /* binding */ findBreakingChanges; },
/* harmony export */   "findDangerousChanges": function() { return /* binding */ findDangerousChanges; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/naturalCompare.mjs */ "./node_modules/graphql/jsutils/naturalCompare.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var BreakingChangeType = Object.freeze({
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
  IMPLEMENTED_INTERFACE_REMOVED: 'IMPLEMENTED_INTERFACE_REMOVED',
  FIELD_REMOVED: 'FIELD_REMOVED',
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED',
  DIRECTIVE_REPEATABLE_REMOVED: 'DIRECTIVE_REPEATABLE_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED'
});
var DangerousChangeType = Object.freeze({
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
  OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED',
  IMPLEMENTED_INTERFACE_ADDED: 'IMPLEMENTED_INTERFACE_ADDED',
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE'
});

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in BreakingChangeType;
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in DangerousChangeType;
  });
  return dangerousChanges;
}

function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
}

function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());

  for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
    var oldDirective = _directivesDiff$remov2[_i2];
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: "".concat(oldDirective.name, " was removed.")
    });
  }

  for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
    var _ref2 = _directivesDiff$persi2[_i4];
    var _oldDirective = _ref2[0];
    var newDirective = _ref2[1];
    var argsDiff = diff(_oldDirective.args, newDirective.args);

    for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
      var newArg = _argsDiff$added2[_i6];

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isRequiredArgument)(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
        });
      }
    }

    for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
      var oldArg = _argsDiff$removed2[_i8];
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
      });
    }

    if (_oldDirective.isRepeatable && !newDirective.isRepeatable) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
        description: "Repeatable flag was removed from ".concat(_oldDirective.name, ".")
      });
    }

    for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
      var location = _oldDirective$locatio2[_i10];

      if (newDirective.locations.indexOf(location) === -1) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
        });
      }
    }
  }

  return schemaChanges;
}

function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff((0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(oldSchema.getTypeMap()), (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(newSchema.getTypeMap()));

  for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
    var oldType = _typesDiff$removed2[_i12];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: (0,_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__.isSpecifiedScalarType)(oldType) ? "Standard scalar ".concat(oldType.name, " was removed because it is not referenced anymore.") : "".concat(oldType.name, " was removed.")
    });
  }

  for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
    var _ref4 = _typesDiff$persisted2[_i14];
    var _oldType = _ref4[0];
    var newType = _ref4[1];

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(_oldType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(newType)) {
      schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
    } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isUnionType)(_oldType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isUnionType)(newType)) {
      schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
    } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(_oldType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(newType)) {
      schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
    } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(_oldType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(_oldType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if (_oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }

  return schemaChanges;
}

function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff((0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(oldType.getFields()), (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(newType.getFields()));

  for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
    var newField = _fieldsDiff$added2[_i16];

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isRequiredInputField)(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    }
  }

  for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
    var oldField = _fieldsDiff$removed2[_i18];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
    var _ref6 = _fieldsDiff$persisted2[_i20];
    var _oldField = _ref6[0];
    var _newField = _ref6[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

  for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
    var newPossibleType = _possibleTypesDiff$ad2[_i22];
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
    });
  }

  for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
    var oldPossibleType = _possibleTypesDiff$re2[_i24];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());

  for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
    var newValue = _valuesDiff$added2[_i26];
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
    });
  }

  for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
    var oldValue = _valuesDiff$removed2[_i28];
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findImplementedInterfacesChanges(oldType, newType) {
  var schemaChanges = [];
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

  for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
    var newInterface = _interfacesDiff$added2[_i30];
    schemaChanges.push({
      type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
      description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
    });
  }

  for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
    var oldInterface = _interfacesDiff$remov2[_i32];
    schemaChanges.push({
      type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
      description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
    });
  }

  return schemaChanges;
}

function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff((0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(oldType.getFields()), (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(newType.getFields()));

  for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
    var oldField = _fieldsDiff$removed4[_i34];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
    var _ref8 = _fieldsDiff$persisted4[_i36];
    var _oldField2 = _ref8[0];
    var newField = _ref8[1];
    schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
    var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);

  for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
    var oldArg = _argsDiff$removed4[_i38];
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
    });
  }

  for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
    var _ref10 = _argsDiff$persisted2[_i40];
    var _oldArg = _ref10[0];
    var newArg = _ref10[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
      });
    } else if (_oldArg.defaultValue !== undefined) {
      if (newArg.defaultValue === undefined) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
        });
      } else {
        // Since we looking only for client's observable changes we should
        // compare default values in the same representation as they are
        // represented inside introspection.
        var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
        var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
          });
        }
      }
    }
  }

  for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
    var _newArg = _argsDiff$added4[_i42];

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isRequiredArgument)(_newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    }
  }

  return schemaChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return (// if they're both named types, see if their names are equivalent
    (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNamedType)(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent


  return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNamedType)(newType) && oldType.name === newType.name;
}

function typeKindName(type) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isScalarType)(type)) {
    return 'a Scalar type';
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(type)) {
    return 'an Object type';
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(type)) {
    return 'an Interface type';
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isUnionType)(type)) {
    return 'a Union type';
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(type)) {
    return 'an Enum type';
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(type)) {
    return 'an Input type';
  } // istanbul ignore next (Not reachable. All possible named types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, 'Unexpected type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(type));
}

function stringifyValue(value, type) {
  var ast = (0,_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_5__.astFromValue)(value, type);
  ast != null || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0);
  var sortedAST = (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__.visit)(ast, {
    ObjectValue: function ObjectValue(objectNode) {
      // Make a copy since sort mutates array
      var fields = [].concat(objectNode.fields);
      fields.sort(function (fieldA, fieldB) {
        return (0,_jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(fieldA.name.value, fieldB.name.value);
      });
      return _objectSpread(_objectSpread({}, objectNode), {}, {
        fields: fields
      });
    }
  });
  return (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__.print)(sortedAST);
}

function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(oldArray, function (_ref11) {
    var name = _ref11.name;
    return name;
  });
  var newMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_9__.default)(newArray, function (_ref12) {
    var name = _ref12.name;
    return name;
  });

  for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
    var oldItem = oldArray[_i44];
    var newItem = newMap[oldItem.name];

    if (newItem === undefined) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }

  for (var _i46 = 0; _i46 < newArray.length; _i46++) {
    var _newItem = newArray[_i46];

    if (oldMap[_newItem.name] === undefined) {
      added.push(_newItem);
    }
  }

  return {
    added: added,
    persisted: persisted,
    removed: removed
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findDeprecatedUsages.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findDeprecatedUsages": function() { return /* binding */ findDeprecatedUsages; }
/* harmony export */ });
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _validation_rules_custom_NoDeprecatedCustomRule_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/rules/custom/NoDeprecatedCustomRule.mjs */ "./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs");


/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 *
 * @deprecated Please use `validate` with `NoDeprecatedCustomRule` instead:
 *
 * ```
 * import { validate, NoDeprecatedCustomRule } from 'graphql'
 *
 * const errors = validate(schema, document, [NoDeprecatedCustomRule])
 * ```
 */

function findDeprecatedUsages(schema, ast) {
  return (0,_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_0__.validate)(schema, ast, [_validation_rules_custom_NoDeprecatedCustomRule_mjs__WEBPACK_IMPORTED_MODULE_1__.NoDeprecatedCustomRule]);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/graphql/utilities/getIntrospectionQuery.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIntrospectionQuery": function() { return /* binding */ getIntrospectionQuery; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getIntrospectionQuery(options) {
  var optionsWithDefault = _objectSpread({
    descriptions: true,
    specifiedByUrl: false,
    directiveIsRepeatable: false,
    schemaDescription: false,
    inputValueDeprecation: false
  }, options);

  var descriptions = optionsWithDefault.descriptions ? 'description' : '';
  var specifiedByUrl = optionsWithDefault.specifiedByUrl ? 'specifiedByUrl' : '';
  var directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? 'isRepeatable' : '';
  var schemaDescription = optionsWithDefault.schemaDescription ? descriptions : '';

  function inputDeprecation(str) {
    return optionsWithDefault.inputValueDeprecation ? str : '';
  }

  return "\n    query IntrospectionQuery {\n      __schema {\n        ".concat(schemaDescription, "\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(descriptions, "\n          ").concat(directiveIsRepeatable, "\n          locations\n          args").concat(inputDeprecation('(includeDeprecated: true)'), " {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions, "\n      ").concat(specifiedByUrl, "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        args").concat(inputDeprecation('(includeDeprecated: true)'), " {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields").concat(inputDeprecation('(includeDeprecated: true)'), " {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions, "\n      type { ...TypeRef }\n      defaultValue\n      ").concat(inputDeprecation('isDeprecated'), "\n      ").concat(inputDeprecation('deprecationReason'), "\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationAST.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperationAST": function() { return /* binding */ getOperationAST; }
/* harmony export */ });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */

function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definition = _documentAST$definiti2[_i2];

    if (definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION) {
      var _definition$name;

      if (operationName == null) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
        return definition;
      }
    }
  }

  return operation;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationRootType.mjs ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperationRootType": function() { return /* binding */ getOperationRootType; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();

    if (!queryType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Schema does not define the required query root type.', operation);
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Schema is not configured for mutations.', operation);
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Schema is not configured for subscriptions.', operation);
    }

    return subscriptionType;
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Can only have query, mutation and subscription operations.', operation);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/utilities/index.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIntrospectionQuery": function() { return /* reexport safe */ _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_0__.getIntrospectionQuery; },
/* harmony export */   "getOperationAST": function() { return /* reexport safe */ _getOperationAST_mjs__WEBPACK_IMPORTED_MODULE_1__.getOperationAST; },
/* harmony export */   "getOperationRootType": function() { return /* reexport safe */ _getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_2__.getOperationRootType; },
/* harmony export */   "introspectionFromSchema": function() { return /* reexport safe */ _introspectionFromSchema_mjs__WEBPACK_IMPORTED_MODULE_3__.introspectionFromSchema; },
/* harmony export */   "buildClientSchema": function() { return /* reexport safe */ _buildClientSchema_mjs__WEBPACK_IMPORTED_MODULE_4__.buildClientSchema; },
/* harmony export */   "buildASTSchema": function() { return /* reexport safe */ _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__.buildASTSchema; },
/* harmony export */   "buildSchema": function() { return /* reexport safe */ _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__.buildSchema; },
/* harmony export */   "extendSchema": function() { return /* reexport safe */ _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__.extendSchema; },
/* harmony export */   "getDescription": function() { return /* reexport safe */ _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__.getDescription; },
/* harmony export */   "lexicographicSortSchema": function() { return /* reexport safe */ _lexicographicSortSchema_mjs__WEBPACK_IMPORTED_MODULE_7__.lexicographicSortSchema; },
/* harmony export */   "printSchema": function() { return /* reexport safe */ _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__.printSchema; },
/* harmony export */   "printType": function() { return /* reexport safe */ _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__.printType; },
/* harmony export */   "printIntrospectionSchema": function() { return /* reexport safe */ _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__.printIntrospectionSchema; },
/* harmony export */   "typeFromAST": function() { return /* reexport safe */ _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__.typeFromAST; },
/* harmony export */   "valueFromAST": function() { return /* reexport safe */ _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_10__.valueFromAST; },
/* harmony export */   "valueFromASTUntyped": function() { return /* reexport safe */ _valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_11__.valueFromASTUntyped; },
/* harmony export */   "astFromValue": function() { return /* reexport safe */ _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_12__.astFromValue; },
/* harmony export */   "TypeInfo": function() { return /* reexport safe */ _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__.TypeInfo; },
/* harmony export */   "visitWithTypeInfo": function() { return /* reexport safe */ _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__.visitWithTypeInfo; },
/* harmony export */   "coerceInputValue": function() { return /* reexport safe */ _coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_14__.coerceInputValue; },
/* harmony export */   "concatAST": function() { return /* reexport safe */ _concatAST_mjs__WEBPACK_IMPORTED_MODULE_15__.concatAST; },
/* harmony export */   "separateOperations": function() { return /* reexport safe */ _separateOperations_mjs__WEBPACK_IMPORTED_MODULE_16__.separateOperations; },
/* harmony export */   "stripIgnoredCharacters": function() { return /* reexport safe */ _stripIgnoredCharacters_mjs__WEBPACK_IMPORTED_MODULE_17__.stripIgnoredCharacters; },
/* harmony export */   "isEqualType": function() { return /* reexport safe */ _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__.isEqualType; },
/* harmony export */   "isTypeSubTypeOf": function() { return /* reexport safe */ _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__.isTypeSubTypeOf; },
/* harmony export */   "doTypesOverlap": function() { return /* reexport safe */ _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__.doTypesOverlap; },
/* harmony export */   "assertValidName": function() { return /* reexport safe */ _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__.assertValidName; },
/* harmony export */   "isValidNameError": function() { return /* reexport safe */ _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__.isValidNameError; },
/* harmony export */   "BreakingChangeType": function() { return /* reexport safe */ _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__.BreakingChangeType; },
/* harmony export */   "DangerousChangeType": function() { return /* reexport safe */ _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__.DangerousChangeType; },
/* harmony export */   "findBreakingChanges": function() { return /* reexport safe */ _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__.findBreakingChanges; },
/* harmony export */   "findDangerousChanges": function() { return /* reexport safe */ _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__.findDangerousChanges; },
/* harmony export */   "findDeprecatedUsages": function() { return /* reexport safe */ _findDeprecatedUsages_mjs__WEBPACK_IMPORTED_MODULE_21__.findDeprecatedUsages; }
/* harmony export */ });
/* harmony import */ var _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIntrospectionQuery.mjs */ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs");
/* harmony import */ var _getOperationAST_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOperationAST.mjs */ "./node_modules/graphql/utilities/getOperationAST.mjs");
/* harmony import */ var _getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _introspectionFromSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introspectionFromSchema.mjs */ "./node_modules/graphql/utilities/introspectionFromSchema.mjs");
/* harmony import */ var _buildClientSchema_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildClientSchema.mjs */ "./node_modules/graphql/utilities/buildClientSchema.mjs");
/* harmony import */ var _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildASTSchema.mjs */ "./node_modules/graphql/utilities/buildASTSchema.mjs");
/* harmony import */ var _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendSchema.mjs */ "./node_modules/graphql/utilities/extendSchema.mjs");
/* harmony import */ var _lexicographicSortSchema_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lexicographicSortSchema.mjs */ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs");
/* harmony import */ var _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./printSchema.mjs */ "./node_modules/graphql/utilities/printSchema.mjs");
/* harmony import */ var _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony import */ var _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coerceInputValue.mjs */ "./node_modules/graphql/utilities/coerceInputValue.mjs");
/* harmony import */ var _concatAST_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./concatAST.mjs */ "./node_modules/graphql/utilities/concatAST.mjs");
/* harmony import */ var _separateOperations_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./separateOperations.mjs */ "./node_modules/graphql/utilities/separateOperations.mjs");
/* harmony import */ var _stripIgnoredCharacters_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stripIgnoredCharacters.mjs */ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs");
/* harmony import */ var _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony import */ var _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assertValidName.mjs */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony import */ var _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./findBreakingChanges.mjs */ "./node_modules/graphql/utilities/findBreakingChanges.mjs");
/* harmony import */ var _findDeprecatedUsages_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./findDeprecatedUsages.mjs */ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs");
// Produce the GraphQL query recommended for a full schema introspection.
// Accepts optional IntrospectionOptions.

// Gets the target Operation from a Document.
 // Gets the Type for the target Operation AST.

 // Convert a GraphQLSchema to an IntrospectionQuery.

 // Build a GraphQLSchema from an introspection result.

 // Build a GraphQLSchema from GraphQL Schema language.


// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
 // Sort a GraphQLSchema.

 // Print a GraphQLSchema to GraphQL Schema language.

 // Create a GraphQLType from a GraphQL language AST.

 // Create a JavaScript value from a GraphQL language AST with a type.

 // Create a JavaScript value from a GraphQL language AST without a type.

 // Create a GraphQL language AST from a JavaScript value.

 // A helper to use within recursive-descent visitors which need to be aware of
// the GraphQL type system.

 // Coerces a JavaScript value to a GraphQL type, or produces errors.

 // Concatenates multiple AST together.

 // Separates an AST into an AST per Operation.

 // Strips characters that are not significant to the validity or execution
// of a GraphQL document.

 // Comparators for types

 // Asserts that a string is a valid GraphQL name

 // Compares two GraphQLSchemas and detects breaking changes.


// @deprecated: Report all deprecated usage within a GraphQL document.



/***/ }),

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/introspectionFromSchema.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "introspectionFromSchema": function() { return /* binding */ introspectionFromSchema; }
/* harmony export */ });
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getIntrospectionQuery.mjs */ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var optionsWithDefaults = _objectSpread({
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true
  }, options);

  var document = (0,_language_parser_mjs__WEBPACK_IMPORTED_MODULE_0__.parse)((0,_getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_1__.getIntrospectionQuery)(optionsWithDefaults));
  var result = (0,_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_2__.executeSync)({
    schema: schema,
    document: document
  });
  !result.errors && result.data || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0);
  return result.data;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/lexicographicSortSchema.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lexicographicSortSchema": function() { return /* binding */ lexicographicSortSchema; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/naturalCompare.mjs */ "./node_modules/graphql/jsutils/naturalCompare.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * Sort GraphQLSchema.
 *
 * This function returns a sorted copy of the given GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLSchema(_objectSpread(_objectSpread({}, schemaConfig), {}, {
    types: (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isListType)(type)) {
      // $FlowFixMe[incompatible-return]
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLList(replaceType(type.ofType));
    } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isNonNullType)(type)) {
      // $FlowFixMe[incompatible-return]
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLNonNull(replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLDirective(_objectSpread(_objectSpread({}, config), {}, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread(_objectSpread({}, arg), {}, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread(_objectSpread({}, field), {}, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread(_objectSpread({}, field), {}, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isScalarType)(type) || (0,_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.isIntrospectionType)(type)) {
      return type;
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isObjectType)(type)) {
      var config = type.toConfig();
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLObjectType(_objectSpread(_objectSpread({}, config), {}, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isInterfaceType)(type)) {
      var _config = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLInterfaceType(_objectSpread(_objectSpread({}, _config), {}, {
        interfaces: function interfaces() {
          return sortTypes(_config.interfaces);
        },
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isUnionType)(type)) {
      var _config2 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLUnionType(_objectSpread(_objectSpread({}, _config2), {}, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isEnumType)(type)) {
      var _config3 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLEnumType(_objectSpread(_objectSpread({}, _config3), {}, {
        values: sortObjMap(_config3.values)
      }));
    } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isInputObjectType)(type)) {
      var _config4 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLInputObjectType(_objectSpread(_objectSpread({}, _config4), {}, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // istanbul ignore next (Not reachable. All possible types have been considered)


     false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(0, 'Unexpected type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(type));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return (0,_jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_8__.default)(key1, key2);
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/printSchema.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/printSchema.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printSchema": function() { return /* binding */ printSchema; },
/* harmony export */   "printIntrospectionSchema": function() { return /* binding */ printIntrospectionSchema; },
/* harmony export */   "printType": function() { return /* binding */ printType; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");











/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !(0,_type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__.isSpecifiedDirective)(n);
  }, isDefinedType, options);
}
function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__.isSpecifiedDirective, _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_1__.isIntrospectionType, options);
}

function isDefinedType(type) {
  return !(0,_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__.isSpecifiedScalarType)(type) && !(0,_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_1__.isIntrospectionType)(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var types = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(schema.getTypeMap()).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (schema.description == null && isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return printDescription({}, schema) + "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isScalarType)(type)) {
    return printScalar(type, options);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isObjectType)(type)) {
    return printObject(type, options);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isInterfaceType)(type)) {
    return printInterface(type, options);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isUnionType)(type)) {
    return printUnion(type, options);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isEnumType)(type)) {
    return printEnum(type, options);
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__.isInputObjectType)(type)) {
    return printInputObject(type, options);
  } // istanbul ignore next (Not reachable. All possible types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(0, 'Unexpected type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(type));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name) + printSpecifiedByUrl(type);
}

function printImplementedInterfaces(type) {
  var interfaces = type.getInterfaces();
  return interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
}

function printObject(type, options) {
  return printDescription(options, type) + "type ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
}

function printUnion(type, options) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(options, type) + 'union ' + type.name + possibleTypes;
}

function printEnum(type, options) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value.deprecationReason);
  });
  return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
}

function printInputObject(type, options) {
  var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
}

function printFields(options, type) {
  var fields = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f.deprecationReason);
  });
  return printBlock(fields);
}

function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var defaultAST = (0,_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_7__.astFromValue)(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);

  if (defaultAST) {
    argDecl += " = ".concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__.print)(defaultAST));
  }

  return argDecl + printDeprecated(arg.deprecationReason);
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + (directive.isRepeatable ? ' repeatable' : '') + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(reason) {
  if (reason == null) {
    return '';
  }

  var reasonAST = (0,_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_7__.astFromValue)(reason, _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLString);

  if (reasonAST && reason !== _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated(reason: ' + (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__.print)(reasonAST) + ')';
  }

  return ' @deprecated';
}

function printSpecifiedByUrl(scalar) {
  if (scalar.specifiedByUrl == null) {
    return '';
  }

  var url = scalar.specifiedByUrl;
  var urlAST = (0,_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_7__.astFromValue)(url, _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLString);
  urlAST || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(0, 'Unexpected null value returned from `astFromValue` for specifiedByUrl');
  return ' @specifiedBy(url: ' + (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_8__.print)(urlAST) + ')';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var description = def.description;

  if (description == null) {
    return '';
  }

  if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
    return printDescriptionWithComments(description, indentation, firstInBlock);
  }

  var preferMultipleLines = description.length > 70;
  var blockString = (0,_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_9__.printBlockString)(description, '', preferMultipleLines);
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}

function printDescriptionWithComments(description, indentation, firstInBlock) {
  var prefix = indentation && !firstInBlock ? '\n' : '';
  var comment = description.split('\n').map(function (line) {
    return indentation + (line !== '' ? '# ' + line : '#');
  }).join('\n');
  return prefix + comment + '\n';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/utilities/separateOperations.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "separateOperations": function() { return /* binding */ separateOperations; }
/* harmony export */ });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");


/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */

function separateOperations(documentAST) {
  var operations = [];
  var depGraph = Object.create(null); // Populate metadata and build a dependency graph.

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definitionNode = _documentAST$definiti2[_i2];

    switch (definitionNode.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION:
        operations.push(definitionNode);
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION:
        depGraph[definitionNode.name.value] = collectDependencies(definitionNode.selectionSet);
        break;
    }
  } // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.


  var separatedDocumentASTs = Object.create(null);

  var _loop = function _loop(_i4) {
    var operation = operations[_i4];
    var dependencies = new Set();

    for (var _i6 = 0, _collectDependencies2 = collectDependencies(operation.selectionSet); _i6 < _collectDependencies2.length; _i6++) {
      var fragmentName = _collectDependencies2[_i6];
      collectTransitiveDependencies(dependencies, depGraph, fragmentName);
    } // Provides the empty string for anonymous operations.


    var operationName = operation.name ? operation.name.value : ''; // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    separatedDocumentASTs[operationName] = {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.DOCUMENT,
      definitions: documentAST.definitions.filter(function (node) {
        return node === operation || node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION && dependencies.has(node.name.value);
      })
    };
  };

  for (var _i4 = 0; _i4 < operations.length; _i4++) {
    _loop(_i4);
  }

  return separatedDocumentASTs;
}

// From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.
function collectTransitiveDependencies(collected, depGraph, fromName) {
  if (!collected.has(fromName)) {
    collected.add(fromName);
    var immediateDeps = depGraph[fromName];

    if (immediateDeps !== undefined) {
      for (var _i8 = 0; _i8 < immediateDeps.length; _i8++) {
        var toName = immediateDeps[_i8];
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}

function collectDependencies(selectionSet) {
  var dependencies = [];
  (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__.visit)(selectionSet, {
    FragmentSpread: function FragmentSpread(node) {
      dependencies.push(node.name.value);
    }
  });
  return dependencies;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/utilities/stripIgnoredCharacters.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripIgnoredCharacters": function() { return /* binding */ stripIgnoredCharacters; }
/* harmony export */ });
/* harmony import */ var _language_source_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _language_lexer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");




/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 *
 * Becomes:
 *
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 *
 * SDL example:
 *
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 *
 * Becomes:
 *
 * """Type description""" type Foo{"""Field description""" bar:String}
 */

function stripIgnoredCharacters(source) {
  var sourceObj = (0,_language_source_mjs__WEBPACK_IMPORTED_MODULE_0__.isSource)(source) ? source : new _language_source_mjs__WEBPACK_IMPORTED_MODULE_0__.Source(source);
  var body = sourceObj.body;
  var lexer = new _language_lexer_mjs__WEBPACK_IMPORTED_MODULE_1__.Lexer(sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__.TokenKind.EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !(0,_language_lexer_mjs__WEBPACK_IMPORTED_MODULE_1__.isPunctuatorTokenKind)(currentToken.kind);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__.TokenKind.SPREAD) {
        strippedBody += ' ';
      }
    }

    var tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__.TokenKind.BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}

function dedentBlockString(blockStr) {
  // skip leading and trailing triple quotations
  var rawStr = blockStr.slice(3, -3);
  var body = (0,_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__.dedentBlockStringValue)(rawStr);

  if ((0,_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_3__.getBlockStringIndentation)(body) > 0) {
    body = '\n' + body;
  }

  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';

  if (hasTrailingQuote || lastChar === '\\') {
    body += '\n';
  }

  return '"""' + body + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/typeComparators.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEqualType": function() { return /* binding */ isEqualType; },
/* harmony export */   "isTypeSubTypeOf": function() { return /* binding */ isTypeSubTypeOf; },
/* harmony export */   "doTypesOverlap": function() { return /* binding */ doTypesOverlap; }
/* harmony export */ });
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");

/**
 * Provided two types, return true if the types are equal (invariant).
 */

function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(typeA) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(typeA) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(superType)) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(superType)) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, check if it is super type of maybeSubType.
  // Otherwise, the child type is not a valid subtype of the parent type.


  return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isAbstractType)(superType) && ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInterfaceType)(maybeSubType) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isObjectType)(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isAbstractType)(typeA)) {
    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isAbstractType)(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isSubType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isSubType(typeA, typeB);
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isAbstractType)(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isSubType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/typeFromAST.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeFromAST": function() { return /* binding */ typeFromAST; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");




/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */

/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLList(innerType);
  }

  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLNonNull(innerType);
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // istanbul ignore next (Not reachable. All possible type nodes have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(0, 'Unexpected type node: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(typeNode));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromAST.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueFromAST": function() { return /* binding */ valueFromAST; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");






/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE) {
    var variableName = valueNode.name.value;

    if (variables == null || variables[variableName] === undefined) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNonNullType)(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNonNullType)(type)) {
    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isListType)(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST) {
      var coercedValues = [];

      for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
        var itemNode = _valueNode$values2[_i2];

        if (isMissingVariable(itemNode, variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNonNullType)(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNode, itemType, variables);

          if (itemValue === undefined) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if (coercedValue === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInputObjectType)(type)) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(valueNode.fields, function (field) {
      return field.name.value;
    });

    for (var _i4 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isNonNullType)(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if (fieldValue === undefined) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isLeafType)(type)) {
    // Scalars and Enums fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (result === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  } // istanbul ignore next (Not reachable. All possible input types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(0, 'Unexpected input type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === undefined);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valueFromASTUntyped": function() { return /* binding */ valueFromASTUntyped; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");





/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.NULL:
      return null;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.STRING:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.ENUM:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.BOOLEAN:
      return valueNode.value;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OBJECT:
      return (0,_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  } // istanbul ignore next (Not reachable. All possible value nodes have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(0, 'Unexpected value node: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(valueNode));
}


/***/ }),

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/validation/ValidationContext.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASTValidationContext": function() { return /* binding */ ASTValidationContext; },
/* harmony export */   "SDLValidationContext": function() { return /* binding */ SDLValidationContext; },
/* harmony export */   "ValidationContext": function() { return /* binding */ ValidationContext; }
/* harmony export */ });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext = /*#__PURE__*/function () {
  function ASTValidationContext(ast, onError) {
    this._ast = ast;
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._onError = onError;
  }

  var _proto = ASTValidationContext.prototype;

  _proto.reportError = function reportError(error) {
    this._onError(error);
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var _i2 = 0, _set$selections2 = set.selections; _i2 < _set$selections2.length; _i2++) {
          var selection = _set$selections2[_i2];

          if (selection.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var node = nodesToVisit.pop();

        for (var _i4 = 0, _this$getFragmentSpre2 = this.getFragmentSpreads(node); _i4 < _this$getFragmentSpre2.length; _i4++) {
          var spread = _this$getFragmentSpre2[_i4];
          var fragName = spread.name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  return ASTValidationContext;
}();
var SDLValidationContext = /*#__PURE__*/function (_ASTValidationContext) {
  _inheritsLoose(SDLValidationContext, _ASTValidationContext);

  function SDLValidationContext(ast, schema, onError) {
    var _this;

    _this = _ASTValidationContext.call(this, ast, onError) || this;
    _this._schema = schema;
    return _this;
  }

  var _proto2 = SDLValidationContext.prototype;

  _proto2.getSchema = function getSchema() {
    return this._schema;
  };

  return SDLValidationContext;
}(ASTValidationContext);
var ValidationContext = /*#__PURE__*/function (_ASTValidationContext2) {
  _inheritsLoose(ValidationContext, _ASTValidationContext2);

  function ValidationContext(schema, ast, typeInfo, onError) {
    var _this2;

    _this2 = _ASTValidationContext2.call(this, ast, onError) || this;
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }

  var _proto3 = ValidationContext.prototype;

  _proto3.getSchema = function getSchema() {
    return this._schema;
  };

  _proto3.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__.TypeInfo(this._schema);
      (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__.visit)(node, (0,_utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__.visitWithTypeInfo)(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);

      for (var _i6 = 0, _this$getRecursivelyR2 = this.getRecursivelyReferencedFragments(operation); _i6 < _this$getRecursivelyR2.length; _i6++) {
        var frag = _this$getRecursivelyR2[_i6];
        usages = usages.concat(this.getVariableUsages(frag));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto3.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto3.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto3.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto3.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto3.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto3.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto3.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  _proto3.getEnumValue = function getEnumValue() {
    return this._typeInfo.getEnumValue();
  };

  return ValidationContext;
}(ASTValidationContext);


/***/ }),

/***/ "./node_modules/graphql/validation/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/validation/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* reexport safe */ _validate_mjs__WEBPACK_IMPORTED_MODULE_0__.validate; },
/* harmony export */   "ValidationContext": function() { return /* reexport safe */ _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_1__.ValidationContext; },
/* harmony export */   "specifiedRules": function() { return /* reexport safe */ _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_2__.specifiedRules; },
/* harmony export */   "ExecutableDefinitionsRule": function() { return /* reexport safe */ _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__.ExecutableDefinitionsRule; },
/* harmony export */   "FieldsOnCorrectTypeRule": function() { return /* reexport safe */ _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_4__.FieldsOnCorrectTypeRule; },
/* harmony export */   "FragmentsOnCompositeTypesRule": function() { return /* reexport safe */ _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__.FragmentsOnCompositeTypesRule; },
/* harmony export */   "KnownArgumentNamesRule": function() { return /* reexport safe */ _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_6__.KnownArgumentNamesRule; },
/* harmony export */   "KnownDirectivesRule": function() { return /* reexport safe */ _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_7__.KnownDirectivesRule; },
/* harmony export */   "KnownFragmentNamesRule": function() { return /* reexport safe */ _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_8__.KnownFragmentNamesRule; },
/* harmony export */   "KnownTypeNamesRule": function() { return /* reexport safe */ _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__.KnownTypeNamesRule; },
/* harmony export */   "LoneAnonymousOperationRule": function() { return /* reexport safe */ _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_10__.LoneAnonymousOperationRule; },
/* harmony export */   "NoFragmentCyclesRule": function() { return /* reexport safe */ _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_11__.NoFragmentCyclesRule; },
/* harmony export */   "NoUndefinedVariablesRule": function() { return /* reexport safe */ _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_12__.NoUndefinedVariablesRule; },
/* harmony export */   "NoUnusedFragmentsRule": function() { return /* reexport safe */ _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_13__.NoUnusedFragmentsRule; },
/* harmony export */   "NoUnusedVariablesRule": function() { return /* reexport safe */ _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_14__.NoUnusedVariablesRule; },
/* harmony export */   "OverlappingFieldsCanBeMergedRule": function() { return /* reexport safe */ _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_15__.OverlappingFieldsCanBeMergedRule; },
/* harmony export */   "PossibleFragmentSpreadsRule": function() { return /* reexport safe */ _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_16__.PossibleFragmentSpreadsRule; },
/* harmony export */   "ProvidedRequiredArgumentsRule": function() { return /* reexport safe */ _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_17__.ProvidedRequiredArgumentsRule; },
/* harmony export */   "ScalarLeafsRule": function() { return /* reexport safe */ _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_18__.ScalarLeafsRule; },
/* harmony export */   "SingleFieldSubscriptionsRule": function() { return /* reexport safe */ _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_19__.SingleFieldSubscriptionsRule; },
/* harmony export */   "UniqueArgumentNamesRule": function() { return /* reexport safe */ _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__.UniqueArgumentNamesRule; },
/* harmony export */   "UniqueDirectivesPerLocationRule": function() { return /* reexport safe */ _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_21__.UniqueDirectivesPerLocationRule; },
/* harmony export */   "UniqueFragmentNamesRule": function() { return /* reexport safe */ _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_22__.UniqueFragmentNamesRule; },
/* harmony export */   "UniqueInputFieldNamesRule": function() { return /* reexport safe */ _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_23__.UniqueInputFieldNamesRule; },
/* harmony export */   "UniqueOperationNamesRule": function() { return /* reexport safe */ _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_24__.UniqueOperationNamesRule; },
/* harmony export */   "UniqueVariableNamesRule": function() { return /* reexport safe */ _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__.UniqueVariableNamesRule; },
/* harmony export */   "ValuesOfCorrectTypeRule": function() { return /* reexport safe */ _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_26__.ValuesOfCorrectTypeRule; },
/* harmony export */   "VariablesAreInputTypesRule": function() { return /* reexport safe */ _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__.VariablesAreInputTypesRule; },
/* harmony export */   "VariablesInAllowedPositionRule": function() { return /* reexport safe */ _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_28__.VariablesInAllowedPositionRule; },
/* harmony export */   "LoneSchemaDefinitionRule": function() { return /* reexport safe */ _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_29__.LoneSchemaDefinitionRule; },
/* harmony export */   "UniqueOperationTypesRule": function() { return /* reexport safe */ _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_30__.UniqueOperationTypesRule; },
/* harmony export */   "UniqueTypeNamesRule": function() { return /* reexport safe */ _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__.UniqueTypeNamesRule; },
/* harmony export */   "UniqueEnumValueNamesRule": function() { return /* reexport safe */ _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_32__.UniqueEnumValueNamesRule; },
/* harmony export */   "UniqueFieldDefinitionNamesRule": function() { return /* reexport safe */ _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_33__.UniqueFieldDefinitionNamesRule; },
/* harmony export */   "UniqueDirectiveNamesRule": function() { return /* reexport safe */ _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_34__.UniqueDirectiveNamesRule; },
/* harmony export */   "PossibleTypeExtensionsRule": function() { return /* reexport safe */ _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_35__.PossibleTypeExtensionsRule; },
/* harmony export */   "NoDeprecatedCustomRule": function() { return /* reexport safe */ _rules_custom_NoDeprecatedCustomRule_mjs__WEBPACK_IMPORTED_MODULE_36__.NoDeprecatedCustomRule; },
/* harmony export */   "NoSchemaIntrospectionCustomRule": function() { return /* reexport safe */ _rules_custom_NoSchemaIntrospectionCustomRule_mjs__WEBPACK_IMPORTED_MODULE_37__.NoSchemaIntrospectionCustomRule; }
/* harmony export */ });
/* harmony import */ var _validate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationContext.mjs */ "./node_modules/graphql/validation/ValidationContext.mjs");
/* harmony import */ var _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specifiedRules.mjs */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony import */ var _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/ExecutableDefinitionsRule.mjs */ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs");
/* harmony import */ var _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/FieldsOnCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs");
/* harmony import */ var _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypesRule.mjs */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs");
/* harmony import */ var _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/KnownArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs");
/* harmony import */ var _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/KnownDirectivesRule.mjs */ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs");
/* harmony import */ var _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/KnownFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs");
/* harmony import */ var _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/KnownTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs");
/* harmony import */ var _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/LoneAnonymousOperationRule.mjs */ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs");
/* harmony import */ var _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoFragmentCyclesRule.mjs */ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs");
/* harmony import */ var _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/NoUndefinedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs");
/* harmony import */ var _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoUnusedFragmentsRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs");
/* harmony import */ var _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/NoUnusedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs");
/* harmony import */ var _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMergedRule.mjs */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs");
/* harmony import */ var _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreadsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs");
/* harmony import */ var _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/ProvidedRequiredArgumentsRule.mjs */ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs");
/* harmony import */ var _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/ScalarLeafsRule.mjs */ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs");
/* harmony import */ var _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptionsRule.mjs */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs");
/* harmony import */ var _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs");
/* harmony import */ var _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocationRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs");
/* harmony import */ var _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/UniqueFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs");
/* harmony import */ var _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/UniqueInputFieldNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs");
/* harmony import */ var _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/UniqueOperationNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs");
/* harmony import */ var _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueVariableNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs");
/* harmony import */ var _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/ValuesOfCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs");
/* harmony import */ var _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/VariablesAreInputTypesRule.mjs */ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs");
/* harmony import */ var _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/VariablesInAllowedPositionRule.mjs */ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs");
/* harmony import */ var _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/LoneSchemaDefinitionRule.mjs */ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs");
/* harmony import */ var _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueOperationTypesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs");
/* harmony import */ var _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs");
/* harmony import */ var _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/UniqueEnumValueNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs");
/* harmony import */ var _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs");
/* harmony import */ var _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rules/UniqueDirectiveNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs");
/* harmony import */ var _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rules/PossibleTypeExtensionsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs");
/* harmony import */ var _rules_custom_NoDeprecatedCustomRule_mjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./rules/custom/NoDeprecatedCustomRule.mjs */ "./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs");
/* harmony import */ var _rules_custom_NoSchemaIntrospectionCustomRule_mjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./rules/custom/NoSchemaIntrospectionCustomRule.mjs */ "./node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs");


// All validation rules in the GraphQL Specification.
 // Spec Section: "Executable Definitions"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Argument Names"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "All Variables Used"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Argument Optionality"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Input Object Field Uniqueness"

 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "Values Type Correctness"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "All Variable Usages Are Allowed"

 // SDL-specific validation rules







 // Optional rules not defined by the GraphQL Specification





/***/ }),

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecutableDefinitionsRule": function() { return /* binding */ ExecutableDefinitionsRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");




/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */
function ExecutableDefinitionsRule(context) {
  return {
    Document: function Document(node) {
      for (var _i2 = 0, _node$definitions2 = node.definitions; _i2 < _node$definitions2.length; _i2++) {
        var definition = _node$definitions2[_i2];

        if (!(0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__.isExecutableDefinitionNode)(definition)) {
          var defName = definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_DEFINITION || definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_EXTENSION ? 'schema' : '"' + definition.name.value + '"';
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("The ".concat(defName, " definition is not executable."), definition));
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldsOnCorrectTypeRule": function() { return /* binding */ FieldsOnCorrectTypeRule; }
/* harmony export */ });
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jsutils/naturalCompare.mjs */ "./node_modules/graphql/jsutils/naturalCompare.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");







/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */
function FieldsOnCorrectTypeRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestion = (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__.default)('to use an inline fragment on', getSuggestedTypeNames(schema, type, fieldName)); // If there are no suggested types, then perhaps this was a typo?

          if (suggestion === '') {
            suggestion = (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(getSuggestedFieldNames(type, fieldName));
          } // Report an error, including helpful suggestions.


          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Cannot query field \"".concat(fieldName, "\" on type \"").concat(type.name, "\".") + suggestion, node));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest them,
 * sorted by how often the type is referenced.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isAbstractType)(type)) {
    // Must be an Object type, which does not have possible fields.
    return [];
  }

  var suggestedTypes = new Set();
  var usageCount = Object.create(null);

  for (var _i2 = 0, _schema$getPossibleTy2 = schema.getPossibleTypes(type); _i2 < _schema$getPossibleTy2.length; _i2++) {
    var possibleType = _schema$getPossibleTy2[_i2];

    if (!possibleType.getFields()[fieldName]) {
      continue;
    } // This object type defines this field.


    suggestedTypes.add(possibleType);
    usageCount[possibleType.name] = 1;

    for (var _i4 = 0, _possibleType$getInte2 = possibleType.getInterfaces(); _i4 < _possibleType$getInte2.length; _i4++) {
      var _usageCount$possibleI;

      var possibleInterface = _possibleType$getInte2[_i4];

      if (!possibleInterface.getFields()[fieldName]) {
        continue;
      } // This interface type defines this field.


      suggestedTypes.add(possibleInterface);
      usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
    }
  }

  return (0,_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(suggestedTypes).sort(function (typeA, typeB) {
    // Suggest both interface and object types based on how common they are.
    var usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];

    if (usageCountDiff !== 0) {
      return usageCountDiff;
    } // Suggest super types first followed by subtypes


    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(typeA) && schema.isSubType(typeA, typeB)) {
      return -1;
    }

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(typeB) && schema.isSubType(typeB, typeA)) {
      return 1;
    }

    return (0,_jsutils_naturalCompare_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(typeA.name, typeB.name);
  }).map(function (x) {
    return x.name;
  });
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(type, fieldName) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(type) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FragmentsOnCompositeTypesRule": function() { return /* binding */ FragmentsOnCompositeTypesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");





/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
function FragmentsOnCompositeTypesRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__.typeFromAST)(context.getSchema(), typeCondition);

        if (type && !(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isCompositeType)(type)) {
          var typeStr = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_2__.print)(typeCondition);
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Fragment cannot condition on non composite type \"".concat(typeStr, "\"."), typeCondition));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__.typeFromAST)(context.getSchema(), node.typeCondition);

      if (type && !(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isCompositeType)(type)) {
        var typeStr = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_2__.print)(node.typeCondition);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Fragment \"".concat(node.name.value, "\" cannot condition on non composite type \"").concat(typeStr, "\"."), node.typeCondition));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnownArgumentNamesRule": function() { return /* binding */ KnownArgumentNamesRule; },
/* harmony export */   "KnownArgumentNamesOnDirectivesRule": function() { return /* binding */ KnownArgumentNamesOnDirectivesRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
function KnownArgumentNamesRule(context) {
  return _objectSpread(_objectSpread({}, KnownArgumentNamesOnDirectivesRule(context)), {}, {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        var suggestions = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(argName, knownArgsNames);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Unknown argument \"".concat(argName, "\" on field \"").concat(parentType.name, ".").concat(fieldDef.name, "\".") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(suggestions), argNode));
      }
    }
  });
}
/**
 * @internal
 */

function KnownArgumentNamesOnDirectivesRule(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_3__.specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    directiveArgs[directive.name] = directive.args.map(function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.DIRECTIVE_DEFINITION) {
      var _def$arguments;

      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      directiveArgs[def.name.value] = argsNodes.map(function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        for (var _i6 = 0, _directiveNode$argume2 = directiveNode.arguments; _i6 < _directiveNode$argume2.length; _i6++) {
          var argNode = _directiveNode$argume2[_i6];
          var argName = argNode.name.value;

          if (knownArgs.indexOf(argName) === -1) {
            var suggestions = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(argName, knownArgs);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(suggestions), argNode));
          }
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnownDirectivesRule": function() { return /* binding */ KnownDirectivesRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");







/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
function KnownDirectivesRule(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__.specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    locationsMap[directive.name] = directive.locations;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map(function (name) {
        return name.value;
      });
    }
  }

  return {
    Directive: function Directive(node, _key, _parent, _path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];

      if (!locations) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Unknown directive \"@".concat(name, "\"."), node));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Directive \"@".concat(name, "\" may not be used on ").concat(candidateLocation, "."), node));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];
  !Array.isArray(appliedTo) || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0);

  switch (appliedTo.kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.FIELD;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_SPREAD:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.FRAGMENT_SPREAD;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INLINE_FRAGMENT:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.INLINE_FRAGMENT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FRAGMENT_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.FRAGMENT_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.VARIABLE_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.VARIABLE_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.SCHEMA;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCALAR_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCALAR_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.SCALAR;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.OBJECT_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.OBJECT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.FIELD_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.FIELD_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INTERFACE_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INTERFACE_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.INTERFACE;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.UNION_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.UNION_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.UNION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.ENUM;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.ENUM_VALUE_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.ENUM_VALUE;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.INPUT_OBJECT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INPUT_VALUE_DEFINITION:
      {
        var parentNode = ancestors[ancestors.length - 3];
        return parentNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.INPUT_OBJECT_TYPE_DEFINITION ? _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.INPUT_FIELD_DEFINITION : _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.ARGUMENT_DEFINITION;
      }
  }
}

function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case 'query':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.QUERY;

    case 'mutation':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.MUTATION;

    case 'subscription':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__.DirectiveLocation.SUBSCRIPTION;
  } // istanbul ignore next (Not reachable. All possible types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(0, 'Unexpected operation: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(operation));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnownFragmentNamesRule": function() { return /* binding */ KnownFragmentNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */
function KnownFragmentNamesRule(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Unknown fragment \"".concat(fragmentName, "\"."), node.name));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnownTypeNamesRule": function() { return /* binding */ KnownTypeNamesRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");







/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
function KnownTypeNamesRule(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__.isTypeDefinitionNode)(def)) {
      definedTypes[def.name.value] = true;
    }
  }

  var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var _ancestors$;

        var definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
        var isSDL = definitionNode != null && isSDLNode(definitionNode);

        if (isSDL && isStandardTypeName(typeName)) {
          return;
        }

        var suggestedTypes = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(typeName, isSDL ? standardTypeNames.concat(typeNames) : typeNames);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Unknown type \"".concat(typeName, "\".") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(suggestedTypes), node));
      }
    }
  };
}
var standardTypeNames = [].concat(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__.specifiedScalarTypes, _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__.introspectionTypes).map(function (type) {
  return type.name;
});

function isStandardTypeName(typeName) {
  return standardTypeNames.indexOf(typeName) !== -1;
}

function isSDLNode(value) {
  return !Array.isArray(value) && ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__.isTypeSystemDefinitionNode)(value) || (0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__.isTypeSystemExtensionNode)(value));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoneAnonymousOperationRule": function() { return /* binding */ LoneAnonymousOperationRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");



/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
function LoneAnonymousOperationRule(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__.Kind.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError('This anonymous operation must be the only defined operation.', node));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoneSchemaDefinitionRule": function() { return /* binding */ LoneSchemaDefinitionRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */
function LoneSchemaDefinitionRule(context) {
  var _ref, _ref2, _oldSchema$astNode;

  var oldSchema = context.getSchema();
  var alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Cannot define a new schema within a schema extension.', node));
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError('Must provide only one schema definition.', node));
      }

      ++schemaDefinitionsCount;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoFragmentCyclesRule": function() { return /* binding */ NoFragmentCyclesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

function NoFragmentCyclesRule(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }

    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var _i2 = 0; _i2 < spreadNodes.length; _i2++) {
      var spreadNode = spreadNodes[_i2];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);

      if (cycleIndex === undefined) {
        var spreadFragment = context.getFragment(spreadName);

        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        var viaPath = cyclePath.slice(0, -1).map(function (s) {
          return '"' + s.name.value + '"';
        }).join(', ');
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Cannot spread fragment \"".concat(spreadName, "\" within itself") + (viaPath !== '' ? " via ".concat(viaPath, ".") : '.'), cyclePath));
      }

      spreadPath.pop();
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoUndefinedVariablesRule": function() { return /* binding */ NoUndefinedVariablesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
function NoUndefinedVariablesRule(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(operation.name ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(varName, "\" is not defined."), [node, operation]));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoUnusedFragmentsRule": function() { return /* binding */ NoUnusedFragmentsRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */
function NoUnusedFragmentsRule(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);

        for (var _i2 = 0; _i2 < operationDefs.length; _i2++) {
          var operation = operationDefs[_i2];

          for (var _i4 = 0, _context$getRecursive2 = context.getRecursivelyReferencedFragments(operation); _i4 < _context$getRecursive2.length; _i4++) {
            var fragment = _context$getRecursive2[_i4];
            fragmentNameUsed[fragment.name.value] = true;
          }
        }

        for (var _i6 = 0; _i6 < fragmentDefs.length; _i6++) {
          var fragmentDef = fragmentDefs[_i6];
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Fragment \"".concat(fragName, "\" is never used."), fragmentDef));
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoUnusedVariablesRule": function() { return /* binding */ NoUnusedVariablesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */
function NoUnusedVariablesRule(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          variableNameUsed[node.name.value] = true;
        }

        for (var _i4 = 0, _variableDefs2 = variableDefs; _i4 < _variableDefs2.length; _i4++) {
          var variableDef = _variableDefs2[_i4];
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(operation.name ? "Variable \"$".concat(variableName, "\" is never used in operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(variableName, "\" is never used."), variableDef));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlappingFieldsCanBeMergedRule": function() { return /* binding */ OverlappingFieldsCanBeMergedRule; }
/* harmony export */ });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");









function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subReason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ") + reasonMessage(subReason);
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMergedRule(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);

      for (var _i2 = 0; _i2 < conflicts.length; _i2++) {
        var _ref3 = conflicts[_i2];
        var _ref2$ = _ref3[0];
        var responseName = _ref2$[0];
        var reason = _ref2$[1];
        var fields1 = _ref3[1];
        var fields2 = _ref3[2];
        var reasonMsg = reasonMessage(reason);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Fields \"".concat(responseName, "\" conflict because ").concat(reasonMsg, ". Use different aliases on the fields to fetch both if this was intentional."), fields1.concat(fields2)));
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i3 = 0; _i3 < fragmentNames1.length; _i3++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i3], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  for (var _i5 = 0, _objectEntries2 = (0,_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(fieldMap); _i5 < _objectEntries2.length; _i5++) {
    var _ref5 = _objectEntries2[_i5];
    var responseName = _ref5[0];
    var fields = _ref5[1];

    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i7 = 0, _Object$keys2 = Object.keys(fieldMap1); _i7 < _Object$keys2.length; _i7++) {
    var responseName = _Object$keys2[_i7];
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(parentType1) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(parentType2);

  if (!areMutuallyExclusive) {
    var _node1$arguments, _node2$arguments;

    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "\"".concat(name1, "\" and \"").concat(name2, "\" are different fields")], [node1], [node2]];
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')


    var args1 = (_node1$arguments = node1.arguments) !== null && _node1$arguments !== void 0 ? _node1$arguments : []; // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')

    var args2 = (_node2$arguments = node2.arguments) !== null && _node2$arguments !== void 0 ? _node2$arguments : []; // Two field calls must have the same arguments.

    if (!sameArguments(args1, args2)) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  } // The return type for each field.


  var type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
  var type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types \"".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type1), "\" and \"").concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type2), "\"")], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.getNamedType)(type1), selectionSet1, (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.getNamedType)(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = (0,_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_4__.default)(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(value1) === (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__.print)(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isListType)(type1)) {
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isListType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isListType)(type2)) {
    return true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(type1)) {
    return (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isNonNullType)(type2)) {
    return true;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isLeafType)(type1) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isLeafType)(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__.typeFromAST)(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var _i9 = 0, _selectionSet$selecti2 = selectionSet.selections; _i9 < _selectionSet$selecti2.length; _i9++) {
    var selection = _selectionSet$selecti2[_i9];

    switch (selection.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__.Kind.FIELD:
        {
          var fieldName = selection.name.value;
          var fieldDef = void 0;

          if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isObjectType)(parentType) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType)(parentType)) {
            fieldDef = parentType.getFields()[fieldName];
          }

          var responseName = selection.alias ? selection.alias.value : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__.Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__.Kind.INLINE_FRAGMENT:
        {
          var typeCondition = selection.typeCondition;
          var inlineFragmentType = typeCondition ? (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__.typeFromAST)(context.getSchema(), typeCondition) : parentType;

          _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

          break;
        }
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref6) {
      var reason = _ref6[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref7) {
      var fields1 = _ref7[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref8) {
      var fields2 = _ref8[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet = /*#__PURE__*/function () {
  function PairSet() {
    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    this._pairSetAdd(a, b, areMutuallyExclusive);

    this._pairSetAdd(b, a, areMutuallyExclusive);
  };

  _proto._pairSetAdd = function _pairSetAdd(a, b, areMutuallyExclusive) {
    var map = this._data[a];

    if (!map) {
      map = Object.create(null);
      this._data[a] = map;
    }

    map[b] = areMutuallyExclusive;
  };

  return PairSet;
}();


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PossibleFragmentSpreadsRule": function() { return /* binding */ PossibleFragmentSpreadsRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");






/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreadsRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(fragType) && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(parentType) && !(0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_1__.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(parentType);
        var fragTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(fragType);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Fragment cannot be spread here as objects of type \"".concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !(0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_1__.doTypesOverlap)(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(parentType);
        var fragTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(fragType);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__.typeFromAST)(context.getSchema(), frag.typeCondition);

    if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isCompositeType)(type)) {
      return type;
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PossibleTypeExtensionsRule": function() { return /* binding */ PossibleTypeExtensionsRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
var _defKindToExtKind;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */
function PossibleTypeExtensionsRule(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_0__.isTypeDefinitionNode)(def)) {
      definedTypes[def.name.value] = def;
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };

  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
    var expectedKind;

    if (defNode) {
      expectedKind = defKindToExtKind[defNode.kind];
    } else if (existingType) {
      expectedKind = typeToExtKind(existingType);
    }

    if (expectedKind) {
      if (expectedKind !== node.kind) {
        var kindStr = extensionKindToTypeName(node.kind);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Cannot extend non-".concat(kindStr, " type \"").concat(typeName, "\"."), defNode ? [defNode, node] : node));
      }
    } else {
      var allTypeNames = Object.keys(definedTypes);

      if (schema) {
        allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
      }

      var suggestedTypes = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(typeName, allTypeNames);
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Cannot extend type \"".concat(typeName, "\" because it is not defined.") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(suggestedTypes), node.name));
    }
  }
}
var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.SCALAR_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.SCALAR_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.OBJECT_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.OBJECT_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INTERFACE_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INTERFACE_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.UNION_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.UNION_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.ENUM_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.ENUM_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INPUT_OBJECT_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);

function typeToExtKind(type) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isScalarType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.SCALAR_TYPE_EXTENSION;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isObjectType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.OBJECT_TYPE_EXTENSION;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isInterfaceType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INTERFACE_TYPE_EXTENSION;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isUnionType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.UNION_TYPE_EXTENSION;
  }

  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isEnumType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.ENUM_TYPE_EXTENSION;
  } // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2618')


  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isInputObjectType)(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INPUT_OBJECT_TYPE_EXTENSION;
  } // istanbul ignore next (Not reachable. All possible types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(0, 'Unexpected type: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(type));
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.OBJECT_TYPE_EXTENSION:
      return 'object';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.UNION_TYPE_EXTENSION:
      return 'union';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.ENUM_TYPE_EXTENSION:
      return 'enum';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';
  } // istanbul ignore next (Not reachable. All possible types have been considered)


   false || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(0, 'Unexpected kind: ' + (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_7__.default)(kind));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvidedRequiredArgumentsRule": function() { return /* binding */ ProvidedRequiredArgumentsRule; },
/* harmony export */   "ProvidedRequiredArgumentsOnDirectivesRule": function() { return /* binding */ ProvidedRequiredArgumentsOnDirectivesRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */
function ProvidedRequiredArgumentsRule(context) {
  return _objectSpread(_objectSpread({}, ProvidedRequiredArgumentsOnDirectivesRule(context)), {}, {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var _fieldNode$arguments;

        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')


        var argNodes = (_fieldNode$arguments = fieldNode.arguments) !== null && _fieldNode$arguments !== void 0 ? _fieldNode$arguments : [];
        var argNodeMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(argNodes, function (arg) {
          return arg.name.value;
        });

        for (var _i2 = 0, _fieldDef$args2 = fieldDef.args; _i2 < _fieldDef$args2.length; _i2++) {
          var argDef = _fieldDef$args2[_i2];
          var argNode = argNodeMap[argDef.name];

          if (!argNode && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isRequiredArgument)(argDef)) {
            var argTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(argDef.type);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Field \"".concat(fieldDef.name, "\" argument \"").concat(argDef.name, "\" of type \"").concat(argTypeStr, "\" is required, but it was not provided."), fieldNode));
          }
        }
      }
    }
  });
}
/**
 * @internal
 */

function ProvidedRequiredArgumentsOnDirectivesRule(context) {
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__.specifiedDirectives;

  for (var _i4 = 0; _i4 < definedDirectives.length; _i4++) {
    var directive = definedDirectives[_i4];
    requiredArgsMap[directive.name] = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(directive.args.filter(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isRequiredArgument), function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i6 = 0; _i6 < astDefinitions.length; _i6++) {
    var def = astDefinitions[_i6];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__.Kind.DIRECTIVE_DEFINITION) {
      var _def$arguments;

      // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
      var argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      requiredArgsMap[def.name.value] = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(argNodes.filter(isRequiredArgumentNode), function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];

        if (requiredArgs) {
          var _directiveNode$argume;

          // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
          var _argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];

          var argNodeMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(_argNodes, function (arg) {
            return arg.name.value;
          });

          for (var _i8 = 0, _Object$keys2 = Object.keys(requiredArgs); _i8 < _Object$keys2.length; _i8++) {
            var argName = _Object$keys2[_i8];

            if (!argNodeMap[argName]) {
              var argType = requiredArgs[argName].type;
              var argTypeStr = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isType)(argType) ? (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(argType) : (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__.print)(argType);
              context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type \"").concat(argTypeStr, "\" is required, but it was not provided."), directiveNode));
            }
          }
        }
      }
    }
  };
}

function isRequiredArgumentNode(arg) {
  return arg.type.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__.Kind.NON_NULL_TYPE && arg.defaultValue == null;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScalarLeafsRule": function() { return /* binding */ ScalarLeafsRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");




/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafsRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isLeafType)((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(type))) {
          if (selectionSet) {
            var fieldName = node.name.value;
            var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Field \"".concat(fieldName, "\" must not have a selection since type \"").concat(typeStr, "\" has no subfields."), selectionSet));
          }
        } else if (!selectionSet) {
          var _fieldName = node.name.value;

          var _typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type);

          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Field \"".concat(_fieldName, "\" of type \"").concat(_typeStr, "\" must have a selection of subfields. Did you mean \"").concat(_fieldName, " { ... }\"?"), node));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleFieldSubscriptionsRule": function() { return /* binding */ SingleFieldSubscriptionsRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
function SingleFieldSubscriptionsRule(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError(node.name ? "Subscription \"".concat(node.name.value, "\" must select only one top level field.") : 'Anonymous Subscription must select only one top level field.', node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueArgumentNamesRule": function() { return /* binding */ UniqueArgumentNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
function UniqueArgumentNamesRule(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one argument named \"".concat(argName, "\"."), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueDirectiveNamesRule": function() { return /* binding */ UniqueDirectiveNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
function UniqueDirectiveNamesRule(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;

      if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Directive \"@".concat(directiveName, "\" already exists in the schema. It cannot be redefined."), node.name));
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one directive named \"@".concat(directiveName, "\"."), [knownDirectiveNames[directiveName], node.name]));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueDirectivesPerLocationRule": function() { return /* binding */ UniqueDirectivesPerLocationRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");





/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 */
function UniqueDirectivesPerLocationRule(context) {
  var uniqueDirectiveMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_0__.specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }

  var schemaDirectives = Object.create(null);
  var typeDirectivesMap = Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      if (node.directives == null) {
        return;
      }

      var seenDirectives;

      if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_DEFINITION || node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__.Kind.SCHEMA_EXTENSION) {
        seenDirectives = schemaDirectives;
      } else if ((0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__.isTypeDefinitionNode)(node) || (0,_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__.isTypeExtensionNode)(node)) {
        var typeName = node.name.value;
        seenDirectives = typeDirectivesMap[typeName];

        if (seenDirectives === undefined) {
          typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
        }
      } else {
        seenDirectives = Object.create(null);
      }

      for (var _i6 = 0, _node$directives2 = node.directives; _i6 < _node$directives2.length; _i6++) {
        var _directive = _node$directives2[_i6];
        var directiveName = _directive.name.value;

        if (uniqueDirectiveMap[directiveName]) {
          if (seenDirectives[directiveName]) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("The directive \"@".concat(directiveName, "\" can only be used once at this location."), [seenDirectives[directiveName], _directive]));
          } else {
            seenDirectives[directiveName] = _directive;
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueEnumValueNamesRule": function() { return /* binding */ UniqueEnumValueNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");



/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */
function UniqueEnumValueNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };

  function checkValueUniqueness(node) {
    var _node$values;

    var typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')


    var valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
    var valueNames = knownValueNames[typeName];

    for (var _i2 = 0; _i2 < valueNodes.length; _i2++) {
      var valueDef = valueNodes[_i2];
      var valueName = valueDef.name.value;
      var existingType = existingTypeMap[typeName];

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isEnumType)(existingType) && existingType.getValue(valueName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. It cannot also be defined in this type extension."), valueDef.name));
      } else if (valueNames[valueName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once."), [valueNames[valueName], valueDef.name]));
      } else {
        valueNames[valueName] = valueDef.name;
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueFieldDefinitionNamesRule": function() { return /* binding */ UniqueFieldDefinitionNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");



/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */
function UniqueFieldDefinitionNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };

  function checkFieldUniqueness(node) {
    var _node$fields;

    var typeName = node.name.value;

    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')


    var fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
    var fieldNames = knownFieldNames[typeName];

    for (var _i2 = 0; _i2 < fieldNodes.length; _i2++) {
      var fieldDef = fieldNodes[_i2];
      var fieldName = fieldDef.name.value;

      if (hasField(existingTypeMap[typeName], fieldName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. It cannot also be defined in this type extension."), fieldDef.name));
      } else if (fieldNames[fieldName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once."), [fieldNames[fieldName], fieldDef.name]));
      } else {
        fieldNames[fieldName] = fieldDef.name;
      }
    }

    return false;
  }
}

function hasField(type, fieldName) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isObjectType)(type) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInterfaceType)(type) || (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInputObjectType)(type)) {
    return type.getFields()[fieldName] != null;
  }

  return false;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueFragmentNamesRule": function() { return /* binding */ UniqueFragmentNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */
function UniqueFragmentNamesRule(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one fragment named \"".concat(fragmentName, "\"."), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueInputFieldNamesRule": function() { return /* binding */ UniqueInputFieldNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
function UniqueInputFieldNamesRule(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one input field named \"".concat(fieldName, "\"."), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueOperationNamesRule": function() { return /* binding */ UniqueOperationNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
function UniqueOperationNamesRule(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one operation named \"".concat(operationName.value, "\"."), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueOperationTypesRule": function() { return /* binding */ UniqueOperationTypesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */
function UniqueOperationTypesRule(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };

  function checkOperationTypes(node) {
    var _node$operationTypes;

    // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
    var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];

    for (var _i2 = 0; _i2 < operationTypesNodes.length; _i2++) {
      var operationType = operationTypesNodes[_i2];
      var operation = operationType.operation;
      var alreadyDefinedOperationType = definedOperationTypes[operation];

      if (existingOperationTypes[operation]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Type for ".concat(operation, " already defined in the schema. It cannot be redefined."), operationType));
      } else if (alreadyDefinedOperationType) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one ".concat(operation, " type in schema."), [alreadyDefinedOperationType, operationType]));
      } else {
        definedOperationTypes[operation] = operationType;
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueTypeNamesRule": function() { return /* binding */ UniqueTypeNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */
function UniqueTypeNamesRule(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };

  function checkTypeName(node) {
    var typeName = node.name.value;

    if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("Type \"".concat(typeName, "\" already exists in the schema. It cannot also be defined in this type definition."), node.name));
      return;
    }

    if (knownTypeNames[typeName]) {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one type named \"".concat(typeName, "\"."), [knownTypeNames[typeName], node.name]));
    } else {
      knownTypeNames[typeName] = node.name;
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueVariableNamesRule": function() { return /* binding */ UniqueVariableNamesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
function UniqueVariableNamesRule(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__.GraphQLError("There can be only one variable named \"$".concat(variableName, "\"."), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValuesOfCorrectTypeRule": function() { return /* binding */ ValuesOfCorrectTypeRule; }
/* harmony export */ });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");









/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */
function ValuesOfCorrectTypeRule(context) {
  return {
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNullableType)(context.getParentInputType());

      if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isListType)(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(context.getInputType());

      if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var fieldNodeMap = (0,_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(node.fields, function (field) {
        return field.name.value;
      });

      for (var _i2 = 0, _objectValues2 = (0,_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(type.getFields()); _i2 < _objectValues2.length; _i2++) {
        var fieldDef = _objectValues2[_i2];
        var fieldNode = fieldNodeMap[fieldDef.name];

        if (!fieldNode && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isRequiredInputField)(fieldDef)) {
          var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(fieldDef.type);
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Field \"".concat(type.name, ".").concat(fieldDef.name, "\" of required type \"").concat(typeStr, "\" was not provided."), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isInputObjectType)(parentType)) {
        var suggestions = (0,_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_5__.default)(node.name.value, Object.keys(parentType.getFields()));
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Field \"".concat(node.name.value, "\" is not defined by type \"").concat(parentType.name, "\".") + (0,_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_6__.default)(suggestions), node));
      }
    },
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isNonNullType)(type)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected value of type \"".concat((0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(type), "\", found ").concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print)(node), "."), node));
      }
    },
    EnumValue: function EnumValue(node) {
      return isValidValueNode(context, node);
    },
    IntValue: function IntValue(node) {
      return isValidValueNode(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidValueNode(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidValueNode(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidValueNode(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidValueNode(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(locationType);

  if (!(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.isLeafType)(type)) {
    var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(locationType);
    context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected value of type \"".concat(typeStr, "\", found ").concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print)(node), "."), node));
    return;
  } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
  // which may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if (parseResult === undefined) {
      var _typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(locationType);

      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected value of type \"".concat(_typeStr, "\", found ").concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print)(node), "."), node));
    }
  } catch (error) {
    var _typeStr2 = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__.default)(locationType);

    if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError) {
      context.reportError(error);
    } else {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__.GraphQLError("Expected value of type \"".concat(_typeStr2, "\", found ").concat((0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_7__.print)(node), "; ") + error.message, node, undefined, undefined, undefined, error));
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesAreInputTypesRule": function() { return /* binding */ VariablesAreInputTypesRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");





/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__.typeFromAST)(context.getSchema(), node.type);

      if (type && !(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isInputType)(type)) {
        var variableName = node.variable.name.value;
        var typeName = (0,_language_printer_mjs__WEBPACK_IMPORTED_MODULE_2__.print)(node.type);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__.GraphQLError("Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\"."), node.type));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VariablesInAllowedPositionRule": function() { return /* binding */ VariablesInAllowedPositionRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");







/**
 * Variables passed to field arguments conform to type
 */
function VariablesInAllowedPositionRule(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var type = _ref2.type;
          var defaultValue = _ref2.defaultValue;
          var varName = node.name.value;
          var varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = (0,_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_0__.typeFromAST)(schema, varDef.type);

            if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
              var varTypeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(varType);
              var typeStr = (0,_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__.default)(type);
              context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("Variable \"$".concat(varName, "\" of type \"").concat(varTypeStr, "\" used in position expecting type \"").concat(typeStr, "\"."), [varDef, node]));
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isNonNullType)(locationType) && !(0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__.isNonNullType)(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__.Kind.NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return (0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__.isTypeSubTypeOf)(schema, varType, nullableLocationType);
  }

  return (0,_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__.isTypeSubTypeOf)(schema, varType, locationType);
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/custom/NoDeprecatedCustomRule.mjs ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoDeprecatedCustomRule": function() { return /* binding */ NoDeprecatedCustomRule; }
/* harmony export */ });
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");




/**
 * No deprecated
 *
 * A GraphQL document is only valid if all selected fields and all used enum values have not been
 * deprecated.
 *
 * Note: This rule is optional and is not part of the Validation section of the GraphQL
 * Specification. The main purpose of this rule is detection of deprecated usages and not
 * necessarily to forbid their use when querying a service.
 */
function NoDeprecatedCustomRule(context) {
  return {
    Field: function Field(node) {
      var fieldDef = context.getFieldDef();
      var deprecationReason = fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason;

      if (fieldDef && deprecationReason != null) {
        var parentType = context.getParentType();
        parentType != null || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated. ").concat(deprecationReason), node));
      }
    },
    Argument: function Argument(node) {
      var argDef = context.getArgument();
      var deprecationReason = argDef === null || argDef === void 0 ? void 0 : argDef.deprecationReason;

      if (argDef && deprecationReason != null) {
        var directiveDef = context.getDirective();

        if (directiveDef != null) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Directive \"@".concat(directiveDef.name, "\" argument \"").concat(argDef.name, "\" is deprecated. ").concat(deprecationReason), node));
        } else {
          var parentType = context.getParentType();
          var fieldDef = context.getFieldDef();
          parentType != null && fieldDef != null || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("Field \"".concat(parentType.name, ".").concat(fieldDef.name, "\" argument \"").concat(argDef.name, "\" is deprecated. ").concat(deprecationReason), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var inputObjectDef = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.getNamedType)(context.getParentInputType());

      if ((0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.isInputObjectType)(inputObjectDef)) {
        var inputFieldDef = inputObjectDef.getFields()[node.name.value]; // flowlint-next-line unnecessary-optional-chain:off

        var deprecationReason = inputFieldDef === null || inputFieldDef === void 0 ? void 0 : inputFieldDef.deprecationReason;

        if (deprecationReason != null) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("The input field ".concat(inputObjectDef.name, ".").concat(inputFieldDef.name, " is deprecated. ").concat(deprecationReason), node));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumValueDef = context.getEnumValue();
      var deprecationReason = enumValueDef === null || enumValueDef === void 0 ? void 0 : enumValueDef.deprecationReason;

      if (enumValueDef && deprecationReason != null) {
        var enumTypeDef = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__.getNamedType)(context.getInputType());
        enumTypeDef != null || (0,_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__.default)(0);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__.GraphQLError("The enum value \"".concat(enumTypeDef.name, ".").concat(enumValueDef.name, "\" is deprecated. ").concat(deprecationReason), node));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/custom/NoSchemaIntrospectionCustomRule.mjs ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSchemaIntrospectionCustomRule": function() { return /* binding */ NoSchemaIntrospectionCustomRule; }
/* harmony export */ });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");




/**
 * Prohibit introspection queries
 *
 * A GraphQL document is only valid if all fields selected are not fields that
 * return an introspection type.
 *
 * Note: This rule is optional and is not part of the Validation section of the
 * GraphQL Specification. This rule effectively disables introspection, which
 * does not reflect best practices and should only be done if absolutely necessary.
 */
function NoSchemaIntrospectionCustomRule(context) {
  return {
    Field: function Field(node) {
      var type = (0,_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__.getNamedType)(context.getType());

      if (type && (0,_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_1__.isIntrospectionType)(type)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__.GraphQLError("GraphQL introspection has been disabled, but the requested query contained the field \"".concat(node.name.value, "\"."), node));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/validation/specifiedRules.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "specifiedRules": function() { return /* binding */ specifiedRules; },
/* harmony export */   "specifiedSDLRules": function() { return /* binding */ specifiedSDLRules; }
/* harmony export */ });
/* harmony import */ var _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules/ExecutableDefinitionsRule.mjs */ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs");
/* harmony import */ var _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules/UniqueOperationNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs");
/* harmony import */ var _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/LoneAnonymousOperationRule.mjs */ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs");
/* harmony import */ var _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptionsRule.mjs */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs");
/* harmony import */ var _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/KnownTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs");
/* harmony import */ var _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypesRule.mjs */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs");
/* harmony import */ var _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/VariablesAreInputTypesRule.mjs */ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs");
/* harmony import */ var _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/ScalarLeafsRule.mjs */ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs");
/* harmony import */ var _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/FieldsOnCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs");
/* harmony import */ var _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/UniqueFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs");
/* harmony import */ var _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/KnownFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs");
/* harmony import */ var _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoUnusedFragmentsRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs");
/* harmony import */ var _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreadsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs");
/* harmony import */ var _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoFragmentCyclesRule.mjs */ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs");
/* harmony import */ var _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/UniqueVariableNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs");
/* harmony import */ var _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/NoUndefinedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs");
/* harmony import */ var _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/NoUnusedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs");
/* harmony import */ var _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/KnownDirectivesRule.mjs */ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs");
/* harmony import */ var _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocationRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs");
/* harmony import */ var _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/KnownArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs");
/* harmony import */ var _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs");
/* harmony import */ var _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/ValuesOfCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs");
/* harmony import */ var _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/ProvidedRequiredArgumentsRule.mjs */ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs");
/* harmony import */ var _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/VariablesInAllowedPositionRule.mjs */ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs");
/* harmony import */ var _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMergedRule.mjs */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs");
/* harmony import */ var _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueInputFieldNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs");
/* harmony import */ var _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/LoneSchemaDefinitionRule.mjs */ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs");
/* harmony import */ var _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/UniqueOperationTypesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs");
/* harmony import */ var _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/UniqueTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs");
/* harmony import */ var _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/UniqueEnumValueNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs");
/* harmony import */ var _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs");
/* harmony import */ var _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueDirectiveNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs");
/* harmony import */ var _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/PossibleTypeExtensionsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs");
// Spec Section: "Executable Definitions"
 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "All Variables Used"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Argument Names"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Value Type Correctness"

 // Spec Section: "Argument Optionality"

 // Spec Section: "All Variable Usages Are Allowed"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Input Object Field Uniqueness"

 // SDL-specific validation rules








/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

var specifiedRules = Object.freeze([_rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_0__.ExecutableDefinitionsRule, _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_1__.UniqueOperationNamesRule, _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_2__.LoneAnonymousOperationRule, _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__.SingleFieldSubscriptionsRule, _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__.KnownTypeNamesRule, _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__.FragmentsOnCompositeTypesRule, _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_6__.VariablesAreInputTypesRule, _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_7__.ScalarLeafsRule, _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_8__.FieldsOnCorrectTypeRule, _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__.UniqueFragmentNamesRule, _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_10__.KnownFragmentNamesRule, _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_11__.NoUnusedFragmentsRule, _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_12__.PossibleFragmentSpreadsRule, _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_13__.NoFragmentCyclesRule, _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_14__.UniqueVariableNamesRule, _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_15__.NoUndefinedVariablesRule, _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_16__.NoUnusedVariablesRule, _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__.KnownDirectivesRule, _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__.UniqueDirectivesPerLocationRule, _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__.KnownArgumentNamesRule, _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__.UniqueArgumentNamesRule, _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_21__.ValuesOfCorrectTypeRule, _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__.ProvidedRequiredArgumentsRule, _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_23__.VariablesInAllowedPositionRule, _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_24__.OverlappingFieldsCanBeMergedRule, _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__.UniqueInputFieldNamesRule]);
/**
 * @internal
 */

var specifiedSDLRules = Object.freeze([_rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_26__.LoneSchemaDefinitionRule, _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__.UniqueOperationTypesRule, _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_28__.UniqueTypeNamesRule, _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_29__.UniqueEnumValueNamesRule, _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_30__.UniqueFieldDefinitionNamesRule, _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__.UniqueDirectiveNamesRule, _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__.KnownTypeNamesRule, _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__.KnownDirectivesRule, _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__.UniqueDirectivesPerLocationRule, _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_32__.PossibleTypeExtensionsRule, _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__.KnownArgumentNamesOnDirectivesRule, _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__.UniqueArgumentNamesRule, _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__.UniqueInputFieldNamesRule, _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__.ProvidedRequiredArgumentsOnDirectivesRule]);


/***/ }),

/***/ "./node_modules/graphql/validation/validate.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/validation/validate.mjs ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": function() { return /* binding */ validate; },
/* harmony export */   "validateSDL": function() { return /* binding */ validateSDL; },
/* harmony export */   "assertValidSDL": function() { return /* binding */ assertValidSDL; },
/* harmony export */   "assertValidSDLExtension": function() { return /* binding */ assertValidSDLExtension; }
/* harmony export */ });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specifiedRules.mjs */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony import */ var _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ValidationContext.mjs */ "./node_modules/graphql/validation/ValidationContext.mjs");







/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_0__.specifiedRules;
  var typeInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__.TypeInfo(schema);
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    maxErrors: undefined
  };
  documentAST || (0,_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__.default)(0, 'Must provide document.'); // If the schema used for validation is invalid, throw an error.

  (0,_type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__.assertValidSchema)(schema);
  var abortObj = Object.freeze({});
  var errors = [];
  var context = new _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_4__.ValidationContext(schema, documentAST, typeInfo, function (error) {
    if (options.maxErrors != null && errors.length >= options.maxErrors) {
      errors.push(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__.GraphQLError('Too many validation errors, error limit reached. Validation aborted.'));
      throw abortObj;
    }

    errors.push(error);
  }); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__.visitInParallel)(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  try {
    (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__.visit)(documentAST, (0,_utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_1__.visitWithTypeInfo)(typeInfo, visitor));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }

  return errors;
}
/**
 * @internal
 */

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_0__.specifiedSDLRules;
  var errors = [];
  var context = new _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_4__.SDLValidationContext(documentAST, schemaToExtend, function (error) {
    errors.push(error);
  });
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__.visit)(documentAST, (0,_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_6__.visitInParallel)(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}


/***/ }),

/***/ "./node_modules/graphql/version.mjs":
/*!******************************************!*\
  !*** ./node_modules/graphql/version.mjs ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; },
/* harmony export */   "versionInfo": function() { return /* binding */ versionInfo; }
/* harmony export */ });
/**
 * Note: This file is autogenerated using "resources/gen-version.js" script and
 * automatically updated by "npm version" command.
 */

/**
 * A string containing the version of the GraphQL.js library
 */
var version = '15.5.0';
/**
 * An object containing the components of the GraphQL.js version string
 */

var versionInfo = Object.freeze({
  major: 15,
  minor: 5,
  patch: 0,
  preReleaseTag: null
});


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

});