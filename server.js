import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("<h1 style='color:blue;background-color:coral;'>Welcome to the world of kubernetes !!!</h1>")
})

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`
      🚀  Server is running!!
      🔉  Listening on port ${port}
      📭  Click here http://localhost:${port}
    `);
});
