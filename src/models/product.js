import mongoose from "mongoose";

const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
    },
    price: Number,

})

export default mongoose.model("Product", productSchema);