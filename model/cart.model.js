const mongoose = require("mongoose");


const cartSchema = mongoose.Schema({
  
img3:{type:String},
des:{type:String},
price:{type:String},
autherID:{type:String},
auther:{type:String}


},{
    versionKey:false
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports = {CartModel}