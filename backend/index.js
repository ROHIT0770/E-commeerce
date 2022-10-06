const express = require("express");
require('./db/config');
const cors = require('cors');

const products=require("./db/product");
const User = require("./db/User");
// const product = require("./db/product");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
});

app.post("/login", async (req, res) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send({result: 'No result found'});
        }
    }

})

app.post("/add-product",async (req,res)=>{
    let product=new products(req.body);
    let result=await product.save();
    res.send(result);
})

app.get("/products",async (req,res)=>{
    let Products =await products.find();
    if(Products.length>0){
        res.send(Products)
    }else{
        res.send({result:"No products found"})
    }
});

app.delete('/product/:id',async (req,res)=>{
    const result=await products.deleteOne({_id:req.params.id})
    res.send(result);
});
app.get("/product/:id",async (req,res)=>{
    let result=await products.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({result:"No record found"});
    }
    
});

app.put("/product/:id",async (req,res)=>{
    let result = await products.updateOne(
        {_id:req.params.id},{
            $set :req.body
        }
    )
    res.send(result)
});

app.get("/search/:key",async (req,res)=>{
    let result=await products.find({
        "$or":[                             // use for multiple search
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    });
    res.send(result)
})

app.listen(5000);