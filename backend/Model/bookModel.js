import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true,
})

export const Book = mongoose.model("Book", bookSchema);