const express = require( "express");
const app = express();
const port = 5000; //5001 on mac

app.use("/static", express.static("public"));
app.use("/css", express.static("public/css"))
// http://localhost:5000/static/
app.listen(port, () => {
    console.log(`Listening on port ${port}`);

});
