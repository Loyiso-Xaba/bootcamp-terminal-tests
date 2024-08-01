
import assert from "assert";
import {fromWhere} from "../fromWhere.js";



assert.equal(fromWhere('CY 567489'), 'Bellville');
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');


describe('test my fromWhere function', function () {
    it("it should return 'Bellville' when called with 'CY 567489' ", function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'), "this should not be true"
    });

    it("it should return 'Paarl' when called with 'CJ 343502' ", function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl'), "this should not be true"
    });

    it("it should return 'Cape Town' when called with 'CJ 343502' ", function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town'), "this should not be true"
    });

    it("it should return 'Some other place!' when called with 'ZN 568593' ", function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl'), "this should not be true"
    });

});