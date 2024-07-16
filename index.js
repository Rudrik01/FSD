const express = require('express')

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get('/',(req,res)=>{
    // res.send('Hello world');
    res.sendFile(__dirname+'/views/home.html');
})
app.get('/home',(req,res)=>{
    // res.send('Hello world');
    res.sendFile(__dirname+'/views/home.html');
})
app.get('/about',(req,res)=>{
    // res.send('about page');
    res.sendFile(__dirname+'/views/about.html');
})
app.get('/contact',(req,res)=>{
    //res.send('contact page');
    res.sendFile(__dirname+'/views/contact.html');
})
app.get('/cake/ahemdabad',(req,res)=>{
    res.send('Hello ahemdabad');
})
app.get('/cake/surat',(req,res)=>{
    res.send('Hello surat');
})
app.get('*',(req,res)=>{
    res.send('<h1>404 not found</h1>')
})


app.listen(port,()=>{
    console.log(`Sever is running on port ${port}`);
})
