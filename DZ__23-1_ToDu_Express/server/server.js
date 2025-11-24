const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
// Використання cors middleware
app.use(cors());
// Приклад конфігурації CORS з додатковими опціями
//const corsOptions = {
//  origin: 'http://allowed-domain.com', // Дозволене джерело
//  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Дозволені методи
//  credentials: true, // Дозвіл на відправку кукі та авторизаційних заголовків
//  optionsSuccessStatus: 204, // HTTP код для успішного виконання OPTIONS запиту
//};
//app.use(cors(corsOptions));



let todos = []

app.get("/", (req, resp) => {
    resp.send("Hello world");
});

app.get("/todos", (req, resp) => {
    resp.json(todos);
});

app.get("/todos/:id", (req, resp) => {
    const id = +req.params.id;
    const todo = todos.find(item => item.id === id);
    resp.json(todo);
});

app.post("/todos", (req, resp) => {
    const newTodo = {...req.body};
    todos.push(newTodo);
    resp.json(todos);
});

app.patch("/todos/:id", (req, resp) => {
    const id = Number(req.params.id);
    const { checked } = req.body;
    const todo = todos.find(item => item.id === id);
    if (!todo) {
        return resp.status(404).send("Todo not found");
    }
    if (typeof checked !== "boolean") {
        return resp.status(400).send("checked must be boolean");
    }
    todo.checked = checked;
    resp.send(todo);
});

app.delete("/todos/:id", (req, resp) => {
    const id = +req.params.id;
    const todoExists = todos.some(item => item.id === id);
    if (!todoExists) {
        return resp.status(404).send("Todo not found");
    }
    todos = todos.filter(item => item.id !== id);
    resp.json({ message: `Deleted id:${id} successfully.`, todos});
});



app.listen(port,()=>{console.log("App is listening on port:", port);});