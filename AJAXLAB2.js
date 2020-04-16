function testNum(num){
    return new Promise(function(resolve,reject){
        if( num> 50){
            resolve(num + " is greater than 50")
        }
        else {
            reject( num + " is less than or equal to 50")
        
        };
    });
};

testNum(55).then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error)
});