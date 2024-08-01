import assert from "assert";
import {totalPhoneBill} from "../totalPhoneBill.js";






describe('test my totalPhoneBill function' , function(){
    it("it should return 'R7.45' when called with 'call, sms, call, sms, sms' " , function(){
       assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45'), "this should not be true"});

       it("it should return 'R3.40' when called with 'call, sms' " , function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40'), "this should not be true"});

     it("it should return 'R1.30' when called with 'sms, sms' " , function(){
            assert.equal(totalPhoneBill('sms, sms'),'R1.30'), "this should not be true"});
           
       
    });
