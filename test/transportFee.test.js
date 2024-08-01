
import assert from "assert";
import {transportFee} from "../transportFee.js";




describe('test my transportFee' , function(){
    it("it should return 'R20' when called with 'morning' " , function(){
       assert.equal(transportFee('morning'),'R20'), "this should not be true"});

    it("it should return 'R10' when called with 'afternoon' " , function(){
        assert.equal(transportFee('afternoon'),'R10'), "this should not be true"});

    it("it should return 'free' when called with 'nightshift' " , function(){
        assert.equal(transportFee('nightshift'),'free'), "this should not be true"});
       
    });