// arraySet =[12,9,21,3,4,8];
// for ( var i=0; i<arraySet.length; i++){
//     const age = arraySet[i];
//     if (age % 2==0){
//         console.log(age, "even");
//     }
//     else {
//         console.log(age, "odd");
//     }
// }
function oddEven(newMeth){
    if (newMeth % 2==0){
        console.log(newMeth, "even");
    }
    else {
        console.log(newMeth, "odd");
    }
}

arraySet =[12,9,21,3,4,8];
for ( var i=0; i<arraySet.length; i++){
    const newMeth = arraySet[i];
    oddEven(newMeth);
}