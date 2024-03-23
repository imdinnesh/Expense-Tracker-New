const dotenv=require('dotenv').config()
const express=require('express');
const router =require('./routes/transactions')
const cors=require('cors');
const {db}=require('./db/db')

const PORT=process.env.PORT



const app=express();



app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use('/api/v1',router)


const server=() => {
    db()
    app.listen(PORT, () => {
        console.log('Server is listening to port:',PORT);
    });

}

server()