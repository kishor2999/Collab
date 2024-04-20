const mongoose = require("mongoose");
const uri = "mongodb+srv://Clothify:NtXNgQUUbXNgrbZX@cluster0.unvkss0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


function main() {
    mongoose.connect(uri).then(() => {
        console.log(" DB connected Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };