const express = require("express");

const { tododata } = require("./data");

const app = express();

app.use(express.json());

app.get("/data", (req, resp) => {
  return resp.json({ data: tododata });
});

app.get("/data/:id", (req, resp) => {
  const id = req.params.id;

  const todo = tododata.find((d) => {
    return d.id == id;
  });

  return resp.json({ data: todo });
});

app.post("/data", (req, resp) => {
  const newdata = req.body;

  return resp.json({
    dataa: newdata,
    massage: "added",
  });
});

app.put("/data", (req, resp) => {
  const id = req.params.id;

  const dataa = req.body;

  const todo = tododata.find((d) => {
    return d.id == id;
  });

    if(!todo) {
    return(
    resp.status(404).json({massage:"todo not found"}))
    }

    const uptodo = {...todo, ...dataa}

    return(
    resp.json({dataa:uptodo})
        )



});

app.listen(5000, () => {
  console.log("run server");
});
