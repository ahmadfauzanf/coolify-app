const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res) => {
	res.send("Hello From This APP !!!")
})

app.listen(port, ()  => {
	console.log(`app running on port ${port}`)
})
