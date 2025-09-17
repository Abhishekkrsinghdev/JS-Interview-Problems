// Higher Order Functions (HOF)

// A function that takes another function as an argument or returns a function as a result is called a Higher Order Function (HOF).
function square(element){
  return element * element;
}
console.log([1,2,3,4,5].map(square)); // [1,4,9,16,25]

function customMap(array, callback){
    const ans=[];
    for(let i=0;i<array.length;i++){
        ans.push(callback(array[i],i));
    }
    return ans;
}

console.log(customMap([1,2,3,4,5],square)); // [1,4,9,16,25]

console.log([1,2,3,4,5].filter(isEven)); // [2,4]

function customFilter(array, callback){
    const ans=[];
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            ans.push(array[i]);
        }
    }
    return ans;
}

console.log(customFilter([1,2,3,4,5], isEven)); // [2,4]

function isEven(element){
    return element%2===0;
}

console.log([1,2,3,4,5].reduce(product)); // 120
console.log([1,2,3,4,5].reduce(product, 10)); // 1200

function product(prevValue, currentValue){
    return prevValue * currentValue;
}

function customReduce(array, callback, initialValue){
    let prevValue=initialValue;
    let startIndex=0;

    if(initialValue===undefined){
        prevValue=array[0];
        startIndex=1;
    }

    for(let i=startIndex;i<array.length;i++){
        prevValue=callback(prevValue, array[i]);
    }
    return prevValue;
}
console.log(customReduce([1,2,3,4,5], product)); // 120
console.log(customReduce([1,2,3,4,5], product, 10)); // 1200
