const http = require('http');
const fs = require('fs');
const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('mongodb://127.0.0.1/todos', ['todos', 'todoslist']);
const app = express();
const server = http.createServer(app);
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') return res.end();
  if (req.headers && req.headers['x-forwarded-for']) {
     const parts = req.headers['x-forwarded-for'].split(',');
     req.realip = parts[0];
   } else req.realip = req.ip;

  return next();
});

app.use(bodyParser.json());

app.get('*', (req, res) => {
  const module =  req.url.slice(1);
  db[module].find({}, {}, (err, docs)=> {
    if (err) return res.json({ error: true});
    res.json(docs);
  })
});

app.get('/', (req, res)=> res.end('bye bye'));

app.put('*', (req, res) => {
  const module = req.url.slice(1);
  req.body.added = new Date();
  db[module].insert(req.body, (err, doc)=> {
    if (err) return res.json({ err });
    res.json(doc);
  });
});

app.put('/', (req, res)=> res.json({module: false}));

server.listen(5000, ()=> console.info('ready'));
