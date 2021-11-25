// Copyright (c) 2021 yichen <d.unicreators@gmail.com>. All rights reserved.
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

/// yichen <d.unicreators@gmail.com>
///

export const _isFunction = (value: any): value is Function => typeof value === 'function';
export const _isNumber = (value: any): value is Number => typeof value === 'number';
export const _isString = (value: any): value is String => typeof value === 'string';
export const _isDate = (value: any): value is Date => value instanceof Date && !isNaN(value.getTime());
export const _isBoolean = (value: any) => typeof value === 'boolean';
export const _isObject = (value: any) => !_isNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value);
export const _isNullOrUndefined = (value: any): boolean => value === undefined || value === null;
export const _isNullOrUndefinedOrEmpty = (value: any): boolean => _isNullOrUndefined(value) || value === '';