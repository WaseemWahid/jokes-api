// import all dependencies
const express = require("express")
const app = express()

// config mongoose
require("./configs/mongoose.config")

// express config for post
app.use(express.json(), express.urlencoded({ extended: true }));

// get the routes
require("./routes/joke.routes")(app)

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));