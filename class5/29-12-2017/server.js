const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token, apikey');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if ('OPTIONS' == req.method) return res.sendStatus(200);
    return next();
});

const todosLists = [];
let state = {};
app.put('/addtodolist', (req, res) => {
  console.info('addtodolist called: ', req.body);
  todosLists.push(req.body);
  res.json({status: 'ok'});
});

app.get('/todolist', (req, res) => {
  res.json(todosLists);
});

app.put('/addtodoitem', (req, res) => {
  console.info('addtodoitem called: ', req.body);
  res.json({status: 'ok'});
});


app.put('/state', (req, res) => {
  state = req.body;
  res.json(state);
});

server.listen(5000, () => console.info('ready on port *:5000'));
