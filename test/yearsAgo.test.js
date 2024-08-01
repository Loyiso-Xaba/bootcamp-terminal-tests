
import assert from "assert";
import {yearsAgo} from "../yearsAgo.js";

assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

describe('test my yearsAgo function' , function(){
    it("it should return '57' when called with '1976' " , function(){
       assert.equal(yearsAgo(1967),57), "this should not be true"});

       it("it should return '24' when called with '2000' " , function(){
        assert.equal(yearsAgo(2000),24), "this should not be true"});
       
    });