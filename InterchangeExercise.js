

function InterchangeWithVariable(a, b){

    console.log("V1: Before interchange a:" + a +", b:"+ b);

    var helper = a;
    a = b;
    b = helper;

    console.log("V1: After interchange a:" + a +", b:"+ b);
};

function InterchangeΝοVariable(a, b){

    console.log("V2: Before interchange a:" + a +", b:"+ b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log("V2: After interchange a:" + a +", b:"+ b);
};

function fibonacciSeries(){
    var a=0;
    var b=1;

    var i;

    var fbnSerie = "0 ";
    for(i=0; i<=20;  i++){
        var c = a+b;
        a=b;
        b=c;
        fbnSerie += c +" ";
    };

    console.log(fbnSerie);
};

function PrimeOrNot(){
    
    for(var num=1;num<=100;num++){
        var counter=0;

        for(var i=num;i>=1;i--){
            if(num%i==0){
                counter++;
            }
        }

        if(counter==2){
            console.log(num);
        }
    }
    
};
    
// InterchangeWithVariable(10, 20);
// InterchangeΝοVariable(10, 20);
// fibonacciSeries();
PrimeOrNot();