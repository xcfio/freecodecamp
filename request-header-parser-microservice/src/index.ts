import express from "express"
import cors from "cors"

const app = express().use(cors({ optionsSuccessStatus: 200 }))

app.get("/", (_req, res) => res.send("Hello World"))
app.get("/api/whoami", (req, res) => {
    res.json({
        ipaddress: req.ip,
        software: req.headers["user-agent"],
        language: req.headers["accept-language"]
    })
})

app.listen(3000, () => console.log("Server is running"))
