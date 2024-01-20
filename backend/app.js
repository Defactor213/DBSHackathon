const express = require('express')
const cors = require('cors')

const itineraryRoutes = require('./routes/itineraryRoutes')

const app = express();
const PORT = process.env.PORT ?? 8000;


app.use(cors());
app.use(express.json());

// /itenary/<w/e routes> 

// user/user
app.use('/itinerary', itineraryRoutes)

app.listen(PORT, () => console.log(`Server running on  ${PORT}`));

