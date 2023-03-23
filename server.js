import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("<h1 style='color:blue'>Welcome to the world of kubernetes !!!</h1>")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})