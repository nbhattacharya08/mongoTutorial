const dbConnect = require('./mongoConnect');

const insert=async()=>{
    const db=await dbConnect()
    const result= db.insertMany(
       [
            {name: 'nord CE 2',price: '25000',type: 'mobile'},
            {name: 'moto 5G', price:'18000',type:'mobile'},
            {name: 'nord CE ',price: '29000',type: 'mobile'}
    
       ] 
        
    )

    if(result.acknowledged){
      console.log("data is inserted")
  }
}
insert()