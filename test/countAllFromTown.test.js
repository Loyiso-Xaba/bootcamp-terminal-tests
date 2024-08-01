import assert from "assert";
import {countAllFromTown} from "../countAllFromTown.js";

describe('test my countAllFromTown' , function(){
    it("it should return '3' when called with 'CL 124,CY 567,CL 345, CJ 456,CL 341' and 'CL' " , function(){
       assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3), "this should not be true"});

       it("it should return '1' when called with 'CJ 124,CY 567,CL 345, CF 456, CL 341' and 'CF' " , function(){
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'),1), "this should not be true"});
       
    });