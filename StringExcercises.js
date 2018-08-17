

// We are going to create a method that compares only the last 10 
// characters of 2 strings without case sensitive
function compareLastTenChars(string1, string2){

    console.log("Input1:" + string1 +"\nInput2:"+string2);

    var lastTen1 = string1.substring(string1.length, string1.length-10);
    var lastTen2 = string2.substring(string2.length, string2.length-10);

    if(string1.length <= 10 || string2.length <= 10){
        console.log("Both strings should have length greater than 10." + "\n");
        return false;
    }

    if(lastTen1.toLowerCase() == lastTen2.toLowerCase()){
        console.log("Last 10 chars of two strings are equal." + "\n");
        return true;
    } else{
        console.log("Last 10 chars of two strings are NOT equal." + "\n");
        return false;
    }
};

// We are going to create a method that compares a random number of last
// characters of 2 strings without case sensitive
function compareLastChars(string1, string2, numOfChars){

    console.log("Input1:" + string1 +"\nInput2:"+string2);

    var last1 = string1.substring(string1.length, string1.length-numOfChars);
    var last2 = string2.substring(string2.length, string2.length-numOfChars);

    if(string1.length <= numOfChars || string2.length <= numOfChars){
        console.log("Both strings should have length greater than "+ numOfChars + ".\n");
        return false;
    }

    if(last1.toLowerCase() == last2.toLowerCase()){
        console.log("Last "+ numOfChars +" chars of two strings are equal." + "\n");
        return true;
    } else{
        console.log("Last "+ numOfChars +" chars of two strings are NOT equal." + "\n");
        return false;
    }
};

// We are going to create a method that compares only first 3 
// characters of 2 strings without case sensitive
function compareFirst3Chars(string1, string2){

    console.log("Input1:" + string1 +"\nInput2:"+string2);

    var first1 = string1.substring(0, 2);
    var first2 = string2.substring(0, 2);

    if(string1.length <= 3 || string2.length <= 3){
        console.log("Both strings should have length greater than "+ 3 + ".\n");
        return false;
    }

    if(first1.toLowerCase() == first2.toLowerCase()){
        console.log("First "+ 3 +" chars of two strings are equal." + "\n");
        return true;
    } else{
        console.log("First "+ 3 +" chars of two strings are NOT equal." + "\n");
        return false;
    }
};

// We are going to create a method that display string with first word in small 
// ,second word in capital, 3rd word in small etc .
function camelCaseWords(string1){

    var res = string1.split(" ");

    var camelCaseResult ="";

    for(i=0; i<res.length;i++){
        if(i%2==0){
            camelCaseResult += res[i].toLowerCase();
        }else {
            camelCaseResult += res[i].toUpperCase();
        }
        camelCaseResult += " ";
    };

    console.log(camelCaseResult);
};

// We are going to create a method that reverses a string 
function reverseString(str){
    var reverseResult ="";

    for(i=str.length; i>=0 ;i--){
        reverseResult += str.charAt(i-1);
    };

    return reverseResult;
};


// We are going to check if a string is palindrome
// e.g malayalam
function isPalindrome(str){
    var reverseResult = reverseString(str);
    if(reverseResult == str) {
        console.log("String " + str + " is palindrome.");
        return;
    }

    console.log("String " + str + " is not palindrome.");
};


// compareLastTenChars("This is Testing World","My TesTing World");
// compareLastTenChars("This ","My TesTing World");
// compareLastTenChars("This","World");
// compareLastTenChars("This is Testing World","My TesTing Word");


// compareLastChars("Create a Simple Interface and a Java Bean","Create a Simple Interface", 7);
// compareLastChars("Create","Simple Interface", 7);
// compareLastChars("Java Bean","Java Dream", 7);
// compareLastChars("Create a Simple Interface and a Java Bean","Create a Simple Interface and a Java Bean", 7);

// compareFirst3Chars("Create a Simple Interface and a Java Bean","Create a Simple Interface");
// compareFirst3Chars("Create","Simple Interface");
// compareFirst3Chars("Evi","Angie");
// compareFirst3Chars("In","Out");

// camelCaseWords("Create a Simple Interface and a Java Bean");

// reverseString("WonderWorld");

isPalindrome("malayalam");