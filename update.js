const dbConnect = require('./mongoConnect');

const updateData=async()=>{
    const db=await dbConnect()
    const result= await db.updateOne(
       {name: 'iphone 13'},{
        $set: {name: 'nord ce 2 lite', }
       }
        
    )
    console.log(result);
    
}
updateData();