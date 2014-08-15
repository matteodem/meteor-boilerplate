if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("dummy Test Suite", function(){
      it("should let 5 + 5 be 10", function(){
        chai.assert.equal(5 + 5, 10);
      });
    });
  });
}
