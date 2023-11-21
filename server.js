const express = require("express");
const app = express();
const PORT = process.env.PORT || 5555;

const knexConfig = require("./knexfile");
// const knex = require("knex")(knexConfig.development);
const knex = require("./index");

app.use(express.json());
// app.use("/", express.static(__dirname + "/public"));
// app.use("/", express.static("public"));
app.use("/", express.static("build"));

app.get("/0", (req, res) => {
  res.send("Hello Express!" + __dirname);
});

app.get("/db", async (req, res) => {
  const tasks = await knex("tasks").select();
  //   console.log("tasks", tasks);
  //   res.send("テスト" + tasks[0].name);
  res.send(tasks);
});

app.listen(PORT, () => {
  console.log(
    `Server running: you better go catch it, then! http://localhost:${PORT}`
  );
});

module.exports = app;
