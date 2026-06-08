const mongoose = require('mongoose');
require('dotenv').config(); 

const Room = require('./models/Room');
const Sensor = require('./models/Sensor');

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seedRandomData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Ansluten till Atlas! Rensar gamla data...");
    
    // Tömmer databasen så ni inte får dubbletter varje gång ni testar
    await Room.deleteMany({});
    await Sensor.deleteMany({});

    // Skapa 4 rum
    const rumSkaSkapas = [
      { name: "Serverrum", floor: "Källare" },
      { name: "Vardagsrum", floor: "Våning 1" },
      { name: "Kök", floor: "Våning 1" },
      { name: "Kontor", floor: "Våning 2" }
    ];

    const skapadeRum = await Room.create(rumSkaSkapas);
    console.log("4 rum har skapats i molnet!");

    // Loopa igenom rummen och slumpa sensorer till varje rum
    for (const rum of skapadeRum) {
      const slumpadTemp = getRandomNumber(15, 35);
      const tempStatus = slumpadTemp > 28 ? "Varning" : "Aktiv";

      // Skapa temperatursensor kopplad till rummet
      await Sensor.create({
        roomId: rum._id, 
        type: "Temperatur",
        value: `${slumpadTemp}°C`,
        status: tempStatus
      });

      // Skapa luftfuktighetssensor kopplad till rummet
      const slumpadFukt = getRandomNumber(30, 65);
      await Sensor.create({
        roomId: rum._id,
        type: "Luftfuktighet",
        value: `${slumpadFukt}%`,
        status: "Aktiv"
      });
    }

    console.log("data har  skickats till Atlas ");

  } catch (error) {
    console.error("Något gick snett under seedningen:", error);
  } finally {
    mongoose.connection.close(); // Stäng anslutningen
  }
}

seedRandomData();