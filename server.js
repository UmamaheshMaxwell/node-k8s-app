import express from "express";
import mongoose from "mongoose"

const app = express()

const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
        .then("Connected to MongoDB Sucessfully")
        .catch(err => console.log(err))

app.get("/", (req, res) => {
    res.send("<h1 style='color:blue;background-color:coral;'>Welcome to the world of kubernetes !!!</h1>")
})

const port = process.env.PORT | 3000

app.listen(port, () => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port ${port}
      📭  Click here http://localhost:${port}
    `);
});