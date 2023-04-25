const {Configuration, OpenAIApi} = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
    res.send('Welcome to the CROSSFIT API')
})

app.post('/message', (req, res) => {
   
    const response = openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: req.body.message }],
      })

    response.then((data) => {
        let messageObj = {message: data.data.choices[0].message.content};
        

        res.send(messageObj);
        
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));