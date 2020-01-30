const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => console.log(`Sever is running on PORT ${port}`));
