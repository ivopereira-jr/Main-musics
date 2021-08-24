const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { filter } = req.query

    if(filter) {
      const { data } = await axios(`https://api.deezer.com/${filter}`)
      
      return res.json(data)
    } 

    const { data } = await axios('https://api.deezer.com/chart')
      
    return res.json(data)
  
  } catch (err) {
    console.error(`Xiii deu algo errado ${err}`)
  }
});

app.listen('3333');
