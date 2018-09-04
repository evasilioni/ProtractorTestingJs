

// We are going to create a Test Suite

describe("Suite for validation Search functionality", function(){

    // // We call it specs(Test Cases)
    // var test1 = "www.theTestingWorld.com";

    beforeEach(function(){
        // console.log("----- BEFORE EACH -----Start Browser Here");
        this.test1 = "www.theTestingWorld.com";
    });

    afterEach(function(){
        // console.log("----- AFTER EACH -----Browser Closed");
    });
    
    it("Verify Search with correct item code", function(){
        console.log(this.test1);
    });


});