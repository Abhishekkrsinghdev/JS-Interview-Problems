function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time));
}
// async function greeting() {
//    console.log("Hi");
//    await sleep(2000); 
//    console.log("Bye")
// }

// greeting();
console.log("Hi");
sleep(2000).then(()=>console.log("Bye"));

function blockingSleep(time){
    let timeNow= new Date().getTime();
    while(new Date().getTime()<timeNow+time){
        //blocks the main thread
    }
}