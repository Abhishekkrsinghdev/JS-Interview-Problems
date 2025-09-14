function setCancellableTimeout(fn,time,...args){
  let id=setTimeout(fn,time,...args);
  return function cancel(){
    clearTimeout(id);
  }
}

//Another approach with timerId
function setCancellableTimeout2(fn,time,...args){
    let flag=true;
    setTimeout(()=>{
        if(!flag) return;
        fn();
    },time,...args);
    return function cancel(){
        flag=false;
    }
}

// let i=0;
// const cancel=setCancellableTimeout(()=>{
//     i++;
// },100);
// cancel();
// console.log(i);