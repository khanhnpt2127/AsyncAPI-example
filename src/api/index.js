'use strict';

const express = require('express');
const app = express();
const hermes = require('hermesjs')();
const buffer2string = require('./middlewares/buffer2string');
const string2json = require('./middlewares/string2json');
const logger = require('./middlewares/logger');
const MqttAdapter = require('./adapters/mqtt');
const streetlights = require('./routes/streetlights.js');

hermes.add('broker', MqttAdapter);

hermes.on('broker:ready', ({name}) => {
  console.log(`${name} is listening...`);
//.  console.log(`${host_url} is host`);
});

hermes.use(buffer2string);
hermes.use(string2json);
hermes.use(logger);

hermes.use(streetlights);

hermes.use((err, message, next) => {
  console.error(err);
  next();
});




app.use(express.json())
app.use(express.urlencoded())

app.use( express.static( __dirname + '/public' ));
app.get('/', function (req, res) {
   res.sendFile(__dirname + 'index.html');
})

app.post('/', function (req, res) {
	hermes.from.client.send({
  topic: 'hello',
  payload: req.body
});
res.sendStatus(200).end();
})


app.listen(3000,function(){
  console.log("Node Server is running");
})


hermes.listen();
