const express = require('express');

const app = express();

const WorkingDay = (req,res,next)=> {
    var date= new Date();
    if ((date.getHours() < 9|| date.getHours()>16)||
    (date.getDay()==0||date.getDay()==6)){
        res.sendFile(__dirname+'/Components/Closing.html')
    }   
    else {next()}
}
app.use(WorkingDay)

app.use( express.static(__dirname+'/Components'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Components/Home.html')
});

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/Components/Services.html')
});

app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname+'/Components/Contact.html')
});


const PORT = process.env.PORT || 5001 

app.listen(PORT, ()=> console.log(`we are on port ${PORT}`));