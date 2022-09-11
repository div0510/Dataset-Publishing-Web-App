const express = require('express');
const app = express();
const port= 5005;
const cors = require('cors');
const userRouter = require('./routers/userRouter')
//MIDDLE WARE
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"]
}))
app.use('/user', userRouter);

app.get('/',(req,res)=>{
    res.send('Request at blank /');
})

app.listen(port,()=>{
    console.log(`SERVER STARTED and listening to port ${port}`);
})