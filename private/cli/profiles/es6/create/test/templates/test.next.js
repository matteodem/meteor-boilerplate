if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(() => {
    describe("__testName__ Test Suite", () => {
      it("should let 5 + 5 be 10", () => {
        chai.assert.equal(5 + 5, 10);
      });
    });
  });
}
