const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());          
app.use(express.json());  


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' ansluten till atlas'))
  .catch(err => console.error('gick inte att ansluta ', err));


app.get('/', (req, res) => {
  res.send('servern fungerar');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servern har startat och körs på http://localhost:${PORT}`);
});