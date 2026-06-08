const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// hämta från seed
const Room = require('./models/Room');
const Sensor = require('./models/Sensor');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('ansluten till mongodb atlas'))
  .catch(err => console.error('Kunde inte ansluta till MongoDB:', err));

// Bas-URL för att testa att servern lever
app.get('/', (req, res) => {
  res.send('Smart Home API funkar');
});



app.get('/api/rooms', async (req, res) => {
  try {
    // Hämta alla rum och alla sensorer från Atlas samtidigt
    const rooms = await Room.find();
    const sensors = await Sensor.find();

   
    const completeData = rooms.map(room => {
      
      // Hitta sensor för rummet med room ID 
      const roomSensors = sensors.filter(sensor => sensor.roomId.toString() === room._id.toString());
      
      // kompinera rumsdata  
      return {
        _id: room._id,
        name: room.name,
        floor: room.floor,
        sensors: roomSensors 
      };
    });

    // skicka data till frontend 
    res.json(completeData);

  } catch (error) {
    console.error("Fel vid hämtning av data:", error);
    res.status(500).json({ message: "Serverfel vid hämtning av rum" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});
