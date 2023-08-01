"use strict";

const app = require("express")();
const PORT = 3000;
const organizations = require("./organizations.js").organizations;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

app.get("/:category", (req, res) => {
  const category = req.params.category;
  const relevantOrgs = [];
  for (const org of organizations) {
    if (org.category === category) {
      relevantOrgs.push(org);
    }
  }
  res.send(relevantOrgs);
});