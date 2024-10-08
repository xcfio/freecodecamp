import express from "express"
import multer from "multer"
import cors from "cors"

const app = express().use(cors({ optionsSuccessStatus: 200 }))

const htmlForm = `
<!DOCTYPE html>
<html>
<head>
    <title>File Upload Form</title>
</head>
<body>
    <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="upfile">Choose a file to upload:</label>
        <input type="file" id="upfile" name="upfile">
        <input type="submit" value="Upload File">
    </form>
</body>
</html>
`

app.get("/", (_req, res) => res.send(htmlForm))
app.post("/api/fileanalyse", multer().any(), (req, res) => {
    const file = (req.files as Array<Express.Multer.File>).shift()!
    res.json({
        name: file.originalname,
        type: file.mimetype,
        size: file.size
    })
})

app.listen(3000, () => console.log("Server is running"))
