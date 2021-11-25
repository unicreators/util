"use strict";
// Copyright (c) 2021 yichen <d.unicreators@gmail.com>. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._isNullOrUndefinedOrEmpty = exports._isNullOrUndefined = exports._isObject = exports._isBoolean = exports._isDate = exports._isString = exports._isNumber = exports._isFunction = void 0;
/// yichen <d.unicreators@gmail.com>
///
var _isFunction = function (value) { return typeof value === 'function'; };
exports._isFunction = _isFunction;
var _isNumber = function (value) { return typeof value === 'number'; };
exports._isNumber = _isNumber;
var _isString = function (value) { return typeof value === 'string'; };
exports._isString = _isString;
var _isDate = function (value) { return value instanceof Date && !isNaN(value.getTime()); };
exports._isDate = _isDate;
var _isBoolean = function (value) { return typeof value === 'boolean'; };
exports._isBoolean = _isBoolean;
var _isObject = function (value) { return !(0, exports._isNullOrUndefined)(value) && typeof value === 'object' && !Array.isArray(value); };
exports._isObject = _isObject;
var _isNullOrUndefined = function (value) { return value === undefined || value === null; };
exports._isNullOrUndefined = _isNullOrUndefined;
var _isNullOrUndefinedOrEmpty = function (value) { return (0, exports._isNullOrUndefined)(value) || value === ''; };
exports._isNullOrUndefinedOrEmpty = _isNullOrUndefinedOrEmpty;
//# sourceMappingURL=index.js.map