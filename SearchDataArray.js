// Search Data in Array/ Check how many times exists in an array

arr1 = [34,"abc",12,"xyz","abc",34,45,34,"evi","kalli","evi"];

    function existsInArray(arg1) {
        for(i=0; i<arr1.length; i++){
            if(this.arr1[i] === arg1){
                return true;
            }
        }

        return false;
    };

    function numberOfTimes(arg1){
        counter = 0;
        
        for(i=0; i<arr1.length; i++){
            if(this.arr1[i] === arg1){
                counter++;
            }
        }

        return counter;
    };

    console.log(existsInArray("abc"));
    console.log(numberOfTimes("abc"));



