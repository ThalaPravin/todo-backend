const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app= express()

app.use(express.json)

app.get('/getTodo', (req,res)=>{
    
})

app.post('todo', (req, res)=>{
    const createPayload = res.body;
    const parsedPayload= createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg :'You have send wrong Inputs'
        });
        return;
    }
    
})

app.put('completed' , (req, res)=>{
    const createPayload = res.body;
    const parsedPayload= updateTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg :'You have send wrong Inputs'
        });
        return;
    }
})


