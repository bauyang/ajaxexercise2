function testNum(num){
    return new Promise(function(resolve,reject){
        if( num> 50){
            console.log(num + " is greater than 50")
        }
        else {
            console.log( num + " is less than or equal to 50")
        };
    });
};

testNum(50);