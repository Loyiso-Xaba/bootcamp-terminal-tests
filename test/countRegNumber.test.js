import assert from "assert";
import {countRegNumber} from "../countRegNumber.js";




var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3);

var regCount = countRegNumber('CA 182736')
assert.equal(regCount, 1);




describe('test my countRegNumber function' , function(){
    it("it should return '3' when called with 'CA 182736,CY 523519,CJ 812328' " , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3), "this should not be true"});

    it("it should return '1' when called with 'CA 182736' " , function(){
            assert.equal(countRegNumber('CA 182736'), 1), "this should not be true"});
       
    });