var expect = chai.expect;

describe("sumArray", function() {
  it("returns the total of all the numbers in `arr`", function() {
    var arr = [8, 16, 22, 32, 42];

    var result = sumArray(arr);

    expect(result).to.eql(120);
  });
});
