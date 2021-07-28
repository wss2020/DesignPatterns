


//
// new Promise((resolve,reject)=>{
//         // resolve( {data: 122});
//         reject({err:'error'})
//     }
// ).then(res => res.data,err=>err.err).then((value) => {
//     console.log(value);
// })


new Promise((resolve,reject)=>{
        resolve( {data: 122});
    }
).then(res=>{
    return res.data;
}).then(res=>{
    console.log(res);
})

