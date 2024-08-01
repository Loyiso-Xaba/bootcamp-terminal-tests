import assert from "assert";
import {regCheck} from "../regCheck.js";


describe('test my regCheck function' , function(){
    it("it should return true when called with 'DC 55 YU GP' and 'GP' " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true), "this should not be true"});

    it("it should return false when called with 'DC 55 YU GP' and 'EC' " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false), "this should not be true"});



    it("it should return true when called with '5566 L' and 'L' " , function(){
       assert.equal(regCheck('5566 L', 'L'), true), "this should not be true"});

    it("it should return false when called with '5566 L' and 'M' " , function(){
        assert.equal(regCheck('5566 L', 'M'), false), "this should not be true"});
       

    

    it("it should return true when called with 'ERT 123 EC' and 'EC' " , function(){
            assert.equal(regCheck('ERT 123 EC', 'EC'), true), "this should not be true"});
     
    it("it should return false when called with 'ERT 123 EC' and 'GP' " , function(){
             assert.equal(regCheck('ERT 123 EC', 'GP'), false), "this should not be true"});


     
    it("it should return true when called with 'FGT 123 MP' and 'MP' " , function(){
                assert.equal(regCheck('FGT 123 MP', 'MP'), true), "this should not be true"});
         
    it("it should return false when called with 'FGT 123 MM' and 'MP' " , function(){
                 assert.equal(regCheck('FGT 123 MM', 'MP'), false), "this should not be true"});
                
            
    });
    