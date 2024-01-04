
// callback:-
//  const hello=()=>{
//      console.log("hello");
//  }
//  setTimeout(hello,4000);


//  function getData(dataid,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataid)
//         if(getNextData)
//         {
//             getNextData();
//         }
    
//  },2000);
// }

//callback hell or nested callback:-
// getData(1,()=>{
//     console.log("getting data2...")
//     getData(2,()=>{
//         console.log("getting data3...")
//         getData(3)
//     })
// })


//promise
//  const getpromise=()=>{
//    return new Promise((resolve,reject)=>{
//      console.log("I am a promise");
//      //resolve("success");
//      reject("error in js")
//  })
// };
// let promise=getpromise();
// promise.then((res)=>{
// console.log("promise fullfilled",res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected",err);
//     });



// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("data",dataid);
//                 resolve('success');
//                 //reject("there is some error");
                
            
//         },4000);
//     })

// }

// console.log('fetching data1');
// getData(1).then((res)=>{
//     console.log('fetching data2');
//     getData(2).then((res)=>{
//         console.log('fetching data3');
//         getData(3)
//     })
// })

//promise chaining

// getData(1)
// .then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{
//     console.log("success")
// })

// async keyword
async function hello(){
    console.log("hello");
}
    
 function getData(dataid){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data",dataid);
                resolve('success');
                //reject("there is some error");
                
            
        },4000);
    })

}
(async function getalldata(){
    console.log("getting data1")
    await getData(1);
    console.log("getting data2")
    await getData(2);
    console.log("getting data3")
    await getData(3);
    console.log("getting data4")
    await getData(4);
})()

