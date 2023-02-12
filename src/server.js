const express = require("express")
const cors = require("cors")
require("./config")
const app = express()
const path = require("path")

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})
// routers
app.use("/blogs", require("./routers/blogs"))
app.use("/items", require("./routers/items"))
app.use("/posts", require("./routers/posts"))
app.use("/products", require("./routers/products"))
app.use("/users", require("./routers/users"))

app.listen(PORT, () => console.log("server is ready at http://localhost:" + PORT))