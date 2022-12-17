const express = require("express");
const PORT = 3000;

const app = express();

app.get("/api/:date", (req, res) => {
    const {date: d} = req.params;
    res.json({
        unix: d,
        utc: new Date(parseInt(d)).toString(),
    })
});

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
});
