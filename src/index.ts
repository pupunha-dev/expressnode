import express from "express";

const app = express();
const porta = 8080;

app.get("/", (req,res)=>{
    res.send("Heyyy!!")
})

app.get("/rotaUm", (req,res)=>{
    let x = "Criando um método diferente."
    res.send(x)
})

app.get("/numero",(req,res)=>{
    let x = 91993902068;
    res.json(x);
})

app.listen(porta, ()=>{
    console.log('Server on!')
})