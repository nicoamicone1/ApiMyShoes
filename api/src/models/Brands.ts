import {model,Schema} from "mongoose"


const brandSchema=new Schema({
    name:{
        type:String,
        required:true 
    },
    logo_url:{
        type:String,
        required:true 
    },
    product:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
})

const Brand=model("Brand",brandSchema)

export default Brand