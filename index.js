const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const firebase = require('firebase');


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'amigos'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');
})

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/chef',(req,res)=>{
    const details = req.body;
    let sql = "Insert into chef (chef_name,Id_no) VALUES ('"+details.chefname+"','"+details.id+"')";
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/manager',(req,res)=>{
    const details = req.body;
    let sql = "Insert into manager (manager_name,Id_no,contact_no) VALUES ('"+details.manager+"','"+details.id+"','"+details.contact+"')";
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/waiter',(req,res)=>{
    const details = req.body;
    let sql = "Insert into waiter (waiter_name,Id_no) VALUES ('"+details.waiter+"','"+details.id+"')";
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/orders',(req,res)=>{
    const details = req.body;
    let sql = "Insert into orders (order_no,number_of_items) VALUES ('"+details.order+"','"+details.items+"')";
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/bill',(req,res)=>{
    const details = req.body;
    let sql = "Insert into bill (bill_no,price,customer) VALUES ('"+details.bill_no+"','"+details.price+"','"+details.customer+"')";
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.get('/table1',(req,res)=>{
    let sql = "select * from chef";
    connection.query(sql,function(err,result){
        return res.send(result)                   
    })
})

app.get('/table2',(req,res)=>{
    let sql = "select * from manager";
    connection.query(sql,function(err,result){
        return res.send(result)                   
    })
})

app.get('/table3',(req,res)=>{
    let sql = "select * from waiter";
    connection.query(sql,function(err,result){
        return res.send(result)                   
    })
})

app.get('/table4',(req,res)=>{
    let sql = "select * from orders";
    connection.query(sql,function(err,result){
        return res.send(result)                   
    })
})

app.get('/table5',(req,res)=>{
    let sql = "select * from bill";
    connection.query(sql,function(err,result){
        return res.send(result)                   
    })
})

var search = null;

app.post('/search1',(req,res)=>{
    const details = req.body;
    let sql = "select * from chef where Id_no="+details.id;
    connection.query(sql,function(err,result){
        search = result;
    })
})

app.get('/search1',(req,res)=>{
    // console.log(search);
    return res.send(search);
})

app.post('/search2',(req,res)=>{
    const details = req.body;
    let sql = "select * from manager where Id_no="+details.id;
    connection.query(sql,function(err,result){
        search = result;
    })
})

app.get('/search2',(req,res)=>{
    // console.log(search);
    return res.send(search);
})

app.post('/search3',(req,res)=>{
    const details = req.body;
    let sql = "select * from waiter where Id_no="+details.id;
    connection.query(sql,function(err,result){
        search = result;
    })
})

app.get('/search3',(req,res)=>{
    // console.log(search);
    return res.send(search);
})

app.post('/search4',(req,res)=>{
    const details = req.body;
    let sql = "select * from orders where order_no="+details.order;
    connection.query(sql,function(err,result){
        search = result;
    })
})

app.get('/search4',(req,res)=>{
    // console.log(search);
    return res.send(search);
})

app.post('/search5',(req,res)=>{
    const details = req.body;
    let sql = "select * from bill where bill_no="+details.bill_no;
    connection.query(sql,function(err,result){
        search = result;
    })
})

app.get('/search5',(req,res)=>{
    // console.log(search);
    return res.send(search);
})

app.post('/delete1',(req,res)=>{
    const details = req.body;
    let sql = "delete from chef where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/delete2',(req,res)=>{
    const details = req.body;
    let sql = "delete from manager where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/delete3',(req,res)=>{
    const details = req.body;
    let sql = "delete from waiter where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/delete4',(req,res)=>{
    const details = req.body;
    let sql = "delete from orders where order_no="+details.order;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/delete5',(req,res)=>{
    const details = req.body;
    let sql = "delete from bill where bill_no="+details.bill;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/update1',(req,res)=>{
    const details = req.body;
    let sql= "update chef set chef_name='"+details.chefname+"' where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/update2',(req,res)=>{
    const details = req.body;
    let sql= "update manager set manager_name='"+details.manager+"',contact_no="+details.contact+" where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/update3',(req,res)=>{
    const details = req.body;
    let sql= "update waiter set waiter_name='"+details.waiter+"' where Id_no="+details.id;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/update4',(req,res)=>{
    const details = req.body;
    let sql= "update orders set number_of_items="+details.items+" where order_no="+details.order;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.post('/update5',(req,res)=>{
    const details = req.body;
    let sql= "update bill set customer = '" + details.customer +"',price=" + details.price+" where bill_no=" + details.bill_no;
    connection.query(sql,function(err,result){
        if(err) throw err;
    })
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/main.html'));
})

app.set('port',5000);

const server = app.listen(app.get('port'),()=>{
    console.log(`Express is running on PORT ${server.address().port}`);
});