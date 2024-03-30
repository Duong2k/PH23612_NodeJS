import mongoose from "mongoose";

const { Schema } = mongoose;
const productSchema = new Schema({
    name: {
        type: String,
    },
    price: Number,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
},
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);