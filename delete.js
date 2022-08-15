const dbConnect = require('./mongoConnect');

const deleteData=async()=>{
    const data=await dbConnect()
    const result= await data.deleteOne({name: 'micromax'})
    console.log(result);
    
}
deleteData();