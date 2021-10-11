'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".Button-module_button__2X_Ir {\n  cursor: pointer;\n  margin: 0.5rem;\n  border-width: 1px;\n  border-color: #044186;\n  border-radius: 0.2rem;\n  border-style: solid;\n}\n.Button-module_button__2X_Ir.Button-module_primary__pg7GC {\n  color: white;\n  background-color: #044186;\n}\n.Button-module_button__2X_Ir.Button-module_primary__pg7GC:hover:not(:disabled) {\n  background-color: #0252ad;\n}\n.Button-module_button__2X_Ir.Button-module_primary__pg7GC:focus:not(:disabled) {\n  background-color: #022b5a;\n}\n.Button-module_button__2X_Ir.Button-module_primary__pg7GC:active:not(:disabled) {\n  background-color: #02346d;\n}\n.Button-module_button__2X_Ir.Button-module_default__2K-C8 {\n  background-color: white;\n}\n.Button-module_button__2X_Ir.Button-module_default__2K-C8:hover:not(:disabled) {\n  background-color: #e0e0e0;\n}\n.Button-module_button__2X_Ir.Button-module_default__2K-C8:focus:not(:disabled) {\n  background-color: #d8d8d8;\n}\n.Button-module_button__2X_Ir.Button-module_default__2K-C8:active:not(:disabled) {\n  background-color: #cfcfcf;\n}\n.Button-module_button__2X_Ir.Button-module_large__2JMDl {\n  padding: 1rem 2rem;\n  font-size: 1rem;\n}\n.Button-module_button__2X_Ir.Button-module_medium__3MpNV {\n  padding: 0.5rem 1rem;\n  font-size: 0.8rem;\n}\n.Button-module_button__2X_Ir.Button-module_small__VlwKh {\n  padding: 0.25rem 0.5rem;\n}\n.Button-module_button__2X_Ir:disabled {\n  cursor: not-allowed;\n  border-color: #cfcfcf;\n  margin: calc(0.5rem + 1px);\n  opacity: 0.4;\n}";
var classes$1 = {"button":"Button-module_button__2X_Ir","primary":"Button-module_primary__pg7GC","default":"Button-module_default__2K-C8","large":"Button-module_large__2JMDl","medium":"Button-module_medium__3MpNV","small":"Button-module_small__VlwKh"};
styleInject(css_248z$1);

var Button = function (_a) {
    var _b = _a.buttonType, buttonType = _b === void 0 ? 'button' : _b; _a.onClick; var children = _a.children, _c = _a.size, size = _c === void 0 ? 'large' : _c, className = _a.className, rest = __rest(_a, ["buttonType", "onClick", "children", "size", "className"]);
    var buttonTypeClassName = classes$1[buttonType];
    var buttonSizeClassName = classes$1[size];
    var computedClasses = classNames(classes$1.button, buttonTypeClassName, buttonSizeClassName, className);
    return (jsxRuntime.jsx("button", __assign({}, rest, { className: computedClasses }, { children: children }), void 0));
};

var css_248z = ".Card-module_card__2R8Y7 {\n  background-color: lightblue;\n}";
var classes = {"card":"Card-module_card__2R8Y7"};
styleInject(css_248z);

var Card = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return (jsxRuntime.jsx("section", __assign({ onClick: onClick, className: classes.card }, { children: children }), void 0));
};

exports.Button = Button;
exports.Card = Card;
//# sourceMappingURL=index.js.map
