const express=require('express');
//fix auth git
const app=express();
const PORT=3001||process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(PORT,()=>{
    console.log('listen')
})
