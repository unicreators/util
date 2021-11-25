import 'mocha';
import { expect } from 'chai';

import { _isBoolean, _isDate, _isFunction, _isNullOrUndefined, _isNullOrUndefinedOrEmpty, _isNumber, _isObject, _isString } from '../src/index';


describe('index.test.ts', function () {

    it('_isFunction', async () => {
        let result = _isFunction(() => { });
        expect(result).equal(true);

        result = _isFunction(null);
        expect(result).equal(false);

        result = _isFunction(1);
        expect(result).equal(false);
    });

    it('_isNumber', async () => {
        let result = _isNumber(1);
        expect(result).equal(true);

        result = _isNumber(1.456);
        expect(result).equal(true);

        result = _isNumber(null);
        expect(result).equal(false);

        result = _isNumber('');
        expect(result).equal(false);
    });

    it('_isString', async () => {
        let result = _isString('');
        expect(result).equal(true);

        result = _isString(1.456);
        expect(result).equal(false);

        result = _isString(null);
        expect(result).equal(false);

        result = _isString({});
        expect(result).equal(false);
    });

    it('_isDate', async () => {
        let result = _isDate(new Date());
        expect(result).equal(true);

        result = _isDate(1);
        expect(result).equal(false);

        result = _isDate(null);
        expect(result).equal(false);

        result = _isDate({});
        expect(result).equal(false);
    });

    it('_isBoolean', async () => {
        let result = _isBoolean(true);
        expect(result).equal(true);

        result = _isBoolean(false);
        expect(result).equal(true);

        result = _isBoolean(new Boolean());
        expect(result).equal(false);

        result = _isBoolean(null);
        expect(result).equal(false);

        result = _isBoolean('');
        expect(result).equal(false);

        result = _isBoolean({});
        expect(result).equal(false);
    });

    it('_isObject', async () => {
        let result = _isObject({});
        expect(result).equal(true);

        result = _isObject(1);
        expect(result).equal(false);

        result = _isObject(null);
        expect(result).equal(false);

        result = _isObject('');
        expect(result).equal(false);

        result = _isObject(() => { });
        expect(result).equal(false);

        result = _isObject(new Boolean());
        expect(result).equal(true);
    });

    it('_isNullOrUndefined', async () => {
        let result = _isNullOrUndefined(null);
        expect(result).equal(true);

        result = _isNullOrUndefined(undefined);
        expect(result).equal(true);

        result = _isNullOrUndefined(new Boolean());
        expect(result).equal(false);

        result = _isNullOrUndefined({});
        expect(result).equal(false);

        result = _isNullOrUndefined('');
        expect(result).equal(false);
    });

    it('_isNullOrUndefinedOrEmpty', async () => {
        let result = _isNullOrUndefinedOrEmpty(null);
        expect(result).equal(true);

        result = _isNullOrUndefinedOrEmpty(undefined);
        expect(result).equal(true);

        result = _isNullOrUndefinedOrEmpty('');
        expect(result).equal(true);

        result = _isNullOrUndefinedOrEmpty(new Boolean());
        expect(result).equal(false);

        result = _isNullOrUndefinedOrEmpty({});
        expect(result).equal(false);
        
    });

});

