const dbConnect = require('./mongoConnect')

 dbConnect().then((resp)=>{
         resp.find({}).toArray().then((data)=>{
         console.log(data)
     })
 })
