import express from "express";



const PORT = 8081;


const app = express();


app.listen(PORT, (error) => {
    if(error){
    console.log(error)
}
console.log("Server is running on port " + PORT)
})