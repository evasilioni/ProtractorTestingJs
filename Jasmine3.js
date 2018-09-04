

// We are going to create a Test Suite

describe("Suite1", function(){

    // // We call it specs(Test Cases)
    // var test1 = "www.theTestingWorld.com";

    beforeEach(function(){
        console.log("----- BEFORE EACH -----Start Browser Here");
    });

    afterEach(function(){
        console.log("----- AFTER EACH -----Browser Closed");
    });
    
    it("Verify Search with correct item code", function(){
        console.log("Test Case 1");
    });

    it("Verify Search with correct item code", function(){
        console.log("Test Case 2");
    });

        xdescribe("Suite2", function(){
            
            it("Verify Search with correct item code", function(){
                console.log("Test Case 3");
            });
        
        });
});

