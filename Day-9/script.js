// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("455");
//         }, 3500)
//     })
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;
}

async function main(){
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");
    let data  =await getData();
    console.log(data);
    console.log("process data");
}
main();

// get request in fetch api is like opening google chrome
// post request in fetch api is like submitting a form
// put request in fetch api is like updating a form
// delete request in fetch api is like deleting a form
