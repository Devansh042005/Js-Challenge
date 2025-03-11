console.log("promises");

let prom1 = new Promise((resolve , reject)=>{
    let a = math.random();
    if(a < 0.5){
        reject("Promise rejected");
    }
    else{
        setTimeout(()=>{
            console.log("Yes i am done");
            resolve("Devansh");
        } , 2000);
    }
})

let prom2 = new Promise((resolve , reject)=>{
    let a = math.random();
    if(a < 0.5){
        reject("Promise rejected 2");
    }
    else{
        setTimeout(()=>{
            console.log("Yes i am done 2");
            resolve("Devansh2");
        } , 1000);
    }
})


let p3 = Promise.all([prom1 , prom2]);
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let p4 = Promise.allSettled([prom1 , prom2]);
p4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})