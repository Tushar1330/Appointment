const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
//dotenv configuration
dotenv.config();
// rest object
const app = express();
// middleware
app.use(express.json());
app.use(morgan('dev'))
// routes
app.get('/', (req, res) => 
    {
        res.status(200).send({message:"Server is running"});
    });
//ports
const port =process.env.PORT
const mode=process.env.NODE_MODE
//listen
app.listen(port,()=>{
    console.log(`Server running on ${mode} Mode on port ${port}`.bgCyan.white);
});