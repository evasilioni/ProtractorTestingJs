

// We are going to create a Test Suite

describe("Suite for validation Search functionality", function(){

    // // We call it specs(Test Cases)
    // it("Verify Search with correct item code", function(){
    //     var a = 100;
    //     var b = 200;
    //     var c = a+b;
    //     expect(c).toBe(300);
    //     expect(c).not.toBe(310);
    //     // expect(actualValue).toBe(expectedValue);
    // });

    // it("Verify Search with iccorrect item code", function(){
    //     console.log("This is Spec 2");
    // });

    it("Verify Search with correct item code", function(){

        var data = "This is Testing World";

        expect(data).toContain("Testing");

        // expect(data).not.toContain("Testing");
        // console.log("This is Spec 2");
    });

    it("Verify Search with correct item code", function(){

        var a = 100;

        expect(a).toBeLessThan(101);
    });

    it("Verify Search with correct item code", function(){

        var test1 = {
            K1: "val1",
            K2: "val2"
        };

        var test2 = {
            K1: "val1",
            K2: "val2"
        };

        expect(test1).toEqual(test2);
    });

});