const makeServerRequest = new Promise( ( resolve, reject ) => {

    if ( false ) {
        resolve("we've got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then( result => {
    console.log(result);
    
})

makeServerRequest.catch( error => {
    console.log(error);
    
})

