const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        // if left blank will give error
        required: [true, "title is required"],
        // set a minium length
        minLength: [2, "title must be least 2 characters"]

    },

    price: {
        type: Number,
        // if left blank will give error
        required: [true, "Price is required"],
        // set a minium length
        minLength: [1, "Price must be added!"]
    }, 
    description: {
        type: String,
        // if left blank will give error
        required: [true, "Description is required"],
        // set a minium length
        minLength: [5, "Description must be least 5 characters"]
    },
    link: {
        type: String,
        // if left blank will give error
        required: [true, "link is required"],
        // set a minium length
        minLength: [2, "link must be least be valid"]

    },
    imgUrlOne: {
        type: String,
        // if left blank will give error
        required: [true, "link is required"],
        // set a minium length
        minLength: [2, "link must be least be valid"]

    },imgUrlTwo: {
        type: String,
        // if left blank will give error
        required: [true, "link is required"],
        // set a minium length
        minLength: [2, "link must be least be valid"]

    },
    imgUrlThree: {
        type: String,
        // if left blank will give error
        // required: [true, "link is required"],
        // set a minium length
        // minLength: [2, "link must be least be valid"]

    }


}, {timestamps: true})



module.exports = mongoose.model('Product', ProductSchema);
