// Create a Test Suite

describe("Suite 1", function(){

    beforeEach(function(){
        this.a =  10;
        this.b = 5;

        this.sum = 15;
        this.sub = 5;
        this.mul = 50;
        this.div = 2;
    });

    afterEach(function(){
        console.log("Addition result : "+ (this.a + this.b));
        console.log("Sub result : "+ (this.a - this.b));
        console.log("Mul result : "+ (this.a * this.b));
        console.log("Div result : "+ (this.a / this.b));
    });

    it("Perform addition, display result in afterEach", function(){
        expect(this.a + this.b).toBe(this.sum);
    });

    it("Perform sub, display result in afterEach", function(){
        expect(this.a - this.b).toBe(this.sub);
    });

    it("Perform mul, display result in afterEach", function(){
        expect(this.a * this.b).toBe(this.mul);
    });

    it("Perform div, display result in afterEach", function(){
        expect(this.a / this.b).toBe(this.div);
    });

});