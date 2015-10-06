/* globals greenjobs, listIndustries */

describe("listIndustries", function() {

  var testData = greenjobs.slice(0, 9);

  it("should return the correct values for the specified sample data", function () {
    expect(listIndustries(testData)).toEqual(["Construction", "Agriculture, Forestry, Fishing and Hunting "]);
  });

  var noIndustryField = testData.concat({foo: "bar"});

  it("should throw an error when a record does not have the Industry field", function () {
    expect(function(){listIndustries(noIndustryField);}).toThrowError("No Industry field.");
  });

  var emptyString = testData.concat({"Industry": ""});

  it("should throw an error when a record has an empty string", function () {
    expect(function(){listIndustries(emptyString);}).toThrowError("Industry field is empty.");
  });
});

