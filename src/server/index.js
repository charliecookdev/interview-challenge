const express = require("express");
const items = require("./items");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/api/items", (req, res) => {
  const searchTerm = req.query.searchTerm

  if (!searchTerm) {
    return res.send({ items });
  }

  const filteredItems = items.filter(({ name }) => name.includes(searchTerm));
  return res.send({ items: filteredItems });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
